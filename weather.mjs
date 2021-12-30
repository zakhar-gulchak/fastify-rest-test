import axios from 'axios'

export default async function routes (fastify, options) {
    const collection = fastify.mongo.db.collection('weather')
    const statisticsCollection = fastify.mongo.db.collection('statistics')

    fastify.get('/weather/:city', async (request, reply) => {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${request.params.city}&appid=${process.env.WEATHER_API_KEY}`);
        const result = await collection.insertOne({ city: request.params.city, ...response.data })
        if (!result) {
            throw new Error('Invalid value')
        }
        await statisticsCollection.insertOne({ city: request.params.city, value: 1 })
        return result
    })
}
