import type { Endpoint, PayloadRequest } from 'payload'

export const reflectionEndpoint: Endpoint = {
  path: '/reflection',
  method: 'get',
  handler: async (req: PayloadRequest) => {
    const { payload, user } = req

    if (!user) {
      return Response.json(
        { error: 'Unauthorized: You must be logged in to access this endpoint' },
        { status: 401 },
      )
    }

    return Response.json({
      collections: payload.config.collections,
      globals: payload.config.globals,
    })
  },
}
