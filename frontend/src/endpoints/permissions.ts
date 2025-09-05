import type { Endpoint, PayloadRequest } from 'payload'

export const permissionsEndpoint: Endpoint = {
  path: '/permissions',
  method: 'get',
  handler: async (req: PayloadRequest) => {
    const { payload } = req

    return Response.json({
      collections: payload.collections,
      globals: payload.globals,
    })
  },
}
