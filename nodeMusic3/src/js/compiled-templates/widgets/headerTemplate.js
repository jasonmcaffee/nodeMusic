define(["handlebars", "core/util/log"], function(Handlebars, log){ 
log("headerTemplate precompiled template function module loaded."); 
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {}; 
templates['headerTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "<div id=\"navbar\">\n    <div id=\"menuCollapsed\">\n        <img id=\"menuButton\" alt=\"menu button\" src=\"images/menu-button.png\">\n        <div id=\"songControlsWidget\"></div>\n    </div>\n\n</div>\n<div id=\"menuExpanded\">\n    <ul>\n        <li><a href=\"/#artists\">Artists</a></li>\n        <li><a href=\"/#artists\">Songs</a></li>\n    </ul>\n</div>";}); 
Handlebars.registerPartial("headerTemplate", templates["headerTemplate"]); 
return templates["headerTemplate"]; 
});