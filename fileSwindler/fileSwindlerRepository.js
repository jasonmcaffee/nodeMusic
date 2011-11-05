var cradle = require('cradle');
cradle.setup({
              options: {cache: true, raw: false}});

exports.filesSwindledCount = function(cb){
  console.log('filesSwindledCount called.');
  var c = new(cradle.Connection);
  var db = c.database('fileSwindler');
  db.get('filesSwindled', function(err, doc){
    console.log('the doc is ' + doc);
    cb(err, doc);//call the callback function   
  });
}

exports.increaseFilesSwindledCount = function(cb){
  console.log('increaseFilesSwindledCount called');
  var c = new(cradle.Connection);
  var db = c.database('fileSwindler');
  db.get('filesSwindled', function(err, doc){
    console.log('error : ' + err);
    console.log('doc : ' + doc);
    if(doc.count){
      doc.count = 0;
    }
    cb(doc.count++);
    console.log('current files swindeled : ' + doc.count);
    db.save('filesSwindled', {count: doc.count}, function(err, res){ console.log('save complete')});
  });
}
