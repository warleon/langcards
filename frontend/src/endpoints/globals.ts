import type { Endpoint, PayloadRequest } from 'payload'

export const globalsEndpoint: Endpoint = {
  path: '/globals',
  method: 'get',
  handler: async (req: PayloadRequest) => {
    const { payload } = req
    const { permissions } = await payload.auth({ req, headers: req.headers })

    const globals = permissions.globals
    if (!globals) {
      return Response.json({})
    }

    return Response.json(globals)
  },
}
