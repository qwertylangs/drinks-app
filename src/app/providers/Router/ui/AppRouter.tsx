import { Navigate, Route, Routes } from 'react-router-dom';

import { NotFoundPage } from '@/pages/NotFoundPage';
import { MainPage } from '@/pages/MainPage';
import { DRINKS_CODES } from '@/entities/DrinksList/model/constants';

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Navigate to={`/${DRINKS_CODES.MARGARITA}`} replace />} />

      <Route path=":cocktailCode" element={<MainPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
