'use strict';

const express = require('express');
const log = require('morgan')('dev');
const bodyParser = require('body-parser');
const properties = require('./config/properties');
const db = require('./config/database');
const app = express();

const moviesRoutes = require('./app/movies/movies.routes');
const genresRoutes = require('./app/genres/genres.routes');


const Port = process.env.PORT || properties.PORT
const Host = process.env.HOST || properties.HOST
// APP

// call database connectivity function 
db();


//configure bodyparser
const bodyParserJSON = bodyParser.json();
const bodyParserURLeNCODED = bodyParser.urlencoded({
    extended: true
});

// configure app.use()
app.use(log);
app.use(bodyParserJSON);
app.use(bodyParserURLeNCODED);

// EROR Handling  

app.use(function (req, res, next) {
    res.setHeader("Access-Control-ALLOW-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentilas", "true");
    res.setHeader("Access-control-ALLOW-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
    next();

});



// USE EXPRESS router 
app.use('/',(req,res)=>{
    res.send("App started sucessfully");
})
app.use('/api/genres', genresRoutes);
app.use('/api/movies', moviesRoutes);



app.listen(Port,Host,(req, res) => {
    console.log(`server is running on ${Port} and  ${Host} `)
})

module.exports = app;