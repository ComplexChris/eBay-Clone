const faker = require('faker');
const fs = require('fs');
const arr = require('./mockImages/genArr.js')


const generateMockData = () => {
    let arrResults = arr()
    let mockData = '';
    let counter = 6165057;
    arrResults.map((ele) => {
         mockData += `\n${counter++}\t${ele.item_id}\t${ele.img_url1}\n${counter++}\t${ele.item_id}\t${ele.img_url2}\n${counter++}\t${ele.item_id}\t${ele.img_url3}`;
    })
        // console.log(mockData)
        fs.appendFileSync('./mockSeedItem_Images.sql', mockData);
}
generateMockData();