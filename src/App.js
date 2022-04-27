import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Search from "./components/Search";
import Joke from "./components/Joke";

import "./App.css";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [joke, setJoke] = useState();

  useEffect(() => {
    fetch(`https://v2.jokeapi.dev/joke/Any?contains=${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        setJoke({
          setup: data.setup,
          delivery: data.delivery,
        });
      });
  }, [searchValue]);

  const onSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="App">
      <Header />
      <Search searchValue={searchValue} onChange={onSearchChange} />
      {searchValue && joke && <Joke joke={joke} />}
    </div>
  );
};

export default App;
