const express = require('express')
const routes = express.Router();
const MongoClient = require('mongodb');
const assert = require('assert');
const {databaseUrl} = require('../config');

routes.get('/', (req, res) => {
    const projectsArray = [];

    MongoClient.connect(databaseUrl, {
        useNewUrlParser: true
    }, (err, client) => {
        const db = client.db('gitDashboard');
        assert.equal(null, err);
        const cursor = db.collection("projects").find();

        assert.equal(null);

        cursor.forEach((doc) => {
                projectsArray.push(doc)
},
            () => {
                client.close();
                res.send(projectsArray);
            });
    })
})

module.exports = routes;