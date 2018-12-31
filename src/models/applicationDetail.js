const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  applicationName: {
    type: String,
    unique: true
  },
  url: {
    type: String,
    unique: true
  },
  adminToken: {
    type: String
  }
});

const applicationDetail = mongoose.model("applicationDetail", dataSchema)

module.exports = applicationDetail;