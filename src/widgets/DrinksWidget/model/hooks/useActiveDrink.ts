import { useState, useEffect, useCallback } from 'react';
import { Drink } from '@/entities/DrinkDetails/model/types/drink';
import { useUrlParams } from '@/shared/lib/hooks/useUrlParams';

interface UseActiveDrinkOptions {
  drinks: Drink[];
  isLoading: boolean;
}

interface UseActiveDrinkResult {
  activeDrink: Drink | null;
  setActiveDrink: (drink: Drink) => void;
}

export const useActiveDrink = ({ drinks, isLoading }: UseActiveDrinkOptions): UseActiveDrinkResult => {
  const { getParam } = useUrlParams();
  const [activeDrink, setActiveDrinkState] = useState<Drink | null>(null);

  useEffect(() => {
    if (isLoading || !drinks?.length) return;

    const variantParam = getParam('variant');
    let index = 0;

    if (variantParam !== null) {
      const parsedIndex = parseInt(variantParam, 10);
      if (!Number.isNaN(parsedIndex) && parsedIndex >= 0 && parsedIndex < drinks.length) {
        index = parsedIndex;
      }
    }

    setActiveDrinkState(drinks[index]);
  }, [drinks, isLoading, getParam]);

  const setActiveDrink = useCallback((drink: Drink) => {
    setActiveDrinkState(drink);
  }, []);

  return {
    activeDrink,
    setActiveDrink,
  };
};
