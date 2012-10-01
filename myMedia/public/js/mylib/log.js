/**
 *
 */
define(function(){

    function log(object){
        //return;
        try{
        if(console && console.log){
            console.log(object);
        }
        }catch(e){

        }
    }

    return log;
});