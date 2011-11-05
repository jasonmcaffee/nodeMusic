var cradle = require('cradle');
cradle.setup(
              {options: {cache: true, raw: false}});

//console.log('connection : ' + cradle.Connection);
var c = new(cradle.Connection);

var db = c.database('fileSwindler');
db.create();

db.save('filesSwindled', {count: 1}, function(err, res){
  console.log('error : ' + err);
  console.log('res : ' + res);
});
