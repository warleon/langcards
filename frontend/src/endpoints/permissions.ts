import type { Endpoint, PayloadRequest } from 'payload'

export const permissionsEndpoint: Endpoint = {
  path: '/permissions',
  method: 'get',
  handler: async (req: PayloadRequest) => {
    const { payload } = req
    const { permissions } = await payload.auth({ req, headers: req.headers })

    const collections = permissions.collections
    const globals = permissions.globals

    return Response.json({ collections, globals })
  },
}
