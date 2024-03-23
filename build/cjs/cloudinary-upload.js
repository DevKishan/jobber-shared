"use strict";

exports.__esModule = true;
exports.uploads = uploads;
exports.videoUpload = videoUpload;
var _cloudinary = _interopRequireDefault(require("cloudinary"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function uploads(file, public_id, overwrite, invalidate) {
  return new Promise(resolve => {
    _cloudinary.default.v2.uploader.upload(file, {
      public_id,
      overwrite,
      invalidate,
      resource_type: 'auto' // upload image,video, zip anyfile
    }, (error, result) => {
      if (error) {
        resolve(error);
      }
      resolve(result);
    });
  });
}
function videoUpload(file, public_id, overwrite, invalidate) {
  return new Promise(resolve => {
    _cloudinary.default.v2.uploader.upload(file, {
      public_id,
      overwrite,
      invalidate,
      chunk_size: 50000,
      resource_type: 'video' // upload image,video, zip anyfile
    }, (error, result) => {
      if (error) {
        resolve(error);
      }
      resolve(result);
    });
  });
}
//# sourceMappingURL=cloudinary-upload.js.map