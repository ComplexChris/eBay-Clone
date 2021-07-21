const { Pool } = require('pg');
const arr = require('./genArr.js')

const db = new Pool ({
    user: 'josee.lozanojr.',
    database: 'fec',
    port: 5432
})

let results = arr()

const insertQImages = () => {
    results.map((ele) => {
        db.query('INSERT INTO item_images (item_id, image_url) values ($1, $2), ($1, $3), ($1, $4);',
         [ele.item_id, ele.img_ulr1, ele.img_ulr2, ele.img_ulr3],
            (err, data) => {
            if (err) {
                console.log('error', err);
            } else {
                console.log('Inserted', ele.item_id)
            }
        })
    })
}
insertQImages();