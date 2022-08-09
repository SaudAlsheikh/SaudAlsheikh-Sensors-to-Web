/*
    Requiring npms  
*/

const express = require('express'); // Server
const mongoose = require('mongoose'); // DB

/*
    Requiring exports:
    Models, classes, ..  
*/

// Sensor Model class: Mongo models (By mongoose)
const Sensor = require('./models/sensor');




/*
    Database Conneection:
*/


//DB name:                                  sm-sensor
mongoose.connect('mongodb://localhost:27017/sm-sensor', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// DB Connection Verfication & Error Handeling  
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected -- DB Connection Verfication & Error Handeling Section");
});

// Starting express server
const app = express();

app.use(express.static('./public'));


// Default route
app.get('/', async (req, res) => {
    const sensors = await Sensor.find({});
    res.render('index.ejs', { sensors });
});

// Verify that server is working
app.listen(3000, () => {
    console.log('Serving on PORT: 3000');
    console.log('Accsess from localhost:3000/');
});
