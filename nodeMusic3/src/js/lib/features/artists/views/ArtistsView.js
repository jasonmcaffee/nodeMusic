define([
    'core/util/log',
    'backbone',
    'underscore',
    'jquery',
    'compiled-templates/features/artists/artistPageTemplate',
    'lib/features/artists/widgets/ArtistGridWidget'
], function(log, Backbone, _, $, homePageTemplateFunction, ArtistGridWidget){

    var ArtistsView = Backbone.View.extend({
        el:'#pages',
        initialize : function(){
            log('ArtistsView.initialize called.' + this.el);
            this.options.widgets = [
                {selector:'#artistsGridWidget', widget:new ArtistGridWidget()}
            ];
        },
        render: function(){ //don't call until the dom is ready
            log('ArtistsView.render called.');

            this.$el.html(homePageTemplateFunction());

            _.each(this.options.widgets, function(widgetMap){
                this.$el.find(widgetMap.selector).append(widgetMap.widget.render().el);
            }, this);

            return this;
        }
    });

    return ArtistsView;
});