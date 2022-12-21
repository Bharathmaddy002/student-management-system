import { Sequelize } from "sequelize";
 
const db = new Sequelize('student_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;