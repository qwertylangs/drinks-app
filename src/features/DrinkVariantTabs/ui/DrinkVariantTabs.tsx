import classNames from 'classnames';
import { Drink } from '@/entities/DrinkDetails/model/types/drink';
import { useVariantTabs } from '../model/hooks';
import styles from './DrinkVariantTabs.module.scss';

interface DrinkVariantTabsProps {
  className?: string;
  drinks: Drink[];
  onVariantChange?: (drink: Drink) => void;
}

export const DrinkVariantTabs = ({ className, drinks, onVariantChange }: DrinkVariantTabsProps) => {
  const {
    activeVariantIndex, setActiveVariantIndex, variants,
  } = useVariantTabs({
    drinks,
  });

  const handleTabClick = (index: number) => {
    setActiveVariantIndex(index);
    onVariantChange?.(drinks[index]);
  };

  if (!variants.length || variants.length === 1) {
    return null;
  }

  return (
    <div className={classNames(styles.tabs, className)}>
      <div className={styles.tabsHeader}>
        {variants.map((variant) => (
          <button
            key={variant.id}
            className={classNames(
              styles.tabItem,
              { [styles.tabItemActive]: variant.index === activeVariantIndex },
            )}
            onClick={() => handleTabClick(variant.index)}
            type="button"
          >
            {variant.name}
          </button>
        ))}
      </div>
    </div>
  );
};
