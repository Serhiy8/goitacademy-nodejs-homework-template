const Jimp = require("jimp");

const imgSizeTransform = (tmpUpload, resultUpload) => {
  Jimp.read(tmpUpload, (err, lenna) => {
    if (err) throw err;
    lenna.resize(250, 250).quality(60).write(resultUpload);
  });
};

module.exports = imgSizeTransform;
