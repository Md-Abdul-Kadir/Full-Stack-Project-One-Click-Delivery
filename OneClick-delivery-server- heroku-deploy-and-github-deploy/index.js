const express = require('express');
const app = express();
require('dotenv').config();
const { MongoClient } = require('mongodb');
const port = process.env.PORT || 5000;
const ObjectId = require('mongodb').ObjectId;
const cors = require('cors');


//middleware middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.p6wrr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
console.log(uri);

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {

        await client.connect();
        console.log("Database Server connected")
         const database = client.db("OneCLickDelivery");
         const foodsCollection = database.collection("foods");
         const setMealCollection = database.collection("setmenu");
         const drinksCollection = database.collection("drinks");
        //  const result = await foods.insertMany(docs);



        //GET API
        //Foods
        app.get("/foods", async (req, res) => {
            const cursor = foodsCollection.find({});
            const foods = await cursor.toArray();
            res.send(foods);


            
        });
        //Drinks
        app.get("/drinks", async (req, res) => {
            const cursor = drinksCollection.find({});
            const drinks = await cursor.toArray();
            res.send(drinks);


            
        });
        //setmenu
        app.get("/setmenu", async (req, res) => {
            const cursor = setMealCollection.find({});
            const setmenus = await cursor.toArray();
            res.send(setmenus);


            
        });
    }
    finally {
        // await client.close();

    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send("Onclick Delivery is runnig");
    console.log("OneClick Server is running");
})

app.listen(port, (req, res) => {
    console.log("listening on port :",port);
});