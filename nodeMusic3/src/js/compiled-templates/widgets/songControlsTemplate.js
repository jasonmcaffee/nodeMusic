define(["handlebars", "core/util/log"], function(Handlebars, log){ 
log("songControlsTemplate precompiled template function module loaded."); 
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {}; 
templates['songControlsTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "\n    <div id=\"previousButtonContainer\">\n        <img id=\"previousButton\" alt=\"previous button\" src=\"images/previous-button.png\">\n\n        <!--<input id=\"previousButton\" type=\"checkbox\"/>-->\n    </div>\n    <div id=\"playPauseButtonContainer\">\n        <!--<img id=\"playButton\" alt=\"play button\" src=\"images/play-button.png\">-->\n        <!--<img id=\"pauseButton\" alt=\"pause button\" src=\"images/pause-button.png\">-->\n\n    </div>\n    <div id=\"nextButtonContainer\">\n        <img id=\"nextButton\" alt=\"next button\" src=\"images/next-button.png\">\n    </div>\n    <div id=\"progressBar\">\n        <div id=\"progressBarInner\">&nbsp;</div>\n    </div>";}); 
Handlebars.registerPartial("songControlsTemplate", templates["songControlsTemplate"]); 
return templates["songControlsTemplate"]; 
});