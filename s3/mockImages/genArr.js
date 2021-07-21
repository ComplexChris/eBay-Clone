const randoNum = () => Math.floor(Math.ceil(Math.random() * 1000));

const createArr = () => {
    let results = [];
    for (let i = 0; i <= 2055000; i++) {
      results[i] = {
        img_url1: `https://ebayclone.s3.amazonaws.com/mockImages/${randoNum()}.jpg`,
        img_url2: `https://ebayclone.s3.amazonaws.com/mockImages/${randoNum()}.jpg`,
        img_url3: `https://ebayclone.s3.amazonaws.com/mockImages/${randoNum()}.jpg`,
        item_id: i + 21
      }
    }
    // console.log(results)
    return results;
}
// createArr();
module.exports = createArr;