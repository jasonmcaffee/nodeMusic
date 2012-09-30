define([
    'core/util/log',
    'lib/views/HomeView'
], function(log, HomeView){

    function HomeController(){
        log('HomeController constructor called.');
        this.homeView = new HomeView();
    }

    HomeController.prototype.showHomePage = function(){
        log('HomeController.showHomePage');
        this.homeView.render();
    };



    return HomeController;
});