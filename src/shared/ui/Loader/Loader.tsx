import styles from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.loaderContainer} data-testid="loader">
      <span className={styles.loader} />
    </div>
  );
};
