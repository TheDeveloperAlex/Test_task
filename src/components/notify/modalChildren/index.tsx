import React from "react";
import { closeModal } from "../../../state/notify/notifyState";
import ImagesModal from "./ImagesModal";

interface modals {}

const modals = [{ id: "images", content: <ImagesModal /> }];

export const getModalChildren = (id: string | null) => {
  if (!id) {
    closeModal();
  } else {
    const modalChildren = modals.find((item) => {
      return item.id === id;
    });
    return modalChildren ? modalChildren.content : closeModal();
  }
};
