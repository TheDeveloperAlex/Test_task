import { createStore, createEvent } from "effector";

interface dataItem {
    id: string;
    price: string;
    locality: string;
    description: string;
    images: string[];
}

interface dataState {
    data: dataItem[];
    loading: boolean;
}


const initialStore:dataState = {
    data: [],
    loading: false,
}

export const setData = createEvent<any>();
export const setLoading = createEvent<boolean>();

const $data = createStore(initialStore)
    .on(setData, (store, data:dataItem[]) => {
        return {
            ...store,
            data,
        };
    })
    .on(setLoading, (store, loading: boolean) => {
        return {
            ...store,
            loading,
        };
    });

export default $data;
