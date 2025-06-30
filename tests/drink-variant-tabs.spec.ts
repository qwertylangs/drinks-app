import { test, expect } from '@playwright/test';

test.describe('DrinkVariantTabs', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('**/api/json/v1/1/search.php*', async (route) => {
      const mockDrinks = [
        {
          idDrink: '1',
          strDrink: 'Mojito',
          strCategory: 'Cocktail',
          strAlcoholic: 'Alcoholic',
          strGlass: 'Highball glass',
          strInstructions: 'Muddle mint leaves with sugar and lime juice...',
          strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg',
          strIngredient1: 'White rum',
          strIngredient2: 'Lime',
          strIngredient3: 'Sugar',
          strIngredient4: 'Mint',
          strIngredient5: 'Soda water',
          strMeasure1: '2-3 oz',
          strMeasure2: 'Juice of 1',
          strMeasure3: '2 tsp',
          strMeasure4: '2-4',
          strMeasure5: 'Top up with',
        },
        {
          idDrink: '2',
          strDrink: 'Virgin Mojito',
          strCategory: 'Cocktail',
          strAlcoholic: 'Non alcoholic',
          strGlass: 'Highball glass',
          strInstructions: 'Muddle mint leaves with sugar and lime juice...',
          strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/7lwl3m01504819236.jpg',
          strIngredient1: 'Lime',
          strIngredient2: 'Sugar',
          strIngredient3: 'Mint',
          strIngredient4: 'Soda water',
          strMeasure1: 'Juice of 1',
          strMeasure2: '2 tsp',
          strMeasure3: '2-4',
          strMeasure4: 'Top up with',
        },
      ];

      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ drinks: mockDrinks }),
      });
    });

    await page.goto('/');
  });

  test('should display drink variant tabs', async ({ page }) => {
    await expect(page.getByText('Mojito')).toBeVisible();
    await expect(page.getByText('Virgin Mojito')).toBeVisible();
  });

  // другие тесты
});
