define(["handlebars", "core/util/log"], function(Handlebars, log){ 
log("songRowTemplate precompiled template function module loaded."); 
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {}; 
templates['songRowTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  buffer += "<li>\n    <dl>\n        <dt>";
  stack1 = depth0.artist;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "this.artist", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</dt>\n        <dt>";
  stack1 = depth0.songName;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "this.songName", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</dt>\n        <dt>";
  stack1 = depth0.album;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "this.album", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</dt>\n    </dl>\n</li>";
  return buffer;}); 
Handlebars.registerPartial("songRowTemplate", templates["songRowTemplate"]); 
return templates["songRowTemplate"]; 
});