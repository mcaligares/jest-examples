export function sum(a, b) {
  return a + b;
}

export function hello(toUpper: (a: string) => string, name: string) {
  return toUpper(name)
}

export async function promesa() {
  return 5;
}