define([
    'core/core',
    'lib/widgets/SongControls',
    'compiled-templates/widgets/headerTemplate'
],function(core, SongControlsWidget, headerTemplate){

    var HeaderWidget = core.mvc.View.extend({
        template: headerTemplate,
        initialize:function(){
            this.options.widgets = [
                {selector:'#songControlsWidget', widget:new SongControlsWidget()}
            ];
        }
    });

    return HeaderWidget;
});