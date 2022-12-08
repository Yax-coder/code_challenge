import React from "react";
import Header from "./Header";

import classes from "../modules/Layout.module.scss";

function Layout({ children }) {
  return (
    <div className={classes.header}>
      <Header />
      <div className={classes.container}>{children}</div>
    </div>
  );
}

export default Layout;
