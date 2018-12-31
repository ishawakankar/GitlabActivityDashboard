const {
  apiVersion
} = require('../config');
const fetch = require('node-fetch');
const runner = require('../models/runners');


module.exports = function storeRunners(appName, url, adminToken) {

  fetch(`${url}/${apiVersion}/runners?private_token=${adminToken}`)
    .then(res => res.json())
    .then((data) => {
      data.forEach(element => {
        new runner({
            id: element.id,
            name: element.name,
            applicationName: appName,
            active: element.active,
            isShared: element.isShared,
            status: element.status
          })
          .save()
          .then(runner => {
            if (runner) {
              console.log('runner saved')
            }
          })
          .catch(err => {
            console.log('error while inserting in db : ' + err)
          })
      });
    });
}