export default async function routes (fastify, options) {
    fastify.get('/', function (req, reply) {
        return reply.sendFile('index.html')
    })

    fastify.get('/login', async (request, reply) => {
        reply.cookie('spotify_auth_state', '33333');

        reply.redirect('https://accounts.spotify.com/authorize?' +
            querystring.stringify({
                response_type: 'code',
                client_id: client_id,
                scope: '',
                redirect_uri: redirect_uri,
                state: state
            }));
    });
}
