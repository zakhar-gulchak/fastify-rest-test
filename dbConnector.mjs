import fastifyPlugin from 'fastify-plugin'
import fastifyMongo from 'fastify-mongodb'

async function dbConnector (fastify, options) {
    fastify.register(fastifyMongo, {
        url: `mongodb+srv://mondo-user:${process.env.DB_PASS}@cluster0.jnnty.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    })
}

export default fastifyPlugin(dbConnector)
