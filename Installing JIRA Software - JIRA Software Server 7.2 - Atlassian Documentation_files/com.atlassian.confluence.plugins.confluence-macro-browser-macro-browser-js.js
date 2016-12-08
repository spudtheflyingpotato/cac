;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-parameter-serializer.js' */
define("confluence-macro-browser/macro-parameter-serializer",["jquery"],function(h){function e(d){return d.replace(/\\/g,"\\\\").replace(/=/g,"\\=").replace(/[|]/g,"\\|")}return{serialize:function(d){var a=[],b;for(b in d)a.push(e(b)+"="+e(d[b]));return a.join("|")},deserialize:function(d){function a(f,d){for(var c=[],b=[],a,f=f||"",g=0,e=f.length;g<e;g++)a=f[g],"\\"==a?c.push(a+(g+1!=f.length?f[++g]:"")):a==d?(b.push(c.join("")),c=[]):c.push(a);b.push(c.join(""));return b}var b={};h.each(a(d||"",
"|"),function(d,e){var c=a(e,"=");2===c.length&&c[0]&&(b[c[0].replace(/\\(.)/g,"$1")]=c[1].replace(/\\(.)/g,"$1"))});return b}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-macro-browser/macro-parameter-serializer","Confluence.MacroParameterSerializer");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-fields.js' */
define("confluence-macro-browser/macro-browser-fields",["ajs","jquery","underscore","confluence/legacy"],function(g,e,o,i){function n(j,h,l){return function(k,b){if(k.multiple)return j.string(k,b);var a=e(i.Templates.MacroBrowser.macroParameterSelect()),c=e("select",a),b=b||{};b.setValue=b.setValue||function(a){var b=!1;c.find("option").each(function(){if(this.value==a)return b=!0,!1});b?delete c.tempValue:(c.append(e("<option/>").attr("value",a).text(a+" ("+"Not found"+
")")),c.tempValue=a);try{c.val(a)}catch(m){g.logError(m)}c.change()};a=h(a,c,b);a.updateDependencies=l;a.getData=function(a){if(a.title&&a.spaceKey||a.pageId||a.draftId){var f=c.tempValue||c.val();b.fileTypes&&(a.fileTypes=b.fileTypes);var m=g.contextPath()+(a.draftId?"/json/draftattachmentsearch.action":"/json/attachmentsearch.action");e.getJSON(m,a,function(a){if(!a.error){e("option",c).remove();a=a.attachments;if(!a||!a.length){c.append(e("<option/>").attr("value","").html("No appropriate attachments"));
c.tempValue&&b.setValue(c.tempValue)}else{for(var d=0,m=a.length;d<m;d++)c.append(e("<option/>").attr("value",a[d].name).text(a[d].name));f=f||c.tempValue;b.setValue(f||a[0].name)}c.attr("style","")}})}else g.log("Not enough parameters to send attachmentsearch request")};return a}}return function(j){var h=function(b,a,c){var c=c||{},d=c.setValue||function(b){a.val(b)},e=c.getValue||function(){return a.val()};a.change(c.onchange||j.paramChanged);return{paramDiv:b,input:a,setValue:d,getValue:e}},l=
function(b,a,c){if(a&&a.length)for(var d=0,e=a.length;d<e;d++)j.fields[a[d]]&&j.fields[a[d]].dependencyUpdated(b,c)},k={updateDependencies:l,username:function(b,a){var a=a||{},c=b.multiple?"autocomplete-multiuser":"autocomplete-user",d=e(i.Templates.MacroBrowser.macroParameter()),f=e("input[type='text']",d);f.addClass(c).attr("data-none-message","Not found");b.required&&f.keyup(j.processRequiredParameters);b.multiple?(i.Binder.autocompleteMultiUser(d),a.setValue=
function(a){f.val(a);for(var a=a.split(","),b=[],c=[],d=0,h=a.length;d<h;d++)b.push(function(a){return e.getJSON(g.contextPath()+"/rest/prototype/1/user/non-system/"+a).done(function(a){a&&a.name&&c.push({id:a.name,text:a.displayName,imgSrc:a.avatarUrl})}).fail(function(b){g.logError("Cannot parse user data for macro browser field with: "+b);c.push({id:a,text:g.format("Unknown User ({0})",a),imgSrc:g.contextPath()+"/images/icons/profilepics/default.png"})})}(a[d]));e.when.apply(e,o.map(b,function(a){var b=
e.Deferred();a.always(function(){b.resolve()});return b.promise()})).done(function(){c.length&&f.auiSelect2("data",c)})}):(f.bind("selected.autocomplete-content",function(c,d){if(a.onselect)a.onselect(d.selection);else a.setValue?a.setValue(d.content.username):(l(b.name,a.dependencies,f.val()),"function"===typeof a.onchange&&a.onchange.apply(f))}),g.Confluence.Binder.autocompleteUserOrGroup(d));return h(d,f,a)},spacekey:function(b,a){if(b.multiple)return k.string(b,a);var a=a||{},c=e(i.Templates.MacroBrowser.macroParameter()),
d=e("input[type='text']",c);d.addClass("autocomplete-space").attr("data-template","{key}").attr("data-none-message","Not found");b.required&&d.keyup(j.processRequiredParameters);d.bind("selected.autocomplete-content",function(c,e){if(a.onselect)a.onselect(e.selection);else a.setValue?a.setValue(e.content.key):(l(b.name,a.dependencies,d.val()),"function"===typeof a.onchange&&a.onchange.apply(d))});g.Confluence.Binder.autocompleteSpace(c);return h(c,d)},attachment:n(k,
h,l),full_attachment:n(k,h,l),"confluence-content":function(b,a){if(b.multiple)return k.string(b,a);a=a||{};b.options=b.options||{};var c=e(i.Templates.MacroBrowser.macroParameter()),d=e("input[type='text']",c).attr("data-none-message","Not found").attr("data-template","");b.required&&d.keyup(j.processRequiredParameters);a.onchange=a.onchange||function(){var c=d.val();l(b.name,a.dependencies,c)};a.setValue=a.setValue||function(b){d.val(b);"function"===typeof a.onchange&&
a.onchange.apply(d)};d.bind("selected.autocomplete-content",function(c,e){var f="";"true"==b.options.includeDatePath&&"blogpost"===e.content.type&&(f=e.content.createdDate.date.split("-"),f="/"+f[0]+"/"+f[1]+"/"+f[2].substring(0,2)+"/");var h=e.content.space&&e.content.space.key,i=h&&h!=g.Meta.get("space-key");-1!==e.content.title.indexOf(":")&&(i=!0);f=(i?h+":":"")+f+e.content.title;d.val(f);if(a.onselect)a.onselect(e.selection);else a.setValue(f,d)});b.options.spaceKey&&("@self"===b.options.spaceKey.toLowerCase()&&
(b.options.spaceKey=g.Meta.get("space-key")),d.attr("data-spacekey",b.options.spaceKey));var f=b.options.type;if("string"===typeof f)if("page"==f)d.addClass("autocomplete-page"),g.Confluence.Binder.autocompletePage(c);else if("blogpost"==f)d.addClass("autocomplete-blogpost"),g.Confluence.Binder.autocompleteBlogpost(c);else{if("attachment"===f||"full_attachment"===f)d.addClass("autocomplete-attachment"),g.Confluence.Binder.autocompleteAttachment(c)}else d.addClass("autocomplete-confluence-content"),
g.Confluence.Binder.autocompleteConfluenceContent(c);return h(c,d,a)},string:function(b,a){var c=e(i.Templates.MacroBrowser.macroParameter()),d=e("input",c);b.required&&d.keyup(j.processRequiredParameters);return h(c,d,a)},"boolean":function(b,a){var c=e(i.Templates.MacroBrowser.macroParameterBoolean()),d=e("input",c),a=a||{};a.setValue=a.setValue||function(a){(/true/i.test(a)||/true/i.test(b.defaultValue)&&!/false/i.test(a))&&d.prop("checked",!0)};return h(c,d,a)},"enum":function(b,a){if(b.multiple)return k.string(b,
a);var c=e(i.Templates.MacroBrowser.macroParameterSelect()),d=e("select",c);!b.required&&!b.defaultValue&&d.append(e("<option/>").attr("value",""));e(b.enumValues).each(function(){d.append(e("<option/>").attr("value",this).html(""+this))});return h(c,d,a)},_hidden:function(b,a){var c=e(i.Templates.MacroBrowser.macroParameterHidden()).hide(),d=e("input",c);return h(c,d,a)}};return{Field:h,ParameterFields:k}}});require("confluence/module-exporter").safeRequire("confluence-macro-browser/macro-browser-fields");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-smartfields.js' */
define("confluence-macro-browser/macro-browser-smartfields",["ajs"],function(c){return function(f,d){var e=function(a){this.fileTypes=a};e.prototype.beforeParamsSet=function(a){!a.page&&(!a.date&&!a.space)&&("page"==c.params.contentType||"blogpost"==c.params.contentType?a.page=c.Editor.getCurrentTitle():"comment"==c.params.contentType&&(a.page=c.params.pageTitle));if(a.date){var b=a.date.split("/");a.page=["",b[2],b[0],b[1],a.page].join("/")}a.space&&(a.page=a.space+":"+a.page);return a};e.prototype.beforeParamsRetrieved=
function(a){if(a.page){var b=a.page.split(":");1<b.length&&(a.space=b[0],a.page=b[1]);b=a.page.split("/");1<b.length&&(a.date=[b[2],b[3],b[1]].join("/"),a.page=b[4]);(("page"==c.params.contentType||"blogpost"==c.params.contentType)&&a.page==c.Editor.getCurrentTitle()||"comment"==c.params.contentType&&a.page==c.params.pageTitle)&&delete a.page}return a};e.prototype.fields={attachment:function(a){a=d.attachment(a,{fileTypes:this.fileTypes});a.dependencyUpdated=function(a,g){c.debug("attachment:dependencyUpdated called: "+
a+", "+g);var d=e.prototype.fields._parsePageLink(g);this.getData(d)};return a},full_attachment:function(a){a=d.full_attachment(a,{fileTypes:this.fileTypes});a.dependencyUpdated=function(a,d){c.debug("attachment:dependencyUpdated called: "+a+", "+d);var f=e.prototype.fields._parsePageLink(d);this.getData(f)};return a},"confluence-content":function(a){return d["confluence-content"](a,{dependencies:["name"]})},_parsePageLink:function(a){var b={},a=a.split(":",2);b.spaceKey=2===a.length&&a[0]||c.Meta.get("space-key");
b.title=a[a.length-1];0===b.title.indexOf("/")&&(b.postingDay=b.title.substr(1,10),b.title=b.title.substr(12));b.title===c.Editor.getCurrentTitle()&&(b.title="");b.title||(c.params.newPage?b.draftId=c.Meta.get("content-id"):b.pageId=c.params.pageId);return b}};f.activateSmartFieldsAttachmentsOnPage=function(a,b){f.setMacroJsOverride(a,new e(b))}}});require("confluence/module-exporter").safeRequire("confluence-macro-browser/macro-browser-smartfields");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-utils.js' */
define("confluence-macro-browser/macro-browser-utils",["jquery"],function(a){return{makeDefaultKey:function(){return a.makeArray(arguments).join(".")}}});require("confluence/module-exporter").safeRequire("confluence-macro-browser/macro-browser-utils");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-cql.js' */
define("confluence-macro-browser/macro-browser-cql",["ajs","underscore","confluence/templates","confluence-ui-components/js/cql/cql-component","jquery"],function(i,g,m,n,d){function j(b){var a=b.param;return d.extend({},b,a.options,{defaultValue:a.defaultValue||a.options.defaultValue})}function k(b){return d(m.MacroBrowser.CQL.sections({hasRenderParameters:0<b.renderParams.length}))}return{build:function(b){var a=k(b),e=b.container;e.append(a);e.bind("cql-field-adding",function(b,c){c.element.addClass("macro-param-div");
c.element.find(".cql-field-input").addClass("macro-param-input")});e.addClass("loading");a.filter(".cql-render-heading").find("button").click(function(){var b=d(this),c=b.closest(".cql-render-heading").next(),a=c.is(":visible");a?c.slideUp(300):(c.removeClass("hidden").show(),c=d(".cql-render-heading").position().top,d(".macro-input-fields").animate({scrollTop:c},300));a=a?"Show":"Hide";
b.text(a)});var f,h={param:b.cqlParam,value:b.cqlValue,container:a.filter(".cql-filter-fields")},h=j(h);f=n.build(h);e.data("cqlComponent",f);var l=d.Deferred();f.loading.done(function(){var a=b.cqlParam.options.requiredFields;if(a){var c=a.split(",");g.each(f.fieldRegistry||f.fieldArrays,function(a){var d=!1;g.each(a,function(a){!d&&g.contains(c,a.fieldName)&&(b.flagRequiredParam(a.element),d=!0,a.onChange(b.paramChanged))})})}e.removeClass("loading");l.resolve()});return{elements:a,loading:l}},
_makeCqlComponentOptions:j,_renderCqlSections:k}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'soy/macro-browser-cql.soy' */
// This file was automatically generated from macro-browser-cql.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.MacroBrowser.CQL.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.MacroBrowser == 'undefined') { Confluence.Templates.MacroBrowser = {}; }
if (typeof Confluence.Templates.MacroBrowser.CQL == 'undefined') { Confluence.Templates.MacroBrowser.CQL = {}; }


Confluence.Templates.MacroBrowser.CQL.sections = function(opt_data, opt_ignored) {
  return '<div class="cql-filter-fields"></div>' + ((opt_data.hasRenderParameters) ? '<h4 class="cql-render-heading"><span>' + soy.$$escapeHtml("Options") + '</span>' + aui.buttons.button({type: 'link', text: "Show", extraAttributes: {type: 'button'}}) + '</h4><div class="cql-render-fields hidden"></div>' : '');
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.CQL.sections.soyTemplateName = 'Confluence.Templates.MacroBrowser.CQL.sections';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-editor.js' */
define("confluence-macro-browser/macro-browser-editor",["ajs","jquery","confluence/legacy","confluence-macro-browser/macro-browser-cql","underscore"],function(q,d,p,t,r){return function(k){function o(g){var a=d("#macro-insert-container").find(".macro-name").val(),b,c=k,e={},f;f={};for(var h=0,l=g.formDetails.parameters.length;h<l;h++){var i=g.formDetails.parameters[h],j;if(i.type&&"cql"===i.type.name)j=d(".macro-input-fields form").data("cqlComponent").getValue();else{j=d("#macro-param-"+i.name);
var n=j.val();"checkbox"==j.attr("type")&&(n=""+j.prop("checked"));j=n}if(j&&(i.shared&&(e[i.name]=j),i.hidden||!i.defaultValue||i.defaultValue!=j))f[i.name]=j}f[""]&&(b=f[""]);d.extend(f,c.unknownParams);(h=k.getMacroJsOverride(a))&&"function"===typeof h.beforeParamsRetrieved&&(f=h.beforeParamsRetrieved(f,g,e));return{name:a,bodyHtml:c.getMacroBody(),params:f,defaultParameterValue:b}}function u(g,a,b){var c=k,e,f=a.type.name;if(b){var h=b.fields&&b.fields[f];h&&"function"!==typeof h&&(h=h[a.name]);
"function"===typeof h&&(e=h.call(b,a))}e||(f in c.ParameterFields&&"function"===typeof c.ParameterFields[f]||(f="string"),e=c.ParameterFields[f](a));c.fields[a.name]=e;b=e.paramDiv;c=e.input;e="macro-param-"+a.name;b.attr("id","macro-param-div-"+a.name);c.addClass("macro-param-input").attr("id",e);a.hidden&&b.hide();c=g.pluginKey;a.displayName==k.Utils.makeDefaultKey(c,g.macroName,"param",a.name,"label")&&(a.displayName=a.name);a.description==k.Utils.makeDefaultKey(c,g.macroName,"param",a.name,"desc")&&
(a.description="");d("label",b).attr("for",e).text(a.displayName);a.required&&s(b);a.description&&b.append(p.Templates.MacroBrowser.macroParameterDesc({description:a.description}));return b}function s(d){var a=d.find("label"),b=a.text()+" *";a.text(b);d.addClass("required")}return{loadMacroInBrowser:function(g){if(!g||!g.formDetails)q.trigger("analytics",{name:"macro-browser.unknown-macro-error"}),alert("Could not load unknown macro in the macro browser.");else{var a=require("tinymce"),b=k,c=g.formDetails,
e=c.macroName,f=b.jsOverrides[e],h=b.settings.selectedMacro,l=a.confluence.macrobrowser.editedMacroDiv;if(f&&"function"===typeof f.opener)b.close(),f.opener({name:e});else{var a=c.parameters,i=r.find(a,function(a){return"cql"===a.type.name});d("#save-warning-span").addClass("hidden");d("#macro-insert-container .macro-name").val(e);var j=d("#macro-insert-container .macro-input-fields form");j.empty();var n=g.extendedDescription||g.description;if(i)c.documentationLink&&b.UI.setHelpLink(b.dialog,{href:c.documentationLink});
else if(n||c.documentationLink)n=d(p.Templates.MacroBrowser.macroDescription({descriptionHtml:n,documentationLink:c.documentationLink})),j.append(n);c.body&&("NONE"!=c.body.bodyType&&l&&d(l).hasClass("editor-inline-macro"))&&(l=g.pluginKey,c.body.label==k.Utils.makeDefaultKey(l,e,"body","label")&&(c.body.label=""),c.body.description==k.Utils.makeDefaultKey(l,e,"body","desc")&&(c.body.description=""),c=c.body,l=b.selectedMacroDefinition,n=k,e=d(p.Templates.MacroBrowser.macroBody()),l=l?l.body:n.settings.selectedText,
d("textarea",e).val(l||""),c.label&&d("label",e).text(c.label),c.description&&e.append(p.Templates.MacroBrowser.macroParameterDesc({description:c.description})),c.hidden&&e.hide(),e&&j.append(e));var m=h?d.extend({},h.params):{},o=j;i&&(a=r.without(a,i),i=t.build({cqlParam:i,renderParams:a,cqlValue:m.cql,container:j,flagRequiredParam:s,paramChanged:k.paramChanged}),delete m.cql,o=i.elements.filter(".cql-render-fields"),i.loading.done(function(){k.paramChanged();k.Preview.previewMacro(g,h);k.UI.focusOnMacroDetailsFirstInput()}));
d(a).each(function(){o.append(u(g,this,f))});f&&"function"===typeof f.beforeParamsSet&&(m=f.beforeParamsSet(m,!h));d(a).each(function(){var a;a=this.name==""?b.selectedMacroDefinition?b.selectedMacroDefinition.defaultParameterValue:this.defaultValue:m[this.name];a!=null?delete m[this.name]:d(this.aliases).each(function(){if(m[this]){a=m[this];delete m[this]}});if(a==null)a=this.defaultValue;a!=null&&b.fields[this.name].setValue(a)});b.unknownParams=m;d("a",j).click(function(){window.open(this.href,
"_blank").focus();return false});d("#macro-browser-dialog:visible").length||b.showBrowserDialog();a={};d.extend(!0,a,g);a.formDetails||(a.formDetails={});a.formDetails.body||(a.formDetails.body={});b.dialog.activeMetadata=a;a.formDetails.body.content=b.settings.selectedMacro?b.settings.selectedMacro.body:a.formDetails.body.bodyType&&"plain_text"===a.formDetails.body.bodyType.toLowerCase()?b.settings.selectedText:b.settings.selectedHtml}}},getMacroParametersFromForm:function(d){return o(d).params},
getMacroDefinitionFromForm:o,processRequiredParameters:function(){if(d(".macro-input-fields form").is(".loading"))return q.log("Form still loading - cannot processRequiredParameters"),!1;var g=0===d("#macro-insert-container .macro-param-div.required .macro-param-input").not(".select2-container").filter(function(){var a=d(this).val();return null===a||""===a}).length,a=g?"":"disabled",b=a?"addClass":"removeClass";d("#macro-browser-dialog button.ok").prop("disabled",a);d("#macro-browser-dialog .macro-preview-header .refresh-link").prop("disabled",
a)[b]("disabled");return g}}}});require("confluence/module-exporter").safeRequire("confluence-macro-browser/macro-browser-editor");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-preview.js' */
define("confluence-macro-browser/macro-browser-preview",["jquery","ajs","confluence/legacy"],function(e,b,n){return function(d){function h(){return e("#macro-insert-container .macro-preview")}function l(){h().html("")}function i(b){b?(d.UI.showPreviewSpinner(!0),m.disable()):(d.UI.showPreviewSpinner(!1),m.enable())}var m={disable:function(){e("#macro-browser-preview-link").attr("disabled",!0).addClass("disabled")},enable:function(){e("#macro-browser-preview-link").removeAttr("disabled").removeClass("disabled")}};
return{previewMacro:function(j,f){var g=d;l();if(!d.Editor.processRequiredParameters())return b.trigger("analytics",{name:"macro-browser.missing-params-error"}),b.log("previewMacro: missing required params"),!1;"object"!==typeof f&&(f=d.Editor.getMacroDefinitionFromForm(j));var a=f.params,k=g.getMacroJsOverride(j.macroName);k&&"function"===typeof k.updateMacroParametersForPreview&&(a=k.updateMacroParametersForPreview(a));a[""]&&delete a[""];g={contentId:n.getContentId(),macroName:j.macroName,params:a,
body:g.getMacroBody(),defaultParameterValue:f.defaultParameterValue,successCallback:function(a){var c=h().find("iframe")[0],c=c.contentDocument||c.contentWindow.document;c.write(a);c.close();e(c).ready(function(){b.trigger("macro-browser.preview-ready")});e("div.error span.error",c).length&&b.logError("Error rendering macro definition : ");setTimeout(function(){i(!1)},1E3)},errorCallback:function(a){b.logError(a);i(!1)}};a=b.params.staticResourceUrlPrefix+"/blank.html";h().html('<iframe src="'+a+
'" frameborder="0" name="macro-browser-preview-frame" id="macro-preview-iframe"></iframe>');i(!0);d.Rest.fetchMacroPreviewData(g)},removePreviewContainer:l}}});require("confluence/module-exporter").safeRequire("confluence-macro-browser/macro-browser-preview");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-model.js' */
define("confluence-macro-browser/macro-browser-model",["ajs"],function(h){return function(f){function g(a){a.title==f.Utils.makeDefaultKey(a.pluginKey,a.macroName,"label")&&(a.title=a.macroName.charAt(0).toUpperCase()+a.macroName.substring(1).replace(/-/g," "));a.description==f.Utils.makeDefaultKey(a.pluginKey,a.macroName,"desc")&&(a.description="");a.id="macro-"+(a.alternateId||a.macroName);var b=[a.macroName,a.title].concat(a.aliases||[]);a.keywordsNoDesc=b.join(",");var d=a.description&&a.description.replace(/,/g,
" ")||"";b.push(d);a.keywords=b.join(",");return a}return{loadMacros:function(a){if(a){var b=f;b.metadataList=[];b.aliasMap={};for(var d=0,i=a.length;d<i;d++){var c=a[d],c=g(c);if(c.aliases)for(var e=0,j=c.aliases.length;e<j;e++)c.aliases[e]=c.aliases[e].toLowerCase(),b.aliasMap[c.aliases[e]]=c.macroName.toLowerCase();b.metadataList.push(c)}b.metadataList.sort(function(a,b){return a.title.toLowerCase()>b.title.toLowerCase()?1:-1})}else h.log("AJS.MacroBrowser.loadModel - no macro data, aborting")},
transformMetaDataDefault:g}}});require("confluence/module-exporter").safeRequire("confluence-macro-browser/macro-browser-model");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-rest.js' */
define("confluence-macro-browser/macro-browser-rest",["jquery","ajs","wrm"],function(b,c,f){function d(a){c.logError(a)}var g=f.data.claim("confluence.macro.metadata.provider:macro-browser-metadata-resources.macro-meta-client-cache-key");return{loadMacroMetadata:function(a){a.data=a.data||{};a.data.macroMetadataClientCacheKey=g;return b.ajax({type:"GET",cache:!0,timeout:a.timeout||3E4,dataType:"json",url:(a.context||c.params.contextPath)+"/plugins/macrobrowser/browse-macros.action",data:a.data,success:a.successCallback,
error:a.errorCallback||d}).promise()},fetchMacroMetadataDetails:function(a){var e={id:a.id};a.alternateId&&(e.alternateId=a.alternateId);b.ajax({type:"GET",dataType:"json",url:(a.context||c.params.contextPath)+"/plugins/macrobrowser/browse-macros-details.action",data:e,success:a.successCallback,error:a.errorCallback||d})},fetchMacroPreviewData:function(a){if(!a.contentId||!a.macroName)return(a.errorCallback||d)("invalid parameters");b.ajax({type:"POST",contentType:"application/json; charset=utf-8",
url:(a.context||c.params.contextPath)+"/rest/tinymce/1/macro/preview",data:b.toJSON({contentId:a.contentId,macro:{name:a.macroName,body:a.body,params:a.params,defaultParameterValue:a.defaultParameterValue}}),dataType:"html",success:a.successCallback,error:a.errorCallback||d})}}});require("confluence/module-exporter").safeRequire("confluence-macro-browser/macro-browser-rest");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-UI.js' */
define("confluence-macro-browser/macro-browser-UI",["jquery","ajs","confluence/legacy"],function(f,b,j){return function(k){function m(a){return f(j.Templates.MacroBrowser.macroSummaryList({category:a}))}function o(a,d){var g=f(j.Templates.MacroBrowser.macroSummaryItem());if(a.icon){var e=(a.icon.relative?b.params.staticResourceUrlPrefix:"")+a.icon.location;!a.icon.relative&&f.browser.msie&&!window.location.href.indexOf("https")&&e.indexOf("https")?g.prepend("<span class='macro-icon-holder icon-"+
a.macroName+"'></span>"):g.prepend("<img src='"+e+"' alt='icon' width='"+a.icon.width+"' height='"+a.icon.height+"' title='"+a.title+"'/>")}else g.prepend("<span class='macro-icon-holder icon-"+a.macroName+"'></span>");f(".macro-title",g).text(a.title);f(".macro-desc",g).prepend(a.description);if("gadget"==a.macroName&&(e=a.gadgetUrl))e.match("^https?://.*")||(e=b.params.contextPath+"/"+e),f(".macro-title",g).after(j.Templates.MacroBrowser.gadgetLink({url:e}));g.click(function(b){d(b,a)});return g}
function p(a,d){var b;b=d?j.Templates.Dialog.helpLink(d):j.Templates.MacroBrowser.helpLink();a.getPage(a.curpage).element.find(".dialog-title").prepend(b)}return{createDialog:function(a){for(var d=a.macros,g=a.onClickMacroSummary,e={all:m("all")},h=0,q=d.length;h<q;h++){var i=d[h];if(i.hidden)if(k.isHiddenMacroShown(i))i.categories.push("hidden-macros");else continue;e.all.append(o(i,g).attr("id",i.id));for(var n=0,r=i.categories.length;n<r;n++){var l=i.categories[n];e[l]=e[l]||m(l);e[l].append(o(i,
g).attr("id",l+"-"+i.id))}}var c=b.ConfluenceDialog({width:a.width||865,height:a.height||530,id:"macro-browser-dialog",onSubmit:a.onSubmit,onCancel:a.onCancel});c.popup.element.on("keydown",".aui-button",function(a){a.stopPropagation()});c.getPage(0).element.attr("id","select-macro-page");c.addHeader(a.title);c.addPanel("All",e.all,"all","category-button-all");d=0;for(g=a.categories.length;d<g;d++)h=a.categories[d],c.addPanel(h.displayName,e[h.name]||m(h.name),
h.name,"category-button-"+h.name).getPanel(d).setPadding(0);c.addCancel("Cancel",a.onCancel);p(c);"VANILLA"==b.Meta.get("confluence-flavour")?c.addHelpText("<a href='{0}' id='marketplace-link'><span class='icon icon-marketplace'/>{1}</a>",[b.params.contextPath+"/plugins/servlet/upm/marketplace/featured?category=Macros&source=macro_browser","Find more macros..."]):c.addHelpText("Hint: type \"\u003cstrong\u003e{\u003c/strong\u003e\" in the Editor to insert macros on the page.");e=f(j.Templates.MacroBrowser.insertMacroPanel());
e.find("form").submit(function(a){k.complete();return b.stopEvent(a)});f("#macro-browser-preview-link",e).click(function(a){f(this).prop("disabled")||k.previewMacro(c.activeMetadata);return b.stopEvent(a)});c.addPage().addPanel("X",e,"macro-input-panel").addLink("Select macro",function(a){a.prevPage();a.searcher.focus()},"dialog-back-link").addButton("insert.name",function(){k.complete()},"ok").addCancel("Cancel",function(){return a.onCancel()}).getPanel(0).setPadding(0);
c.getPage(1).element.attr("id","macro-details-page");f("#macro-browser-dialog .dialog-button-panel .ok").before("<span id='save-warning-span' class='hidden'/>");c.searcher=j.DomFilterField({items:"#macro-browser-dialog .dialog-panel-body #category-all .macro-list-item",formId:"macro-browser-search-form",inputId:"macro-browser-search",searcher:function(a,b){var d=null;if(""!=b){c.getCurrentPanel()!=c.getPanel(0)&&c.gotoPanel(0);var e=k.searchSummaries(b),d={};f.each(e,function(){d[this.id]=this})}a.each(function(){!d||
this.id in d?f(this).show():f(this).hide()})},submitCallback:function(a,b){""!=b&&1===a.length&&a.click()}});c.page[0].header.append(c.searcher.form);c.page[0].ontabchange=function(a){a!=c.getPanel(0,0)&&c.searcher.reset()};e=f(j.Templates.MacroBrowser.missingUserMacroMetadataPanel({showAdminMessage:b.Meta.getBoolean("is-admin")}));c.addPage().addPanel("No macro metadata",e,"missing-metadata-panel").addLink("Back",function(a){a.gotoPage(0);
a.searcher.focus()},"dialog-back-link").addCancel("Cancel",function(){return a.onCancel()});c.gotoPage(2);c.addHeader("No macro metadata");c.gotoPanel(0,0);c.ready=!0;return c},showBrowserSpinner:function(a){var b=f("#macro-browser-dialog");a?b.spin("large"):b.spinStop()},showPreviewSpinner:function(a){var b=f("#macro-browser-preview");a?b.spin("large"):b.spinStop()},updateButtonText:function(a){var d=f("#macro-browser-dialog .dialog-button-panel .ok");
"edit"==a?d.text("Save"):d.text("Insert")},enableSaveButton:function(a){f("#macro-browser-dialog .dialog-button-panel .ok").prop("disabled",!a)},focusOnMacroDetailsFirstInput:function(){var a=f("#macro-insert-container").find(".macro-input-fields :input:visible:not(button,.select2-offscreen)").first();if(a.length){if(a.hasClass("select2-input")){var d=a.closest(".select2-container").parent().find(".select2-offscreen");if("function"!==typeof d.select2){b.log("select2Hidden is not a select2 hidden input, skipping focus attempt.");
return}d.select2("open");d.select2("close")}else a.focus();!k.selectedMacroDefinition&&""!==a.val()&&a.select()}else b.log("No input to focus")},setHelpLink:p}}});require("confluence/module-exporter").safeRequire("confluence-macro-browser/macro-browser-UI");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser.js' */
define("confluence-macro-browser/macro-browser","window jquery ajs confluence-macro-browser/macro-browser-utils confluence-macro-browser/macro-browser-editor confluence-macro-browser/macro-browser-fields confluence-macro-browser/macro-browser-model confluence-macro-browser/macro-browser-preview confluence-macro-browser/macro-browser-rest confluence-macro-browser/macro-browser-UI confluence-macro-browser/macro-browser-smartfields".split(" "),function(k,g,d,m,n,l,o,p,q,r,s){var a={},l=l(a);a.ParameterFields=
l.ParameterFields;a.Field=l.Field;s(a,a.ParameterFields);a.Utils=m;a.Editor=n(a);a.Preview=p(a);a.Model=o(a);a.Rest=q;a.UI=r(a);var h={},f,j=function(b,c){var e={id:b.macroName,successCallback:function(b){if(b&&b.details)b.details=a.Model.transformMetaDataDefault(b.details);a.Editor.loadMacroInBrowser(b.details,c);j.displayDetails();a.Preview.previewMacro(b.details)},errorCallback:function(){d.trigger("analytics",{name:"macro-browser.fetch-metadata-error"});k.alert("There has been an error loading the macro browser. Please try again or see your system administrator.");
j.displayDetails()}};if(b.alternateId)e.alternateId=b.alternateId;j.setUI(c,b.title);a.Rest.fetchMacroMetadataDetails(e)};j.setUI=function(b,c){var e=b=="edit"?a.editTitle:a.insertTitle;g("#macro-insert-container").hide();a.UI.updateButtonText(b);a.UI.enableSaveButton(false);a.dialog.gotoPage(1).addHeader(e.replace(/\{0\}/,c));a.dialog.show();a.UI.showBrowserSpinner(true)};j.displayDetails=function(){a.UI.showBrowserSpinner(false);a.UI.enableSaveButton(false);g("#macro-insert-container").show();a.UI.focusOnMacroDetailsFirstInput()};
a.reset=function(){f&&f.resolve&&f.resolve();f=null;a.initMacroBrowserAfterRequest=null;a.initData=null;a.hasInit=false;a.metadataList=[];a.aliasMap={};a.fields={};h={};a.Macros=h};a.jsOverrides=h;a.Macros=h;a.getMacroJsOverride=function(a){return h[a]};a.setMacroJsOverride=function(a,c){h[a]=c;return h[a]};a.hasInit=false;a.metadataList=[];a.aliasMap={};a.fields={};a.processRequiredParameters=function(){return a.Editor.processRequiredParameters()};a.paramChanged=function(){a.Editor.processRequiredParameters()};
a.loadMacroInBrowser=function(b,c){a.Editor.loadMacroInBrowser(b,c)};a.getMacroDefinitionFromForm=function(b){a.Editor.getMacroDefinitionFromForm(b)};a.getMacroParametersFromForm=function(b){a.Editor.getMacroParametersFromForm(b)};a.previewMacro=function(b){a.Preview.previewMacro(b)};a.previewOnload=function(b){var c=h[a.dialog.activeMetadata.macroName];c&&c.postPreview&&c.postPreview(g("#macro-preview-iframe")[0],a.dialog.activeMetadata);d.Editor.disableFrame(b);g(b).click(function(a){if(a.target.tagName.toLowerCase()===
"a"){(a=g(a.target).attr("href"))&&(a.indexOf("#")!=0&&a.indexOf(k.location)==-1)&&k.open(a,"_blank").focus();return false}})};a.getMacroMetadata=function(b){for(var c=0,e=a.metadataList.length;c<e;c++){var d=a.metadataList[c];if(d.macroName==b)return d}return null};a.getMetadataPromise=function(){return f};a.open=function(b){if(!b){b={};d.log("No settings to open the macro browser.")}var c=b.selectedMacro;!c&&b.presetMacroMetadata&&(c={name:b.presetMacroMetadata.macroName});if(c&&c.name){var e=a.getMacroJsOverride(c.name);
if(e&&typeof e.opener=="function"){e.opener(c);return}}if(!a.hasInit){d.debug("init macro browser");a.UI.showBrowserSpinner(true);if(a.initData!==null&&g.isEmptyObject(a.initData)){d.trigger("analytics",{name:"macro-browser.init-reattempt"});d.logError("Macro browser preload failed. Trying again...");a.initMacroBrowserAfterRequest=b;a.preLoadMacro();return}if(a.initData)a.initBrowser();else{d.trigger("analytics",{name:"macro-browser.init-overlap"});d.debug("Waiting for macro browser preloading...");
a.initMacroBrowserAfterRequest=b;return}}a.openMacroBrowser(b)};a.openMacroBrowser=function(b){a.settings=b;a.selectedMacroDefinition=b.selectedMacro;var c=a.selectedMacroDefinition&&a.selectedMacroDefinition.name||b.presetMacroName;if(b.presetMacroName)b.presetMacroMetadata=a.getMacroMetadata(b.presetMacroName);var e=b.presetMacroMetadata;if(!e){var i=b.selectedMacro;if(i){var c=i.name.toLowerCase(),c=a.aliasMap[c]||c,f=h[c];if(f){typeof f.updateSelectedMacro=="function"&&f.updateSelectedMacro(i);
typeof f.getMacroDetailsFromSelectedMacro=="function"&&(e=f.getMacroDetailsFromSelectedMacro(a.metadataList,i))}e||(e=a.getMacroMetadata(c))}}i=g("#macro-browser-dialog").find("button.back");if(e){d.debug("Open macro browser to edit macro: "+e.macroName);i.hide();a.replicateSelectMacro(e,b.mode||"edit")}else if(c){i.show();a.dialog.overrideLastTab();a.dialog.gotoPage(2);a.showBrowserDialog()}else{i.show();if(b.selectedCategory){c=g("#select-macro-page .dialog-page-menu button").index(g("#category-button-"+
b.selectedCategory));c<0&&(c=0);a.dialog.overrideLastTab();a.dialog.gotoPanel(0,c)}else a.dialog.gotoPage(0);a.showBrowserDialog();a.dialog.searcher.focusAndSearch(b.searchText)}};a.showBrowserDialog=function(){a.dialog.show();a.UI.showBrowserSpinner(false)};a.complete=function(){if(g("#macro-browser-dialog .dialog-button-panel .ok").is(":visible:not(:disabled)")){var b=a.dialog.activeMetadata,c=h[b.macroName];c&&c.manipulateMarkup&&c.manipulateMarkup(b);b=a.Editor.getMacroDefinitionFromForm(b);a.close();
if(a.settings.onComplete)a.settings.onComplete(b)}};a.cancel=function(){a.close();if(typeof a.settings.onCancel=="function")a.settings.onCancel();return false};a.close=function(){this.unknownParams={};this.fields={};a.Preview.removePreviewContainer();this.dialog.hide()};a.replicateSelectMacro=function(a,c){j(a,c)};a.initBrowser=function(){var b=a.initData;if(!b.categories||!a.metadataList.length){d.trigger("analytics",{name:"macro-browser.init-browser-error"});k.alert("There has been an error loading the macro browser. Please try again or see your system administrator.");
a.UI.showBrowserSpinner(false);return false}a.editTitle=b.editTitle;a.insertTitle=b.insertTitle;var c;b.categories=g.map(b.categories,function(a){if(a.name=="hidden-macros"){c=a;return null}return a});b.categories.sort(function(a,b){return a.displayName.toLowerCase()>b.displayName.toLowerCase()?1:-1});c&&d.params.showHiddenUserMacros&&b.categories.push(c);a.dialog=a.UI.createDialog({title:b.title,categories:b.categories,macros:a.metadataList,onClickMacroSummary:function(a,b){a.preventDefault();j(b,
"insert")},onSubmit:a.complete,onCancel:a.cancel});return a.hasInit=true};a.searchSummaries=function(b,c){c=g.extend({splitRegex:/[\s\-]+/},c);return d.filterBySearch(a.metadataList,b,c)};a.getMacroBody=function(){var b="";if(g("#macro-insert-container .macro-body-div textarea").length)b=g("#macro-insert-container .macro-body-div textarea").val();else if(a.selectedMacroDefinition){if(a.selectedMacroDefinition.body)b=a.selectedMacroDefinition.body}else if(a.dialog.activeMetadata)b=a.dialog.activeMetadata.formDetails.body.content;
return b};a.isHiddenMacroShown=function(a){return d.params.showHiddenUserMacros&&a.pluginKey=="_-user-macro-_"};a.hasRequiredParameters=function(a){return a.anyParameterRequired};a.setWhitelist=function(b){a.whitelist=b};a.preLoadMacro=function(){a.initData=null;if(f&&f.state()==="pending")return f;f=a.Rest.loadMacroMetadata({data:a.whitelist?{whitelist:a.whitelist}:{detailed:false},successCallback:function(b){a.initData=b;a.Model.loadMacros(b.macros);if(a.initMacroBrowserAfterRequest){a.initBrowser();
a.openMacroBrowser(a.initMacroBrowserAfterRequest)}},errorCallback:function(b){d.trigger("analytics",{name:"macro-browser.preload-error"});d.logError("Error requesting macro browser metadata:");d.logError(b);a.initData={}}})};return a});require("confluence/module-exporter").exportModuleAsGlobal("confluence-macro-browser/macro-browser","AJS.MacroBrowser");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'soy/macro-browser.soy' */
// This file was automatically generated from macro-browser.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.MacroBrowser.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.MacroBrowser == 'undefined') { Confluence.Templates.MacroBrowser = {}; }


Confluence.Templates.MacroBrowser.macroSummaryList = function(opt_data, opt_ignored) {
  return '<ol id="category-' + soy.$$escapeHtml(opt_data.category) + '" class="macro-list"></ol>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.macroSummaryList.soyTemplateName = 'Confluence.Templates.MacroBrowser.macroSummaryList';
}


Confluence.Templates.MacroBrowser.macroSummaryItem = function(opt_data, opt_ignored) {
  return '<li class="macro-list-item"><h4 class="macro-title"></h4>' + Confluence.Templates.MacroBrowser.macroDescription({description: ''}) + '</li>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.macroSummaryItem.soyTemplateName = 'Confluence.Templates.MacroBrowser.macroSummaryItem';
}


Confluence.Templates.MacroBrowser.macroDescription = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<div class="macro-desc">' + ((opt_data.descriptionHtml) ? soy.$$filterNoAutoescape(opt_data.descriptionHtml) : '') + ((opt_data.documentationLink) ? ' <a href="' + soy.$$escapeHtml(opt_data.documentationLink) + '" class="macro-doco-link">' + soy.$$escapeHtml("Documentation") + '</a>' : '') + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.macroDescription.soyTemplateName = 'Confluence.Templates.MacroBrowser.macroDescription';
}


Confluence.Templates.MacroBrowser.insertMacroPanel = function(opt_data, opt_ignored) {
  return '<div id="macro-insert-container"><input class="macro-name" type="hidden"/><div class="macro-input-fields dialog-panel"><form action="#" class="aui"></form></div><div class="macro-preview-container dialog-panel"><div class="macro-preview-header"><ul class="macro-preview-links"><li><a id="macro-browser-preview-link" class="refresh-link icon icon-refresh" href="#">' + soy.$$escapeHtml("Refresh") + '</a></li></ul><span>' + soy.$$escapeHtml("Preview") + '</span></div><div id="macro-browser-preview" class="macro-preview"></div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.insertMacroPanel.soyTemplateName = 'Confluence.Templates.MacroBrowser.insertMacroPanel';
}


Confluence.Templates.MacroBrowser.missingUserMacroMetadataPanel = function(opt_data, opt_ignored) {
  return '<div id="macro-missing-metadata-container"><p>' + "There is no metadata configured for this macro which means no configuration screen can be presented here." + '</p>' + ((opt_data.showAdminMessage) ? '<p>' + AJS.format("If this is a user macro then you can add metadata to the template using the \x3ca href\x3d\x22{0}\x22 target\x3d\x22_blank\x22\x3eUser Macro Administration\x3c/a\x3e console.","" + '/admin/usermacros.action') + '</p>' : '<p>' + "You must contact an administrator to configure metadata for this macro." + '</p>') + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.missingUserMacroMetadataPanel.soyTemplateName = 'Confluence.Templates.MacroBrowser.missingUserMacroMetadataPanel';
}


Confluence.Templates.MacroBrowser.macroParameter = function(opt_data, opt_ignored) {
  return '<div class="macro-param-div"><label></label><input type="text" class="text"/></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.macroParameter.soyTemplateName = 'Confluence.Templates.MacroBrowser.macroParameter';
}


Confluence.Templates.MacroBrowser.macroParameterBoolean = function(opt_data, opt_ignored) {
  return '<div class="checkbox macro-param-div boolean-param"><input class="checkbox" type="checkbox" value="true"/><label></label></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.macroParameterBoolean.soyTemplateName = 'Confluence.Templates.MacroBrowser.macroParameterBoolean';
}


Confluence.Templates.MacroBrowser.macroParameterSelect = function(opt_data, opt_ignored) {
  return '<div class="macro-param-div"><label></label><select class="select"></select></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.macroParameterSelect.soyTemplateName = 'Confluence.Templates.MacroBrowser.macroParameterSelect';
}


Confluence.Templates.MacroBrowser.macroParameterHidden = function(opt_data, opt_ignored) {
  return '<div class="macro-param-div"><input type="hidden"/></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.macroParameterHidden.soyTemplateName = 'Confluence.Templates.MacroBrowser.macroParameterHidden';
}


Confluence.Templates.MacroBrowser.macroParameterDesc = function(opt_data, opt_ignored) {
  return '<div class="macro-param-desc">' + soy.$$filterNoAutoescape(opt_data.description) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.macroParameterDesc.soyTemplateName = 'Confluence.Templates.MacroBrowser.macroParameterDesc';
}


Confluence.Templates.MacroBrowser.macroBody = function(opt_data, opt_ignored) {
  return '<div class="macro-body-div"><label>' + soy.$$escapeHtml("Body text") + '</label><textarea class="monospaceInput textarea" type="text" rows="10"></textarea></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.macroBody.soyTemplateName = 'Confluence.Templates.MacroBrowser.macroBody';
}


Confluence.Templates.MacroBrowser.helpLink = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.Dialog.helpLink({href: "https://docs.atlassian.com/confluence/docs-59/Macros"});
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.helpLink.soyTemplateName = 'Confluence.Templates.MacroBrowser.helpLink';
}


Confluence.Templates.MacroBrowser.gadgetLink = function(opt_data, opt_ignored) {
  return '<a class=\'macro-uri\' href="' + soy.$$escapeHtml(opt_data.url) + '" title="' + soy.$$escapeHtml(opt_data.url) + '" target=\'_blank\'>' + soy.$$escapeHtml("Gadget URL") + '</a>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.gadgetLink.soyTemplateName = 'Confluence.Templates.MacroBrowser.gadgetLink';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-preload.js' */
define("confluence-macro-browser/macro-browser-preload",["jquery","ajs","window"],function(a,b,c){return{macroBrowserPreload:function(){a(c).bind("render-content-loaded",function(c,d){a("#macro-preview-iframe").contents().find("body")[0]==d&&b.MacroBrowser.previewOnload(d)});b.MacroBrowser.preLoadMacro()}}});require("confluence/module-exporter").safeRequire("confluence-macro-browser/macro-browser-preload",function(a){require("ajs").toInit(a.macroBrowserPreload)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
