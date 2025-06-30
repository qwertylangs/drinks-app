import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetDrinksQuery } from '../../model/services/drinks';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { setSelectedCocktail } from '@/app/providers/StoreProvider/config/appSlice';

import { DrinkDetails } from '@/entities/DrinkDetails';
import { DrinkThumb } from '@/entities/DrinkThumb';
import { DrinkVariantTabs } from '@/features/DrinkVariantTabs';
import { useActiveDrink } from '../../model/hooks';
import styles from './DrinksWidget.module.scss';
import { DRINKS_CODES } from '@/entities/DrinksList/model/constants';
import { ErrorFallback } from '@/shared/ui/ErrorFallback';
import { Loader } from '@/shared/ui/Loader';

export const DrinksWidget = () => {
  const params = useParams();
  const cocktailCode = params.cocktailCode as DRINKS_CODES || DRINKS_CODES.MARGARITA;

  const cocktailQuery = useGetDrinksQuery(cocktailCode);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSelectedCocktail(cocktailCode));
  }, [cocktailCode, dispatch]);

  const { data, error, isLoading } = cocktailQuery;

  const { activeDrink, setActiveDrink } = useActiveDrink({
    drinks: data?.drinks || [],
    isLoading,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error || !data?.drinks || !activeDrink) {
    return <ErrorFallback />;
  }

  return (
    <>
      <DrinkVariantTabs
        drinks={data.drinks}
        onVariantChange={setActiveDrink}
      />

      <div className={styles.main}>
        <DrinkDetails drink={activeDrink} />
        <DrinkThumb
          imgSrc={activeDrink.strDrinkThumb}
          drinkName={activeDrink.strDrink}
        />
      </div>
    </>
  );
};
