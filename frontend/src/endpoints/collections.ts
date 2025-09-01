import type { Endpoint, PayloadRequest } from 'payload'

export const collectionsEndpoint: Endpoint = {
  path: '/collections',
  method: 'get',
  handler: async (req: PayloadRequest) => {
    const { payload } = req
    const { permissions } = await payload.auth({ req, headers: req.headers })

    // Get all collections from config
    const collections = permissions.collections
    if (!collections) {
      return Response.json({})
    }

    return Response.json(collections)
  },
}
