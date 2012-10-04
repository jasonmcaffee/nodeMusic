define(["handlebars", "core/util/log"], function(Handlebars, log){ 
log("headerTemplate precompiled template function module loaded."); 
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {}; 
templates['headerTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "<div id=\"navbar\">\n    <div id=\"menuCollapsed\">\n        <img id=\"menuButton\" alt=\"menu button\" src=\"images/menu-button.png\">\n    </div>\n</div>\n<div id=\"menuExpanded\">\n    <ul>\n        <li><a href=\"#home\">Home</a></li>\n        <li><a href=\"#demos/home\">Demos</a></li>\n        <li><a href=\"#home\">Docs</a></li>\n    </ul>\n</div>";}); 
Handlebars.registerPartial("headerTemplate", templates["headerTemplate"]); 
return templates["headerTemplate"]; 
});