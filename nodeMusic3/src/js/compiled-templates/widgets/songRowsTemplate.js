define(["handlebars", "core/util/log"], function(Handlebars, log){ 
log("songRowsTemplate precompiled template function module loaded."); 
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {}; 
templates['songRowsTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<li data-songId=\"";
  stack1 = depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "this.id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n    <dl>\n        <dt>";
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
  buffer += escapeExpression(stack1) + "</dt>\n    </dl>\n</li>\n";
  return buffer;}

  foundHelper = helpers.songs;
  stack1 = foundHelper || depth0.songs;
  stack2 = helpers.each;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }}); 
Handlebars.registerPartial("songRowsTemplate", templates["songRowsTemplate"]); 
return templates["songRowsTemplate"]; 
});