const express = require('express')
const routes = express.Router();
const MongoClient = require('mongodb');
const assert = require('assert');
const {databaseUrl} = require('../config');

routes.get('/', (req, res) => {
    const issuesArray = [];

    MongoClient.connect(databaseUrl, {
        useNewUrlParser: true
    }, (err, client) => {
        const db = client.db('gitDashboard');
        assert.equal(null, err);
        const cursor = db.collection("issues").find();

        assert.equal(null);

        cursor.forEach((doc) => {
                issuesArray.push(doc)
},
            () => {
                client.close();
                res.send(issuesArray);
            });
    })
})

module.exports = routes;