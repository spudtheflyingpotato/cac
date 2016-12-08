;try {
/* module-key = 'confluence.web.resources:dialog-breadcrumbs', location = '/includes/js/dialog-breadcrumbs.js' */
define("confluence/dialog-breadcrumbs",["ajs","jquery","confluence/meta","confluence/templates","confluence/breadcrumbs-jquery"],function(b,d,e,k){var h={},l=function(a,e,f){var g=a.userName?a.userName:a.pageId?a.pageId+":"+a.fileName:a.spaceKey+":"+a.title+":"+a.postingDay+":"+a.fileName;g in h?e(h[g],"success"):d.ajax({type:"GET",dataType:"json",data:a,url:b.contextPath()+"/pages/breadcrumb.action",error:f||function(){},success:function(a,b){if(!a||!a.breadcrumbs)f(a,b);else{for(var c=d.makeArray(a.breadcrumbs);c[0]&&
"userinfo"!==a.type&&/peopledirectory\.action$/.test(c[0].url);)c.shift();"page"===a.type&&(c[1]&&/pages\.action/.test(c[1].url))&&c.splice(1,1);c.type=a.type;h[g]=c;e(c,b)}}})};return{getBreadcrumbsDefault:l,Breadcrumbs:function(a,h){var f=0;return{update:function(g,j){a.html(k.Dialog.breadcrumbLoading());var m=f+=1,c=function(){return m!==f?(b.debug("Breadcrumb response for ",g," is stale, ignoring."),!0):!1};(h||l)(g,function(f,h){if(!c())if("success"!==h||!f)a.html(k.Dialog.breadcrumbError());
else{var i=g.spaceKey;a.renderBreadcrumbs(f);if(!(i=i!==e.get("space-key")))a:{for(i=1;i<f.length;i++)if(f[i].title===e.get("page-title")){i=!1;break a}i=!0}i?(j.clearErrors(),d(j.moveButton).prop("disabled",!1)):(j.error("You cannot move a page to be underneath itself or its children."),d("li:last-child",a).addClass("warning"))}},function(d){c()||(a.html(k.Dialog.breadcrumbError()),404===d.status&&j.error("The specified page was not found."))})}}},getBreadcrumbsLegacy:function(a,e,f){if(!a.id)throw Error("id is a required parameter in 'options'");
if(!a.type)throw Error("type is a required parameter in 'options'");var g=a.id+":"+a.type;g in h?e(h[g],"success"):d.ajax({type:"GET",dataType:"json",data:a,url:b.contextPath()+b.REST.getBaseUrl()+"breadcrumb",error:f||function(){},success:function(a,b){if(!a||!a.breadcrumbs)f(a,b);else{for(var c=d.makeArray(a.breadcrumbs);c[0]&&"userinfo"!==a.type&&/peopledirectory.action$/.test(c[0].url);)c.shift();c.type=a.type;h[g]=c;e(c,b)}}})}}});
require("confluence/module-exporter").safeRequire("confluence/dialog-breadcrumbs",function(b){var d=require("ajs"),e=require("confluence/legacy");d.toInit(function(){d.MoveDialog||(d.MoveDialog={});d.MoveDialog.Breadcrumbs=b.Breadcrumbs;d.MoveDialog.getBreadcrumbs=b.getBreadcrumbsDefault;d.Breadcrumbs={};d.Breadcrumbs.getBreadcrumbs=b.getBreadcrumbsLegacy;e.Dialogs||(e.Dialogs={});e.Dialogs.Breadcrumbs=d.Breadcrumbs;e.Dialogs.Breadcrumbs.getBreadcrumbs=b.getBreadcrumbsLegacy;e.Dialogs.Breadcrumbs.Controller=
b.Breadcrumbs;e.Dialogs.Breadcrumbs.defaultGetBreadcrumbs=b.getBreadcrumbsDefault})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:dialog-breadcrumbs', location = '/includes/soy/dialog-breadcrumbs.soy' */
// This file was automatically generated from dialog-breadcrumbs.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Dialog.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Dialog == 'undefined') { Confluence.Templates.Dialog = {}; }


Confluence.Templates.Dialog.breadcrumbItem = function(opt_data, opt_ignored) {
  return '<li><a class="' + soy.$$escapeHtml(opt_data.className) + '" title="' + soy.$$escapeHtml(opt_data.title) + '" tabindex="-1"><span>' + soy.$$escapeHtml(opt_data.text) + '</span></a></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Dialog.breadcrumbItem.soyTemplateName = 'Confluence.Templates.Dialog.breadcrumbItem';
}


Confluence.Templates.Dialog.breadcrumbLoading = function(opt_data, opt_ignored) {
  return '<li class="loading"><span>' + soy.$$filterNoAutoescape("Loading breadcrumbs\u2026") + '</span></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Dialog.breadcrumbLoading.soyTemplateName = 'Confluence.Templates.Dialog.breadcrumbLoading';
}


Confluence.Templates.Dialog.breadcrumbError = function(opt_data, opt_ignored) {
  return '<li class="warning last"><span>' + soy.$$escapeHtml("Error retrieving breadcrumbs.") + '</span></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Dialog.breadcrumbError.soyTemplateName = 'Confluence.Templates.Dialog.breadcrumbError';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
