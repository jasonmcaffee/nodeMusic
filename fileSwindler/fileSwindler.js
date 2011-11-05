var gh = require('grasshopper'); //for mvc framework
var http = require('http'); //for http client requests
var sys = require('sys');//for streaming response for file back to the client
var fileSwindlerRepository = require('./fileSwindlerRepository');

gh.get('/test', function(args){
  fileSwindlerRepository.filesSwindledCount(function(err, doc){
    console.log('error ' + err);
    console.log('doc ' + doc);
  });
  //fileSwindlerRepository.increaseFilesSwindledCount(function(newCount){
  //  console.log('horray! ' + newCount);
  //});
});

//get method for index
gh.get('/', function(args) {
  console.log('get method called');
  
  this.model['hasError'] = false;
  this.model['errorMessage'] = '';
  this.model['fileUrl'] = '';
  this.model['downloadFileAs'] = '';
  this.model['successMessage'] = '';
    

  this.render('index');
});

//post method for index
gh.post('/', function(){
  console.log('post method called');

  //error handler function to display error message to user
  this.handleError = function(errorMessage, fileUrl, downloadFileAs){
    this.model['hasError'] = true;
    this.model['errorMessage'] = errorMessage;
    this.model['fileUrl'] = fileUrl;
    this.model['downloadFileAs'] = downloadFileAs;
    this.model['successMessage'] = '';
    this.render('index');
  }

  //error handler function to display error message to user
  this.handleSuccess = function(successMessage, fileUrl, downloadFileAs){
    this.model['hasError'] = false;
    this.model['errorMessage'] = '';
    this.model['fileUrl'] = fileUrl;
    this.model['downloadFileAs'] = downloadFileAs;
    this.model['successMessage'] = successMessage;
    this.render('index');
  }



  //get posted parameters
  var fileUrl = this.params['fileUrl'];
  var downloadFileAs = this.params['downloadFileAs'];
  if(!downloadFileAs || downloadFileAs.length == 0)
    downloadFileAs = 'yourSwindledFile.txt';
  
  //function for extracting the host name from a given url 
  this.determineHostName = function(url){
    //break the url down into its parts
    var urlBreakDownResult = url.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/);
  
    //retrieve the host name from the breakdown. eg 'www.google.com'
    var hostName = urlBreakDownResult[4];
    console.log('determine hostName : ' + hostName);
    
    return hostName;
  }

  //get the host name and display error if not successful
  var hostName = this.determineHostName(fileUrl);
  if(!hostName || hostName.length <= 0){
    this.handleError('unable to determine the host name based on your input', fileUrl, downloadFileAs);
    return;//don't let the execution continue further down.
  }

  //give anonymous functions access to 'this'
  var self = this;

  //function for retrieving a file from a location.
  this.retrieveFile = function(){
	  console.log('retrieving file for hostName : ' + hostName + ' and fileUrl : ' + fileUrl);
	  
	  //create the client to retrieve the file
	  var fileRetrievalClient = http.createClient(80, hostName);

	  //make the request
	  var fileRequest;
	  try{
	    fileRequest = fileRetrievalClient.request('GET', fileUrl, {'host': hostName});
	    fileRequest.end();
	   
	  }catch(err){
	    this.handleError('Error while connecting to url: ' + err, fileUrl, downloadFileAs);
	  }
	  
	  
	  //handle the response for the request
	  fileRequest.on('response', function(response){
	    console.log('status: ' + response.statusCode);
	    console.log('headers: ' + JSON.stringify(response.headers));
	    
	    
	    //write an error message should we get a bad status code.
	    if(response.statusCode !== 200 && response.statusCode !== 302){
	      this.handleError('status code of : ' + response.statusCode + ' returned while getting file.', fileUrl, downloadFileAs);
            }
	    
	    //handle the data for the fileRetrieval response
	    //we'll write the chunk to the client's response as we receive it.
	    response.on('data', function(chunk){
	      console.log('writing chunk');
	      self.response.write(chunk, 'binary');
	    });
	    //sys.pump(response, self.response);

	    //once the file has been completely retrieved, close the client's response stream.
	    response.on('end', function(){
	      console.log('end of response');
	      
	      //handle 302 redirects by grabbing the new location and calling retrieveFile again.
	      if(response.statusCode === 302){
		//get the new file location from the header
		var newFileUrl = response.headers['location'];
	 		//console.log('new file url: ' + newFileUrl);
		//determine the new host name based off the new file url
		var newHostName = self.determineHostName(newFileUrl);
			//console.log('new host name: ' + newHostName);
	 	//set the instance variables for the new url and host name
		fileUrl = newFileUrl;
		hostName = newHostName;

		//retrieve the file from the new location
		self.retrieveFile();
		return;//don't let the function execute further down
	      }

	      //if the response code was anything but 200, display an error
	      if(response.statusCode === 200){
		self.response.end();
		//self.response.close();
		console.log('response status code 200 received');
		//self.handleSuccess('Your file is being retrieved!', fileUrl, downloadFileAs);

	      }
	    });//end of response end handler
	    
	    //handle errors
	    response.on('error', function(error){
	      console.log('error received for response');
	      self.handleError(error, fileUrl, downloadFileAs);
	    });
	    
	    //modify the headers so the file name can be whatever we want it to be.
	    if(response.statusCode === 200){
	      console.log('writing headers');
	      response.headers['Content-Disposition'] = 'attachment; filename=' + downloadFileAs;
	      self.response.writeHead(response.statusCode, response.headers);
	    }


	  });

  }//end function retrieveFile
  
  //retrieve the file
  this.retrieveFile();
});



gh.serve(80);
