import React from "react";

import "./ButtonPagination.css";

type buttonPaginationProps = {
  children?: any;
  onClick?: Function;
  active?: boolean;
  icon?: boolean;
  rotate?: number;
};

export default function ButtonPagination({
  children,
  onClick,
  active = false,
  icon,
  rotate,
}: buttonPaginationProps) {
  const className = [
    "button-pagination",
    //
    active ? "button-pagination-active" : "",
  ].join(" ");

  const wrapperFn = (e: any) => {
    if (typeof onClick === "function") {
      onClick(e);
    }
  };

  return (
    <button className={className} onClick={wrapperFn} disabled={active}>
      {children}
      {icon && (
        <div
          className="button-pagination-icon-wrapper"
          style={{ transform: `rotate(${rotate}deg)` }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            style={{ width: "20px", height: "16px" }}
          >
            <path
              d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z"
              data-name="4-Arrow Left"
            />
          </svg>
        </div>
      )}
    </button>
  );
}
