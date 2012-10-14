define(["handlebars", "core/util/log"], function(Handlebars, log){ 
log("songControlsTemplate precompiled template function module loaded."); 
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {}; 
templates['songControlsTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "\n    <div id=\"previousButton\">Previous</div>\n    <div id=\"startPauseButton\">Start</div>\n    <div id=\"nextButton\">Next</div>\n    <div id=\"progressBar\">\n        <div id=\"progressBarInner\">&nbsp;</div>\n    </div>";}); 
Handlebars.registerPartial("songControlsTemplate", templates["songControlsTemplate"]); 
return templates["songControlsTemplate"]; 
});