//module dependencies ========================================================================================================
var express = require('express');
var path = require('path');
var connect = require('connect');
var gzippo = require('gzippo');
var fs = require('fs');
var musicItemRepository = require('./lib/musicItemRepository.js').musicItemRepository;//fetching files
var musicItemsViewModelFactory = require('./lib/musicItemsViewModel').musicItemsViewModelFactory;
var util = require('util');

//working, but not all that useful
//var wurfl = require('wurfl');
//wurfl.loadSync();


//create the app server
var app = express();//express.createServer();


//configuration ===============================================================================================================
var config = {
    viewsDirectory : __dirname + '/views/',
    port:4020,
    publicStaticFiles :  path.resolve(__dirname + '/../dist'),
    musicRootFilePath : '/volumes/fourtera_2012/music'
};
app.configure(function(){
    var jeffAndSarahPhotos = path.resolve('/volumes/fourtera_2012/sarah_and_jeffs_wedding');
    app.use(gzippo.staticGzip(jeffAndSarahPhotos));

     // Parses form encoded data so we can get it in json form
    app.use(express.bodyParser());

    // The methodOverride middleware allows Express apps to behave like RESTful apps, as popularised by Rails; HTTP methods like PUT can be used through hidden inputs
    app.use(express.methodOverride());

    //gzip all static files in public folder (js, css, etc)
    app.use(gzippo.staticGzip(config.publicStaticFiles));

    //gzips the server side template views
    app.use(gzippo.compress());//gzip functionality

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
//app.register('.html', require('ejs'));//all .html files served up will be considered ejs templates.
app.engine('html', require('ejs').renderFile);


//app startup
var viewModel = {viewModel:{musicItems:[]}};
musicItemRepository.init(config.musicRootFilePath);

musicItemRepository.getMusicItems(function(musicItems){
    console.log('getMusicItems callback');
    //viewModel = musicItemsViewModelFactory.createViewModel(musicItems);
    viewModel = musicItemsViewModelFactory.createArtistViewModel(musicItems);
    //console.log('testing : ' + viewModel.viewModel.artists['air'].albums['2006 - late night tales'].songs.length);
    //var air = JSON.stringify(viewModel.viewModel.artists['air']);
    //console.log(air);
});

//server response functions =====================================================================================================
app.get('/', function(req,res){

    var userAgent = req.headers['user-agent'];
    console.log('user agent: ' + userAgent);
    ////working, but not all that useful
    //var deviceInfo = wurfl.get(userAgent);
    //console.log(JSON.stringify(deviceInfo));

    res.render(config.viewsDirectory + 'index.html', viewModel);
});


app.get('/getSong', function(req, res){
    var songId = req.query['songId'];
    var self = this;
    console.log('====================getSong with id: ' + songId);
    //musicItemRepository.init(nodeMusic.options.musicRootFilePath);

    console.log('--- request range: '+ req.headers.range);

    var range = req.headers.range;

    musicItemRepository.getMusicItemById(songId, function(musicItem){
        if(!musicItem) {//end things if we can't find the song
            //musicItem = {id:-1, songName: 'not found', artist: 'not found'};
            res.write('sorry, I couldnt find the id: ' + songId);
            res.end();
        }else{//we have found the song, so read it from disk and send it to them.
            console.log('getMusicItemById callback. found item with id: ' + musicItem.id);
            console.log('attempting to read file: ' + musicItem.fullPath);


            try{

                //https://groups.google.com/forum/?fromgroups=#!topic/nodejs/gzng3IJcBX8
                //if the range was requested, caclulate appropriate byte range
                //set response status to 206
                if(range){
                    var byteRanges = range.replace(/bytes=/, '').split('-');
                    var ini = parseInt(byteRanges[0], 10);
                    var end = parseInt(byteRanges[1], 10);
                    if(isNaN(end)){ //chrome doesn't send 0-X, sometimes just 0-
                        end = musicItem.size;
                    }
                    console.log('byteranges: ' + JSON.stringify(byteRanges));
                    console.log('ini: ' + ini);
                    console.log('end: ' + end);

                    var chunk = end - ini + 1;
                            console.log('chunk is: ' + chunk);
                    var contentRangeString = 'bytes '+ ini + '-'+ end +'/' + musicItem.size;
                            console.log('contentRangeString is: ' + contentRangeString);

                    res.writeHead(206,{
                        'Content-Type':'audio/mpeg',
                        'Content-Length':chunk,
                        'Content-Range': contentRangeString,
                        'Accept-Range': 'bytes'
                    });

                   var data = fs.readFileSync(musicItem.fullPath);
                    res.end(data);


                }else{
                    res.writeHead(200,{
                        'Content-Type':'audio/mpeg'
                    });
                    //just write out the whole file.
                    var data = fs.readFileSync(musicItem.fullPath);
                    res.end(data);
                }

               // var readStream = fs.createReadStream(musicItem.fullPath);
                // We replaced all the event handlers with a simple call to util.pump()
                //util.pump(readStream, res);
            }catch(ex){
                console.log('music server exception: ' + ex);
            }

        }
    }, function(errorMessage){
        res.write('sorry, I couldnt find the id: ' + songId);
        res.end();
    });


});

app.get('/getSongNewOld', function(req, res){
    var songId = req.query['songId'];
    var self = this;
    console.log('====================getSong with id: ' + songId);
    //musicItemRepository.init(nodeMusic.options.musicRootFilePath);

    musicItemRepository.getMusicItemById(songId, function(musicItem){
        if(!musicItem) {//end things if we can't find the song
            //musicItem = {id:-1, songName: 'not found', artist: 'not found'};
            res.write('sorry, I couldnt find the id: ' + songId);
            res.end();
        }else{//we have found the song, so read it from disk and send it to them.
            console.log('getMusicItemById callback. found item with id: ' + musicItem.id);

            console.log('attempting to read file: ' + musicItem.fullPath);
            res.set('Content-Type', 'audio/mp3');
            res.set('Content-Length', musicItem.size);
            //song duration on iphone is infinity
            //http://stackoverflow.com/questions/9629223/audio-duration-returns-infinity-on-safari-when-mp3-is-served-from-php
            var shortSize = musicItem.size -1;
            console.log('shortSize is ' + shortSize);
            res.set("Pragma", "public");
            res.set("Expires", "0");
            res.set('Content-Transfer-Encoding', 'binary');
            res.set('Content-Disposition', 'inline; filename="' + musicItem.songName +  '"');
            res.set( 'Content-Range', 'bytes 0-'+ shortSize +'/' + musicItem.size);
            res.set( 'Accept-Ranges', 'bytes');
            res.set('X-Pad', 'avoid browser bug');
            //res.set('Cache-Control', 'no-cache');
            res.set('ETag', songId);
            //

            var readStream = fs.createReadStream(musicItem.fullPath);
            // We replaced all the event handlers with a simple call to util.pump()
            util.pump(readStream, res);

        }
    }, function(errorMessage){
        res.write('sorry, I couldnt find the id: ' + songId);
        res.end();
    });


});

app.get('/getSongOld', function(req, res){
    var songId = req.query['songId'];
    var self = this;
    console.log('====================getSong with id: ' + songId);
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

//                res.writeHead(200, {
//                    'Content-Length': data.length,
//                    'Content-Type': 'audio/mpeg'
//                });


                res.set('Content-Type', 'audio/mpeg');
                //res.set('Content-Type', 'application/octet-stream');  //<-- doesn't fix the issue.
                res.set('Content-Length', data.length);
                //song duration on iphone is infinity
                //http://stackoverflow.com/questions/9629223/audio-duration-returns-infinity-on-safari-when-mp3-is-served-from-php
                //res.set("Pragma: public");
                //res.set("Expires: 0");
               // res.set('Content-Disposition: inline; filename="' + musicItem.songName +  '"');
                            //res.set( 'Content-Range: bytes 0-'.$shortlen.'/'.$fsize);
                //res.set( 'Accept-Ranges: bytes');
                //res.set('X-Pad: avoid browser bug');
               // res.set('Cache-Control: no-cache');
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
