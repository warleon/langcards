import type { Endpoint, PayloadRequest } from 'payload'

export const reflectionEndpoint: Endpoint = {
  path: '/reflection',
  method: 'get',
  handler: async (req: PayloadRequest) => {
    const { payload } = req

    return Response.json({
      collections: payload.config.collections,
      globals: payload.config.globals,
    })
  },
}
