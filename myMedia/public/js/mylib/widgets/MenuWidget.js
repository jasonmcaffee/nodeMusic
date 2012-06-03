define([
    'mylib/log',
    'lib/jquery/jqueryModule',
    'mylib/models/MusicPlayer'
], function(log, $, musicPlayer){

    function MenuWidget(optionsParam){
        log('MenuWidget constructor called.');
        this.options = {
            menuId : 'menu', //so we can create a jquery object
            playButtonId : 'playButton',
            stopButtonId : 'stopButton',
            menuButtonId : 'menuButton',
            menuContainerId : 'menuContainer'
        };

        $.extend(this.options, optionsParam);

        //jquery objects
        this.$menu = $('#'+this.options.menuId);
        this.$menuButton = $('#'+this.options.menuButtonId);
        this.$menuContainer = $('#'+this.options.menuContainerId);
        this.menuIsVisible = false;

        //event registry
        this.registerMenuButtonClickHandler();
    }

    MenuWidget.prototype.registerMenuButtonClickHandler = function(){
        var self = this;//callbacks

//        this.$menuButton.fastClick(function(e){
//            self.$menu.toggle();
//        });

         this.$menuButton.on('click', function(){
            log('menuButton has been clicked.');
            //self.$menu.toggle();
             //self.$menuContainer.addClass('menu-container-slide-down');
             //var slideClass = self.menuIsVisible? 'menu-slide-up' : 'menu-slide-down';
             //self.$menu.addClass(slideClass);

             if(self.menuIsVisible){
                 self.$menu.removeClass('menu-slide-down');
                 //self.$menu.addClass('menu-slide-up');
             }else{
                 self.$menu.addClass('menu-slide-down');
                 //self.$menu.removeClass('menu-slide-up');
             }
             self.menuIsVisible = !self.menuIsVisible;
         });


    };

    return MenuWidget;
});