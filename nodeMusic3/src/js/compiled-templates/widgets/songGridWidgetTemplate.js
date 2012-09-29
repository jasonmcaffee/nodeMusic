define(["handlebars", "core/util/log"], function(Handlebars, log){ 
log("songGridWidgetTemplate precompiled template function module loaded."); 
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {}; 
templates['songGridWidgetTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, foundHelper, self=this;


  buffer += "<div id=\"songsGrid\">\n    <ul id=\"songs\">\n        ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.songRowsTemplate, 'songRowsTemplate', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n</div>";
  return buffer;}); 
Handlebars.registerPartial("songGridWidgetTemplate", templates["songGridWidgetTemplate"]); 
return templates["songGridWidgetTemplate"]; 
});