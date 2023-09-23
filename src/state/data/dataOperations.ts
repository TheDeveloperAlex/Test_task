import { setLoading } from "./dataState";

export const getOffersData = (page: number = 1) => {
  setLoading(true);

  // let headers = new Headers();

  // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  // headers.append('Access-Control-Allow-Credentials', 'true');

  fetch(`http://localhost:8080/api/sale?page=${page}`, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      setLoading(false);
    });
};
