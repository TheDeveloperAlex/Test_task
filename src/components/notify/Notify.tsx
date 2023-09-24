import React from "react";
import { useStoreMap } from "effector-react";
import $notify from "../../state/notify/notifyState";
import Modal from "../Ui/modal";
import { getModalChildren } from "./modalChildren";

export default function Notify() {
  const active = useStoreMap({
    store: $notify,
    keys: [],
    fn: (state) => state.active,
  });
  const id = useStoreMap({
    store: $notify,
    keys: [],
    fn: (state) => state.id,
  });

  return <Modal active={active}>{getModalChildren(id)}</Modal>;
}
