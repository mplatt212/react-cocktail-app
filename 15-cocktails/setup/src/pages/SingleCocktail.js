import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState([]);
  const { id } = useParams();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      const { drinks } = data;
      console.log(drinks);
      
      if (drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: alcoholic,
          strGlass: glass,
          strCategory: category,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5
        } = drinks[0];

        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5
        ];

        const newDrinks = {
          name,
          image,
          alcoholic,
          glass,
          category,
          instructions,
          ingredients
        };
        setCocktail(newDrinks); 
      } else {
        setCocktail(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  },[id]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h2>No cocktail found.</h2>;
  } else {
    
    const {
      name,
      image,
      alcoholic,
      glass,
      category,
      instructions,
      ingredients
    } = cocktail;

    return (
      <section className="section cocktail-section">
        <Link to="/">Back Home</Link>
        <div className="section-title">{name}</div>
        <div className="drink">
          <img src={image} alt={name} />
          <div className="drink-info">
            <p>
              <span className="drink-data">Name: </span>
              {name}
            </p>
            <p>
              <span className="drink-data">Category: </span>
              {category}
            </p>
            <p>
              <span className="drink-data">Info: </span>
              {alcoholic}
            </p>
            <p>
              <span className="drink-data">Glass: </span>
              {glass}
            </p>
            <p>
              <span className="drink-data">Instructions: </span>
              {instructions}
            </p>
            <p>
              <span className="drink-data">Ingredients: </span>
              {/* {ingredients.map((item,index) => {
                return item ? <span key={index}>{item}</span> : null;
              })} */}
            </p>
          </div>
        </div>
      </section>
    );
  }
};

export default SingleCocktail;
