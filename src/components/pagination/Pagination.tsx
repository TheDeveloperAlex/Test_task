import { useStoreMap } from "effector-react";
import React from "react";
import $mainSettings, {
  setPaginationPage,
} from "../../state/mainSettings/mainSettingsState";
import ButtonPagination from "../Ui/buttonPagination";

import "./Pagination.css";

export default function Pagination() {
  const allPages = useStoreMap({
    store: $mainSettings,
    keys: [],
    fn: (state) => state.allPaginationPages,
  });
  const currentPage = useStoreMap({
    store: $mainSettings,
    keys: [],
    fn: (state) => state.paginationPage,
  });

  const onClickPrevious = () => {
    setPaginationPage(currentPage - 1);
  };

  const onClickNext = () => {
    setPaginationPage(currentPage + 1);
  };

  const isActivePrevious = currentPage === 1;
  const isActiveNext = currentPage === allPages;

  return (
    <div className="pagination">
      <ButtonPagination
        onClick={onClickPrevious}
        icon
        active={isActivePrevious}
      />
      <ButtonPagination active={true}>{currentPage}</ButtonPagination>
      <ButtonPagination
        onClick={onClickNext}
        icon
        rotate={180}
        active={isActiveNext}
      />
    </div>
  );
}
