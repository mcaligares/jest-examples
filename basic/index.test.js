const sum = require('./math')

test('test funcion sum', () => {
  const result = sum(5, 5)
  expect(result).toBe(10)
})

test.each([
  [5, 5, 10],
  [5, 10, 15]
])('test funcion sum', (a, b, result) => {
  expect(sum(a, b)).toBe(result)
})
