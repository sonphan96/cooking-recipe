import React from 'react';
import styles from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
    return(
        <div className={styles.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map((ingredient,i) => (
                    <li key={Math.random()}>{ingredient.text}</li>
                ))}
            </ol>
            <p>Carlories: {calories.toFixed(2)}</p>
            <img src={image} className={styles.image} alt="img recipe" />
        </div>
        
    );
};

export default Recipe;