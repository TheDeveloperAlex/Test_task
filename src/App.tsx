import React from "react";
import "./App.css";
import Header from "./components/header";
import Offers from "./components/offers";
import Pagination from "./components/pagination";
import DataLayer from "./components/dataLayer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Offers />
        <Pagination />
        <DataLayer />
      </main>
    </div>
  );
}

export default App;
