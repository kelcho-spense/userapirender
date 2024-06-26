import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { listUsers, getUser, createUser } from './user.controller'
import { userSchema } from '../validators'

export const userV1 = new Hono()

userV1.get('/', listUsers)  // GET /user
userV1.get('/:id', getUser)   // GET /user/:id
userV1.post('/', zValidator('json', userSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), createUser) // POST /user

// export default user
export const userV2 = new Hono()
userV2.get('/', listUsers)  // GET /user
userV2.get('/:id', getUser)   // GET /user/:id
userV2.post('/', zValidator('json', userSchema, (result, c) => {    
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), createUser) // POST /user


