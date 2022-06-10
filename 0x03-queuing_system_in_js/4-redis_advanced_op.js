import { createClient, print } from 'redis';

const client = createClient();

client.on('error', (err) => (
    console.log(`Redis client not connected to the server: ${err}`)
)
	 );
console.log('Redis client connected to the server');

client.HSET('HolbertonSchools', 'Portland', 50, (err, res) =>
	    print(`Reply: ${res}`));
client.HSET('HolbertonSchools', 'Seattle', 80, (err, res) =>
	    print(`Reply: ${res}`));
client.HSET('HolbertonSchools', 'New York', 20, (err, res) =>
	    print(`Reply: ${res}`));
client.HSET('HolbertonSchools', 'Bogot', 20, (err, res) =>
	    print(`Reply: ${res}`));
client.HSET('HolbertonSchools', 'cali', 40, (err, res) =>
	    print(`Reply: ${res}`));
client.HSET('HolbertonSchools', 'Paris', 2, (err, res) =>
	    print(`Reply: ${res}`));

client.HGETALL('HolbertonSchools', (err, res) => console.log(res));
