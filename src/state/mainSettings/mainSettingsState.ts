import { createStore, createEvent } from "effector";

interface MainSettingsState {
  paginationPage: number;
}

const initialStore:MainSettingsState = {
    paginationPage: 1,
}

const setPaginationPage = createEvent();

const $mainSettings = createStore<MainSettingsState>(initialStore)
    .on(<any>setPaginationPage, (store, page: number) => {
        return {
            ...store,
            page,
        };
    });

export default $mainSettings;
