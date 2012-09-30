define([
    'core/util/log',
    'lib/features/songs/views/HomeView'
], function(log, HomeView){

    function SongsController(){
        log('SongsController constructor called.');
        this.homeView = new HomeView();
    }

    SongsController.prototype.showHomePage = function(){
        log('SongsController.showHomePage');
        this.homeView.render();
    };



    return SongsController;
});