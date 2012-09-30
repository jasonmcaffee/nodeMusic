define(["handlebars", "core/util/log"], function(Handlebars, log){ 
log("artistGridWidgetTemplate precompiled template function module loaded."); 
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {}; 
templates['artistGridWidgetTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, foundHelper, self=this;


  buffer += "<div id=\"artistsGrid\">\n    <ul id=\"artists\">\n        ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.artistRowsTemplate, 'artistRowsTemplate', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n</div>";
  return buffer;}); 
Handlebars.registerPartial("artistGridWidgetTemplate", templates["artistGridWidgetTemplate"]); 
return templates["artistGridWidgetTemplate"]; 
});