import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Recipe from "./Recipe";
import Tilt from "react-tilt";
import ScrollTop from "react-scrolltop-button";

import "./styles.css";

function App() {
  const appId = "9cd22749";
  const appKey = "43bd3a19864449ea2838156a3d6f83cb";

  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`
    );
    const data = await response.json();
    setRecipe(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <Tilt className="Tilt" options={{ max: 25 }}>
        <div className="Tilt-inner">
          <img
            src="https://www.freeiconspng.com/uploads/cook-book-icon-6.png"
            alt="..."
          />
        </div>
      </Tilt>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-box"
          type="text"
          placeholder="Search for recipe"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipe">
        {recipe.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            cal={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
      <ScrollTop />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
