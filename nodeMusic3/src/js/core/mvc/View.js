define([
    'backbone',
    'core/util/log'
], function(Backbone, log){
    var View = Backbone.View.extend({
        template: null, //you should define a template function
        render : function(){
            log('Core View render called.');

            this.$el.html(this.template());

            _.each(this.options.widgets, function(widgetMap){
                this.$el.find(widgetMap.selector).append(widgetMap.widget.render().el);
            }, this);

            return this;
        }
    });

    return View;
});