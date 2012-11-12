define([
    'core/core',
    'underscore',
    'jquery',
    'compiled-templates/features/artists/artistPageTemplate',
    'lib/features/artists/widgets/ArtistGridWidget',
    'lib/widgets/HeaderWidget',
    'lib/widgets/Menu'
], function(core, _, $, pageTemplate, ArtistGridWidget, HeaderWidget, MenuWidget){

    var ArtistsView = core.mvc.View.extend({
        template: pageTemplate,
        el:'#pages',
        initialize : function(){
            core.log('ArtistsView.initialize called.' + this.el);
            this.options.widgets = [
                {selector:'#artistsGridWidget', widget:new ArtistGridWidget()},
                {selector:'#headerWidget', widget:new HeaderWidget()},
                {selector:'#menuWidget', widget:new MenuWidget()}
            ];
        }
    });

    return ArtistsView;
});