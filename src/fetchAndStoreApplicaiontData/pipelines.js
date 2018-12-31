const {apiVersion} = require('../config');
const fetch=require('node-fetch');

fetch(`${url}/${apiVersion}/projects?private_token=${adminToken}`)
    .then(res => res.json())
    .then((data) => {
       
    });