define(["handlebars", "core/util/log"], function(Handlebars, log){ 
log("headerTemplate precompiled template function module loaded."); 
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {}; 
templates['headerTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "<div id=\"navbar\">\n\n    <div id=\"expandedNavBar\">\n        <!--<label for=\"search\">search:</label>-->\n        <!--<input id=\"search\" type=\"text\">-->\n\n        <div id=\"songInfo\">\n            <div id=\"currentArtist\">current artist</div>\n            <div id=\"currentSong\">current song</div>\n        </div>\n    </div>\n    <div id=\"menuCollapsed\">\n        <div id=\"menuButtonContainer\">\n            <img id=\"menuButton\" alt=\"menu button\" src=\"images/menu-button.png\">\n        </div>\n        <div id=\"songControlsWidget\"></div>\n\n        <div id=\"grabber\">\n            <img id=\"grabberButton\" alt=\"grabber\" src=\"images/grabber.png\">\n        </div>\n    </div>\n</div>\n";}); 
Handlebars.registerPartial("headerTemplate", templates["headerTemplate"]); 
return templates["headerTemplate"]; 
});