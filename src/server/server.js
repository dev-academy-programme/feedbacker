import Koa from 'koa'
import koaBody from 'koa-bodyparser'
import koaRouter from 'koa-router'
import koaStatic from 'koa-static'
import { graphiqlKoa } from 'graphql-server-koa'

import graphqlEndpoint from './graphql-endpoint'

const app = new Koa()
const router = koaRouter()

app.use(koaBody())
app.use(koaStatic('public'))

router.get('/graphql', graphqlEndpoint)
router.post('/graphql', graphqlEndpoint)

if (process.env.NODE_ENV !== 'production') {
  router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }))
}

app.use(router.routes())
app.use(router.allowedMethods())

export default app

