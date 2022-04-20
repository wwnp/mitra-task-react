export const LIMIT_IMGS = 24
const API_KEY = process.env.REACT_APP_API_KEY
export const API_URL = `https://api.unsplash.com/photos/random?client_id=${API_KEY}&count=${LIMIT_IMGS}`
// export const API_URL = 'https://jsonplaceholder.typicode.com/photos' + '?_limit=' + LIMIT_IMGS
export const ruleCat = {
  1: [0, 5],
  2: [6, 11],
  3: [12, 17],
  4: [18, 23],
}

export const colorsBadge = [
  'primary',
  'success',
  'warning',
  'info',
  'dark',
]
export const stackTech = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Redux-Saga',
  'MySQL',
  'GIT',
  'TypeScript',
  'Webpack',
  'English B1 Intermediate',
]