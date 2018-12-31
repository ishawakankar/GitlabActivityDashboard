const http = require('http');
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express');
const api = express();
const server = http.createServer(api);
const PORT = process.env.PORT || 5000;
// const middleWare = require('./middleware/index')
const dbConnect = require('./db')

const users = require('./api/getUsers');
const groups = require('./api/getGroups');
const forks = require('./api/getForks');
const merges = require('./api/getMerges');
const runners = require('./api/getRunners');
const projects = require('./api/getProjects');
const issues = require('./api/getIssues')
const pipelines = require('./api/getPipelines');
const application = require('./api/applications');


api.use(express.json());
api.use(morgan('dev'));
api.use(cors());
api.use(express.static('public'));
api.use(bodyParser.json())
api.use(bodyParser.urlencoded({
	extended: false
}))
dbConnect();
// middleWare();
api.use('/application', application);
// All api routes
api.use('/users', users);
api.use('/groups', groups);
api.use('/projects', projects);
api.use('/pipelines', pipelines);
api.use('/forks', forks);
api.use('/issues', issues);
api.use('/merges', merges);
api.use('/runners', runners);

server.listen(PORT, () => {
	`server listening on port: ${PORT}`;
});