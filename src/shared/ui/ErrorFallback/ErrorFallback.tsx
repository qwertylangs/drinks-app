import { Link } from 'react-router-dom';
import styles from './ErrorFallback.module.scss';

type ErrorFallbackProps = {
  title?: string;
  description?: string;
  fallbackLink?: string;
  fallbackLabel?: string;
};

export const ErrorFallback = ({
  title = 'Упс! Что-то пошло не так.',
  description = 'Не удалось загрузить напиток. Возможно, он не существует.',
  fallbackLink = '/margarita',
  fallbackLabel = 'Перейти к Margarita',
}: ErrorFallbackProps) => {
  return (
    <div className={styles.error}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <Link to={fallbackLink} className={styles.link}>
        {fallbackLabel}
      </Link>
    </div>
  );
};
