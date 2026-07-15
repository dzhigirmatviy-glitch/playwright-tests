import { test, expect } from '@playwright/test';

test('API возвращает статус 200', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data).toHaveProperty('id', 1);
});