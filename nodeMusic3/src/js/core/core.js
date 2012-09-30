define([
    'core/util/log',
    'core/plugins/handlebars/eachWithIndex',
    'core/plugins/handlebars/eachProperty'
], function(log, eachWithIndexPlugin, eachPropertyPlugin){
    log('core module loaded');

    var core = {
        initPlugins : function(){
            log('core.initPlugins called');
            eachWithIndexPlugin.init();
            eachPropertyPlugin.init();
        }
    };

    return core;
});