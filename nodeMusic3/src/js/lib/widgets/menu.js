define([
'core/core',
'compiled-templates/widgets/menuTemplate'
], function(core, menuTemplate){
    core.log('Menu widget module loaded');
    var Menu = core.mvc.View.extend({
        id: 'menuContainer',
        template:menuTemplate,
        events:{

        }
    });

    return Menu;
});