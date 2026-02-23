import { fastify } from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { fastifySwagger } from '@fastify/swagger'
import { fastifyCors } from '@fastify/cors'
import ScalarApiReference from '@scalar/fastify-api-reference'
import { adminRoutes } from './routes/admin.routes'
import { projectsRoutes } from './routes/projects.routes'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifyCors, {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  credentials: true,
})

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'backend to my portfolio',
      description: 'API to make CRUD on my portfolio',
      version: '1.0.0',
    },
  },
  transform: jsonSchemaTransform,
})

app.register(ScalarApiReference, {
  routePrefix: '/docs',
})

app.register(require('@fastify/multipart'), {
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
})

app.register(adminRoutes, {
  prefix: '/admin',
})

app.register(projectsRoutes, {
  prefix: '/projects',
})

app.listen({ port: 8080, host: '0.0.0.0' }).then(() => {
  console.log('🔥 HTTP server is running on http://localhost:8080')
  console.log('📚 Docs is available on http://localhost:8080/docs')
})
