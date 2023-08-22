let objExpress = require('express');
let objApp = objExpress(); // Creating an object of objExpress for web framework
//importing another js file
let objController = require('./controllerApi.js');
let objbodyParser = require('body-parser'); // middleware for api calling
let objPostGresDBConnection = require('./postGresDBConnection.js'); //importing dbconnection file.
let objUserInformation = require('./userInformationEntity');
const bodyParser = require('body-parser');
// creating server with express framework
objApp.listen("6666", function success(){
    console.log("server created successfully");
});

// command to check connection success or not
objPostGresDBConnection.objDBConnection.authenticate().then(() =>{
    console.log("DBConnection Success..")
}).catch((error) => {console.log("DBConnection failure.."); console.log(error);})
//till here

objController.getSum(5, 6); // test method for integrating another js file

//table validation
console.log(objUserInformation)
//till here

//calling API from controller
objApp.use("/v1/getUsers/", bodyParser.json(), objController.getUsers)
//till here

//calling API by using request parameters
objApp.use("/v1/getUserByIdByParams/:ID", bodyParser.json(), objController.getUserByIdByParams)

//calling API by using request query parameters
objApp.use("/v1/getUserByIdByParams/", bodyParser.json(), objController.getUserByIdByQuery)