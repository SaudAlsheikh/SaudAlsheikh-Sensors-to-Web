/*

    seed file: 
    - A file that connects to the DB, and has a Model passed to it.
    - Used to populate the DB with data that follows our model schema, without hassling with a form.
    - Used for testing before using real data.
    - Run it before running the server.

*/

// IMPORTANT: RUN seeds.js alone before starting the server, populate the db, then test.



/*
    Requireing npms  
*/
const mongoose = require('mongoose'); // Seeds Has it's own DB connection 


/*
    Requireing exports:
    Models, classes, ..  
*/
const Sensor = require('../models/sensor');



/*
    Database Conneection:
*/

mongoose.connect('mongodb://localhost:27017/sm-sensor', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected: seeding");
});



/*
    Database Seeding:
*/


// seedDB function: - Deletes all current data in DB, and replace them with new seed data.
const seedDB = async () => {
    await Sensor.deleteMany({}); // Wipe all data before testing new schema of data
    
    // Randomise Data From data files:
    for (let i = 0; i < 50; i++) {
        var random = Math.floor(Math.random() * 5);  // Between 0 and 5
        const sensor = new Sensor({
            value : random
        })
        await sensor.save(); // Save in DB
    }
}


/*
    Database Conneection: Closing
*/

seedDB().then(() => {
    mongoose.connection.close();
})