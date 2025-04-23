const suma = require('../src/index');

test('suma 1 + 2 debe dar 3', () => {
  expect(suma(1, 2)).toBe(3);
});

test('suma 0 + 0 debe dar 0', () => {
  expect(suma(0, 0)).toBe(0);
});
