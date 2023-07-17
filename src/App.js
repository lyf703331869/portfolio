import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";
import Footer from "./components/Footer";

export default function App() {
  const [pages] = useState([
    {
      name: "home",
    },
    {
      name: "about",
    },
    { name: "portfolio" },
    { name: "contact" },
    {
      name: "resume",
    },
  ]);

  const styles = {
    margin: {
      marginTop: "3.36em",
    },
  };

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </Header>
      <main style={styles.margin}>
        <Page setCurrentPage={setCurrentPage} currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}
