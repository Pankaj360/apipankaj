const mongoose = require('mongoose');


const InstructorSchema = mongoose.Schema({
 
  name: {

    type: String,
    required: true
  },


  car : {

    type: String,
    required: true
  },



  price : {

    type: String,
    required: true
  },


  date: {

    type: Date,
    default: Date.now
  }


})


module.exports = mongoose.model('Instructors', InstructorSchema);