import React from "react";

import Slider from "react-slick";

import "./OfferItem.css";
import OfferItemSlider from "./OfferItemSlider";

type offerItemProps = {
  id: string;
  description: string;
  locality: string;
  price: string;
  images: string[];
}; /* use `interface` if exporting so that consumers can extend */

export default function OfferItem({
  id,
  description,
  locality,
  price,
  images,
}: offerItemProps) {
  return (
    <div id={id} className={"offerItem"}>
      <OfferItemSlider id={id} data={images} />
      <div className="offerItem-content-wrapper">
        <h2 className="offerItem-header">{description}</h2>
        <p className="offerItem-price">{price}</p>
        <p className="offerItem-locality">{locality}</p>
        <div className="offers-item-border"></div>
      </div>
    </div>
  );
}
