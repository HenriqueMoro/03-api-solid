import { FastifyInstance } from 'fastify'
import { register } from '../http/controllers/register-controller'
import { authenticate } from './controllers/authenticate-controller'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)
}
