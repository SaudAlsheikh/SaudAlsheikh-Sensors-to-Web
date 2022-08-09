/*
    Sensor Model:  
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema; // shortcut, for easier future refrencing


/*
    Sensor Models's Schema:  
*/
const SensorSchema = new Schema({
    value: Number
});

/*
    Models creation:
    
    mongoose.model('Sensor', SensorSchema);
    -> Arguments:
     ('modelName') MUST be singuler,
     (ModelSchema)
    
    -> returns a class for the model, 
       and saves the model in DB as a collection with the plural of the passed name.
       eg: Sensor ==> collection in DB = sensors

*/



/*
    Exports:  
*/

// sensor model class: 
module.exports = mongoose.model('Sensor', SensorSchema);
