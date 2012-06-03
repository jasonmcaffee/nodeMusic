/**
 *
 */
define(function(){

    function log(object){
        try{
        if(console && console.log){
            console.log(object);
        }
        }catch(e){

        }
    }

    return log;
});