const fs = require('fs');
const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
  accessKeyId: 'AKIAYMDV2W7HNEFX6NDT',
  secretAccessKey: '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',
  region: 'us-east-1'
});

// Create S3 instance
const s3 = new AWS.S3();

// Function to upload image to S3 and get back URL
function uploadImageToS3(filePath, fileName, bucketName) {
  const fileContent = fs.readFileSync(filePath);

  // Setting up S3 upload parameters
  const params = {
    Bucket: bucketName,
    Key: fileName, // File name you want to save as in S3
    Body: fileContent
  };

  // Uploading files to the bucket
  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err) {
        console.error('Error uploading file:', err);
        reject(err);
      } else {
        console.log('File uploaded successfully. URL:', data.Location);
        resolve(data.Location);
      }
    });
  });
}

module.exports = uploadImageToS3;
