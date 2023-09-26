//! Чисто Html
// const cheerio = require("cheerio");
// const axios = require("axios");

// const items = [];

// let page = 1;
// const url = `https://www.sreality.cz/en/directory/moje-nemovitost-u-more-praha-holesovice/18345/estates?page=${page}`;

// async function getGenre() {
//   try {
//     const response = await axios.get(url);
//     console.log(response.data);
//   } catch (err) {
//     console.error(err);
//   }
// }

// getGenre();

const puppeteer = require("puppeteer");
const db = require("./server/db");

const pageData = [];

async function scrap(page) {
  const url = `https://www.sreality.cz/en/directory/moje-nemovitost-u-more-praha-holesovice/18345/estates?page=${page}`;
  await puppeteer
    .launch()
    .then(async (browser) => {
      const page = await browser.newPage();
      await page.goto(url);
      //Wait for the page to be loaded
      await page.waitForSelector(".dir-property-list > div img");

      let dataPage = await page.evaluate(() => {
        const initImagesUrls = [];
        const images = document.querySelectorAll(
          ".dir-property-list > div a > img"
        );
        for (let i = 0; i < images.length; i++) {
          const element = images[i];
          initImagesUrls.push(element.src);
        }

        const imagesUrls = [];

        const delimiter =
          "https://d48-a.sdn.cz/d_48/c_img_H_G/PGWD2g.png?fl=res,140,140,3,ffffff";

        let middleArray = [];
        for (let i = 0; i < initImagesUrls.length; i++) {
          const curImage = initImagesUrls[i];
          if (curImage === delimiter) {
            imagesUrls.push(middleArray);
            middleArray = [];
          } else {
            middleArray.push(curImage);
          }
        }

        // ==========================================

        const spansData = [];

        const spans = document.querySelectorAll(
          ".dir-property-list > div > div h2 span"
        );

        for (let i = 0; i < spans.length; i++) {
          const element = spans[i];
          spansData.push(element.textContent);
        }

        // ===================

        const localityData = [];

        const locality = document.querySelectorAll(
          ".dir-property-list > div > div .locality"
        );

        for (let i = 0; i < locality.length; i++) {
          const element = locality[i];
          localityData.push(element.textContent);
        }

        // ===================
        const priceData = [];

        const price = document.querySelectorAll(
          ".dir-property-list > div > div .price > span"
        );

        for (let i = 0; i < price.length; i++) {
          const element = price[i];
          priceData.push(element.textContent);
        }

        // ==========================================

        const result = [];

        for (let i = 0; i < imagesUrls.length; i++) {
          const imagesArray = imagesUrls[i];
          const resPrice = priceData[i];
          const resLocality = localityData[i];
          const resSpan = spansData[i];

          result.push({
            price: resPrice,
            locality: resLocality,
            description: resSpan,
            images: imagesArray,
          });
        }

        return result;
      });

      pageData.push(...dataPage);

      // closing the browser
      await browser.close();
    })
    .catch(function (err) {
      console.error(err);
    });
}

const getData = async (resolve, reject, count) => {
  await scrap(count);

  count++;

  if (pageData.length < 500) {
    getData(resolve, reject, count);
  } else {
    return resolve();
  }
};

const runScript = async () => {
  await new Promise((r, j) => getData(r, j, 1));
  pageData.map((item, i) => {
    db.query(
      "INSERT INTO sreality (price, locality, description, images) VALUES ($1::text, $2::text, $3::text, $4::text[]);",
      [item.price, item.locality, item.description, item.images]
    );
  });
};

runScript();
