const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  id: {
    type: Number,
    unique: true
  },
  name: {
    type: String
  },
  applicationName:{
    type:String
  },
  active: {
    type: String
  },
  isShared: {
    type: Boolean
  },
  status: {
    type: String
  }
})
const runners = mongoose.model("runners", dataSchema)

module.exports = runners;