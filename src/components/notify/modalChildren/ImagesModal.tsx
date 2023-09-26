import React from "react";
import { useStoreMap } from "effector-react";
import $notify, { closeModal } from "../../../state/notify/notifyState";

import "./ImagesModal.css";

export default function ImagesModal() {
  const data = useStoreMap({
    store: $notify,
    keys: [],
    fn: (state) => state.data,
  });

  const onClick = () => {
    closeModal();
  };

  return (
    <div className="images-modal">
      <button className="images-modal-close-button" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 50 50"
          style={{ width: "20px", height: "20px" }}
        >
          <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
        </svg>
      </button>
      <img src={data} className={"images-modal-close-image"} />
    </div>
  );
}
