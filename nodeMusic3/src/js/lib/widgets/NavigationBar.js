define([
    'core/util/log',
    'jquery',
    'modernizer'
], function(log, $, modernizer){

    function NavigationBar(options){
        log('NavigationBar constructor called.');
        this.options = {
            navigationBarId : 'navbar',
            menuItemsExpandedId : 'menuExpanded',
            menuButtonSelector : '#menuButton', //menu button selector for touch events to expand menu
            menuItemSelector : 'ul > li > a',
            menuExpandedHiddenClass : 'menu-expanded-shown'//'menu-expanded-hidden'
        };
        $.extend(this.options, options);

        var self = this;

        //used for when we are dealing with a small screen.
        self.isMenuExpanded = false;

        //init
        $(function(){
            self.$navigationBar = $('#'+self.options.navigationBarId);
            self.$menuItemsExpanded = $('#'+self.options.menuItemsExpandedId);

            log('modernizer.touch is :' + modernizer.touch);
            self.registerMenuTouchHandlers();
            self.registerMenuItemTouchHandlers();
        });

    }

    /**
     * Need to hide menu when a menu item is touched
     */
    NavigationBar.prototype.registerMenuItemTouchHandlers = function(){
        var self = this;
        function handleClickOrTouchStart(){
            if(!self.isMenuExpanded){
                self.$menuItemsExpanded.addClass(self.options.menuExpandedHiddenClass);
            }else{
                self.$menuItemsExpanded.removeClass(self.options.menuExpandedHiddenClass);
            }

            self.isMenuExpanded = !self.isMenuExpanded;
        }

//        if(modernizer.touch){
//            this.$menuItemsExpanded.on('touchstart', this.options.menuItemSelector, handleClickOrTouchStart);
//        }else{
//            this.$menuItemsExpanded.on('click', this.options.menuItemSelector, handleClickOrTouchStart);
//        }
        this.$menuItemsExpanded.on('click', this.options.menuItemSelector, handleClickOrTouchStart);
    };

    /**
     * Should only be called after document ready
     */
    NavigationBar.prototype.registerMenuTouchHandlers = function(){
        var originalUrl;
        var self = this;
        self.isMenuExpanded = false;

        function handleClickOrTouchStart(){
            var $this = $(this);
            log('touchstart fired for : {0}', $this.attr('alt'));

            //image for button should change to pressed
            originalUrl = $this.attr('src');
            //$this.attr('src', 'images/menu-button-pressed.png');    //todo: use sprites

            //have to do this because :active isn't supported very well.
            if(!self.isMenuExpanded){
                self.$menuItemsExpanded.addClass(self.options.menuExpandedHiddenClass);
            }else{
                self.$menuItemsExpanded.removeClass(self.options.menuExpandedHiddenClass);
            }

            self.isMenuExpanded = !self.isMenuExpanded;
        }

        //only listen for touch events if they are supported.
        if(modernizer.touch){
            this.$navigationBar.on('touchstart', this.options.menuButtonSelector, handleClickOrTouchStart);

            this.$navigationBar.on('touchend', this.options.menuButtonSelector, function(){
                var $this = $(this);
                log('touchsend fired for : {0}', $this.attr('alt'));

                //image back to original
               // $this.attr('src', originalUrl);
            });
        }else{
            this.$navigationBar.on('click', this.options.menuButtonSelector, handleClickOrTouchStart);
        }

    };

    return NavigationBar;
});
