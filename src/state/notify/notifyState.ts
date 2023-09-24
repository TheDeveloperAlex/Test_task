import { createStore, createEvent } from "effector";

interface notifyState {
  active: boolean;
  id: string | null;
  data: any;
}

interface openModalFn {
  id: string;
  data: any;
}

const initialStore: notifyState = {
  active: false,
  id: null,
  data: null,
};

export const openModal = createEvent<openModalFn>();
export const closeModal = createEvent();

const $notify = createStore<notifyState>(initialStore)
  .on(openModal, (store, { id, data }) => {
    return {
      ...store,
      active: true,
      id,
      data,
    };
  })
  .on(closeModal, (store) => {
    return {
      ...store,
      active: false,
      id: null,
      data: null,
    };
  });

export default $notify;
