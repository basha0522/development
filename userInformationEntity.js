const { DataTypes } = require('sequelize');
let objPostGresDBConnection = require('./postGresDBConnection');

//Creating table UserInformation
const userInformation = objPostGresDBConnection.objDBConnection.define("UserInformation", {
    FirstName: {type: DataTypes.STRING, allowNull: false},
    MiddleName: {type: DataTypes.STRING, allowNull: true},
    LastName: {type: DataTypes.STRING, allowNull: false},
    PhoneNumber: {type: DataTypes.BIGINT, allowNull:false}
})
objPostGresDBConnection.objDBConnection.sync({force: false}).then((data)=>console.log("table created succesfully..")).catch((error) => console.log(error))

//Inserting data into table
//const saveUserInformation = userInformation.create({FirstName: "Shaik", MiddleName: "", LastName: "Ansari", PhoneNumber: "7207986304"})
//console.log(saveUserInformation);
//saveUserInformation.sync();
//till here