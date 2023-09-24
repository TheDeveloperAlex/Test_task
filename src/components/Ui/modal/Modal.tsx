import React from "react";
import "./Modal.css";

type offerItemProps = {
  children: any;
  active: boolean;
  onClose?: Function | null;
}; /* use `interface` if exporting so that consumers can extend */

export default function Modal({ children, active, onClose }: offerItemProps) {
  const classNameOverlay = ["overlay", active ? "is-visible" : ""].join(" ");
  const classNameMOdal = ["modal"].join(" ");

  const wrapperClick = () => {
    if (typeof onClose === "function") {
      onClose();
    }
  };

  return (
    <div className={classNameOverlay} onClick={wrapperClick}>
      <div className={classNameMOdal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
