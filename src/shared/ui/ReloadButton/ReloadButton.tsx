import React from 'react';
import styles from './ReloadButton.module.scss';

export const ReloadButton = () => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <button type="button" className={styles.button} onClick={handleClick}>
      Перезагрузить страницу
    </button>
  );
};
