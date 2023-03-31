import express from "express";
import bodyParser from "body-parser";
import CartRouter from './route/cart.route.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/cart",CartRouter);
app.listen(3000,()=>{
    console.log("Serer started....");
})