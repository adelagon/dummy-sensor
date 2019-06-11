'use strict';

const faker = require("faker");
const minimist = require("minimist");

function generateFakeData() {
	let sensorId =  faker.random.number(50);
	let sensorTemp = faker.random.number({min:10, max:150});
	let sensorStatus =  faker.random.arrayElement(["OK","FAIL","WARN"]);
	let sensorEventId = faker.random.uuid();
	return `${sensorEventId},${sensorId},${sensorTemp},${sensorStatus}`;
}

async function generateLogs() {
	let args = minimist(process.argv.slice(2), {
		default: {
			delay: 1000,
			num: 1
		},
	});

    for (let i=0; i<args.num; i++) {
    	console.log(generateFakeData())
    }
    setTimeout(generateLogs, args.delay);
}

generateLogs();