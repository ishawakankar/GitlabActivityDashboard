const {mongodb}=require('./config')
const mongoose=require('mongoose')
module.exports=function database() {
	// connect to a database if needed, then pass it to `callback`:
	mongoose.connect(mongodb.dbURI, () => {
		console.log('Connected to mongodb')
	});
}
