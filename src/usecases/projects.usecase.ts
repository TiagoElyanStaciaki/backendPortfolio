import type {
  Projects,
  ProjectsCreateWithPathImage,
  ProjectsRepository,
} from '../interfaces/projects.interface'
import { ProjectsRepositoryPrisma } from '../repositories/projects.repository'

export class ProjectsUseCase {
  private projectsRepository: ProjectsRepository
  constructor() {
    this.projectsRepository = new ProjectsRepositoryPrisma()
  }

  async create({
    savedImage,
    name,
    description,
    link,
  }: ProjectsCreateWithPathImage): Promise<Projects> {
    const result = await this.projectsRepository.create({
      savedImage,
      name,
      description,
      link,
    })
    return result
  }
}
