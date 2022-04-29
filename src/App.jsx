import React, { useState, useEffect } from 'react';

import Categories from './components/Categories';
import Header from './components/Header';
import Joke from './components/Joke';
import Search from './components/Search';

import './App.css';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [joke, setJoke] = useState();
  const [categories, setCategories] = useState([
    {
      label: 'Programming',
      checked: false,
    },
    {
      label: 'Miscellaneous',
      checked: false,
    },
    {
      label: 'Dark',
      checked: false,
    },
    {
      label: 'Pun',
      checked: false,
    },
    {
      label: 'Spooky',
      checked: false,
    },
    {
      label: 'Christmas',
      checked: false,
    },
  ]);

  useEffect(() => {
    fetch(`https://v2.jokeapi.dev/joke/Any?contains=${searchValue}`)
      .then(res => res.json())
      .then(data => {
        setJoke({
          setup: data.setup,
          delivery: data.delivery,
        });
      });
  }, [searchValue]);

  const onSearchChange = e => {
    setSearchValue(e.target.value);
  };

  const onCategoryChange = (label, checked) =>
    setCategories(current =>
      current.map(category =>
        category.label === label ? { label, checked } : category,
      ),
    );

  return (
    <div className="App">
      <Header />
      <Search searchValue={searchValue} onChange={onSearchChange} />
      <Categories categories={categories} onCategoryChange={onCategoryChange} />
      {searchValue && joke && <Joke joke={joke} />}
    </div>
  );
};

export default App;
