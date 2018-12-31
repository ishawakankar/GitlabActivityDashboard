const {
  apiVersion
} = require('../config');
const fetch = require('node-fetch');
const project = require('../models/projects');

module.exports = function storeProjects(appName, url, adminToken) {
  fetch(`${url}/${apiVersion}/projects?private_token=${adminToken}`)
    .then(res => res.json())
    .then((data) => {
      data.forEach(element => {
        new project({
            id: element.id,
            name: element.name,
            applicationName: appName,
            createdAt: element.created_at,
            year: element.created_at.split('T')[0].split("-")[0],
            month: element.created_at.split('T')[0].split("-")[1],
            day: element.created_at.split('T')[0].split("-")[2],
            groupName: element.namespace.name,
            groupId: element.namespace.id,
            projectUrl: element.web_url,
            forkCount: element.forks_count,
            creatorId: element.creator_id,
            openIssueCount: element.open_issues_count,
            visibility: element.visibility,
            lastActivityAt: element.last_activity_at,
            starCount: element.star_count
          })
          .save()
          .then(project => {
            if (project) {
              console.log('project saved');
            }
          })

          .catch(err => {
            console.log('error while inserting in db : ' + err)
          })
      });
    });

}