//require.config({
//    map:{
//        '*' : {
//            'jquery' : 'zepto'
//        }
//    }
//});

define([
    'core/util/log',
    'core/core',
    'jquery',
    'backbone',
    'lib/features/songs/controllers/SongsController',
    'lib/widgets/NavigationBar',
    'lib/features/artists/controllers/artistsController'
], function(log, core, $, Backbone, HomeController, NavigationBar, artistsController){

    function App(){
        log('app constructor called.');

        //load plugins, etc
        core.initPlugins();

        var self = this;
        //make everything easier to manage by waiting until dom ready to create controllers
        $(function(){
            log('app : document ready. creating controllers and establishing routes.');
            //create controllers
            self.songsController = new HomeController();

            //setup routes
            self.setupRoutes();

            //create global widgets
            self.navigationBar = new NavigationBar();

            //if there is no relative route, send them to the home page.
            log('current route is : ' + Backbone.history.fragment);
            if(Backbone.history.fragment == ""){
                //load the home page
                self.router.navigate('home', {trigger:true});
            }
        });



    }



    App.prototype.setupRoutes = function(){
        log('App.setupRoutes called.');
        var self = this;
        var AppRouter = Backbone.Router.extend({
            routes: {
                "demos/buttonsDemo" : "buttonsDemo",
                "demos/responsiveDemo" : "responsiveDemo",
                "demos/responsiveFlexBoxDemo" : "responsiveFlexBoxDemo",
                "home" : "home",
                "artists" : "artists",
                "demos/home" : "demosHome"
            },
            home: function(){
              log('router: home called');
                self.songsController.showHomePage();
            },
            artists: function(){
                log('router: artists called');
                artistsController.showArtists();
            }
        });

        this.router = new AppRouter();
        Backbone.history.start();
    };

    $(function(){
       log('document ready.');
    });

    return new App();
});