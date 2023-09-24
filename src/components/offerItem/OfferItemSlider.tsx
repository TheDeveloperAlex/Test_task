import React from "react";
import Slider from "react-slick";
import "./OfferItemSlider.css";

type OfferItemSliderProps = {
  data: string[];
  id: number | string;
};

export default function OfferItemSlider({ data, id }: OfferItemSliderProps) {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    arrows: false,
    dots: true,
  };

  return (
    <div className="offerItem-slider">
      <Slider {...settings}>
        {data.map((item, i) => {
          return (
            <div>
              <div className="offerItem-slider-image-wrapper">
                <img
                  key={`${id}_${i}`}
                  src={item}
                  className={"offerItem-slider-image"}
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
