//module dependencies ========================================================================================================
var express = require('express');
var path = require('path');
var connect = require('connect');
var gzippo = require('gzippo');
var fs = require('fs');
var musicItemRepository = require('./lib/musicItemRepository.js').musicItemRepository;//fetching files
var musicItemsViewModelFactory = require('./lib/musicItemsViewModel').musicItemsViewModelFactory;

//create the app server
var app = express.createServer();


//configuration ===============================================================================================================
var config = {
    viewsDirectory : __dirname + '/views/',
    port: 4020,
    publicStaticFiles :  path.resolve(__dirname + '/../dist') ,
    musicRootFilePath : '/volumes/fourtera_2012/music'
};
app.configure(function(){


     // Parses form encoded data so we can get it in json form
    app.use(express.bodyParser());

    // The methodOverride middleware allows Express apps to behave like RESTful apps, as popularised by Rails; HTTP methods like PUT can be used through hidden inputs
    app.use(express.methodOverride());

    //gzip all static files in public folder (js, css, etc)
    app.use(gzippo.staticGzip(config.publicStaticFiles));

    //gzips the server side template views
    app.use(connect.compress());//gzip functionality

    //show stacktraces to the public
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

    //log incoming requests
    app.use(express.logger({
        'stream' : fs.createWriteStream(__dirname+'/../node-server/logs/node.log',{flags: 'a'})
    }));

});


//server side templating ========================================================================================================
var ejs = require('ejs');//view engine for templates
ejs.open = 'µ';//eliminate conflicts with clientside templating by using our own open and close tags for ejs templates.
ejs.close = 'µ';
app.set('view engine', 'ejs');//we are using ejs for server side templating
app.set('view options', { layout: false }); //i don't need layouts right now
app.register('.html', require('ejs'));//all .html files served up will be considered ejs templates.



//app startup
var viewModel = {viewModel:{musicItems:[]}};
musicItemRepository.init(config.musicRootFilePath);

musicItemRepository.getMusicItems(function(musicItems){
    console.log('getMusicItems callback');
    viewModel = musicItemsViewModelFactory.createViewModel(musicItems);
});

//server response functions =====================================================================================================
app.get('/', function(req,res){
    //var userAgent = 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; O2 Xda 2s;PPC;240x320; PPC; 240x320)';// req.headers['user-agent'];
    //var deviceInfo = wurfl.get(userAgent);
    console.log('node music 3 home');

    res.render(config.viewsDirectory + 'index.html', viewModel);
});


app.get('/getSong', function(req, res){
    var songId = req.query['songId'];
    var self = this;

    //musicItemRepository.init(nodeMusic.options.musicRootFilePath);

    musicItemRepository.getMusicItemById(songId, function(musicItem){
        if(!musicItem) {//end things if we can't find the song
            //musicItem = {id:-1, songName: 'not found', artist: 'not found'};
            res.write('sorry, I couldnt find the id: ' + songId);
            res.end();
        }else{//we have found the song, so read it from disk and send it to them.
            console.log('getMusicItemById callback. found item with id: ' + musicItem.id);

            //self.response.write('hello, i found this song: ' + musicItem.songName);
            //var self2 = self;
            //self.response.write(chunk, 'binary');
            console.log('attempting to read file: ' + musicItem.fullPath);
            fs.readFile(musicItem.fullPath, function (err, data) {
                if (err) throw err;
                console.log('sending chunk with size :' + data.length);

                res.writeHead(200, {
                    'Content-Length': data.length,
                    'Content-Type': 'audio/mpeg'
                });

                res.write(data, 'binary');

                res.end();
            });


            //self.response.end();
        }
    }, function(errorMessage){
        res.write('sorry, I couldnt find the id: ' + songId);
        res.end();
    });


});

// Start server ===================================================================================================================
console.log('Starting node music 3 server on port ' + config.port);
app.listen(config.port);

