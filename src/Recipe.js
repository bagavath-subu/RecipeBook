import React from "react";
import "./Recipe.css";
import "tachyons";

const Recipe = ({ title, cal, image, ingredients }) => {
  return (
    <div className="recipes grow">
      <h1>{title}</h1>
      <p>{cal} cal</p>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <img className="image" src={image} alt="" />
    </div>
  );
};

export default Recipe;
