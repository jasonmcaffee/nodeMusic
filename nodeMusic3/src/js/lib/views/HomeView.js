define([
    'core/util/log',
    'backbone',
    'underscore',
    'jquery',
    'compiled-templates/homePageTemplate',
    'lib/widgets/SongGridWidget'
], function(log, Backbone, _, $, homePageTemplateFunction, SongGridWidget){

    var HomeView = Backbone.View.extend({
        el:'#pages',
        initialize : function(){
            log('HomeView.initialize called.' + this.el);
            this.options.widgets = [
                {selector:'#songsGridWidget', widget:new SongGridWidget()}
            ];
        },
        render: function(){ //don't call until the dom is ready
            log('HomeView.render called.');

            this.$el.html(homePageTemplateFunction());
            _.each(this.options.widgets, function(widgetMap){
                this.$el.find(widgetMap.selector).append(widgetMap.widget.render().el);
            }, this);

            return this;
        }
    });

    return HomeView;
});