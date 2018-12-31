const {
  apiVersion
} = require('../config');
const fetch = require('node-fetch');
const user = require('../models/users');

module.exports = function storeUsers(appName, url, adminToken) {

  fetch(`${url}/${apiVersion}/users?private_token=${adminToken}`)
    .then(res => res.json())
    .then((data) => {
      data.forEach(element => {
        new user({
            id: element.id,
            name: element.name,
            applicationName: appName,
            state: element.state,
            url: element.web_url,
            createdAt: element.created_at,
            location: element.location,
            year: element.created_at.split('T')[0].split("-")[0],
            month: element.created_at.split('T')[0].split("-")[1],
            day: element.created_at.split('T')[0].split("-")[2],
            lastSignInAt: element.last_sign_in_at,
            currentSignInAt: element.current_sign_in_at,
            lastActiveOnDate: element.last_active_on,
            confirmedAt: element.confirmed_at,
            emailId: element.email_id
          })
          .save()
          .then(user => {
            if (user) {
              console.log('project saved')
            }
          })
          .catch(err => {
            console.log('error while inserting in db : ' + err)
          })
      });
    });
}