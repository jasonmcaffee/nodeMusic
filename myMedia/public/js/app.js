/**
 * @author Jason McAffee
 * Application initialization occurs here.
 * 
 */

define([
	'mylib/log',
    'lib/jquery/jqueryModule',
    'mylib/widgets/musicItemsGridWidget',
    'mylib/widgets/MenuWidget'
],
function(log, $, musicItemsGridWidget, MenuWidget){

    function app(){
        (function($) {
            $.fn.fastClick = function(handler) {
                return $(this).each(function() {
                    new FastButton($(this)[0], handler);
                });
            };
        }(jQuery));
    }//end app

    app.prototype.initialize = function(){
        log('app.initialize has been called.');

        $(function(){
            log('document is ready.');

            var musicItemsGrid = new musicItemsGridWidget({musicItems:viewModel.musicItems});

            var menuWidget = new MenuWidget();
        });
    };//end initialize


    var application = new app();

    //main will call this function when loaded.
    return {
        initialize: application.initialize
    };
});