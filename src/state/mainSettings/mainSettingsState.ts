import { createStore, createEvent } from "effector";

interface MainSettingsState {
  paginationPage: number;
  allPaginationPages: number;
  isLoading: boolean;
}

const initialStore: MainSettingsState = {
  paginationPage: 1,
  allPaginationPages: 1,
  isLoading: false,
};

export const setPaginationPage = createEvent<number>();
export const setAllPaginationPages = createEvent<number>();
export const setIsLoading = createEvent<boolean>();

const $mainSettings = createStore<MainSettingsState>(initialStore)
  .on(setPaginationPage, (store, page: number) => {
    return {
      ...store,
      paginationPage: page,
    };
  })
  .on(setAllPaginationPages, (store, pages: number) => {
    return {
      ...store,
      allPaginationPages: pages,
    };
  })
  .on(setIsLoading, (store, isLoading: boolean) => {
    return {
      ...store,
      isLoading,
    };
  });

export default $mainSettings;
