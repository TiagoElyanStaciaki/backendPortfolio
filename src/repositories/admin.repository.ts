import { prisma } from '../database/prisma-client'
import type {
  Admin,
  AdminCreate,
  AdminRepository,
} from '../interfaces/admin.interface'

export class AdminRepositoryPrisma implements AdminRepository {
  async create(adminData: AdminCreate): Promise<Admin> {
    const createdAdmin = prisma.admin.create({
      data: {
        user: adminData.user,
        password: adminData.password,
      },
    })
    return createdAdmin
  }
}
