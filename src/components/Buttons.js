import React from "react";

import classes from "../modules/Buttons.module.scss";

export function Button({ children, type, onClick }) {
  return (
    <button
      onClick={onClick}
      className={type === "secondary" ? classes.secondary : classes.primary}
    >
      {children}
    </button>
  );
}
