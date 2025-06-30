import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { VStack } from '@/shared/ui/Stack';
import { drinksList } from '../model/constants';

import cls from './DrinksList.module.scss';
import { getSelectedCocktail } from '@/app/providers/StoreProvider/config/appSlice';

type DrinksListProps = {
    handleLinkClick: () => void;
}

export const DrinksList = ({ handleLinkClick }: DrinksListProps) => {
  const selectedCocktail = useSelector(getSelectedCocktail);

  return (
    <VStack gap="4">
      {drinksList.map((drink) => (
        <Link
          key={drink}
          to={`/${drink}`}
          className={classNames(cls.drinksItem, { [cls.drinksItemActive]: selectedCocktail === drink })}
          onClick={handleLinkClick}
        >
          <div>
            {drink}
            {' '}
          </div>  
        </Link>
      ))}

    </VStack>
  );
};
