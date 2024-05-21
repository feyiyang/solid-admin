import { useFetch } from './mix'

const charts = (params?: any) => {
  return useFetch({ url: '/api/home/data', method: 'GET', params })
}

export const homeServe = {
  charts
}
