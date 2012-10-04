define([
    'core/core',
    'compiled-templates/widgets/songControlsTemplate'
], function(core, songControlsTemplate){
    var view = core.mvc.View.extend({
        template: songControlsTemplate,
        initialize : function(){
            core.log('SongControls widget initialized');
        },
        events:{

        },
        render : function(){
            return this;
        }
    });

    return view;
});