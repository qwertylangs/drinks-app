import { Drink } from '../model/types/drink';
import styles from './DrinkDetails.module.scss';

type DrinkDetailsProps = {
  drink: Drink;
}

export const DrinkDetails = ({ drink }: DrinkDetailsProps) => {
  const {
    strDrink, strCategory, strAlcoholic, strGlass, strInstructions,
  } = drink;

  const getIngredientsAndMeasures = () => {
    const ingredients = [];

    for (let i = 1; i <= 15; i++) {
      const ingredient = drink[`strIngredient${i}` as keyof Drink];
      const measure = drink[`strMeasure${i}` as keyof Drink];

      if (ingredient) {
        ingredients.push({
          ingredient,
          measure: measure || '',
        });
      }
    }

    return ingredients;
  };

  const ingredientsWithMeasures = getIngredientsAndMeasures();
  return (
    <section className={styles.details}>
      <h2 className={styles.detailsTitle}>{strDrink}</h2>
      <p className={styles.detailsText}>
        <strong>Category:</strong>
        {strCategory}
      </p>

      <p className={styles.detailsText}>
        <strong>Alcoholic:</strong>
        {strAlcoholic}
      </p>

      <p className={styles.detailsText}>
        <strong>Glass:</strong>
        {strGlass}
      </p>

      <p className={styles.detailsText}>
        {strInstructions}
      </p>

      <div className={styles.ingredients}>
        <h3 className={styles.ingredientsTitle}>List of ingredients:</h3>
        <ul className={styles.ingredientsList}>
          {ingredientsWithMeasures.map((item, index) => (
            <li key={index} className={styles.ingredientItem}>
              <span>{item.measure}</span>
              <span>{item.ingredient}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
