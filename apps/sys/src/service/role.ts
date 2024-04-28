import { createFetch, withAggregation } from '@solid-primitives/fetch'
import { aggregation } from './mix'

const menus = () => {
  const [resource] = createFetch('/api/menus/show', [withAggregation(aggregation)])
  return resource
}

export const roleServe = {
  menus
}
