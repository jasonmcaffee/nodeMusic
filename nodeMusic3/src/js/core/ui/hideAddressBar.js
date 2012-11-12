define([
    'core/util/log',
    'jquery'
], function(log, $){
    log('hideAddressBar module loaded');

    function hideAddressBar(){
        log('hideAddressBar called');
        $(function(){
            $(window).on('load', function(){    //wait until everything is done loading.
                window.setTimeout(function() {
                   //since the heights are all percentage based, window.scrollTo won't do anything.
                    //make the height 120%, scrollto, then revert height back to 100%
                    //$('html').css('height', '150%');
                    //window.scrollTo(0, 0);          //don't bother
                    //$('html').css('height', '100%');
                },0);
            });
        });
    }

    return hideAddressBar;
});