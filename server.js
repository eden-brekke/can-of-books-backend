'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./models/book.js');

const app = express();
app.use(cors());
// add middleware to receive json as a request within express
app.use(express.json());

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

app.post('/books', async (request, response)=> {
  console.log(request.body);
  try{
    //Rest terms - post | Monogoose model.create
    let createdBook = await Book.create(request.body);
    response.status(201).send(createdBook);
  } catch (error){
    next(error);
  }
})

app.delete('/books/:id', async (request, response)=> {
  let id = request.params.id;
  try{
    // Rest term - delete | mongoose Model.findByIdAndDelete()
    console.log(id);
    await Book.findByIdAndDelete(id);
    response.status(204).send('Book Beleted');
  } catch (error){
    next(error);
  }
})
app.get('/test', (request, response) => {

  response.send('test request received')

})

app.get('*', (request, response) => {
  response.status(404).send('No Such Directory');
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
