import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DRINKS_CODES } from '@/entities/DrinksList/model/constants';
import { DrinksWidget } from '@/widgets/DrinksWidget/ui/DrinksWidget/DrinksWidget';

const MainPage = () => {
  const { cocktailCode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!cocktailCode) {
      navigate(DRINKS_CODES.MARGARITA);
    }
  }, [cocktailCode, navigate]);

  return (
    <DrinksWidget />
  );
};

export default MainPage;
