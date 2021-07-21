const fs = require('fs')
const faker = require('faker')
const { performance } = require('perf_hooks')

const start = performance.now()
for (let i = 101; i < 1000; i++) {
    fs.appendFile('seed.sql', 
    `INSERT INTO items (id, name, description, model, category, company, price) values (${i}, '${faker.commerce.productName()}', '${faker.lorem.sentence()}', '${faker.vehicle.model()}', '${faker.commerce.department()}', '${faker.lorem.word()}', ${faker.commerce.price()}) RETURNING *;\n`, () =>{
    console.log(i)
    })
}
const timeElapsed = performance.now() - start;
console.log(timeElapsed)