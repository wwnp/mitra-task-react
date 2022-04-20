export const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  })
}
export function generateRandNum(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1))
}