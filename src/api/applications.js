const express = require('express')
const routes = express.Router();
const async=require('async')
const application = require('../models/applicationDetail');
const storeProjects = require('../fetchAndStoreApplicaiontData/projects');
const storeGroups = require('../fetchAndStoreApplicaiontData/groups');
const storeIssues = require('../fetchAndStoreApplicaiontData/issues');
const storeUsers = require('../fetchAndStoreApplicaiontData/users');
const storeRunners = require('../fetchAndStoreApplicaiontData/runners');
const storeMerges = require('../fetchAndStoreApplicaiontData/merge');

routes.post('/', (req, res) => {
    req.query.format
    application.findOne({
            applicationName: req.body.appName
        })
        .then((applicationDetail) => {
            console.log()
            if (!applicationDetail) {
                new application({
                        applicationName: req.body.applicationName,
                        url: req.body.url,
                        adminToken: req.body.adminToken
                    })
                    .save()
                    .then((newApplication) => {
                        console.log(`New Application Added : ${newApplication}`)
                    }).catch((err) => {
                        res.send(err);
                    })
            }
                        async.parallel([
                            function(callback){
                                storeProjects(req.body.applicationName,req.body.url,req.body.adminToken)
                                callback(null,'one')
                            },
                            function(callback){
                                storeGroups(req.body.applicationName,req.body.url,req.body.adminToken)
                                callback(null,'two')
                            },
                            function(callback){
                                storeIssues(req.body.applicationName,req.body.url,req.body.adminToken)
                                callback(null,'three')
                            },
                            function(callback){
                                storeUsers(req.body.applicationName,req.body.url,req.body.adminToken)
                                callback(null,'four')
                            },
                            function(callback){
                                storeMerges(req.body.applicationName,req.body.url,req.body.adminToken)
                                callback(null,'five')
                            },
                            function(callback){
                                storeRunners(req.body.applicationName,req.body.url,req.body.adminToken)
                                callback(null,'six')
                            },
                        ],
                        function(err, result) {
                            if(err){
                                res.send("Error")
                            }
                            if(result){
                                res.send("Success")

                            }
                        });
                        

            
            

        })
        

})

module.exports=routes;