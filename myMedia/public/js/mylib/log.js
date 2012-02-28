/**
 *
 */
define(function(){

    function log(object){
        if(console && console.log){
            console.log(object);
        }
    }

    return log;
});