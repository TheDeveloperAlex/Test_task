import React from "react";
import "./App.css";
import Header from "./components/header";
import Offers from "./components/offers";
import Pagination from "./components/pagination";
import DataLayer from "./components/dataLayer";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App ">
      <Header />
      <main className="container">
        <Offers />
        <Pagination />
        <DataLayer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
