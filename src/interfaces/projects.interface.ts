export interface Projects {
  id: number
  image: string
  name: string
  description: string
  link?: string | null
}

export interface ProjectsCreate {  
  name: string
  description: string
  link: string | null
}

export interface ProjectsCreateWithPathImage {
  savedImage: string
  name: string
  description: string
  link: string | null
}

export interface ProjectsRepository {
  create(projectsData: ProjectsCreateWithPathImage): Promise<Projects>
  // readAll(): Promise<Projects[]>
  // readOneById(): Promise<Projects>
  // update(): Promise<Projects>
  // delete(): void
}
