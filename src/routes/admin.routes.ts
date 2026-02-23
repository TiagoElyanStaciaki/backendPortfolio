import type { FastifyInstance } from 'fastify'
import { AdminUseCase } from '../usecases/admin.usecase'
import type { AdminCreate } from '../interfaces/admin.interface'

export async function adminRoutes(fastify: FastifyInstance) {
  const adminUseCase = new AdminUseCase()
  fastify.post<{ Body: AdminCreate }>('/', async (request, reply) => {
    const { user, password } = request.body
    try {
      const adminData = await adminUseCase.create({
        user,
        password,
      })
      return reply.send(adminData)
    } catch (error) {
      reply.send(error)
    }
  })

  fastify.get('/', (request, reply) => {
    reply.send({ hello: 'World' })
  })
}
