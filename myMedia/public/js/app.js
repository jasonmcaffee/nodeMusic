/**
 * @author Jason McAffee
 * Application initialization occurs here.
 * 
 */

define([
	'mylib/log',
    'lib/jquery/jqueryModule',
    'mylib/widgets/musicItemsGridWidget'
],
function(log, $, musicItemsGridWidget){

    function app(){

    }//end app

    app.prototype.initialize = function(){
        log('app.initialize has been called.');

        $(function(){
            log('document is ready.');

            var musicItemsGrid = new musicItemsGridWidget({musicItems:viewModel.musicItems});
        });
    };//end initialize


    var application = new app();

    //main will call this function when loaded.
    return {
        initialize: application.initialize
    };
});