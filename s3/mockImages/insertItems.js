const faker = require('faker');
const { Pool } = require('pg');
const {performance} = require('perf_hooks')

const db = new Pool ({
    user: 'josee.lozanojr.',
    database: 'fec',
    port: 5432
})

const insertQ = (num) => {

    db.query('INSERT INTO items (id, name, description, model, category, company, price) values ($1, $2, $3, $4, $5, $6, $7);',
        [num, faker.commerce.productName(), faker.commerce.productDescription(), faker.vehicle.model(), faker.commerce.department(), faker.company.companyName(), faker.commerce.price()], (err, data) => {
            if (err) {
                console.log('error', err);
            }
        })
}

const loop = () => {
    const start = performance.now();
    for (let i = 101; i <= 1000000; i++) {
        insertQ(i);
    }
    const timeElapsed = performance.now() - start
    return console.log('time elapsed 10', timeElapsed);
}

loop();