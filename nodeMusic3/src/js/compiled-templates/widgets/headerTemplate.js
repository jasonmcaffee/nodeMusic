define(["handlebars", "core/util/log"], function(Handlebars, log){ 
log("headerTemplate precompiled template function module loaded."); 
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {}; 
templates['headerTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "<div id=\"navbar\">\n\n    <div id=\"expandedNavBar\">\n        <input id=\"search\" type=\"text\">\n    </div>\n    <div id=\"menuCollapsed\">\n        <div id=\"menuButtonContainer\">\n            <img id=\"menuButton\" alt=\"menu button\" src=\"images/menu-button.png\">\n        </div>\n        <div id=\"songControlsWidget\"></div>\n\n        <div id=\"grabber\">:::</div>\n    </div>\n</div>\n\n<div id=\"menuExpanded\">\n    <ul>\n        <li><a href=\"/#artists\">Artists</a></li>\n        <li><a href=\"/#artists\">Songs</a></li>\n    </ul>\n</div>";}); 
Handlebars.registerPartial("headerTemplate", templates["headerTemplate"]); 
return templates["headerTemplate"]; 
});