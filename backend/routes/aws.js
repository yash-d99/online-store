var express = require('express');
var router = express.Router();
const AWS = require('aws-sdk');
const BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME;
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});
const s3 = new AWS.S3();

/**
 * @description Uploads an image to S3
 * @param imageName Image name
 * @param base64Image Image body converted to base 64
 * @param type Image type
 * @return string S3 image URL or error accordingly
 */
async function upload(imageName, base64Image, type) {
    const params = {
        Bucket: `${BUCKET_NAME}`,
        Key: imageName,
        Body: new Buffer.from(base64Image.replace(/^data:image\/\w+;base64,/, ""), 'base64'),
        ContentType: type
    };

    let data;

    try {
        data = await promiseUpload(params);
    } catch (err) {
        console.error(err);

        return "";
    }

    return data.Location;
}
/**
 * @description Promise an upload to S3
 * @param params S3 bucket params
 * @return data/err S3 response object
 */
function promiseUpload(params) {
    return new Promise(function (resolve, reject) {
        s3.upload(params, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
router.post('/upload', async (req, res, next) => {
    const base64Image = req.body.image;
    const imageName = req.body.imageName;
    const type = req.body.type;
    let response;

    try {
        response = await upload(imageName, base64Image);
    } catch (err) {
        console.error(`Error uploading image: ${err.message}`);
        return next(new Error(`Error uploading image: ${imageName}`));
    }

    res.send({ link: response });
})

module.exports = router;