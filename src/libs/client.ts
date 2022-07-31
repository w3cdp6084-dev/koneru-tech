import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'koneru-tech',
  apiKey: process.env.API_KEY || '85a8ee908fc041cdbccaaa940c1bb031bc7f',
})