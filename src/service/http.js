import axios from 'axios'

const beers = axios.create({
  baseURL: 'https://api.punkapi.com/v2',
  timeout: 10000
})

const starwars = axios.create({
  baseURL: 'https://swapi.co/api/planets/',
  timeout: 10000
})

export {beers}
export {starwars}
