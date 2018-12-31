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
    createdAt: {
        type: Date
    },
    groupName: {
        type: String
    },
    groupId: {
        type: Number
    },
    projectUrl: {
        type: String
    },
    forkCount: {
        type: Number
    },
    creatorId: {
        type: Number
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
    openIssueCount: {
        type: Number
    },
    visibility: {
        type: String
    },
    lastActivityAt: {
        type: Date
    },
    starCount: {
        type: Number
    },


});

const projects = mongoose.model("projects", dataSchema)

module.exports = projects;