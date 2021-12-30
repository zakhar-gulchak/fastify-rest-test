import Fastify from 'fastify'
// import FastifyStatic from 'fastify-static'
import path from 'path'
import dotEnv from 'dotenv'
import dbConnector from './dbConnector.mjs'
import animals from './animals.mjs'
import weather from './weather.mjs'
// import spotify from './spotify.mjs'
// import spotifyAuth from './spotifyAuth.mjs'

dotEnv.config()
const __dirname = path.resolve()
const fastify = Fastify({
    logger: true
})

fastify.register(dbConnector)
fastify.register(animals)
fastify.register(weather)
// fastify.register(spotifyAuth)
//
// fastify.register(FastifyStatic, {
//     root: path.join(__dirname, 'public'),
//     prefix: '/public/', // optional: default '/'
// })

const start = async () => {
    try {
        await fastify.listen(process.env.PORT || 3000, '0.0.0.0')
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
