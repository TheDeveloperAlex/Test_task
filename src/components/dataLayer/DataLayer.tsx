// import  { useEffect } from "react";
import React, { useEffect } from "react";

import { useStoreMap } from "effector-react";
import $mainSettings from "../../state/mainSettings/mainSettingsState";
import { getOffersData } from "../../state/data/dataOperations";

export default function DataLayer() {
  const page = useStoreMap({
    store: $mainSettings,
    keys: [],
    fn: (state) => state.paginationPage,
  });

  useEffect(() => {
    getOffersData(page);
  }, [page]);

  return <></>;
}
