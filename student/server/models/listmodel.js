import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const lists = db.define('list',{
    firstname:{
        type: DataTypes.STRING
    },
    lastname:{
        type: DataTypes.STRING
    },
    location:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    dob:{
        type: DataTypes.STRING
    },
    education:{
        type: DataTypes.STRING
    },
    about:{
        type: DataTypes.STRING
    }

},{
    freezeTableName: true
});
 
export default lists;