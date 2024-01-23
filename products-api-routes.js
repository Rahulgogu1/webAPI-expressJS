const express = require("express");
const DeptModel = require('./models/products-model');
const router = express.Router();

// Read All
router.get("/Product", async function (req, res) {

    let result = await DeptModel.find({}, { "_id": 0 });

    try {
        console.log("[Read All] - No. of  items get from database : " + result.length);
        res.send(result);
    }
    catch (error) {
        // sending error details to client
        res.status(500).send(error);    
    }
});

// Read Single
router.get("/Product/:Productno", async function(req, res)
{
    var Productno =  req.params.Productno;   	    
    let result  =  await DeptModel.findOne({ Productno: Productno}, {"_id":0});         
    console.log("[Read Single] - " + JSON.stringify(result));
    res.send(result);     
});


// Create 
router.post('/Product',  async  function (req,res)
{ 
        var deptObj  = new  DeptModel({ 
                Productno : parseInt(req.body.Productno),	
                Pname  :  req.body.Pname,
                PId   : req.body.PId
                });

        // Logic to insert new dept in database
        let newObj  =  await  deptObj.save(); 
		
		var result = {};
		result.status  = "Record inserted in Database";
		console.log("[Create] - Record inserted in Database");
		res.send(result);           
});


// Update
router.put('/Product',  async function (req,res)
{ 
        var deptObj  = {};
        deptObj.Productno = parseInt(req.body.Productno);
        deptObj.Pname =  req.body.Pname;
        deptObj.PId =  req.body.PId;
        

        // Logic to insert new dept in database
        let resResult  = await  DeptModel.findOneAndUpdate(  {Productno:deptObj.Productno},   {  $set : deptObj});
 
		var result = {};
		result.status  = "Record updated in Database";
		console.log("[Update] - Record updated in Database");
		res.send(result);	
});

// Delete
router.delete('/Product/:Productno',async function (req,res)
{  
    var Productno =  req.params.Productno;   
    let resResult  =  await  DeptModel.findOneAndDelete({ Productno: Productno}); 

	var result = {};
	result.status  = "Record deleted from Database";
	console.log("[Delete] - Record deleted from Database");
	res.send(result);
       
});



module.exports = router;