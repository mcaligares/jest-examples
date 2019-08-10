import { sum, hello, promesa } from '../src/math';

test('test funcion sum', () => {
  const result = sum(5, 5);
  expect(result).toBe(10);
});

test.each([
  [5, 5, 10],
  [5, 10, 15]
])('test funcion sum', (a, b, result) => {
  expect(sum(a, b)).toBe(result);
});

test('test hello function', () => {
  const unaFunc = function(a: string) {
    return a.toUpperCase();
  }
  const result = hello(unaFunc, 'pablo')
  expect(result).toEqual('PABLO')
})

test('test hello function', () => {
  const unaFunc = jest.fn()
  unaFunc.mockReturnValue('JUANCHO')
  const result = hello(unaFunc, 'pablo')
  expect(result).toEqual('JUANCHO')
  expect(unaFunc).toBeCalled()
})

test('testear una promesa', async () => {
  expect(await promesa()).toBe(5)
})

test('testear una promesa', (done) => {
  promesa().then(resultado => {
    expect(resultado).toBe(5)
    done()
  })
})
