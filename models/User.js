var {Sequelize, DataTypes} = require('sequelize')
require('dotenv').config();

//ORM table
//users table in the test db
const {DB_USERNAME, DB_HOSTNAME, DB_PORT, DB_PASSWORD, DB_NAME} = process.env;
console.log("db hostname",DB_USERNAME, DB_HOSTNAME, DB_PORT, DB_PASSWORD, DB_NAME)


const sequelize = new Sequelize(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`)
sequelize.authenticate()
.then(()=>console.log("db connection ok"))
.catch((err)=>console.log("err"))

const UserModel = sequelize.define("users",
{
    //attriutes  id, firstName, lastName, createdAt, updatedAt
    firstName:{
        type: DataTypes.STRING,
    },
    lastName:{
        type: DataTypes.STRING,
    }
},
{
    //options
    freezeTableName: true 
}
 );

module.exports = UserModel;