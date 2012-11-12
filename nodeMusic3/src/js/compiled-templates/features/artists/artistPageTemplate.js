define(["handlebars", "core/util/log"], function(Handlebars, log){ 
log("artistPageTemplate precompiled template function module loaded."); 
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {}; 
templates['artistPageTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "<div class=\"artist-page\">\n    <div id=\"headerWidget\"></div>\n\n    <div id=\"menuWidget\"></div>\n    <div id=\"artistsGridWidget\">\n    </div>\n\n</div>";}); 
Handlebars.registerPartial("artistPageTemplate", templates["artistPageTemplate"]); 
return templates["artistPageTemplate"]; 
});