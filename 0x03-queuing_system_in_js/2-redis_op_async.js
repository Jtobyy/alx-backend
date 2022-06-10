import { createClient, print } from 'redis';
import { promisify } from 'bluebird'

const client = createClient();

client.on('error', (err) => (
    console.log(`Redis client not connected to the server: ${err}`)
)
	 )
console.log('Redis client connected to the server')

function setNewSchool(schoolName, value) {
    client.set(schoolName, value, (err, res) => print(`Reply: ${res}`))
}

async function displaySchoolValue(schoolName) {
    const getAsync = promisify(client.get).bind(client)
    const value = await getAsync(schoolName)
    console.log(value)
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
