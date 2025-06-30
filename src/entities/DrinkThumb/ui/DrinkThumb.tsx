import styles from './DrinkThumb.module.scss';

type DrinkThumbProps = {
    imgSrc: string;
    drinkName: string;
}

export const DrinkThumb = ({ imgSrc, drinkName }: DrinkThumbProps) => {
  return (
    <div className={styles.thumb}>
      <img src={imgSrc} alt={drinkName} />
    </div>
  );
};
