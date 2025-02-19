const express = require("express");
const mongoose = require("mongoose");
const Product = require("./module/product.module.js");
const productRoute = require("./routes/productRoute.js");
const userRoute = require("./routes/userRoute.js");
const cors = require('cors')
const dotenv = require("dotenv");
const app = express();

app.use(express.json());
dotenv.config();

// routes
app.use("/api/product", productRoute);
app.use("/api/user", userRoute);

app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  
app.listen(process.env.PORT,  () =>{
    console.log("server is running on port 8080");
});
app.get("/",(req, res) => {
    res.send("ejimo project");
});

mongoose.connect(process.env.MONGO_URL)

//new code*
.then(() =>{

    console.log("database connected!");
})
.catch(() => {
    console.log("database not connected");
});

//POST REQUEST

// app.post("/api/products", async(req, res) => {
//     try{
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });

// DELETE PRODUCT

// app.delete("/api/product/:id", async(req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id, req.body);
//         if (!product) {
//             return res.status(404).json({message:"Product not found"});
//         }
//         res.status(200).json({ message: "Product Deleted Successfully" });
//     } catch (error) {
//         res.status(500).json({ message: error.message});
//     }
// });

// UPDATE PRODUCT

// app.put("/api/products/:id", async(req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);
//         if (!product) {
//             return res.status(404).json({message:"Product not found"});
//         }
//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);
//     } catch (error) {
//         res.status(500).json({ message: error.message});
//     }
// });
//GET PRODUCTS BY ID


// app.get("/api/products/:id", async(req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({ message: error.message});
//     }
// });

//GET ALL PRODUCTS

//         app.get("/api/products", async(req, res) => {
//             try {
//         const product = await Product.find({});
//         res.status(200).json(product)
//     } catch (error) {
//      res.status(500).json({message: error.message});   
//     }
// });




// create a folder and gitbash
//npm init -y for package.jason containing dependecies
//nodemon installation for fast reload- npm i nodemon -D
// express installation-npm i express
// open new file- index.js in backend folder
// type your programme in the file
// npm init -y for package.jason
//add server and dev in package.jason for start command
// run local host- npm run server. kill before each run command
//npm run dev as start command after nodemon
//use local host 6000 for postman without continous killing
//3m8UU3WB8XiPgUhF
//install mongodb
// install mongoose