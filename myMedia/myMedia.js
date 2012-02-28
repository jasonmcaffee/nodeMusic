
/* ==================================================================================================== imports ================*/
GLOBAL.DEBUG = true;//debugging is nice.

var http = require('http');
var ejs = require('ejs');//view engine for templates
var express = require('express');
var musicItemRepository = require('./lib/musicItemRepository.js').musicItemRepository;//fetching files
var musicItemsViewModelFactory = require('./lib/musicItemsViewModel').musicItemsViewModelFactory;

var app = express.createServer();//mvc server

/* ====================================================================================================  Configuration ======== */
var config = {
    listeningPort: 2000,
    musicRootFilePath : '/musicShare/music'
};

//change template tags from <% %> to {{ }}
ejs.open = '{{';
ejs.close = '}}';

app.use(express.bodyParser({uploadDir:'./public/uploadedFiles', keepExtension:true}));//so we can have post & req.body  e.g. req.body.something
app.set('view engine', 'ejs');//we are using ejs for server side templating
app.set('view options', { layout: false }); //i don't need layouts right now
app.register('.html', require('ejs'));//all .html files served up will be considered ejs templates.
app.use(express.static(__dirname + '/public')); //static resources dir. (js, css, etc)

var viewModel = {viewModel:{musicItems:[]}};
musicItemRepository.init(config.musicRootFilePath);

musicItemRepository.getMusicItems(function(musicItems){
    console.log('getMusicItems callback');
    viewModel = musicItemsViewModelFactory.createViewModel(musicItems);
});


/* ====================================================================================================  Controller Functions ==== */
app.get('/', function(req,res){
    console.log('main entry point get called.');
    res.render('../views/main.html', viewModel);

});


/* ====================================================================================================  Application Start ======== */
app.listen(config.listeningPort);
console.log('mymedia listening on port: ' + config.listeningPort);