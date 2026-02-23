import { prisma } from '../database/prisma-client'
import type {
  Projects,
  ProjectsCreateWithPathImage,
  ProjectsRepository,
} from '../interfaces/projects.interface'

export class ProjectsRepositoryPrisma implements ProjectsRepository {
  async create(projectsData: ProjectsCreateWithPathImage): Promise<Projects> {
    const createdProject = prisma.projects.create({
      data: {
        image: projectsData.savedImage,
        name: projectsData.name,
        description: projectsData.description,
        link: projectsData.link,
      },
    })
    return createdProject
  }
}
