import React, { useEffect, useState } from "react";
import MblNav from "./mblNav";
import WebNav from "./webNav";
const Nav = () => {
  return (
    <>
      <WebNav />
      <MblNav />
    </>
  );
};

export default Nav;
