import React from "react";
import { useStoreMap } from "effector-react";
import $data from "../../state/data/dataState";
import OfferItem from "../offerItem";

import "./Offers.css";

export default function Offers() {
  const data = useStoreMap({
    store: $data,
    keys: [],
    fn: (state) => state.data,
  });
  const loading = useStoreMap({
    store: $data,
    keys: [],
    fn: (state) => state.loading,
  });

  console.log(data);

  return loading ? (
    <>Loading...</>
  ) : (
    <div className="offers-grid">
      {data.map((item) => {
        return <OfferItem key={item.id} {...item} />;
      })}
    </div>
  );
}
