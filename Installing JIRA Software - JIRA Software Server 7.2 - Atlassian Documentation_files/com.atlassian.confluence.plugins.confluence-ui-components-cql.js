;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'soy/cql/cql-component.soy' */
// This file was automatically generated from cql-component.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.UI.Components.CQL.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.CQL == 'undefined') { Confluence.UI.Components.CQL = {}; }
if (typeof Confluence.UI.Components.CQL.Templates == 'undefined') { Confluence.UI.Components.CQL.Templates = {}; }


Confluence.UI.Components.CQL.Templates.container = function(opt_data, opt_ignored) {
  return '<div class="cql-container"><div class="cql-error-container"></div><div class="cql-fields"></div></div>';
};
if (goog.DEBUG) {
  Confluence.UI.Components.CQL.Templates.container.soyTemplateName = 'Confluence.UI.Components.CQL.Templates.container';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'soy/cql/cql-filter-field.soy' */
// This file was automatically generated from cql-filter-field.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.UI.Components.CQLFilters.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.CQLFilters == 'undefined') { Confluence.UI.Components.CQLFilters = {}; }
if (typeof Confluence.UI.Components.CQLFilters.Templates == 'undefined') { Confluence.UI.Components.CQLFilters.Templates = {}; }


Confluence.UI.Components.CQLFilters.Templates.baseFilterField = function(opt_data, opt_ignored) {
  var output = '<div class="cql-filter cql-field-' + soy.$$escapeHtml(opt_data.field.fieldName) + ' cql-type-' + soy.$$escapeHtml(opt_data.field.uiSupport.valueType) + '">';
  var id__soy8 = 'cql-field-' + soy.$$escapeHtml(opt_data.field.fieldName) + '-' + soy.$$escapeHtml(opt_data.counter);
  output += '<div class=\'cql-field-heading\'><label for="' + soy.$$escapeHtml(id__soy8) + '">' + soy.$$escapeHtml(opt_data.label) + ((! opt_data.field.fixed) ? '<span class="aui-icon aui-icon-small aui-iconfont-remove" title="' + soy.$$escapeHtml("Remove filter") + '"></span>' : '') + '</label></div><div class=\'cql-filter-field-input-container\'><input type="text" class="cql-field-input text" id="' + soy.$$escapeHtml(id__soy8) + '"></div></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.UI.Components.CQLFilters.Templates.baseFilterField.soyTemplateName = 'Confluence.UI.Components.CQLFilters.Templates.baseFilterField';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'soy/cql/cql-filter-select.soy' */
// This file was automatically generated from cql-filter-select.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.UI.Components.CQL.FilterSelect.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.CQL == 'undefined') { Confluence.UI.Components.CQL = {}; }
if (typeof Confluence.UI.Components.CQL.FilterSelect == 'undefined') { Confluence.UI.Components.CQL.FilterSelect = {}; }
if (typeof Confluence.UI.Components.CQL.FilterSelect.Templates == 'undefined') { Confluence.UI.Components.CQL.FilterSelect.Templates = {}; }


Confluence.UI.Components.CQL.FilterSelect.Templates.container = function(opt_data, opt_ignored) {
  return '<div class="cql-add-filter-container"><button type="button" class="aui-button aui-button-link">' + soy.$$escapeHtml("Add a filter") + '</button><div class="input-wrapper hidden"><input class="select2-input" type="text" /></div></div>';
};
if (goog.DEBUG) {
  Confluence.UI.Components.CQL.FilterSelect.Templates.container.soyTemplateName = 'Confluence.UI.Components.CQL.FilterSelect.Templates.container';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'soy/date-picker.soy' */
// This file was automatically generated from date-picker.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.UI.Components.DatePicker.templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.DatePicker == 'undefined') { Confluence.UI.Components.DatePicker = {}; }
if (typeof Confluence.UI.Components.DatePicker.templates == 'undefined') { Confluence.UI.Components.DatePicker.templates = {}; }


Confluence.UI.Components.DatePicker.templates.input = function(opt_data, opt_ignored) {
  return '<div class="aui-navgroup-vertical"><ul class="aui-nav"><li class="aui-nav-selected"><a data-value="">' + soy.$$escapeHtml("Any date") + '</a></li><li><a data-value="now(\'-1d\')">' + soy.$$escapeHtml("Last 24 hours") + '</a></li><li><a data-value="now(\'-1w\')">' + soy.$$escapeHtml("Last week") + '</a></li><li><a data-value="now(\'-1M\')">' + soy.$$escapeHtml("Last month") + '</a></li><li><a data-value="now(\'-1y\')">' + soy.$$escapeHtml("Last year") + '</a></li><li><a data-value="custom">' + soy.$$escapeHtml("Custom") + '</a><span class="absolute-date-pickers"><input class="from-date-picker text" type="date" /><span>&ndash;</span><input class="to-date-picker text" type="date" /></span></li></ul></div>';
};
if (goog.DEBUG) {
  Confluence.UI.Components.DatePicker.templates.input.soyTemplateName = 'Confluence.UI.Components.DatePicker.templates.input';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'soy/cql/cql-type-picker.soy' */
// This file was automatically generated from cql-type-picker.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.UI.Components.CQL.TypePicker.templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.CQL == 'undefined') { Confluence.UI.Components.CQL = {}; }
if (typeof Confluence.UI.Components.CQL.TypePicker == 'undefined') { Confluence.UI.Components.CQL.TypePicker = {}; }
if (typeof Confluence.UI.Components.CQL.TypePicker.templates == 'undefined') { Confluence.UI.Components.CQL.TypePicker.templates = {}; }


Confluence.UI.Components.CQL.TypePicker.templates.suggestions = function(opt_data, opt_ignored) {
  var output = '<div class="aui-navgroup-vertical"><ul class="aui-nav">';
  var typeList4 = opt_data.types;
  var typeListLen4 = typeList4.length;
  for (var typeIndex4 = 0; typeIndex4 < typeListLen4; typeIndex4++) {
    var typeData4 = typeList4[typeIndex4];
    output += '<li ' + ((typeIndex4 == 0) ? ' class="aui-nav-selected"' : '') + '><a data-value="' + soy.$$escapeHtml(typeData4.type) + '">' + soy.$$escapeHtml(typeData4.label) + '</a></li>';
  }
  output += '<li><a data-value="custom">' + soy.$$escapeHtml("Custom") + '</a></li></ul></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.UI.Components.CQL.TypePicker.templates.suggestions.soyTemplateName = 'Confluence.UI.Components.CQL.TypePicker.templates.suggestions';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'soy/cql/cql-space-field.soy' */
// This file was automatically generated from cql-space-field.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.UI.Components.CQL.SpaceField.templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.CQL == 'undefined') { Confluence.UI.Components.CQL = {}; }
if (typeof Confluence.UI.Components.CQL.SpaceField == 'undefined') { Confluence.UI.Components.CQL.SpaceField = {}; }
if (typeof Confluence.UI.Components.CQL.SpaceField.templates == 'undefined') { Confluence.UI.Components.CQL.SpaceField.templates = {}; }


Confluence.UI.Components.CQL.SpaceField.templates.archivedSpacesOption = function(opt_data, opt_ignored) {
  return '<span><input type="checkbox" value="true" id="search-filter-include-archived" name="includeArchivedSpaces"><label for="search-filter-include-archived">Search archived spaces</label></span>';
};
if (goog.DEBUG) {
  Confluence.UI.Components.CQL.SpaceField.templates.archivedSpacesOption.soyTemplateName = 'Confluence.UI.Components.CQL.SpaceField.templates.archivedSpacesOption';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-special-spaces.js' */
define("confluence-ui-components/js/cql/internal/cql-special-spaces",["underscore"],function(c){var b={conf_current:"currentSpace()",conf_favorites:"favourite",conf_global:"global",conf_personal:"personal"};var f=c.invert(b);function d(g){if(g==="search-screen"){return c.omit(b,"conf_current")}return b}function a(g){return c.keys(d(g))}function e(g){return f[g]}return{getMap:d,getKeys:a,getUIValue:e}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-ajax.js' */
define("confluence-ui-components/js/cql/internal/cql-ajax",["jquery","underscore","ajs"],function(d,c,b){var g;function f(){if(!g){g=d.Deferred();var j=function(l){var m=c.values(l);if(!m.length){throw Error("Unknown CQL field data returned from server - cannot initialise CQL fields.")}var k=c.union.apply(c,m);k=c.sortBy(k,"fieldName");g.resolve(k)};var i=function(){g.reject()};d.getJSON(b.contextPath()+"/rest/cql/fields?filter=withUiSupport").done(j).fail(i)}return g.promise()}function e(i){return d.getJSON(b.contextPath()+"/rest/cql/expressions?cql="+encodeURIComponent(i))}function a(){return d.getJSON(b.contextPath()+"/rest/cql/contenttypes?category=content")}function h(){return d.getJSON(b.contextPath()+"/rest/cql/contenttypes?category=all")}return{getFields:f,parseClauses:e,getTypes:h,getContentTypes:a}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-date-picker.js' */
define("confluence-ui-components/js/cql/internal/cql-date-picker",["ajs","jquery"],function(a,b){function c(k){var h=b(Confluence.UI.Components.DatePicker.templates.input());var d=h.find(".aui-nav li");var g=h.find(".absolute-date-pickers").hide();var f=h.find(".from-date-picker");var i=h.find(".to-date-picker");var e=function(){};this.onChange=function(l){e=l;f.change(l);i.change(l)};h.on("click",".aui-nav a",function(){var l=d.filter("li.aui-nav-selected");var m=b(this).closest("li");if(l[0]!=m[0]){d.not(m).removeClass("aui-nav-selected");m.addClass("aui-nav-selected");e()}if(b(this).data("value")==="custom"){g.slideDown("fast")}else{g.slideUp("fast")}});var j={overrideBrowserDefault:true};a.DatePicker(f,j);a.DatePicker(i,j);f.attr("placeholder","From");i.attr("placeholder","To");k.replaceWith(h);return{getSelectedOption:function(){var l=d.filter(".aui-nav-selected").find("a");return l.data("value")},selectOption:function(m){var l=d.find('a[data-value="'+m+'"]');l.click()},getFromDate:function(){return f.val()},getToDate:function(){return i.val()},setFromDate:function(l){f.val(l);d.find("a[data-value='custom']").click()},setToDate:function(l){i.val(l);d.find("a[data-value='custom']").click()}}}return{build:c}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-type-picker.js' */
define("confluence-ui-components/js/cql/internal/cql-type-picker",["jquery","underscore","ajs","confluence-ui-components/js/cql/internal/cql-ajax","confluence-ui-components/js/include-exclude-picker","confluence/legacy","confluence-ui-components/js/cql/internal/cql-set-value-helper"],function(e,j,g,a,c,i,f){var b;var d=[];function l(m){d=j.map(m,function(n){return{id:n.type,text:n.label}})}function k(){b=null;d=[]}function h(n,r){var t,m,p,s=[];if(!b){b=r?a.getContentTypes():a.getTypes();b.done(l)}b.done(function(){if(n.length){var u=j.pluck(d,"id");s=[].concat(d);n.forEach(function(v){if(v.type!==""&&!j.contains(u,v.type)){s.push({id:v.type,text:v.label})}})}else{s=d}});var q={query:function(u,w,v){b.done(function(){w(u.term);var x=window.Select2.query.local({results:j.map(s,v)});x(u)})},initSelection:function(v,y){var u=v.val().split(",");var x="";var w=j.map(u,function(z){var A=z.charAt(0);if(A==="-"){x="-";return z.substring(1)}return z});b.done(function(){var z=j.filter(s,function(A){return j.contains(w,A.id)});y(j.map(z,function(A){return{id:x+A.id,text:x+A.text}}))})},multiple:true,placeholder:"All content types"};function o(u){t=u;if(g.trace){t.on("change",function(){g.trace("type.field.changed")})}if(n.length){var v=e(i.UI.Components.CQL.TypePicker.templates.suggestions({types:n}));m=v.find(".aui-nav li");t.before(v);v.on("click",".aui-nav a",function(){var z=e(this).closest("li");var y=m.filter(".aui-nav-selected");if(z[0]===y[0]){return}y.removeClass("aui-nav-selected");z.addClass("aui-nav-selected");var x=e(this).attr("data-value");if(x=="custom"){p.slideDown("fast")}else{p.hide()}var w=true;t.select2("val",[x],w)})}t.auiSelect2(c.build(q));if(n.length){p=t.closest(".cql-filter").find(".select2-container");p.hide()}}return{setupInput:o,setValues:function(u){if(m){if(u.length==1){var w=m.find('[data-value="'+u[0]+'"]').parent();m.not(w).removeClass("aui-nav-selected");w.addClass("aui-nav-selected")}else{if(u.length>1){var w=m.find('[data-value="custom"]').parent();m.not(w).removeClass("aui-nav-selected");w.addClass("aui-nav-selected");p.show()}}}var v=e.Deferred();b.done(function(){f.setValues(t,u).done(function(){v.resolve()})});return v}}}return{build:h,_clearCache:k}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-field-model.js' */
define("confluence-ui-components/js/cql/internal/cql-field-model",[],function(){function a(b){return b.uiSupport.label.translation}return{getLabel:a}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-space-expression-adjuster.js' */
define("confluence-ui-components/js/cql/internal/cql-space-expression-adjuster",["underscore","confluence-ui-components/js/cql/internal/cql-special-spaces"],function(c,a){function b(f){var e=f.functionValues;if(!e||!e.length){return f}var d=[];c.each(e,function(g){if(g.functionName==="currentSpace"){d.push(a.getUIValue("currentSpace()"))}else{throw new Error(g.functionName+" is not a known function")}});f.values=d.concat(f.values);return f}return{convertFunctionValues:b}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/filterfields/cql-autocomplete-filter-field.js' */
define("confluence-ui-components/js/cql/internal/filterfields/cql-autocomplete-filter-field",["jquery","ajs","confluence/legacy","confluence-ui-components/js/cql/internal/cql-expression-builder","confluence-ui-components/js/cql/internal/cql-set-value-helper"],function(d,h,j,b,f){function k(m){var n=m.suggestedResults;var l=m.searchResults;if(!n.length){return l}if(!l.length){return n}return[{text:"Suggestions",children:n},{text:"Search results",children:l}]}function a(l){return{query:l,searchContext:JSON.stringify({spaceKey:h.Meta.get("space-key"),contentId:h.Meta.get("content-id")})}}var c={placeholder:"Start typing to search",multiple:true,tokenSeparators:[" ",","],createSearchChoice:function(l){if(!l){return null}return{id:l,text:"New result: "+l,isNew:true}},createSearchChoicePosition:"bottom",ajax:{data:a,results:function(l){return{results:k(l)}},quietMillis:300},initSelection:function(l,o){var n=l.val().split(",");var m=n.map(function(p){return{id:p,text:p}});o(m)}};function e(l){return l.indexOf("http://")===0||l.indexOf("https://")===0}function g(l){if(e(l)){return l}else{return j.getContextPath()+l}}function i(l){var m;return{setupInput:function(n){m=n;var p=d.extend({},c.ajax,{url:g(l.uiSupport.dataUri)});var o=d.extend({},c,{ajax:p});n.auiSelect2(o)},asCqlFunc:function(){var n=this.input.val().trim();if(!n){return undefined}return b.buildEqualityExpressionFromValuesString(this.fieldName,n)},setValues:function(n){return f.setValues(m,n.values)}}}return{build:i,_getUrl:g,_ajaxData:a}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/filterfields/cql-content-filter-field.js' */
define("confluence-ui-components/js/cql/internal/filterfields/cql-content-filter-field",["jquery","confluence-ui-components/js/page-picker","confluence-ui-components/js/cql/internal/cql-expression-builder","confluence-ui-components/js/cql/internal/cql-set-value-helper"],function(c,f,a,b){function d(g){return"page:"+g}function e(){var g;return{setupInput:function(h){g=h;var i={multiple:this.fieldName!=="parent"};h.auiSelect2(f.build(i))},asCqlFunc:function(){var i=this.input.val().trim();if(!i){return undefined}var h=i.replace(/[a-z]+:/g,"");return a.buildEqualityExpressionFromValuesString(this.fieldName,h)},setValues:function(i){var h=i.values.map(d);return b.setValues(g,h)}}}return{build:e}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/filterfields/cql-type-suggestions.js' */
define("confluence-ui-components/js/cql/internal/filterfields/cql-type-suggestions",["ajs"],function(b){var c=[{type:"",label:"All content"},{type:"page",label:"Pages"},{type:"blogpost",label:"Blog Posts"},{type:"attachment",label:"Attachments"},{type:"space",label:"Spaces"}];function a(){return c}return{getList:a}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/filterfields/cql-type-filter-field.js' */
define("confluence-ui-components/js/cql/internal/filterfields/cql-type-filter-field",["confluence-ui-components/js/cql/internal/cql-type-picker","confluence-ui-components/dark-features","confluence-ui-components/js/cql/internal/filterfields/cql-type-suggestions"],function(a,b,c){function d(f){var e;return{setupInput:function(g,h){var j=[];var i=true;if((h.environment==="search-screen"&&h.searchType=="all")||b.isEnabled("cql.force.full.search.mode")){j=c.getList();i=false}e=a.build(j,i);e.setupInput(g)},setValues:function(g){return e.setValues(g.values)}}}return{build:d}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/filterfields/cql-date-filter-field.js' */
define("confluence-ui-components/js/cql/internal/filterfields/cql-date-filter-field",["ajs","underscore","confluence-ui-components/js/cql/internal/cql-date-picker"],function(b,c,a){function d(g){var h=g.fieldName;var f;function e(){var j=f.getFromDate();var i=f.getToDate();var l,k;if(j){l=h+' >= "'+j+'"'}if(i){k=h+' <= "'+i+'"'}if(l&&k){return l+" and "+k}return l||k||""}return{setupInput:function(i){f=a.build.call(this,i)},setValues:function(k){if(!f){b.warn("DatePicker not set yet, can't set values");return}var j=k.expressions;if(j.length<1||j.length>2){b.warn("Can't set date value with expressions.length: "+j.length);return}if(j.length===1&&j[0].functionValues.length===1&&j[0].functionValues[0].functionName==="now"){if(j[0].operator!==">="){b.warn("Unsupported date picker relative date operator: "+j[0].operator);return}var i=j[0].functionValues[0].parameters[0];f.selectOption("now('"+i+"')")}else{c.each(j,function(m){if(m.values.length===1){var l=m.values[0];if(m.operator===">="){f.setFromDate(l)}else{if(m.operator==="<="){f.setToDate(l)}}}})}},asCqlFunc:function(){if(!f){b.warn("DatePicker not set yet, can't get CQL");return}var i=f.getSelectedOption();if(!i){return""}if(i==="custom"){return e()}return h+" >= "+i}}}return{build:d}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/filterfields/cql-label-filter-field.js' */
define("confluence-ui-components/js/cql/internal/filterfields/cql-label-filter-field",["jquery","ajs","confluence-ui-components/js/label-picker","confluence-ui-components/js/include-exclude-picker","confluence-ui-components/js/cql/internal/cql-set-value-helper"],function(d,c,a,e,b){function f(){var g;return{setupInput:function(h){g=h;h.auiSelect2(e.build(a.build({noMatches:"No matching labels found"})))},setValues:function(h){return b.setValues(g,h.values)}}}return{build:f}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/filterfields/cql-space-filter-field.js' */
define("confluence-ui-components/js/cql/internal/filterfields/cql-space-filter-field",["jquery","confluence-ui-components/js/space-picker","confluence-ui-components/js/include-exclude-picker","confluence-ui-components/js/cql/internal/cql-special-spaces","confluence-ui-components/js/cql/internal/cql-space-expression-adjuster","confluence-ui-components/js/cql/internal/cql-space-expression-builder","confluence-ui-components/js/cql/internal/cql-set-value-helper","confluence/legacy"],function(b,e,a,d,i,f,c,h){function g(){var j;return{setupInput:function(k,l){j=k;k.auiSelect2(a.build(e.build({multiple:true,suggestCategories:d.getKeys(l.environment),disableMixedSpaceTypes:true})));if(l.environment==="search-screen"){var m=b(h.UI.Components.CQL.SpaceField.templates.archivedSpacesOption());j.after(m);this.onChange=function(o){var n=m.find("#search-filter-include-archived");n.change(o);j.change(o)}}},asCqlFunc:function(){return f.buildExpressionFromValuesString(this.input.val())},setValues:function(k){i.convertFunctionValues(k);return c.setValues(j,k.values)}}}return{build:g}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/filterfields/cql-user-filter-field.js' */
define("confluence-ui-components/js/cql/internal/filterfields/cql-user-filter-field",["jquery","ajs","confluence-ui-components/js/user-group-select2"],function(c,b,a){function d(){var f;function e(h){var g=h[0].result[0];return{id:g.username,text:g.title,imgSrc:g.thumbnailLink.href}}return{setupInput:function(g){f=g;g.addClass("select2-input autocomplete-multiusergroup");a.bind(g.parent())},setValues:function(j){var h=j.values;if(!h||!h[0]){return}var i=h.map(function(k){return c.getJSON(b.contextPath()+"/rest/prototype/1/search/user.json?query="+encodeURI(k))});function g(){var l=i.length>1?arguments:[arguments];var k=l.map(e);f.auiSelect2("data",k)}return c.when.apply(c,i).done(g)}}}return{build:d}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/filterfields/cql-filter-field-configs.js' */
define("confluence-ui-components/js/cql/internal/filterfields/cql-filter-field-configs",["confluence-ui-components/js/cql/internal/filterfields/cql-autocomplete-filter-field","confluence-ui-components/js/cql/internal/filterfields/cql-content-filter-field","confluence-ui-components/js/cql/internal/filterfields/cql-type-filter-field","confluence-ui-components/js/cql/internal/filterfields/cql-date-filter-field","confluence-ui-components/js/cql/internal/filterfields/cql-label-filter-field","confluence-ui-components/js/cql/internal/filterfields/cql-space-filter-field","confluence-ui-components/js/cql/internal/filterfields/cql-user-filter-field"],function(b,h,a,g,c,f,e){var d={contentId:h,contentType:a,date:g,label:c,space:f,user:e};return{getConfig:function(j){var i=j.uiSupport;if(i.dataUri){return b.build(j)}if(d[i.valueType]){return d[i.valueType].build(j)}return{}}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-filter-field.js' */
define("confluence-ui-components/js/cql/internal/cql-filter-field",["jquery","underscore","ajs","confluence-ui-components/js/cql/internal/cql-field-model","confluence-ui-components/js/cql/internal/cql-expression-builder","confluence-ui-components/js/cql/internal/filterfields/cql-filter-field-configs"],function(d,j,h,g,c,a){var e=window.Confluence.UI.Components.CQLFilters.Templates;var f=0;function b(n){var l=g.getLabel(n);var m=d(e.baseFilterField({label:l,field:n,counter:f++}));var k=m.find("input");m.data("fieldName",n.fieldName);return d.extend({input:k,element:m,onChange:function(o){k.change(o)}},n)}function i(p,o){var n=p.uiSupport;var r=n.valueType;var q=p.fieldName;if(!r){throw new Error("Can't create filter without valueType.")}if(!q){throw new Error("Can't create filter without fieldName.")}var m=a.getConfig(p);var k=b(p);k.asCql=j.bind(m.asCqlFunc||function(){return c.buildExpression(k,this.input.val())},k);var l=k.element.find("input");if(typeof m.setupInput==="function"){k.setupInput=m.setupInput;k.setupInput(l,o.context)}k.setValues=m.setValues||function(s){l.val(s.values.join(","))};k.element.find(".aui-iconfont-remove").click(function(){k.element.remove();o.removeField(k)});return k}return{build:i}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-filter-select.js' */
define("confluence-ui-components/js/cql/internal/cql-filter-select",["jquery","underscore","ajs","confluence-ui-components/js/cql/internal/cql-ajax","confluence-ui-components/js/cql/internal/cql-field-model"],function(f,c,a,e,b){var d=window.Confluence.UI.Components.CQL.FilterSelect.Templates;function g(t){var r=t.cqlContainer;var m=r.find(".cql-fields");var i=t.onSelection;if(!i){throw Error("An onSelection callback must be provided to the FilterSelect.")}var s=f(d.container());var n=s.children("button");var q=s.find(".input-wrapper");var p=s.find("input");function j(u){u.preventDefault();q.removeClass("hidden");n.hide();s.find(".select2-choice").mousedown()}n.click(j);function h(){q.addClass("hidden");n.show()}p.bind("select2-close",function(){a.debug("CQL Field selector closed");h();setTimeout(function(){a.log("Checking CQL Field selector focus");if(!f(document.activeElement).closest(".cql-filter").length){a.debug("Setting CQL Field selector focus");n.focus()}},1)});r.append(s);function o(u){if(!u.added){return}p.auiSelect2("val","");i(u.added);a.debug("CQL Field selection made");h()}function k(u){if(t.context.environment!=="search-screen"&&!a.DarkFeatures.isEnabled("cql.search.screen")){u=c.reject(u,function(w){return w.type==="date"})}u=c.reject(u,function(w){return c.contains(t.ignoredFields,w.fieldName)});function v(){if(!m[0]){throw new Error("Why no cql-container?")}var x=m.find(".cql-filter").map(function(){return f(this).data("fieldName")});var w=c.reject(u,function(y){return c.contains(x,y.fieldName)&&!c.contains(["label"],y.fieldName)});return{results:w,text:b.getLabel}}p.auiSelect2({id:"fieldName",data:v,formatResult:b.getLabel,formatSelection:b.getLabel,placeholder:"Add a filter"}).change(o)}function l(){a.log("Couldn't fetch CQL fields - unable to initialise CQL field picker")}e.getFields().done(k).fail(l);return p}return{build:g}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-space-expression-builder.js' */
define("confluence-ui-components/js/cql/internal/cql-space-expression-builder",["jquery","underscore","confluence-ui-components/js/cql/internal/cql-special-spaces","confluence-ui-components/js/cql/internal/cql-expression-builder"],function(d,c,b,a){function e(k){var l=k.trim();if(!l){return undefined}var g=l.split(",");var m=b.getKeys();var f=[];var j=[];c.each(g,function(n){if(n==="conf_current"){f.push("currentSpace()")}else{if(c.contains(m,n)){j.push(n)}else{f.push(n)}}});var h=[];if(j.length){var i=b.getMap();j=c.map(j,function(n){return i[n]});h.push(a.buildEqualityExpressionFromValuesArray("space.type",j))}if(f.length){h.push(a.buildEqualityExpressionFromValuesArray("space",f))}if(h.length===1){return h[0]}return"("+h.join(" or ")+")"}return{buildExpressionFromValuesString:e}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-expression-builder.js' */
define("confluence-ui-components/js/cql/internal/cql-expression-builder",["jquery","underscore"],function(e,j){function c(n){if(n==="currentSpace()"){return n}return'"'+a(n)+'"'}function a(n){return n.replace(/"/g,'\\"')}function i(n,p){var o=p.trim();if(!o){return undefined}return n+" ~ "+c(o)}function f(n){var o={"+":[],"-":[],"":[]};j.each(n,function(q){var p=q.charAt(0);if(p==="+"){o["+"].push(q.substring(1))}else{if(p==="-"){o["-"].push(q.substring(1))}else{o[""].push(q)}}});return o}function d(p,n){var o=j.map(n,function(q){return p+" = "+c(q)});return o.join(" AND ")}function m(s,p,n){if(p.length===0){return""}var q=j.map(p,c);var o;if(q.length===1){o=n?" = ":" != ";return s+o+q[0]}var r=q.join(",");o=n?" in ":" not in ";return s+o+"("+r+")"}function l(o,n){return m(o,n,false)}function h(o,n){return m(o,n,true)}function k(t,q){var r=f(q);var n=[];var s=d(t,r["+"]);if(s){n.push(s)}var o=h(t,r[""]);if(o){n.push(o)}var p=l(t,r["-"]);if(p){n.push(p)}return n.join(" AND ")}function b(q,o){var p=o.trim();if(!p){return undefined}var n=p.split(",");n=j.map(n,function(r){return r.trim()});return k(q,n)}function g(o,n){if(o.type==="equality"){return b(o.fieldName,n)}if(o.type==="text"){return i(o.fieldName,n)}throw new Error("buildExpression does not yet support type: "+o.type)}return{buildExpression:g,buildEqualityExpressionFromValuesString:b,buildEqualityExpressionFromValuesArray:k,makeValueMap:f,makePlusCql:d,makeMinusCql:l,makeRegularCql:h}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-space-type-expression-converter.js' */
define("confluence-ui-components/js/cql/internal/cql-space-type-expression-converter",["underscore","confluence-ui-components/js/cql/internal/cql-special-spaces"],function(b,a){function c(g,d){var e=b.clone(d);var f=b.map(g.values,a.getUIValue);return{field:e,values:f,negate:g.negate}}return{convert:c}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-space-expression-aggregator.js' */
define("confluence-ui-components/js/cql/internal/cql-space-expression-aggregator",["underscore","confluence-ui-components/js/cql/internal/cql-space-type-expression-converter"],function(b,d){function c(h,f){var g=b.filter(h,function(j){return j.field.fieldName==="space.type"});if(g.length===0){return h}if(g.length>1){throw Error("Only a single space.type expression is supported.")}var e=d.convert(g[0],f);var i=b.filter(h,function(j){return j.field.fieldName==="space"});h=b.difference(h,g);if(i.length){i[0]=a(i[0],e)}else{h.push(e)}return h}function a(f,e){f.values=f.values.concat(e.values);return f}return{aggregate:c,combineSpaceExpressions:a}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-set-value-helper.js' */
define("confluence-ui-components/js/cql/internal/cql-set-value-helper",["jquery"],function(b){function a(f,c){var e=b.Deferred();f.on("change",function(){e.resolve()});var d=true;f.select2("val",c,d);return e}return{setValues:a}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-date-expression-aggregator.js' */
define("confluence-ui-components/js/cql/internal/cql-date-expression-aggregator",["underscore","confluence-ui-components/js/cql/internal/cql-space-type-expression-converter"],function(a){function c(d){return{field:d.field,expressions:[d]}}function b(f){var d=[];var e={};f.forEach(function(h){var i=h.field.fieldName;if(h.field.type!=="date"){d.push(h)}else{if(!e[i]){var g=c(h);e[i]=g;d.push(g)}else{e[i].expressions.push(h)}}});return d}return{aggregate:b}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-negation-converter.js' */
define("confluence-ui-components/js/cql/internal/cql-negation-converter",["underscore"],function(a){function b(d){d.values=a.map(d.values,function(e){return"-"+e})}function c(e){var d=$.extend({},e);if(d.field.type==="equality"){if(d.operator==="!="){d.operator="=";b(d)}else{if(d.operator==="notin"){d.operator="in";b(d)}}}return d}return{convert:c}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-negation-aggregator.js' */
define("confluence-ui-components/js/cql/internal/cql-negation-aggregator",["underscore","confluence-ui-components/js/cql/internal/cql-negation-converter"],function(a,d){function b(i){var h=[];var g={};var f={};i.forEach(function(k){var l=k.field.fieldName;if(!a.contains(h,l)){h.push(l);g[l]=[];f[l]=[]}var j=d.convert(k);if(j.operator!==k.operator){f[l].push(j)}else{g[l].push(j)}});var e=[];h.forEach(function(k){var j=c(g[k],f[k]);e=e.concat(j)});return e}function c(g,e){if(!e.length){return g}var f=g[0];if(!f){f=e[0];e=a.rest(e)}e.forEach(function(h){f.values=f.values.concat(h.values)});if(f.operator==="="&&f.values.length>1){f.operator="in"}return[f].concat(a.rest(g))}return{aggregate:b}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/internal/cql-ignored-field-expression-converter.js' */
define("confluence-ui-components/js/cql/internal/cql-ignored-field-expression-converter",[],function(){function a(f,e,d){if(e){f=f.filter(function(g){if(e.indexOf(g.field.fieldName)>-1){return d}return !d})}return f}function c(e,d){return a(e,d,true)}function b(e,d){return a(e,d,false)}return{removeFieldsByName:b,getFieldsByName:c}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:cql', location = 'js/cql/cql-component.js' */
define("confluence-ui-components/js/cql/cql-component",["jquery","underscore","ajs","confluence-ui-components/js/cql/internal/cql-ajax","confluence-ui-components/js/cql/internal/cql-filter-field","confluence-ui-components/js/cql/internal/cql-filter-select","confluence-ui-components/js/cql/internal/cql-space-expression-aggregator","confluence-ui-components/js/cql/internal/cql-date-expression-aggregator","confluence-ui-components/js/cql/internal/cql-negation-aggregator","confluence-ui-components/js/cql/internal/cql-ignored-field-expression-converter"],function(c,m,i,a,f,n,d,b,h,l){var j=window.Confluence.UI.Components.CQL.Templates;function e(o){var p=[];m.each(o,function(q){q.forEach(function(s){if(!s){return}var r=s.asCql();if(r){p.push(r)}})});return p.join(" and ")}function g(o,p){return m.find(o,function(q){return q.fieldName===p})}function k(s){var p=s.context||{environment:"macro-browser"};var F=s.defaultFieldNames;if(!F){F=s.defaultFields?s.defaultFields.split(","):[]}var x=c(j.container());if(s.container){c(s.container).append(x)}var G=x.find(".cql-fields");var C;var H=s.value||s.defaultValue;if(H){C=a.parseClauses(H)}else{C=new c.Deferred();C.resolve()}var v={};var w={};var u=new c.Deferred();var I=s.onChange||function(){};function o(t){var K=t.fieldName;v[K]=m.without(v[K],t);if(v[K].length===0){delete v[K];I()}}var B={element:x,loading:u,context:s.context||{environment:"macro-browser",searchType:"content"},getValue:function(){return e(v)},getIgnoredFields:function(){return w},removeField:o,fieldArrays:v,fieldRegistry:v};function A(L){var K=f.build(L,B);K.onChange(I);var M=L.fieldName;v[M]=v[M]||[];v[M].push(K);x.trigger("cql-field-adding",K);var t=G.find(".cql-field-"+M+":last");if(t.length){t.after(K.element)}else{G.append(K.element)}return K}function E(K,t){t=t||0;var L=K.fieldName;return v[L]&&v[L][t]}var D;function z(O){var K=c.Deferred();if(!O){K.resolve();return K}var N={};function L(Q){var P=N[Q];if(typeof P==="number"){N[Q]=P+1}else{N[Q]=0}return N[Q]}var t=m.findWhere(D,{fieldName:"space"});O=d.aggregate(O,t);O=b.aggregate(O);O=h.aggregate(O);w=l.getFieldsByName(O,s.ignoredFields);O=l.removeFieldsByName(O,s.ignoredFields);var M=[];m.each(O,function(T){var U=T.field.fieldName;var S=g(D,U);var Q=L(U);var P=E(S,Q)||A(S);var R=P.setValues(T);if(R){M.push(R)}});c.when.apply(c,M).then(function(){K.resolve()});return K}function r(K){var L,t;if(K){var M=m.escape(K);L="We can\'t load your filters";t=i.format("Curses! We had trouble with \"{0}\". Try refreshing the page, but you may need to re-enter your macro parameters.",M)}else{L="We couldn\'t load the macro";t="If you refresh your page, we\'ll give it another shot."}i.messages.error(".cql-error-container",{title:L,body:t,closeable:true})}function J(t){var K;if(t.element.find(".aui-nav-selected").length!==0){return}if(t.element.find(".select2-container-multi").length!==0){K=t.element.find("input.select2-input");K.focus().click()}else{K=t.element.find("a.select2-choice.select2-default");if(!K.length){K=c(":input:visible",t.element).first()}if(!K.length){i.log("Unable to focus CQL field: "+t.fieldName)}K.focus().mousedown()}}function y(L){var K=c.extend({},L,{fixed:false});var t=A(K);J(t)}function q(t){D=t;F.forEach(function(M){var L=g(D,M);if(!L){throw Error("Unknown fieldname: "+M)}var K=c.extend({fixed:true},L);A(K)});n.build({onSelection:y,cqlContainer:x,context:p,ignoredFields:s.ignoredFields});C.done(function(K){z(K).done(function(){u.resolve()})}).fail(function(){if(p.environment==="search-screen"){i.log("Error parsing CQL param from search screen URL: "+s.value)}else{r(s.value)}u.resolve()})}a.getFields().done(q).fail(function(){r()});return B}return{build:k}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
