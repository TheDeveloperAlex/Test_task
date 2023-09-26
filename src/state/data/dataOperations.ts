import { setAllPaginationPages } from "../mainSettings/mainSettingsState";
import { setData, setLoading } from "./dataState";

export async function getOffersData(page: number = 1) {
  setLoading(true);
  try {
    const response = await fetch(`http://localhost:8080/api/sale?page=${page}`);
    const result = await response.json();
    setData(result);
    setLoading(false);
  } catch (err) {
    console.error(err);
    setLoading(false);
  }
}

export async function getAllPaginationPages() {
  try {
    const response = await fetch(`http://localhost:8080/api/sale/pages`);
    const result = await response.json();
    setAllPaginationPages(result);
  } catch (err) {
    console.error(err);
  }
}
