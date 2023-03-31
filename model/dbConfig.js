import { Sequelize } from "sequelize";

const sequelize = new Sequelize("usesql","root","1234",{
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate()
.then(()=>{
    console.log("Databse connected..");
})
.catch(err=>{
    console.log(err);
})

export default sequelize;