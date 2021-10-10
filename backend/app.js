// Setup
const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const path = require('path');
var db = require('./controllers/db');
const cookieParser = require('cookie-parser');
const api = require('./controllers/api');


const app = express();

const publicDirectory = path.join(__dirname, '../frontend/public');
app.use(express.static(publicDirectory));

// Parse URL-encoded bodies (as sent by forms)
app.use(express.urlencoded({ extended: false }));
// Parse JSON bodies
app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../frontend/views'));
app.set('public', path.join(__dirname, '../frontend/public'));

// Define Routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

//app.listen(5000, () => {
   // console.log('Server started on port 5000');
//});

app.listen(8888, () =>
  console.log(
    'HTTP Server up. Now go to http://localhost:8888/login in your browser.'
  )
);