;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-editor-resources', location = 'templates/view-file-macro-editor.soy' */
// This file was automatically generated from view-file-macro-editor.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.ViewFileMacro.Templates.Editor.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.ViewFileMacro == 'undefined') { Confluence.ViewFileMacro = {}; }
if (typeof Confluence.ViewFileMacro.Templates == 'undefined') { Confluence.ViewFileMacro.Templates = {}; }
if (typeof Confluence.ViewFileMacro.Templates.Editor == 'undefined') { Confluence.ViewFileMacro.Templates.Editor = {}; }


Confluence.ViewFileMacro.Templates.Editor.viewFilePropertyPanelHeader = function(opt_data, opt_ignored) {
  return '<div class="view-file-property-panel-header"><span class="file-name"><span class="aui-icon aui-icon-small ' + soy.$$escapeHtml(opt_data.fileIcon) + '"></span>' + soy.$$escapeHtml(opt_data.fileName) + '</span></div>';
};
if (goog.DEBUG) {
  Confluence.ViewFileMacro.Templates.Editor.viewFilePropertyPanelHeader.soyTemplateName = 'Confluence.ViewFileMacro.Templates.Editor.viewFilePropertyPanelHeader';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-editor-resources', location = '/js/components/view-file-macro-properties-panel.js' */
define("vfm/components/view-file-macro-properties-panel",["jquery","underscore","ajs","confluence","confluence/jsUri","tinymce","vfm/view-file-macro-utils"],function(d,x,f,l,m,b,r){var t="view-file";var a="macro-placeholder-property-panel-edit-button";var y="macro-placeholder-property-panel-remove-button";var c="placeholder/unknown-attachment";var i="data-macro-parameters";var q={"view-file-size-small":"150","view-file-size-medium":"250","view-file-size-large":"400"};var h=[{className:"macro-property-panel-view-file-size-small",text:"",tooltip:"Small thumbnail",click:j},{className:"macro-property-panel-view-file-size-medium",text:"",tooltip:"Medium thumbnail",click:j},{className:"macro-property-panel-view-file-size-large",text:"",tooltip:"Large thumbnail",click:j},null,{className:"macro-property-panel-view-file-convert-to-link",text:"Show as link",tooltip:"Show as link",click:g}];function u(E,B){var F=x.find(Object.keys(q),function(G){return q[G]===B});if(F){for(var A=0,D=E.length;A<D;A++){var z=E[A];var C=z.className.replace(" selected","");if(C.indexOf("macro-property-panel-"+F)!==-1){C+=" selected"}z.className=C}}}function s(A){var B=x.reject(A,function(C){return C.className.indexOf(a)>-1||C.className.indexOf(y)>-1});A.splice(0,A.length);for(var z=0;z<B.length;z++){A.push(B[z])}}function k(A,z){var B=d(A);B.attr("height",z);var C=B.attr("src");if(o(C)){B.attr("src",p(B.attr("src"),z));B.attr("data-mce-src",p(B.attr("data-mce-src"),z));if(b.isGecko){f.Rte.getEditor().execCommand("mceRepaint",false)}}v(B,z);b.activeEditor.undoManager.add()}function o(z){return(z!=null&&z.indexOf("/servlet/view-file-macro/placeholder")>=0)}function p(B,z){var A=new m(B);if(A.getQueryParamValue("height")!==""){A.replaceQueryParam("height",z)}return A.toString()}function w(C){var z=C.attr(i);var D=[];var A="";for(var B=0;B<z.length;B++){var E=z[B];if(E==="\\"){A+=E;if(B+1!==z.length){A+=z[++B]}}else{if(E==="|"){D.push(A);A=""}else{A+=E}}}D.push(A);return D}function v(C,A){var B="height="+A;var E=w(C);var D=e(C,"height");if(D){var z=x.indexOf(E,"height="+D);E[z]=B}else{E.push(B)}C.attr(i,E.join("|"))}function e(B,z){var C=w(B);var A=x.find(C,function(D){return(D.indexOf(z+"=")>=0)});return A?A.split("=")[1]:null}function j(B,z){if(d(B).attr("class").indexOf("selected")!==-1){return}f.Confluence.PropertyPanel.destroy();var C=Object.keys(q);var D=d(B).attr("class");for(var A=0;A<C.length;A++){if(D.indexOf(C[A])!==-1){k(z,q[C[A]]);d(z).click();f.trigger("analyticsEvent",{name:"confluence.view-file.resize."+C[A].substring(C[A].lastIndexOf("-")+1,C[A].length)});return}}}function g(B,z){f.trigger("analyticsEvent",{name:"confluence.view-file.convert.to-link-trigger"});f.Confluence.PropertyPanel.destroy();A(z);function A(C){var E=r.getParameterByName(d(C).attr("src"),"attachmentId");var D=f.REST.makeUrl("attachment/"+E+".json");d.ajax({type:"GET",url:D,contentType:"application/json; charset=utf-8",dataType:"json"}).success(function(H){var F=l.Link.fromREST(H);var G=F.insert();b.activeEditor.undoManager.add();b.activeEditor.focus();G.click()})}}function n(){f.bind("created.property-panel",function(G,F){var H=d(F.anchor);var C=H.attr("data-macro-name");if(C!==t){return}var D=l.ViewFileMacro.Templates.Editor.viewFilePropertyPanelHeader;var E=e(H,"name");var B=r.getParameterByName(H.attr("src"),"mimeType");var A=f.Confluence.FileTypesUtils.getAUIIconFromMime(B);var z=d(D({fileName:E,fileIcon:A}));F.panel.find(".aui-property-panel").prepend(z);if(F.shouldFlip){F.tip.css({top:F.panel.outerHeight()})}})}return{init:function(){f.Confluence.PropertyPanel.Macro.registerInitHandler(function(G,D,z){s(D);var E=d(G);var B=E.attr("data-mce-src");if(B&&B.indexOf(c)>-1){return}for(var A=0,C=h.length;A<C;A++){D.push(h[A])}var F=E.attr("height");if(!F){F=(f.Meta.get("content-type")==="comment")?r.DEFAULT_HEIGHT_IN_COMMENT:r.DEFAULT_HEIGHT}u(D,F)},t);n()}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-editor-resources', location = '/js/components/view-file-macro-link-properties-panel.js' */
define("vfm/components/view-file-macro-link-properties-panel",["jquery","ajs","tinymce","vfm/view-file-macro-utils"],function(g,b,e,a){var c="view-file";function f(h){if(h){var k=g(h);var i=k.attr("data-linked-resource-type");var j=k.attr("data-linked-resource-content-type");return b.MacroBrowser.getMacroMetadata(c)&&i==="attachment"&&!(j&&j.indexOf("image")===0)}return false}function d(h){var i=b.REST.makeUrl("attachment/"+g(h).attr("data-linked-resource-id")+".json");g.ajax({type:"GET",url:i,contentType:"application/json; charset=utf-8",dataType:"json"}).success(function(k){var n={name:k.fileName};if(b.Data.get("content-id")!==k.ownerId){n.page=k.parentTitle;n.space=k.space.key;if(k.parentContentType==="blogpost"){var l=k.createdDate.date.split("-");n.date=l[0]+"/"+l[1]+"/"+l[2].substring(0,2)+"/"}}n.height=(b.Meta.get("content-type")==="comment")?a.DEFAULT_HEIGHT_IN_COMMENT:a.DEFAULT_HEIGHT;var j={contentId:b.Meta.get("content-id")||"0",macro:{name:c,params:n}};var m=e.confluence.MacroUtils.insertMacro(j,h);m.done(function(o){g(o).click()})})}return{init:function(){b.bind("link-property-panel-buttons.created",function(j,k){var i=k.buttons;var h=k.link;if(f(h)){i.push({className:"link-property-panel-convert-to-thumbnail-button",text:"Show as thumbnail",tooltip:"Show as thumbnail",click:function(){b.Confluence.PropertyPanel.destroy();d(h);b.trigger("analyticsEvent",{name:"confluence.view-file.convert.to-thumbnail-trigger"})}})}})}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-editor-resources', location = '/js/components/vfm-editor-poller.js' */
define("vfm/components/vfm-editor-poller",["ajs","jquery","underscore","tinymce","vfm/view-file-macro-utils","vfm/services/conversion-service"],function(k,e,m,p,q,c){var o;var l=false;var d={};var f=q.THUMBNAIL_POLLING_PERIOD;var h=q.THUMBNAIL_POLLING_BACKOFF_RATIO;function a(){if(!p.activeEditor||!l){return}var s=e("img[data-macro-name='view-file'][src*='thumbnailStatus="+q.THUMBNAIL_STATUS_IN_PROGRESS+"'][data-thumbnail-status!='"+q.THUMBNAIL_STATUS_ERROR+"']",p.activeEditor.dom.doc);if(s.length>0){var r=false;s.each(function(){var u=e(this);var w=u.attr("src");var v=q.getParameterByName(w,"attachmentId");var t=q.getParameterByName(w,"version");if(!d[v]||d[v].version!==t){d[v]={version:t};r=true}});if(r){j()}c.postThumbnailConversionResults(d).then(function(t){if(!p.activeEditor||!l){return}m.each(t,function(x,y){if(!d[y]){return}var w=e("img[data-macro-name='view-file'][src*='attachmentId="+y+"']",p.activeEditor.dom.doc);var v=d[y].version;w.attr("data-thumbnail-status",x);if(x===q.THUMBNAIL_STATUS_CONVERTED){var u=w.attr("src");var z=c.getThumbnailUrl(y,v);z=q.addParamsToUrl(z,{attachmentId:y,mimeType:q.getParameterByName(u,"mimeType")});w.attr("src",z);delete d[y]}else{if(x===q.THUMBNAIL_STATUS_ERROR){delete d[y]}}});if(!m.isEmpty(d)){n()}else{j()}i()})}else{if(s.length===0){j();i()}}}function n(){f=f*h}function j(){f=q.THUMBNAIL_POLLING_PERIOD}function i(){l=true;if(o){clearTimeout(o)}o=setTimeout(a,f)}function g(){if(o){clearTimeout(o);o=undefined}l=false;d={};j()}var b={startPolling:i,stopPolling:g};return b});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-editor-resources', location = '/js/vfm-editor.js' */
require(["ajs","tinymce","vfm/components/view-file-macro-properties-panel","vfm/components/view-file-macro-link-properties-panel","vfm/components/vfm-editor-poller"],function(a,d,b,c,e){a.toInit(function(){a.MacroBrowser.setMacroJsOverride("view-file",{opener:function(f){}});b.init();c.init()});d.create("tinymce.plugins.ViewFilePoller",{init:function(f){a.bind("rte-ready",function(){e.startPolling()});a.bind("rte-destroyed",function(){e.stopPolling()})}});d.PluginManager.add("viewFilePoller",d.plugins.ViewFilePoller);a.Rte.BootstrapManager.addTinyMcePluginInit(function(f){f.plugins+=",viewFilePoller"})},undefined,true);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
