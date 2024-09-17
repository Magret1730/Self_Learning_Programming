// require('dotenv').config();
// const express = require('express');
// const path = require('path');
// const posts = require('./routes/posts');

import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import path from 'path';
import posts from './routes/posts.js'
import exp from 'constants';
const port = 8000;

const app = express();

// Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/posts', posts)

app.listen(port, () => console.log(`Server is running on PORT ${port}`));
