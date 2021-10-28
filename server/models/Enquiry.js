const mongoose = require('mongoose');

const { Schema } = mongoose;

const enquirySchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
      },
    
      businessName: {
        type: String,
        required: true,
        trim: true
      },
    
      email: {
        type: String,
        required: true,
        unique: true
      },
    
    //   password: {
    //     type: String,
    //     required: false,
    //     minlength: 5
    //   },
    
      suburb: {
        type: String,
        required: true,
        trim: true
      },
    
      phoneNumber: {
        type: String,
        required: false,
        trim: true
      },
    
      queries: {
        type: String,
        required: true,
        trim: true
      },
    });

const Enquiry = mongoose.model('Enquiry', enquirySchema);

module.exports = Enquiry;