define(["handlebars", "core/util/log"], function(Handlebars, log){ 
log("songControlsTemplate precompiled template function module loaded."); 
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {}; 
templates['songControlsTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "<ul>\n    <li id=\"startButton\">Start</li>\n    <li id=\"stopButton\">Stop</li>\n    <li id=\"pauseButton\">Pause</li>\n    <li id=\"nextButton\">Next</li>\n    <li id=\"previousButton\">Previous</li>\n    <li id=\"progressBar\"></li>\n</ul>";}); 
Handlebars.registerPartial("songControlsTemplate", templates["songControlsTemplate"]); 
return templates["songControlsTemplate"]; 
});