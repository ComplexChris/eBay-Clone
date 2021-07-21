var { readFile } = require("fs/promises");
var { S3Client, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");

const createArr = () => {
  let results = [];
  for (let i = 1; i <= 1000; i++) {
    results[i] = `./mockImages/${i}.jpg`
  }
  return results;
}
let results = createArr()

const uploadFile = async () => {

  const REGION = "us-east-1";
  const client = new S3Client({ region: REGION });
  const imageArr = results;
  await Promise.all (imageArr.map(async(fileName) => {
    const fileBuffer = await readFile(fileName);
    const command = new PutObjectCommand({
      Bucket: "ebayclone",
      Key: fileName,
      Body: fileBuffer,
    });
    await client.send(command);
  }))
};
uploadFile();

const downloadJSON = async () => {
  const REGION = "us-east-1";
  const client = new S3Client({ region: REGION });
  const command = new GetObjectCommand({
    Bucket: 'ebayclone',
    Key: 'mockImages/2.jpg',
    Body: 'Readable',
    Metadata: {}
  });
  const response = await client.send(command);
  console.log(response.Metadata)
  return response;
}
// downloadJSON();
