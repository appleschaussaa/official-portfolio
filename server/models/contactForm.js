const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    first: { type: String },
    last: { type: String },
    feedback: { type: String, required: true }
})