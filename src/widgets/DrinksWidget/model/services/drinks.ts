import { apiSlice } from '@/app/providers/StoreProvider/config/apiSlice';
import { DrinksResponse } from '../types';

export const drinksApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDrinks: builder.query<DrinksResponse, string>({
      query: (code) => ({
        url: '',
        params: {
          s: code,
        },
      }),
    }),
  }),
});

export const {
  useGetDrinksQuery,
} = drinksApiSlice;
