/**
 * @author Jason McAffee
 * The first script to load after requirejs.
 * Configures requirejs and begins the application initialization process.
 * 
 */

require([
  'mylib/log',
  'app'//,
],
function(log, app){
    log('main called.');
    app.initialize();
});