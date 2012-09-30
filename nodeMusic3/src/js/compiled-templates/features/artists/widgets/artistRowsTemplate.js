define(["handlebars", "core/util/log"], function(Handlebars, log){ 
log("artistRowsTemplate precompiled template function module loaded."); 
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {}; 
templates['artistRowsTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<li data-artistsIndex=\"";
  stack1 = depth0.index;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "this.index", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n    hello artist ";
  stack1 = depth0.propertyName;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "this.propertyName", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\n</li>\n";
  return buffer;}

  foundHelper = helpers.artists;
  stack1 = foundHelper || depth0.artists;
  foundHelper = helpers.each_property;
  stack2 = foundHelper || depth0.each_property;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }}); 
Handlebars.registerPartial("artistRowsTemplate", templates["artistRowsTemplate"]); 
return templates["artistRowsTemplate"]; 
});