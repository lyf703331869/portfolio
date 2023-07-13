import React, { useEffect } from "react";

export default function Nav(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  useEffect =
    (() => {
      document.title = currentPage.name;
    },
    [currentPage]);

  return <></>;
}
