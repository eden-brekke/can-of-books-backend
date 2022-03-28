'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;


const bookSchema=new Schema({
  title:{type: String},
  description:{type:String},
  email:{type:String},
  status:{type:Boolean},
})

const Book = mongoose.model('book', bookSchema);

module.exports=Book;
