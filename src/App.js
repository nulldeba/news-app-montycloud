import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import Search from "./components/Search";
import NewsCard from "./components/NewsCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Search></Search>
      <NewsCard></NewsCard>
    </div>
  );
}

export default App;
