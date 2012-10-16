define([
    'core/util/log',
    'backbone',
    'core/plugins/handlebars/eachWithIndex',
    'core/plugins/handlebars/eachProperty',
    'core/mvc/View',
    'core/touch/customEvents',
    'core/device/deviceInfo',
    'modernizer'
], function(log, Backbone, eachWithIndexPlugin, eachPropertyPlugin, View, customEvents, deviceInfo, modernizer){
    log('core module loaded');

    var core = {

        init:function(){
            this.initPlugins();
            customEvents.init();
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
        log : log,
        deviceInfo : deviceInfo
    };

    log('device os: {0}  version: {1}', deviceInfo.os.name, deviceInfo.os.version);
    return core;
});