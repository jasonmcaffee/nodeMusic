define(["handlebars", "core/util/log"], function(Handlebars, log){ 
log("menuTemplate precompiled template function module loaded."); 
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {}; 
templates['menuTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "<input type=\"text\" placeholder=\"search\"/>\n<ul id=\"menu\">\n    <li>\n        item 1\n    </li>\n    <li>\n        item 2\n    </li>\n</ul>";}); 
Handlebars.registerPartial("menuTemplate", templates["menuTemplate"]); 
return templates["menuTemplate"]; 
});