const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  Appname: {type:String, unique:true},
  URL: {type:String},
  AdminToken: {type:String}
});

const pipelines = mongoose.model("pipelines", dataSchema)

module.exports = pipelines;

