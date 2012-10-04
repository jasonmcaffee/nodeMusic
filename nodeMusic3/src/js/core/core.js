define([
    'core/util/log',
    'backbone',
    'core/plugins/handlebars/eachWithIndex',
    'core/plugins/handlebars/eachProperty',
    'core/mvc/View'
], function(log, Backbone, eachWithIndexPlugin, eachPropertyPlugin, View){
    log('core module loaded');

    var core = {

        init:function(){
            this.initPlugins();
        },
        initPlugins : function(){
            log('core.initPlugins called');
            eachWithIndexPlugin.init();
            eachPropertyPlugin.init();
        },
        mvc : {
            View : View,
            Model : Backbone.Model
        },
        log : log
    };


    return core;
});