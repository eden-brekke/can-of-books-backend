'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./models/book.js');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;


mongoose.connect(process.env.DB_URL);

app.get('/', (request, response)=> {
  response.send('well hiiii');
})

app.get('/books', async (request, response)=>{
  const filteredQuery = {};

  if(request.query.title){
    filteredQuery.title = request.query.title
  } 
  const books = await Book.find(filteredQuery);

  response.send(books)
})

app.get('/test', (request, response) => {

  response.send('test request received')

})

app.get('*', (request, response) => {
  response.status(404).send('No Such Directory');
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
