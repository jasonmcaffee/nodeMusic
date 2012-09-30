define([
    'core/util/log',
    'lib/features/songs/views/HomeView'
], function(log, HomeView){

    function SongsController(){
        log('SongsController constructor called.');

    }

    SongsController.prototype.showHomePage = function(){
        log('SongsController.showHomePage');
        this.homeView = new HomeView();
        this.homeView.render();
    };



    return SongsController;
});