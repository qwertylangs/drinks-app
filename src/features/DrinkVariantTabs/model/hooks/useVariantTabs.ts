import { useCallback, useMemo } from 'react';
import { Drink } from '@/entities/DrinkDetails/model/types/drink';
import { useUrlParams } from '@/shared/lib/hooks/useUrlParams';

interface UseVariantTabsOptions {
   drinks: Drink[];
}

interface UseVariantTabsResult {
    activeVariantIndex: number;
    setActiveVariantIndex: (index: number) => void;
    activeDrink: Drink;
    variants: Array<{ id: string; name: string; index: number }>;
}

export const useVariantTabs = ({ drinks }: UseVariantTabsOptions): UseVariantTabsResult => {
  const { getParam, setParam } = useUrlParams();

  const activeVariantIndex = useMemo(() => {
    const variantParam = getParam('variant');
    if (variantParam !== null) {
      const index = parseInt(variantParam, 10);
      return !Number.isNaN(index) && index >= 0 && index < drinks.length ? index : 0;
    }
    return 0;
  }, [getParam, drinks.length]);

  const variants = useMemo(() => {
    return drinks.map((drink, index) => ({
      id: drink.idDrink,
      name: drink.strDrink,
      index,
    }));
  }, [drinks]);

  const setActiveVariantIndex = useCallback((index: number) => {
    if (index >= 0 && index < drinks.length) {
      setParam('variant', index.toString());
    }
  }, [drinks.length, setParam]);

  const activeDrink = useMemo(() => {
    return drinks[activeVariantIndex] || drinks[0];
  }, [drinks, activeVariantIndex]);

  return {
    activeVariantIndex,
    setActiveVariantIndex,
    activeDrink,
    variants,
  };
};
