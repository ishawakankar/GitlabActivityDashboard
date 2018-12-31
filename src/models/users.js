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
    applicationName: {
        type: String
    },
    state: {
        type: String
    },
    url: {
        type: String
    },
    createdAt: {
        type: Date
    },
    location: {
        type: String
    },
    year: {
        type: Number
      },
      month: {
        type: Number
      },
      day: {
        type: Number
      },
    lastSignInAt: {
        type: Date
    },
    currentSignInAt: {
        type: Date
    },
    lastActiveOnDate: {
        type: Date
    },
    confirmedAt: {
        type: Date
    },
    emailId: {
        type: String
    }
});

const users = mongoose.model("users", dataSchema)

module.exports = users;