define(["handlebars", "core/util/log"], function(Handlebars, log){ 
log("songControlsTemplate precompiled template function module loaded."); 
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {}; 
templates['songControlsTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "<div>\n    <div id=\"startSong\">Start</div>\n    <div id=\"stopSong\">Stop</div>\n</div>";}); 
Handlebars.registerPartial("songControlsTemplate", templates["songControlsTemplate"]); 
return templates["songControlsTemplate"]; 
});