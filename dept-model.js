//Import  Mongoose Module
var mongoose = require('mongoose');

// Connect to Mongodb  database(testDb is database name)
mongoose.connect('mongodb://127.0.0.1:27017/testDb');

// Create  schema
var Schema = mongoose.Schema;

// Schema properties should be match mongodb collection properites
var DeptModelSchema = new Schema(
    {   Deptno: Number, 
        Dname : String, 	
        Loc  : String   }, 
    { versionKey: false  } );

// Create Model Object	
// "depts"   --- collection name in mongodb
var DeptModel = mongoose.model('depts', DeptModelSchema );

// Exporting DeptModel 
module.exports = DeptModel;



