import { createFetch, withAggregation } from '@solid-primitives/fetch'

export function aggregation(response: resType) {
  if (typeof response === 'string') {
    response = JSON.parse(response)
  }
  const { success, data, msg, code } = response
  if (!success) {
    console.error(msg, code)
    return new Error(msg)
  }
  return data
}
export interface resType {
  success: boolean
  data: any
  msg: string
  code: number
}

export const useFetch = (opt: optType) => {
  let { url, method, params: data } = opt
  let params = null
  if (method === 'GET') {
    params = new URLSearchParams(data)
    url += `?${params.toString()}`
  }
  return createFetch(
    url,
    {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    },
    [withAggregation(aggregation)]
  )
}

interface optType {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  headers?: Request
  params?: any
}
