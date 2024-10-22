const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: { type: Number, required: true, unique:true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  fieldSize: {type:Number, default: null},
  crop: { type: String, default: null },
  nitrogen: { type: Number, default: null },
  phosphorus: { type: Number, default: null },
  potassium: { type: Number, default: null },
  ph: { type: Number, default: null },
  temperature: { type: Number, default: null },
  humidity: { type: Number, default: null },
  rainfall: { type: Number, default: null },
  location: {
    lat: { type: Number, default: null },
    lng: { type: Number, default: null },
    weather_1 : {type : String,  default:null},
    weather_1_: { type: String , default :null},
    weather_1_first: { type: String , default :null},
    weather_2 : { type : String, default:null},
    weather_2_: { type: String, default: null},
    weather_2_second: { type: String, default: null},
    weather_3 : {type: String, default:null},
    weather_3_ : { type: String, default: null},
    weather_3_third : { type: String, default: null},
    trending_crops_1: {type : String , default : null},
    trending_crops_2: { type: String , default: null},
    trending_crops_3: { type: String , default: null}
  }
});

const Farmer = mongoose.model('Farmer', farmerSchema);

module.exports = Farmer;
