
/*
 RequireJS 1.0.2 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
var requirejs,require,define;
(function(){function J(a){return M.call(a)==="[object Function]"}function E(a){return M.call(a)==="[object Array]"}function Z(a,c,h){for(var k in c)if(!(k in K)&&(!(k in a)||h))a[k]=c[k];return d}function N(a,c,d){a=Error(c+"\nhttp://requirejs.org/docs/errors.html#"+a);if(d)a.originalError=d;return a}function $(a,c,d){var k,j,q;for(k=0;q=c[k];k++){q=typeof q==="string"?{name:q}:q;j=q.location;if(d&&(!j||j.indexOf("/")!==0&&j.indexOf(":")===-1))j=d+"/"+(j||q.name);a[q.name]={name:q.name,location:j||
q.name,main:(q.main||"main").replace(ea,"").replace(aa,"")}}}function V(a,c){a.holdReady?a.holdReady(c):c?a.readyWait+=1:a.ready(!0)}function fa(a){function c(b,l){var f,a;if(b&&b.charAt(0)===".")if(l){p.pkgs[l]?l=[l]:(l=l.split("/"),l=l.slice(0,l.length-1));f=b=l.concat(b.split("/"));var c;for(a=0;c=f[a];a++)if(c===".")f.splice(a,1),a-=1;else if(c==="..")if(a===1&&(f[2]===".."||f[0]===".."))break;else a>0&&(f.splice(a-1,2),a-=2);a=p.pkgs[f=b[0]];b=b.join("/");a&&b===f+"/"+a.main&&(b=f)}else b.indexOf("./")===
0&&(b=b.substring(2));return b}function h(b,l){var f=b?b.indexOf("!"):-1,a=null,d=l?l.name:null,i=b,e,h;f!==-1&&(a=b.substring(0,f),b=b.substring(f+1,b.length));a&&(a=c(a,d));b&&(a?e=(f=m[a])&&f.normalize?f.normalize(b,function(b){return c(b,d)}):c(b,d):(e=c(b,d),h=E[e],h||(h=g.nameToUrl(e,null,l),E[e]=h)));return{prefix:a,name:e,parentMap:l,url:h,originalName:i,fullName:a?a+"!"+(e||""):e}}function k(){var b=!0,l=p.priorityWait,f,a;if(l){for(a=0;f=l[a];a++)if(!s[f]){b=!1;break}b&&delete p.priorityWait}return b}
function j(b,l,f){return function(){var a=ga.call(arguments,0),c;if(f&&J(c=a[a.length-1]))c.__requireJsBuild=!0;a.push(l);return b.apply(null,a)}}function q(b,l){var a=j(g.require,b,l);Z(a,{nameToUrl:j(g.nameToUrl,b),toUrl:j(g.toUrl,b),defined:j(g.requireDefined,b),specified:j(g.requireSpecified,b),isBrowser:d.isBrowser});return a}function o(b){var l,a,c,C=b.callback,i=b.map,e=i.fullName,ba=b.deps;c=b.listeners;if(C&&J(C)){if(p.catchError.define)try{a=d.execCb(e,b.callback,ba,m[e])}catch(k){l=k}else a=
d.execCb(e,b.callback,ba,m[e]);if(e)(C=b.cjsModule)&&C.exports!==void 0&&C.exports!==m[e]?a=m[e]=b.cjsModule.exports:a===void 0&&b.usingExports?a=m[e]:(m[e]=a,F[e]&&(Q[e]=!0))}else e&&(a=m[e]=C,F[e]&&(Q[e]=!0));if(D[b.id])delete D[b.id],b.isDone=!0,g.waitCount-=1,g.waitCount===0&&(I=[]);delete R[e];if(d.onResourceLoad&&!b.placeholder)d.onResourceLoad(g,i,b.depArray);if(l)return a=(e?h(e).url:"")||l.fileName||l.sourceURL,c=l.moduleTree,l=N("defineerror",'Error evaluating module "'+e+'" at location "'+
a+'":\n'+l+"\nfileName:"+a+"\nlineNumber: "+(l.lineNumber||l.line),l),l.moduleName=e,l.moduleTree=c,d.onError(l);for(l=0;C=c[l];l++)C(a)}function r(b,a){return function(f){b.depDone[a]||(b.depDone[a]=!0,b.deps[a]=f,b.depCount-=1,b.depCount||o(b))}}function u(b,a){var f=a.map,c=f.fullName,h=f.name,i=L[b]||(L[b]=m[b]),e;if(!a.loading)a.loading=!0,e=function(b){a.callback=function(){return b};o(a);s[a.id]=!0;w()},e.fromText=function(b,a){var l=O;s[b]=!1;g.scriptCount+=1;g.fake[b]=!0;l&&(O=!1);d.exec(a);
l&&(O=!0);g.completeLoad(b)},c in m?e(m[c]):i.load(h,q(f.parentMap,!0),e,p)}function v(b){D[b.id]||(D[b.id]=b,I.push(b),g.waitCount+=1)}function B(b){this.listeners.push(b)}function t(b,a){var f=b.fullName,c=b.prefix,d=c?L[c]||(L[c]=m[c]):null,i,e;f&&(i=R[f]);if(!i&&(e=!0,i={id:(c&&!d?M++ +"__p@:":"")+(f||"__r@"+M++),map:b,depCount:0,depDone:[],depCallbacks:[],deps:[],listeners:[],add:B},y[i.id]=!0,f&&(!c||L[c])))R[f]=i;c&&!d?(f=t(h(c),!0),f.add(function(){var a=h(b.originalName,b.parentMap),a=t(a,
!0);i.placeholder=!0;a.add(function(b){i.callback=function(){return b};o(i)})})):e&&a&&(s[i.id]=!1,g.paused.push(i),v(i));return i}function x(b,a,f,c){var b=h(b,c),d=b.name,i=b.fullName,e=t(b),k=e.id,j=e.deps,n;if(i){if(i in m||s[k]===!0||i==="jquery"&&p.jQuery&&p.jQuery!==f().fn.jquery)return;y[k]=!0;s[k]=!0;i==="jquery"&&f&&S(f())}e.depArray=a;e.callback=f;for(f=0;f<a.length;f++)if(k=a[f])k=h(k,d?b:c),n=k.fullName,a[f]=n,n==="require"?j[f]=q(b):n==="exports"?(j[f]=m[i]={},e.usingExports=!0):n===
"module"?e.cjsModule=j[f]={id:d,uri:d?g.nameToUrl(d,null,c):void 0,exports:m[i]}:n in m&&!(n in D)&&(!(i in F)||i in F&&Q[n])?j[f]=m[n]:(i in F&&(F[n]=!0,delete m[n],T[k.url]=!1),e.depCount+=1,e.depCallbacks[f]=r(e,f),t(k,!0).add(e.depCallbacks[f]));e.depCount?v(e):o(e)}function n(b){x.apply(null,b)}function z(b,a){if(!b.isDone){var c=b.map.fullName,d=b.depArray,g,i,e,k;if(c){if(a[c])return m[c];a[c]=!0}if(d)for(g=0;g<d.length;g++)if(i=d[g])if((e=h(i).prefix)&&(k=D[e])&&z(k,a),(e=D[i])&&!e.isDone&&
s[i])i=z(e,a),b.depCallbacks[g](i);return c?m[c]:void 0}}function A(){var b=p.waitSeconds*1E3,a=b&&g.startTime+b<(new Date).getTime(),b="",c=!1,h=!1,j;if(!(g.pausedCount>0)){if(p.priorityWait)if(k())w();else return;for(j in s)if(!(j in K)&&(c=!0,!s[j]))if(a)b+=j+" ";else{h=!0;break}if(c||g.waitCount){if(a&&b)return j=N("timeout","Load timeout for modules: "+b),j.requireType="timeout",j.requireModules=b,d.onError(j);if(h||g.scriptCount){if((G||ca)&&!W)W=setTimeout(function(){W=0;A()},50)}else{if(g.waitCount){for(H=
0;b=I[H];H++)z(b,{});g.paused.length&&w();X<5&&(X+=1,A())}X=0;d.checkReadyState()}}}}var g,w,p={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},catchError:{}},P=[],y={require:!0,exports:!0,module:!0},E={},m={},s={},D={},I=[],T={},M=0,R={},L={},F={},Q={},Y=0;S=function(b){if(!g.jQuery&&(b=b||(typeof jQuery!=="undefined"?jQuery:null))&&!(p.jQuery&&b.fn.jquery!==p.jQuery)&&("holdReady"in b||"readyWait"in b))if(g.jQuery=b,n(["jquery",[],function(){return jQuery}]),g.scriptCount)V(b,!0),g.jQueryIncremented=
!0};w=function(){var b,a,c,h,j,i;Y+=1;if(g.scriptCount<=0)g.scriptCount=0;for(;P.length;)if(b=P.shift(),b[0]===null)return d.onError(N("mismatch","Mismatched anonymous define() module: "+b[b.length-1]));else n(b);if(!p.priorityWait||k())for(;g.paused.length;){j=g.paused;g.pausedCount+=j.length;g.paused=[];for(h=0;b=j[h];h++)a=b.map,c=a.url,i=a.fullName,a.prefix?u(a.prefix,b):!T[c]&&!s[i]&&(d.load(g,i,c),c.indexOf("empty:")!==0&&(T[c]=!0));g.startTime=(new Date).getTime();g.pausedCount-=j.length}Y===
1&&A();Y-=1};g={contextName:a,config:p,defQueue:P,waiting:D,waitCount:0,specified:y,loaded:s,urlMap:E,urlFetched:T,scriptCount:0,defined:m,paused:[],pausedCount:0,plugins:L,needFullExec:F,fake:{},fullExec:Q,managerCallbacks:R,makeModuleMap:h,normalize:c,configure:function(b){var a,c,d;b.baseUrl&&b.baseUrl.charAt(b.baseUrl.length-1)!=="/"&&(b.baseUrl+="/");a=p.paths;d=p.pkgs;Z(p,b,!0);if(b.paths){for(c in b.paths)c in K||(a[c]=b.paths[c]);p.paths=a}if((a=b.packagePaths)||b.packages){if(a)for(c in a)c in
K||$(d,a[c],c);b.packages&&$(d,b.packages);p.pkgs=d}if(b.priority)c=g.requireWait,g.requireWait=!1,g.takeGlobalQueue(),w(),g.require(b.priority),w(),g.requireWait=c,p.priorityWait=b.priority;if(b.deps||b.callback)g.require(b.deps||[],b.callback)},requireDefined:function(b,a){return h(b,a).fullName in m},requireSpecified:function(b,a){return h(b,a).fullName in y},require:function(b,c,f){if(typeof b==="string"){if(J(c))return d.onError(N("requireargs","Invalid require call"));if(d.get)return d.get(g,
b,c);c=h(b,c);b=c.fullName;return!(b in m)?d.onError(N("notloaded","Module name '"+c.fullName+"' has not been loaded yet for context: "+a)):m[b]}(b&&b.length||c)&&x(null,b,c,f);if(!g.requireWait)for(;!g.scriptCount&&g.paused.length;)g.takeGlobalQueue(),w();return g.require},takeGlobalQueue:function(){U.length&&(ha.apply(g.defQueue,[g.defQueue.length-1,0].concat(U)),U=[])},completeLoad:function(b){var a;for(g.takeGlobalQueue();P.length;)if(a=P.shift(),a[0]===null){a[0]=b;break}else if(a[0]===b)break;
else n(a),a=null;a?n(a):n([b,[],b==="jquery"&&typeof jQuery!=="undefined"?function(){return jQuery}:null]);S();d.isAsync&&(g.scriptCount-=1);w();d.isAsync||(g.scriptCount-=1)},toUrl:function(a,c){var d=a.lastIndexOf("."),h=null;d!==-1&&(h=a.substring(d,a.length),a=a.substring(0,d));return g.nameToUrl(a,h,c)},nameToUrl:function(a,h,f){var j,k,i,e,m=g.config,a=c(a,f&&f.fullName);if(d.jsExtRegExp.test(a))h=a+(h?h:"");else{j=m.paths;k=m.pkgs;f=a.split("/");for(e=f.length;e>0;e--)if(i=f.slice(0,e).join("/"),
j[i]){f.splice(0,e,j[i]);break}else if(i=k[i]){a=a===i.name?i.location+"/"+i.main:i.location;f.splice(0,e,a);break}h=f.join("/")+(h||".js");h=(h.charAt(0)==="/"||h.match(/^\w+:/)?"":m.baseUrl)+h}return m.urlArgs?h+((h.indexOf("?")===-1?"?":"&")+m.urlArgs):h}};g.jQueryCheck=S;g.resume=w;return g}function ia(){var a,c,d;if(n&&n.readyState==="interactive")return n;a=document.getElementsByTagName("script");for(c=a.length-1;c>-1&&(d=a[c]);c--)if(d.readyState==="interactive")return n=d;return null}var ja=
/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,ka=/require\(\s*["']([^'"\s]+)["']\s*\)/g,ea=/^\.\//,aa=/\.js$/,M=Object.prototype.toString,r=Array.prototype,ga=r.slice,ha=r.splice,G=!!(typeof window!=="undefined"&&navigator&&document),ca=!G&&typeof importScripts!=="undefined",la=G&&navigator.platform==="PLAYSTATION 3"?/^complete$/:/^(complete|loaded)$/,da=typeof opera!=="undefined"&&opera.toString()==="[object Opera]",K={},t={},U=[],n=null,X=0,O=!1,d,r={},I,v,x,y,u,z,A,H,B,S,W;if(typeof define==="undefined"){if(typeof requirejs!==
"undefined")if(J(requirejs))return;else r=requirejs,requirejs=void 0;typeof require!=="undefined"&&!J(require)&&(r=require,require=void 0);d=requirejs=function(a,c,d){var k="_",j;!E(a)&&typeof a!=="string"&&(j=a,E(c)?(a=c,c=d):a=[]);if(j&&j.context)k=j.context;d=t[k]||(t[k]=fa(k));j&&d.configure(j);return d.require(a,c)};d.config=function(a){return d(a)};require||(require=d);d.toUrl=function(a){return t._.toUrl(a)};d.version="1.0.2";d.jsExtRegExp=/^\/|:|\?|\.js$/;v=d.s={contexts:t,skipAsync:{}};if(d.isAsync=
d.isBrowser=G)if(x=v.head=document.getElementsByTagName("head")[0],y=document.getElementsByTagName("base")[0])x=v.head=y.parentNode;d.onError=function(a){throw a;};d.load=function(a,c,h){d.resourcesReady(!1);a.scriptCount+=1;d.attach(h,a,c);if(a.jQuery&&!a.jQueryIncremented)V(a.jQuery,!0),a.jQueryIncremented=!0};define=function(a,c,d){var k,j;typeof a!=="string"&&(d=c,c=a,a=null);E(c)||(d=c,c=[]);!c.length&&J(d)&&d.length&&(d.toString().replace(ja,"").replace(ka,function(a,d){c.push(d)}),c=(d.length===
1?["require"]:["require","exports","module"]).concat(c));if(O&&(k=I||ia()))a||(a=k.getAttribute("data-requiremodule")),j=t[k.getAttribute("data-requirecontext")];(j?j.defQueue:U).push([a,c,d])};define.amd={multiversion:!0,plugins:!0,jQuery:!0};d.exec=function(a){return eval(a)};d.execCb=function(a,c,d,k){return c.apply(k,d)};d.addScriptToDom=function(a){I=a;y?x.insertBefore(a,y):x.appendChild(a);I=null};d.onScriptLoad=function(a){var c=a.currentTarget||a.srcElement,h;if(a.type==="load"||c&&la.test(c.readyState))n=
null,a=c.getAttribute("data-requirecontext"),h=c.getAttribute("data-requiremodule"),t[a].completeLoad(h),c.detachEvent&&!da?c.detachEvent("onreadystatechange",d.onScriptLoad):c.removeEventListener("load",d.onScriptLoad,!1)};d.attach=function(a,c,h,k,j,n){var o;if(G)return k=k||d.onScriptLoad,o=c&&c.config&&c.config.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script"),o.type=j||"text/javascript",o.charset="utf-8",o.async=!v.skipAsync[a],c&&o.setAttribute("data-requirecontext",
c.contextName),o.setAttribute("data-requiremodule",h),o.attachEvent&&!da?(O=!0,n?o.onreadystatechange=function(){if(o.readyState==="loaded")o.onreadystatechange=null,o.attachEvent("onreadystatechange",k),n(o)}:o.attachEvent("onreadystatechange",k)):o.addEventListener("load",k,!1),o.src=a,n||d.addScriptToDom(o),o;else ca&&(importScripts(a),c.completeLoad(h));return null};if(G){u=document.getElementsByTagName("script");for(H=u.length-1;H>-1&&(z=u[H]);H--){if(!x)x=z.parentNode;if(A=z.getAttribute("data-main")){if(!r.baseUrl)u=
A.split("/"),z=u.pop(),u=u.length?u.join("/")+"/":"./",r.baseUrl=u,A=z.replace(aa,"");r.deps=r.deps?r.deps.concat(A):[A];break}}}d.checkReadyState=function(){var a=v.contexts,c;for(c in a)if(!(c in K)&&a[c].waitCount)return;d.resourcesReady(!0)};d.resourcesReady=function(a){var c,h;d.resourcesDone=a;if(d.resourcesDone)for(h in a=v.contexts,a)if(!(h in K)&&(c=a[h],c.jQueryIncremented))V(c.jQuery,!1),c.jQueryIncremented=!1};d.pageLoaded=function(){if(document.readyState!=="complete")document.readyState=
"complete"};if(G&&document.addEventListener&&!document.readyState)document.readyState="loading",window.addEventListener("load",d.pageLoaded,!1);d(r);if(d.isAsync&&typeof setTimeout!=="undefined")B=v.contexts[r.context||"_"],B.requireWait=!0,setTimeout(function(){B.requireWait=!1;B.takeGlobalQueue();B.jQueryCheck();B.scriptCount||B.resume();d.checkReadyState()},0)}})();
define("requireLib", function(){});

/**
 *
 */
define('core/util/log',[], function(){

    /**
     * Allows you to pass in a message in the format 'the date is {0} and the time is {1}', where {0} and {1} will be replaced
     * with the values of subsequent parameters.
     * e.g. log('the date is {0} and the time is {1}', new Date(), new Time());
     * todo: allow for object literals to be passed in for different log types when needed.
     * @param message
     */
    function log(message){
        if(console && console.log){
            var formattedMessage = message;
            for (var i = 0; i < arguments.length; i++) {
                var regexp = new RegExp('\\{'+i+'\\}', 'gi');
                formattedMessage = formattedMessage.replace(regexp, arguments[i+1]);
            }

            console.log(formattedMessage);
        }
    }

    return log;
});
// lib/handlebars/base.js
var Handlebars = {};

Handlebars.VERSION = "1.0.beta.6";

Handlebars.helpers  = {};
Handlebars.partials = {};

Handlebars.registerHelper = function(name, fn, inverse) {
  if(inverse) { fn.not = inverse; }
  this.helpers[name] = fn;
};

Handlebars.registerPartial = function(name, str) {
  this.partials[name] = str;
};

Handlebars.registerHelper('helperMissing', function(arg) {
  if(arguments.length === 2) {
    return undefined;
  } else {
    throw new Error("Could not find property '" + arg + "'");
  }
});

var toString = Object.prototype.toString, functionType = "[object Function]";

Handlebars.registerHelper('blockHelperMissing', function(context, options) {
  var inverse = options.inverse || function() {}, fn = options.fn;


  var ret = "";
  var type = toString.call(context);

  if(type === functionType) { context = context.call(this); }

  if(context === true) {
    return fn(this);
  } else if(context === false || context == null) {
    return inverse(this);
  } else if(type === "[object Array]") {
    if(context.length > 0) {
      for(var i=0, j=context.length; i<j; i++) {
        ret = ret + fn(context[i]);
      }
    } else {
      ret = inverse(this);
    }
    return ret;
  } else {
    return fn(context);
  }
});

Handlebars.registerHelper('each', function(context, options) {
  var fn = options.fn, inverse = options.inverse;
  var ret = "";

  if(context && context.length > 0) {
    for(var i=0, j=context.length; i<j; i++) {
      ret = ret + fn(context[i]);
    }
  } else {
    ret = inverse(this);
  }
  return ret;
});

Handlebars.registerHelper('if', function(context, options) {
  var type = toString.call(context);
  if(type === functionType) { context = context.call(this); }

  if(!context || Handlebars.Utils.isEmpty(context)) {
    return options.inverse(this);
  } else {
    return options.fn(this);
  }
});

Handlebars.registerHelper('unless', function(context, options) {
  var fn = options.fn, inverse = options.inverse;
  options.fn = inverse;
  options.inverse = fn;

  return Handlebars.helpers['if'].call(this, context, options);
});

Handlebars.registerHelper('with', function(context, options) {
  return options.fn(context);
});

Handlebars.registerHelper('log', function(context) {
  Handlebars.log(context);
});
;
// lib/handlebars/utils.js
Handlebars.Exception = function(message) {
  var tmp = Error.prototype.constructor.apply(this, arguments);

  for (var p in tmp) {
    if (tmp.hasOwnProperty(p)) { this[p] = tmp[p]; }
  }

  this.message = tmp.message;
};
Handlebars.Exception.prototype = new Error;

// Build out our basic SafeString type
Handlebars.SafeString = function(string) {
  this.string = string;
};
Handlebars.SafeString.prototype.toString = function() {
  return this.string.toString();
};

(function() {
  var escape = {
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  };

  var badChars = /&(?!\w+;)|[<>"'`]/g;
  var possible = /[&<>"'`]/;

  var escapeChar = function(chr) {
    return escape[chr] || "&amp;";
  };

  Handlebars.Utils = {
    escapeExpression: function(string) {
      // don't escape SafeStrings, since they're already safe
      if (string instanceof Handlebars.SafeString) {
        return string.toString();
      } else if (string == null || string === false) {
        return "";
      }

      if(!possible.test(string)) { return string; }
      return string.replace(badChars, escapeChar);
    },

    isEmpty: function(value) {
      if (typeof value === "undefined") {
        return true;
      } else if (value === null) {
        return true;
      } else if (value === false) {
        return true;
      } else if(Object.prototype.toString.call(value) === "[object Array]" && value.length === 0) {
        return true;
      } else {
        return false;
      }
    }
  };
})();;
// lib/handlebars/runtime.js
Handlebars.VM = {
  template: function(templateSpec) {
    // Just add water
    var container = {
      escapeExpression: Handlebars.Utils.escapeExpression,
      invokePartial: Handlebars.VM.invokePartial,
      programs: [],
      program: function(i, fn, data) {
        var programWrapper = this.programs[i];
        if(data) {
          return Handlebars.VM.program(fn, data);
        } else if(programWrapper) {
          return programWrapper;
        } else {
          programWrapper = this.programs[i] = Handlebars.VM.program(fn);
          return programWrapper;
        }
      },
      programWithDepth: Handlebars.VM.programWithDepth,
      noop: Handlebars.VM.noop
    };

    return function(context, options) {
      options = options || {};
      return templateSpec.call(container, Handlebars, context, options.helpers, options.partials, options.data);
    };
  },

  programWithDepth: function(fn, data, $depth) {
    var args = Array.prototype.slice.call(arguments, 2);

    return function(context, options) {
      options = options || {};

      return fn.apply(this, [context, options.data || data].concat(args));
    };
  },
  program: function(fn, data) {
    return function(context, options) {
      options = options || {};

      return fn(context, options.data || data);
    };
  },
  noop: function() { return ""; },
  invokePartial: function(partial, name, context, helpers, partials, data) {
    options = { helpers: helpers, partials: partials, data: data };

    if(partial === undefined) {
      throw new Handlebars.Exception("The partial " + name + " could not be found");
    } else if(partial instanceof Function) {
      return partial(context, options);
    } else if (!Handlebars.compile) {
      throw new Handlebars.Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
    } else {
      partials[name] = Handlebars.compile(partial);
      return partials[name](context, options);
    }
  }
};

Handlebars.template = Handlebars.VM.template;
;

define("handlebars", (function (global) {
    return function () {
        return global.Handlebars;
    }
}(this)));

define('core/plugins/handlebars/eachWithIndex',[
    'core/util/log',
    'handlebars'
], function(log, Handlebars){
    log('eachWithIndex core plugin module loaded.');

    /**
     * adds ability to use {{#each_with_index items}}
     * @type {Object}
     */
    var plugin = {

        /**
         * in order for the plugin to register the handlebars helper, you must call init.
         * (don't assume how and when this is executed so we get greater flexibility).
         */
        init : function(){
            log('eachWithIndex plugin init called.');
            //https://gist.github.com/1048968
            Handlebars.registerHelper("each_with_index", function(array, fn) {
                var buffer = "";
                for (var i = 0, j = array.length; i < j; i++) {
                    var item = array[i];

                    // stick an index property onto the item, starting with 1, may make configurable later
                    item.index = i;

                    // show the inside of the block
                    buffer += fn(item);
                }

                // return the finished buffer
                return buffer;

            });
        }
    };

    return plugin;

});

define('core/core',[
    'core/util/log',
    'core/plugins/handlebars/eachWithIndex'
], function(log, eachWithIndexPlugin){
    log('core module loaded');

    var core = {
        initPlugins : function(){
            log('core.initPlugins called');
            eachWithIndexPlugin.init();
        }
    };

    return core;
});
/*!
 * jQuery JavaScript Library v1.8.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Thu Sep 20 2012 21:13:05 GMT-0400 (Eastern Daylight Time)
 */
(function( window, undefined ) {
    var
    // A central reference to the root jQuery(document)
        rootjQuery,

    // The deferred used on DOM ready
        readyList,

    // Use the correct document accordingly with window argument (sandbox)
        document = window.document,
        location = window.location,
        navigator = window.navigator,

    // Map over jQuery in case of overwrite
        _jQuery = window.jQuery,

    // Map over the $ in case of overwrite
        _$ = window.$,

    // Save a reference to some core methods
        core_push = Array.prototype.push,
        core_slice = Array.prototype.slice,
        core_indexOf = Array.prototype.indexOf,
        core_toString = Object.prototype.toString,
        core_hasOwn = Object.prototype.hasOwnProperty,
        core_trim = String.prototype.trim,

    // Define a local copy of jQuery
        jQuery = function( selector, context ) {
            // The jQuery object is actually just the init constructor 'enhanced'
            return new jQuery.fn.init( selector, context, rootjQuery );
        },

    // Used for matching numbers
        core_pnum = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,

    // Used for detecting and trimming whitespace
        core_rnotwhite = /\S/,
        core_rspace = /\s+/,

    // Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
        rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

    // A simple way to check for HTML strings
    // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
        rquickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,

    // Match a standalone tag
        rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,

    // JSON RegExp
        rvalidchars = /^[\],:{}\s]*$/,
        rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
        rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,

    // Matches dashed string for camelizing
        rmsPrefix = /^-ms-/,
        rdashAlpha = /-([\da-z])/gi,

    // Used by jQuery.camelCase as callback to replace()
        fcamelCase = function( all, letter ) {
            return ( letter + "" ).toUpperCase();
        },

    // The ready event handler and self cleanup method
        DOMContentLoaded = function() {
            if ( document.addEventListener ) {
                document.removeEventListener( "DOMContentLoaded", DOMContentLoaded, false );
                jQuery.ready();
            } else if ( document.readyState === "complete" ) {
                // we're here because readyState === "complete" in oldIE
                // which is good enough for us to call the dom ready!
                document.detachEvent( "onreadystatechange", DOMContentLoaded );
                jQuery.ready();
            }
        },

    // [[Class]] -> type pairs
        class2type = {};

    jQuery.fn = jQuery.prototype = {
        constructor: jQuery,
        init: function( selector, context, rootjQuery ) {
            var match, elem, ret, doc;

            // Handle $(""), $(null), $(undefined), $(false)
            if ( !selector ) {
                return this;
            }

            // Handle $(DOMElement)
            if ( selector.nodeType ) {
                this.context = this[0] = selector;
                this.length = 1;
                return this;
            }

            // Handle HTML strings
            if ( typeof selector === "string" ) {
                if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
                    // Assume that strings that start and end with <> are HTML and skip the regex check
                    match = [ null, selector, null ];

                } else {
                    match = rquickExpr.exec( selector );
                }

                // Match html or make sure no context is specified for #id
                if ( match && (match[1] || !context) ) {

                    // HANDLE: $(html) -> $(array)
                    if ( match[1] ) {
                        context = context instanceof jQuery ? context[0] : context;
                        doc = ( context && context.nodeType ? context.ownerDocument || context : document );

                        // scripts is true for back-compat
                        selector = jQuery.parseHTML( match[1], doc, true );
                        if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
                            this.attr.call( selector, context, true );
                        }

                        return jQuery.merge( this, selector );

                        // HANDLE: $(#id)
                    } else {
                        elem = document.getElementById( match[2] );

                        // Check parentNode to catch when Blackberry 4.6 returns
                        // nodes that are no longer in the document #6963
                        if ( elem && elem.parentNode ) {
                            // Handle the case where IE and Opera return items
                            // by name instead of ID
                            if ( elem.id !== match[2] ) {
                                return rootjQuery.find( selector );
                            }

                            // Otherwise, we inject the element directly into the jQuery object
                            this.length = 1;
                            this[0] = elem;
                        }

                        this.context = document;
                        this.selector = selector;
                        return this;
                    }

                    // HANDLE: $(expr, $(...))
                } else if ( !context || context.jquery ) {
                    return ( context || rootjQuery ).find( selector );

                    // HANDLE: $(expr, context)
                    // (which is just equivalent to: $(context).find(expr)
                } else {
                    return this.constructor( context ).find( selector );
                }

                // HANDLE: $(function)
                // Shortcut for document ready
            } else if ( jQuery.isFunction( selector ) ) {
                return rootjQuery.ready( selector );
            }

            if ( selector.selector !== undefined ) {
                this.selector = selector.selector;
                this.context = selector.context;
            }

            return jQuery.makeArray( selector, this );
        },

        // Start with an empty selector
        selector: "",

        // The current version of jQuery being used
        jquery: "1.8.2",

        // The default length of a jQuery object is 0
        length: 0,

        // The number of elements contained in the matched element set
        size: function() {
            return this.length;
        },

        toArray: function() {
            return core_slice.call( this );
        },

        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function( num ) {
            return num == null ?

                // Return a 'clean' array
                this.toArray() :

                // Return just the object
                ( num < 0 ? this[ this.length + num ] : this[ num ] );
        },

        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function( elems, name, selector ) {

            // Build a new jQuery matched element set
            var ret = jQuery.merge( this.constructor(), elems );

            // Add the old object onto the stack (as a reference)
            ret.prevObject = this;

            ret.context = this.context;

            if ( name === "find" ) {
                ret.selector = this.selector + ( this.selector ? " " : "" ) + selector;
            } else if ( name ) {
                ret.selector = this.selector + "." + name + "(" + selector + ")";
            }

            // Return the newly-formed element set
            return ret;
        },

        // Execute a callback for every element in the matched set.
        // (You can seed the arguments with an array of args, but this is
        // only used internally.)
        each: function( callback, args ) {
            return jQuery.each( this, callback, args );
        },

        ready: function( fn ) {
            // Add the callback
            jQuery.ready.promise().done( fn );

            return this;
        },

        eq: function( i ) {
            i = +i;
            return i === -1 ?
                this.slice( i ) :
                this.slice( i, i + 1 );
        },

        first: function() {
            return this.eq( 0 );
        },

        last: function() {
            return this.eq( -1 );
        },

        slice: function() {
            return this.pushStack( core_slice.apply( this, arguments ),
                "slice", core_slice.call(arguments).join(",") );
        },

        map: function( callback ) {
            return this.pushStack( jQuery.map(this, function( elem, i ) {
                return callback.call( elem, i, elem );
            }));
        },

        end: function() {
            return this.prevObject || this.constructor(null);
        },

        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push: core_push,
        sort: [].sort,
        splice: [].splice
    };

// Give the init function the jQuery prototype for later instantiation
    jQuery.fn.init.prototype = jQuery.fn;

    jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        // Handle a deep copy situation
        if ( typeof target === "boolean" ) {
            deep = target;
            target = arguments[1] || {};
            // skip the boolean and the target
            i = 2;
        }

        // Handle case when target is a string or something (possible in deep copy)
        if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
            target = {};
        }

        // extend jQuery itself if only one argument is passed
        if ( length === i ) {
            target = this;
            --i;
        }

        for ( ; i < length; i++ ) {
            // Only deal with non-null/undefined values
            if ( (options = arguments[ i ]) != null ) {
                // Extend the base object
                for ( name in options ) {
                    src = target[ name ];
                    copy = options[ name ];

                    // Prevent never-ending loop
                    if ( target === copy ) {
                        continue;
                    }

                    // Recurse if we're merging plain objects or arrays
                    if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
                        if ( copyIsArray ) {
                            copyIsArray = false;
                            clone = src && jQuery.isArray(src) ? src : [];

                        } else {
                            clone = src && jQuery.isPlainObject(src) ? src : {};
                        }

                        // Never move original objects, clone them
                        target[ name ] = jQuery.extend( deep, clone, copy );

                        // Don't bring in undefined values
                    } else if ( copy !== undefined ) {
                        target[ name ] = copy;
                    }
                }
            }
        }

        // Return the modified object
        return target;
    };

    jQuery.extend({
        noConflict: function( deep ) {
            if ( window.$ === jQuery ) {
                window.$ = _$;
            }

            if ( deep && window.jQuery === jQuery ) {
                window.jQuery = _jQuery;
            }

            return jQuery;
        },

        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,

        // A counter to track how many items to wait for before
        // the ready event fires. See #6781
        readyWait: 1,

        // Hold (or release) the ready event
        holdReady: function( hold ) {
            if ( hold ) {
                jQuery.readyWait++;
            } else {
                jQuery.ready( true );
            }
        },

        // Handle when the DOM is ready
        ready: function( wait ) {

            // Abort if there are pending holds or we're already ready
            if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
                return;
            }

            // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
            if ( !document.body ) {
                return setTimeout( jQuery.ready, 1 );
            }

            // Remember that the DOM is ready
            jQuery.isReady = true;

            // If a normal DOM Ready event fired, decrement, and wait if need be
            if ( wait !== true && --jQuery.readyWait > 0 ) {
                return;
            }

            // If there are functions bound, to execute
            readyList.resolveWith( document, [ jQuery ] );

            // Trigger any bound ready events
            if ( jQuery.fn.trigger ) {
                jQuery( document ).trigger("ready").off("ready");
            }
        },

        // See test/unit/core.js for details concerning isFunction.
        // Since version 1.3, DOM methods and functions like alert
        // aren't supported. They return false on IE (#2968).
        isFunction: function( obj ) {
            return jQuery.type(obj) === "function";
        },

        isArray: Array.isArray || function( obj ) {
            return jQuery.type(obj) === "array";
        },

        isWindow: function( obj ) {
            return obj != null && obj == obj.window;
        },

        isNumeric: function( obj ) {
            return !isNaN( parseFloat(obj) ) && isFinite( obj );
        },

        type: function( obj ) {
            return obj == null ?
                String( obj ) :
                class2type[ core_toString.call(obj) ] || "object";
        },

        isPlainObject: function( obj ) {
            // Must be an Object.
            // Because of IE, we also have to check the presence of the constructor property.
            // Make sure that DOM nodes and window objects don't pass through, as well
            if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
                return false;
            }

            try {
                // Not own constructor property must be Object
                if ( obj.constructor &&
                    !core_hasOwn.call(obj, "constructor") &&
                    !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
                    return false;
                }
            } catch ( e ) {
                // IE8,9 Will throw exceptions on certain host objects #9897
                return false;
            }

            // Own properties are enumerated firstly, so to speed up,
            // if last one is own, then all properties are own.

            var key;
            for ( key in obj ) {}

            return key === undefined || core_hasOwn.call( obj, key );
        },

        isEmptyObject: function( obj ) {
            var name;
            for ( name in obj ) {
                return false;
            }
            return true;
        },

        error: function( msg ) {
            throw new Error( msg );
        },

        // data: string of html
        // context (optional): If specified, the fragment will be created in this context, defaults to document
        // scripts (optional): If true, will include scripts passed in the html string
        parseHTML: function( data, context, scripts ) {
            var parsed;
            if ( !data || typeof data !== "string" ) {
                return null;
            }
            if ( typeof context === "boolean" ) {
                scripts = context;
                context = 0;
            }
            context = context || document;

            // Single tag
            if ( (parsed = rsingleTag.exec( data )) ) {
                return [ context.createElement( parsed[1] ) ];
            }

            parsed = jQuery.buildFragment( [ data ], context, scripts ? null : [] );
            return jQuery.merge( [],
                (parsed.cacheable ? jQuery.clone( parsed.fragment ) : parsed.fragment).childNodes );
        },

        parseJSON: function( data ) {
            if ( !data || typeof data !== "string") {
                return null;
            }

            // Make sure leading/trailing whitespace is removed (IE can't handle it)
            data = jQuery.trim( data );

            // Attempt to parse using the native JSON parser first
            if ( window.JSON && window.JSON.parse ) {
                return window.JSON.parse( data );
            }

            // Make sure the incoming data is actual JSON
            // Logic borrowed from http://json.org/json2.js
            if ( rvalidchars.test( data.replace( rvalidescape, "@" )
                .replace( rvalidtokens, "]" )
                .replace( rvalidbraces, "")) ) {

                return ( new Function( "return " + data ) )();

            }
            jQuery.error( "Invalid JSON: " + data );
        },

        // Cross-browser xml parsing
        parseXML: function( data ) {
            var xml, tmp;
            if ( !data || typeof data !== "string" ) {
                return null;
            }
            try {
                if ( window.DOMParser ) { // Standard
                    tmp = new DOMParser();
                    xml = tmp.parseFromString( data , "text/xml" );
                } else { // IE
                    xml = new ActiveXObject( "Microsoft.XMLDOM" );
                    xml.async = "false";
                    xml.loadXML( data );
                }
            } catch( e ) {
                xml = undefined;
            }
            if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
                jQuery.error( "Invalid XML: " + data );
            }
            return xml;
        },

        noop: function() {},

        // Evaluates a script in a global context
        // Workarounds based on findings by Jim Driscoll
        // http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
        globalEval: function( data ) {
            if ( data && core_rnotwhite.test( data ) ) {
                // We use execScript on Internet Explorer
                // We use an anonymous function so that context is window
                // rather than jQuery in Firefox
                ( window.execScript || function( data ) {
                    window[ "eval" ].call( window, data );
                } )( data );
            }
        },

        // Convert dashed to camelCase; used by the css and data modules
        // Microsoft forgot to hump their vendor prefix (#9572)
        camelCase: function( string ) {
            return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
        },

        nodeName: function( elem, name ) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        },

        // args is for internal usage only
        each: function( obj, callback, args ) {
            var name,
                i = 0,
                length = obj.length,
                isObj = length === undefined || jQuery.isFunction( obj );

            if ( args ) {
                if ( isObj ) {
                    for ( name in obj ) {
                        if ( callback.apply( obj[ name ], args ) === false ) {
                            break;
                        }
                    }
                } else {
                    for ( ; i < length; ) {
                        if ( callback.apply( obj[ i++ ], args ) === false ) {
                            break;
                        }
                    }
                }

                // A special, fast, case for the most common use of each
            } else {
                if ( isObj ) {
                    for ( name in obj ) {
                        if ( callback.call( obj[ name ], name, obj[ name ] ) === false ) {
                            break;
                        }
                    }
                } else {
                    for ( ; i < length; ) {
                        if ( callback.call( obj[ i ], i, obj[ i++ ] ) === false ) {
                            break;
                        }
                    }
                }
            }

            return obj;
        },

        // Use native String.trim function wherever possible
        trim: core_trim && !core_trim.call("\uFEFF\xA0") ?
            function( text ) {
                return text == null ?
                    "" :
                    core_trim.call( text );
            } :

            // Otherwise use our own trimming functionality
            function( text ) {
                return text == null ?
                    "" :
                    ( text + "" ).replace( rtrim, "" );
            },

        // results is for internal usage only
        makeArray: function( arr, results ) {
            var type,
                ret = results || [];

            if ( arr != null ) {
                // The window, strings (and functions) also have 'length'
                // Tweaked logic slightly to handle Blackberry 4.7 RegExp issues #6930
                type = jQuery.type( arr );

                if ( arr.length == null || type === "string" || type === "function" || type === "regexp" || jQuery.isWindow( arr ) ) {
                    core_push.call( ret, arr );
                } else {
                    jQuery.merge( ret, arr );
                }
            }

            return ret;
        },

        inArray: function( elem, arr, i ) {
            var len;

            if ( arr ) {
                if ( core_indexOf ) {
                    return core_indexOf.call( arr, elem, i );
                }

                len = arr.length;
                i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

                for ( ; i < len; i++ ) {
                    // Skip accessing in sparse arrays
                    if ( i in arr && arr[ i ] === elem ) {
                        return i;
                    }
                }
            }

            return -1;
        },

        merge: function( first, second ) {
            var l = second.length,
                i = first.length,
                j = 0;

            if ( typeof l === "number" ) {
                for ( ; j < l; j++ ) {
                    first[ i++ ] = second[ j ];
                }

            } else {
                while ( second[j] !== undefined ) {
                    first[ i++ ] = second[ j++ ];
                }
            }

            first.length = i;

            return first;
        },

        grep: function( elems, callback, inv ) {
            var retVal,
                ret = [],
                i = 0,
                length = elems.length;
            inv = !!inv;

            // Go through the array, only saving the items
            // that pass the validator function
            for ( ; i < length; i++ ) {
                retVal = !!callback( elems[ i ], i );
                if ( inv !== retVal ) {
                    ret.push( elems[ i ] );
                }
            }

            return ret;
        },

        // arg is for internal usage only
        map: function( elems, callback, arg ) {
            var value, key,
                ret = [],
                i = 0,
                length = elems.length,
            // jquery objects are treated as arrays
                isArray = elems instanceof jQuery || length !== undefined && typeof length === "number" && ( ( length > 0 && elems[ 0 ] && elems[ length -1 ] ) || length === 0 || jQuery.isArray( elems ) ) ;

            // Go through the array, translating each of the items to their
            if ( isArray ) {
                for ( ; i < length; i++ ) {
                    value = callback( elems[ i ], i, arg );

                    if ( value != null ) {
                        ret[ ret.length ] = value;
                    }
                }

                // Go through every key on the object,
            } else {
                for ( key in elems ) {
                    value = callback( elems[ key ], key, arg );

                    if ( value != null ) {
                        ret[ ret.length ] = value;
                    }
                }
            }

            // Flatten any nested arrays
            return ret.concat.apply( [], ret );
        },

        // A global GUID counter for objects
        guid: 1,

        // Bind a function to a context, optionally partially applying any
        // arguments.
        proxy: function( fn, context ) {
            var tmp, args, proxy;

            if ( typeof context === "string" ) {
                tmp = fn[ context ];
                context = fn;
                fn = tmp;
            }

            // Quick check to determine if target is callable, in the spec
            // this throws a TypeError, but we will just return undefined.
            if ( !jQuery.isFunction( fn ) ) {
                return undefined;
            }

            // Simulated bind
            args = core_slice.call( arguments, 2 );
            proxy = function() {
                return fn.apply( context, args.concat( core_slice.call( arguments ) ) );
            };

            // Set the guid of unique handler to the same of original handler, so it can be removed
            proxy.guid = fn.guid = fn.guid || jQuery.guid++;

            return proxy;
        },

        // Multifunctional method to get and set values of a collection
        // The value/s can optionally be executed if it's a function
        access: function( elems, fn, key, value, chainable, emptyGet, pass ) {
            var exec,
                bulk = key == null,
                i = 0,
                length = elems.length;

            // Sets many values
            if ( key && typeof key === "object" ) {
                for ( i in key ) {
                    jQuery.access( elems, fn, i, key[i], 1, emptyGet, value );
                }
                chainable = 1;

                // Sets one value
            } else if ( value !== undefined ) {
                // Optionally, function values get executed if exec is true
                exec = pass === undefined && jQuery.isFunction( value );

                if ( bulk ) {
                    // Bulk operations only iterate when executing function values
                    if ( exec ) {
                        exec = fn;
                        fn = function( elem, key, value ) {
                            return exec.call( jQuery( elem ), value );
                        };

                        // Otherwise they run against the entire set
                    } else {
                        fn.call( elems, value );
                        fn = null;
                    }
                }

                if ( fn ) {
                    for (; i < length; i++ ) {
                        fn( elems[i], key, exec ? value.call( elems[i], i, fn( elems[i], key ) ) : value, pass );
                    }
                }

                chainable = 1;
            }

            return chainable ?
                elems :

                // Gets
                bulk ?
                    fn.call( elems ) :
                    length ? fn( elems[0], key ) : emptyGet;
        },

        now: function() {
            return ( new Date() ).getTime();
        }
    });

    jQuery.ready.promise = function( obj ) {
        if ( !readyList ) {

            readyList = jQuery.Deferred();

            // Catch cases where $(document).ready() is called after the browser event has already occurred.
            // we once tried to use readyState "interactive" here, but it caused issues like the one
            // discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
            if ( document.readyState === "complete" ) {
                // Handle it asynchronously to allow scripts the opportunity to delay ready
                setTimeout( jQuery.ready, 1 );

                // Standards-based browsers support DOMContentLoaded
            } else if ( document.addEventListener ) {
                // Use the handy event callback
                document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );

                // A fallback to window.onload, that will always work
                window.addEventListener( "load", jQuery.ready, false );

                // If IE event model is used
            } else {
                // Ensure firing before onload, maybe late but safe also for iframes
                document.attachEvent( "onreadystatechange", DOMContentLoaded );

                // A fallback to window.onload, that will always work
                window.attachEvent( "onload", jQuery.ready );

                // If IE and not a frame
                // continually check to see if the document is ready
                var top = false;

                try {
                    top = window.frameElement == null && document.documentElement;
                } catch(e) {}

                if ( top && top.doScroll ) {
                    (function doScrollCheck() {
                        if ( !jQuery.isReady ) {

                            try {
                                // Use the trick by Diego Perini
                                // http://javascript.nwbox.com/IEContentLoaded/
                                top.doScroll("left");
                            } catch(e) {
                                return setTimeout( doScrollCheck, 50 );
                            }

                            // and execute any waiting functions
                            jQuery.ready();
                        }
                    })();
                }
            }
        }
        return readyList.promise( obj );
    };

// Populate the class2type map
    jQuery.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(i, name) {
        class2type[ "[object " + name + "]" ] = name.toLowerCase();
    });

// All jQuery objects should point back to these
    rootjQuery = jQuery(document);
// String to Object options format cache
    var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
    function createOptions( options ) {
        var object = optionsCache[ options ] = {};
        jQuery.each( options.split( core_rspace ), function( _, flag ) {
            object[ flag ] = true;
        });
        return object;
    }

    /*
     * Create a callback list using the following parameters:
     *
     *	options: an optional list of space-separated options that will change how
     *			the callback list behaves or a more traditional option object
     *
     * By default a callback list will act like an event callback list and can be
     * "fired" multiple times.
     *
     * Possible options:
     *
     *	once:			will ensure the callback list can only be fired once (like a Deferred)
     *
     *	memory:			will keep track of previous values and will call any callback added
     *					after the list has been fired right away with the latest "memorized"
     *					values (like a Deferred)
     *
     *	unique:			will ensure a callback can only be added once (no duplicate in the list)
     *
     *	stopOnFalse:	interrupt callings when a callback returns false
     *
     */
    jQuery.Callbacks = function( options ) {

        // Convert options from String-formatted to Object-formatted if needed
        // (we check in cache first)
        options = typeof options === "string" ?
            ( optionsCache[ options ] || createOptions( options ) ) :
            jQuery.extend( {}, options );

        var // Last fire value (for non-forgettable lists)
            memory,
        // Flag to know if list was already fired
            fired,
        // Flag to know if list is currently firing
            firing,
        // First callback to fire (used internally by add and fireWith)
            firingStart,
        // End of the loop when firing
            firingLength,
        // Index of currently firing callback (modified by remove if needed)
            firingIndex,
        // Actual callback list
            list = [],
        // Stack of fire calls for repeatable lists
            stack = !options.once && [],
        // Fire callbacks
            fire = function( data ) {
                memory = options.memory && data;
                fired = true;
                firingIndex = firingStart || 0;
                firingStart = 0;
                firingLength = list.length;
                firing = true;
                for ( ; list && firingIndex < firingLength; firingIndex++ ) {
                    if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
                        memory = false; // To prevent further calls using add
                        break;
                    }
                }
                firing = false;
                if ( list ) {
                    if ( stack ) {
                        if ( stack.length ) {
                            fire( stack.shift() );
                        }
                    } else if ( memory ) {
                        list = [];
                    } else {
                        self.disable();
                    }
                }
            },
        // Actual Callbacks object
            self = {
                // Add a callback or a collection of callbacks to the list
                add: function() {
                    if ( list ) {
                        // First, we save the current length
                        var start = list.length;
                        (function add( args ) {
                            jQuery.each( args, function( _, arg ) {
                                var type = jQuery.type( arg );
                                if ( type === "function" && ( !options.unique || !self.has( arg ) ) ) {
                                    list.push( arg );
                                } else if ( arg && arg.length && type !== "string" ) {
                                    // Inspect recursively
                                    add( arg );
                                }
                            });
                        })( arguments );
                        // Do we need to add the callbacks to the
                        // current firing batch?
                        if ( firing ) {
                            firingLength = list.length;
                            // With memory, if we're not firing then
                            // we should call right away
                        } else if ( memory ) {
                            firingStart = start;
                            fire( memory );
                        }
                    }
                    return this;
                },
                // Remove a callback from the list
                remove: function() {
                    if ( list ) {
                        jQuery.each( arguments, function( _, arg ) {
                            var index;
                            while( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
                                list.splice( index, 1 );
                                // Handle firing indexes
                                if ( firing ) {
                                    if ( index <= firingLength ) {
                                        firingLength--;
                                    }
                                    if ( index <= firingIndex ) {
                                        firingIndex--;
                                    }
                                }
                            }
                        });
                    }
                    return this;
                },
                // Control if a given callback is in the list
                has: function( fn ) {
                    return jQuery.inArray( fn, list ) > -1;
                },
                // Remove all callbacks from the list
                empty: function() {
                    list = [];
                    return this;
                },
                // Have the list do nothing anymore
                disable: function() {
                    list = stack = memory = undefined;
                    return this;
                },
                // Is it disabled?
                disabled: function() {
                    return !list;
                },
                // Lock the list in its current state
                lock: function() {
                    stack = undefined;
                    if ( !memory ) {
                        self.disable();
                    }
                    return this;
                },
                // Is it locked?
                locked: function() {
                    return !stack;
                },
                // Call all callbacks with the given context and arguments
                fireWith: function( context, args ) {
                    args = args || [];
                    args = [ context, args.slice ? args.slice() : args ];
                    if ( list && ( !fired || stack ) ) {
                        if ( firing ) {
                            stack.push( args );
                        } else {
                            fire( args );
                        }
                    }
                    return this;
                },
                // Call all the callbacks with the given arguments
                fire: function() {
                    self.fireWith( this, arguments );
                    return this;
                },
                // To know if the callbacks have already been called at least once
                fired: function() {
                    return !!fired;
                }
            };

        return self;
    };
    jQuery.extend({

        Deferred: function( func ) {
            var tuples = [
                    // action, add listener, listener list, final state
                    [ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
                    [ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
                    [ "notify", "progress", jQuery.Callbacks("memory") ]
                ],
                state = "pending",
                promise = {
                    state: function() {
                        return state;
                    },
                    always: function() {
                        deferred.done( arguments ).fail( arguments );
                        return this;
                    },
                    then: function( /* fnDone, fnFail, fnProgress */ ) {
                        var fns = arguments;
                        return jQuery.Deferred(function( newDefer ) {
                            jQuery.each( tuples, function( i, tuple ) {
                                var action = tuple[ 0 ],
                                    fn = fns[ i ];
                                // deferred[ done | fail | progress ] for forwarding actions to newDefer
                                deferred[ tuple[1] ]( jQuery.isFunction( fn ) ?
                                    function() {
                                        var returned = fn.apply( this, arguments );
                                        if ( returned && jQuery.isFunction( returned.promise ) ) {
                                            returned.promise()
                                                .done( newDefer.resolve )
                                                .fail( newDefer.reject )
                                                .progress( newDefer.notify );
                                        } else {
                                            newDefer[ action + "With" ]( this === deferred ? newDefer : this, [ returned ] );
                                        }
                                    } :
                                    newDefer[ action ]
                                );
                            });
                            fns = null;
                        }).promise();
                    },
                    // Get a promise for this deferred
                    // If obj is provided, the promise aspect is added to the object
                    promise: function( obj ) {
                        return obj != null ? jQuery.extend( obj, promise ) : promise;
                    }
                },
                deferred = {};

            // Keep pipe for back-compat
            promise.pipe = promise.then;

            // Add list-specific methods
            jQuery.each( tuples, function( i, tuple ) {
                var list = tuple[ 2 ],
                    stateString = tuple[ 3 ];

                // promise[ done | fail | progress ] = list.add
                promise[ tuple[1] ] = list.add;

                // Handle state
                if ( stateString ) {
                    list.add(function() {
                        // state = [ resolved | rejected ]
                        state = stateString;

                        // [ reject_list | resolve_list ].disable; progress_list.lock
                    }, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
                }

                // deferred[ resolve | reject | notify ] = list.fire
                deferred[ tuple[0] ] = list.fire;
                deferred[ tuple[0] + "With" ] = list.fireWith;
            });

            // Make the deferred a promise
            promise.promise( deferred );

            // Call given func if any
            if ( func ) {
                func.call( deferred, deferred );
            }

            // All done!
            return deferred;
        },

        // Deferred helper
        when: function( subordinate /* , ..., subordinateN */ ) {
            var i = 0,
                resolveValues = core_slice.call( arguments ),
                length = resolveValues.length,

            // the count of uncompleted subordinates
                remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

            // the master Deferred. If resolveValues consist of only a single Deferred, just use that.
                deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

            // Update function for both resolve and progress values
                updateFunc = function( i, contexts, values ) {
                    return function( value ) {
                        contexts[ i ] = this;
                        values[ i ] = arguments.length > 1 ? core_slice.call( arguments ) : value;
                        if( values === progressValues ) {
                            deferred.notifyWith( contexts, values );
                        } else if ( !( --remaining ) ) {
                            deferred.resolveWith( contexts, values );
                        }
                    };
                },

                progressValues, progressContexts, resolveContexts;

            // add listeners to Deferred subordinates; treat others as resolved
            if ( length > 1 ) {
                progressValues = new Array( length );
                progressContexts = new Array( length );
                resolveContexts = new Array( length );
                for ( ; i < length; i++ ) {
                    if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
                        resolveValues[ i ].promise()
                            .done( updateFunc( i, resolveContexts, resolveValues ) )
                            .fail( deferred.reject )
                            .progress( updateFunc( i, progressContexts, progressValues ) );
                    } else {
                        --remaining;
                    }
                }
            }

            // if we're not waiting on anything, resolve the master
            if ( !remaining ) {
                deferred.resolveWith( resolveContexts, resolveValues );
            }

            return deferred.promise();
        }
    });
    jQuery.support = (function() {

        var support,
            all,
            a,
            select,
            opt,
            input,
            fragment,
            eventName,
            i,
            isSupported,
            clickFn,
            div = document.createElement("div");

        // Preliminary tests
        div.setAttribute( "className", "t" );
        div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

        all = div.getElementsByTagName("*");
        a = div.getElementsByTagName("a")[ 0 ];
        a.style.cssText = "top:1px;float:left;opacity:.5";

        // Can't get basic test support
        if ( !all || !all.length ) {
            return {};
        }

        // First batch of supports tests
        select = document.createElement("select");
        opt = select.appendChild( document.createElement("option") );
        input = div.getElementsByTagName("input")[ 0 ];

        support = {
            // IE strips leading whitespace when .innerHTML is used
            leadingWhitespace: ( div.firstChild.nodeType === 3 ),

            // Make sure that tbody elements aren't automatically inserted
            // IE will insert them into empty tables
            tbody: !div.getElementsByTagName("tbody").length,

            // Make sure that link elements get serialized correctly by innerHTML
            // This requires a wrapper element in IE
            htmlSerialize: !!div.getElementsByTagName("link").length,

            // Get the style information from getAttribute
            // (IE uses .cssText instead)
            style: /top/.test( a.getAttribute("style") ),

            // Make sure that URLs aren't manipulated
            // (IE normalizes it by default)
            hrefNormalized: ( a.getAttribute("href") === "/a" ),

            // Make sure that element opacity exists
            // (IE uses filter instead)
            // Use a regex to work around a WebKit issue. See #5145
            opacity: /^0.5/.test( a.style.opacity ),

            // Verify style float existence
            // (IE uses styleFloat instead of cssFloat)
            cssFloat: !!a.style.cssFloat,

            // Make sure that if no value is specified for a checkbox
            // that it defaults to "on".
            // (WebKit defaults to "" instead)
            checkOn: ( input.value === "on" ),

            // Make sure that a selected-by-default option has a working selected property.
            // (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
            optSelected: opt.selected,

            // Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
            getSetAttribute: div.className !== "t",

            // Tests for enctype support on a form(#6743)
            enctype: !!document.createElement("form").enctype,

            // Makes sure cloning an html5 element does not cause problems
            // Where outerHTML is undefined, this still works
            html5Clone: document.createElement("nav").cloneNode( true ).outerHTML !== "<:nav></:nav>",

            // jQuery.support.boxModel DEPRECATED in 1.8 since we don't support Quirks Mode
            boxModel: ( document.compatMode === "CSS1Compat" ),

            // Will be defined later
            submitBubbles: true,
            changeBubbles: true,
            focusinBubbles: false,
            deleteExpando: true,
            noCloneEvent: true,
            inlineBlockNeedsLayout: false,
            shrinkWrapBlocks: false,
            reliableMarginRight: true,
            boxSizingReliable: true,
            pixelPosition: false
        };

        // Make sure checked status is properly cloned
        input.checked = true;
        support.noCloneChecked = input.cloneNode( true ).checked;

        // Make sure that the options inside disabled selects aren't marked as disabled
        // (WebKit marks them as disabled)
        select.disabled = true;
        support.optDisabled = !opt.disabled;

        // Test to see if it's possible to delete an expando from an element
        // Fails in Internet Explorer
        try {
            delete div.test;
        } catch( e ) {
            support.deleteExpando = false;
        }

        if ( !div.addEventListener && div.attachEvent && div.fireEvent ) {
            div.attachEvent( "onclick", clickFn = function() {
                // Cloning a node shouldn't copy over any
                // bound event handlers (IE does this)
                support.noCloneEvent = false;
            });
            div.cloneNode( true ).fireEvent("onclick");
            div.detachEvent( "onclick", clickFn );
        }

        // Check if a radio maintains its value
        // after being appended to the DOM
        input = document.createElement("input");
        input.value = "t";
        input.setAttribute( "type", "radio" );
        support.radioValue = input.value === "t";

        input.setAttribute( "checked", "checked" );

        // #11217 - WebKit loses check when the name is after the checked attribute
        input.setAttribute( "name", "t" );

        div.appendChild( input );
        fragment = document.createDocumentFragment();
        fragment.appendChild( div.lastChild );

        // WebKit doesn't clone checked state correctly in fragments
        support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;

        // Check if a disconnected checkbox will retain its checked
        // value of true after appended to the DOM (IE6/7)
        support.appendChecked = input.checked;

        fragment.removeChild( input );
        fragment.appendChild( div );

        // Technique from Juriy Zaytsev
        // http://perfectionkills.com/detecting-event-support-without-browser-sniffing/
        // We only care about the case where non-standard event systems
        // are used, namely in IE. Short-circuiting here helps us to
        // avoid an eval call (in setAttribute) which can cause CSP
        // to go haywire. See: https://developer.mozilla.org/en/Security/CSP
        if ( div.attachEvent ) {
            for ( i in {
                submit: true,
                change: true,
                focusin: true
            }) {
                eventName = "on" + i;
                isSupported = ( eventName in div );
                if ( !isSupported ) {
                    div.setAttribute( eventName, "return;" );
                    isSupported = ( typeof div[ eventName ] === "function" );
                }
                support[ i + "Bubbles" ] = isSupported;
            }
        }

        // Run tests that need a body at doc ready
        jQuery(function() {
            var container, div, tds, marginDiv,
                divReset = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                body = document.getElementsByTagName("body")[0];

            if ( !body ) {
                // Return for frameset docs that don't have a body
                return;
            }

            container = document.createElement("div");
            container.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
            body.insertBefore( container, body.firstChild );

            // Construct the test element
            div = document.createElement("div");
            container.appendChild( div );

            // Check if table cells still have offsetWidth/Height when they are set
            // to display:none and there are still other visible table cells in a
            // table row; if so, offsetWidth/Height are not reliable for use when
            // determining if an element has been hidden directly using
            // display:none (it is still safe to use offsets if a parent element is
            // hidden; don safety goggles and see bug #4512 for more information).
            // (only IE 8 fails this test)
            div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
            tds = div.getElementsByTagName("td");
            tds[ 0 ].style.cssText = "padding:0;margin:0;border:0;display:none";
            isSupported = ( tds[ 0 ].offsetHeight === 0 );

            tds[ 0 ].style.display = "";
            tds[ 1 ].style.display = "none";

            // Check if empty table cells still have offsetWidth/Height
            // (IE <= 8 fail this test)
            support.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );

            // Check box-sizing and margin behavior
            div.innerHTML = "";
            div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
            support.boxSizing = ( div.offsetWidth === 4 );
            support.doesNotIncludeMarginInBodyOffset = ( body.offsetTop !== 1 );

            // NOTE: To any future maintainer, we've window.getComputedStyle
            // because jsdom on node.js will break without it.
            if ( window.getComputedStyle ) {
                support.pixelPosition = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
                support.boxSizingReliable = ( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

                // Check if div with explicit width and no margin-right incorrectly
                // gets computed margin-right based on width of container. For more
                // info see bug #3333
                // Fails in WebKit before Feb 2011 nightlies
                // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
                marginDiv = document.createElement("div");
                marginDiv.style.cssText = div.style.cssText = divReset;
                marginDiv.style.marginRight = marginDiv.style.width = "0";
                div.style.width = "1px";
                div.appendChild( marginDiv );
                support.reliableMarginRight =
                    !parseFloat( ( window.getComputedStyle( marginDiv, null ) || {} ).marginRight );
            }

            if ( typeof div.style.zoom !== "undefined" ) {
                // Check if natively block-level elements act like inline-block
                // elements when setting their display to 'inline' and giving
                // them layout
                // (IE < 8 does this)
                div.innerHTML = "";
                div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
                support.inlineBlockNeedsLayout = ( div.offsetWidth === 3 );

                // Check if elements with layout shrink-wrap their children
                // (IE 6 does this)
                div.style.display = "block";
                div.style.overflow = "visible";
                div.innerHTML = "<div></div>";
                div.firstChild.style.width = "5px";
                support.shrinkWrapBlocks = ( div.offsetWidth !== 3 );

                container.style.zoom = 1;
            }

            // Null elements to avoid leaks in IE
            body.removeChild( container );
            container = div = tds = marginDiv = null;
        });

        // Null elements to avoid leaks in IE
        fragment.removeChild( div );
        all = a = select = opt = input = fragment = div = null;

        return support;
    })();
    var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        rmultiDash = /([A-Z])/g;

    jQuery.extend({
        cache: {},

        deletedIds: [],

        // Remove at next major release (1.9/2.0)
        uuid: 0,

        // Unique for each copy of jQuery on the page
        // Non-digits removed to match rinlinejQuery
        expando: "jQuery" + ( jQuery.fn.jquery + Math.random() ).replace( /\D/g, "" ),

        // The following elements throw uncatchable exceptions if you
        // attempt to add expando properties to them.
        noData: {
            "embed": true,
            // Ban all objects except for Flash (which handle expandos)
            "object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            "applet": true
        },

        hasData: function( elem ) {
            elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
            return !!elem && !isEmptyDataObject( elem );
        },

        data: function( elem, name, data, pvt /* Internal Use Only */ ) {
            if ( !jQuery.acceptData( elem ) ) {
                return;
            }

            var thisCache, ret,
                internalKey = jQuery.expando,
                getByName = typeof name === "string",

            // We have to handle DOM nodes and JS objects differently because IE6-7
            // can't GC object references properly across the DOM-JS boundary
                isNode = elem.nodeType,

            // Only DOM nodes need the global jQuery cache; JS object data is
            // attached directly to the object so GC can occur automatically
                cache = isNode ? jQuery.cache : elem,

            // Only defining an ID for JS objects if its cache already exists allows
            // the code to shortcut on the same path as a DOM node with no cache
                id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

            // Avoid doing any more work than we need to when trying to get data on an
            // object that has no data at all
            if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && getByName && data === undefined ) {
                return;
            }

            if ( !id ) {
                // Only DOM nodes need a new unique ID for each element since their data
                // ends up in the global cache
                if ( isNode ) {
                    elem[ internalKey ] = id = jQuery.deletedIds.pop() || jQuery.guid++;
                } else {
                    id = internalKey;
                }
            }

            if ( !cache[ id ] ) {
                cache[ id ] = {};

                // Avoids exposing jQuery metadata on plain JS objects when the object
                // is serialized using JSON.stringify
                if ( !isNode ) {
                    cache[ id ].toJSON = jQuery.noop;
                }
            }

            // An object can be passed to jQuery.data instead of a key/value pair; this gets
            // shallow copied over onto the existing cache
            if ( typeof name === "object" || typeof name === "function" ) {
                if ( pvt ) {
                    cache[ id ] = jQuery.extend( cache[ id ], name );
                } else {
                    cache[ id ].data = jQuery.extend( cache[ id ].data, name );
                }
            }

            thisCache = cache[ id ];

            // jQuery data() is stored in a separate object inside the object's internal data
            // cache in order to avoid key collisions between internal data and user-defined
            // data.
            if ( !pvt ) {
                if ( !thisCache.data ) {
                    thisCache.data = {};
                }

                thisCache = thisCache.data;
            }

            if ( data !== undefined ) {
                thisCache[ jQuery.camelCase( name ) ] = data;
            }

            // Check for both converted-to-camel and non-converted data property names
            // If a data property was specified
            if ( getByName ) {

                // First Try to find as-is property data
                ret = thisCache[ name ];

                // Test for null|undefined property data
                if ( ret == null ) {

                    // Try to find the camelCased property
                    ret = thisCache[ jQuery.camelCase( name ) ];
                }
            } else {
                ret = thisCache;
            }

            return ret;
        },

        removeData: function( elem, name, pvt /* Internal Use Only */ ) {
            if ( !jQuery.acceptData( elem ) ) {
                return;
            }

            var thisCache, i, l,

                isNode = elem.nodeType,

            // See jQuery.data for more information
                cache = isNode ? jQuery.cache : elem,
                id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

            // If there is already no cache entry for this object, there is no
            // purpose in continuing
            if ( !cache[ id ] ) {
                return;
            }

            if ( name ) {

                thisCache = pvt ? cache[ id ] : cache[ id ].data;

                if ( thisCache ) {

                    // Support array or space separated string names for data keys
                    if ( !jQuery.isArray( name ) ) {

                        // try the string as a key before any manipulation
                        if ( name in thisCache ) {
                            name = [ name ];
                        } else {

                            // split the camel cased version by spaces unless a key with the spaces exists
                            name = jQuery.camelCase( name );
                            if ( name in thisCache ) {
                                name = [ name ];
                            } else {
                                name = name.split(" ");
                            }
                        }
                    }

                    for ( i = 0, l = name.length; i < l; i++ ) {
                        delete thisCache[ name[i] ];
                    }

                    // If there is no data left in the cache, we want to continue
                    // and let the cache object itself get destroyed
                    if ( !( pvt ? isEmptyDataObject : jQuery.isEmptyObject )( thisCache ) ) {
                        return;
                    }
                }
            }

            // See jQuery.data for more information
            if ( !pvt ) {
                delete cache[ id ].data;

                // Don't destroy the parent cache unless the internal data object
                // had been the only thing left in it
                if ( !isEmptyDataObject( cache[ id ] ) ) {
                    return;
                }
            }

            // Destroy the cache
            if ( isNode ) {
                jQuery.cleanData( [ elem ], true );

                // Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
            } else if ( jQuery.support.deleteExpando || cache != cache.window ) {
                delete cache[ id ];

                // When all else fails, null
            } else {
                cache[ id ] = null;
            }
        },

        // For internal use only.
        _data: function( elem, name, data ) {
            return jQuery.data( elem, name, data, true );
        },

        // A method for determining if a DOM node can handle the data expando
        acceptData: function( elem ) {
            var noData = elem.nodeName && jQuery.noData[ elem.nodeName.toLowerCase() ];

            // nodes accept data unless otherwise specified; rejection can be conditional
            return !noData || noData !== true && elem.getAttribute("classid") === noData;
        }
    });

    jQuery.fn.extend({
        data: function( key, value ) {
            var parts, part, attr, name, l,
                elem = this[0],
                i = 0,
                data = null;

            // Gets all values
            if ( key === undefined ) {
                if ( this.length ) {
                    data = jQuery.data( elem );

                    if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
                        attr = elem.attributes;
                        for ( l = attr.length; i < l; i++ ) {
                            name = attr[i].name;

                            if ( !name.indexOf( "data-" ) ) {
                                name = jQuery.camelCase( name.substring(5) );

                                dataAttr( elem, name, data[ name ] );
                            }
                        }
                        jQuery._data( elem, "parsedAttrs", true );
                    }
                }

                return data;
            }

            // Sets multiple values
            if ( typeof key === "object" ) {
                return this.each(function() {
                    jQuery.data( this, key );
                });
            }

            parts = key.split( ".", 2 );
            parts[1] = parts[1] ? "." + parts[1] : "";
            part = parts[1] + "!";

            return jQuery.access( this, function( value ) {

                if ( value === undefined ) {
                    data = this.triggerHandler( "getData" + part, [ parts[0] ] );

                    // Try to fetch any internally stored data first
                    if ( data === undefined && elem ) {
                        data = jQuery.data( elem, key );
                        data = dataAttr( elem, key, data );
                    }

                    return data === undefined && parts[1] ?
                        this.data( parts[0] ) :
                        data;
                }

                parts[1] = value;
                this.each(function() {
                    var self = jQuery( this );

                    self.triggerHandler( "setData" + part, parts );
                    jQuery.data( this, key, value );
                    self.triggerHandler( "changeData" + part, parts );
                });
            }, null, value, arguments.length > 1, null, false );
        },

        removeData: function( key ) {
            return this.each(function() {
                jQuery.removeData( this, key );
            });
        }
    });

    function dataAttr( elem, key, data ) {
        // If nothing was found internally, try to fetch any
        // data from the HTML5 data-* attribute
        if ( data === undefined && elem.nodeType === 1 ) {

            var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

            data = elem.getAttribute( name );

            if ( typeof data === "string" ) {
                try {
                    data = data === "true" ? true :
                        data === "false" ? false :
                            data === "null" ? null :
                                // Only convert to a number if it doesn't change the string
                                +data + "" === data ? +data :
                                    rbrace.test( data ) ? jQuery.parseJSON( data ) :
                                        data;
                } catch( e ) {}

                // Make sure we set the data so it isn't changed later
                jQuery.data( elem, key, data );

            } else {
                data = undefined;
            }
        }

        return data;
    }

// checks a cache object for emptiness
    function isEmptyDataObject( obj ) {
        var name;
        for ( name in obj ) {

            // if the public data object is empty, the private is still empty
            if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
                continue;
            }
            if ( name !== "toJSON" ) {
                return false;
            }
        }

        return true;
    }
    jQuery.extend({
        queue: function( elem, type, data ) {
            var queue;

            if ( elem ) {
                type = ( type || "fx" ) + "queue";
                queue = jQuery._data( elem, type );

                // Speed up dequeue by getting out quickly if this is just a lookup
                if ( data ) {
                    if ( !queue || jQuery.isArray(data) ) {
                        queue = jQuery._data( elem, type, jQuery.makeArray(data) );
                    } else {
                        queue.push( data );
                    }
                }
                return queue || [];
            }
        },

        dequeue: function( elem, type ) {
            type = type || "fx";

            var queue = jQuery.queue( elem, type ),
                startLength = queue.length,
                fn = queue.shift(),
                hooks = jQuery._queueHooks( elem, type ),
                next = function() {
                    jQuery.dequeue( elem, type );
                };

            // If the fx queue is dequeued, always remove the progress sentinel
            if ( fn === "inprogress" ) {
                fn = queue.shift();
                startLength--;
            }

            if ( fn ) {

                // Add a progress sentinel to prevent the fx queue from being
                // automatically dequeued
                if ( type === "fx" ) {
                    queue.unshift( "inprogress" );
                }

                // clear up the last queue stop function
                delete hooks.stop;
                fn.call( elem, next, hooks );
            }

            if ( !startLength && hooks ) {
                hooks.empty.fire();
            }
        },

        // not intended for public consumption - generates a queueHooks object, or returns the current one
        _queueHooks: function( elem, type ) {
            var key = type + "queueHooks";
            return jQuery._data( elem, key ) || jQuery._data( elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    jQuery.removeData( elem, type + "queue", true );
                    jQuery.removeData( elem, key, true );
                })
            });
        }
    });

    jQuery.fn.extend({
        queue: function( type, data ) {
            var setter = 2;

            if ( typeof type !== "string" ) {
                data = type;
                type = "fx";
                setter--;
            }

            if ( arguments.length < setter ) {
                return jQuery.queue( this[0], type );
            }

            return data === undefined ?
                this :
                this.each(function() {
                    var queue = jQuery.queue( this, type, data );

                    // ensure a hooks for this queue
                    jQuery._queueHooks( this, type );

                    if ( type === "fx" && queue[0] !== "inprogress" ) {
                        jQuery.dequeue( this, type );
                    }
                });
        },
        dequeue: function( type ) {
            return this.each(function() {
                jQuery.dequeue( this, type );
            });
        },
        // Based off of the plugin by Clint Helfers, with permission.
        // http://blindsignals.com/index.php/2009/07/jquery-delay/
        delay: function( time, type ) {
            time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
            type = type || "fx";

            return this.queue( type, function( next, hooks ) {
                var timeout = setTimeout( next, time );
                hooks.stop = function() {
                    clearTimeout( timeout );
                };
            });
        },
        clearQueue: function( type ) {
            return this.queue( type || "fx", [] );
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function( type, obj ) {
            var tmp,
                count = 1,
                defer = jQuery.Deferred(),
                elements = this,
                i = this.length,
                resolve = function() {
                    if ( !( --count ) ) {
                        defer.resolveWith( elements, [ elements ] );
                    }
                };

            if ( typeof type !== "string" ) {
                obj = type;
                type = undefined;
            }
            type = type || "fx";

            while( i-- ) {
                tmp = jQuery._data( elements[ i ], type + "queueHooks" );
                if ( tmp && tmp.empty ) {
                    count++;
                    tmp.empty.add( resolve );
                }
            }
            resolve();
            return defer.promise( obj );
        }
    });
    var nodeHook, boolHook, fixSpecified,
        rclass = /[\t\r\n]/g,
        rreturn = /\r/g,
        rtype = /^(?:button|input)$/i,
        rfocusable = /^(?:button|input|object|select|textarea)$/i,
        rclickable = /^a(?:rea|)$/i,
        rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        getSetAttribute = jQuery.support.getSetAttribute;

    jQuery.fn.extend({
        attr: function( name, value ) {
            return jQuery.access( this, jQuery.attr, name, value, arguments.length > 1 );
        },

        removeAttr: function( name ) {
            return this.each(function() {
                jQuery.removeAttr( this, name );
            });
        },

        prop: function( name, value ) {
            return jQuery.access( this, jQuery.prop, name, value, arguments.length > 1 );
        },

        removeProp: function( name ) {
            name = jQuery.propFix[ name ] || name;
            return this.each(function() {
                // try/catch handles cases where IE balks (such as removing a property on window)
                try {
                    this[ name ] = undefined;
                    delete this[ name ];
                } catch( e ) {}
            });
        },

        addClass: function( value ) {
            var classNames, i, l, elem,
                setClass, c, cl;

            if ( jQuery.isFunction( value ) ) {
                return this.each(function( j ) {
                    jQuery( this ).addClass( value.call(this, j, this.className) );
                });
            }

            if ( value && typeof value === "string" ) {
                classNames = value.split( core_rspace );

                for ( i = 0, l = this.length; i < l; i++ ) {
                    elem = this[ i ];

                    if ( elem.nodeType === 1 ) {
                        if ( !elem.className && classNames.length === 1 ) {
                            elem.className = value;

                        } else {
                            setClass = " " + elem.className + " ";

                            for ( c = 0, cl = classNames.length; c < cl; c++ ) {
                                if ( setClass.indexOf( " " + classNames[ c ] + " " ) < 0 ) {
                                    setClass += classNames[ c ] + " ";
                                }
                            }
                            elem.className = jQuery.trim( setClass );
                        }
                    }
                }
            }

            return this;
        },

        removeClass: function( value ) {
            var removes, className, elem, c, cl, i, l;

            if ( jQuery.isFunction( value ) ) {
                return this.each(function( j ) {
                    jQuery( this ).removeClass( value.call(this, j, this.className) );
                });
            }
            if ( (value && typeof value === "string") || value === undefined ) {
                removes = ( value || "" ).split( core_rspace );

                for ( i = 0, l = this.length; i < l; i++ ) {
                    elem = this[ i ];
                    if ( elem.nodeType === 1 && elem.className ) {

                        className = (" " + elem.className + " ").replace( rclass, " " );

                        // loop over each item in the removal list
                        for ( c = 0, cl = removes.length; c < cl; c++ ) {
                            // Remove until there is nothing to remove,
                            while ( className.indexOf(" " + removes[ c ] + " ") >= 0 ) {
                                className = className.replace( " " + removes[ c ] + " " , " " );
                            }
                        }
                        elem.className = value ? jQuery.trim( className ) : "";
                    }
                }
            }

            return this;
        },

        toggleClass: function( value, stateVal ) {
            var type = typeof value,
                isBool = typeof stateVal === "boolean";

            if ( jQuery.isFunction( value ) ) {
                return this.each(function( i ) {
                    jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
                });
            }

            return this.each(function() {
                if ( type === "string" ) {
                    // toggle individual class names
                    var className,
                        i = 0,
                        self = jQuery( this ),
                        state = stateVal,
                        classNames = value.split( core_rspace );

                    while ( (className = classNames[ i++ ]) ) {
                        // check each className given, space separated list
                        state = isBool ? state : !self.hasClass( className );
                        self[ state ? "addClass" : "removeClass" ]( className );
                    }

                } else if ( type === "undefined" || type === "boolean" ) {
                    if ( this.className ) {
                        // store className if set
                        jQuery._data( this, "__className__", this.className );
                    }

                    // toggle whole className
                    this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
                }
            });
        },

        hasClass: function( selector ) {
            var className = " " + selector + " ",
                i = 0,
                l = this.length;
            for ( ; i < l; i++ ) {
                if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
                    return true;
                }
            }

            return false;
        },

        val: function( value ) {
            var hooks, ret, isFunction,
                elem = this[0];

            if ( !arguments.length ) {
                if ( elem ) {
                    hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

                    if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
                        return ret;
                    }

                    ret = elem.value;

                    return typeof ret === "string" ?
                        // handle most common string cases
                        ret.replace(rreturn, "") :
                        // handle cases where value is null/undef or number
                        ret == null ? "" : ret;
                }

                return;
            }

            isFunction = jQuery.isFunction( value );

            return this.each(function( i ) {
                var val,
                    self = jQuery(this);

                if ( this.nodeType !== 1 ) {
                    return;
                }

                if ( isFunction ) {
                    val = value.call( this, i, self.val() );
                } else {
                    val = value;
                }

                // Treat null/undefined as ""; convert numbers to string
                if ( val == null ) {
                    val = "";
                } else if ( typeof val === "number" ) {
                    val += "";
                } else if ( jQuery.isArray( val ) ) {
                    val = jQuery.map(val, function ( value ) {
                        return value == null ? "" : value + "";
                    });
                }

                hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

                // If set returns undefined, fall back to normal setting
                if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
                    this.value = val;
                }
            });
        }
    });

    jQuery.extend({
        valHooks: {
            option: {
                get: function( elem ) {
                    // attributes.value is undefined in Blackberry 4.7 but
                    // uses .value. See #6932
                    var val = elem.attributes.value;
                    return !val || val.specified ? elem.value : elem.text;
                }
            },
            select: {
                get: function( elem ) {
                    var value, i, max, option,
                        index = elem.selectedIndex,
                        values = [],
                        options = elem.options,
                        one = elem.type === "select-one";

                    // Nothing was selected
                    if ( index < 0 ) {
                        return null;
                    }

                    // Loop through all the selected options
                    i = one ? index : 0;
                    max = one ? index + 1 : options.length;
                    for ( ; i < max; i++ ) {
                        option = options[ i ];

                        // Don't return options that are disabled or in a disabled optgroup
                        if ( option.selected && (jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) &&
                            (!option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" )) ) {

                            // Get the specific value for the option
                            value = jQuery( option ).val();

                            // We don't need an array for one selects
                            if ( one ) {
                                return value;
                            }

                            // Multi-Selects return an array
                            values.push( value );
                        }
                    }

                    // Fixes Bug #2551 -- select.val() broken in IE after form.reset()
                    if ( one && !values.length && options.length ) {
                        return jQuery( options[ index ] ).val();
                    }

                    return values;
                },

                set: function( elem, value ) {
                    var values = jQuery.makeArray( value );

                    jQuery(elem).find("option").each(function() {
                        this.selected = jQuery.inArray( jQuery(this).val(), values ) >= 0;
                    });

                    if ( !values.length ) {
                        elem.selectedIndex = -1;
                    }
                    return values;
                }
            }
        },

        // Unused in 1.8, left in so attrFn-stabbers won't die; remove in 1.9
        attrFn: {},

        attr: function( elem, name, value, pass ) {
            var ret, hooks, notxml,
                nType = elem.nodeType;

            // don't get/set attributes on text, comment and attribute nodes
            if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
                return;
            }

            if ( pass && jQuery.isFunction( jQuery.fn[ name ] ) ) {
                return jQuery( elem )[ name ]( value );
            }

            // Fallback to prop when attributes are not supported
            if ( typeof elem.getAttribute === "undefined" ) {
                return jQuery.prop( elem, name, value );
            }

            notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

            // All attributes are lowercase
            // Grab necessary hook if one is defined
            if ( notxml ) {
                name = name.toLowerCase();
                hooks = jQuery.attrHooks[ name ] || ( rboolean.test( name ) ? boolHook : nodeHook );
            }

            if ( value !== undefined ) {

                if ( value === null ) {
                    jQuery.removeAttr( elem, name );
                    return;

                } else if ( hooks && "set" in hooks && notxml && (ret = hooks.set( elem, value, name )) !== undefined ) {
                    return ret;

                } else {
                    elem.setAttribute( name, value + "" );
                    return value;
                }

            } else if ( hooks && "get" in hooks && notxml && (ret = hooks.get( elem, name )) !== null ) {
                return ret;

            } else {

                ret = elem.getAttribute( name );

                // Non-existent attributes return null, we normalize to undefined
                return ret === null ?
                    undefined :
                    ret;
            }
        },

        removeAttr: function( elem, value ) {
            var propName, attrNames, name, isBool,
                i = 0;

            if ( value && elem.nodeType === 1 ) {

                attrNames = value.split( core_rspace );

                for ( ; i < attrNames.length; i++ ) {
                    name = attrNames[ i ];

                    if ( name ) {
                        propName = jQuery.propFix[ name ] || name;
                        isBool = rboolean.test( name );

                        // See #9699 for explanation of this approach (setting first, then removal)
                        // Do not do this for boolean attributes (see #10870)
                        if ( !isBool ) {
                            jQuery.attr( elem, name, "" );
                        }
                        elem.removeAttribute( getSetAttribute ? name : propName );

                        // Set corresponding property to false for boolean attributes
                        if ( isBool && propName in elem ) {
                            elem[ propName ] = false;
                        }
                    }
                }
            }
        },

        attrHooks: {
            type: {
                set: function( elem, value ) {
                    // We can't allow the type property to be changed (since it causes problems in IE)
                    if ( rtype.test( elem.nodeName ) && elem.parentNode ) {
                        jQuery.error( "type property can't be changed" );
                    } else if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
                        // Setting the type on a radio button after the value resets the value in IE6-9
                        // Reset value to it's default in case type is set after value
                        // This is for element creation
                        var val = elem.value;
                        elem.setAttribute( "type", value );
                        if ( val ) {
                            elem.value = val;
                        }
                        return value;
                    }
                }
            },
            // Use the value property for back compat
            // Use the nodeHook for button elements in IE6/7 (#1954)
            value: {
                get: function( elem, name ) {
                    if ( nodeHook && jQuery.nodeName( elem, "button" ) ) {
                        return nodeHook.get( elem, name );
                    }
                    return name in elem ?
                        elem.value :
                        null;
                },
                set: function( elem, value, name ) {
                    if ( nodeHook && jQuery.nodeName( elem, "button" ) ) {
                        return nodeHook.set( elem, value, name );
                    }
                    // Does not return so that setAttribute is also used
                    elem.value = value;
                }
            }
        },

        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },

        prop: function( elem, name, value ) {
            var ret, hooks, notxml,
                nType = elem.nodeType;

            // don't get/set properties on text, comment and attribute nodes
            if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
                return;
            }

            notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

            if ( notxml ) {
                // Fix name and attach hooks
                name = jQuery.propFix[ name ] || name;
                hooks = jQuery.propHooks[ name ];
            }

            if ( value !== undefined ) {
                if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
                    return ret;

                } else {
                    return ( elem[ name ] = value );
                }

            } else {
                if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
                    return ret;

                } else {
                    return elem[ name ];
                }
            }
        },

        propHooks: {
            tabIndex: {
                get: function( elem ) {
                    // elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
                    // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
                    var attributeNode = elem.getAttributeNode("tabindex");

                    return attributeNode && attributeNode.specified ?
                        parseInt( attributeNode.value, 10 ) :
                        rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
                            0 :
                            undefined;
                }
            }
        }
    });

// Hook for boolean attributes
    boolHook = {
        get: function( elem, name ) {
            // Align boolean attributes with corresponding properties
            // Fall back to attribute presence where some booleans are not supported
            var attrNode,
                property = jQuery.prop( elem, name );
            return property === true || typeof property !== "boolean" && ( attrNode = elem.getAttributeNode(name) ) && attrNode.nodeValue !== false ?
                name.toLowerCase() :
                undefined;
        },
        set: function( elem, value, name ) {
            var propName;
            if ( value === false ) {
                // Remove boolean attributes when set to false
                jQuery.removeAttr( elem, name );
            } else {
                // value is true since we know at this point it's type boolean and not false
                // Set boolean attributes to the same name and set the DOM property
                propName = jQuery.propFix[ name ] || name;
                if ( propName in elem ) {
                    // Only set the IDL specifically if it already exists on the element
                    elem[ propName ] = true;
                }

                elem.setAttribute( name, name.toLowerCase() );
            }
            return name;
        }
    };

// IE6/7 do not support getting/setting some attributes with get/setAttribute
    if ( !getSetAttribute ) {

        fixSpecified = {
            name: true,
            id: true,
            coords: true
        };

        // Use this for any attribute in IE6/7
        // This fixes almost every IE6/7 issue
        nodeHook = jQuery.valHooks.button = {
            get: function( elem, name ) {
                var ret;
                ret = elem.getAttributeNode( name );
                return ret && ( fixSpecified[ name ] ? ret.value !== "" : ret.specified ) ?
                    ret.value :
                    undefined;
            },
            set: function( elem, value, name ) {
                // Set the existing or create a new attribute node
                var ret = elem.getAttributeNode( name );
                if ( !ret ) {
                    ret = document.createAttribute( name );
                    elem.setAttributeNode( ret );
                }
                return ( ret.value = value + "" );
            }
        };

        // Set width and height to auto instead of 0 on empty string( Bug #8150 )
        // This is for removals
        jQuery.each([ "width", "height" ], function( i, name ) {
            jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
                set: function( elem, value ) {
                    if ( value === "" ) {
                        elem.setAttribute( name, "auto" );
                        return value;
                    }
                }
            });
        });

        // Set contenteditable to false on removals(#10429)
        // Setting to empty string throws an error as an invalid value
        jQuery.attrHooks.contenteditable = {
            get: nodeHook.get,
            set: function( elem, value, name ) {
                if ( value === "" ) {
                    value = "false";
                }
                nodeHook.set( elem, value, name );
            }
        };
    }


// Some attributes require a special call on IE
    if ( !jQuery.support.hrefNormalized ) {
        jQuery.each([ "href", "src", "width", "height" ], function( i, name ) {
            jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
                get: function( elem ) {
                    var ret = elem.getAttribute( name, 2 );
                    return ret === null ? undefined : ret;
                }
            });
        });
    }

    if ( !jQuery.support.style ) {
        jQuery.attrHooks.style = {
            get: function( elem ) {
                // Return undefined in the case of empty string
                // Normalize to lowercase since IE uppercases css property names
                return elem.style.cssText.toLowerCase() || undefined;
            },
            set: function( elem, value ) {
                return ( elem.style.cssText = value + "" );
            }
        };
    }

// Safari mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
    if ( !jQuery.support.optSelected ) {
        jQuery.propHooks.selected = jQuery.extend( jQuery.propHooks.selected, {
            get: function( elem ) {
                var parent = elem.parentNode;

                if ( parent ) {
                    parent.selectedIndex;

                    // Make sure that it also works with optgroups, see #5701
                    if ( parent.parentNode ) {
                        parent.parentNode.selectedIndex;
                    }
                }
                return null;
            }
        });
    }

// IE6/7 call enctype encoding
    if ( !jQuery.support.enctype ) {
        jQuery.propFix.enctype = "encoding";
    }

// Radios and checkboxes getter/setter
    if ( !jQuery.support.checkOn ) {
        jQuery.each([ "radio", "checkbox" ], function() {
            jQuery.valHooks[ this ] = {
                get: function( elem ) {
                    // Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
                    return elem.getAttribute("value") === null ? "on" : elem.value;
                }
            };
        });
    }
    jQuery.each([ "radio", "checkbox" ], function() {
        jQuery.valHooks[ this ] = jQuery.extend( jQuery.valHooks[ this ], {
            set: function( elem, value ) {
                if ( jQuery.isArray( value ) ) {
                    return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
                }
            }
        });
    });
    var rformElems = /^(?:textarea|input|select)$/i,
        rtypenamespace = /^([^\.]*|)(?:\.(.+)|)$/,
        rhoverHack = /(?:^|\s)hover(\.\S+|)\b/,
        rkeyEvent = /^key/,
        rmouseEvent = /^(?:mouse|contextmenu)|click/,
        rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
        hoverHack = function( events ) {
            return jQuery.event.special.hover ? events : events.replace( rhoverHack, "mouseenter$1 mouseleave$1" );
        };

    /*
     * Helper functions for managing events -- not part of the public interface.
     * Props to Dean Edwards' addEvent library for many of the ideas.
     */
    jQuery.event = {

        add: function( elem, types, handler, data, selector ) {

            var elemData, eventHandle, events,
                t, tns, type, namespaces, handleObj,
                handleObjIn, handlers, special;

            // Don't attach events to noData or text/comment nodes (allow plain objects tho)
            if ( elem.nodeType === 3 || elem.nodeType === 8 || !types || !handler || !(elemData = jQuery._data( elem )) ) {
                return;
            }

            // Caller can pass in an object of custom data in lieu of the handler
            if ( handler.handler ) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
            }

            // Make sure that the handler has a unique ID, used to find/remove it later
            if ( !handler.guid ) {
                handler.guid = jQuery.guid++;
            }

            // Init the element's event structure and main handler, if this is the first
            events = elemData.events;
            if ( !events ) {
                elemData.events = events = {};
            }
            eventHandle = elemData.handle;
            if ( !eventHandle ) {
                elemData.handle = eventHandle = function( e ) {
                    // Discard the second event of a jQuery.event.trigger() and
                    // when an event is called after a page has unloaded
                    return typeof jQuery !== "undefined" && (!e || jQuery.event.triggered !== e.type) ?
                        jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
                        undefined;
                };
                // Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
                eventHandle.elem = elem;
            }

            // Handle multiple events separated by a space
            // jQuery(...).bind("mouseover mouseout", fn);
            types = jQuery.trim( hoverHack(types) ).split( " " );
            for ( t = 0; t < types.length; t++ ) {

                tns = rtypenamespace.exec( types[t] ) || [];
                type = tns[1];
                namespaces = ( tns[2] || "" ).split( "." ).sort();

                // If event changes its type, use the special event handlers for the changed type
                special = jQuery.event.special[ type ] || {};

                // If selector defined, determine special event api type, otherwise given type
                type = ( selector ? special.delegateType : special.bindType ) || type;

                // Update special based on newly reset type
                special = jQuery.event.special[ type ] || {};

                // handleObj is passed to all event handlers
                handleObj = jQuery.extend({
                    type: type,
                    origType: tns[1],
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
                    namespace: namespaces.join(".")
                }, handleObjIn );

                // Init the event handler queue if we're the first
                handlers = events[ type ];
                if ( !handlers ) {
                    handlers = events[ type ] = [];
                    handlers.delegateCount = 0;

                    // Only use addEventListener/attachEvent if the special events handler returns false
                    if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
                        // Bind the global event handler to the element
                        if ( elem.addEventListener ) {
                            elem.addEventListener( type, eventHandle, false );

                        } else if ( elem.attachEvent ) {
                            elem.attachEvent( "on" + type, eventHandle );
                        }
                    }
                }

                if ( special.add ) {
                    special.add.call( elem, handleObj );

                    if ( !handleObj.handler.guid ) {
                        handleObj.handler.guid = handler.guid;
                    }
                }

                // Add to the element's handler list, delegates in front
                if ( selector ) {
                    handlers.splice( handlers.delegateCount++, 0, handleObj );
                } else {
                    handlers.push( handleObj );
                }

                // Keep track of which events have ever been used, for event optimization
                jQuery.event.global[ type ] = true;
            }

            // Nullify elem to prevent memory leaks in IE
            elem = null;
        },

        global: {},

        // Detach an event or set of events from an element
        remove: function( elem, types, handler, selector, mappedTypes ) {

            var t, tns, type, origType, namespaces, origCount,
                j, events, special, eventType, handleObj,
                elemData = jQuery.hasData( elem ) && jQuery._data( elem );

            if ( !elemData || !(events = elemData.events) ) {
                return;
            }

            // Once for each type.namespace in types; type may be omitted
            types = jQuery.trim( hoverHack( types || "" ) ).split(" ");
            for ( t = 0; t < types.length; t++ ) {
                tns = rtypenamespace.exec( types[t] ) || [];
                type = origType = tns[1];
                namespaces = tns[2];

                // Unbind all events (on this namespace, if provided) for the element
                if ( !type ) {
                    for ( type in events ) {
                        jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
                    }
                    continue;
                }

                special = jQuery.event.special[ type ] || {};
                type = ( selector? special.delegateType : special.bindType ) || type;
                eventType = events[ type ] || [];
                origCount = eventType.length;
                namespaces = namespaces ? new RegExp("(^|\\.)" + namespaces.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

                // Remove matching events
                for ( j = 0; j < eventType.length; j++ ) {
                    handleObj = eventType[ j ];

                    if ( ( mappedTypes || origType === handleObj.origType ) &&
                        ( !handler || handler.guid === handleObj.guid ) &&
                        ( !namespaces || namespaces.test( handleObj.namespace ) ) &&
                        ( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
                        eventType.splice( j--, 1 );

                        if ( handleObj.selector ) {
                            eventType.delegateCount--;
                        }
                        if ( special.remove ) {
                            special.remove.call( elem, handleObj );
                        }
                    }
                }

                // Remove generic event handler if we removed something and no more handlers exist
                // (avoids potential for endless recursion during removal of special event handlers)
                if ( eventType.length === 0 && origCount !== eventType.length ) {
                    if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
                        jQuery.removeEvent( elem, type, elemData.handle );
                    }

                    delete events[ type ];
                }
            }

            // Remove the expando if it's no longer used
            if ( jQuery.isEmptyObject( events ) ) {
                delete elemData.handle;

                // removeData also checks for emptiness and clears the expando if empty
                // so use it instead of delete
                jQuery.removeData( elem, "events", true );
            }
        },

        // Events that are safe to short-circuit if no handlers are attached.
        // Native DOM events should not be added, they may have inline handlers.
        customEvent: {
            "getData": true,
            "setData": true,
            "changeData": true
        },

        trigger: function( event, data, elem, onlyHandlers ) {
            // Don't do events on text and comment nodes
            if ( elem && (elem.nodeType === 3 || elem.nodeType === 8) ) {
                return;
            }

            // Event object or event type
            var cache, exclusive, i, cur, old, ontype, special, handle, eventPath, bubbleType,
                type = event.type || event,
                namespaces = [];

            // focus/blur morphs to focusin/out; ensure we're not firing them right now
            if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
                return;
            }

            if ( type.indexOf( "!" ) >= 0 ) {
                // Exclusive events trigger only for the exact event (no namespaces)
                type = type.slice(0, -1);
                exclusive = true;
            }

            if ( type.indexOf( "." ) >= 0 ) {
                // Namespaced trigger; create a regexp to match event type in handle()
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort();
            }

            if ( (!elem || jQuery.event.customEvent[ type ]) && !jQuery.event.global[ type ] ) {
                // No jQuery handlers for this event type, and it can't have inline handlers
                return;
            }

            // Caller can pass in an Event, Object, or just an event type string
            event = typeof event === "object" ?
                // jQuery.Event object
                event[ jQuery.expando ] ? event :
                    // Object literal
                    new jQuery.Event( type, event ) :
                // Just the event type (string)
                new jQuery.Event( type );

            event.type = type;
            event.isTrigger = true;
            event.exclusive = exclusive;
            event.namespace = namespaces.join( "." );
            event.namespace_re = event.namespace? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            ontype = type.indexOf( ":" ) < 0 ? "on" + type : "";

            // Handle a global trigger
            if ( !elem ) {

                // TODO: Stop taunting the data cache; remove global events and always attach to document
                cache = jQuery.cache;
                for ( i in cache ) {
                    if ( cache[ i ].events && cache[ i ].events[ type ] ) {
                        jQuery.event.trigger( event, data, cache[ i ].handle.elem, true );
                    }
                }
                return;
            }

            // Clean up the event in case it is being reused
            event.result = undefined;
            if ( !event.target ) {
                event.target = elem;
            }

            // Clone any incoming data and prepend the event, creating the handler arg list
            data = data != null ? jQuery.makeArray( data ) : [];
            data.unshift( event );

            // Allow special events to draw outside the lines
            special = jQuery.event.special[ type ] || {};
            if ( special.trigger && special.trigger.apply( elem, data ) === false ) {
                return;
            }

            // Determine event propagation path in advance, per W3C events spec (#9951)
            // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
            eventPath = [[ elem, special.bindType || type ]];
            if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

                bubbleType = special.delegateType || type;
                cur = rfocusMorph.test( bubbleType + type ) ? elem : elem.parentNode;
                for ( old = elem; cur; cur = cur.parentNode ) {
                    eventPath.push([ cur, bubbleType ]);
                    old = cur;
                }

                // Only add window if we got to document (e.g., not plain obj or detached DOM)
                if ( old === (elem.ownerDocument || document) ) {
                    eventPath.push([ old.defaultView || old.parentWindow || window, bubbleType ]);
                }
            }

            // Fire handlers on the event path
            for ( i = 0; i < eventPath.length && !event.isPropagationStopped(); i++ ) {

                cur = eventPath[i][0];
                event.type = eventPath[i][1];

                handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
                if ( handle ) {
                    handle.apply( cur, data );
                }
                // Note that this is a bare JS function and not a jQuery handler
                handle = ontype && cur[ ontype ];
                if ( handle && jQuery.acceptData( cur ) && handle.apply && handle.apply( cur, data ) === false ) {
                    event.preventDefault();
                }
            }
            event.type = type;

            // If nobody prevented the default action, do it now
            if ( !onlyHandlers && !event.isDefaultPrevented() ) {

                if ( (!special._default || special._default.apply( elem.ownerDocument, data ) === false) &&
                    !(type === "click" && jQuery.nodeName( elem, "a" )) && jQuery.acceptData( elem ) ) {

                    // Call a native DOM method on the target with the same name name as the event.
                    // Can't use an .isFunction() check here because IE6/7 fails that test.
                    // Don't do default actions on window, that's where global variables be (#6170)
                    // IE<9 dies on focus/blur to hidden element (#1486)
                    if ( ontype && elem[ type ] && ((type !== "focus" && type !== "blur") || event.target.offsetWidth !== 0) && !jQuery.isWindow( elem ) ) {

                        // Don't re-trigger an onFOO event when we call its FOO() method
                        old = elem[ ontype ];

                        if ( old ) {
                            elem[ ontype ] = null;
                        }

                        // Prevent re-triggering of the same event, since we already bubbled it above
                        jQuery.event.triggered = type;
                        elem[ type ]();
                        jQuery.event.triggered = undefined;

                        if ( old ) {
                            elem[ ontype ] = old;
                        }
                    }
                }
            }

            return event.result;
        },

        dispatch: function( event ) {

            // Make a writable jQuery.Event from the native event object
            event = jQuery.event.fix( event || window.event );

            var i, j, cur, ret, selMatch, matched, matches, handleObj, sel, related,
                handlers = ( (jQuery._data( this, "events" ) || {} )[ event.type ] || []),
                delegateCount = handlers.delegateCount,
                args = core_slice.call( arguments ),
                run_all = !event.exclusive && !event.namespace,
                special = jQuery.event.special[ event.type ] || {},
                handlerQueue = [];

            // Use the fix-ed jQuery.Event rather than the (read-only) native event
            args[0] = event;
            event.delegateTarget = this;

            // Call the preDispatch hook for the mapped type, and let it bail if desired
            if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
                return;
            }

            // Determine handlers that should run if there are delegated events
            // Avoid non-left-click bubbling in Firefox (#3861)
            if ( delegateCount && !(event.button && event.type === "click") ) {

                for ( cur = event.target; cur != this; cur = cur.parentNode || this ) {

                    // Don't process clicks (ONLY) on disabled elements (#6911, #8165, #11382, #11764)
                    if ( cur.disabled !== true || event.type !== "click" ) {
                        selMatch = {};
                        matches = [];
                        for ( i = 0; i < delegateCount; i++ ) {
                            handleObj = handlers[ i ];
                            sel = handleObj.selector;

                            if ( selMatch[ sel ] === undefined ) {
                                selMatch[ sel ] = handleObj.needsContext ?
                                    jQuery( sel, this ).index( cur ) >= 0 :
                                    jQuery.find( sel, this, null, [ cur ] ).length;
                            }
                            if ( selMatch[ sel ] ) {
                                matches.push( handleObj );
                            }
                        }
                        if ( matches.length ) {
                            handlerQueue.push({ elem: cur, matches: matches });
                        }
                    }
                }
            }

            // Add the remaining (directly-bound) handlers
            if ( handlers.length > delegateCount ) {
                handlerQueue.push({ elem: this, matches: handlers.slice( delegateCount ) });
            }

            // Run delegates first; they may want to stop propagation beneath us
            for ( i = 0; i < handlerQueue.length && !event.isPropagationStopped(); i++ ) {
                matched = handlerQueue[ i ];
                event.currentTarget = matched.elem;

                for ( j = 0; j < matched.matches.length && !event.isImmediatePropagationStopped(); j++ ) {
                    handleObj = matched.matches[ j ];

                    // Triggered event must either 1) be non-exclusive and have no namespace, or
                    // 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
                    if ( run_all || (!event.namespace && !handleObj.namespace) || event.namespace_re && event.namespace_re.test( handleObj.namespace ) ) {

                        event.data = handleObj.data;
                        event.handleObj = handleObj;

                        ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
                            .apply( matched.elem, args );

                        if ( ret !== undefined ) {
                            event.result = ret;
                            if ( ret === false ) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                        }
                    }
                }
            }

            // Call the postDispatch hook for the mapped type
            if ( special.postDispatch ) {
                special.postDispatch.call( this, event );
            }

            return event.result;
        },

        // Includes some event props shared by KeyEvent and MouseEvent
        // *** attrChange attrName relatedNode srcElement  are not normalized, non-W3C, deprecated, will be removed in 1.8 ***
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

        fixHooks: {},

        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function( event, original ) {

                // Add which for key events
                if ( event.which == null ) {
                    event.which = original.charCode != null ? original.charCode : original.keyCode;
                }

                return event;
            }
        },

        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function( event, original ) {
                var eventDoc, doc, body,
                    button = original.button,
                    fromElement = original.fromElement;

                // Calculate pageX/Y if missing and clientX/Y available
                if ( event.pageX == null && original.clientX != null ) {
                    eventDoc = event.target.ownerDocument || document;
                    doc = eventDoc.documentElement;
                    body = eventDoc.body;

                    event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
                    event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
                }

                // Add relatedTarget, if necessary
                if ( !event.relatedTarget && fromElement ) {
                    event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
                }

                // Add which for click: 1 === left; 2 === middle; 3 === right
                // Note: button is not normalized, so don't use it
                if ( !event.which && button !== undefined ) {
                    event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
                }

                return event;
            }
        },

        fix: function( event ) {
            if ( event[ jQuery.expando ] ) {
                return event;
            }

            // Create a writable copy of the event object and normalize some properties
            var i, prop,
                originalEvent = event,
                fixHook = jQuery.event.fixHooks[ event.type ] || {},
                copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

            event = jQuery.Event( originalEvent );

            for ( i = copy.length; i; ) {
                prop = copy[ --i ];
                event[ prop ] = originalEvent[ prop ];
            }

            // Fix target property, if necessary (#1925, IE 6/7/8 & Safari2)
            if ( !event.target ) {
                event.target = originalEvent.srcElement || document;
            }

            // Target should not be a text node (#504, Safari)
            if ( event.target.nodeType === 3 ) {
                event.target = event.target.parentNode;
            }

            // For mouse/key events, metaKey==false if it's undefined (#3368, #11328; IE6/7/8)
            event.metaKey = !!event.metaKey;

            return fixHook.filter? fixHook.filter( event, originalEvent ) : event;
        },

        special: {
            load: {
                // Prevent triggered image.load events from bubbling to window.load
                noBubble: true
            },

            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },

            beforeunload: {
                setup: function( data, namespaces, eventHandle ) {
                    // We only want to do this special case on windows
                    if ( jQuery.isWindow( this ) ) {
                        this.onbeforeunload = eventHandle;
                    }
                },

                teardown: function( namespaces, eventHandle ) {
                    if ( this.onbeforeunload === eventHandle ) {
                        this.onbeforeunload = null;
                    }
                }
            }
        },

        simulate: function( type, elem, event, bubble ) {
            // Piggyback on a donor event to simulate a different one.
            // Fake originalEvent to avoid donor's stopPropagation, but if the
            // simulated event prevents default then we do the same on the donor.
            var e = jQuery.extend(
                new jQuery.Event(),
                event,
                { type: type,
                    isSimulated: true,
                    originalEvent: {}
                }
            );
            if ( bubble ) {
                jQuery.event.trigger( e, null, elem );
            } else {
                jQuery.event.dispatch.call( elem, e );
            }
            if ( e.isDefaultPrevented() ) {
                event.preventDefault();
            }
        }
    };

// Some plugins are using, but it's undocumented/deprecated and will be removed.
// The 1.7 special event interface should provide all the hooks needed now.
    jQuery.event.handle = jQuery.event.dispatch;

    jQuery.removeEvent = document.removeEventListener ?
        function( elem, type, handle ) {
            if ( elem.removeEventListener ) {
                elem.removeEventListener( type, handle, false );
            }
        } :
        function( elem, type, handle ) {
            var name = "on" + type;

            if ( elem.detachEvent ) {

                // #8545, #7054, preventing memory leaks for custom events in IE6-8 –
                // detachEvent needed property on element, by name of that event, to properly expose it to GC
                if ( typeof elem[ name ] === "undefined" ) {
                    elem[ name ] = null;
                }

                elem.detachEvent( name, handle );
            }
        };

    jQuery.Event = function( src, props ) {
        // Allow instantiation without the 'new' keyword
        if ( !(this instanceof jQuery.Event) ) {
            return new jQuery.Event( src, props );
        }

        // Event object
        if ( src && src.type ) {
            this.originalEvent = src;
            this.type = src.type;

            // Events bubbling up the document may have been marked as prevented
            // by a handler lower down the tree; reflect the correct value.
            this.isDefaultPrevented = ( src.defaultPrevented || src.returnValue === false ||
                src.getPreventDefault && src.getPreventDefault() ) ? returnTrue : returnFalse;

            // Event type
        } else {
            this.type = src;
        }

        // Put explicitly provided properties onto the event object
        if ( props ) {
            jQuery.extend( this, props );
        }

        // Create a timestamp if incoming event doesn't have one
        this.timeStamp = src && src.timeStamp || jQuery.now();

        // Mark it as fixed
        this[ jQuery.expando ] = true;
    };

    function returnFalse() {
        return false;
    }
    function returnTrue() {
        return true;
    }

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
    jQuery.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = returnTrue;

            var e = this.originalEvent;
            if ( !e ) {
                return;
            }

            // if preventDefault exists run it on the original event
            if ( e.preventDefault ) {
                e.preventDefault();

                // otherwise set the returnValue property of the original event to false (IE)
            } else {
                e.returnValue = false;
            }
        },
        stopPropagation: function() {
            this.isPropagationStopped = returnTrue;

            var e = this.originalEvent;
            if ( !e ) {
                return;
            }
            // if stopPropagation exists run it on the original event
            if ( e.stopPropagation ) {
                e.stopPropagation();
            }
            // otherwise set the cancelBubble property of the original event to true (IE)
            e.cancelBubble = true;
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = returnTrue;
            this.stopPropagation();
        },
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse
    };

// Create mouseenter/leave events using mouseover/out and event-time checks
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function( orig, fix ) {
        jQuery.event.special[ orig ] = {
            delegateType: fix,
            bindType: fix,

            handle: function( event ) {
                var ret,
                    target = this,
                    related = event.relatedTarget,
                    handleObj = event.handleObj,
                    selector = handleObj.selector;

                // For mousenter/leave call the handler if related is outside the target.
                // NB: No relatedTarget if the mouse left/entered the browser window
                if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply( this, arguments );
                    event.type = fix;
                }
                return ret;
            }
        };
    });

// IE submit delegation
    if ( !jQuery.support.submitBubbles ) {

        jQuery.event.special.submit = {
            setup: function() {
                // Only need this for delegated form submit events
                if ( jQuery.nodeName( this, "form" ) ) {
                    return false;
                }

                // Lazy-add a submit handler when a descendant form may potentially be submitted
                jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
                    // Node name check avoids a VML-related crash in IE (#9807)
                    var elem = e.target,
                        form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
                    if ( form && !jQuery._data( form, "_submit_attached" ) ) {
                        jQuery.event.add( form, "submit._submit", function( event ) {
                            event._submit_bubble = true;
                        });
                        jQuery._data( form, "_submit_attached", true );
                    }
                });
                // return undefined since we don't need an event listener
            },

            postDispatch: function( event ) {
                // If form was submitted by the user, bubble the event up the tree
                if ( event._submit_bubble ) {
                    delete event._submit_bubble;
                    if ( this.parentNode && !event.isTrigger ) {
                        jQuery.event.simulate( "submit", this.parentNode, event, true );
                    }
                }
            },

            teardown: function() {
                // Only need this for delegated form submit events
                if ( jQuery.nodeName( this, "form" ) ) {
                    return false;
                }

                // Remove delegated handlers; cleanData eventually reaps submit handlers attached above
                jQuery.event.remove( this, "._submit" );
            }
        };
    }

// IE change delegation and checkbox/radio fix
    if ( !jQuery.support.changeBubbles ) {

        jQuery.event.special.change = {

            setup: function() {

                if ( rformElems.test( this.nodeName ) ) {
                    // IE doesn't fire change on a check/radio until blur; trigger it on click
                    // after a propertychange. Eat the blur-change in special.change.handle.
                    // This still fires onchange a second time for check/radio after blur.
                    if ( this.type === "checkbox" || this.type === "radio" ) {
                        jQuery.event.add( this, "propertychange._change", function( event ) {
                            if ( event.originalEvent.propertyName === "checked" ) {
                                this._just_changed = true;
                            }
                        });
                        jQuery.event.add( this, "click._change", function( event ) {
                            if ( this._just_changed && !event.isTrigger ) {
                                this._just_changed = false;
                            }
                            // Allow triggered, simulated change events (#11500)
                            jQuery.event.simulate( "change", this, event, true );
                        });
                    }
                    return false;
                }
                // Delegated event; lazy-add a change handler on descendant inputs
                jQuery.event.add( this, "beforeactivate._change", function( e ) {
                    var elem = e.target;

                    if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "_change_attached" ) ) {
                        jQuery.event.add( elem, "change._change", function( event ) {
                            if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
                                jQuery.event.simulate( "change", this.parentNode, event, true );
                            }
                        });
                        jQuery._data( elem, "_change_attached", true );
                    }
                });
            },

            handle: function( event ) {
                var elem = event.target;

                // Swallow native change events from checkbox/radio, we already triggered them above
                if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
                    return event.handleObj.handler.apply( this, arguments );
                }
            },

            teardown: function() {
                jQuery.event.remove( this, "._change" );

                return !rformElems.test( this.nodeName );
            }
        };
    }

// Create "bubbling" focus and blur events
    if ( !jQuery.support.focusinBubbles ) {
        jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

            // Attach a single capturing handler while someone wants focusin/focusout
            var attaches = 0,
                handler = function( event ) {
                    jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
                };

            jQuery.event.special[ fix ] = {
                setup: function() {
                    if ( attaches++ === 0 ) {
                        document.addEventListener( orig, handler, true );
                    }
                },
                teardown: function() {
                    if ( --attaches === 0 ) {
                        document.removeEventListener( orig, handler, true );
                    }
                }
            };
        });
    }

    jQuery.fn.extend({

        on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
            var origFn, type;

            // Types can be a map of types/handlers
            if ( typeof types === "object" ) {
                // ( types-Object, selector, data )
                if ( typeof selector !== "string" ) { // && selector != null
                    // ( types-Object, data )
                    data = data || selector;
                    selector = undefined;
                }
                for ( type in types ) {
                    this.on( type, selector, data, types[ type ], one );
                }
                return this;
            }

            if ( data == null && fn == null ) {
                // ( types, fn )
                fn = selector;
                data = selector = undefined;
            } else if ( fn == null ) {
                if ( typeof selector === "string" ) {
                    // ( types, selector, fn )
                    fn = data;
                    data = undefined;
                } else {
                    // ( types, data, fn )
                    fn = data;
                    data = selector;
                    selector = undefined;
                }
            }
            if ( fn === false ) {
                fn = returnFalse;
            } else if ( !fn ) {
                return this;
            }

            if ( one === 1 ) {
                origFn = fn;
                fn = function( event ) {
                    // Can use an empty set, since event contains the info
                    jQuery().off( event );
                    return origFn.apply( this, arguments );
                };
                // Use same guid so caller can remove using origFn
                fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
            }
            return this.each( function() {
                jQuery.event.add( this, types, fn, data, selector );
            });
        },
        one: function( types, selector, data, fn ) {
            return this.on( types, selector, data, fn, 1 );
        },
        off: function( types, selector, fn ) {
            var handleObj, type;
            if ( types && types.preventDefault && types.handleObj ) {
                // ( event )  dispatched jQuery.Event
                handleObj = types.handleObj;
                jQuery( types.delegateTarget ).off(
                    handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
                    handleObj.selector,
                    handleObj.handler
                );
                return this;
            }
            if ( typeof types === "object" ) {
                // ( types-object [, selector] )
                for ( type in types ) {
                    this.off( type, selector, types[ type ] );
                }
                return this;
            }
            if ( selector === false || typeof selector === "function" ) {
                // ( types [, fn] )
                fn = selector;
                selector = undefined;
            }
            if ( fn === false ) {
                fn = returnFalse;
            }
            return this.each(function() {
                jQuery.event.remove( this, types, fn, selector );
            });
        },

        bind: function( types, data, fn ) {
            return this.on( types, null, data, fn );
        },
        unbind: function( types, fn ) {
            return this.off( types, null, fn );
        },

        live: function( types, data, fn ) {
            jQuery( this.context ).on( types, this.selector, data, fn );
            return this;
        },
        die: function( types, fn ) {
            jQuery( this.context ).off( types, this.selector || "**", fn );
            return this;
        },

        delegate: function( selector, types, data, fn ) {
            return this.on( types, selector, data, fn );
        },
        undelegate: function( selector, types, fn ) {
            // ( namespace ) or ( selector, types [, fn] )
            return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
        },

        trigger: function( type, data ) {
            return this.each(function() {
                jQuery.event.trigger( type, data, this );
            });
        },
        triggerHandler: function( type, data ) {
            if ( this[0] ) {
                return jQuery.event.trigger( type, data, this[0], true );
            }
        },

        toggle: function( fn ) {
            // Save reference to arguments for access in closure
            var args = arguments,
                guid = fn.guid || jQuery.guid++,
                i = 0,
                toggler = function( event ) {
                    // Figure out which function to execute
                    var lastToggle = ( jQuery._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
                    jQuery._data( this, "lastToggle" + fn.guid, lastToggle + 1 );

                    // Make sure that clicks stop
                    event.preventDefault();

                    // and execute the function
                    return args[ lastToggle ].apply( this, arguments ) || false;
                };

            // link all the functions, so any of them can unbind this click handler
            toggler.guid = guid;
            while ( i < args.length ) {
                args[ i++ ].guid = guid;
            }

            return this.click( toggler );
        },

        hover: function( fnOver, fnOut ) {
            return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
        }
    });

    jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
        "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
        "change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

        // Handle event binding
        jQuery.fn[ name ] = function( data, fn ) {
            if ( fn == null ) {
                fn = data;
                data = null;
            }

            return arguments.length > 0 ?
                this.on( name, null, data, fn ) :
                this.trigger( name );
        };

        if ( rkeyEvent.test( name ) ) {
            jQuery.event.fixHooks[ name ] = jQuery.event.keyHooks;
        }

        if ( rmouseEvent.test( name ) ) {
            jQuery.event.fixHooks[ name ] = jQuery.event.mouseHooks;
        }
    });
    /*!
     * Sizzle CSS Selector Engine
     * Copyright 2012 jQuery Foundation and other contributors
     * Released under the MIT license
     * http://sizzlejs.com/
     */
    (function( window, undefined ) {

        var cachedruns,
            assertGetIdNotName,
            Expr,
            getText,
            isXML,
            contains,
            compile,
            sortOrder,
            hasDuplicate,
            outermostContext,

            baseHasDuplicate = true,
            strundefined = "undefined",

            expando = ( "sizcache" + Math.random() ).replace( ".", "" ),

            Token = String,
            document = window.document,
            docElem = document.documentElement,
            dirruns = 0,
            done = 0,
            pop = [].pop,
            push = [].push,
            slice = [].slice,
        // Use a stripped-down indexOf if a native one is unavailable
            indexOf = [].indexOf || function( elem ) {
                var i = 0,
                    len = this.length;
                for ( ; i < len; i++ ) {
                    if ( this[i] === elem ) {
                        return i;
                    }
                }
                return -1;
            },

        // Augment a function for special use by Sizzle
            markFunction = function( fn, value ) {
                fn[ expando ] = value == null || value;
                return fn;
            },

            createCache = function() {
                var cache = {},
                    keys = [];

                return markFunction(function( key, value ) {
                    // Only keep the most recent entries
                    if ( keys.push( key ) > Expr.cacheLength ) {
                        delete cache[ keys.shift() ];
                    }

                    return (cache[ key ] = value);
                }, cache );
            },

            classCache = createCache(),
            tokenCache = createCache(),
            compilerCache = createCache(),

        // Regex

        // Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
            whitespace = "[\\x20\\t\\r\\n\\f]",
        // http://www.w3.org/TR/css3-syntax/#characters
            characterEncoding = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",

        // Loosely modeled on CSS identifier characters
        // An unquoted value should be a CSS identifier (http://www.w3.org/TR/css3-selectors/#attribute-selectors)
        // Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
            identifier = characterEncoding.replace( "w", "w#" ),

        // Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
            operators = "([*^$|!~]?=)",
            attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
                "*(?:" + operators + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",

        // Prefer arguments not in parens/brackets,
        //   then attribute selectors and non-pseudos (denoted by :),
        //   then anything else
        // These preferences are here to reduce the number of selectors
        //   needing tokenize in the PSEUDO preFilter
            pseudos = ":(" + characterEncoding + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + attributes + ")|[^:]|\\\\.)*|.*))\\)|)",

        // For matchExpr.POS and matchExpr.needsContext
            pos = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
                "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)",

        // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
            rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

            rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
            rcombinators = new RegExp( "^" + whitespace + "*([\\x20\\t\\r\\n\\f>+~])" + whitespace + "*" ),
            rpseudo = new RegExp( pseudos ),

        // Easily-parseable/retrievable ID or TAG or CLASS selectors
            rquickExpr = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,

            rnot = /^:not/,
            rsibling = /[\x20\t\r\n\f]*[+~]/,
            rendsWithNot = /:not\($/,

            rheader = /h\d/i,
            rinputs = /input|select|textarea|button/i,

            rbackslash = /\\(?!\\)/g,

            matchExpr = {
                "ID": new RegExp( "^#(" + characterEncoding + ")" ),
                "CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
                "NAME": new RegExp( "^\\[name=['\"]?(" + characterEncoding + ")['\"]?\\]" ),
                "TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
                "ATTR": new RegExp( "^" + attributes ),
                "PSEUDO": new RegExp( "^" + pseudos ),
                "POS": new RegExp( pos, "i" ),
                "CHILD": new RegExp( "^:(only|nth|first|last)-child(?:\\(" + whitespace +
                    "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
                    "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
                // For use in libraries implementing .is()
                "needsContext": new RegExp( "^" + whitespace + "*[>+~]|" + pos, "i" )
            },

        // Support

        // Used for testing something on an element
            assert = function( fn ) {
                var div = document.createElement("div");

                try {
                    return fn( div );
                } catch (e) {
                    return false;
                } finally {
                    // release memory in IE
                    div = null;
                }
            },

        // Check if getElementsByTagName("*") returns only elements
            assertTagNameNoComments = assert(function( div ) {
                div.appendChild( document.createComment("") );
                return !div.getElementsByTagName("*").length;
            }),

        // Check if getAttribute returns normalized href attributes
            assertHrefNotNormalized = assert(function( div ) {
                div.innerHTML = "<a href='#'></a>";
                return div.firstChild && typeof div.firstChild.getAttribute !== strundefined &&
                    div.firstChild.getAttribute("href") === "#";
            }),

        // Check if attributes should be retrieved by attribute nodes
            assertAttributes = assert(function( div ) {
                div.innerHTML = "<select></select>";
                var type = typeof div.lastChild.getAttribute("multiple");
                // IE8 returns a string for some attributes even when not present
                return type !== "boolean" && type !== "string";
            }),

        // Check if getElementsByClassName can be trusted
            assertUsableClassName = assert(function( div ) {
                // Opera can't find a second classname (in 9.6)
                div.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
                if ( !div.getElementsByClassName || !div.getElementsByClassName("e").length ) {
                    return false;
                }

                // Safari 3.2 caches class attributes and doesn't catch changes
                div.lastChild.className = "e";
                return div.getElementsByClassName("e").length === 2;
            }),

        // Check if getElementById returns elements by name
        // Check if getElementsByName privileges form controls or returns elements by ID
            assertUsableName = assert(function( div ) {
                // Inject content
                div.id = expando + 0;
                div.innerHTML = "<a name='" + expando + "'></a><div name='" + expando + "'></div>";
                docElem.insertBefore( div, docElem.firstChild );

                // Test
                var pass = document.getElementsByName &&
                    // buggy browsers will return fewer than the correct 2
                    document.getElementsByName( expando ).length === 2 +
                        // buggy browsers will return more than the correct 0
                        document.getElementsByName( expando + 0 ).length;
                assertGetIdNotName = !document.getElementById( expando );

                // Cleanup
                docElem.removeChild( div );

                return pass;
            });

// If slice is not available, provide a backup
        try {
            slice.call( docElem.childNodes, 0 )[0].nodeType;
        } catch ( e ) {
            slice = function( i ) {
                var elem,
                    results = [];
                for ( ; (elem = this[i]); i++ ) {
                    results.push( elem );
                }
                return results;
            };
        }

        function Sizzle( selector, context, results, seed ) {
            results = results || [];
            context = context || document;
            var match, elem, xml, m,
                nodeType = context.nodeType;

            if ( !selector || typeof selector !== "string" ) {
                return results;
            }

            if ( nodeType !== 1 && nodeType !== 9 ) {
                return [];
            }

            xml = isXML( context );

            if ( !xml && !seed ) {
                if ( (match = rquickExpr.exec( selector )) ) {
                    // Speed-up: Sizzle("#ID")
                    if ( (m = match[1]) ) {
                        if ( nodeType === 9 ) {
                            elem = context.getElementById( m );
                            // Check parentNode to catch when Blackberry 4.6 returns
                            // nodes that are no longer in the document #6963
                            if ( elem && elem.parentNode ) {
                                // Handle the case where IE, Opera, and Webkit return items
                                // by name instead of ID
                                if ( elem.id === m ) {
                                    results.push( elem );
                                    return results;
                                }
                            } else {
                                return results;
                            }
                        } else {
                            // Context is not a document
                            if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
                                contains( context, elem ) && elem.id === m ) {
                                results.push( elem );
                                return results;
                            }
                        }

                        // Speed-up: Sizzle("TAG")
                    } else if ( match[2] ) {
                        push.apply( results, slice.call(context.getElementsByTagName( selector ), 0) );
                        return results;

                        // Speed-up: Sizzle(".CLASS")
                    } else if ( (m = match[3]) && assertUsableClassName && context.getElementsByClassName ) {
                        push.apply( results, slice.call(context.getElementsByClassName( m ), 0) );
                        return results;
                    }
                }
            }

            // All others
            return select( selector.replace( rtrim, "$1" ), context, results, seed, xml );
        }

        Sizzle.matches = function( expr, elements ) {
            return Sizzle( expr, null, null, elements );
        };

        Sizzle.matchesSelector = function( elem, expr ) {
            return Sizzle( expr, null, null, [ elem ] ).length > 0;
        };

// Returns a function to use in pseudos for input types
        function createInputPseudo( type ) {
            return function( elem ) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === type;
            };
        }

// Returns a function to use in pseudos for buttons
        function createButtonPseudo( type ) {
            return function( elem ) {
                var name = elem.nodeName.toLowerCase();
                return (name === "input" || name === "button") && elem.type === type;
            };
        }

// Returns a function to use in pseudos for positionals
        function createPositionalPseudo( fn ) {
            return markFunction(function( argument ) {
                argument = +argument;
                return markFunction(function( seed, matches ) {
                    var j,
                        matchIndexes = fn( [], seed.length, argument ),
                        i = matchIndexes.length;

                    // Match elements found at the specified indexes
                    while ( i-- ) {
                        if ( seed[ (j = matchIndexes[i]) ] ) {
                            seed[j] = !(matches[j] = seed[j]);
                        }
                    }
                });
            });
        }

        /**
         * Utility function for retrieving the text value of an array of DOM nodes
         * @param {Array|Element} elem
         */
        getText = Sizzle.getText = function( elem ) {
            var node,
                ret = "",
                i = 0,
                nodeType = elem.nodeType;

            if ( nodeType ) {
                if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
                    // Use textContent for elements
                    // innerText usage removed for consistency of new lines (see #11153)
                    if ( typeof elem.textContent === "string" ) {
                        return elem.textContent;
                    } else {
                        // Traverse its children
                        for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
                            ret += getText( elem );
                        }
                    }
                } else if ( nodeType === 3 || nodeType === 4 ) {
                    return elem.nodeValue;
                }
                // Do not include comment or processing instruction nodes
            } else {

                // If no nodeType, this is expected to be an array
                for ( ; (node = elem[i]); i++ ) {
                    // Do not traverse comment nodes
                    ret += getText( node );
                }
            }
            return ret;
        };

        isXML = Sizzle.isXML = function( elem ) {
            // documentElement is verified for cases where it doesn't yet exist
            // (such as loading iframes in IE - #4833)
            var documentElement = elem && (elem.ownerDocument || elem).documentElement;
            return documentElement ? documentElement.nodeName !== "HTML" : false;
        };

// Element contains another
        contains = Sizzle.contains = docElem.contains ?
            function( a, b ) {
                var adown = a.nodeType === 9 ? a.documentElement : a,
                    bup = b && b.parentNode;
                return a === bup || !!( bup && bup.nodeType === 1 && adown.contains && adown.contains(bup) );
            } :
            docElem.compareDocumentPosition ?
                function( a, b ) {
                    return b && !!( a.compareDocumentPosition( b ) & 16 );
                } :
                function( a, b ) {
                    while ( (b = b.parentNode) ) {
                        if ( b === a ) {
                            return true;
                        }
                    }
                    return false;
                };

        Sizzle.attr = function( elem, name ) {
            var val,
                xml = isXML( elem );

            if ( !xml ) {
                name = name.toLowerCase();
            }
            if ( (val = Expr.attrHandle[ name ]) ) {
                return val( elem );
            }
            if ( xml || assertAttributes ) {
                return elem.getAttribute( name );
            }
            val = elem.getAttributeNode( name );
            return val ?
                typeof elem[ name ] === "boolean" ?
                    elem[ name ] ? name : null :
                    val.specified ? val.value : null :
                null;
        };

        Expr = Sizzle.selectors = {

            // Can be adjusted by the user
            cacheLength: 50,

            createPseudo: markFunction,

            match: matchExpr,

            // IE6/7 return a modified href
            attrHandle: assertHrefNotNormalized ?
            {} :
            {
                "href": function( elem ) {
                    return elem.getAttribute( "href", 2 );
                },
                "type": function( elem ) {
                    return elem.getAttribute("type");
                }
            },

            find: {
                "ID": assertGetIdNotName ?
                    function( id, context, xml ) {
                        if ( typeof context.getElementById !== strundefined && !xml ) {
                            var m = context.getElementById( id );
                            // Check parentNode to catch when Blackberry 4.6 returns
                            // nodes that are no longer in the document #6963
                            return m && m.parentNode ? [m] : [];
                        }
                    } :
                    function( id, context, xml ) {
                        if ( typeof context.getElementById !== strundefined && !xml ) {
                            var m = context.getElementById( id );

                            return m ?
                                m.id === id || typeof m.getAttributeNode !== strundefined && m.getAttributeNode("id").value === id ?
                                    [m] :
                                    undefined :
                                [];
                        }
                    },

                "TAG": assertTagNameNoComments ?
                    function( tag, context ) {
                        if ( typeof context.getElementsByTagName !== strundefined ) {
                            return context.getElementsByTagName( tag );
                        }
                    } :
                    function( tag, context ) {
                        var results = context.getElementsByTagName( tag );

                        // Filter out possible comments
                        if ( tag === "*" ) {
                            var elem,
                                tmp = [],
                                i = 0;

                            for ( ; (elem = results[i]); i++ ) {
                                if ( elem.nodeType === 1 ) {
                                    tmp.push( elem );
                                }
                            }

                            return tmp;
                        }
                        return results;
                    },

                "NAME": assertUsableName && function( tag, context ) {
                    if ( typeof context.getElementsByName !== strundefined ) {
                        return context.getElementsByName( name );
                    }
                },

                "CLASS": assertUsableClassName && function( className, context, xml ) {
                    if ( typeof context.getElementsByClassName !== strundefined && !xml ) {
                        return context.getElementsByClassName( className );
                    }
                }
            },

            relative: {
                ">": { dir: "parentNode", first: true },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: true },
                "~": { dir: "previousSibling" }
            },

            preFilter: {
                "ATTR": function( match ) {
                    match[1] = match[1].replace( rbackslash, "" );

                    // Move the given value to match[3] whether quoted or unquoted
                    match[3] = ( match[4] || match[5] || "" ).replace( rbackslash, "" );

                    if ( match[2] === "~=" ) {
                        match[3] = " " + match[3] + " ";
                    }

                    return match.slice( 0, 4 );
                },

                "CHILD": function( match ) {
                    /* matches from matchExpr["CHILD"]
                     1 type (only|nth|...)
                     2 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
                     3 xn-component of xn+y argument ([+-]?\d*n|)
                     4 sign of xn-component
                     5 x of xn-component
                     6 sign of y-component
                     7 y of y-component
                     */
                    match[1] = match[1].toLowerCase();

                    if ( match[1] === "nth" ) {
                        // nth-child requires argument
                        if ( !match[2] ) {
                            Sizzle.error( match[0] );
                        }

                        // numeric x and y parameters for Expr.filter.CHILD
                        // remember that false/true cast respectively to 0/1
                        match[3] = +( match[3] ? match[4] + (match[5] || 1) : 2 * ( match[2] === "even" || match[2] === "odd" ) );
                        match[4] = +( ( match[6] + match[7] ) || match[2] === "odd" );

                        // other types prohibit arguments
                    } else if ( match[2] ) {
                        Sizzle.error( match[0] );
                    }

                    return match;
                },

                "PSEUDO": function( match ) {
                    var unquoted, excess;
                    if ( matchExpr["CHILD"].test( match[0] ) ) {
                        return null;
                    }

                    if ( match[3] ) {
                        match[2] = match[3];
                    } else if ( (unquoted = match[4]) ) {
                        // Only check arguments that contain a pseudo
                        if ( rpseudo.test(unquoted) &&
                            // Get excess from tokenize (recursively)
                            (excess = tokenize( unquoted, true )) &&
                            // advance to the next closing parenthesis
                            (excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

                            // excess is a negative index
                            unquoted = unquoted.slice( 0, excess );
                            match[0] = match[0].slice( 0, excess );
                        }
                        match[2] = unquoted;
                    }

                    // Return only captures needed by the pseudo filter method (type and argument)
                    return match.slice( 0, 3 );
                }
            },

            filter: {
                "ID": assertGetIdNotName ?
                    function( id ) {
                        id = id.replace( rbackslash, "" );
                        return function( elem ) {
                            return elem.getAttribute("id") === id;
                        };
                    } :
                    function( id ) {
                        id = id.replace( rbackslash, "" );
                        return function( elem ) {
                            var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
                            return node && node.value === id;
                        };
                    },

                "TAG": function( nodeName ) {
                    if ( nodeName === "*" ) {
                        return function() { return true; };
                    }
                    nodeName = nodeName.replace( rbackslash, "" ).toLowerCase();

                    return function( elem ) {
                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                    };
                },

                "CLASS": function( className ) {
                    var pattern = classCache[ expando ][ className ];
                    if ( !pattern ) {
                        pattern = classCache( className, new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)") );
                    }
                    return function( elem ) {
                        return pattern.test( elem.className || (typeof elem.getAttribute !== strundefined && elem.getAttribute("class")) || "" );
                    };
                },

                "ATTR": function( name, operator, check ) {
                    return function( elem, context ) {
                        var result = Sizzle.attr( elem, name );

                        if ( result == null ) {
                            return operator === "!=";
                        }
                        if ( !operator ) {
                            return true;
                        }

                        result += "";

                        return operator === "=" ? result === check :
                            operator === "!=" ? result !== check :
                                operator === "^=" ? check && result.indexOf( check ) === 0 :
                                    operator === "*=" ? check && result.indexOf( check ) > -1 :
                                        operator === "$=" ? check && result.substr( result.length - check.length ) === check :
                                            operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
                                                operator === "|=" ? result === check || result.substr( 0, check.length + 1 ) === check + "-" :
                                                    false;
                    };
                },

                "CHILD": function( type, argument, first, last ) {

                    if ( type === "nth" ) {
                        return function( elem ) {
                            var node, diff,
                                parent = elem.parentNode;

                            if ( first === 1 && last === 0 ) {
                                return true;
                            }

                            if ( parent ) {
                                diff = 0;
                                for ( node = parent.firstChild; node; node = node.nextSibling ) {
                                    if ( node.nodeType === 1 ) {
                                        diff++;
                                        if ( elem === node ) {
                                            break;
                                        }
                                    }
                                }
                            }

                            // Incorporate the offset (or cast to NaN), then check against cycle size
                            diff -= last;
                            return diff === first || ( diff % first === 0 && diff / first >= 0 );
                        };
                    }

                    return function( elem ) {
                        var node = elem;

                        switch ( type ) {
                            case "only":
                            case "first":
                                while ( (node = node.previousSibling) ) {
                                    if ( node.nodeType === 1 ) {
                                        return false;
                                    }
                                }

                                if ( type === "first" ) {
                                    return true;
                                }

                                node = elem;

                            /* falls through */
                            case "last":
                                while ( (node = node.nextSibling) ) {
                                    if ( node.nodeType === 1 ) {
                                        return false;
                                    }
                                }

                                return true;
                        }
                    };
                },

                "PSEUDO": function( pseudo, argument ) {
                    // pseudo-class names are case-insensitive
                    // http://www.w3.org/TR/selectors/#pseudo-classes
                    // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                    // Remember that setFilters inherits from pseudos
                    var args,
                        fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
                            Sizzle.error( "unsupported pseudo: " + pseudo );

                    // The user may use createPseudo to indicate that
                    // arguments are needed to create the filter function
                    // just as Sizzle does
                    if ( fn[ expando ] ) {
                        return fn( argument );
                    }

                    // But maintain support for old signatures
                    if ( fn.length > 1 ) {
                        args = [ pseudo, pseudo, "", argument ];
                        return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
                            markFunction(function( seed, matches ) {
                                var idx,
                                    matched = fn( seed, argument ),
                                    i = matched.length;
                                while ( i-- ) {
                                    idx = indexOf.call( seed, matched[i] );
                                    seed[ idx ] = !( matches[ idx ] = matched[i] );
                                }
                            }) :
                            function( elem ) {
                                return fn( elem, 0, args );
                            };
                    }

                    return fn;
                }
            },

            pseudos: {
                "not": markFunction(function( selector ) {
                    // Trim the selector passed to compile
                    // to avoid treating leading and trailing
                    // spaces as combinators
                    var input = [],
                        results = [],
                        matcher = compile( selector.replace( rtrim, "$1" ) );

                    return matcher[ expando ] ?
                        markFunction(function( seed, matches, context, xml ) {
                            var elem,
                                unmatched = matcher( seed, null, xml, [] ),
                                i = seed.length;

                            // Match elements unmatched by `matcher`
                            while ( i-- ) {
                                if ( (elem = unmatched[i]) ) {
                                    seed[i] = !(matches[i] = elem);
                                }
                            }
                        }) :
                        function( elem, context, xml ) {
                            input[0] = elem;
                            matcher( input, null, xml, results );
                            return !results.pop();
                        };
                }),

                "has": markFunction(function( selector ) {
                    return function( elem ) {
                        return Sizzle( selector, elem ).length > 0;
                    };
                }),

                "contains": markFunction(function( text ) {
                    return function( elem ) {
                        return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
                    };
                }),

                "enabled": function( elem ) {
                    return elem.disabled === false;
                },

                "disabled": function( elem ) {
                    return elem.disabled === true;
                },

                "checked": function( elem ) {
                    // In CSS3, :checked should return both checked and selected elements
                    // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                    var nodeName = elem.nodeName.toLowerCase();
                    return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
                },

                "selected": function( elem ) {
                    // Accessing this property makes selected-by-default
                    // options in Safari work properly
                    if ( elem.parentNode ) {
                        elem.parentNode.selectedIndex;
                    }

                    return elem.selected === true;
                },

                "parent": function( elem ) {
                    return !Expr.pseudos["empty"]( elem );
                },

                "empty": function( elem ) {
                    // http://www.w3.org/TR/selectors/#empty-pseudo
                    // :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
                    //   not comment, processing instructions, or others
                    // Thanks to Diego Perini for the nodeName shortcut
                    //   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
                    var nodeType;
                    elem = elem.firstChild;
                    while ( elem ) {
                        if ( elem.nodeName > "@" || (nodeType = elem.nodeType) === 3 || nodeType === 4 ) {
                            return false;
                        }
                        elem = elem.nextSibling;
                    }
                    return true;
                },

                "header": function( elem ) {
                    return rheader.test( elem.nodeName );
                },

                "text": function( elem ) {
                    var type, attr;
                    // IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
                    // use getAttribute instead to test this case
                    return elem.nodeName.toLowerCase() === "input" &&
                        (type = elem.type) === "text" &&
                        ( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === type );
                },

                // Input types
                "radio": createInputPseudo("radio"),
                "checkbox": createInputPseudo("checkbox"),
                "file": createInputPseudo("file"),
                "password": createInputPseudo("password"),
                "image": createInputPseudo("image"),

                "submit": createButtonPseudo("submit"),
                "reset": createButtonPseudo("reset"),

                "button": function( elem ) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === "button" || name === "button";
                },

                "input": function( elem ) {
                    return rinputs.test( elem.nodeName );
                },

                "focus": function( elem ) {
                    var doc = elem.ownerDocument;
                    return elem === doc.activeElement && (!doc.hasFocus || doc.hasFocus()) && !!(elem.type || elem.href);
                },

                "active": function( elem ) {
                    return elem === elem.ownerDocument.activeElement;
                },

                // Positional types
                "first": createPositionalPseudo(function( matchIndexes, length, argument ) {
                    return [ 0 ];
                }),

                "last": createPositionalPseudo(function( matchIndexes, length, argument ) {
                    return [ length - 1 ];
                }),

                "eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
                    return [ argument < 0 ? argument + length : argument ];
                }),

                "even": createPositionalPseudo(function( matchIndexes, length, argument ) {
                    for ( var i = 0; i < length; i += 2 ) {
                        matchIndexes.push( i );
                    }
                    return matchIndexes;
                }),

                "odd": createPositionalPseudo(function( matchIndexes, length, argument ) {
                    for ( var i = 1; i < length; i += 2 ) {
                        matchIndexes.push( i );
                    }
                    return matchIndexes;
                }),

                "lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
                    for ( var i = argument < 0 ? argument + length : argument; --i >= 0; ) {
                        matchIndexes.push( i );
                    }
                    return matchIndexes;
                }),

                "gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
                    for ( var i = argument < 0 ? argument + length : argument; ++i < length; ) {
                        matchIndexes.push( i );
                    }
                    return matchIndexes;
                })
            }
        };

        function siblingCheck( a, b, ret ) {
            if ( a === b ) {
                return ret;
            }

            var cur = a.nextSibling;

            while ( cur ) {
                if ( cur === b ) {
                    return -1;
                }

                cur = cur.nextSibling;
            }

            return 1;
        }

        sortOrder = docElem.compareDocumentPosition ?
            function( a, b ) {
                if ( a === b ) {
                    hasDuplicate = true;
                    return 0;
                }

                return ( !a.compareDocumentPosition || !b.compareDocumentPosition ?
                    a.compareDocumentPosition :
                    a.compareDocumentPosition(b) & 4
                    ) ? -1 : 1;
            } :
            function( a, b ) {
                // The nodes are identical, we can exit early
                if ( a === b ) {
                    hasDuplicate = true;
                    return 0;

                    // Fallback to using sourceIndex (in IE) if it's available on both nodes
                } else if ( a.sourceIndex && b.sourceIndex ) {
                    return a.sourceIndex - b.sourceIndex;
                }

                var al, bl,
                    ap = [],
                    bp = [],
                    aup = a.parentNode,
                    bup = b.parentNode,
                    cur = aup;

                // If the nodes are siblings (or identical) we can do a quick check
                if ( aup === bup ) {
                    return siblingCheck( a, b );

                    // If no parents were found then the nodes are disconnected
                } else if ( !aup ) {
                    return -1;

                } else if ( !bup ) {
                    return 1;
                }

                // Otherwise they're somewhere else in the tree so we need
                // to build up a full list of the parentNodes for comparison
                while ( cur ) {
                    ap.unshift( cur );
                    cur = cur.parentNode;
                }

                cur = bup;

                while ( cur ) {
                    bp.unshift( cur );
                    cur = cur.parentNode;
                }

                al = ap.length;
                bl = bp.length;

                // Start walking down the tree looking for a discrepancy
                for ( var i = 0; i < al && i < bl; i++ ) {
                    if ( ap[i] !== bp[i] ) {
                        return siblingCheck( ap[i], bp[i] );
                    }
                }

                // We ended someplace up the tree so do a sibling check
                return i === al ?
                    siblingCheck( a, bp[i], -1 ) :
                    siblingCheck( ap[i], b, 1 );
            };

// Always assume the presence of duplicates if sort doesn't
// pass them to our comparison function (as in Google Chrome).
        [0, 0].sort( sortOrder );
        baseHasDuplicate = !hasDuplicate;

// Document sorting and removing duplicates
        Sizzle.uniqueSort = function( results ) {
            var elem,
                i = 1;

            hasDuplicate = baseHasDuplicate;
            results.sort( sortOrder );

            if ( hasDuplicate ) {
                for ( ; (elem = results[i]); i++ ) {
                    if ( elem === results[ i - 1 ] ) {
                        results.splice( i--, 1 );
                    }
                }
            }

            return results;
        };

        Sizzle.error = function( msg ) {
            throw new Error( "Syntax error, unrecognized expression: " + msg );
        };

        function tokenize( selector, parseOnly ) {
            var matched, match, tokens, type, soFar, groups, preFilters,
                cached = tokenCache[ expando ][ selector ];

            if ( cached ) {
                return parseOnly ? 0 : cached.slice( 0 );
            }

            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;

            while ( soFar ) {

                // Comma and first run
                if ( !matched || (match = rcomma.exec( soFar )) ) {
                    if ( match ) {
                        soFar = soFar.slice( match[0].length );
                    }
                    groups.push( tokens = [] );
                }

                matched = false;

                // Combinators
                if ( (match = rcombinators.exec( soFar )) ) {
                    tokens.push( matched = new Token( match.shift() ) );
                    soFar = soFar.slice( matched.length );

                    // Cast descendant combinators to space
                    matched.type = match[0].replace( rtrim, " " );
                }

                // Filters
                for ( type in Expr.filter ) {
                    if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
                        // The last two arguments here are (context, xml) for backCompat
                        (match = preFilters[ type ]( match, document, true ))) ) {

                        tokens.push( matched = new Token( match.shift() ) );
                        soFar = soFar.slice( matched.length );
                        matched.type = type;
                        matched.matches = match;
                    }
                }

                if ( !matched ) {
                    break;
                }
            }

            // Return the length of the invalid excess
            // if we're just parsing
            // Otherwise, throw an error or return tokens
            return parseOnly ?
                soFar.length :
                soFar ?
                    Sizzle.error( selector ) :
                    // Cache the tokens
                    tokenCache( selector, groups ).slice( 0 );
        }

        function addCombinator( matcher, combinator, base ) {
            var dir = combinator.dir,
                checkNonElements = base && combinator.dir === "parentNode",
                doneName = done++;

            return combinator.first ?
                // Check against closest ancestor/preceding element
                function( elem, context, xml ) {
                    while ( (elem = elem[ dir ]) ) {
                        if ( checkNonElements || elem.nodeType === 1  ) {
                            return matcher( elem, context, xml );
                        }
                    }
                } :

                // Check against all ancestor/preceding elements
                function( elem, context, xml ) {
                    // We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
                    if ( !xml ) {
                        var cache,
                            dirkey = dirruns + " " + doneName + " ",
                            cachedkey = dirkey + cachedruns;
                        while ( (elem = elem[ dir ]) ) {
                            if ( checkNonElements || elem.nodeType === 1 ) {
                                if ( (cache = elem[ expando ]) === cachedkey ) {
                                    return elem.sizset;
                                } else if ( typeof cache === "string" && cache.indexOf(dirkey) === 0 ) {
                                    if ( elem.sizset ) {
                                        return elem;
                                    }
                                } else {
                                    elem[ expando ] = cachedkey;
                                    if ( matcher( elem, context, xml ) ) {
                                        elem.sizset = true;
                                        return elem;
                                    }
                                    elem.sizset = false;
                                }
                            }
                        }
                    } else {
                        while ( (elem = elem[ dir ]) ) {
                            if ( checkNonElements || elem.nodeType === 1 ) {
                                if ( matcher( elem, context, xml ) ) {
                                    return elem;
                                }
                            }
                        }
                    }
                };
        }

        function elementMatcher( matchers ) {
            return matchers.length > 1 ?
                function( elem, context, xml ) {
                    var i = matchers.length;
                    while ( i-- ) {
                        if ( !matchers[i]( elem, context, xml ) ) {
                            return false;
                        }
                    }
                    return true;
                } :
                matchers[0];
        }

        function condense( unmatched, map, filter, context, xml ) {
            var elem,
                newUnmatched = [],
                i = 0,
                len = unmatched.length,
                mapped = map != null;

            for ( ; i < len; i++ ) {
                if ( (elem = unmatched[i]) ) {
                    if ( !filter || filter( elem, context, xml ) ) {
                        newUnmatched.push( elem );
                        if ( mapped ) {
                            map.push( i );
                        }
                    }
                }
            }

            return newUnmatched;
        }

        function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
            if ( postFilter && !postFilter[ expando ] ) {
                postFilter = setMatcher( postFilter );
            }
            if ( postFinder && !postFinder[ expando ] ) {
                postFinder = setMatcher( postFinder, postSelector );
            }
            return markFunction(function( seed, results, context, xml ) {
                // Positional selectors apply to seed elements, so it is invalid to follow them with relative ones
                if ( seed && postFinder ) {
                    return;
                }

                var i, elem, postFilterIn,
                    preMap = [],
                    postMap = [],
                    preexisting = results.length,

                // Get initial elements from seed or context
                    elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [], seed ),

                // Prefilter to get matcher input, preserving a map for seed-results synchronization
                    matcherIn = preFilter && ( seed || !selector ) ?
                        condense( elems, preMap, preFilter, context, xml ) :
                        elems,

                    matcherOut = matcher ?
                        // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                        postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

                            // ...intermediate processing is necessary
                            [] :

                            // ...otherwise use results directly
                            results :
                        matcherIn;

                // Find primary matches
                if ( matcher ) {
                    matcher( matcherIn, matcherOut, context, xml );
                }

                // Apply postFilter
                if ( postFilter ) {
                    postFilterIn = condense( matcherOut, postMap );
                    postFilter( postFilterIn, [], context, xml );

                    // Un-match failing elements by moving them back to matcherIn
                    i = postFilterIn.length;
                    while ( i-- ) {
                        if ( (elem = postFilterIn[i]) ) {
                            matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
                        }
                    }
                }

                // Keep seed and results synchronized
                if ( seed ) {
                    // Ignore postFinder because it can't coexist with seed
                    i = preFilter && matcherOut.length;
                    while ( i-- ) {
                        if ( (elem = matcherOut[i]) ) {
                            seed[ preMap[i] ] = !(results[ preMap[i] ] = elem);
                        }
                    }
                } else {
                    matcherOut = condense(
                        matcherOut === results ?
                            matcherOut.splice( preexisting, matcherOut.length ) :
                            matcherOut
                    );
                    if ( postFinder ) {
                        postFinder( null, results, matcherOut, xml );
                    } else {
                        push.apply( results, matcherOut );
                    }
                }
            });
        }

        function matcherFromTokens( tokens ) {
            var checkContext, matcher, j,
                len = tokens.length,
                leadingRelative = Expr.relative[ tokens[0].type ],
                implicitRelative = leadingRelative || Expr.relative[" "],
                i = leadingRelative ? 1 : 0,

            // The foundational matcher ensures that elements are reachable from top-level context(s)
                matchContext = addCombinator( function( elem ) {
                    return elem === checkContext;
                }, implicitRelative, true ),
                matchAnyContext = addCombinator( function( elem ) {
                    return indexOf.call( checkContext, elem ) > -1;
                }, implicitRelative, true ),
                matchers = [ function( elem, context, xml ) {
                    return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
                        (checkContext = context).nodeType ?
                            matchContext( elem, context, xml ) :
                            matchAnyContext( elem, context, xml ) );
                } ];

            for ( ; i < len; i++ ) {
                if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
                    matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
                } else {
                    // The concatenated values are (context, xml) for backCompat
                    matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

                    // Return special upon seeing a positional matcher
                    if ( matcher[ expando ] ) {
                        // Find the next relative operator (if any) for proper handling
                        j = ++i;
                        for ( ; j < len; j++ ) {
                            if ( Expr.relative[ tokens[j].type ] ) {
                                break;
                            }
                        }
                        return setMatcher(
                            i > 1 && elementMatcher( matchers ),
                            i > 1 && tokens.slice( 0, i - 1 ).join("").replace( rtrim, "$1" ),
                            matcher,
                            i < j && matcherFromTokens( tokens.slice( i, j ) ),
                            j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
                            j < len && tokens.join("")
                        );
                    }
                    matchers.push( matcher );
                }
            }

            return elementMatcher( matchers );
        }

        function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
            var bySet = setMatchers.length > 0,
                byElement = elementMatchers.length > 0,
                superMatcher = function( seed, context, xml, results, expandContext ) {
                    var elem, j, matcher,
                        setMatched = [],
                        matchedCount = 0,
                        i = "0",
                        unmatched = seed && [],
                        outermost = expandContext != null,
                        contextBackup = outermostContext,
                    // We must always have either seed elements or context
                        elems = seed || byElement && Expr.find["TAG"]( "*", expandContext && context.parentNode || context ),
                    // Nested matchers should use non-integer dirruns
                        dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.E);

                    if ( outermost ) {
                        outermostContext = context !== document && context;
                        cachedruns = superMatcher.el;
                    }

                    // Add elements passing elementMatchers directly to results
                    for ( ; (elem = elems[i]) != null; i++ ) {
                        if ( byElement && elem ) {
                            for ( j = 0; (matcher = elementMatchers[j]); j++ ) {
                                if ( matcher( elem, context, xml ) ) {
                                    results.push( elem );
                                    break;
                                }
                            }
                            if ( outermost ) {
                                dirruns = dirrunsUnique;
                                cachedruns = ++superMatcher.el;
                            }
                        }

                        // Track unmatched elements for set filters
                        if ( bySet ) {
                            // They will have gone through all possible matchers
                            if ( (elem = !matcher && elem) ) {
                                matchedCount--;
                            }

                            // Lengthen the array for every element, matched or not
                            if ( seed ) {
                                unmatched.push( elem );
                            }
                        }
                    }

                    // Apply set filters to unmatched elements
                    matchedCount += i;
                    if ( bySet && i !== matchedCount ) {
                        for ( j = 0; (matcher = setMatchers[j]); j++ ) {
                            matcher( unmatched, setMatched, context, xml );
                        }

                        if ( seed ) {
                            // Reintegrate element matches to eliminate the need for sorting
                            if ( matchedCount > 0 ) {
                                while ( i-- ) {
                                    if ( !(unmatched[i] || setMatched[i]) ) {
                                        setMatched[i] = pop.call( results );
                                    }
                                }
                            }

                            // Discard index placeholder values to get only actual matches
                            setMatched = condense( setMatched );
                        }

                        // Add matches to results
                        push.apply( results, setMatched );

                        // Seedless set matches succeeding multiple successful matchers stipulate sorting
                        if ( outermost && !seed && setMatched.length > 0 &&
                            ( matchedCount + setMatchers.length ) > 1 ) {

                            Sizzle.uniqueSort( results );
                        }
                    }

                    // Override manipulation of globals by nested matchers
                    if ( outermost ) {
                        dirruns = dirrunsUnique;
                        outermostContext = contextBackup;
                    }

                    return unmatched;
                };

            superMatcher.el = 0;
            return bySet ?
                markFunction( superMatcher ) :
                superMatcher;
        }

        compile = Sizzle.compile = function( selector, group /* Internal Use Only */ ) {
            var i,
                setMatchers = [],
                elementMatchers = [],
                cached = compilerCache[ expando ][ selector ];

            if ( !cached ) {
                // Generate a function of recursive functions that can be used to check each element
                if ( !group ) {
                    group = tokenize( selector );
                }
                i = group.length;
                while ( i-- ) {
                    cached = matcherFromTokens( group[i] );
                    if ( cached[ expando ] ) {
                        setMatchers.push( cached );
                    } else {
                        elementMatchers.push( cached );
                    }
                }

                // Cache the compiled function
                cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
            }
            return cached;
        };

        function multipleContexts( selector, contexts, results, seed ) {
            var i = 0,
                len = contexts.length;
            for ( ; i < len; i++ ) {
                Sizzle( selector, contexts[i], results, seed );
            }
            return results;
        }

        function select( selector, context, results, seed, xml ) {
            var i, tokens, token, type, find,
                match = tokenize( selector ),
                j = match.length;

            if ( !seed ) {
                // Try to minimize operations if there is only one group
                if ( match.length === 1 ) {

                    // Take a shortcut and set the context if the root selector is an ID
                    tokens = match[0] = match[0].slice( 0 );
                    if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
                        context.nodeType === 9 && !xml &&
                        Expr.relative[ tokens[1].type ] ) {

                        context = Expr.find["ID"]( token.matches[0].replace( rbackslash, "" ), context, xml )[0];
                        if ( !context ) {
                            return results;
                        }

                        selector = selector.slice( tokens.shift().length );
                    }

                    // Fetch a seed set for right-to-left matching
                    for ( i = matchExpr["POS"].test( selector ) ? -1 : tokens.length - 1; i >= 0; i-- ) {
                        token = tokens[i];

                        // Abort if we hit a combinator
                        if ( Expr.relative[ (type = token.type) ] ) {
                            break;
                        }
                        if ( (find = Expr.find[ type ]) ) {
                            // Search, expanding context for leading sibling combinators
                            if ( (seed = find(
                                token.matches[0].replace( rbackslash, "" ),
                                rsibling.test( tokens[0].type ) && context.parentNode || context,
                                xml
                            )) ) {

                                // If seed is empty or no tokens remain, we can return early
                                tokens.splice( i, 1 );
                                selector = seed.length && tokens.join("");
                                if ( !selector ) {
                                    push.apply( results, slice.call( seed, 0 ) );
                                    return results;
                                }

                                break;
                            }
                        }
                    }
                }
            }

            // Compile and execute a filtering function
            // Provide `match` to avoid retokenization if we modified the selector above
            compile( selector, match )(
                seed,
                context,
                xml,
                results,
                rsibling.test( selector )
            );
            return results;
        }

        if ( document.querySelectorAll ) {
            (function() {
                var disconnectedMatch,
                    oldSelect = select,
                    rescape = /'|\\/g,
                    rattributeQuotes = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,

                // qSa(:focus) reports false when true (Chrome 21),
                // A support test would require too much code (would include document ready)
                    rbuggyQSA = [":focus"],

                // matchesSelector(:focus) reports false when true (Chrome 21),
                // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
                // A support test would require too much code (would include document ready)
                // just skip matchesSelector for :active
                    rbuggyMatches = [ ":active", ":focus" ],
                    matches = docElem.matchesSelector ||
                        docElem.mozMatchesSelector ||
                        docElem.webkitMatchesSelector ||
                        docElem.oMatchesSelector ||
                        docElem.msMatchesSelector;

                // Build QSA regex
                // Regex strategy adopted from Diego Perini
                assert(function( div ) {
                    // Select is set to empty string on purpose
                    // This is to test IE's treatment of not explictly
                    // setting a boolean content attribute,
                    // since its presence should be enough
                    // http://bugs.jquery.com/ticket/12359
                    div.innerHTML = "<select><option selected=''></option></select>";

                    // IE8 - Some boolean attributes are not treated correctly
                    if ( !div.querySelectorAll("[selected]").length ) {
                        rbuggyQSA.push( "\\[" + whitespace + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)" );
                    }

                    // Webkit/Opera - :checked should return selected option elements
                    // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                    // IE8 throws error here (do not put tests after this one)
                    if ( !div.querySelectorAll(":checked").length ) {
                        rbuggyQSA.push(":checked");
                    }
                });

                assert(function( div ) {

                    // Opera 10-12/IE9 - ^= $= *= and empty values
                    // Should not select anything
                    div.innerHTML = "<p test=''></p>";
                    if ( div.querySelectorAll("[test^='']").length ) {
                        rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:\"\"|'')" );
                    }

                    // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
                    // IE8 throws error here (do not put tests after this one)
                    div.innerHTML = "<input type='hidden'/>";
                    if ( !div.querySelectorAll(":enabled").length ) {
                        rbuggyQSA.push(":enabled", ":disabled");
                    }
                });

                // rbuggyQSA always contains :focus, so no need for a length check
                rbuggyQSA = /* rbuggyQSA.length && */ new RegExp( rbuggyQSA.join("|") );

                select = function( selector, context, results, seed, xml ) {
                    // Only use querySelectorAll when not filtering,
                    // when this is not xml,
                    // and when no QSA bugs apply
                    if ( !seed && !xml && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
                        var groups, i,
                            old = true,
                            nid = expando,
                            newContext = context,
                            newSelector = context.nodeType === 9 && selector;

                        // qSA works strangely on Element-rooted queries
                        // We can work around this by specifying an extra ID on the root
                        // and working up from there (Thanks to Andrew Dupont for the technique)
                        // IE 8 doesn't work on object elements
                        if ( context.nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
                            groups = tokenize( selector );

                            if ( (old = context.getAttribute("id")) ) {
                                nid = old.replace( rescape, "\\$&" );
                            } else {
                                context.setAttribute( "id", nid );
                            }
                            nid = "[id='" + nid + "'] ";

                            i = groups.length;
                            while ( i-- ) {
                                groups[i] = nid + groups[i].join("");
                            }
                            newContext = rsibling.test( selector ) && context.parentNode || context;
                            newSelector = groups.join(",");
                        }

                        if ( newSelector ) {
                            try {
                                push.apply( results, slice.call( newContext.querySelectorAll(
                                    newSelector
                                ), 0 ) );
                                return results;
                            } catch(qsaError) {
                            } finally {
                                if ( !old ) {
                                    context.removeAttribute("id");
                                }
                            }
                        }
                    }

                    return oldSelect( selector, context, results, seed, xml );
                };

                if ( matches ) {
                    assert(function( div ) {
                        // Check to see if it's possible to do matchesSelector
                        // on a disconnected node (IE 9)
                        disconnectedMatch = matches.call( div, "div" );

                        // This should fail with an exception
                        // Gecko does not error, returns false instead
                        try {
                            matches.call( div, "[test!='']:sizzle" );
                            rbuggyMatches.push( "!=", pseudos );
                        } catch ( e ) {}
                    });

                    // rbuggyMatches always contains :active and :focus, so no need for a length check
                    rbuggyMatches = /* rbuggyMatches.length && */ new RegExp( rbuggyMatches.join("|") );

                    Sizzle.matchesSelector = function( elem, expr ) {
                        // Make sure that attribute selectors are quoted
                        expr = expr.replace( rattributeQuotes, "='$1']" );

                        // rbuggyMatches always contains :active, so no need for an existence check
                        if ( !isXML( elem ) && !rbuggyMatches.test( expr ) && (!rbuggyQSA || !rbuggyQSA.test( expr )) ) {
                            try {
                                var ret = matches.call( elem, expr );

                                // IE 9's matchesSelector returns false on disconnected nodes
                                if ( ret || disconnectedMatch ||
                                    // As well, disconnected nodes are said to be in a document
                                    // fragment in IE 9
                                    elem.document && elem.document.nodeType !== 11 ) {
                                    return ret;
                                }
                            } catch(e) {}
                        }

                        return Sizzle( expr, null, null, [ elem ] ).length > 0;
                    };
                }
            })();
        }

// Deprecated
        Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Back-compat
        function setFilters() {}
        Expr.filters = setFilters.prototype = Expr.pseudos;
        Expr.setFilters = new setFilters();

// Override sizzle attribute retrieval
        Sizzle.attr = jQuery.attr;
        jQuery.find = Sizzle;
        jQuery.expr = Sizzle.selectors;
        jQuery.expr[":"] = jQuery.expr.pseudos;
        jQuery.unique = Sizzle.uniqueSort;
        jQuery.text = Sizzle.getText;
        jQuery.isXMLDoc = Sizzle.isXML;
        jQuery.contains = Sizzle.contains;


    })( window );
    var runtil = /Until$/,
        rparentsprev = /^(?:parents|prev(?:Until|All))/,
        isSimple = /^.[^:#\[\.,]*$/,
        rneedsContext = jQuery.expr.match.needsContext,
    // methods guaranteed to produce a unique set when starting from a unique set
        guaranteedUnique = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };

    jQuery.fn.extend({
        find: function( selector ) {
            var i, l, length, n, r, ret,
                self = this;

            if ( typeof selector !== "string" ) {
                return jQuery( selector ).filter(function() {
                    for ( i = 0, l = self.length; i < l; i++ ) {
                        if ( jQuery.contains( self[ i ], this ) ) {
                            return true;
                        }
                    }
                });
            }

            ret = this.pushStack( "", "find", selector );

            for ( i = 0, l = this.length; i < l; i++ ) {
                length = ret.length;
                jQuery.find( selector, this[i], ret );

                if ( i > 0 ) {
                    // Make sure that the results are unique
                    for ( n = length; n < ret.length; n++ ) {
                        for ( r = 0; r < length; r++ ) {
                            if ( ret[r] === ret[n] ) {
                                ret.splice(n--, 1);
                                break;
                            }
                        }
                    }
                }
            }

            return ret;
        },

        has: function( target ) {
            var i,
                targets = jQuery( target, this ),
                len = targets.length;

            return this.filter(function() {
                for ( i = 0; i < len; i++ ) {
                    if ( jQuery.contains( this, targets[i] ) ) {
                        return true;
                    }
                }
            });
        },

        not: function( selector ) {
            return this.pushStack( winnow(this, selector, false), "not", selector);
        },

        filter: function( selector ) {
            return this.pushStack( winnow(this, selector, true), "filter", selector );
        },

        is: function( selector ) {
            return !!selector && (
                typeof selector === "string" ?
                    // If this is a positional/relative selector, check membership in the returned set
                    // so $("p:first").is("p:last") won't return true for a doc with two "p".
                    rneedsContext.test( selector ) ?
                        jQuery( selector, this.context ).index( this[0] ) >= 0 :
                        jQuery.filter( selector, this ).length > 0 :
                    this.filter( selector ).length > 0 );
        },

        closest: function( selectors, context ) {
            var cur,
                i = 0,
                l = this.length,
                ret = [],
                pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
                    jQuery( selectors, context || this.context ) :
                    0;

            for ( ; i < l; i++ ) {
                cur = this[i];

                while ( cur && cur.ownerDocument && cur !== context && cur.nodeType !== 11 ) {
                    if ( pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors) ) {
                        ret.push( cur );
                        break;
                    }
                    cur = cur.parentNode;
                }
            }

            ret = ret.length > 1 ? jQuery.unique( ret ) : ret;

            return this.pushStack( ret, "closest", selectors );
        },

        // Determine the position of an element within
        // the matched set of elements
        index: function( elem ) {

            // No argument, return index in parent
            if ( !elem ) {
                return ( this[0] && this[0].parentNode ) ? this.prevAll().length : -1;
            }

            // index in selector
            if ( typeof elem === "string" ) {
                return jQuery.inArray( this[0], jQuery( elem ) );
            }

            // Locate the position of the desired element
            return jQuery.inArray(
                // If it receives a jQuery object, the first element is used
                elem.jquery ? elem[0] : elem, this );
        },

        add: function( selector, context ) {
            var set = typeof selector === "string" ?
                    jQuery( selector, context ) :
                    jQuery.makeArray( selector && selector.nodeType ? [ selector ] : selector ),
                all = jQuery.merge( this.get(), set );

            return this.pushStack( isDisconnected( set[0] ) || isDisconnected( all[0] ) ?
                all :
                jQuery.unique( all ) );
        },

        addBack: function( selector ) {
            return this.add( selector == null ?
                this.prevObject : this.prevObject.filter(selector)
            );
        }
    });

    jQuery.fn.andSelf = jQuery.fn.addBack;

// A painfully simple check to see if an element is disconnected
// from a document (should be improved, where feasible).
    function isDisconnected( node ) {
        return !node || !node.parentNode || node.parentNode.nodeType === 11;
    }

    function sibling( cur, dir ) {
        do {
            cur = cur[ dir ];
        } while ( cur && cur.nodeType !== 1 );

        return cur;
    }

    jQuery.each({
        parent: function( elem ) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function( elem ) {
            return jQuery.dir( elem, "parentNode" );
        },
        parentsUntil: function( elem, i, until ) {
            return jQuery.dir( elem, "parentNode", until );
        },
        next: function( elem ) {
            return sibling( elem, "nextSibling" );
        },
        prev: function( elem ) {
            return sibling( elem, "previousSibling" );
        },
        nextAll: function( elem ) {
            return jQuery.dir( elem, "nextSibling" );
        },
        prevAll: function( elem ) {
            return jQuery.dir( elem, "previousSibling" );
        },
        nextUntil: function( elem, i, until ) {
            return jQuery.dir( elem, "nextSibling", until );
        },
        prevUntil: function( elem, i, until ) {
            return jQuery.dir( elem, "previousSibling", until );
        },
        siblings: function( elem ) {
            return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
        },
        children: function( elem ) {
            return jQuery.sibling( elem.firstChild );
        },
        contents: function( elem ) {
            return jQuery.nodeName( elem, "iframe" ) ?
                elem.contentDocument || elem.contentWindow.document :
                jQuery.merge( [], elem.childNodes );
        }
    }, function( name, fn ) {
        jQuery.fn[ name ] = function( until, selector ) {
            var ret = jQuery.map( this, fn, until );

            if ( !runtil.test( name ) ) {
                selector = until;
            }

            if ( selector && typeof selector === "string" ) {
                ret = jQuery.filter( selector, ret );
            }

            ret = this.length > 1 && !guaranteedUnique[ name ] ? jQuery.unique( ret ) : ret;

            if ( this.length > 1 && rparentsprev.test( name ) ) {
                ret = ret.reverse();
            }

            return this.pushStack( ret, name, core_slice.call( arguments ).join(",") );
        };
    });

    jQuery.extend({
        filter: function( expr, elems, not ) {
            if ( not ) {
                expr = ":not(" + expr + ")";
            }

            return elems.length === 1 ?
                jQuery.find.matchesSelector(elems[0], expr) ? [ elems[0] ] : [] :
                jQuery.find.matches(expr, elems);
        },

        dir: function( elem, dir, until ) {
            var matched = [],
                cur = elem[ dir ];

            while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
                if ( cur.nodeType === 1 ) {
                    matched.push( cur );
                }
                cur = cur[dir];
            }
            return matched;
        },

        sibling: function( n, elem ) {
            var r = [];

            for ( ; n; n = n.nextSibling ) {
                if ( n.nodeType === 1 && n !== elem ) {
                    r.push( n );
                }
            }

            return r;
        }
    });

// Implement the identical functionality for filter and not
    function winnow( elements, qualifier, keep ) {

        // Can't pass null or undefined to indexOf in Firefox 4
        // Set to 0 to skip string check
        qualifier = qualifier || 0;

        if ( jQuery.isFunction( qualifier ) ) {
            return jQuery.grep(elements, function( elem, i ) {
                var retVal = !!qualifier.call( elem, i, elem );
                return retVal === keep;
            });

        } else if ( qualifier.nodeType ) {
            return jQuery.grep(elements, function( elem, i ) {
                return ( elem === qualifier ) === keep;
            });

        } else if ( typeof qualifier === "string" ) {
            var filtered = jQuery.grep(elements, function( elem ) {
                return elem.nodeType === 1;
            });

            if ( isSimple.test( qualifier ) ) {
                return jQuery.filter(qualifier, filtered, !keep);
            } else {
                qualifier = jQuery.filter( qualifier, filtered );
            }
        }

        return jQuery.grep(elements, function( elem, i ) {
            return ( jQuery.inArray( elem, qualifier ) >= 0 ) === keep;
        });
    }
    function createSafeFragment( document ) {
        var list = nodeNames.split( "|" ),
            safeFrag = document.createDocumentFragment();

        if ( safeFrag.createElement ) {
            while ( list.length ) {
                safeFrag.createElement(
                    list.pop()
                );
            }
        }
        return safeFrag;
    }

    var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
            "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
        rleadingWhitespace = /^\s+/,
        rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        rtagName = /<([\w:]+)/,
        rtbody = /<tbody/i,
        rhtml = /<|&#?\w+;/,
        rnoInnerhtml = /<(?:script|style|link)/i,
        rnocache = /<(?:script|object|embed|option|style)/i,
        rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
        rcheckableType = /^(?:checkbox|radio)$/,
    // checked="checked" or checked
        rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rscriptType = /\/(java|ecma)script/i,
        rcleanScript = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        wrapMap = {
            option: [ 1, "<select multiple='multiple'>", "</select>" ],
            legend: [ 1, "<fieldset>", "</fieldset>" ],
            thead: [ 1, "<table>", "</table>" ],
            tr: [ 2, "<table><tbody>", "</tbody></table>" ],
            td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
            col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
            area: [ 1, "<map>", "</map>" ],
            _default: [ 0, "", "" ]
        },
        safeFragment = createSafeFragment( document ),
        fragmentDiv = safeFragment.appendChild( document.createElement("div") );

    wrapMap.optgroup = wrapMap.option;
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;

// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
// unless wrapped in a div with non-breaking characters in front of it.
    if ( !jQuery.support.htmlSerialize ) {
        wrapMap._default = [ 1, "X<div>", "</div>" ];
    }

    jQuery.fn.extend({
        text: function( value ) {
            return jQuery.access( this, function( value ) {
                return value === undefined ?
                    jQuery.text( this ) :
                    this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
            }, null, value, arguments.length );
        },

        wrapAll: function( html ) {
            if ( jQuery.isFunction( html ) ) {
                return this.each(function(i) {
                    jQuery(this).wrapAll( html.call(this, i) );
                });
            }

            if ( this[0] ) {
                // The elements to wrap the target around
                var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

                if ( this[0].parentNode ) {
                    wrap.insertBefore( this[0] );
                }

                wrap.map(function() {
                    var elem = this;

                    while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
                        elem = elem.firstChild;
                    }

                    return elem;
                }).append( this );
            }

            return this;
        },

        wrapInner: function( html ) {
            if ( jQuery.isFunction( html ) ) {
                return this.each(function(i) {
                    jQuery(this).wrapInner( html.call(this, i) );
                });
            }

            return this.each(function() {
                var self = jQuery( this ),
                    contents = self.contents();

                if ( contents.length ) {
                    contents.wrapAll( html );

                } else {
                    self.append( html );
                }
            });
        },

        wrap: function( html ) {
            var isFunction = jQuery.isFunction( html );

            return this.each(function(i) {
                jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
            });
        },

        unwrap: function() {
            return this.parent().each(function() {
                if ( !jQuery.nodeName( this, "body" ) ) {
                    jQuery( this ).replaceWith( this.childNodes );
                }
            }).end();
        },

        append: function() {
            return this.domManip(arguments, true, function( elem ) {
                if ( this.nodeType === 1 || this.nodeType === 11 ) {
                    this.appendChild( elem );
                }
            });
        },

        prepend: function() {
            return this.domManip(arguments, true, function( elem ) {
                if ( this.nodeType === 1 || this.nodeType === 11 ) {
                    this.insertBefore( elem, this.firstChild );
                }
            });
        },

        before: function() {
            if ( !isDisconnected( this[0] ) ) {
                return this.domManip(arguments, false, function( elem ) {
                    this.parentNode.insertBefore( elem, this );
                });
            }

            if ( arguments.length ) {
                var set = jQuery.clean( arguments );
                return this.pushStack( jQuery.merge( set, this ), "before", this.selector );
            }
        },

        after: function() {
            if ( !isDisconnected( this[0] ) ) {
                return this.domManip(arguments, false, function( elem ) {
                    this.parentNode.insertBefore( elem, this.nextSibling );
                });
            }

            if ( arguments.length ) {
                var set = jQuery.clean( arguments );
                return this.pushStack( jQuery.merge( this, set ), "after", this.selector );
            }
        },

        // keepData is for internal use only--do not document
        remove: function( selector, keepData ) {
            var elem,
                i = 0;

            for ( ; (elem = this[i]) != null; i++ ) {
                if ( !selector || jQuery.filter( selector, [ elem ] ).length ) {
                    if ( !keepData && elem.nodeType === 1 ) {
                        jQuery.cleanData( elem.getElementsByTagName("*") );
                        jQuery.cleanData( [ elem ] );
                    }

                    if ( elem.parentNode ) {
                        elem.parentNode.removeChild( elem );
                    }
                }
            }

            return this;
        },

        empty: function() {
            var elem,
                i = 0;

            for ( ; (elem = this[i]) != null; i++ ) {
                // Remove element nodes and prevent memory leaks
                if ( elem.nodeType === 1 ) {
                    jQuery.cleanData( elem.getElementsByTagName("*") );
                }

                // Remove any remaining nodes
                while ( elem.firstChild ) {
                    elem.removeChild( elem.firstChild );
                }
            }

            return this;
        },

        clone: function( dataAndEvents, deepDataAndEvents ) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

            return this.map( function () {
                return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
            });
        },

        html: function( value ) {
            return jQuery.access( this, function( value ) {
                var elem = this[0] || {},
                    i = 0,
                    l = this.length;

                if ( value === undefined ) {
                    return elem.nodeType === 1 ?
                        elem.innerHTML.replace( rinlinejQuery, "" ) :
                        undefined;
                }

                // See if we can take a shortcut and just use innerHTML
                if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
                    ( jQuery.support.htmlSerialize || !rnoshimcache.test( value )  ) &&
                    ( jQuery.support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
                    !wrapMap[ ( rtagName.exec( value ) || ["", ""] )[1].toLowerCase() ] ) {

                    value = value.replace( rxhtmlTag, "<$1></$2>" );

                    try {
                        for (; i < l; i++ ) {
                            // Remove element nodes and prevent memory leaks
                            elem = this[i] || {};
                            if ( elem.nodeType === 1 ) {
                                jQuery.cleanData( elem.getElementsByTagName( "*" ) );
                                elem.innerHTML = value;
                            }
                        }

                        elem = 0;

                        // If using innerHTML throws an exception, use the fallback method
                    } catch(e) {}
                }

                if ( elem ) {
                    this.empty().append( value );
                }
            }, null, value, arguments.length );
        },

        replaceWith: function( value ) {
            if ( !isDisconnected( this[0] ) ) {
                // Make sure that the elements are removed from the DOM before they are inserted
                // this can help fix replacing a parent with child elements
                if ( jQuery.isFunction( value ) ) {
                    return this.each(function(i) {
                        var self = jQuery(this), old = self.html();
                        self.replaceWith( value.call( this, i, old ) );
                    });
                }

                if ( typeof value !== "string" ) {
                    value = jQuery( value ).detach();
                }

                return this.each(function() {
                    var next = this.nextSibling,
                        parent = this.parentNode;

                    jQuery( this ).remove();

                    if ( next ) {
                        jQuery(next).before( value );
                    } else {
                        jQuery(parent).append( value );
                    }
                });
            }

            return this.length ?
                this.pushStack( jQuery(jQuery.isFunction(value) ? value() : value), "replaceWith", value ) :
                this;
        },

        detach: function( selector ) {
            return this.remove( selector, true );
        },

        domManip: function( args, table, callback ) {

            // Flatten any nested arrays
            args = [].concat.apply( [], args );

            var results, first, fragment, iNoClone,
                i = 0,
                value = args[0],
                scripts = [],
                l = this.length;

            // We can't cloneNode fragments that contain checked, in WebKit
            if ( !jQuery.support.checkClone && l > 1 && typeof value === "string" && rchecked.test( value ) ) {
                return this.each(function() {
                    jQuery(this).domManip( args, table, callback );
                });
            }

            if ( jQuery.isFunction(value) ) {
                return this.each(function(i) {
                    var self = jQuery(this);
                    args[0] = value.call( this, i, table ? self.html() : undefined );
                    self.domManip( args, table, callback );
                });
            }

            if ( this[0] ) {
                results = jQuery.buildFragment( args, this, scripts );
                fragment = results.fragment;
                first = fragment.firstChild;

                if ( fragment.childNodes.length === 1 ) {
                    fragment = first;
                }

                if ( first ) {
                    table = table && jQuery.nodeName( first, "tr" );

                    // Use the original fragment for the last item instead of the first because it can end up
                    // being emptied incorrectly in certain situations (#8070).
                    // Fragments from the fragment cache must always be cloned and never used in place.
                    for ( iNoClone = results.cacheable || l - 1; i < l; i++ ) {
                        callback.call(
                            table && jQuery.nodeName( this[i], "table" ) ?
                                findOrAppend( this[i], "tbody" ) :
                                this[i],
                            i === iNoClone ?
                                fragment :
                                jQuery.clone( fragment, true, true )
                        );
                    }
                }

                // Fix #11809: Avoid leaking memory
                fragment = first = null;

                if ( scripts.length ) {
                    jQuery.each( scripts, function( i, elem ) {
                        if ( elem.src ) {
                            if ( jQuery.ajax ) {
                                jQuery.ajax({
                                    url: elem.src,
                                    type: "GET",
                                    dataType: "script",
                                    async: false,
                                    global: false,
                                    "throws": true
                                });
                            } else {
                                jQuery.error("no ajax");
                            }
                        } else {
                            jQuery.globalEval( ( elem.text || elem.textContent || elem.innerHTML || "" ).replace( rcleanScript, "" ) );
                        }

                        if ( elem.parentNode ) {
                            elem.parentNode.removeChild( elem );
                        }
                    });
                }
            }

            return this;
        }
    });

    function findOrAppend( elem, tag ) {
        return elem.getElementsByTagName( tag )[0] || elem.appendChild( elem.ownerDocument.createElement( tag ) );
    }

    function cloneCopyEvent( src, dest ) {

        if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
            return;
        }

        var type, i, l,
            oldData = jQuery._data( src ),
            curData = jQuery._data( dest, oldData ),
            events = oldData.events;

        if ( events ) {
            delete curData.handle;
            curData.events = {};

            for ( type in events ) {
                for ( i = 0, l = events[ type ].length; i < l; i++ ) {
                    jQuery.event.add( dest, type, events[ type ][ i ] );
                }
            }
        }

        // make the cloned public data object a copy from the original
        if ( curData.data ) {
            curData.data = jQuery.extend( {}, curData.data );
        }
    }

    function cloneFixAttributes( src, dest ) {
        var nodeName;

        // We do not need to do anything for non-Elements
        if ( dest.nodeType !== 1 ) {
            return;
        }

        // clearAttributes removes the attributes, which we don't want,
        // but also removes the attachEvent events, which we *do* want
        if ( dest.clearAttributes ) {
            dest.clearAttributes();
        }

        // mergeAttributes, in contrast, only merges back on the
        // original attributes, not the events
        if ( dest.mergeAttributes ) {
            dest.mergeAttributes( src );
        }

        nodeName = dest.nodeName.toLowerCase();

        if ( nodeName === "object" ) {
            // IE6-10 improperly clones children of object elements using classid.
            // IE10 throws NoModificationAllowedError if parent is null, #12132.
            if ( dest.parentNode ) {
                dest.outerHTML = src.outerHTML;
            }

            // This path appears unavoidable for IE9. When cloning an object
            // element in IE9, the outerHTML strategy above is not sufficient.
            // If the src has innerHTML and the destination does not,
            // copy the src.innerHTML into the dest.innerHTML. #10324
            if ( jQuery.support.html5Clone && (src.innerHTML && !jQuery.trim(dest.innerHTML)) ) {
                dest.innerHTML = src.innerHTML;
            }

        } else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
            // IE6-8 fails to persist the checked state of a cloned checkbox
            // or radio button. Worse, IE6-7 fail to give the cloned element
            // a checked appearance if the defaultChecked value isn't also set

            dest.defaultChecked = dest.checked = src.checked;

            // IE6-7 get confused and end up setting the value of a cloned
            // checkbox/radio button to an empty string instead of "on"
            if ( dest.value !== src.value ) {
                dest.value = src.value;
            }

            // IE6-8 fails to return the selected option to the default selected
            // state when cloning options
        } else if ( nodeName === "option" ) {
            dest.selected = src.defaultSelected;

            // IE6-8 fails to set the defaultValue to the correct value when
            // cloning other types of input fields
        } else if ( nodeName === "input" || nodeName === "textarea" ) {
            dest.defaultValue = src.defaultValue;

            // IE blanks contents when cloning scripts
        } else if ( nodeName === "script" && dest.text !== src.text ) {
            dest.text = src.text;
        }

        // Event data gets referenced instead of copied if the expando
        // gets copied too
        dest.removeAttribute( jQuery.expando );
    }

    jQuery.buildFragment = function( args, context, scripts ) {
        var fragment, cacheable, cachehit,
            first = args[ 0 ];

        // Set context from what may come in as undefined or a jQuery collection or a node
        // Updated to fix #12266 where accessing context[0] could throw an exception in IE9/10 &
        // also doubles as fix for #8950 where plain objects caused createDocumentFragment exception
        context = context || document;
        context = !context.nodeType && context[0] || context;
        context = context.ownerDocument || context;

        // Only cache "small" (1/2 KB) HTML strings that are associated with the main document
        // Cloning options loses the selected state, so don't cache them
        // IE 6 doesn't like it when you put <object> or <embed> elements in a fragment
        // Also, WebKit does not clone 'checked' attributes on cloneNode, so don't cache
        // Lastly, IE6,7,8 will not correctly reuse cached fragments that were created from unknown elems #10501
        if ( args.length === 1 && typeof first === "string" && first.length < 512 && context === document &&
            first.charAt(0) === "<" && !rnocache.test( first ) &&
            (jQuery.support.checkClone || !rchecked.test( first )) &&
            (jQuery.support.html5Clone || !rnoshimcache.test( first )) ) {

            // Mark cacheable and look for a hit
            cacheable = true;
            fragment = jQuery.fragments[ first ];
            cachehit = fragment !== undefined;
        }

        if ( !fragment ) {
            fragment = context.createDocumentFragment();
            jQuery.clean( args, context, fragment, scripts );

            // Update the cache, but only store false
            // unless this is a second parsing of the same content
            if ( cacheable ) {
                jQuery.fragments[ first ] = cachehit && fragment;
            }
        }

        return { fragment: fragment, cacheable: cacheable };
    };

    jQuery.fragments = {};

    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function( name, original ) {
        jQuery.fn[ name ] = function( selector ) {
            var elems,
                i = 0,
                ret = [],
                insert = jQuery( selector ),
                l = insert.length,
                parent = this.length === 1 && this[0].parentNode;

            if ( (parent == null || parent && parent.nodeType === 11 && parent.childNodes.length === 1) && l === 1 ) {
                insert[ original ]( this[0] );
                return this;
            } else {
                for ( ; i < l; i++ ) {
                    elems = ( i > 0 ? this.clone(true) : this ).get();
                    jQuery( insert[i] )[ original ]( elems );
                    ret = ret.concat( elems );
                }

                return this.pushStack( ret, name, insert.selector );
            }
        };
    });

    function getAll( elem ) {
        if ( typeof elem.getElementsByTagName !== "undefined" ) {
            return elem.getElementsByTagName( "*" );

        } else if ( typeof elem.querySelectorAll !== "undefined" ) {
            return elem.querySelectorAll( "*" );

        } else {
            return [];
        }
    }

// Used in clean, fixes the defaultChecked property
    function fixDefaultChecked( elem ) {
        if ( rcheckableType.test( elem.type ) ) {
            elem.defaultChecked = elem.checked;
        }
    }

    jQuery.extend({
        clone: function( elem, dataAndEvents, deepDataAndEvents ) {
            var srcElements,
                destElements,
                i,
                clone;

            if ( jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
                clone = elem.cloneNode( true );

                // IE<=8 does not properly clone detached, unknown element nodes
            } else {
                fragmentDiv.innerHTML = elem.outerHTML;
                fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
            }

            if ( (!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) &&
                (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {
                // IE copies events bound via attachEvent when using cloneNode.
                // Calling detachEvent on the clone will also remove the events
                // from the original. In order to get around this, we use some
                // proprietary methods to clear the events. Thanks to MooTools
                // guys for this hotness.

                cloneFixAttributes( elem, clone );

                // Using Sizzle here is crazy slow, so we use getElementsByTagName instead
                srcElements = getAll( elem );
                destElements = getAll( clone );

                // Weird iteration because IE will replace the length property
                // with an element if you are cloning the body and one of the
                // elements on the page has a name or id of "length"
                for ( i = 0; srcElements[i]; ++i ) {
                    // Ensure that the destination node is not null; Fixes #9587
                    if ( destElements[i] ) {
                        cloneFixAttributes( srcElements[i], destElements[i] );
                    }
                }
            }

            // Copy the events from the original to the clone
            if ( dataAndEvents ) {
                cloneCopyEvent( elem, clone );

                if ( deepDataAndEvents ) {
                    srcElements = getAll( elem );
                    destElements = getAll( clone );

                    for ( i = 0; srcElements[i]; ++i ) {
                        cloneCopyEvent( srcElements[i], destElements[i] );
                    }
                }
            }

            srcElements = destElements = null;

            // Return the cloned set
            return clone;
        },

        clean: function( elems, context, fragment, scripts ) {
            var i, j, elem, tag, wrap, depth, div, hasBody, tbody, len, handleScript, jsTags,
                safe = context === document && safeFragment,
                ret = [];

            // Ensure that context is a document
            if ( !context || typeof context.createDocumentFragment === "undefined" ) {
                context = document;
            }

            // Use the already-created safe fragment if context permits
            for ( i = 0; (elem = elems[i]) != null; i++ ) {
                if ( typeof elem === "number" ) {
                    elem += "";
                }

                if ( !elem ) {
                    continue;
                }

                // Convert html string into DOM nodes
                if ( typeof elem === "string" ) {
                    if ( !rhtml.test( elem ) ) {
                        elem = context.createTextNode( elem );
                    } else {
                        // Ensure a safe container in which to render the html
                        safe = safe || createSafeFragment( context );
                        div = context.createElement("div");
                        safe.appendChild( div );

                        // Fix "XHTML"-style tags in all browsers
                        elem = elem.replace(rxhtmlTag, "<$1></$2>");

                        // Go to html and back, then peel off extra wrappers
                        tag = ( rtagName.exec( elem ) || ["", ""] )[1].toLowerCase();
                        wrap = wrapMap[ tag ] || wrapMap._default;
                        depth = wrap[0];
                        div.innerHTML = wrap[1] + elem + wrap[2];

                        // Move to the right depth
                        while ( depth-- ) {
                            div = div.lastChild;
                        }

                        // Remove IE's autoinserted <tbody> from table fragments
                        if ( !jQuery.support.tbody ) {

                            // String was a <table>, *may* have spurious <tbody>
                            hasBody = rtbody.test(elem);
                            tbody = tag === "table" && !hasBody ?
                                div.firstChild && div.firstChild.childNodes :

                                // String was a bare <thead> or <tfoot>
                                wrap[1] === "<table>" && !hasBody ?
                                    div.childNodes :
                                    [];

                            for ( j = tbody.length - 1; j >= 0 ; --j ) {
                                if ( jQuery.nodeName( tbody[ j ], "tbody" ) && !tbody[ j ].childNodes.length ) {
                                    tbody[ j ].parentNode.removeChild( tbody[ j ] );
                                }
                            }
                        }

                        // IE completely kills leading whitespace when innerHTML is used
                        if ( !jQuery.support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
                            div.insertBefore( context.createTextNode( rleadingWhitespace.exec(elem)[0] ), div.firstChild );
                        }

                        elem = div.childNodes;

                        // Take out of fragment container (we need a fresh div each time)
                        div.parentNode.removeChild( div );
                    }
                }

                if ( elem.nodeType ) {
                    ret.push( elem );
                } else {
                    jQuery.merge( ret, elem );
                }
            }

            // Fix #11356: Clear elements from safeFragment
            if ( div ) {
                elem = div = safe = null;
            }

            // Reset defaultChecked for any radios and checkboxes
            // about to be appended to the DOM in IE 6/7 (#8060)
            if ( !jQuery.support.appendChecked ) {
                for ( i = 0; (elem = ret[i]) != null; i++ ) {
                    if ( jQuery.nodeName( elem, "input" ) ) {
                        fixDefaultChecked( elem );
                    } else if ( typeof elem.getElementsByTagName !== "undefined" ) {
                        jQuery.grep( elem.getElementsByTagName("input"), fixDefaultChecked );
                    }
                }
            }

            // Append elements to a provided document fragment
            if ( fragment ) {
                // Special handling of each script element
                handleScript = function( elem ) {
                    // Check if we consider it executable
                    if ( !elem.type || rscriptType.test( elem.type ) ) {
                        // Detach the script and store it in the scripts array (if provided) or the fragment
                        // Return truthy to indicate that it has been handled
                        return scripts ?
                            scripts.push( elem.parentNode ? elem.parentNode.removeChild( elem ) : elem ) :
                            fragment.appendChild( elem );
                    }
                };

                for ( i = 0; (elem = ret[i]) != null; i++ ) {
                    // Check if we're done after handling an executable script
                    if ( !( jQuery.nodeName( elem, "script" ) && handleScript( elem ) ) ) {
                        // Append to fragment and handle embedded scripts
                        fragment.appendChild( elem );
                        if ( typeof elem.getElementsByTagName !== "undefined" ) {
                            // handleScript alters the DOM, so use jQuery.merge to ensure snapshot iteration
                            jsTags = jQuery.grep( jQuery.merge( [], elem.getElementsByTagName("script") ), handleScript );

                            // Splice the scripts into ret after their former ancestor and advance our index beyond them
                            ret.splice.apply( ret, [i + 1, 0].concat( jsTags ) );
                            i += jsTags.length;
                        }
                    }
                }
            }

            return ret;
        },

        cleanData: function( elems, /* internal */ acceptData ) {
            var data, id, elem, type,
                i = 0,
                internalKey = jQuery.expando,
                cache = jQuery.cache,
                deleteExpando = jQuery.support.deleteExpando,
                special = jQuery.event.special;

            for ( ; (elem = elems[i]) != null; i++ ) {

                if ( acceptData || jQuery.acceptData( elem ) ) {

                    id = elem[ internalKey ];
                    data = id && cache[ id ];

                    if ( data ) {
                        if ( data.events ) {
                            for ( type in data.events ) {
                                if ( special[ type ] ) {
                                    jQuery.event.remove( elem, type );

                                    // This is a shortcut to avoid jQuery.event.remove's overhead
                                } else {
                                    jQuery.removeEvent( elem, type, data.handle );
                                }
                            }
                        }

                        // Remove cache only if it was not already removed by jQuery.event.remove
                        if ( cache[ id ] ) {

                            delete cache[ id ];

                            // IE does not allow us to delete expando properties from nodes,
                            // nor does it have a removeAttribute function on Document nodes;
                            // we must handle all of these cases
                            if ( deleteExpando ) {
                                delete elem[ internalKey ];

                            } else if ( elem.removeAttribute ) {
                                elem.removeAttribute( internalKey );

                            } else {
                                elem[ internalKey ] = null;
                            }

                            jQuery.deletedIds.push( id );
                        }
                    }
                }
            }
        }
    });
// Limit scope pollution from any deprecated API
    (function() {

        var matched, browser;

// Use of jQuery.browser is frowned upon.
// More details: http://api.jquery.com/jQuery.browser
// jQuery.uaMatch maintained for back-compat
        jQuery.uaMatch = function( ua ) {
            ua = ua.toLowerCase();

            var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
                /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
                /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
                /(msie) ([\w.]+)/.exec( ua ) ||
                ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
                [];

            return {
                browser: match[ 1 ] || "",
                version: match[ 2 ] || "0"
            };
        };

        matched = jQuery.uaMatch( navigator.userAgent );
        browser = {};

        if ( matched.browser ) {
            browser[ matched.browser ] = true;
            browser.version = matched.version;
        }

// Chrome is Webkit, but Webkit is also Safari.
        if ( browser.chrome ) {
            browser.webkit = true;
        } else if ( browser.webkit ) {
            browser.safari = true;
        }

        jQuery.browser = browser;

        jQuery.sub = function() {
            function jQuerySub( selector, context ) {
                return new jQuerySub.fn.init( selector, context );
            }
            jQuery.extend( true, jQuerySub, this );
            jQuerySub.superclass = this;
            jQuerySub.fn = jQuerySub.prototype = this();
            jQuerySub.fn.constructor = jQuerySub;
            jQuerySub.sub = this.sub;
            jQuerySub.fn.init = function init( selector, context ) {
                if ( context && context instanceof jQuery && !(context instanceof jQuerySub) ) {
                    context = jQuerySub( context );
                }

                return jQuery.fn.init.call( this, selector, context, rootjQuerySub );
            };
            jQuerySub.fn.init.prototype = jQuerySub.fn;
            var rootjQuerySub = jQuerySub(document);
            return jQuerySub;
        };

    })();
    var curCSS, iframe, iframeDoc,
        ralpha = /alpha\([^)]*\)/i,
        ropacity = /opacity=([^)]*)/,
        rposition = /^(top|right|bottom|left)$/,
    // swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
    // see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
        rdisplayswap = /^(none|table(?!-c[ea]).+)/,
        rmargin = /^margin/,
        rnumsplit = new RegExp( "^(" + core_pnum + ")(.*)$", "i" ),
        rnumnonpx = new RegExp( "^(" + core_pnum + ")(?!px)[a-z%]+$", "i" ),
        rrelNum = new RegExp( "^([-+])=(" + core_pnum + ")", "i" ),
        elemdisplay = {},

        cssShow = { position: "absolute", visibility: "hidden", display: "block" },
        cssNormalTransform = {
            letterSpacing: 0,
            fontWeight: 400
        },

        cssExpand = [ "Top", "Right", "Bottom", "Left" ],
        cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],

        eventsToggle = jQuery.fn.toggle;

// return a css property mapped to a potentially vendor prefixed property
    function vendorPropName( style, name ) {

        // shortcut for names that are not vendor prefixed
        if ( name in style ) {
            return name;
        }

        // check for vendor prefixed names
        var capName = name.charAt(0).toUpperCase() + name.slice(1),
            origName = name,
            i = cssPrefixes.length;

        while ( i-- ) {
            name = cssPrefixes[ i ] + capName;
            if ( name in style ) {
                return name;
            }
        }

        return origName;
    }

    function isHidden( elem, el ) {
        elem = el || elem;
        return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
    }

    function showHide( elements, show ) {
        var elem, display,
            values = [],
            index = 0,
            length = elements.length;

        for ( ; index < length; index++ ) {
            elem = elements[ index ];
            if ( !elem.style ) {
                continue;
            }
            values[ index ] = jQuery._data( elem, "olddisplay" );
            if ( show ) {
                // Reset the inline display of this element to learn if it is
                // being hidden by cascaded rules or not
                if ( !values[ index ] && elem.style.display === "none" ) {
                    elem.style.display = "";
                }

                // Set elements which have been overridden with display: none
                // in a stylesheet to whatever the default browser style is
                // for such an element
                if ( elem.style.display === "" && isHidden( elem ) ) {
                    values[ index ] = jQuery._data( elem, "olddisplay", css_defaultDisplay(elem.nodeName) );
                }
            } else {
                display = curCSS( elem, "display" );

                if ( !values[ index ] && display !== "none" ) {
                    jQuery._data( elem, "olddisplay", display );
                }
            }
        }

        // Set the display of most of the elements in a second loop
        // to avoid the constant reflow
        for ( index = 0; index < length; index++ ) {
            elem = elements[ index ];
            if ( !elem.style ) {
                continue;
            }
            if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
                elem.style.display = show ? values[ index ] || "" : "none";
            }
        }

        return elements;
    }

    jQuery.fn.extend({
        css: function( name, value ) {
            return jQuery.access( this, function( elem, name, value ) {
                return value !== undefined ?
                    jQuery.style( elem, name, value ) :
                    jQuery.css( elem, name );
            }, name, value, arguments.length > 1 );
        },
        show: function() {
            return showHide( this, true );
        },
        hide: function() {
            return showHide( this );
        },
        toggle: function( state, fn2 ) {
            var bool = typeof state === "boolean";

            if ( jQuery.isFunction( state ) && jQuery.isFunction( fn2 ) ) {
                return eventsToggle.apply( this, arguments );
            }

            return this.each(function() {
                if ( bool ? state : isHidden( this ) ) {
                    jQuery( this ).show();
                } else {
                    jQuery( this ).hide();
                }
            });
        }
    });

    jQuery.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
            opacity: {
                get: function( elem, computed ) {
                    if ( computed ) {
                        // We should always get a number back from opacity
                        var ret = curCSS( elem, "opacity" );
                        return ret === "" ? "1" : ret;

                    }
                }
            }
        },

        // Exclude the following css properties to add px
        cssNumber: {
            "fillOpacity": true,
            "fontWeight": true,
            "lineHeight": true,
            "opacity": true,
            "orphans": true,
            "widows": true,
            "zIndex": true,
            "zoom": true
        },

        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {
            // normalize float css property
            "float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
        },

        // Get and set the style property on a DOM Node
        style: function( elem, name, value, extra ) {
            // Don't set styles on text and comment nodes
            if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
                return;
            }

            // Make sure that we're working with the right name
            var ret, type, hooks,
                origName = jQuery.camelCase( name ),
                style = elem.style;

            name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

            // gets hook for the prefixed version
            // followed by the unprefixed version
            hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

            // Check if we're setting a value
            if ( value !== undefined ) {
                type = typeof value;

                // convert relative number strings (+= or -=) to relative numbers. #7345
                if ( type === "string" && (ret = rrelNum.exec( value )) ) {
                    value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
                    // Fixes bug #9237
                    type = "number";
                }

                // Make sure that NaN and null values aren't set. See: #7116
                if ( value == null || type === "number" && isNaN( value ) ) {
                    return;
                }

                // If a number was passed in, add 'px' to the (except for certain CSS properties)
                if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
                    value += "px";
                }

                // If a hook was provided, use that value, otherwise just set the specified value
                if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
                    // Wrapped to prevent IE from throwing errors when 'invalid' values are provided
                    // Fixes bug #5509
                    try {
                        style[ name ] = value;
                    } catch(e) {}
                }

            } else {
                // If a hook was provided get the non-computed value from there
                if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
                    return ret;
                }

                // Otherwise just get the value from the style object
                return style[ name ];
            }
        },

        css: function( elem, name, numeric, extra ) {
            var val, num, hooks,
                origName = jQuery.camelCase( name );

            // Make sure that we're working with the right name
            name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

            // gets hook for the prefixed version
            // followed by the unprefixed version
            hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

            // If a hook was provided get the computed value from there
            if ( hooks && "get" in hooks ) {
                val = hooks.get( elem, true, extra );
            }

            // Otherwise, if a way to get the computed value exists, use that
            if ( val === undefined ) {
                val = curCSS( elem, name );
            }

            //convert "normal" to computed value
            if ( val === "normal" && name in cssNormalTransform ) {
                val = cssNormalTransform[ name ];
            }

            // Return, converting to number if forced or a qualifier was provided and val looks numeric
            if ( numeric || extra !== undefined ) {
                num = parseFloat( val );
                return numeric || jQuery.isNumeric( num ) ? num || 0 : val;
            }
            return val;
        },

        // A method for quickly swapping in/out CSS properties to get correct calculations
        swap: function( elem, options, callback ) {
            var ret, name,
                old = {};

            // Remember the old values, and insert the new ones
            for ( name in options ) {
                old[ name ] = elem.style[ name ];
                elem.style[ name ] = options[ name ];
            }

            ret = callback.call( elem );

            // Revert the old values
            for ( name in options ) {
                elem.style[ name ] = old[ name ];
            }

            return ret;
        }
    });

// NOTE: To any future maintainer, we've window.getComputedStyle
// because jsdom on node.js will break without it.
    if ( window.getComputedStyle ) {
        curCSS = function( elem, name ) {
            var ret, width, minWidth, maxWidth,
                computed = window.getComputedStyle( elem, null ),
                style = elem.style;

            if ( computed ) {

                ret = computed[ name ];
                if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
                    ret = jQuery.style( elem, name );
                }

                // A tribute to the "awesome hack by Dean Edwards"
                // Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
                // Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
                // this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
                if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {
                    width = style.width;
                    minWidth = style.minWidth;
                    maxWidth = style.maxWidth;

                    style.minWidth = style.maxWidth = style.width = ret;
                    ret = computed.width;

                    style.width = width;
                    style.minWidth = minWidth;
                    style.maxWidth = maxWidth;
                }
            }

            return ret;
        };
    } else if ( document.documentElement.currentStyle ) {
        curCSS = function( elem, name ) {
            var left, rsLeft,
                ret = elem.currentStyle && elem.currentStyle[ name ],
                style = elem.style;

            // Avoid setting ret to empty string here
            // so we don't default to auto
            if ( ret == null && style && style[ name ] ) {
                ret = style[ name ];
            }

            // From the awesome hack by Dean Edwards
            // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

            // If we're not dealing with a regular pixel number
            // but a number that has a weird ending, we need to convert it to pixels
            // but not position css attributes, as those are proportional to the parent element instead
            // and we can't measure the parent instead because it might trigger a "stacking dolls" problem
            if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

                // Remember the original values
                left = style.left;
                rsLeft = elem.runtimeStyle && elem.runtimeStyle.left;

                // Put in the new values to get a computed value out
                if ( rsLeft ) {
                    elem.runtimeStyle.left = elem.currentStyle.left;
                }
                style.left = name === "fontSize" ? "1em" : ret;
                ret = style.pixelLeft + "px";

                // Revert the changed values
                style.left = left;
                if ( rsLeft ) {
                    elem.runtimeStyle.left = rsLeft;
                }
            }

            return ret === "" ? "auto" : ret;
        };
    }

    function setPositiveNumber( elem, value, subtract ) {
        var matches = rnumsplit.exec( value );
        return matches ?
            Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
            value;
    }

    function augmentWidthOrHeight( elem, name, extra, isBorderBox ) {
        var i = extra === ( isBorderBox ? "border" : "content" ) ?
                // If we already have the right measurement, avoid augmentation
                4 :
                // Otherwise initialize for horizontal or vertical properties
                name === "width" ? 1 : 0,

            val = 0;

        for ( ; i < 4; i += 2 ) {
            // both box models exclude margin, so add it if we want it
            if ( extra === "margin" ) {
                // we use jQuery.css instead of curCSS here
                // because of the reliableMarginRight CSS hook!
                val += jQuery.css( elem, extra + cssExpand[ i ], true );
            }

            // From this point on we use curCSS for maximum performance (relevant in animations)
            if ( isBorderBox ) {
                // border-box includes padding, so remove it if we want content
                if ( extra === "content" ) {
                    val -= parseFloat( curCSS( elem, "padding" + cssExpand[ i ] ) ) || 0;
                }

                // at this point, extra isn't border nor margin, so remove border
                if ( extra !== "margin" ) {
                    val -= parseFloat( curCSS( elem, "border" + cssExpand[ i ] + "Width" ) ) || 0;
                }
            } else {
                // at this point, extra isn't content, so add padding
                val += parseFloat( curCSS( elem, "padding" + cssExpand[ i ] ) ) || 0;

                // at this point, extra isn't content nor padding, so add border
                if ( extra !== "padding" ) {
                    val += parseFloat( curCSS( elem, "border" + cssExpand[ i ] + "Width" ) ) || 0;
                }
            }
        }

        return val;
    }

    function getWidthOrHeight( elem, name, extra ) {

        // Start with offset property, which is equivalent to the border-box value
        var val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
            valueIsBorderBox = true,
            isBorderBox = jQuery.support.boxSizing && jQuery.css( elem, "boxSizing" ) === "border-box";

        // some non-html elements return undefined for offsetWidth, so check for null/undefined
        // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
        // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
        if ( val <= 0 || val == null ) {
            // Fall back to computed then uncomputed css if necessary
            val = curCSS( elem, name );
            if ( val < 0 || val == null ) {
                val = elem.style[ name ];
            }

            // Computed unit is not pixels. Stop here and return.
            if ( rnumnonpx.test(val) ) {
                return val;
            }

            // we need the check for style in case a browser which returns unreliable values
            // for getComputedStyle silently falls back to the reliable elem.style
            valueIsBorderBox = isBorderBox && ( jQuery.support.boxSizingReliable || val === elem.style[ name ] );

            // Normalize "", auto, and prepare for extra
            val = parseFloat( val ) || 0;
        }

        // use the active box-sizing model to add/subtract irrelevant styles
        return ( val +
            augmentWidthOrHeight(
                elem,
                name,
                extra || ( isBorderBox ? "border" : "content" ),
                valueIsBorderBox
            )
            ) + "px";
    }


// Try to determine the default display value of an element
    function css_defaultDisplay( nodeName ) {
        if ( elemdisplay[ nodeName ] ) {
            return elemdisplay[ nodeName ];
        }

        var elem = jQuery( "<" + nodeName + ">" ).appendTo( document.body ),
            display = elem.css("display");
        elem.remove();

        // If the simple way fails,
        // get element's real default display by attaching it to a temp iframe
        if ( display === "none" || display === "" ) {
            // Use the already-created iframe if possible
            iframe = document.body.appendChild(
                iframe || jQuery.extend( document.createElement("iframe"), {
                    frameBorder: 0,
                    width: 0,
                    height: 0
                })
            );

            // Create a cacheable copy of the iframe document on first call.
            // IE and Opera will allow us to reuse the iframeDoc without re-writing the fake HTML
            // document to it; WebKit & Firefox won't allow reusing the iframe document.
            if ( !iframeDoc || !iframe.createElement ) {
                iframeDoc = ( iframe.contentWindow || iframe.contentDocument ).document;
                iframeDoc.write("<!doctype html><html><body>");
                iframeDoc.close();
            }

            elem = iframeDoc.body.appendChild( iframeDoc.createElement(nodeName) );

            display = curCSS( elem, "display" );
            document.body.removeChild( iframe );
        }

        // Store the correct default display
        elemdisplay[ nodeName ] = display;

        return display;
    }

    jQuery.each([ "height", "width" ], function( i, name ) {
        jQuery.cssHooks[ name ] = {
            get: function( elem, computed, extra ) {
                if ( computed ) {
                    // certain elements can have dimension info if we invisibly show them
                    // however, it must have a current display style that would benefit from this
                    if ( elem.offsetWidth === 0 && rdisplayswap.test( curCSS( elem, "display" ) ) ) {
                        return jQuery.swap( elem, cssShow, function() {
                            return getWidthOrHeight( elem, name, extra );
                        });
                    } else {
                        return getWidthOrHeight( elem, name, extra );
                    }
                }
            },

            set: function( elem, value, extra ) {
                return setPositiveNumber( elem, value, extra ?
                    augmentWidthOrHeight(
                        elem,
                        name,
                        extra,
                        jQuery.support.boxSizing && jQuery.css( elem, "boxSizing" ) === "border-box"
                    ) : 0
                );
            }
        };
    });

    if ( !jQuery.support.opacity ) {
        jQuery.cssHooks.opacity = {
            get: function( elem, computed ) {
                // IE uses filters for opacity
                return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
                    ( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
                    computed ? "1" : "";
            },

            set: function( elem, value ) {
                var style = elem.style,
                    currentStyle = elem.currentStyle,
                    opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
                    filter = currentStyle && currentStyle.filter || style.filter || "";

                // IE has trouble with opacity if it does not have layout
                // Force it by setting the zoom level
                style.zoom = 1;

                // if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
                if ( value >= 1 && jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
                    style.removeAttribute ) {

                    // Setting style.filter to null, "" & " " still leave "filter:" in the cssText
                    // if "filter:" is present at all, clearType is disabled, we want to avoid this
                    // style.removeAttribute is IE Only, but so apparently is this code path...
                    style.removeAttribute( "filter" );

                    // if there there is no filter style applied in a css rule, we are done
                    if ( currentStyle && !currentStyle.filter ) {
                        return;
                    }
                }

                // otherwise, set new filter values
                style.filter = ralpha.test( filter ) ?
                    filter.replace( ralpha, opacity ) :
                    filter + " " + opacity;
            }
        };
    }

// These hooks cannot be added until DOM ready because the support test
// for it is not run until after DOM ready
    jQuery(function() {
        if ( !jQuery.support.reliableMarginRight ) {
            jQuery.cssHooks.marginRight = {
                get: function( elem, computed ) {
                    // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
                    // Work around by temporarily setting element display to inline-block
                    return jQuery.swap( elem, { "display": "inline-block" }, function() {
                        if ( computed ) {
                            return curCSS( elem, "marginRight" );
                        }
                    });
                }
            };
        }

        // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
        // getComputedStyle returns percent when specified for top/left/bottom/right
        // rather than make the css module depend on the offset module, we just check for it here
        if ( !jQuery.support.pixelPosition && jQuery.fn.position ) {
            jQuery.each( [ "top", "left" ], function( i, prop ) {
                jQuery.cssHooks[ prop ] = {
                    get: function( elem, computed ) {
                        if ( computed ) {
                            var ret = curCSS( elem, prop );
                            // if curCSS returns percentage, fallback to offset
                            return rnumnonpx.test( ret ) ? jQuery( elem ).position()[ prop ] + "px" : ret;
                        }
                    }
                };
            });
        }

    });

    if ( jQuery.expr && jQuery.expr.filters ) {
        jQuery.expr.filters.hidden = function( elem ) {
            return ( elem.offsetWidth === 0 && elem.offsetHeight === 0 ) || (!jQuery.support.reliableHiddenOffsets && ((elem.style && elem.style.display) || curCSS( elem, "display" )) === "none");
        };

        jQuery.expr.filters.visible = function( elem ) {
            return !jQuery.expr.filters.hidden( elem );
        };
    }

// These hooks are used by animate to expand properties
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function( prefix, suffix ) {
        jQuery.cssHooks[ prefix + suffix ] = {
            expand: function( value ) {
                var i,

                // assumes a single number if not a string
                    parts = typeof value === "string" ? value.split(" ") : [ value ],
                    expanded = {};

                for ( i = 0; i < 4; i++ ) {
                    expanded[ prefix + cssExpand[ i ] + suffix ] =
                        parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
                }

                return expanded;
            }
        };

        if ( !rmargin.test( prefix ) ) {
            jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
        }
    });
    var r20 = /%20/g,
        rbracket = /\[\]$/,
        rCRLF = /\r?\n/g,
        rinput = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        rselectTextarea = /^(?:select|textarea)/i;

    jQuery.fn.extend({
        serialize: function() {
            return jQuery.param( this.serializeArray() );
        },
        serializeArray: function() {
            return this.map(function(){
                return this.elements ? jQuery.makeArray( this.elements ) : this;
            })
                .filter(function(){
                    return this.name && !this.disabled &&
                        ( this.checked || rselectTextarea.test( this.nodeName ) ||
                            rinput.test( this.type ) );
                })
                .map(function( i, elem ){
                    var val = jQuery( this ).val();

                    return val == null ?
                        null :
                        jQuery.isArray( val ) ?
                            jQuery.map( val, function( val, i ){
                                return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
                            }) :
                        { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
                }).get();
        }
    });

//Serialize an array of form elements or a set of
//key/values into a query string
    jQuery.param = function( a, traditional ) {
        var prefix,
            s = [],
            add = function( key, value ) {
                // If value is a function, invoke it and return its value
                value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
                s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
            };

        // Set traditional to true for jQuery <= 1.3.2 behavior.
        if ( traditional === undefined ) {
            traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
        }

        // If an array was passed in, assume that it is an array of form elements.
        if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
            // Serialize the form elements
            jQuery.each( a, function() {
                add( this.name, this.value );
            });

        } else {
            // If traditional, encode the "old" way (the way 1.3.2 or older
            // did it), otherwise encode params recursively.
            for ( prefix in a ) {
                buildParams( prefix, a[ prefix ], traditional, add );
            }
        }

        // Return the resulting serialization
        return s.join( "&" ).replace( r20, "+" );
    };

    function buildParams( prefix, obj, traditional, add ) {
        var name;

        if ( jQuery.isArray( obj ) ) {
            // Serialize array item.
            jQuery.each( obj, function( i, v ) {
                if ( traditional || rbracket.test( prefix ) ) {
                    // Treat each array item as a scalar.
                    add( prefix, v );

                } else {
                    // If array item is non-scalar (array or object), encode its
                    // numeric index to resolve deserialization ambiguity issues.
                    // Note that rack (as of 1.0.0) can't currently deserialize
                    // nested arrays properly, and attempting to do so may cause
                    // a server error. Possible fixes are to modify rack's
                    // deserialization algorithm or to provide an option or flag
                    // to force array serialization to be shallow.
                    buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
                }
            });

        } else if ( !traditional && jQuery.type( obj ) === "object" ) {
            // Serialize object item.
            for ( name in obj ) {
                buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
            }

        } else {
            // Serialize scalar item.
            add( prefix, obj );
        }
    }
    var
    // Document location
        ajaxLocParts,
        ajaxLocation,

        rhash = /#.*$/,
        rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
    // #7653, #8125, #8152: local protocol detection
        rlocalProtocol = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        rnoContent = /^(?:GET|HEAD)$/,
        rprotocol = /^\/\//,
        rquery = /\?/,
        rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        rts = /([?&])_=[^&]*/,
        rurl = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,

    // Keep a copy of the old load method
        _load = jQuery.fn.load,

    /* Prefilters
     * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
     * 2) These are called:
     *    - BEFORE asking for a transport
     *    - AFTER param serialization (s.data is a string if s.processData is true)
     * 3) key is the dataType
     * 4) the catchall symbol "*" can be used
     * 5) execution will start with transport dataType and THEN continue down to "*" if needed
     */
        prefilters = {},

    /* Transports bindings
     * 1) key is the dataType
     * 2) the catchall symbol "*" can be used
     * 3) selection will start with transport dataType and THEN go to "*" if needed
     */
        transports = {},

    // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
        allTypes = ["*/"] + ["*"];

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
    try {
        ajaxLocation = location.href;
    } catch( e ) {
        // Use the href attribute of an A element
        // since IE will modify it given document.location
        ajaxLocation = document.createElement( "a" );
        ajaxLocation.href = "";
        ajaxLocation = ajaxLocation.href;
    }

// Segment location into parts
    ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
    function addToPrefiltersOrTransports( structure ) {

        // dataTypeExpression is optional and defaults to "*"
        return function( dataTypeExpression, func ) {

            if ( typeof dataTypeExpression !== "string" ) {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }

            var dataType, list, placeBefore,
                dataTypes = dataTypeExpression.toLowerCase().split( core_rspace ),
                i = 0,
                length = dataTypes.length;

            if ( jQuery.isFunction( func ) ) {
                // For each dataType in the dataTypeExpression
                for ( ; i < length; i++ ) {
                    dataType = dataTypes[ i ];
                    // We control if we're asked to add before
                    // any existing element
                    placeBefore = /^\+/.test( dataType );
                    if ( placeBefore ) {
                        dataType = dataType.substr( 1 ) || "*";
                    }
                    list = structure[ dataType ] = structure[ dataType ] || [];
                    // then we add to the structure accordingly
                    list[ placeBefore ? "unshift" : "push" ]( func );
                }
            }
        };
    }

// Base inspection function for prefilters and transports
    function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR,
                                            dataType /* internal */, inspected /* internal */ ) {

        dataType = dataType || options.dataTypes[ 0 ];
        inspected = inspected || {};

        inspected[ dataType ] = true;

        var selection,
            list = structure[ dataType ],
            i = 0,
            length = list ? list.length : 0,
            executeOnly = ( structure === prefilters );

        for ( ; i < length && ( executeOnly || !selection ); i++ ) {
            selection = list[ i ]( options, originalOptions, jqXHR );
            // If we got redirected to another dataType
            // we try there if executing only and not done already
            if ( typeof selection === "string" ) {
                if ( !executeOnly || inspected[ selection ] ) {
                    selection = undefined;
                } else {
                    options.dataTypes.unshift( selection );
                    selection = inspectPrefiltersOrTransports(
                        structure, options, originalOptions, jqXHR, selection, inspected );
                }
            }
        }
        // If we're only executing or nothing was selected
        // we try the catchall dataType if not done already
        if ( ( executeOnly || !selection ) && !inspected[ "*" ] ) {
            selection = inspectPrefiltersOrTransports(
                structure, options, originalOptions, jqXHR, "*", inspected );
        }
        // unnecessary when only executing (prefilters)
        // but it'll be ignored by the caller in that case
        return selection;
    }

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
    function ajaxExtend( target, src ) {
        var key, deep,
            flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for ( key in src ) {
            if ( src[ key ] !== undefined ) {
                ( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
            }
        }
        if ( deep ) {
            jQuery.extend( true, target, deep );
        }
    }

    jQuery.fn.load = function( url, params, callback ) {
        if ( typeof url !== "string" && _load ) {
            return _load.apply( this, arguments );
        }

        // Don't do a request if no elements are being requested
        if ( !this.length ) {
            return this;
        }

        var selector, type, response,
            self = this,
            off = url.indexOf(" ");

        if ( off >= 0 ) {
            selector = url.slice( off, url.length );
            url = url.slice( 0, off );
        }

        // If it's a function
        if ( jQuery.isFunction( params ) ) {

            // We assume that it's the callback
            callback = params;
            params = undefined;

            // Otherwise, build a param string
        } else if ( params && typeof params === "object" ) {
            type = "POST";
        }

        // Request the remote document
        jQuery.ajax({
            url: url,

            // if "type" variable is undefined, then "GET" method will be used
            type: type,
            dataType: "html",
            data: params,
            complete: function( jqXHR, status ) {
                if ( callback ) {
                    self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
                }
            }
        }).done(function( responseText ) {

                // Save response for use in complete callback
                response = arguments;

                // See if a selector was specified
                self.html( selector ?

                    // Create a dummy div to hold the results
                    jQuery("<div>")

                        // inject the contents of the document in, removing the scripts
                        // to avoid any 'Permission Denied' errors in IE
                        .append( responseText.replace( rscript, "" ) )

                        // Locate the specified elements
                        .find( selector ) :

                    // If not, just inject the full result
                    responseText );

            });

        return this;
    };

// Attach a bunch of functions for handling common AJAX events
    jQuery.each( "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split( " " ), function( i, o ){
        jQuery.fn[ o ] = function( f ){
            return this.on( o, f );
        };
    });

    jQuery.each( [ "get", "post" ], function( i, method ) {
        jQuery[ method ] = function( url, data, callback, type ) {
            // shift arguments if data argument was omitted
            if ( jQuery.isFunction( data ) ) {
                type = type || callback;
                callback = data;
                data = undefined;
            }

            return jQuery.ajax({
                type: method,
                url: url,
                data: data,
                success: callback,
                dataType: type
            });
        };
    });

    jQuery.extend({

        getScript: function( url, callback ) {
            return jQuery.get( url, undefined, callback, "script" );
        },

        getJSON: function( url, data, callback ) {
            return jQuery.get( url, data, callback, "json" );
        },

        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function( target, settings ) {
            if ( settings ) {
                // Building a settings object
                ajaxExtend( target, jQuery.ajaxSettings );
            } else {
                // Extending ajaxSettings
                settings = target;
                target = jQuery.ajaxSettings;
            }
            ajaxExtend( target, settings );
            return target;
        },

        ajaxSettings: {
            url: ajaxLocation,
            isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: true,
            async: true,
            /*
             timeout: 0,
             data: null,
             dataType: null,
             username: null,
             password: null,
             cache: null,
             throws: false,
             traditional: false,
             headers: {},
             */

            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": allTypes
            },

            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },

            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },

            // List of data converters
            // 1) key format is "source_type destination_type" (a single space in-between)
            // 2) the catchall symbol "*" can be used for source_type
            converters: {

                // Convert anything to text
                "* text": window.String,

                // Text to html (true = no transformation)
                "text html": true,

                // Evaluate text as a json expression
                "text json": jQuery.parseJSON,

                // Parse text as xml
                "text xml": jQuery.parseXML
            },

            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
                context: true,
                url: true
            }
        },

        ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
        ajaxTransport: addToPrefiltersOrTransports( transports ),

        // Main method
        ajax: function( url, options ) {

            // If url is an object, simulate pre-1.5 signature
            if ( typeof url === "object" ) {
                options = url;
                url = undefined;
            }

            // Force options to be an object
            options = options || {};

            var // ifModified key
                ifModifiedKey,
            // Response headers
                responseHeadersString,
                responseHeaders,
            // transport
                transport,
            // timeout handle
                timeoutTimer,
            // Cross-domain detection vars
                parts,
            // To know if global events are to be dispatched
                fireGlobals,
            // Loop variable
                i,
            // Create the final options object
                s = jQuery.ajaxSetup( {}, options ),
            // Callbacks context
                callbackContext = s.context || s,
            // Context for global events
            // It's the callbackContext if one was provided in the options
            // and if it's a DOM node or a jQuery collection
                globalEventContext = callbackContext !== s &&
                    ( callbackContext.nodeType || callbackContext instanceof jQuery ) ?
                    jQuery( callbackContext ) : jQuery.event,
            // Deferreds
                deferred = jQuery.Deferred(),
                completeDeferred = jQuery.Callbacks( "once memory" ),
            // Status-dependent callbacks
                statusCode = s.statusCode || {},
            // Headers (they are sent all at once)
                requestHeaders = {},
                requestHeadersNames = {},
            // The jqXHR state
                state = 0,
            // Default abort message
                strAbort = "canceled",
            // Fake xhr
                jqXHR = {

                    readyState: 0,

                    // Caches the header
                    setRequestHeader: function( name, value ) {
                        if ( !state ) {
                            var lname = name.toLowerCase();
                            name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
                            requestHeaders[ name ] = value;
                        }
                        return this;
                    },

                    // Raw string
                    getAllResponseHeaders: function() {
                        return state === 2 ? responseHeadersString : null;
                    },

                    // Builds headers hashtable if needed
                    getResponseHeader: function( key ) {
                        var match;
                        if ( state === 2 ) {
                            if ( !responseHeaders ) {
                                responseHeaders = {};
                                while( ( match = rheaders.exec( responseHeadersString ) ) ) {
                                    responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
                                }
                            }
                            match = responseHeaders[ key.toLowerCase() ];
                        }
                        return match === undefined ? null : match;
                    },

                    // Overrides response content-type header
                    overrideMimeType: function( type ) {
                        if ( !state ) {
                            s.mimeType = type;
                        }
                        return this;
                    },

                    // Cancel the request
                    abort: function( statusText ) {
                        statusText = statusText || strAbort;
                        if ( transport ) {
                            transport.abort( statusText );
                        }
                        done( 0, statusText );
                        return this;
                    }
                };

            // Callback for when everything is done
            // It is defined here because jslint complains if it is declared
            // at the end of the function (which would be more logical and readable)
            function done( status, nativeStatusText, responses, headers ) {
                var isSuccess, success, error, response, modified,
                    statusText = nativeStatusText;

                // Called once
                if ( state === 2 ) {
                    return;
                }

                // State is "done" now
                state = 2;

                // Clear timeout if it exists
                if ( timeoutTimer ) {
                    clearTimeout( timeoutTimer );
                }

                // Dereference transport for early garbage collection
                // (no matter how long the jqXHR object will be used)
                transport = undefined;

                // Cache response headers
                responseHeadersString = headers || "";

                // Set readyState
                jqXHR.readyState = status > 0 ? 4 : 0;

                // Get response data
                if ( responses ) {
                    response = ajaxHandleResponses( s, jqXHR, responses );
                }

                // If successful, handle type chaining
                if ( status >= 200 && status < 300 || status === 304 ) {

                    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                    if ( s.ifModified ) {

                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if ( modified ) {
                            jQuery.lastModified[ ifModifiedKey ] = modified;
                        }
                        modified = jqXHR.getResponseHeader("Etag");
                        if ( modified ) {
                            jQuery.etag[ ifModifiedKey ] = modified;
                        }
                    }

                    // If not modified
                    if ( status === 304 ) {

                        statusText = "notmodified";
                        isSuccess = true;

                        // If we have data
                    } else {

                        isSuccess = ajaxConvert( s, response );
                        statusText = isSuccess.state;
                        success = isSuccess.data;
                        error = isSuccess.error;
                        isSuccess = !error;
                    }
                } else {
                    // We extract error from statusText
                    // then normalize statusText and status for non-aborts
                    error = statusText;
                    if ( !statusText || status ) {
                        statusText = "error";
                        if ( status < 0 ) {
                            status = 0;
                        }
                    }
                }

                // Set data for the fake xhr object
                jqXHR.status = status;
                jqXHR.statusText = ( nativeStatusText || statusText ) + "";

                // Success/Error
                if ( isSuccess ) {
                    deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
                } else {
                    deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
                }

                // Status-dependent callbacks
                jqXHR.statusCode( statusCode );
                statusCode = undefined;

                if ( fireGlobals ) {
                    globalEventContext.trigger( "ajax" + ( isSuccess ? "Success" : "Error" ),
                        [ jqXHR, s, isSuccess ? success : error ] );
                }

                // Complete
                completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

                if ( fireGlobals ) {
                    globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
                    // Handle the global AJAX counter
                    if ( !( --jQuery.active ) ) {
                        jQuery.event.trigger( "ajaxStop" );
                    }
                }
            }

            // Attach deferreds
            deferred.promise( jqXHR );
            jqXHR.success = jqXHR.done;
            jqXHR.error = jqXHR.fail;
            jqXHR.complete = completeDeferred.add;

            // Status-dependent callbacks
            jqXHR.statusCode = function( map ) {
                if ( map ) {
                    var tmp;
                    if ( state < 2 ) {
                        for ( tmp in map ) {
                            statusCode[ tmp ] = [ statusCode[tmp], map[tmp] ];
                        }
                    } else {
                        tmp = map[ jqXHR.status ];
                        jqXHR.always( tmp );
                    }
                }
                return this;
            };

            // Remove hash character (#7531: and string promotion)
            // Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
            // We also use the url parameter if available
            s.url = ( ( url || s.url ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

            // Extract dataTypes list
            s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().split( core_rspace );

            // A cross-domain request is in order when we have a protocol:host:port mismatch
            if ( s.crossDomain == null ) {
                parts = rurl.exec( s.url.toLowerCase() ) || false;
                s.crossDomain = parts && ( parts.join(":") + ( parts[ 3 ] ? "" : parts[ 1 ] === "http:" ? 80 : 443 ) ) !==
                    ( ajaxLocParts.join(":") + ( ajaxLocParts[ 3 ] ? "" : ajaxLocParts[ 1 ] === "http:" ? 80 : 443 ) );
            }

            // Convert data if not already a string
            if ( s.data && s.processData && typeof s.data !== "string" ) {
                s.data = jQuery.param( s.data, s.traditional );
            }

            // Apply prefilters
            inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

            // If request was aborted inside a prefilter, stop there
            if ( state === 2 ) {
                return jqXHR;
            }

            // We can fire global events as of now if asked to
            fireGlobals = s.global;

            // Uppercase the type
            s.type = s.type.toUpperCase();

            // Determine if request has content
            s.hasContent = !rnoContent.test( s.type );

            // Watch for a new set of requests
            if ( fireGlobals && jQuery.active++ === 0 ) {
                jQuery.event.trigger( "ajaxStart" );
            }

            // More options handling for requests with no content
            if ( !s.hasContent ) {

                // If data is available, append data to url
                if ( s.data ) {
                    s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.data;
                    // #9682: remove data so that it's not used in an eventual retry
                    delete s.data;
                }

                // Get ifModifiedKey before adding the anti-cache parameter
                ifModifiedKey = s.url;

                // Add anti-cache in url if needed
                if ( s.cache === false ) {

                    var ts = jQuery.now(),
                    // try replacing _= if it is there
                        ret = s.url.replace( rts, "$1_=" + ts );

                    // if nothing was replaced, add timestamp to the end
                    s.url = ret + ( ( ret === s.url ) ? ( rquery.test( s.url ) ? "&" : "?" ) + "_=" + ts : "" );
                }
            }

            // Set the correct header, if data is being sent
            if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
                jqXHR.setRequestHeader( "Content-Type", s.contentType );
            }

            // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
            if ( s.ifModified ) {
                ifModifiedKey = ifModifiedKey || s.url;
                if ( jQuery.lastModified[ ifModifiedKey ] ) {
                    jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ ifModifiedKey ] );
                }
                if ( jQuery.etag[ ifModifiedKey ] ) {
                    jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ ifModifiedKey ] );
                }
            }

            // Set the Accepts header for the server, depending on the dataType
            jqXHR.setRequestHeader(
                "Accept",
                s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
                    s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
                    s.accepts[ "*" ]
            );

            // Check for headers option
            for ( i in s.headers ) {
                jqXHR.setRequestHeader( i, s.headers[ i ] );
            }

            // Allow custom headers/mimetypes and early abort
            if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
                // Abort if not done already and return
                return jqXHR.abort();

            }

            // aborting is no longer a cancellation
            strAbort = "abort";

            // Install callbacks on deferreds
            for ( i in { success: 1, error: 1, complete: 1 } ) {
                jqXHR[ i ]( s[ i ] );
            }

            // Get transport
            transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

            // If no transport, we auto-abort
            if ( !transport ) {
                done( -1, "No Transport" );
            } else {
                jqXHR.readyState = 1;
                // Send global event
                if ( fireGlobals ) {
                    globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
                }
                // Timeout
                if ( s.async && s.timeout > 0 ) {
                    timeoutTimer = setTimeout( function(){
                        jqXHR.abort( "timeout" );
                    }, s.timeout );
                }

                try {
                    state = 1;
                    transport.send( requestHeaders, done );
                } catch (e) {
                    // Propagate exception as error if not done
                    if ( state < 2 ) {
                        done( -1, e );
                        // Simply rethrow otherwise
                    } else {
                        throw e;
                    }
                }
            }

            return jqXHR;
        },

        // Counter for holding the number of active queries
        active: 0,

        // Last-Modified header cache for next request
        lastModified: {},
        etag: {}

    });

    /* Handles responses to an ajax request:
     * - sets all responseXXX fields accordingly
     * - finds the right dataType (mediates between content-type and expected dataType)
     * - returns the corresponding response
     */
    function ajaxHandleResponses( s, jqXHR, responses ) {

        var ct, type, finalDataType, firstDataType,
            contents = s.contents,
            dataTypes = s.dataTypes,
            responseFields = s.responseFields;

        // Fill responseXXX fields
        for ( type in responseFields ) {
            if ( type in responses ) {
                jqXHR[ responseFields[type] ] = responses[ type ];
            }
        }

        // Remove auto dataType and get content-type in the process
        while( dataTypes[ 0 ] === "*" ) {
            dataTypes.shift();
            if ( ct === undefined ) {
                ct = s.mimeType || jqXHR.getResponseHeader( "content-type" );
            }
        }

        // Check if we're dealing with a known content-type
        if ( ct ) {
            for ( type in contents ) {
                if ( contents[ type ] && contents[ type ].test( ct ) ) {
                    dataTypes.unshift( type );
                    break;
                }
            }
        }

        // Check to see if we have a response for the expected dataType
        if ( dataTypes[ 0 ] in responses ) {
            finalDataType = dataTypes[ 0 ];
        } else {
            // Try convertible dataTypes
            for ( type in responses ) {
                if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
                    finalDataType = type;
                    break;
                }
                if ( !firstDataType ) {
                    firstDataType = type;
                }
            }
            // Or just use first one
            finalDataType = finalDataType || firstDataType;
        }

        // If we found a dataType
        // We add the dataType to the list if needed
        // and return the corresponding response
        if ( finalDataType ) {
            if ( finalDataType !== dataTypes[ 0 ] ) {
                dataTypes.unshift( finalDataType );
            }
            return responses[ finalDataType ];
        }
    }

// Chain conversions given the request and the original response
    function ajaxConvert( s, response ) {

        var conv, conv2, current, tmp,
        // Work with a copy of dataTypes in case we need to modify it for conversion
            dataTypes = s.dataTypes.slice(),
            prev = dataTypes[ 0 ],
            converters = {},
            i = 0;

        // Apply the dataFilter if provided
        if ( s.dataFilter ) {
            response = s.dataFilter( response, s.dataType );
        }

        // Create converters map with lowercased keys
        if ( dataTypes[ 1 ] ) {
            for ( conv in s.converters ) {
                converters[ conv.toLowerCase() ] = s.converters[ conv ];
            }
        }

        // Convert to each sequential dataType, tolerating list modification
        for ( ; (current = dataTypes[++i]); ) {

            // There's only work to do if current dataType is non-auto
            if ( current !== "*" ) {

                // Convert response if prev dataType is non-auto and differs from current
                if ( prev !== "*" && prev !== current ) {

                    // Seek a direct converter
                    conv = converters[ prev + " " + current ] || converters[ "* " + current ];

                    // If none found, seek a pair
                    if ( !conv ) {
                        for ( conv2 in converters ) {

                            // If conv2 outputs current
                            tmp = conv2.split(" ");
                            if ( tmp[ 1 ] === current ) {

                                // If prev can be converted to accepted input
                                conv = converters[ prev + " " + tmp[ 0 ] ] ||
                                    converters[ "* " + tmp[ 0 ] ];
                                if ( conv ) {
                                    // Condense equivalence converters
                                    if ( conv === true ) {
                                        conv = converters[ conv2 ];

                                        // Otherwise, insert the intermediate dataType
                                    } else if ( converters[ conv2 ] !== true ) {
                                        current = tmp[ 0 ];
                                        dataTypes.splice( i--, 0, current );
                                    }

                                    break;
                                }
                            }
                        }
                    }

                    // Apply converter (if not an equivalence)
                    if ( conv !== true ) {

                        // Unless errors are allowed to bubble, catch and return them
                        if ( conv && s["throws"] ) {
                            response = conv( response );
                        } else {
                            try {
                                response = conv( response );
                            } catch ( e ) {
                                return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
                            }
                        }
                    }
                }

                // Update prev for next iteration
                prev = current;
            }
        }

        return { state: "success", data: response };
    }
    var oldCallbacks = [],
        rquestion = /\?/,
        rjsonp = /(=)\?(?=&|$)|\?\?/,
        nonce = jQuery.now();

// Default jsonp settings
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
            this[ callback ] = true;
            return callback;
        }
    });

// Detect, normalize options and install callbacks for jsonp requests
    jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

        var callbackName, overwritten, responseContainer,
            data = s.data,
            url = s.url,
            hasCallback = s.jsonp !== false,
            replaceInUrl = hasCallback && rjsonp.test( url ),
            replaceInData = hasCallback && !replaceInUrl && typeof data === "string" &&
                !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") &&
                rjsonp.test( data );

        // Handle iff the expected data type is "jsonp" or we have a parameter to set
        if ( s.dataTypes[ 0 ] === "jsonp" || replaceInUrl || replaceInData ) {

            // Get callback name, remembering preexisting value associated with it
            callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
                s.jsonpCallback() :
                s.jsonpCallback;
            overwritten = window[ callbackName ];

            // Insert callback into url or form data
            if ( replaceInUrl ) {
                s.url = url.replace( rjsonp, "$1" + callbackName );
            } else if ( replaceInData ) {
                s.data = data.replace( rjsonp, "$1" + callbackName );
            } else if ( hasCallback ) {
                s.url += ( rquestion.test( url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
            }

            // Use data converter to retrieve json after script execution
            s.converters["script json"] = function() {
                if ( !responseContainer ) {
                    jQuery.error( callbackName + " was not called" );
                }
                return responseContainer[ 0 ];
            };

            // force json dataType
            s.dataTypes[ 0 ] = "json";

            // Install callback
            window[ callbackName ] = function() {
                responseContainer = arguments;
            };

            // Clean-up function (fires after converters)
            jqXHR.always(function() {
                // Restore preexisting value
                window[ callbackName ] = overwritten;

                // Save back as free
                if ( s[ callbackName ] ) {
                    // make sure that re-using the options doesn't screw things around
                    s.jsonpCallback = originalSettings.jsonpCallback;

                    // save the callback name for future use
                    oldCallbacks.push( callbackName );
                }

                // Call if it was a function and we have a response
                if ( responseContainer && jQuery.isFunction( overwritten ) ) {
                    overwritten( responseContainer[ 0 ] );
                }

                responseContainer = overwritten = undefined;
            });

            // Delegate to script
            return "script";
        }
    });
// Install script dataType
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function( text ) {
                jQuery.globalEval( text );
                return text;
            }
        }
    });

// Handle cache's special case and global
    jQuery.ajaxPrefilter( "script", function( s ) {
        if ( s.cache === undefined ) {
            s.cache = false;
        }
        if ( s.crossDomain ) {
            s.type = "GET";
            s.global = false;
        }
    });

// Bind script tag hack transport
    jQuery.ajaxTransport( "script", function(s) {

        // This transport only deals with cross domain requests
        if ( s.crossDomain ) {

            var script,
                head = document.head || document.getElementsByTagName( "head" )[0] || document.documentElement;

            return {

                send: function( _, callback ) {

                    script = document.createElement( "script" );

                    script.async = "async";

                    if ( s.scriptCharset ) {
                        script.charset = s.scriptCharset;
                    }

                    script.src = s.url;

                    // Attach handlers for all browsers
                    script.onload = script.onreadystatechange = function( _, isAbort ) {

                        if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

                            // Handle memory leak in IE
                            script.onload = script.onreadystatechange = null;

                            // Remove the script
                            if ( head && script.parentNode ) {
                                head.removeChild( script );
                            }

                            // Dereference the script
                            script = undefined;

                            // Callback if not abort
                            if ( !isAbort ) {
                                callback( 200, "success" );
                            }
                        }
                    };
                    // Use insertBefore instead of appendChild  to circumvent an IE6 bug.
                    // This arises when a base node is used (#2709 and #4378).
                    head.insertBefore( script, head.firstChild );
                },

                abort: function() {
                    if ( script ) {
                        script.onload( 0, 1 );
                    }
                }
            };
        }
    });
    var xhrCallbacks,
    // #5280: Internet Explorer will keep connections alive if we don't abort on unload
        xhrOnUnloadAbort = window.ActiveXObject ? function() {
            // Abort all pending requests
            for ( var key in xhrCallbacks ) {
                xhrCallbacks[ key ]( 0, 1 );
            }
        } : false,
        xhrId = 0;

// Functions to create xhrs
    function createStandardXHR() {
        try {
            return new window.XMLHttpRequest();
        } catch( e ) {}
    }

    function createActiveXHR() {
        try {
            return new window.ActiveXObject( "Microsoft.XMLHTTP" );
        } catch( e ) {}
    }

// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
    jQuery.ajaxSettings.xhr = window.ActiveXObject ?
        /* Microsoft failed to properly
         * implement the XMLHttpRequest in IE7 (can't request local files),
         * so we use the ActiveXObject when it is available
         * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
         * we need a fallback.
         */
        function() {
            return !this.isLocal && createStandardXHR() || createActiveXHR();
        } :
        // For all other browsers, use the standard XMLHttpRequest object
        createStandardXHR;

// Determine support properties
    (function( xhr ) {
        jQuery.extend( jQuery.support, {
            ajax: !!xhr,
            cors: !!xhr && ( "withCredentials" in xhr )
        });
    })( jQuery.ajaxSettings.xhr() );

// Create transport if the browser can provide an xhr
    if ( jQuery.support.ajax ) {

        jQuery.ajaxTransport(function( s ) {
            // Cross domain only allowed if supported through XMLHttpRequest
            if ( !s.crossDomain || jQuery.support.cors ) {

                var callback;

                return {
                    send: function( headers, complete ) {

                        // Get a new xhr
                        var handle, i,
                            xhr = s.xhr();

                        // Open the socket
                        // Passing null username, generates a login popup on Opera (#2865)
                        if ( s.username ) {
                            xhr.open( s.type, s.url, s.async, s.username, s.password );
                        } else {
                            xhr.open( s.type, s.url, s.async );
                        }

                        // Apply custom fields if provided
                        if ( s.xhrFields ) {
                            for ( i in s.xhrFields ) {
                                xhr[ i ] = s.xhrFields[ i ];
                            }
                        }

                        // Override mime type if needed
                        if ( s.mimeType && xhr.overrideMimeType ) {
                            xhr.overrideMimeType( s.mimeType );
                        }

                        // X-Requested-With header
                        // For cross-domain requests, seeing as conditions for a preflight are
                        // akin to a jigsaw puzzle, we simply never set it to be sure.
                        // (it can always be set on a per-request basis or even using ajaxSetup)
                        // For same-domain requests, won't change header if already provided.
                        if ( !s.crossDomain && !headers["X-Requested-With"] ) {
                            headers[ "X-Requested-With" ] = "XMLHttpRequest";
                        }

                        // Need an extra try/catch for cross domain requests in Firefox 3
                        try {
                            for ( i in headers ) {
                                xhr.setRequestHeader( i, headers[ i ] );
                            }
                        } catch( _ ) {}

                        // Do send the request
                        // This may raise an exception which is actually
                        // handled in jQuery.ajax (so no try/catch here)
                        xhr.send( ( s.hasContent && s.data ) || null );

                        // Listener
                        callback = function( _, isAbort ) {

                            var status,
                                statusText,
                                responseHeaders,
                                responses,
                                xml;

                            // Firefox throws exceptions when accessing properties
                            // of an xhr when a network error occurred
                            // http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
                            try {

                                // Was never called and is aborted or complete
                                if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

                                    // Only called once
                                    callback = undefined;

                                    // Do not keep as active anymore
                                    if ( handle ) {
                                        xhr.onreadystatechange = jQuery.noop;
                                        if ( xhrOnUnloadAbort ) {
                                            delete xhrCallbacks[ handle ];
                                        }
                                    }

                                    // If it's an abort
                                    if ( isAbort ) {
                                        // Abort it manually if needed
                                        if ( xhr.readyState !== 4 ) {
                                            xhr.abort();
                                        }
                                    } else {
                                        status = xhr.status;
                                        responseHeaders = xhr.getAllResponseHeaders();
                                        responses = {};
                                        xml = xhr.responseXML;

                                        // Construct response list
                                        if ( xml && xml.documentElement /* #4958 */ ) {
                                            responses.xml = xml;
                                        }

                                        // When requesting binary data, IE6-9 will throw an exception
                                        // on any attempt to access responseText (#11426)
                                        try {
                                            responses.text = xhr.responseText;
                                        } catch( _ ) {
                                        }

                                        // Firefox throws an exception when accessing
                                        // statusText for faulty cross-domain requests
                                        try {
                                            statusText = xhr.statusText;
                                        } catch( e ) {
                                            // We normalize with Webkit giving an empty statusText
                                            statusText = "";
                                        }

                                        // Filter status for non standard behaviors

                                        // If the request is local and we have data: assume a success
                                        // (success with no data won't get notified, that's the best we
                                        // can do given current implementations)
                                        if ( !status && s.isLocal && !s.crossDomain ) {
                                            status = responses.text ? 200 : 404;
                                            // IE - #1450: sometimes returns 1223 when it should be 204
                                        } else if ( status === 1223 ) {
                                            status = 204;
                                        }
                                    }
                                }
                            } catch( firefoxAccessException ) {
                                if ( !isAbort ) {
                                    complete( -1, firefoxAccessException );
                                }
                            }

                            // Call complete if needed
                            if ( responses ) {
                                complete( status, statusText, responses, responseHeaders );
                            }
                        };

                        if ( !s.async ) {
                            // if we're in sync mode we fire the callback
                            callback();
                        } else if ( xhr.readyState === 4 ) {
                            // (IE6 & IE7) if it's in cache and has been
                            // retrieved directly we need to fire the callback
                            setTimeout( callback, 0 );
                        } else {
                            handle = ++xhrId;
                            if ( xhrOnUnloadAbort ) {
                                // Create the active xhrs callbacks list if needed
                                // and attach the unload handler
                                if ( !xhrCallbacks ) {
                                    xhrCallbacks = {};
                                    jQuery( window ).unload( xhrOnUnloadAbort );
                                }
                                // Add to list of active xhrs callbacks
                                xhrCallbacks[ handle ] = callback;
                            }
                            xhr.onreadystatechange = callback;
                        }
                    },

                    abort: function() {
                        if ( callback ) {
                            callback(0,1);
                        }
                    }
                };
            }
        });
    }
    var fxNow, timerId,
        rfxtypes = /^(?:toggle|show|hide)$/,
        rfxnum = new RegExp( "^(?:([-+])=|)(" + core_pnum + ")([a-z%]*)$", "i" ),
        rrun = /queueHooks$/,
        animationPrefilters = [ defaultPrefilter ],
        tweeners = {
            "*": [function( prop, value ) {
                var end, unit,
                    tween = this.createTween( prop, value ),
                    parts = rfxnum.exec( value ),
                    target = tween.cur(),
                    start = +target || 0,
                    scale = 1,
                    maxIterations = 20;

                if ( parts ) {
                    end = +parts[2];
                    unit = parts[3] || ( jQuery.cssNumber[ prop ] ? "" : "px" );

                    // We need to compute starting value
                    if ( unit !== "px" && start ) {
                        // Iteratively approximate from a nonzero starting point
                        // Prefer the current property, because this process will be trivial if it uses the same units
                        // Fallback to end or a simple constant
                        start = jQuery.css( tween.elem, prop, true ) || end || 1;

                        do {
                            // If previous iteration zeroed out, double until we get *something*
                            // Use a string for doubling factor so we don't accidentally see scale as unchanged below
                            scale = scale || ".5";

                            // Adjust and apply
                            start = start / scale;
                            jQuery.style( tween.elem, prop, start + unit );

                            // Update scale, tolerating zero or NaN from tween.cur()
                            // And breaking the loop if scale is unchanged or perfect, or if we've just had enough
                        } while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
                    }

                    tween.unit = unit;
                    tween.start = start;
                    // If a +=/-= token was provided, we're doing a relative animation
                    tween.end = parts[1] ? start + ( parts[1] + 1 ) * end : end;
                }
                return tween;
            }]
        };

// Animations created synchronously will run synchronously
    function createFxNow() {
        setTimeout(function() {
            fxNow = undefined;
        }, 0 );
        return ( fxNow = jQuery.now() );
    }

    function createTweens( animation, props ) {
        jQuery.each( props, function( prop, value ) {
            var collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
                index = 0,
                length = collection.length;
            for ( ; index < length; index++ ) {
                if ( collection[ index ].call( animation, prop, value ) ) {

                    // we're done with this property
                    return;
                }
            }
        });
    }

    function Animation( elem, properties, options ) {
        var result,
            index = 0,
            tweenerIndex = 0,
            length = animationPrefilters.length,
            deferred = jQuery.Deferred().always( function() {
                // don't match elem in the :animated selector
                delete tick.elem;
            }),
            tick = function() {
                var currentTime = fxNow || createFxNow(),
                    remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
                    percent = 1 - ( remaining / animation.duration || 0 ),
                    index = 0,
                    length = animation.tweens.length;

                for ( ; index < length ; index++ ) {
                    animation.tweens[ index ].run( percent );
                }

                deferred.notifyWith( elem, [ animation, percent, remaining ]);

                if ( percent < 1 && length ) {
                    return remaining;
                } else {
                    deferred.resolveWith( elem, [ animation ] );
                    return false;
                }
            },
            animation = deferred.promise({
                elem: elem,
                props: jQuery.extend( {}, properties ),
                opts: jQuery.extend( true, { specialEasing: {} }, options ),
                originalProperties: properties,
                originalOptions: options,
                startTime: fxNow || createFxNow(),
                duration: options.duration,
                tweens: [],
                createTween: function( prop, end, easing ) {
                    var tween = jQuery.Tween( elem, animation.opts, prop, end,
                        animation.opts.specialEasing[ prop ] || animation.opts.easing );
                    animation.tweens.push( tween );
                    return tween;
                },
                stop: function( gotoEnd ) {
                    var index = 0,
                    // if we are going to the end, we want to run all the tweens
                    // otherwise we skip this part
                        length = gotoEnd ? animation.tweens.length : 0;

                    for ( ; index < length ; index++ ) {
                        animation.tweens[ index ].run( 1 );
                    }

                    // resolve when we played the last frame
                    // otherwise, reject
                    if ( gotoEnd ) {
                        deferred.resolveWith( elem, [ animation, gotoEnd ] );
                    } else {
                        deferred.rejectWith( elem, [ animation, gotoEnd ] );
                    }
                    return this;
                }
            }),
            props = animation.props;

        propFilter( props, animation.opts.specialEasing );

        for ( ; index < length ; index++ ) {
            result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
            if ( result ) {
                return result;
            }
        }

        createTweens( animation, props );

        if ( jQuery.isFunction( animation.opts.start ) ) {
            animation.opts.start.call( elem, animation );
        }

        jQuery.fx.timer(
            jQuery.extend( tick, {
                anim: animation,
                queue: animation.opts.queue,
                elem: elem
            })
        );

        // attach callbacks from options
        return animation.progress( animation.opts.progress )
            .done( animation.opts.done, animation.opts.complete )
            .fail( animation.opts.fail )
            .always( animation.opts.always );
    }

    function propFilter( props, specialEasing ) {
        var index, name, easing, value, hooks;

        // camelCase, specialEasing and expand cssHook pass
        for ( index in props ) {
            name = jQuery.camelCase( index );
            easing = specialEasing[ name ];
            value = props[ index ];
            if ( jQuery.isArray( value ) ) {
                easing = value[ 1 ];
                value = props[ index ] = value[ 0 ];
            }

            if ( index !== name ) {
                props[ name ] = value;
                delete props[ index ];
            }

            hooks = jQuery.cssHooks[ name ];
            if ( hooks && "expand" in hooks ) {
                value = hooks.expand( value );
                delete props[ name ];

                // not quite $.extend, this wont overwrite keys already present.
                // also - reusing 'index' from above because we have the correct "name"
                for ( index in value ) {
                    if ( !( index in props ) ) {
                        props[ index ] = value[ index ];
                        specialEasing[ index ] = easing;
                    }
                }
            } else {
                specialEasing[ name ] = easing;
            }
        }
    }

    jQuery.Animation = jQuery.extend( Animation, {

        tweener: function( props, callback ) {
            if ( jQuery.isFunction( props ) ) {
                callback = props;
                props = [ "*" ];
            } else {
                props = props.split(" ");
            }

            var prop,
                index = 0,
                length = props.length;

            for ( ; index < length ; index++ ) {
                prop = props[ index ];
                tweeners[ prop ] = tweeners[ prop ] || [];
                tweeners[ prop ].unshift( callback );
            }
        },

        prefilter: function( callback, prepend ) {
            if ( prepend ) {
                animationPrefilters.unshift( callback );
            } else {
                animationPrefilters.push( callback );
            }
        }
    });

    function defaultPrefilter( elem, props, opts ) {
        var index, prop, value, length, dataShow, tween, hooks, oldfire,
            anim = this,
            style = elem.style,
            orig = {},
            handled = [],
            hidden = elem.nodeType && isHidden( elem );

        // handle queue: false promises
        if ( !opts.queue ) {
            hooks = jQuery._queueHooks( elem, "fx" );
            if ( hooks.unqueued == null ) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function() {
                    if ( !hooks.unqueued ) {
                        oldfire();
                    }
                };
            }
            hooks.unqueued++;

            anim.always(function() {
                // doing this makes sure that the complete handler will be called
                // before this completes
                anim.always(function() {
                    hooks.unqueued--;
                    if ( !jQuery.queue( elem, "fx" ).length ) {
                        hooks.empty.fire();
                    }
                });
            });
        }

        // height/width overflow pass
        if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
            // Make sure that nothing sneaks out
            // Record all 3 overflow attributes because IE does not
            // change the overflow attribute when overflowX and
            // overflowY are set to the same value
            opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

            // Set display property to inline-block for height/width
            // animations on inline elements that are having width/height animated
            if ( jQuery.css( elem, "display" ) === "inline" &&
                jQuery.css( elem, "float" ) === "none" ) {

                // inline-level elements accept inline-block;
                // block-level elements need to be inline with layout
                if ( !jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay( elem.nodeName ) === "inline" ) {
                    style.display = "inline-block";

                } else {
                    style.zoom = 1;
                }
            }
        }

        if ( opts.overflow ) {
            style.overflow = "hidden";
            if ( !jQuery.support.shrinkWrapBlocks ) {
                anim.done(function() {
                    style.overflow = opts.overflow[ 0 ];
                    style.overflowX = opts.overflow[ 1 ];
                    style.overflowY = opts.overflow[ 2 ];
                });
            }
        }


        // show/hide pass
        for ( index in props ) {
            value = props[ index ];
            if ( rfxtypes.exec( value ) ) {
                delete props[ index ];
                if ( value === ( hidden ? "hide" : "show" ) ) {
                    continue;
                }
                handled.push( index );
            }
        }

        length = handled.length;
        if ( length ) {
            dataShow = jQuery._data( elem, "fxshow" ) || jQuery._data( elem, "fxshow", {} );
            if ( hidden ) {
                jQuery( elem ).show();
            } else {
                anim.done(function() {
                    jQuery( elem ).hide();
                });
            }
            anim.done(function() {
                var prop;
                jQuery.removeData( elem, "fxshow", true );
                for ( prop in orig ) {
                    jQuery.style( elem, prop, orig[ prop ] );
                }
            });
            for ( index = 0 ; index < length ; index++ ) {
                prop = handled[ index ];
                tween = anim.createTween( prop, hidden ? dataShow[ prop ] : 0 );
                orig[ prop ] = dataShow[ prop ] || jQuery.style( elem, prop );

                if ( !( prop in dataShow ) ) {
                    dataShow[ prop ] = tween.start;
                    if ( hidden ) {
                        tween.end = tween.start;
                        tween.start = prop === "width" || prop === "height" ? 1 : 0;
                    }
                }
            }
        }
    }

    function Tween( elem, options, prop, end, easing ) {
        return new Tween.prototype.init( elem, options, prop, end, easing );
    }
    jQuery.Tween = Tween;

    Tween.prototype = {
        constructor: Tween,
        init: function( elem, options, prop, end, easing, unit ) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || "swing";
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
        },
        cur: function() {
            var hooks = Tween.propHooks[ this.prop ];

            return hooks && hooks.get ?
                hooks.get( this ) :
                Tween.propHooks._default.get( this );
        },
        run: function( percent ) {
            var eased,
                hooks = Tween.propHooks[ this.prop ];

            if ( this.options.duration ) {
                this.pos = eased = jQuery.easing[ this.easing ](
                    percent, this.options.duration * percent, 0, 1, this.options.duration
                );
            } else {
                this.pos = eased = percent;
            }
            this.now = ( this.end - this.start ) * eased + this.start;

            if ( this.options.step ) {
                this.options.step.call( this.elem, this.now, this );
            }

            if ( hooks && hooks.set ) {
                hooks.set( this );
            } else {
                Tween.propHooks._default.set( this );
            }
            return this;
        }
    };

    Tween.prototype.init.prototype = Tween.prototype;

    Tween.propHooks = {
        _default: {
            get: function( tween ) {
                var result;

                if ( tween.elem[ tween.prop ] != null &&
                    (!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
                    return tween.elem[ tween.prop ];
                }

                // passing any value as a 4th parameter to .css will automatically
                // attempt a parseFloat and fallback to a string if the parse fails
                // so, simple values such as "10px" are parsed to Float.
                // complex values such as "rotate(1rad)" are returned as is.
                result = jQuery.css( tween.elem, tween.prop, false, "" );
                // Empty strings, null, undefined and "auto" are converted to 0.
                return !result || result === "auto" ? 0 : result;
            },
            set: function( tween ) {
                // use step hook for back compat - use cssHook if its there - use .style if its
                // available and use plain properties where available
                if ( jQuery.fx.step[ tween.prop ] ) {
                    jQuery.fx.step[ tween.prop ]( tween );
                } else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
                    jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
                } else {
                    tween.elem[ tween.prop ] = tween.now;
                }
            }
        }
    };

// Remove in 2.0 - this supports IE8's panic based approach
// to setting things on disconnected nodes

    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function( tween ) {
            if ( tween.elem.nodeType && tween.elem.parentNode ) {
                tween.elem[ tween.prop ] = tween.now;
            }
        }
    };

    jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
        var cssFn = jQuery.fn[ name ];
        jQuery.fn[ name ] = function( speed, easing, callback ) {
            return speed == null || typeof speed === "boolean" ||
                // special check for .toggle( handler, handler, ... )
                ( !i && jQuery.isFunction( speed ) && jQuery.isFunction( easing ) ) ?
                cssFn.apply( this, arguments ) :
                this.animate( genFx( name, true ), speed, easing, callback );
        };
    });

    jQuery.fn.extend({
        fadeTo: function( speed, to, easing, callback ) {

            // show any hidden elements after setting opacity to 0
            return this.filter( isHidden ).css( "opacity", 0 ).show()

                // animate to the value specified
                .end().animate({ opacity: to }, speed, easing, callback );
        },
        animate: function( prop, speed, easing, callback ) {
            var empty = jQuery.isEmptyObject( prop ),
                optall = jQuery.speed( speed, easing, callback ),
                doAnimation = function() {
                    // Operate on a copy of prop so per-property easing won't be lost
                    var anim = Animation( this, jQuery.extend( {}, prop ), optall );

                    // Empty animations resolve immediately
                    if ( empty ) {
                        anim.stop( true );
                    }
                };

            return empty || optall.queue === false ?
                this.each( doAnimation ) :
                this.queue( optall.queue, doAnimation );
        },
        stop: function( type, clearQueue, gotoEnd ) {
            var stopQueue = function( hooks ) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop( gotoEnd );
            };

            if ( typeof type !== "string" ) {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined;
            }
            if ( clearQueue && type !== false ) {
                this.queue( type || "fx", [] );
            }

            return this.each(function() {
                var dequeue = true,
                    index = type != null && type + "queueHooks",
                    timers = jQuery.timers,
                    data = jQuery._data( this );

                if ( index ) {
                    if ( data[ index ] && data[ index ].stop ) {
                        stopQueue( data[ index ] );
                    }
                } else {
                    for ( index in data ) {
                        if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
                            stopQueue( data[ index ] );
                        }
                    }
                }

                for ( index = timers.length; index--; ) {
                    if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
                        timers[ index ].anim.stop( gotoEnd );
                        dequeue = false;
                        timers.splice( index, 1 );
                    }
                }

                // start the next in the queue if the last step wasn't forced
                // timers currently will call their complete callbacks, which will dequeue
                // but only if they were gotoEnd
                if ( dequeue || !gotoEnd ) {
                    jQuery.dequeue( this, type );
                }
            });
        }
    });

// Generate parameters to create a standard animation
    function genFx( type, includeWidth ) {
        var which,
            attrs = { height: type },
            i = 0;

        // if we include width, step value is 1 to do all cssExpand values,
        // if we don't include width, step value is 2 to skip over Left and Right
        includeWidth = includeWidth? 1 : 0;
        for( ; i < 4 ; i += 2 - includeWidth ) {
            which = cssExpand[ i ];
            attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
        }

        if ( includeWidth ) {
            attrs.opacity = attrs.width = type;
        }

        return attrs;
    }

// Generate shortcuts for custom animations
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
    }, function( name, props ) {
        jQuery.fn[ name ] = function( speed, easing, callback ) {
            return this.animate( props, speed, easing, callback );
        };
    });

    jQuery.speed = function( speed, easing, fn ) {
        var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
            complete: fn || !fn && easing ||
                jQuery.isFunction( speed ) && speed,
            duration: speed,
            easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
        };

        opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
            opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

        // normalize opt.queue - true/undefined/null -> "fx"
        if ( opt.queue == null || opt.queue === true ) {
            opt.queue = "fx";
        }

        // Queueing
        opt.old = opt.complete;

        opt.complete = function() {
            if ( jQuery.isFunction( opt.old ) ) {
                opt.old.call( this );
            }

            if ( opt.queue ) {
                jQuery.dequeue( this, opt.queue );
            }
        };

        return opt;
    };

    jQuery.easing = {
        linear: function( p ) {
            return p;
        },
        swing: function( p ) {
            return 0.5 - Math.cos( p*Math.PI ) / 2;
        }
    };

    jQuery.timers = [];
    jQuery.fx = Tween.prototype.init;
    jQuery.fx.tick = function() {
        var timer,
            timers = jQuery.timers,
            i = 0;

        for ( ; i < timers.length; i++ ) {
            timer = timers[ i ];
            // Checks the timer has not already been removed
            if ( !timer() && timers[ i ] === timer ) {
                timers.splice( i--, 1 );
            }
        }

        if ( !timers.length ) {
            jQuery.fx.stop();
        }
    };

    jQuery.fx.timer = function( timer ) {
        if ( timer() && jQuery.timers.push( timer ) && !timerId ) {
            timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
        }
    };

    jQuery.fx.interval = 13;

    jQuery.fx.stop = function() {
        clearInterval( timerId );
        timerId = null;
    };

    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
    };

// Back Compat <1.8 extension point
    jQuery.fx.step = {};

    if ( jQuery.expr && jQuery.expr.filters ) {
        jQuery.expr.filters.animated = function( elem ) {
            return jQuery.grep(jQuery.timers, function( fn ) {
                return elem === fn.elem;
            }).length;
        };
    }
    var rroot = /^(?:body|html)$/i;

    jQuery.fn.offset = function( options ) {
        if ( arguments.length ) {
            return options === undefined ?
                this :
                this.each(function( i ) {
                    jQuery.offset.setOffset( this, options, i );
                });
        }

        var docElem, body, win, clientTop, clientLeft, scrollTop, scrollLeft,
            box = { top: 0, left: 0 },
            elem = this[ 0 ],
            doc = elem && elem.ownerDocument;

        if ( !doc ) {
            return;
        }

        if ( (body = doc.body) === elem ) {
            return jQuery.offset.bodyOffset( elem );
        }

        docElem = doc.documentElement;

        // Make sure it's not a disconnected DOM node
        if ( !jQuery.contains( docElem, elem ) ) {
            return box;
        }

        // If we don't have gBCR, just use 0,0 rather than error
        // BlackBerry 5, iOS 3 (original iPhone)
        if ( typeof elem.getBoundingClientRect !== "undefined" ) {
            box = elem.getBoundingClientRect();
        }
        win = getWindow( doc );
        clientTop  = docElem.clientTop  || body.clientTop  || 0;
        clientLeft = docElem.clientLeft || body.clientLeft || 0;
        scrollTop  = win.pageYOffset || docElem.scrollTop;
        scrollLeft = win.pageXOffset || docElem.scrollLeft;
        return {
            top: box.top  + scrollTop  - clientTop,
            left: box.left + scrollLeft - clientLeft
        };
    };

    jQuery.offset = {

        bodyOffset: function( body ) {
            var top = body.offsetTop,
                left = body.offsetLeft;

            if ( jQuery.support.doesNotIncludeMarginInBodyOffset ) {
                top  += parseFloat( jQuery.css(body, "marginTop") ) || 0;
                left += parseFloat( jQuery.css(body, "marginLeft") ) || 0;
            }

            return { top: top, left: left };
        },

        setOffset: function( elem, options, i ) {
            var position = jQuery.css( elem, "position" );

            // set position first, in-case top/left are set even on static elem
            if ( position === "static" ) {
                elem.style.position = "relative";
            }

            var curElem = jQuery( elem ),
                curOffset = curElem.offset(),
                curCSSTop = jQuery.css( elem, "top" ),
                curCSSLeft = jQuery.css( elem, "left" ),
                calculatePosition = ( position === "absolute" || position === "fixed" ) && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
                props = {}, curPosition = {}, curTop, curLeft;

            // need to be able to calculate position if either top or left is auto and position is either absolute or fixed
            if ( calculatePosition ) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;
            } else {
                curTop = parseFloat( curCSSTop ) || 0;
                curLeft = parseFloat( curCSSLeft ) || 0;
            }

            if ( jQuery.isFunction( options ) ) {
                options = options.call( elem, i, curOffset );
            }

            if ( options.top != null ) {
                props.top = ( options.top - curOffset.top ) + curTop;
            }
            if ( options.left != null ) {
                props.left = ( options.left - curOffset.left ) + curLeft;
            }

            if ( "using" in options ) {
                options.using.call( elem, props );
            } else {
                curElem.css( props );
            }
        }
    };


    jQuery.fn.extend({

        position: function() {
            if ( !this[0] ) {
                return;
            }

            var elem = this[0],

            // Get *real* offsetParent
                offsetParent = this.offsetParent(),

            // Get correct offsets
                offset       = this.offset(),
                parentOffset = rroot.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset();

            // Subtract element margins
            // note: when an element has margin: auto the offsetLeft and marginLeft
            // are the same in Safari causing offset.left to incorrectly be 0
            offset.top  -= parseFloat( jQuery.css(elem, "marginTop") ) || 0;
            offset.left -= parseFloat( jQuery.css(elem, "marginLeft") ) || 0;

            // Add offsetParent borders
            parentOffset.top  += parseFloat( jQuery.css(offsetParent[0], "borderTopWidth") ) || 0;
            parentOffset.left += parseFloat( jQuery.css(offsetParent[0], "borderLeftWidth") ) || 0;

            // Subtract the two offsets
            return {
                top:  offset.top  - parentOffset.top,
                left: offset.left - parentOffset.left
            };
        },

        offsetParent: function() {
            return this.map(function() {
                var offsetParent = this.offsetParent || document.body;
                while ( offsetParent && (!rroot.test(offsetParent.nodeName) && jQuery.css(offsetParent, "position") === "static") ) {
                    offsetParent = offsetParent.offsetParent;
                }
                return offsetParent || document.body;
            });
        }
    });


// Create scrollLeft and scrollTop methods
    jQuery.each( {scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function( method, prop ) {
        var top = /Y/.test( prop );

        jQuery.fn[ method ] = function( val ) {
            return jQuery.access( this, function( elem, method, val ) {
                var win = getWindow( elem );

                if ( val === undefined ) {
                    return win ? (prop in win) ? win[ prop ] :
                        win.document.documentElement[ method ] :
                        elem[ method ];
                }

                if ( win ) {
                    win.scrollTo(
                        !top ? val : jQuery( win ).scrollLeft(),
                        top ? val : jQuery( win ).scrollTop()
                    );

                } else {
                    elem[ method ] = val;
                }
            }, method, val, arguments.length, null );
        };
    });

    function getWindow( elem ) {
        return jQuery.isWindow( elem ) ?
            elem :
            elem.nodeType === 9 ?
                elem.defaultView || elem.parentWindow :
                false;
    }
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
    jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
        jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
            // margin is only for outerHeight, outerWidth
            jQuery.fn[ funcName ] = function( margin, value ) {
                var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
                    extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

                return jQuery.access( this, function( elem, type, value ) {
                    var doc;

                    if ( jQuery.isWindow( elem ) ) {
                        // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
                        // isn't a whole lot we can do. See pull request at this URL for discussion:
                        // https://github.com/jquery/jquery/pull/764
                        return elem.document.documentElement[ "client" + name ];
                    }

                    // Get document width or height
                    if ( elem.nodeType === 9 ) {
                        doc = elem.documentElement;

                        // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
                        // unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
                        return Math.max(
                            elem.body[ "scroll" + name ], doc[ "scroll" + name ],
                            elem.body[ "offset" + name ], doc[ "offset" + name ],
                            doc[ "client" + name ]
                        );
                    }

                    return value === undefined ?
                        // Get width or height on the element, requesting but not forcing parseFloat
                        jQuery.css( elem, type, value, extra ) :

                        // Set width or height on the element
                        jQuery.style( elem, type, value, extra );
                }, type, chainable ? margin : undefined, chainable, null );
            };
        });
    });
// Expose jQuery to the global object
    window.jQuery = window.$ = jQuery;

// Expose jQuery as an AMD module, but only for AMD loaders that
// understand the issues with loading multiple versions of jQuery
// in a page that all might call define(). The loader will indicate
// they have special allowances for multiple jQuery versions by
// specifying define.amd.jQuery = true. Register as a named module,
// since jQuery can be concatenated with other files that may use define,
// but not use a proper concatenation script that understands anonymous
// AMD modules. A named AMD is safest and most robust way to register.
// Lowercase jquery is used because AMD module names are derived from
// file names, and jQuery is normally delivered in a lowercase file name.
// Do this after creating the global so that if an AMD module wants to call
// noConflict to hide this version of jQuery, it will work.
    if ( typeof define === "function" && define.amd && define.amd.jQuery ) {
        define( "jquery", [], function () { return jQuery; } );
    }

})( window );
//     Underscore.js 1.3.2
//     (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore is freely distributable under the MIT license.
//     Portions of Underscore are inspired or borrowed from Prototype,
//     Oliver Steele's Functional, and John Resig's Micro-Templating.
//     For all details and documentation:
//     http://documentcloud.github.com/underscore

(function() {

    // Baseline setup
    // --------------

    // Establish the root object, `window` in the browser, or `global` on the server.
    var root = this;

    // Save the previous value of the `_` variable.
    var previousUnderscore = root._;

    // Establish the object that gets returned to break out of a loop iteration.
    var breaker = {};

    // Save bytes in the minified (but not gzipped) version:
    var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

    // Create quick reference variables for speed access to core prototypes.
    var slice            = ArrayProto.slice,
        unshift          = ArrayProto.unshift,
        toString         = ObjProto.toString,
        hasOwnProperty   = ObjProto.hasOwnProperty;

    // All **ECMAScript 5** native function implementations that we hope to use
    // are declared here.
    var
        nativeForEach      = ArrayProto.forEach,
        nativeMap          = ArrayProto.map,
        nativeReduce       = ArrayProto.reduce,
        nativeReduceRight  = ArrayProto.reduceRight,
        nativeFilter       = ArrayProto.filter,
        nativeEvery        = ArrayProto.every,
        nativeSome         = ArrayProto.some,
        nativeIndexOf      = ArrayProto.indexOf,
        nativeLastIndexOf  = ArrayProto.lastIndexOf,
        nativeIsArray      = Array.isArray,
        nativeKeys         = Object.keys,
        nativeBind         = FuncProto.bind;

    // Create a safe reference to the Underscore object for use below.
    var _ = function(obj) { return new wrapper(obj); };

    // Export the Underscore object for **Node.js** and **"CommonJS"**, with
    // backwards-compatibility for the old `require()` API. If we're not in
    // CommonJS, add `_` to the global object via a string identifier for
    // the Closure Compiler "advanced" mode. Registration as an AMD module
    // via define() happens at the end of this file.
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = _;
        }
        exports._ = _;
    } else {
        root['_'] = _;
    }

    // Current version.
    _.VERSION = '1.3.2';

    // Collection Functions
    // --------------------

    // The cornerstone, an `each` implementation, aka `forEach`.
    // Handles objects with the built-in `forEach`, arrays, and raw objects.
    // Delegates to **ECMAScript 5**'s native `forEach` if available.
    var each = _.each = _.forEach = function(obj, iterator, context) {
        if (obj == null) return;
        if (nativeForEach && obj.forEach === nativeForEach) {
            obj.forEach(iterator, context);
        } else if (obj.length === +obj.length) {
            for (var i = 0, l = obj.length; i < l; i++) {
                if (i in obj && iterator.call(context, obj[i], i, obj) === breaker) return;
            }
        } else {
            for (var key in obj) {
                if (_.has(obj, key)) {
                    if (iterator.call(context, obj[key], key, obj) === breaker) return;
                }
            }
        }
    };

    // Return the results of applying the iterator to each element.
    // Delegates to **ECMAScript 5**'s native `map` if available.
    _.map = _.collect = function(obj, iterator, context) {
        var results = [];
        if (obj == null) return results;
        if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
        each(obj, function(value, index, list) {
            results[results.length] = iterator.call(context, value, index, list);
        });
        if (obj.length === +obj.length) results.length = obj.length;
        return results;
    };

    // **Reduce** builds up a single result from a list of values, aka `inject`,
    // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
    _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
        var initial = arguments.length > 2;
        if (obj == null) obj = [];
        if (nativeReduce && obj.reduce === nativeReduce) {
            if (context) iterator = _.bind(iterator, context);
            return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
        }
        each(obj, function(value, index, list) {
            if (!initial) {
                memo = value;
                initial = true;
            } else {
                memo = iterator.call(context, memo, value, index, list);
            }
        });
        if (!initial) throw new TypeError('Reduce of empty array with no initial value');
        return memo;
    };

    // The right-associative version of reduce, also known as `foldr`.
    // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
    _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
        var initial = arguments.length > 2;
        if (obj == null) obj = [];
        if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
            if (context) iterator = _.bind(iterator, context);
            return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
        }
        var reversed = _.toArray(obj).reverse();
        if (context && !initial) iterator = _.bind(iterator, context);
        return initial ? _.reduce(reversed, iterator, memo, context) : _.reduce(reversed, iterator);
    };

    // Return the first value which passes a truth test. Aliased as `detect`.
    _.find = _.detect = function(obj, iterator, context) {
        var result;
        any(obj, function(value, index, list) {
            if (iterator.call(context, value, index, list)) {
                result = value;
                return true;
            }
        });
        return result;
    };

    // Return all the elements that pass a truth test.
    // Delegates to **ECMAScript 5**'s native `filter` if available.
    // Aliased as `select`.
    _.filter = _.select = function(obj, iterator, context) {
        var results = [];
        if (obj == null) return results;
        if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
        each(obj, function(value, index, list) {
            if (iterator.call(context, value, index, list)) results[results.length] = value;
        });
        return results;
    };

    // Return all the elements for which a truth test fails.
    _.reject = function(obj, iterator, context) {
        var results = [];
        if (obj == null) return results;
        each(obj, function(value, index, list) {
            if (!iterator.call(context, value, index, list)) results[results.length] = value;
        });
        return results;
    };

    // Determine whether all of the elements match a truth test.
    // Delegates to **ECMAScript 5**'s native `every` if available.
    // Aliased as `all`.
    _.every = _.all = function(obj, iterator, context) {
        var result = true;
        if (obj == null) return result;
        if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
        each(obj, function(value, index, list) {
            if (!(result = result && iterator.call(context, value, index, list))) return breaker;
        });
        return !!result;
    };

    // Determine if at least one element in the object matches a truth test.
    // Delegates to **ECMAScript 5**'s native `some` if available.
    // Aliased as `any`.
    var any = _.some = _.any = function(obj, iterator, context) {
        iterator || (iterator = _.identity);
        var result = false;
        if (obj == null) return result;
        if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
        each(obj, function(value, index, list) {
            if (result || (result = iterator.call(context, value, index, list))) return breaker;
        });
        return !!result;
    };

    // Determine if a given value is included in the array or object using `===`.
    // Aliased as `contains`.
    _.include = _.contains = function(obj, target) {
        var found = false;
        if (obj == null) return found;
        if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
        found = any(obj, function(value) {
            return value === target;
        });
        return found;
    };

    // Invoke a method (with arguments) on every item in a collection.
    _.invoke = function(obj, method) {
        var args = slice.call(arguments, 2);
        return _.map(obj, function(value) {
            return (_.isFunction(method) ? method || value : value[method]).apply(value, args);
        });
    };

    // Convenience version of a common use case of `map`: fetching a property.
    _.pluck = function(obj, key) {
        return _.map(obj, function(value){ return value[key]; });
    };

    // Return the maximum element or (element-based computation).
    _.max = function(obj, iterator, context) {
        if (!iterator && _.isArray(obj) && obj[0] === +obj[0]) return Math.max.apply(Math, obj);
        if (!iterator && _.isEmpty(obj)) return -Infinity;
        var result = {computed : -Infinity};
        each(obj, function(value, index, list) {
            var computed = iterator ? iterator.call(context, value, index, list) : value;
            computed >= result.computed && (result = {value : value, computed : computed});
        });
        return result.value;
    };

    // Return the minimum element (or element-based computation).
    _.min = function(obj, iterator, context) {
        if (!iterator && _.isArray(obj) && obj[0] === +obj[0]) return Math.min.apply(Math, obj);
        if (!iterator && _.isEmpty(obj)) return Infinity;
        var result = {computed : Infinity};
        each(obj, function(value, index, list) {
            var computed = iterator ? iterator.call(context, value, index, list) : value;
            computed < result.computed && (result = {value : value, computed : computed});
        });
        return result.value;
    };

    // Shuffle an array.
    _.shuffle = function(obj) {
        var shuffled = [], rand;
        each(obj, function(value, index, list) {
            rand = Math.floor(Math.random() * (index + 1));
            shuffled[index] = shuffled[rand];
            shuffled[rand] = value;
        });
        return shuffled;
    };

    // Sort the object's values by a criterion produced by an iterator.
    _.sortBy = function(obj, val, context) {
        var iterator = _.isFunction(val) ? val : function(obj) { return obj[val]; };
        return _.pluck(_.map(obj, function(value, index, list) {
            return {
                value : value,
                criteria : iterator.call(context, value, index, list)
            };
        }).sort(function(left, right) {
                var a = left.criteria, b = right.criteria;
                if (a === void 0) return 1;
                if (b === void 0) return -1;
                return a < b ? -1 : a > b ? 1 : 0;
            }), 'value');
    };

    // Groups the object's values by a criterion. Pass either a string attribute
    // to group by, or a function that returns the criterion.
    _.groupBy = function(obj, val) {
        var result = {};
        var iterator = _.isFunction(val) ? val : function(obj) { return obj[val]; };
        each(obj, function(value, index) {
            var key = iterator(value, index);
            (result[key] || (result[key] = [])).push(value);
        });
        return result;
    };

    // Use a comparator function to figure out at what index an object should
    // be inserted so as to maintain order. Uses binary search.
    _.sortedIndex = function(array, obj, iterator) {
        iterator || (iterator = _.identity);
        var low = 0, high = array.length;
        while (low < high) {
            var mid = (low + high) >> 1;
            iterator(array[mid]) < iterator(obj) ? low = mid + 1 : high = mid;
        }
        return low;
    };

    // Safely convert anything iterable into a real, live array.
    _.toArray = function(obj) {
        if (!obj)                                     return [];
        if (_.isArray(obj))                           return slice.call(obj);
        if (_.isArguments(obj))                       return slice.call(obj);
        if (obj.toArray && _.isFunction(obj.toArray)) return obj.toArray();
        return _.values(obj);
    };

    // Return the number of elements in an object.
    _.size = function(obj) {
        return _.isArray(obj) ? obj.length : _.keys(obj).length;
    };

    // Array Functions
    // ---------------

    // Get the first element of an array. Passing **n** will return the first N
    // values in the array. Aliased as `head` and `take`. The **guard** check
    // allows it to work with `_.map`.
    _.first = _.head = _.take = function(array, n, guard) {
        return (n != null) && !guard ? slice.call(array, 0, n) : array[0];
    };

    // Returns everything but the last entry of the array. Especcialy useful on
    // the arguments object. Passing **n** will return all the values in
    // the array, excluding the last N. The **guard** check allows it to work with
    // `_.map`.
    _.initial = function(array, n, guard) {
        return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
    };

    // Get the last element of an array. Passing **n** will return the last N
    // values in the array. The **guard** check allows it to work with `_.map`.
    _.last = function(array, n, guard) {
        if ((n != null) && !guard) {
            return slice.call(array, Math.max(array.length - n, 0));
        } else {
            return array[array.length - 1];
        }
    };

    // Returns everything but the first entry of the array. Aliased as `tail`.
    // Especially useful on the arguments object. Passing an **index** will return
    // the rest of the values in the array from that index onward. The **guard**
    // check allows it to work with `_.map`.
    _.rest = _.tail = function(array, index, guard) {
        return slice.call(array, (index == null) || guard ? 1 : index);
    };

    // Trim out all falsy values from an array.
    _.compact = function(array) {
        return _.filter(array, function(value){ return !!value; });
    };

    // Return a completely flattened version of an array.
    _.flatten = function(array, shallow) {
        return _.reduce(array, function(memo, value) {
            if (_.isArray(value)) return memo.concat(shallow ? value : _.flatten(value));
            memo[memo.length] = value;
            return memo;
        }, []);
    };

    // Return a version of the array that does not contain the specified value(s).
    _.without = function(array) {
        return _.difference(array, slice.call(arguments, 1));
    };

    // Produce a duplicate-free version of the array. If the array has already
    // been sorted, you have the option of using a faster algorithm.
    // Aliased as `unique`.
    _.uniq = _.unique = function(array, isSorted, iterator) {
        var initial = iterator ? _.map(array, iterator) : array;
        var results = [];
        // The `isSorted` flag is irrelevant if the array only contains two elements.
        if (array.length < 3) isSorted = true;
        _.reduce(initial, function (memo, value, index) {
            if (isSorted ? _.last(memo) !== value || !memo.length : !_.include(memo, value)) {
                memo.push(value);
                results.push(array[index]);
            }
            return memo;
        }, []);
        return results;
    };

    // Produce an array that contains the union: each distinct element from all of
    // the passed-in arrays.
    _.union = function() {
        return _.uniq(_.flatten(arguments, true));
    };

    // Produce an array that contains every item shared between all the
    // passed-in arrays. (Aliased as "intersect" for back-compat.)
    _.intersection = _.intersect = function(array) {
        var rest = slice.call(arguments, 1);
        return _.filter(_.uniq(array), function(item) {
            return _.every(rest, function(other) {
                return _.indexOf(other, item) >= 0;
            });
        });
    };

    // Take the difference between one array and a number of other arrays.
    // Only the elements present in just the first array will remain.
    _.difference = function(array) {
        var rest = _.flatten(slice.call(arguments, 1), true);
        return _.filter(array, function(value){ return !_.include(rest, value); });
    };

    // Zip together multiple lists into a single array -- elements that share
    // an index go together.
    _.zip = function() {
        var args = slice.call(arguments);
        var length = _.max(_.pluck(args, 'length'));
        var results = new Array(length);
        for (var i = 0; i < length; i++) results[i] = _.pluck(args, "" + i);
        return results;
    };

    // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
    // we need this function. Return the position of the first occurrence of an
    // item in an array, or -1 if the item is not included in the array.
    // Delegates to **ECMAScript 5**'s native `indexOf` if available.
    // If the array is large and already in sort order, pass `true`
    // for **isSorted** to use binary search.
    _.indexOf = function(array, item, isSorted) {
        if (array == null) return -1;
        var i, l;
        if (isSorted) {
            i = _.sortedIndex(array, item);
            return array[i] === item ? i : -1;
        }
        if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item);
        for (i = 0, l = array.length; i < l; i++) if (i in array && array[i] === item) return i;
        return -1;
    };

    // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
    _.lastIndexOf = function(array, item) {
        if (array == null) return -1;
        if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) return array.lastIndexOf(item);
        var i = array.length;
        while (i--) if (i in array && array[i] === item) return i;
        return -1;
    };

    // Generate an integer Array containing an arithmetic progression. A port of
    // the native Python `range()` function. See
    // [the Python documentation](http://docs.python.org/library/functions.html#range).
    _.range = function(start, stop, step) {
        if (arguments.length <= 1) {
            stop = start || 0;
            start = 0;
        }
        step = arguments[2] || 1;

        var len = Math.max(Math.ceil((stop - start) / step), 0);
        var idx = 0;
        var range = new Array(len);

        while(idx < len) {
            range[idx++] = start;
            start += step;
        }

        return range;
    };

    // Function (ahem) Functions
    // ------------------

    // Reusable constructor function for prototype setting.
    var ctor = function(){};

    // Create a function bound to a given object (assigning `this`, and arguments,
    // optionally). Binding with arguments is also known as `curry`.
    // Delegates to **ECMAScript 5**'s native `Function.bind` if available.
    // We check for `func.bind` first, to fail fast when `func` is undefined.
    _.bind = function bind(func, context) {
        var bound, args;
        if (func.bind === nativeBind && nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
        if (!_.isFunction(func)) throw new TypeError;
        args = slice.call(arguments, 2);
        return bound = function() {
            if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
            ctor.prototype = func.prototype;
            var self = new ctor;
            var result = func.apply(self, args.concat(slice.call(arguments)));
            if (Object(result) === result) return result;
            return self;
        };
    };

    // Bind all of an object's methods to that object. Useful for ensuring that
    // all callbacks defined on an object belong to it.
    _.bindAll = function(obj) {
        var funcs = slice.call(arguments, 1);
        if (funcs.length == 0) funcs = _.functions(obj);
        each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
        return obj;
    };

    // Memoize an expensive function by storing its results.
    _.memoize = function(func, hasher) {
        var memo = {};
        hasher || (hasher = _.identity);
        return function() {
            var key = hasher.apply(this, arguments);
            return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
        };
    };

    // Delays a function for the given number of milliseconds, and then calls
    // it with the arguments supplied.
    _.delay = function(func, wait) {
        var args = slice.call(arguments, 2);
        return setTimeout(function(){ return func.apply(null, args); }, wait);
    };

    // Defers a function, scheduling it to run after the current call stack has
    // cleared.
    _.defer = function(func) {
        return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
    };

    // Returns a function, that, when invoked, will only be triggered at most once
    // during a given window of time.
    _.throttle = function(func, wait) {
        var context, args, timeout, throttling, more, result;
        var whenDone = _.debounce(function(){ more = throttling = false; }, wait);
        return function() {
            context = this; args = arguments;
            var later = function() {
                timeout = null;
                if (more) func.apply(context, args);
                whenDone();
            };
            if (!timeout) timeout = setTimeout(later, wait);
            if (throttling) {
                more = true;
            } else {
                result = func.apply(context, args);
            }
            whenDone();
            throttling = true;
            return result;
        };
    };

    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the
    // leading edge, instead of the trailing.
    _.debounce = function(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            if (immediate && !timeout) func.apply(context, args);
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    // Returns a function that will be executed at most one time, no matter how
    // often you call it. Useful for lazy initialization.
    _.once = function(func) {
        var ran = false, memo;
        return function() {
            if (ran) return memo;
            ran = true;
            return memo = func.apply(this, arguments);
        };
    };

    // Returns the first function passed as an argument to the second,
    // allowing you to adjust arguments, run code before and after, and
    // conditionally execute the original function.
    _.wrap = function(func, wrapper) {
        return function() {
            var args = [func].concat(slice.call(arguments, 0));
            return wrapper.apply(this, args);
        };
    };

    // Returns a function that is the composition of a list of functions, each
    // consuming the return value of the function that follows.
    _.compose = function() {
        var funcs = arguments;
        return function() {
            var args = arguments;
            for (var i = funcs.length - 1; i >= 0; i--) {
                args = [funcs[i].apply(this, args)];
            }
            return args[0];
        };
    };

    // Returns a function that will only be executed after being called N times.
    _.after = function(times, func) {
        if (times <= 0) return func();
        return function() {
            if (--times < 1) { return func.apply(this, arguments); }
        };
    };

    // Object Functions
    // ----------------

    // Retrieve the names of an object's properties.
    // Delegates to **ECMAScript 5**'s native `Object.keys`
    _.keys = nativeKeys || function(obj) {
        if (obj !== Object(obj)) throw new TypeError('Invalid object');
        var keys = [];
        for (var key in obj) if (_.has(obj, key)) keys[keys.length] = key;
        return keys;
    };

    // Retrieve the values of an object's properties.
    _.values = function(obj) {
        return _.map(obj, _.identity);
    };

    // Return a sorted list of the function names available on the object.
    // Aliased as `methods`
    _.functions = _.methods = function(obj) {
        var names = [];
        for (var key in obj) {
            if (_.isFunction(obj[key])) names.push(key);
        }
        return names.sort();
    };

    // Extend a given object with all the properties in passed-in object(s).
    _.extend = function(obj) {
        each(slice.call(arguments, 1), function(source) {
            for (var prop in source) {
                obj[prop] = source[prop];
            }
        });
        return obj;
    };

    // Return a copy of the object only containing the whitelisted properties.
    _.pick = function(obj) {
        var result = {};
        each(_.flatten(slice.call(arguments, 1)), function(key) {
            if (key in obj) result[key] = obj[key];
        });
        return result;
    };

    // Fill in a given object with default properties.
    _.defaults = function(obj) {
        each(slice.call(arguments, 1), function(source) {
            for (var prop in source) {
                if (obj[prop] == null) obj[prop] = source[prop];
            }
        });
        return obj;
    };

    // Create a (shallow-cloned) duplicate of an object.
    _.clone = function(obj) {
        if (!_.isObject(obj)) return obj;
        return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
    };

    // Invokes interceptor with the obj, and then returns obj.
    // The primary purpose of this method is to "tap into" a method chain, in
    // order to perform operations on intermediate results within the chain.
    _.tap = function(obj, interceptor) {
        interceptor(obj);
        return obj;
    };

    // Internal recursive comparison function.
    function eq(a, b, stack) {
        // Identical objects are equal. `0 === -0`, but they aren't identical.
        // See the Harmony `egal` proposal: http://wiki.ecmascript.org/doku.php?id=harmony:egal.
        if (a === b) return a !== 0 || 1 / a == 1 / b;
        // A strict comparison is necessary because `null == undefined`.
        if (a == null || b == null) return a === b;
        // Unwrap any wrapped objects.
        if (a._chain) a = a._wrapped;
        if (b._chain) b = b._wrapped;
        // Invoke a custom `isEqual` method if one is provided.
        if (a.isEqual && _.isFunction(a.isEqual)) return a.isEqual(b);
        if (b.isEqual && _.isFunction(b.isEqual)) return b.isEqual(a);
        // Compare `[[Class]]` names.
        var className = toString.call(a);
        if (className != toString.call(b)) return false;
        switch (className) {
            // Strings, numbers, dates, and booleans are compared by value.
            case '[object String]':
                // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
                // equivalent to `new String("5")`.
                return a == String(b);
            case '[object Number]':
                // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
                // other numeric values.
                return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
            case '[object Date]':
            case '[object Boolean]':
                // Coerce dates and booleans to numeric primitive values. Dates are compared by their
                // millisecond representations. Note that invalid dates with millisecond representations
                // of `NaN` are not equivalent.
                return +a == +b;
            // RegExps are compared by their source patterns and flags.
            case '[object RegExp]':
                return a.source == b.source &&
                    a.global == b.global &&
                    a.multiline == b.multiline &&
                    a.ignoreCase == b.ignoreCase;
        }
        if (typeof a != 'object' || typeof b != 'object') return false;
        // Assume equality for cyclic structures. The algorithm for detecting cyclic
        // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
        var length = stack.length;
        while (length--) {
            // Linear search. Performance is inversely proportional to the number of
            // unique nested structures.
            if (stack[length] == a) return true;
        }
        // Add the first object to the stack of traversed objects.
        stack.push(a);
        var size = 0, result = true;
        // Recursively compare objects and arrays.
        if (className == '[object Array]') {
            // Compare array lengths to determine if a deep comparison is necessary.
            size = a.length;
            result = size == b.length;
            if (result) {
                // Deep compare the contents, ignoring non-numeric properties.
                while (size--) {
                    // Ensure commutative equality for sparse arrays.
                    if (!(result = size in a == size in b && eq(a[size], b[size], stack))) break;
                }
            }
        } else {
            // Objects with different constructors are not equivalent.
            if ('constructor' in a != 'constructor' in b || a.constructor != b.constructor) return false;
            // Deep compare objects.
            for (var key in a) {
                if (_.has(a, key)) {
                    // Count the expected number of properties.
                    size++;
                    // Deep compare each member.
                    if (!(result = _.has(b, key) && eq(a[key], b[key], stack))) break;
                }
            }
            // Ensure that both objects contain the same number of properties.
            if (result) {
                for (key in b) {
                    if (_.has(b, key) && !(size--)) break;
                }
                result = !size;
            }
        }
        // Remove the first object from the stack of traversed objects.
        stack.pop();
        return result;
    }

    // Perform a deep comparison to check if two objects are equal.
    _.isEqual = function(a, b) {
        return eq(a, b, []);
    };

    // Is a given array, string, or object empty?
    // An "empty" object has no enumerable own-properties.
    _.isEmpty = function(obj) {
        if (obj == null) return true;
        if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
        for (var key in obj) if (_.has(obj, key)) return false;
        return true;
    };

    // Is a given value a DOM element?
    _.isElement = function(obj) {
        return !!(obj && obj.nodeType == 1);
    };

    // Is a given value an array?
    // Delegates to ECMA5's native Array.isArray
    _.isArray = nativeIsArray || function(obj) {
        return toString.call(obj) == '[object Array]';
    };

    // Is a given variable an object?
    _.isObject = function(obj) {
        return obj === Object(obj);
    };

    // Is a given variable an arguments object?
    _.isArguments = function(obj) {
        return toString.call(obj) == '[object Arguments]';
    };
    if (!_.isArguments(arguments)) {
        _.isArguments = function(obj) {
            return !!(obj && _.has(obj, 'callee'));
        };
    }

    // Is a given value a function?
    _.isFunction = function(obj) {
        return toString.call(obj) == '[object Function]';
    };

    // Is a given value a string?
    _.isString = function(obj) {
        return toString.call(obj) == '[object String]';
    };

    // Is a given value a number?
    _.isNumber = function(obj) {
        return toString.call(obj) == '[object Number]';
    };

    // Is a given object a finite number?
    _.isFinite = function(obj) {
        return _.isNumber(obj) && isFinite(obj);
    };

    // Is the given value `NaN`?
    _.isNaN = function(obj) {
        // `NaN` is the only value for which `===` is not reflexive.
        return obj !== obj;
    };

    // Is a given value a boolean?
    _.isBoolean = function(obj) {
        return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
    };

    // Is a given value a date?
    _.isDate = function(obj) {
        return toString.call(obj) == '[object Date]';
    };

    // Is the given value a regular expression?
    _.isRegExp = function(obj) {
        return toString.call(obj) == '[object RegExp]';
    };

    // Is a given value equal to null?
    _.isNull = function(obj) {
        return obj === null;
    };

    // Is a given variable undefined?
    _.isUndefined = function(obj) {
        return obj === void 0;
    };

    // Has own property?
    _.has = function(obj, key) {
        return hasOwnProperty.call(obj, key);
    };

    // Utility Functions
    // -----------------

    // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
    // previous owner. Returns a reference to the Underscore object.
    _.noConflict = function() {
        root._ = previousUnderscore;
        return this;
    };

    // Keep the identity function around for default iterators.
    _.identity = function(value) {
        return value;
    };

    // Run a function **n** times.
    _.times = function (n, iterator, context) {
        for (var i = 0; i < n; i++) iterator.call(context, i);
    };

    // Escape a string for HTML interpolation.
    _.escape = function(string) {
        return (''+string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;');
    };

    // If the value of the named property is a function then invoke it;
    // otherwise, return it.
    _.result = function(object, property) {
        if (object == null) return null;
        var value = object[property];
        return _.isFunction(value) ? value.call(object) : value;
    };

    // Add your own custom functions to the Underscore object, ensuring that
    // they're correctly added to the OOP wrapper as well.
    _.mixin = function(obj) {
        each(_.functions(obj), function(name){
            addToWrapper(name, _[name] = obj[name]);
        });
    };

    // Generate a unique integer id (unique within the entire client session).
    // Useful for temporary DOM ids.
    var idCounter = 0;
    _.uniqueId = function(prefix) {
        var id = idCounter++;
        return prefix ? prefix + id : id;
    };

    // By default, Underscore uses ERB-style template delimiters, change the
    // following template settings to use alternative delimiters.
    _.templateSettings = {
        evaluate    : /<%([\s\S]+?)%>/g,
        interpolate : /<%=([\s\S]+?)%>/g,
        escape      : /<%-([\s\S]+?)%>/g
    };

    // When customizing `templateSettings`, if you don't want to define an
    // interpolation, evaluation or escaping regex, we need one that is
    // guaranteed not to match.
    var noMatch = /.^/;

    // Certain characters need to be escaped so that they can be put into a
    // string literal.
    var escapes = {
        '\\': '\\',
        "'": "'",
        'r': '\r',
        'n': '\n',
        't': '\t',
        'u2028': '\u2028',
        'u2029': '\u2029'
    };

    for (var p in escapes) escapes[escapes[p]] = p;
    var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    var unescaper = /\\(\\|'|r|n|t|u2028|u2029)/g;

    // Within an interpolation, evaluation, or escaping, remove HTML escaping
    // that had been previously added.
    var unescape = function(code) {
        return code.replace(unescaper, function(match, escape) {
            return escapes[escape];
        });
    };

    // JavaScript micro-templating, similar to John Resig's implementation.
    // Underscore templating handles arbitrary delimiters, preserves whitespace,
    // and correctly escapes quotes within interpolated code.
    _.template = function(text, data, settings) {
        settings = _.extend(_.templateSettings, settings);

        // Compile the template source, taking care to escape characters that
        // cannot be included in a string literal and then unescape them in code
        // blocks.
        var source = "__p+='" + text
            .replace(escaper, function(match) {
            return '\\' + escapes[match];
        })
            .replace(settings.escape || noMatch, function(match, code) {
                return "'+\n_.escape(" + unescape(code) + ")+\n'";
            })
            .replace(settings.interpolate || noMatch, function(match, code) {
                return "'+\n(" + unescape(code) + ")+\n'";
            })
            .replace(settings.evaluate || noMatch, function(match, code) {
                return "';\n" + unescape(code) + "\n;__p+='";
            }) + "';\n";

        // If a variable is not specified, place data values in local scope.
        if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

        source = "var __p='';" +
            "var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n" +
            source + "return __p;\n";

        var render = new Function(settings.variable || 'obj', '_', source);
        if (data) return render(data, _);
        var template = function(data) {
            return render.call(this, data, _);
        };

        // Provide the compiled function source as a convenience for build time
        // precompilation.
        template.source = 'function(' + (settings.variable || 'obj') + '){\n' +
            source + '}';

        return template;
    };

    // Add a "chain" function, which will delegate to the wrapper.
    _.chain = function(obj) {
        return _(obj).chain();
    };

    // The OOP Wrapper
    // ---------------

    // If Underscore is called as a function, it returns a wrapped object that
    // can be used OO-style. This wrapper holds altered versions of all the
    // underscore functions. Wrapped objects may be chained.
    var wrapper = function(obj) { this._wrapped = obj; };

    // Expose `wrapper.prototype` as `_.prototype`
    _.prototype = wrapper.prototype;

    // Helper function to continue chaining intermediate results.
    var result = function(obj, chain) {
        return chain ? _(obj).chain() : obj;
    };

    // A method to easily add functions to the OOP wrapper.
    var addToWrapper = function(name, func) {
        wrapper.prototype[name] = function() {
            var args = slice.call(arguments);
            unshift.call(args, this._wrapped);
            return result(func.apply(_, args), this._chain);
        };
    };

    // Add all of the Underscore functions to the wrapper object.
    _.mixin(_);

    // Add all mutator Array functions to the wrapper.
    each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
        var method = ArrayProto[name];
        wrapper.prototype[name] = function() {
            var wrapped = this._wrapped;
            method.apply(wrapped, arguments);
            var length = wrapped.length;
            if ((name == 'shift' || name == 'splice') && length === 0) delete wrapped[0];
            return result(wrapped, this._chain);
        };
    });

    // Add all accessor Array functions to the wrapper.
    each(['concat', 'join', 'slice'], function(name) {
        var method = ArrayProto[name];
        wrapper.prototype[name] = function() {
            return result(method.apply(this._wrapped, arguments), this._chain);
        };
    });

    // Start chaining a wrapped Underscore object.
    wrapper.prototype.chain = function() {
        this._chain = true;
        return this;
    };

    // Extracts the result from a wrapped and chained object.
    wrapper.prototype.value = function() {
        return this._wrapped;
    };

    // AMD define happens at the end for compatibility with AMD loaders
    // that don't enforce next-turn semantics on modules.
    if (typeof define === 'function' && define.amd) {
        define('underscore',[], function() {
            return _;
        });
    }

}).call(this);
//     Backbone.js 0.9.2

//     (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org
(function(root, factory) {
    // Set up Backbone appropriately for the environment.
    if (typeof exports !== 'undefined') {
        // Node/CommonJS, no need for jQuery in that case.
        factory(root, exports, require('underscore'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define('backbone',['underscore', 'jquery', 'exports'], function(_, $, exports) {
            // Export global even in AMD case in case this script is loaded with
            // others that may still expect a global Backbone.
            root.Backbone = factory(root, exports, _, $);
        });
    } else {
        // Browser globals
        root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender));
    }
}(this, function(root, Backbone, _, $) {

    // Initial Setup
    // -------------

    // Save the previous value of the `Backbone` variable, so that it can be
    // restored later on, if `noConflict` is used.
    var previousBackbone = root.Backbone;

    // Create a local reference to slice/splice.
    var slice = Array.prototype.slice;
    var splice = Array.prototype.splice;

    // Current version of the library. Keep in sync with `package.json`.
    Backbone.VERSION = '0.9.2';

    // Set the JavaScript library that will be used for DOM manipulation and
    // Ajax calls (a.k.a. the `$` variable). By default Backbone will use: jQuery,
    // Zepto, or Ender; but the `setDomLibrary()` method lets you inject an
    // alternate JavaScript library (or a mock library for testing your views
    // outside of a browser).
    Backbone.setDomLibrary = function(lib) {
        $ = lib;
    };

    // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
    // to its previous owner. Returns a reference to this Backbone object.
    Backbone.noConflict = function() {
        root.Backbone = previousBackbone;
        return Backbone;
    };

    // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
    // will fake `"PUT"` and `"DELETE"` requests via the `_method` parameter and
    // set a `X-Http-Method-Override` header.
    Backbone.emulateHTTP = false;

    // Turn on `emulateJSON` to support legacy servers that can't deal with direct
    // `application/json` requests ... will encode the body as
    // `application/x-www-form-urlencoded` instead and will send the model in a
    // form param named `model`.
    Backbone.emulateJSON = false;

    // Backbone.Events
    // -----------------

    // Regular expression used to split event strings
    var eventSplitter = /\s+/;

    // A module that can be mixed in to *any object* in order to provide it with
    // custom events. You may bind with `on` or remove with `off` callback functions
    // to an event; trigger`-ing an event fires all callbacks in succession.
    //
    //     var object = {};
    //     _.extend(object, Backbone.Events);
    //     object.on('expand', function(){ alert('expanded'); });
    //     object.trigger('expand');
    //
    var Events = Backbone.Events = {

        // Bind one or more space separated events, `events`, to a `callback`
        // function. Passing `"all"` will bind the callback to all events fired.
        on: function(events, callback, context) {

            var calls, event, node, tail, list;
            if (!callback) return this;
            events = events.split(eventSplitter);
            calls = this._callbacks || (this._callbacks = {});

            // Create an immutable callback list, allowing traversal during
            // modification.  The tail is an empty object that will always be used
            // as the next node.
            while (event = events.shift()) {
                list = calls[event];
                node = list ? list.tail : {};
                node.next = tail = {};
                node.context = context;
                node.callback = callback;
                calls[event] = {tail: tail, next: list ? list.next : node};
            }

            return this;
        },

        // Remove one or many callbacks. If `context` is null, removes all callbacks
        // with that function. If `callback` is null, removes all callbacks for the
        // event. If `events` is null, removes all bound callbacks for all events.
        off: function(events, callback, context) {
            var event, calls, node, tail, cb, ctx;

            // No events, or removing *all* events.
            if (!(calls = this._callbacks)) return;
            if (!(events || callback || context)) {
                delete this._callbacks;
                return this;
            }

            // Loop through the listed events and contexts, splicing them out of the
            // linked list of callbacks if appropriate.
            events = events ? events.split(eventSplitter) : _.keys(calls);
            while (event = events.shift()) {
                node = calls[event];
                delete calls[event];
                if (!node || !(callback || context)) continue;
                // Create a new list, omitting the indicated callbacks.
                tail = node.tail;
                while ((node = node.next) !== tail) {
                    cb = node.callback;
                    ctx = node.context;
                    if ((callback && cb !== callback) || (context && ctx !== context)) {
                        this.on(event, cb, ctx);
                    }
                }
            }

            return this;
        },

        // Trigger one or many events, firing all bound callbacks. Callbacks are
        // passed the same arguments as `trigger` is, apart from the event name
        // (unless you're listening on `"all"`, which will cause your callback to
        // receive the true name of the event as the first argument).
        trigger: function(events) {
            var event, node, calls, tail, args, all, rest;
            if (!(calls = this._callbacks)) return this;
            all = calls.all;
            events = events.split(eventSplitter);
            rest = slice.call(arguments, 1);

            // For each event, walk through the linked list of callbacks twice,
            // first to trigger the event, then to trigger any `"all"` callbacks.
            while (event = events.shift()) {
                if (node = calls[event]) {
                    tail = node.tail;
                    while ((node = node.next) !== tail) {
                        node.callback.apply(node.context || this, rest);
                    }
                }
                if (node = all) {
                    tail = node.tail;
                    args = [event].concat(rest);
                    while ((node = node.next) !== tail) {
                        node.callback.apply(node.context || this, args);
                    }
                }
            }

            return this;
        }

    };

    // Aliases for backwards compatibility.
    Events.bind   = Events.on;
    Events.unbind = Events.off;

    // Backbone.Model
    // --------------

    // Create a new model, with defined attributes. A client id (`cid`)
    // is automatically generated and assigned for you.
    var Model = Backbone.Model = function(attributes, options) {
        var defaults;
        attributes || (attributes = {});
        if (options && options.parse) attributes = this.parse(attributes);
        if (defaults = getValue(this, 'defaults')) {
            attributes = _.extend({}, defaults, attributes);
        }
        if (options && options.collection) this.collection = options.collection;
        this.attributes = {};
        this._escapedAttributes = {};
        this.cid = _.uniqueId('c');
        this.changed = {};
        this._silent = {};
        this._pending = {};
        this.set(attributes, {silent: true});
        // Reset change tracking.
        this.changed = {};
        this._silent = {};
        this._pending = {};
        this._previousAttributes = _.clone(this.attributes);
        this.initialize.apply(this, arguments);
    };

    // Attach all inheritable methods to the Model prototype.
    _.extend(Model.prototype, Events, {

        // A hash of attributes whose current and previous value differ.
        changed: null,

        // A hash of attributes that have silently changed since the last time
        // `change` was called.  Will become pending attributes on the next call.
        _silent: null,

        // A hash of attributes that have changed since the last `'change'` event
        // began.
        _pending: null,

        // The default name for the JSON `id` attribute is `"id"`. MongoDB and
        // CouchDB users may want to set this to `"_id"`.
        idAttribute: 'id',

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize: function(){},

        // Return a copy of the model's `attributes` object.
        toJSON: function(options) {
            return _.clone(this.attributes);
        },

        // Get the value of an attribute.
        get: function(attr) {
            return this.attributes[attr];
        },

        // Get the HTML-escaped value of an attribute.
        escape: function(attr) {
            var html;
            if (html = this._escapedAttributes[attr]) return html;
            var val = this.get(attr);
            return this._escapedAttributes[attr] = _.escape(val == null ? '' : '' + val);
        },

        // Returns `true` if the attribute contains a value that is not null
        // or undefined.
        has: function(attr) {
            return this.get(attr) != null;
        },

        // Set a hash of model attributes on the object, firing `"change"` unless
        // you choose to silence it.
        set: function(key, value, options) {
            var attrs, attr, val;

            // Handle both `"key", value` and `{key: value}` -style arguments.
            if (_.isObject(key) || key == null) {
                attrs = key;
                options = value;
            } else {
                attrs = {};
                attrs[key] = value;
            }

            // Extract attributes and options.
            options || (options = {});
            if (!attrs) return this;
            if (attrs instanceof Model) attrs = attrs.attributes;
            if (options.unset) for (attr in attrs) attrs[attr] = void 0;

            // Run validation.
            if (!this._validate(attrs, options)) return false;

            // Check for changes of `id`.
            if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

            var changes = options.changes = {};
            var now = this.attributes;
            var escaped = this._escapedAttributes;
            var prev = this._previousAttributes || {};

            // For each `set` attribute...
            for (attr in attrs) {
                val = attrs[attr];

                // If the new and current value differ, record the change.
                if (!_.isEqual(now[attr], val) || (options.unset && _.has(now, attr))) {
                    delete escaped[attr];
                    (options.silent ? this._silent : changes)[attr] = true;
                }

                // Update or delete the current value.
                options.unset ? delete now[attr] : now[attr] = val;

                // If the new and previous value differ, record the change.  If not,
                // then remove changes for this attribute.
                if (!_.isEqual(prev[attr], val) || (_.has(now, attr) != _.has(prev, attr))) {
                    this.changed[attr] = val;
                    if (!options.silent) this._pending[attr] = true;
                } else {
                    delete this.changed[attr];
                    delete this._pending[attr];
                }
            }

            // Fire the `"change"` events.
            if (!options.silent) this.change(options);
            return this;
        },

        // Remove an attribute from the model, firing `"change"` unless you choose
        // to silence it. `unset` is a noop if the attribute doesn't exist.
        unset: function(attr, options) {
            (options || (options = {})).unset = true;
            return this.set(attr, null, options);
        },

        // Clear all attributes on the model, firing `"change"` unless you choose
        // to silence it.
        clear: function(options) {
            (options || (options = {})).unset = true;
            return this.set(_.clone(this.attributes), options);
        },

        // Fetch the model from the server. If the server's representation of the
        // model differs from its current attributes, they will be overriden,
        // triggering a `"change"` event.
        fetch: function(options) {
            options = options ? _.clone(options) : {};
            var model = this;
            var success = options.success;
            options.success = function(resp, status, xhr) {
                if (!model.set(model.parse(resp, xhr), options)) return false;
                if (success) success(model, resp);
            };
            options.error = Backbone.wrapError(options.error, model, options);
            return (this.sync || Backbone.sync).call(this, 'read', this, options);
        },

        // Set a hash of model attributes, and sync the model to the server.
        // If the server returns an attributes hash that differs, the model's
        // state will be `set` again.
        save: function(key, value, options) {
            var attrs, current;

            // Handle both `("key", value)` and `({key: value})` -style calls.
            if (_.isObject(key) || key == null) {
                attrs = key;
                options = value;
            } else {
                attrs = {};
                attrs[key] = value;
            }
            options = options ? _.clone(options) : {};

            // If we're "wait"-ing to set changed attributes, validate early.
            if (options.wait) {
                if (!this._validate(attrs, options)) return false;
                current = _.clone(this.attributes);
            }

            // Regular saves `set` attributes before persisting to the server.
            var silentOptions = _.extend({}, options, {silent: true});
            if (attrs && !this.set(attrs, options.wait ? silentOptions : options)) {
                return false;
            }

            // After a successful server-side save, the client is (optionally)
            // updated with the server-side state.
            var model = this;
            var success = options.success;
            options.success = function(resp, status, xhr) {
                var serverAttrs = model.parse(resp, xhr);
                if (options.wait) {
                    delete options.wait;
                    serverAttrs = _.extend(attrs || {}, serverAttrs);
                }
                if (!model.set(serverAttrs, options)) return false;
                if (success) {
                    success(model, resp);
                } else {
                    model.trigger('sync', model, resp, options);
                }
            };

            // Finish configuring and sending the Ajax request.
            options.error = Backbone.wrapError(options.error, model, options);
            var method = this.isNew() ? 'create' : 'update';
            var xhr = (this.sync || Backbone.sync).call(this, method, this, options);
            if (options.wait) this.set(current, silentOptions);
            return xhr;
        },

        // Destroy this model on the server if it was already persisted.
        // Optimistically removes the model from its collection, if it has one.
        // If `wait: true` is passed, waits for the server to respond before removal.
        destroy: function(options) {
            options = options ? _.clone(options) : {};
            var model = this;
            var success = options.success;

            var triggerDestroy = function() {
                model.trigger('destroy', model, model.collection, options);
            };

            if (this.isNew()) {
                triggerDestroy();
                return false;
            }

            options.success = function(resp) {
                if (options.wait) triggerDestroy();
                if (success) {
                    success(model, resp);
                } else {
                    model.trigger('sync', model, resp, options);
                }
            };

            options.error = Backbone.wrapError(options.error, model, options);
            var xhr = (this.sync || Backbone.sync).call(this, 'delete', this, options);
            if (!options.wait) triggerDestroy();
            return xhr;
        },

        // Default URL for the model's representation on the server -- if you're
        // using Backbone's restful methods, override this to change the endpoint
        // that will be called.
        url: function() {
            var base = getValue(this, 'urlRoot') || getValue(this.collection, 'url') || urlError();
            if (this.isNew()) return base;
            return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + encodeURIComponent(this.id);
        },

        // **parse** converts a response into the hash of attributes to be `set` on
        // the model. The default implementation is just to pass the response along.
        parse: function(resp, xhr) {
            return resp;
        },

        // Create a new model with identical attributes to this one.
        clone: function() {
            return new this.constructor(this.attributes);
        },

        // A model is new if it has never been saved to the server, and lacks an id.
        isNew: function() {
            return this.id == null;
        },

        // Call this method to manually fire a `"change"` event for this model and
        // a `"change:attribute"` event for each changed attribute.
        // Calling this will cause all objects observing the model to update.
        change: function(options) {
            options || (options = {});
            var changing = this._changing;
            this._changing = true;

            // Silent changes become pending changes.
            for (var attr in this._silent) this._pending[attr] = true;

            // Silent changes are triggered.
            var changes = _.extend({}, options.changes, this._silent);
            this._silent = {};
            for (var attr in changes) {
                this.trigger('change:' + attr, this, this.get(attr), options);
            }
            if (changing) return this;

            // Continue firing `"change"` events while there are pending changes.
            while (!_.isEmpty(this._pending)) {
                this._pending = {};
                this.trigger('change', this, options);
                // Pending and silent changes still remain.
                for (var attr in this.changed) {
                    if (this._pending[attr] || this._silent[attr]) continue;
                    delete this.changed[attr];
                }
                this._previousAttributes = _.clone(this.attributes);
            }

            this._changing = false;
            return this;
        },

        // Determine if the model has changed since the last `"change"` event.
        // If you specify an attribute name, determine if that attribute has changed.
        hasChanged: function(attr) {
            if (!arguments.length) return !_.isEmpty(this.changed);
            return _.has(this.changed, attr);
        },

        // Return an object containing all the attributes that have changed, or
        // false if there are no changed attributes. Useful for determining what
        // parts of a view need to be updated and/or what attributes need to be
        // persisted to the server. Unset attributes will be set to undefined.
        // You can also pass an attributes object to diff against the model,
        // determining if there *would be* a change.
        changedAttributes: function(diff) {
            if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
            var val, changed = false, old = this._previousAttributes;
            for (var attr in diff) {
                if (_.isEqual(old[attr], (val = diff[attr]))) continue;
                (changed || (changed = {}))[attr] = val;
            }
            return changed;
        },

        // Get the previous value of an attribute, recorded at the time the last
        // `"change"` event was fired.
        previous: function(attr) {
            if (!arguments.length || !this._previousAttributes) return null;
            return this._previousAttributes[attr];
        },

        // Get all of the attributes of the model at the time of the previous
        // `"change"` event.
        previousAttributes: function() {
            return _.clone(this._previousAttributes);
        },

        // Check if the model is currently in a valid state. It's only possible to
        // get into an *invalid* state if you're using silent changes.
        isValid: function() {
            return !this.validate(this.attributes);
        },

        // Run validation against the next complete set of model attributes,
        // returning `true` if all is well. If a specific `error` callback has
        // been passed, call that instead of firing the general `"error"` event.
        _validate: function(attrs, options) {
            if (options.silent || !this.validate) return true;
            attrs = _.extend({}, this.attributes, attrs);
            var error = this.validate(attrs, options);
            if (!error) return true;
            if (options && options.error) {
                options.error(this, error, options);
            } else {
                this.trigger('error', this, error, options);
            }
            return false;
        }

    });

    // Backbone.Collection
    // -------------------

    // Provides a standard collection class for our sets of models, ordered
    // or unordered. If a `comparator` is specified, the Collection will maintain
    // its models in sort order, as they're added and removed.
    var Collection = Backbone.Collection = function(models, options) {
        options || (options = {});
        if (options.model) this.model = options.model;
        if (options.comparator) this.comparator = options.comparator;
        this._reset();
        this.initialize.apply(this, arguments);
        if (models) this.reset(models, {silent: true, parse: options.parse});
    };

    // Define the Collection's inheritable methods.
    _.extend(Collection.prototype, Events, {

        // The default model for a collection is just a **Backbone.Model**.
        // This should be overridden in most cases.
        model: Model,

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize: function(){},

        // The JSON representation of a Collection is an array of the
        // models' attributes.
        toJSON: function(options) {
            return this.map(function(model){ return model.toJSON(options); });
        },

        // Add a model, or list of models to the set. Pass **silent** to avoid
        // firing the `add` event for every new model.
        add: function(models, options) {
            var i, index, length, model, cid, id, cids = {}, ids = {}, dups = [];
            options || (options = {});
            models = _.isArray(models) ? models.slice() : [models];

            // Begin by turning bare objects into model references, and preventing
            // invalid models or duplicate models from being added.
            for (i = 0, length = models.length; i < length; i++) {
                if (!(model = models[i] = this._prepareModel(models[i], options))) {
                    throw new Error("Can't add an invalid model to a collection");
                }
                cid = model.cid;
                id = model.id;
                if (cids[cid] || this._byCid[cid] || ((id != null) && (ids[id] || this._byId[id]))) {
                    dups.push(i);
                    continue;
                }
                cids[cid] = ids[id] = model;
            }

            // Remove duplicates.
            i = dups.length;
            while (i--) {
                models.splice(dups[i], 1);
            }

            // Listen to added models' events, and index models for lookup by
            // `id` and by `cid`.
            for (i = 0, length = models.length; i < length; i++) {
                (model = models[i]).on('all', this._onModelEvent, this);
                this._byCid[model.cid] = model;
                if (model.id != null) this._byId[model.id] = model;
            }

            // Insert models into the collection, re-sorting if needed, and triggering
            // `add` events unless silenced.
            this.length += length;
            index = options.at != null ? options.at : this.models.length;
            splice.apply(this.models, [index, 0].concat(models));
            if (this.comparator) this.sort({silent: true});
            if (options.silent) return this;
            for (i = 0, length = this.models.length; i < length; i++) {
                if (!cids[(model = this.models[i]).cid]) continue;
                options.index = i;
                model.trigger('add', model, this, options);
            }
            return this;
        },

        // Remove a model, or a list of models from the set. Pass silent to avoid
        // firing the `remove` event for every model removed.
        remove: function(models, options) {
            var i, l, index, model;
            options || (options = {});
            models = _.isArray(models) ? models.slice() : [models];
            for (i = 0, l = models.length; i < l; i++) {
                model = this.getByCid(models[i]) || this.get(models[i]);
                if (!model) continue;
                delete this._byId[model.id];
                delete this._byCid[model.cid];
                index = this.indexOf(model);
                this.models.splice(index, 1);
                this.length--;
                if (!options.silent) {
                    options.index = index;
                    model.trigger('remove', model, this, options);
                }
                this._removeReference(model);
            }
            return this;
        },

        // Add a model to the end of the collection.
        push: function(model, options) {
            model = this._prepareModel(model, options);
            this.add(model, options);
            return model;
        },

        // Remove a model from the end of the collection.
        pop: function(options) {
            var model = this.at(this.length - 1);
            this.remove(model, options);
            return model;
        },

        // Add a model to the beginning of the collection.
        unshift: function(model, options) {
            model = this._prepareModel(model, options);
            this.add(model, _.extend({at: 0}, options));
            return model;
        },

        // Remove a model from the beginning of the collection.
        shift: function(options) {
            var model = this.at(0);
            this.remove(model, options);
            return model;
        },

        // Get a model from the set by id.
        get: function(id) {
            if (id == null) return void 0;
            return this._byId[id.id != null ? id.id : id];
        },

        // Get a model from the set by client id.
        getByCid: function(cid) {
            return cid && this._byCid[cid.cid || cid];
        },

        // Get the model at the given index.
        at: function(index) {
            return this.models[index];
        },

        // Return models with matching attributes. Useful for simple cases of `filter`.
        where: function(attrs) {
            if (_.isEmpty(attrs)) return [];
            return this.filter(function(model) {
                for (var key in attrs) {
                    if (attrs[key] !== model.get(key)) return false;
                }
                return true;
            });
        },

        // Force the collection to re-sort itself. You don't need to call this under
        // normal circumstances, as the set will maintain sort order as each item
        // is added.
        sort: function(options) {
            options || (options = {});
            if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
            var boundComparator = _.bind(this.comparator, this);
            if (this.comparator.length == 1) {
                this.models = this.sortBy(boundComparator);
            } else {
                this.models.sort(boundComparator);
            }
            if (!options.silent) this.trigger('reset', this, options);
            return this;
        },

        // Pluck an attribute from each model in the collection.
        pluck: function(attr) {
            return _.map(this.models, function(model){ return model.get(attr); });
        },

        // When you have more items than you want to add or remove individually,
        // you can reset the entire set with a new list of models, without firing
        // any `add` or `remove` events. Fires `reset` when finished.
        reset: function(models, options) {
            models  || (models = []);
            options || (options = {});
            for (var i = 0, l = this.models.length; i < l; i++) {
                this._removeReference(this.models[i]);
            }
            this._reset();
            this.add(models, _.extend({silent: true}, options));
            if (!options.silent) this.trigger('reset', this, options);
            return this;
        },

        // Fetch the default set of models for this collection, resetting the
        // collection when they arrive. If `add: true` is passed, appends the
        // models to the collection instead of resetting.
        fetch: function(options) {
            options = options ? _.clone(options) : {};
            if (options.parse === undefined) options.parse = true;
            var collection = this;
            var success = options.success;
            options.success = function(resp, status, xhr) {
                collection[options.add ? 'add' : 'reset'](collection.parse(resp, xhr), options);
                if (success) success(collection, resp);
            };
            options.error = Backbone.wrapError(options.error, collection, options);
            return (this.sync || Backbone.sync).call(this, 'read', this, options);
        },

        // Create a new instance of a model in this collection. Add the model to the
        // collection immediately, unless `wait: true` is passed, in which case we
        // wait for the server to agree.
        create: function(model, options) {
            var coll = this;
            options = options ? _.clone(options) : {};
            model = this._prepareModel(model, options);
            if (!model) return false;
            if (!options.wait) coll.add(model, options);
            var success = options.success;
            options.success = function(nextModel, resp, xhr) {
                if (options.wait) coll.add(nextModel, options);
                if (success) {
                    success(nextModel, resp);
                } else {
                    nextModel.trigger('sync', model, resp, options);
                }
            };
            model.save(null, options);
            return model;
        },

        // **parse** converts a response into a list of models to be added to the
        // collection. The default implementation is just to pass it through.
        parse: function(resp, xhr) {
            return resp;
        },

        // Proxy to _'s chain. Can't be proxied the same way the rest of the
        // underscore methods are proxied because it relies on the underscore
        // constructor.
        chain: function () {
            return _(this.models).chain();
        },

        // Reset all internal state. Called when the collection is reset.
        _reset: function(options) {
            this.length = 0;
            this.models = [];
            this._byId  = {};
            this._byCid = {};
        },

        // Prepare a model or hash of attributes to be added to this collection.
        _prepareModel: function(model, options) {
            options || (options = {});
            if (!(model instanceof Model)) {
                var attrs = model;
                options.collection = this;
                model = new this.model(attrs, options);
                if (!model._validate(model.attributes, options)) model = false;
            } else if (!model.collection) {
                model.collection = this;
            }
            return model;
        },

        // Internal method to remove a model's ties to a collection.
        _removeReference: function(model) {
            if (this == model.collection) {
                delete model.collection;
            }
            model.off('all', this._onModelEvent, this);
        },

        // Internal method called every time a model in the set fires an event.
        // Sets need to update their indexes when models change ids. All other
        // events simply proxy through. "add" and "remove" events that originate
        // in other collections are ignored.
        _onModelEvent: function(event, model, collection, options) {
            if ((event == 'add' || event == 'remove') && collection != this) return;
            if (event == 'destroy') {
                this.remove(model, options);
            }
            if (model && event === 'change:' + model.idAttribute) {
                delete this._byId[model.previous(model.idAttribute)];
                this._byId[model.id] = model;
            }
            this.trigger.apply(this, arguments);
        }

    });

    // Underscore methods that we want to implement on the Collection.
    var methods = ['forEach', 'each', 'map', 'reduce', 'reduceRight', 'find',
        'detect', 'filter', 'select', 'reject', 'every', 'all', 'some', 'any',
        'include', 'contains', 'invoke', 'max', 'min', 'sortBy', 'sortedIndex',
        'toArray', 'size', 'first', 'initial', 'rest', 'last', 'without', 'indexOf',
        'shuffle', 'lastIndexOf', 'isEmpty', 'groupBy'];

    // Mix in each Underscore method as a proxy to `Collection#models`.
    _.each(methods, function(method) {
        Collection.prototype[method] = function() {
            return _[method].apply(_, [this.models].concat(_.toArray(arguments)));
        };
    });

    // Backbone.Router
    // -------------------

    // Routers map faux-URLs to actions, and fire events when routes are
    // matched. Creating a new one sets its `routes` hash, if not set statically.
    var Router = Backbone.Router = function(options) {
        options || (options = {});
        if (options.routes) this.routes = options.routes;
        this._bindRoutes();
        this.initialize.apply(this, arguments);
    };

    // Cached regular expressions for matching named param parts and splatted
    // parts of route strings.
    var namedParam    = /:\w+/g;
    var splatParam    = /\*\w+/g;
    var escapeRegExp  = /[-[\]{}()+?.,\\^$|#\s]/g;

    // Set up all inheritable **Backbone.Router** properties and methods.
    _.extend(Router.prototype, Events, {

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize: function(){},

        // Manually bind a single named route to a callback. For example:
        //
        //     this.route('search/:query/p:num', 'search', function(query, num) {
        //       ...
        //     });
        //
        route: function(route, name, callback) {
            Backbone.history || (Backbone.history = new History);
            if (!_.isRegExp(route)) route = this._routeToRegExp(route);
            if (!callback) callback = this[name];
            Backbone.history.route(route, _.bind(function(fragment) {
                var args = this._extractParameters(route, fragment);
                callback && callback.apply(this, args);
                this.trigger.apply(this, ['route:' + name].concat(args));
                Backbone.history.trigger('route', this, name, args);
            }, this));
            return this;
        },

        // Simple proxy to `Backbone.history` to save a fragment into the history.
        navigate: function(fragment, options) {
            Backbone.history.navigate(fragment, options);
        },

        // Bind all defined routes to `Backbone.history`. We have to reverse the
        // order of the routes here to support behavior where the most general
        // routes can be defined at the bottom of the route map.
        _bindRoutes: function() {
            if (!this.routes) return;
            var routes = [];
            for (var route in this.routes) {
                routes.unshift([route, this.routes[route]]);
            }
            for (var i = 0, l = routes.length; i < l; i++) {
                this.route(routes[i][0], routes[i][1], this[routes[i][1]]);
            }
        },

        // Convert a route string into a regular expression, suitable for matching
        // against the current location hash.
        _routeToRegExp: function(route) {
            route = route.replace(escapeRegExp, '\\$&')
                .replace(namedParam, '([^\/]+)')
                .replace(splatParam, '(.*?)');
            return new RegExp('^' + route + '$');
        },

        // Given a route, and a URL fragment that it matches, return the array of
        // extracted parameters.
        _extractParameters: function(route, fragment) {
            return route.exec(fragment).slice(1);
        }

    });

    // Backbone.History
    // ----------------

    // Handles cross-browser history management, based on URL fragments. If the
    // browser does not support `onhashchange`, falls back to polling.
    var History = Backbone.History = function() {
        this.handlers = [];
        _.bindAll(this, 'checkUrl');
    };

    // Cached regex for cleaning leading hashes and slashes .
    var routeStripper = /^[#\/]/;

    // Cached regex for detecting MSIE.
    var isExplorer = /msie [\w.]+/;

    // Has the history handling already been started?
    History.started = false;

    // Set up all inheritable **Backbone.History** properties and methods.
    _.extend(History.prototype, Events, {

        // The default interval to poll for hash changes, if necessary, is
        // twenty times a second.
        interval: 50,

        // Gets the true hash value. Cannot use location.hash directly due to bug
        // in Firefox where location.hash will always be decoded.
        getHash: function(windowOverride) {
            var loc = windowOverride ? windowOverride.location : window.location;
            var match = loc.href.match(/#(.*)$/);
            return match ? match[1] : '';
        },

        // Get the cross-browser normalized URL fragment, either from the URL,
        // the hash, or the override.
        getFragment: function(fragment, forcePushState) {
            if (fragment == null) {
                if (this._hasPushState || forcePushState) {
                    fragment = window.location.pathname;
                    var search = window.location.search;
                    if (search) fragment += search;
                } else {
                    fragment = this.getHash();
                }
            }
            if (!fragment.indexOf(this.options.root)) fragment = fragment.substr(this.options.root.length);
            return fragment.replace(routeStripper, '');
        },

        // Start the hash change handling, returning `true` if the current URL matches
        // an existing route, and `false` otherwise.
        start: function(options) {
            if (History.started) throw new Error("Backbone.history has already been started");
            History.started = true;

            // Figure out the initial configuration. Do we need an iframe?
            // Is pushState desired ... is it available?
            this.options          = _.extend({}, {root: '/'}, this.options, options);
            this._wantsHashChange = this.options.hashChange !== false;
            this._wantsPushState  = !!this.options.pushState;
            this._hasPushState    = !!(this.options.pushState && window.history && window.history.pushState);
            var fragment          = this.getFragment();
            var docMode           = document.documentMode;
            var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

            if (oldIE) {
                this.iframe = $('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo('body')[0].contentWindow;
                this.navigate(fragment);
            }

            // Depending on whether we're using pushState or hashes, and whether
            // 'onhashchange' is supported, determine how we check the URL state.
            if (this._hasPushState) {
                $(window).bind('popstate', this.checkUrl);
            } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
                $(window).bind('hashchange', this.checkUrl);
            } else if (this._wantsHashChange) {
                this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
            }

            // Determine if we need to change the base url, for a pushState link
            // opened by a non-pushState browser.
            this.fragment = fragment;
            var loc = window.location;
            var atRoot  = loc.pathname == this.options.root;

            // If we've started off with a route from a `pushState`-enabled browser,
            // but we're currently in a browser that doesn't support it...
            if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !atRoot) {
                this.fragment = this.getFragment(null, true);
                window.location.replace(this.options.root + '#' + this.fragment);
                // Return immediately as browser will do redirect to new url
                return true;

                // Or if we've started out with a hash-based route, but we're currently
                // in a browser where it could be `pushState`-based instead...
            } else if (this._wantsPushState && this._hasPushState && atRoot && loc.hash) {
                this.fragment = this.getHash().replace(routeStripper, '');
                window.history.replaceState({}, document.title, loc.protocol + '//' + loc.host + this.options.root + this.fragment);
            }

            if (!this.options.silent) {
                return this.loadUrl();
            }
        },

        // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
        // but possibly useful for unit testing Routers.
        stop: function() {
            $(window).unbind('popstate', this.checkUrl).unbind('hashchange', this.checkUrl);
            clearInterval(this._checkUrlInterval);
            History.started = false;
        },

        // Add a route to be tested when the fragment changes. Routes added later
        // may override previous routes.
        route: function(route, callback) {
            this.handlers.unshift({route: route, callback: callback});
        },

        // Checks the current URL to see if it has changed, and if it has,
        // calls `loadUrl`, normalizing across the hidden iframe.
        checkUrl: function(e) {
            var current = this.getFragment();
            if (current == this.fragment && this.iframe) current = this.getFragment(this.getHash(this.iframe));
            if (current == this.fragment) return false;
            if (this.iframe) this.navigate(current);
            this.loadUrl() || this.loadUrl(this.getHash());
        },

        // Attempt to load the current URL fragment. If a route succeeds with a
        // match, returns `true`. If no defined routes matches the fragment,
        // returns `false`.
        loadUrl: function(fragmentOverride) {
            var fragment = this.fragment = this.getFragment(fragmentOverride);
            var matched = _.any(this.handlers, function(handler) {
                if (handler.route.test(fragment)) {
                    handler.callback(fragment);
                    return true;
                }
            });
            return matched;
        },

        // Save a fragment into the hash history, or replace the URL state if the
        // 'replace' option is passed. You are responsible for properly URL-encoding
        // the fragment in advance.
        //
        // The options object can contain `trigger: true` if you wish to have the
        // route callback be fired (not usually desirable), or `replace: true`, if
        // you wish to modify the current URL without adding an entry to the history.
        navigate: function(fragment, options) {
            if (!History.started) return false;
            if (!options || options === true) options = {trigger: options};
            var frag = (fragment || '').replace(routeStripper, '');
            if (this.fragment == frag) return;

            // If pushState is available, we use it to set the fragment as a real URL.
            if (this._hasPushState) {
                if (frag.indexOf(this.options.root) != 0) frag = this.options.root + frag;
                this.fragment = frag;
                window.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, frag);

                // If hash changes haven't been explicitly disabled, update the hash
                // fragment to store history.
            } else if (this._wantsHashChange) {
                this.fragment = frag;
                this._updateHash(window.location, frag, options.replace);
                if (this.iframe && (frag != this.getFragment(this.getHash(this.iframe)))) {
                    // Opening and closing the iframe tricks IE7 and earlier to push a history entry on hash-tag change.
                    // When replace is true, we don't want this.
                    if(!options.replace) this.iframe.document.open().close();
                    this._updateHash(this.iframe.location, frag, options.replace);
                }

                // If you've told us that you explicitly don't want fallback hashchange-
                // based history, then `navigate` becomes a page refresh.
            } else {
                window.location.assign(this.options.root + fragment);
            }
            if (options.trigger) this.loadUrl(fragment);
        },

        // Update the hash location, either replacing the current entry, or adding
        // a new one to the browser history.
        _updateHash: function(location, fragment, replace) {
            if (replace) {
                location.replace(location.toString().replace(/(javascript:|#).*$/, '') + '#' + fragment);
            } else {
                location.hash = fragment;
            }
        }
    });

    // Backbone.View
    // -------------

    // Creating a Backbone.View creates its initial element outside of the DOM,
    // if an existing element is not provided...
    var View = Backbone.View = function(options) {
        this.cid = _.uniqueId('view');
        this._configure(options || {});
        this._ensureElement();
        this.initialize.apply(this, arguments);
        this.delegateEvents();
    };

    // Cached regex to split keys for `delegate`.
    var delegateEventSplitter = /^(\S+)\s*(.*)$/;

    // List of view options to be merged as properties.
    var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName'];

    // Set up all inheritable **Backbone.View** properties and methods.
    _.extend(View.prototype, Events, {

        // The default `tagName` of a View's element is `"div"`.
        tagName: 'div',

        // jQuery delegate for element lookup, scoped to DOM elements within the
        // current view. This should be prefered to global lookups where possible.
        $: function(selector) {
            return this.$el.find(selector);
        },

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize: function(){},

        // **render** is the core function that your view should override, in order
        // to populate its element (`this.el`), with the appropriate HTML. The
        // convention is for **render** to always return `this`.
        render: function() {
            return this;
        },

        // Remove this view from the DOM. Note that the view isn't present in the
        // DOM by default, so calling this method may be a no-op.
        remove: function() {
            this.$el.remove();
            return this;
        },

        // For small amounts of DOM Elements, where a full-blown template isn't
        // needed, use **make** to manufacture elements, one at a time.
        //
        //     var el = this.make('li', {'class': 'row'}, this.model.escape('title'));
        //
        make: function(tagName, attributes, content) {
            var el = document.createElement(tagName);
            if (attributes) $(el).attr(attributes);
            if (content != null) $(el).html(content);
            return el;
        },

        // Change the view's element (`this.el` property), including event
        // re-delegation.
        setElement: function(element, delegate) {
            if (this.$el) this.undelegateEvents();
            this.$el = (element instanceof $) ? element : $(element);
            this.el = this.$el[0];
            if (delegate !== false) this.delegateEvents();
            return this;
        },

        // Set callbacks, where `this.events` is a hash of
        //
        // *{"event selector": "callback"}*
        //
        //     {
        //       'mousedown .title':  'edit',
        //       'click .button':     'save'
        //       'click .open':       function(e) { ... }
        //     }
        //
        // pairs. Callbacks will be bound to the view, with `this` set properly.
        // Uses event delegation for efficiency.
        // Omitting the selector binds the event to `this.el`.
        // This only works for delegate-able events: not `focus`, `blur`, and
        // not `change`, `submit`, and `reset` in Internet Explorer.
        delegateEvents: function(events) {
            if (!(events || (events = getValue(this, 'events')))) return;
            this.undelegateEvents();
            for (var key in events) {
                var method = events[key];
                if (!_.isFunction(method)) method = this[events[key]];
                if (!method) throw new Error('Method "' + events[key] + '" does not exist');
                var match = key.match(delegateEventSplitter);
                var eventName = match[1], selector = match[2];
                method = _.bind(method, this);
                eventName += '.delegateEvents' + this.cid;
                if (selector === '') {
                    this.$el.bind(eventName, method);
                } else {
                    this.$el.delegate(selector, eventName, method);
                }
            }
        },

        // Clears all callbacks previously bound to the view with `delegateEvents`.
        // You usually don't need to use this, but may wish to if you have multiple
        // Backbone views attached to the same DOM element.
        undelegateEvents: function() {
            this.$el.unbind('.delegateEvents' + this.cid);
        },

        // Performs the initial configuration of a View with a set of options.
        // Keys with special meaning *(model, collection, id, className)*, are
        // attached directly to the view.
        _configure: function(options) {
            if (this.options) options = _.extend({}, this.options, options);
            for (var i = 0, l = viewOptions.length; i < l; i++) {
                var attr = viewOptions[i];
                if (options[attr]) this[attr] = options[attr];
            }
            this.options = options;
        },

        // Ensure that the View has a DOM element to render into.
        // If `this.el` is a string, pass it through `$()`, take the first
        // matching element, and re-assign it to `el`. Otherwise, create
        // an element from the `id`, `className` and `tagName` properties.
        _ensureElement: function() {
            if (!this.el) {
                var attrs = getValue(this, 'attributes') || {};
                if (this.id) attrs.id = this.id;
                if (this.className) attrs['class'] = this.className;
                this.setElement(this.make(this.tagName, attrs), false);
            } else {
                this.setElement(this.el, false);
            }
        }

    });

    // The self-propagating extend function that Backbone classes use.
    var extend = function (protoProps, classProps) {
        var child = inherits(this, protoProps, classProps);
        child.extend = this.extend;
        return child;
    };

    // Set up inheritance for the model, collection, and view.
    Model.extend = Collection.extend = Router.extend = View.extend = extend;

    // Backbone.sync
    // -------------

    // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
    var methodMap = {
        'create': 'POST',
        'update': 'PUT',
        'delete': 'DELETE',
        'read':   'GET'
    };

    // Override this function to change the manner in which Backbone persists
    // models to the server. You will be passed the type of request, and the
    // model in question. By default, makes a RESTful Ajax request
    // to the model's `url()`. Some possible customizations could be:
    //
    // * Use `setTimeout` to batch rapid-fire updates into a single request.
    // * Send up the models as XML instead of JSON.
    // * Persist models via WebSockets instead of Ajax.
    //
    // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
    // as `POST`, with a `_method` parameter containing the true HTTP method,
    // as well as all requests with the body as `application/x-www-form-urlencoded`
    // instead of `application/json` with the model in a param named `model`.
    // Useful when interfacing with server-side languages like **PHP** that make
    // it difficult to read the body of `PUT` requests.
    Backbone.sync = function(method, model, options) {
        var type = methodMap[method];

        // Default options, unless specified.
        options || (options = {});

        // Default JSON-request options.
        var params = {type: type, dataType: 'json'};

        // Ensure that we have a URL.
        if (!options.url) {
            params.url = getValue(model, 'url') || urlError();
        }

        // Ensure that we have the appropriate request data.
        if (!options.data && model && (method == 'create' || method == 'update')) {
            params.contentType = 'application/json';
            params.data = JSON.stringify(model.toJSON());
        }

        // For older servers, emulate JSON by encoding the request into an HTML-form.
        if (Backbone.emulateJSON) {
            params.contentType = 'application/x-www-form-urlencoded';
            params.data = params.data ? {model: params.data} : {};
        }

        // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
        // And an `X-HTTP-Method-Override` header.
        if (Backbone.emulateHTTP) {
            if (type === 'PUT' || type === 'DELETE') {
                if (Backbone.emulateJSON) params.data._method = type;
                params.type = 'POST';
                params.beforeSend = function(xhr) {
                    xhr.setRequestHeader('X-HTTP-Method-Override', type);
                };
            }
        }

        // Don't process data on a non-GET request.
        if (params.type !== 'GET' && !Backbone.emulateJSON) {
            params.processData = false;
        }

        // Make the request, allowing the user to override any Ajax options.
        return $.ajax(_.extend(params, options));
    };

    // Wrap an optional error callback with a fallback error event.
    Backbone.wrapError = function(onError, originalModel, options) {
        return function(model, resp) {
            resp = model === originalModel ? resp : model;
            if (onError) {
                onError(originalModel, resp, options);
            } else {
                originalModel.trigger('error', originalModel, resp, options);
            }
        };
    };

    // Helpers
    // -------

    // Shared empty constructor function to aid in prototype-chain creation.
    var ctor = function(){};

    // Helper function to correctly set up the prototype chain, for subclasses.
    // Similar to `goog.inherits`, but uses a hash of prototype properties and
    // class properties to be extended.
    var inherits = function(parent, protoProps, staticProps) {
        var child;

        // The constructor function for the new subclass is either defined by you
        // (the "constructor" property in your `extend` definition), or defaulted
        // by us to simply call the parent's constructor.
        if (protoProps && protoProps.hasOwnProperty('constructor')) {
            child = protoProps.constructor;
        } else {
            child = function(){ parent.apply(this, arguments); };
        }

        // Inherit class (static) properties from parent.
        _.extend(child, parent);

        // Set the prototype chain to inherit from `parent`, without calling
        // `parent`'s constructor function.
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();

        // Add prototype properties (instance properties) to the subclass,
        // if supplied.
        if (protoProps) _.extend(child.prototype, protoProps);

        // Add static properties to the constructor function, if supplied.
        if (staticProps) _.extend(child, staticProps);

        // Correctly set child's `prototype.constructor`.
        child.prototype.constructor = child;

        // Set a convenience property in case the parent's prototype is needed later.
        child.__super__ = parent.prototype;

        return child;
    };

    // Helper function to get a value from a Backbone object as a property
    // or as a function.
    var getValue = function(object, prop) {
        if (!(object && object[prop])) return null;
        return _.isFunction(object[prop]) ? object[prop]() : object[prop];
    };

    // Throw an error when a URL is needed, and none is supplied.
    var urlError = function() {
        throw new Error('A "url" property or function must be specified');
    };

    return Backbone;
}));
define('compiled-templates/homePageTemplate',["handlebars", "core/util/log"], function(Handlebars, log){ 
log("homePageTemplate precompiled template function module loaded."); 
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {}; 
templates['homePageTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "<div class=\"home-page\">\n\n   <div>Home asdfg</div>\n   <div id=\"songsGridWidget\">\n\n   </div>\n</div>";}); 
Handlebars.registerPartial("homePageTemplate", templates["homePageTemplate"]); 
return templates["homePageTemplate"]; 
});
define('compiled-templates/widgets/songGridWidgetTemplate',["handlebars", "core/util/log"], function(Handlebars, log){ 
log("songGridWidgetTemplate precompiled template function module loaded."); 
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {}; 
templates['songGridWidgetTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, foundHelper, self=this;


  buffer += "<div id=\"songsGrid\">\n    <ul id=\"songs\">\n        ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.songRowsTemplate, 'songRowsTemplate', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n</div>";
  return buffer;}); 
Handlebars.registerPartial("songGridWidgetTemplate", templates["songGridWidgetTemplate"]); 
return templates["songGridWidgetTemplate"]; 
});
define('compiled-templates/widgets/songRowsTemplate',["handlebars", "core/util/log"], function(Handlebars, log){ 
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
define('lib/models/SongsModel',[
    'core/util/log',
    'underscore'
], function(log, _){
    log('SongsModel module loaded.');

    //since this is supplied via a global viewModel as part of the page, just grab it's value.
    var SongsModel = {
        allSongs: viewModel.musicItems,

        create: function(opts){
            var options = {
                setSize : 25, //songs will contain 100 items at a time
                initialSetSize : 100 //so we can display a bunch
            };
            _.extend(options, opts);


            //where we will start the page
            var index = 0;
            var setIndex = 0;

            return {
                //represents a limited set of allSongs, so that we don't render everything at once.
                //will be updated when nextSet() is called
                songs : SongsModel.allSongs.slice(index, options.initialSetSize + index),
                //mutates songs so that it represents the next page of songs
                nextSet : function(){
                    index += options.setSize;
                    //todo: check array length?
                    this.songs = SongsModel.allSongs.slice(index, options.setSize + index);
                }
            }

        }


    };

    return SongsModel;
});
define('lib/models/MusicPlayer',[
    'core/util/log'
], function(log){

    /**
     * API for playing and manipulating songs/music.
     * Responsibilities include:
     * - playing a song
     * - pausing
     * -
     */
    function MusicPlayer(){
        this.currentSong = undefined;
        this.onPlayListeners = [];
        this.onStopListeners = [];
        this.onMetadataListeners = [];
        this.isSongCurrentlyPlaying = false;
    }


    /**
     * Controls
     * @param songId
     */
    MusicPlayer.prototype.playSong = function(songId){
        log('playing song');
        //stop the current song
        this.stopSong();

        //create an audio tag with src = '/getSong?songId='+songId
        this.currentSong = new Audio('/getSong?songId='+songId);
        this.currentSong.play();

        //events
        this.handleLoadedMetadata();

        this.isSongCurrentlyPlaying = true;
        this.notifyPlayListeners();
    };

    MusicPlayer.prototype.stopSong = function(){
        if(!this.currentSong){return false;}
        this.currentSong.pause();
        this.isSongCurrentlyPlaying = false;
        this.notifyStopListeners();
    };


    //when duration, etc become available
    MusicPlayer.prototype.handleLoadedMetadata = function(){
        var self = this;
        this.currentSong.addEventListener('loadedmetadata', function(e){
            log('metadata: ' + self.currentSong.duration );
            self.notifyMetadataListeners(self);
        }, false);

    };

    //returns in hours:minutes string
    MusicPlayer.prototype.getDuration = function(){
        var totalSeconds = this.currentSong.duration;
        log('seconds: '+ totalSeconds);

        var displaySeconds = Math.round( ((totalSeconds % 60) * 100) / 100); //round to 2 decimal places
        if(displaySeconds < 10){displaySeconds = '0'+displaySeconds;} //add 0 to front if less than 10
        var displayMinutes = Math.floor(totalSeconds/60);

        return displayMinutes + ':' + displaySeconds;
    };

    /**
     * Register observers
     * @param playCallback
     */
    MusicPlayer.prototype.onPlay = function(playCallback) {
        this.onPlayListeners.push(playCallback);

    };
    MusicPlayer.prototype.onStop = function(stopCallback) {
        this.onStopListeners.push(stopCallback);
    };

    MusicPlayer.prototype.onMetadata = function(callback){
        this.onMetadataListeners.push(callback);
    };

    MusicPlayer.prototype.notifyPlayListeners = function(){
        for(var i=0; i < this.onPlayListeners.length; ++i){
            var listener = this.onPlayListeners[i];
            if(typeof listener === 'function'){
                listener(); //todo, pass song info
            }
        }
    };

    //
    MusicPlayer.prototype.notifyMetadataListeners = function(metadata){
        for(var i=0; i < this.onMetadataListeners.length; ++i){
            var listener = this.onMetadataListeners[i];
            if(typeof listener === 'function'){
                listener(metadata);
            }
        }
    };
    MusicPlayer.prototype.notifyStopListeners = function(){
        for(var i=0; i < this.onStopListeners.length; ++i){
            var listener = this.onStopListeners[i];
            if(typeof listener === 'function'){
                listener(); //todo, pass song info
            }
        }
    };

    return new MusicPlayer();
});
define('lib/widgets/SongGridWidget',[
    'core/util/log',
    'backbone',
    'jquery',
    'compiled-templates/widgets/songGridWidgetTemplate',
    'compiled-templates/widgets/songRowsTemplate',
    'lib/models/SongsModel',
    'lib/models/MusicPlayer'
], function(log, Backbone, $, songGridWidgetTemplate, songRowsTemplate, SongsModel, musicPlayer){

    //static
    var $window = $(window);
    var $body = $("body");
    var $document = $(document);

    /**
     * Responsible for rendering out a table of songs.
     * Handles scrolling so that we only render a subset of total songs, to help improve performance.
     * @type {*}
     */
    var SongGridWidget = Backbone.View.extend({
        //el:'#pages',
        initialize : function(){
            log('SongGridWidget.initialize called.' + this.el);
            this.songsModel = SongsModel.create();

            //listen for scroll events so we can render songs as the user scrolls
            $window.scroll(this.scrollHandler.bind(this));

            this.$el.on('tap', function(){console.log('tapped');});
        },
        events:{
            'click #songs > li': function(e){
                log('click occurred.');
                var $target = $(e.currentTarget);
                var songId = $target.attr('data-songId');
                log('songId = ' + songId);
                musicPlayer.playSong(songId);
            }

        },
        render: function(){ //don't call until the dom is ready
            log('SongGridWidget.render called.');
            this.$el.html(songGridWidgetTemplate(this.songsModel));
            this.$songs = this.$songs || this.$el.find('#songs');

            return this;
        },
        renderNextSetOfSongs : function(){
            //log('renderNextSetOfSongs called.');
            //move songs to represent the next list of items (paging)
            this.songsModel.nextSet();

            this.$songs.append(songRowsTemplate(this.songsModel));  //<-- about 16ms
            //this.$songs[0].innerHTML += songRowsTemplate(this.songsModel); <-- horrible performance
        },
        //render songs as the user scrolls
        scrollHandler: function(){
            //log('scrollHandler called');

            var scrollTop = $body.scrollTop();
            var windowHeight = $window.height();
            var documentHeight = $document.height();

            var start = scrollTop;
            var stop = documentHeight/1.7;
            //log('scrollHandler called: top:'+ scrollTop + ' docHeight:' + documentHeight + ' windowHeight:' + windowHeight + ' start:' + start + ' stop:' + stop);

            //only when the user is scrolling down
            this.scrollDirection(function(){
                //log('user is scrolling down');
                if(start > stop){
                    this.renderNextSetOfSongs();
                }
            }.bind(this));

        },
        scrollDirection : function(scrollDownCallback){
            if ( typeof this.scrollDirection.x == 'undefined' ) {
                this.scrollDirection.x=window.pageXOffset;
                this.scrollDirection.y=window.pageYOffset;
            }
            var diffX = this.scrollDirection.x - window.pageXOffset;
            var diffY = this.scrollDirection.y - window.pageYOffset;

            if( diffX<0 ) {
                // Scroll right
            } else if( diffX>0 ) {
                // Scroll left
            } else if( diffY<0 ) {
                // Scroll down
                scrollDownCallback();
            } else if( diffY>0 ) {
                // Scroll up
            } else {
                // First scroll event
            }
            this.scrollDirection.x = window.pageXOffset;
            this.scrollDirection.y = window.pageYOffset;
        }
    });

    return SongGridWidget;
});
define('lib/views/HomeView',[
    'core/util/log',
    'backbone',
    'underscore',
    'jquery',
    'compiled-templates/homePageTemplate',
    'lib/widgets/SongGridWidget'
], function(log, Backbone, _, $, homePageTemplateFunction, SongGridWidget){

    var HomeView = Backbone.View.extend({
        el:'#pages',
        initialize : function(){
            log('HomeView.initialize called.' + this.el);
            this.options.widgets = [
                {selector:'#songsGridWidget', widget:new SongGridWidget()}
            ];
        },
        render: function(){ //don't call until the dom is ready
            log('HomeView.render called.');

            this.$el.html(homePageTemplateFunction());

            _.each(this.options.widgets, function(widgetMap){
                this.$el.find(widgetMap.selector).append(widgetMap.widget.render().el);
            }, this);

            return this;
        }
    });

    return HomeView;
});
define('lib/controllers/HomeController',[
    'core/util/log',
    'lib/views/HomeView'
], function(log, HomeView){

    function HomeController(){
        log('HomeController constructor called.');
        this.homeView = new HomeView();
    }

    HomeController.prototype.showHomePage = function(){
        log('HomeController.showHomePage');
        this.homeView.render();
    };



    return HomeController;
});
/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-touch-teststyles-prefixes
 */
define('modernizer',[],function(){
    ;Modernizr = function(a,b,c){function v(a){i.cssText=a}function w(a,b){return v(l.join(a+";")+(b||""))}function x(a,b){return typeof a===b}function y(a,b){return!!~(""+a).indexOf(b)}function z(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:x(f,"function")?f.bind(d||b):f}return!1}var d="2.5.3",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l=" -webkit- -moz- -o- -ms- ".split(" "),m={},n={},o={},p=[],q=p.slice,r,s=function(a,c,d,e){var h,i,j,k=b.createElement("div"),l=b.body,m=l?l:b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:g+(d+1),k.appendChild(j);return h=["&#173;","<style>",a,"</style>"].join(""),k.id=g,(l?k:m).innerHTML+=h,m.appendChild(k),l||(m.style.background="",f.appendChild(m)),i=c(k,a),l?k.parentNode.removeChild(k):m.parentNode.removeChild(m),!!i},t={}.hasOwnProperty,u;!x(t,"undefined")&&!x(t.call,"undefined")?u=function(a,b){return t.call(a,b)}:u=function(a,b){return b in a&&x(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=q.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(q.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(q.call(arguments)))};return e});var A=function(c,d){var f=c.join(""),g=d.length;s(f,function(c,d){var f=b.styleSheets[b.styleSheets.length-1],h=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"",i=c.childNodes,j={};while(g--)j[i[g].id]=i[g];e.touch="ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch||(j.touch&&j.touch.offsetTop)===9},g,d)}([,["@media (",l.join("touch-enabled),("),g,")","{#touch{top:9px;position:absolute}}"].join("")],[,"touch"]);m.touch=function(){return e.touch};for(var B in m)u(m,B)&&(r=B.toLowerCase(),e[r]=m[B](),p.push((e[r]?"":"no-")+r));return v(""),h=j=null,e._version=d,e._prefixes=l,e.testStyles=s,e}(this,this.document);

    return Modernizr;
});
define('lib/widgets/NavigationBar',[
    'core/util/log',
    'jquery',
    'modernizer'
], function(log, $, modernizer){

    function NavigationBar(options){
        log('NavigationBar constructor called.');
        this.options = {
            navigationBarId : 'navbar',
            menuItemsExpandedId : 'menuExpanded',
            menuButtonSelector : '#menuButton', //menu button selector for touch events to expand menu
            menuItemSelector : 'ul > li > a',
            menuExpandedHiddenClass : 'menu-expanded-shown'//'menu-expanded-hidden'
        };
        $.extend(this.options, options);

        var self = this;

        //used for when we are dealing with a small screen.
        self.isMenuExpanded = false;

        //init
        $(function(){
            self.$navigationBar = $('#'+self.options.navigationBarId);
            self.$menuItemsExpanded = $('#'+self.options.menuItemsExpandedId);

            log('modernizer.touch is :' + modernizer.touch);
            self.registerMenuTouchHandlers();
            self.registerMenuItemTouchHandlers();
        });

    }

    /**
     * Need to hide menu when a menu item is touched
     */
    NavigationBar.prototype.registerMenuItemTouchHandlers = function(){
        var self = this;
        function handleClickOrTouchStart(){
            if(!self.isMenuExpanded){
                self.$menuItemsExpanded.addClass(self.options.menuExpandedHiddenClass);
            }else{
                self.$menuItemsExpanded.removeClass(self.options.menuExpandedHiddenClass);
            }

            self.isMenuExpanded = !self.isMenuExpanded;
        }

//        if(modernizer.touch){
//            this.$menuItemsExpanded.on('touchstart', this.options.menuItemSelector, handleClickOrTouchStart);
//        }else{
//            this.$menuItemsExpanded.on('click', this.options.menuItemSelector, handleClickOrTouchStart);
//        }
        this.$menuItemsExpanded.on('click', this.options.menuItemSelector, handleClickOrTouchStart);
    };

    /**
     * Should only be called after document ready
     */
    NavigationBar.prototype.registerMenuTouchHandlers = function(){
        var originalUrl;
        var self = this;
        self.isMenuExpanded = false;

        function handleClickOrTouchStart(){
            var $this = $(this);
            log('touchstart fired for : {0}', $this.attr('alt'));

            //image for button should change to pressed
            originalUrl = $this.attr('src');
            //$this.attr('src', 'images/menu-button-pressed.png');    //todo: use sprites

            //have to do this because :active isn't supported very well.
            if(!self.isMenuExpanded){
                self.$menuItemsExpanded.addClass(self.options.menuExpandedHiddenClass);
            }else{
                self.$menuItemsExpanded.removeClass(self.options.menuExpandedHiddenClass);
            }

            self.isMenuExpanded = !self.isMenuExpanded;
        }

        //only listen for touch events if they are supported.
        if(modernizer.touch){
            this.$navigationBar.on('touchstart', this.options.menuButtonSelector, handleClickOrTouchStart);

            this.$navigationBar.on('touchend', this.options.menuButtonSelector, function(){
                var $this = $(this);
                log('touchsend fired for : {0}', $this.attr('alt'));

                //image back to original
               // $this.attr('src', originalUrl);
            });
        }else{
            this.$navigationBar.on('click', this.options.menuButtonSelector, handleClickOrTouchStart);
        }

    };

    return NavigationBar;
});

//
//this.$navigationBar.on('touchstart', this.options.menuButtonSelector, function(){
//    var $this = $(this);
//    log('touchstart fired for : {0}', $this.attr('alt'));
//
//    //image for button should change to pressed
//    originalUrl = $this.attr('src');
//    $this.attr('src', 'images/menu-button-pressed.png');    //todo: use sprites
//
//    //reposition menuitems expanded to be right under the menu button img
//    //but only do this work if we are showing. not necessary when hiding
//    if(!isMenuExpanded){
//        var menuButtonOffset = $this.position();
//        log('offset top: {0} offset left: {1}', menuButtonOffset.top, menuButtonOffset.left);
//
//        var menuButtonHeight = $this.height();
//        var menuItemsExpandedWidth = self.$menuItemsExpanded.width();
//
//        self.$menuItemsExpanded.css({
//            'top': menuButtonOffset.top + menuButtonHeight,
//            'left' : menuButtonOffset.left - menuItemsExpandedWidth
//        });
//    }
//
//    //show or hide menuitems expanded
//    // self.$menuItemsExpanded.toggle();   //we don't want block, we want inline block, so we'll have to do our own toggle
//    var displayTypeForMenuItemsExpanded = isMenuExpanded ? 'none' : 'inline-block';
//    self.$menuItemsExpanded.css({'display':displayTypeForMenuItemsExpanded});
//    isMenuExpanded = !isMenuExpanded;
//
//});
//
//this.$navigationBar.on('touchend', this.options.menuButtonSelector, function(){
//    var $this = $(this);
//    log('touchsend fired for : {0}', $this.attr('alt'));
//
//    //image back to original
//    $this.attr('src', originalUrl);
//
//
//});
//require.config({
//    map:{
//        '*' : {
//            'jquery' : 'zepto'
//        }
//    }
//});

define('app',[
    'core/util/log',
    'core/core',
    'jquery',
    'backbone',
    'lib/controllers/HomeController',
    'lib/widgets/NavigationBar'
], function(log, core, $, Backbone, HomeController, NavigationBar){

    function App(){
        log('app constructor called.');

        //load plugins, etc
        core.initPlugins();

        var self = this;
        //make everything easier to manage by waiting until dom ready to create controllers
        $(function(){
            log('app : document ready. creating controllers and establishing routes.');
            //create controllers
            self.homeController = new HomeController();

            //setup routes
            self.setupRoutes();

            //create global widgets
            self.navigationBar = new NavigationBar();

            //if there is no relative route, send them to the home page.
            log('current route is : ' + Backbone.history.fragment);
            if(Backbone.history.fragment == ""){
                //load the home page
                self.router.navigate('home', {trigger:true});
            }
        });



    }



    App.prototype.setupRoutes = function(){
        log('App.setupRoutes called.');
        var self = this;
        var AppRouter = Backbone.Router.extend({
            routes: {
                "demos/buttonsDemo" : "buttonsDemo",
                "demos/responsiveDemo" : "responsiveDemo",
                "demos/responsiveFlexBoxDemo" : "responsiveFlexBoxDemo",
                "home" : "home",
                "demos/home" : "demosHome"
            },
            home: function(){
              log('router: home called');
                self.homeController.showHomePage();
            }
        });

        this.router = new AppRouter();
        Backbone.history.start();
    };

    $(function(){
       log('document ready.');
    });

    return new App();
});