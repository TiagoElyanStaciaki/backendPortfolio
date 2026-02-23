import path from 'node:path'
import fs from 'fs'
import { pipeline } from 'node:stream/promises'
import { randomUUID } from 'node:crypto'
import type { MultipartFile } from '@fastify/multipart'
    
export async function savingImages(file: MultipartFile) {

  if (!file.filename) {
    throw new Error('Arquivo enviado sem nome')
  }

  const saveDir = path.join(__dirname, '..', '_savedImages')
  const uuid = randomUUID()

  const fileExtend = path.extname(file.filename)
  const fileName = `${uuid}${fileExtend}`
  const filePath = path.join(saveDir, fileName)

  await pipeline(file.file, fs.createWriteStream(filePath))

  return {
    message: `Upload realizado com sucesso.`,
    path: `${fileName}`,
  }
}
