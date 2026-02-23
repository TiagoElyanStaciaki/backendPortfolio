import type { FastifyInstance } from 'fastify'
import type { ProjectsCreateWithPathImage } from '../interfaces/projects.interface'
import { ProjectsUseCase } from '../usecases/projects.usecase'
import { savingImages } from '../services/saveFile.service'
import { send } from 'node:process'
import { error } from 'node:console'

export async function projectsRoutes(fastify: FastifyInstance) {
  const projectsUseCase = new ProjectsUseCase()

  fastify.post<{ Body: ProjectsCreateWithPathImage }>(
    '/',
    async (request, reply) => {
      const parts = request.parts()

      let name: string | undefined
      let description: string | undefined
      let link: string | null = null
      let filePath: string | undefined

      for await (const part of parts) {
        if (part.type === `file`) {
          filePath = (await savingImages(part)).path
          continue
        }

        switch (part.fieldname) {
          case `name`:
            name = String(part.value)
            break
          case `description`:
            description = String(part.value)
            break
          case `link`:
            link = String(part.value)
            break
        }
      }

      if (!name || !description || !filePath) {
        return reply.status(400).send({
          error: `Campos obrigatórios faltando`
        })
      }

      try {
        const projectData = await projectsUseCase.create({
          savedImage: filePath,
          name: name,
          description: description,
          link: link
        })
        return reply.send(projectData)
      } catch (error) {
        reply.send(error)
      }
    },
  )
}
