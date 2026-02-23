import {
  Admin,
  AdminCreate,
  AdminRepository,
} from '../interfaces/admin.interface'
import { AdminRepositoryPrisma } from '../repositories/admin.repository'

export class AdminUseCase {
  private adminRepository: AdminRepository
  constructor() {
    this.adminRepository = new AdminRepositoryPrisma()
  }

  async create({ user, password }: AdminCreate): Promise<Admin> {
    const result = await this.adminRepository.create({ user, password })
    return result
  }
}
