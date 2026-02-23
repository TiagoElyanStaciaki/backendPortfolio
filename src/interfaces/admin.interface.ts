export interface Admin {
  id: string
  user: string
  password: string
}

export interface AdminCreate {
  user: string
  password: string
}

export interface AdminRepository {
  create(adminData: AdminCreate): Promise<Admin>
}
