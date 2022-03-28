'use strict';

const mongoose = require('mongoose');
const { getMaxListeners } = require('./models/book');
require('dotenv').config();

mongoose.connect(process.env.DB_URL);

const Book = require('./models/book');

async function seed(){
  await Book.create({
    title: 'Redwall',
    description: 'The animals of Redwall Abbey are peaceful by nature—yet when they encounter evil, the kind-hearted mice, hares, and otters are brave in the face of battle. In this epic series, adventure abounds and legends are made.',
    email: 'wildwoodwaltz@gmail.com',
    status: true,
  })
  await Book.create({
    title: 'Mistborn',
    description: 'For a thousand years the ash fell and no flowers bloomed. For a thousand years the Skaa slaved in misery and lived in fear. For a thousand years the Lord Ruler, the "Sliver of Infinity," reigned with absolute power and ultimate terror, divinely invincible. Then, when hope was so long lost that not even its memory remained, a terribly scarred, heart-broken half-Skaa rediscovered it in the depths of the Lord Ruler\'s most hellish prison. Kelsier "snapped" and found in himself the powers of a Mistborn. A brilliant thief and natural leader, he turned his talents to the ultimate caper, with the Lord Ruler himself as the mark.',
    email: 'eden.lorrai@gmail.com',
    status: true,
  })
  await Book.create({
    title: "Busy, Busy Town",
    description: 'Join Lowly Worm, Huckle Cat, and other beloved characters for a day in Richard Scarry\'s Busy, Busy Town. Visit the school, the farm, the post office, and many more fun and exciting places in this classic book that teaches little ones all about what goes on in their very own communities.',
    email: 'wildwoodwaltz@gmail.com',
    status: true,
  })
  mongoose.disconnect();
}

seed();