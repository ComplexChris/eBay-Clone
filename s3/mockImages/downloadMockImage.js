const http = require('http');
const Stream = require('stream').Transform;
const fs = require('fs');
const faker = require('faker');


const imageLoopReq = () => {
   for (let i = 1; i <= 1000; i++) {
        http.get(faker.image.image(200, 200), res => {
            let img = new Stream();

            res.on('data', chunk => {
                img.push(chunk);
            });
            res.on('end', () => {
                let fileName = __dirname + `/${i}.jpg`;
                fs.writeFileSync(fileName, img.read());
            })
        })
    }
}

imageLoopReq();