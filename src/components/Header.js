import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "../modules/Header.module.scss";
// import { Link, useHistory } from "react-router-dom";

const Header = () => {
  return (
    <div data-cy="app-name" className={classes.header}>
      <div className={classes.header__logo}>
        <a href="!#">Movie App</a>
      </div>
    </div>
  );
};

export default Header;
