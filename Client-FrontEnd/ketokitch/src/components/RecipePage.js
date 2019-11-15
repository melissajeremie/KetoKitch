import React, { Component } from 'react';
import './style.css';

class RecipePage extends Component {
    render() {
        return (
            <article className="article">
                <img id="food_image" src="" alt="" className="img-thumbnail" />

                <div id="Ingredients_cont">
                  <h1>Ingredients</h1>
                  <ul>
                        {this.props.faveRecipe.ingredients.map ((ingredient, key) => {
                            return <li key={key}>{ingredient}</li>
                        })}
                  </ul>
                </div>
                <h1>Preparation</h1>
                <p>{this.props.faveRecipe.preparation}</p>
            </article>
        )
    }
}

export default RecipePage;
