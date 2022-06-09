import { createClient } from 'redis';

async function start_client() {
    const client = createClient();

    client.on('error', (err) => (
	console.log(`Redis client not connected to the server: ${err}`)
    )
	     )

    console.log('Redis client connected to the server')
}

start_client()
