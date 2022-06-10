import { createClient, print } from 'redis';

const client = createClient();

client.on('error', (err) => (
    console.log(`Redis client not connected to the server: ${err}`)
)
	 )
console.log('Redis client connected to the server')

function setNewSchool(schoolName, value) {
    client.set(schoolName, value, (err, res) => print(`Reply: ${res}`))
}

function displaySchoolValue(schoolName) {
    client.get(schoolName, (err, res) => console.log(res))
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
