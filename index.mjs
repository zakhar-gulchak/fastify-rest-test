import Fastify from 'fastify'
// import FastifyStatic from 'fastify-static'
// import path from 'path'
import dotEnv from 'dotenv'
import dbConnector from './dbConnector.mjs'
import animals from './animals.mjs'

dotEnv.config()
// const __dirname = path.resolve()
const fastify = Fastify({
    logger: true
})

fastify.register(dbConnector)
fastify.register(animals)
// fastify.register(FastifyStatic, {
//     root: path.join(__dirname, 'public'),
//     prefix: '/public/', // optional: default '/'
// })
//
// fastify.get('/login', function (req, reply) {
//     return reply.sendFile('index.html')
// })


const start = async () => {
    try {
        await fastify.listen(3000)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
