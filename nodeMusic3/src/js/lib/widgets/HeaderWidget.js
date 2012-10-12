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
        },
        events:{
            'click #menuButton' : function(e){
                core.log('menuButton clicked');
                this.$el.find('#menuExpanded').toggle();
            }
        }
    });

    return HeaderWidget;
});