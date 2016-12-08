;try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-js', location = 'editor/page-editor.js' */
define("confluence-editor/editor/page-editor","ajs confluence/legacy jquery document window confluence/meta".split(" "),function(c,d,b,k,F,g){function u(a){b("#editpageform").find("input[name='atl_token']").val(a);g.set("atl-token",a);g.set("atlassian-token",a);b("#atlassian-token").attr("content",a)}var v=c.DarkFeatures.isEnabled("editor.ajax.save")&&!c.DarkFeatures.isEnabled("editor.ajax.save.disable")&&g.get("remote-user")!=="",o=[],l=[],m=[],w=false,j=1,p,H=function(a){var b=true;p&&p.close();
for(var c=0;c<l.length;c++){l[c](a)===false&&(b=false);if(a.isImmediatePropagationStopped())break}if(!b||a.isDefaultPrevented()||a.isPropagationStopped())return false;a.preventDefault();x(a).done(y).fail(G)},G=function(a){require(["aui/flag"],function(a){p=a({type:"error",body:"Unable to communicate with server. Saving is not possible at the moment."})});a&&c.trigger("analytics",{name:"editor.save.error."+a.origin+"."+a.cause,data:{message:a.message}});d.Editor.UI.toggleSavebarBusy(false)},x=function(){var a=b.Deferred();
a.resolve();return a.promise()},y=function(){b(d.Editor.getCurrentForm()).submit()};c.bind("rte-ready",function(){d.Editor.UI.saveButton.bind("click",H)});var I=function(){var a;for(a=0;a<o.length;a++)d.Editor.UI.cancelButton.click(o[a]);var c=b(d.Editor.getCurrentForm());for(a=0;a<m.length;a++)c.submit(m[a]);b.unbind("init.rte",this)},z=function(a,d,e,f){f.push(e);if(c.Rte&&c.Rte.BootstrapManager&&c.Rte.BootstrapManager.isInitComplete())a.bind(d,e);else if(!w){w=true;b.bind("init.rte",I)}},q=function(a,
b,d){var f=null;c.Rte&&(c.Rte.BootstrapManager&&c.Rte.BootstrapManager.isInitComplete())&&(f=function(a,b,c){a.unbind(b,c)});for(var n=d.pop();n;){f&&f(a,b,n);n=d.pop()}},A=function(a){if(i!==a){i&&i.clear();a.start(d.Editor.heartbeat);i=a}},i,B=g.getNumber("heartbeat-interval")||3E4,r,C;r={start:function(a){c.debug("Changing heartbeat to the normal scheduler");C=setInterval(a,B)},clear:function(){clearInterval(C)}};var D,E=Math.max(B/5,5E3),s,t;D={start:function(a){c.debug("Changing heartbeat to the recovery scheduler");
t=0;var b=function(){a();var c=E*Math.pow(2,t);s=setTimeout(b,Math.min(c,3E5));t++};s=setTimeout(b,E)},clear:function(){clearTimeout(s)}};return{bookmark:"",MODE_RICHTEXT:"richtext",MODE_SOURCE:"source",MODE_PREVIEW:"preview",PREVIEW_OUTPUT_TYPE:"PREVIEW",currentEditMode:null,contentHasChangedSinceLastSave:false,sourceInitialValue:false,isSubmitting:false,isCancelling:false,overrideBeforeSave:function(a){x=a},overrideSave:function(a){y=a},getNumConcurrentEditors:function(){return j},addCancelHandler:function(a){z(d.Editor.UI.cancelButton,
"click",a,o)},addSaveHandler:function(a){l.push(a)},addSubmitHandler:function(a){z(b(d.Editor.getCurrentForm()),"submit",a,m)},removeAllCancelHandlers:function(){q(d.Editor.UI.cancelButton,"click",o)},removeAllSaveHandlers:function(){q(d.Editor.UI.saveButton,"click",l)},removeAllSubmitHandlers:function(){q(b(d.Editor.getCurrentForm()),"submit",m)},hasContentChanged:function(){return!this.inRichTextMode()&&!this.contentHasChangedSinceLastSave?false:this.editorHasContentChanged()},editorHasContentChanged:function(){if(c.Rte.getEditor()==
null){c.debug("Confluence.Editor: editorHasContentChanged - No active editor present. Returning false.");return false}return c.Rte.Content.editorHasContentChanged()},isEmpty:function(){var a=b(c.Rte.getEditor().getContent()).text();return!b.trim(a)},getResumeDraftUrl:function(){var a=[];a.push(c.contextPath());a.push("/pages/"+(c.params.newPage?"create":"edit")+c.params.draftType+".action");a.push("?useDraft=true");a.push("&pageId="+c.params.pageId);a.push("&contentChanged="+this.hasContentChanged());
this.getCurrentForm().spaceKey&&a.push("&spaceKey="+g.get("space-key"));return a.join("")},getCurrentTitle:function(){return b("#content-title")&&b("#content-title").val()},contentFormSubmit:function(){d.Editor.Drafts.unBindUnloadMessage();b(".editable-title #content-title").prop("disabled",true);return true},heartbeat:function(){var a={dataType:"json",contentId:d.Editor.Drafts.isNewContent()?c.params.draftId:c.params.pageId,draftType:c.params.draftType,spaceKey:c.params.spaceKey},h=g.getBoolean("shared-drafts"),
e=g.get("content-type")==="page"||g.get("content-type")==="blogpost",f=c.params.pageId!=="0";!e||!f&&!h?c.safe.post(c.params.contextPath+"/json/heartbeat.action",{},function(a){a&&a.atlToken&&u(a.atlToken);c.trigger("rte.heartbeat",a)},"json").fail(function(a){(a.status>=500||a.status===0)&&d.Editor.heartbeatType.recovery();c.trigger("rte.heartbeat-error",a)}):c.safe.post(c.params.contextPath+"/json/startheartbeatactivity.action",a,function(a){if(!a||!a.atlToken||!(a.activityResponses instanceof Array)){c.trigger("rte.heartbeat-error",
"Invalid server response");c.logError("Unexpected server response for heartbeat:");c.log(a)}else{var h=a.activityResponses;u(a.atlToken);d.Editor.heartbeatType.normal();c.trigger("rte.heartbeat",h);j=(h.length||0)+1;if(j>1){var e=!v?b("#other-users-span"):b("#reliable-other-users-span").length===0?b("<span id='reliable-other-users-span'></span>"):b("#reliable-other-users-span");e.empty();for(var f=0;f<j-1;++f){f>0&&e.append(", ");var g=h[f];e.append(c("a").attr("href",c.params.contextPath+"/display/~"+
encodeURIComponent(g.userName)).text(g.fullName));g.lastEditMessage!=null&&e.append(" ").append(c("span").addClass("smalltext").text(g.lastEditMessage))}v&&b("#reliable-other-users-span").length===0&&e.html().trim()!==""&&d.Editor.SafeSave.Message.handleMessage("heartBeat",{type:"info",message:c.format("This page is also being edited by {0}. Your changes will be merged with theirs when you save.","<span id='reliable-other-users-span'>"+e.html()+"</span>")});c.isVisible("#heartbeat-div")||c.Confluence.Analytics.publish("rte.notification.concurrent-editing",
{numEditors:j,pageId:c.params.pageId,draftType:c.params.draftType})}c.setVisible("#heartbeat-div",j>1);b(k).trigger("resize.resizeplugin");c.trigger("editor-heartbeat",a)}},"json").fail(function(a,b,h){(a.status>=500||a.status===0)&&d.Editor.heartbeatType.recovery();if(a.status===403||a.status===401)c.logError("Heartbeat error: Unauthorized");else{c.logError("Server error on heartbeat request:");c.log(h)}c.trigger("rte.heartbeat-error",a)})},heartbeatType:{normal:function(){A(r)},recovery:function(){A(D)},
reset:function(){i&&i.clear();i=r;i.start(d.Editor.heartbeat)}},disableFrame:function(a){b("form",a).each(function(){b(this).unbind();this.onsubmit=function(){return false}});b("a",a).each(function(){b(this).attr("target","_top").unbind()});b("input, img",a).each(function(){b(this).unbind()})},previewFrameOnload:function(a,h){var e=require("tinymce");d.Editor.setMode(d.Editor.MODE_PREVIEW);e.activeEditor.setProgressState(false);d.Editor.disableFrame(a);var f=b("#main",a)[0];if(g.get("content-type")!=
"comment"&&b(f).find("#main-header").length===0){var n=b("#title-heading"),i=n.attr("class");b(f).prepend('<div id="preview-header"><div id="title-heading" class="'+i+'">'+n.html()+"</div></div>")}b("a",a).attr("target","_parent");if(b(c.Rte.getEditor().getBody()).hasClass("resizable")){var j=b(h||"#previewArea iframe"),o=0,l=0,m,p=j.height();f&&function J(){var a=b(f).outerHeight(true);if(o!=a){a!=j.height()&&j.height(0).height(Math.max(a,p));o=a;l=0}else l++;l<500&&(m=setTimeout(J,500))}();b(k).one("mode-changed.resize-editor",
function(a,b){b!=d.Editor.MODE_PREVIEW&&m&&clearTimeout(m)})}else if(e.isIE||e.isOpera){e=b(F).height();n=b("#header-precursor").height()+b("#header").height()+b("#editor-precursor").height();i=b("#savebar-container").height();b("#preview iframe").height(e-n-i-4);b("#content.edit").height("auto")}},showRichText:function(a){var h=require("tinymce");c.setVisible("#wysiwyg",a);b(".toolbar-group-preview").toggleClass("assistive",!a);b(".toolbar-group-edit").toggleClass("assistive",a);b("#main").toggleClass("active-richtext",
a);h.isGecko&&a&&c.Rte.fixEditorFocus(d.Editor.bookmark)},showPreview:function(a){if(g.get("content-type")!=="comment"){var d=b("#content-title");if(d.hasClass("placeholded")){b("#preview-title-text").text("");b("#title-text").text("")}else{b("#preview-title-text").text(d.val());b("#title-text").text(d.val())}}c.setVisible("#preview",a);b(".toolbar-group-preview").toggleClass("assistive",a);b(".toolbar-group-edit").toggleClass("assistive",!a);b("#main").toggleClass("active-preview",a);b("#full-height-container").length&&
b("#full-height-container").toggleClass("active-preview",a)},showSource:function(a){a?this.showSourceArea():this.hideSourceArea();b("#main")[a?"addClass":"removeClass"]("active-source")},setMode:function(a){c.debug("Set mode: "+a);if(a==d.Editor.MODE_RICHTEXT){this.showRichText(true);this.showPreview(false);this.showSource(false)}else if(a==d.Editor.MODE_SOURCE){this.showSource(true);this.showRichText(false);this.showPreview(false)}else if(a==d.Editor.MODE_PREVIEW){this.showPreview(true);this.showRichText(false);
this.showSource(false);d.Editor.UI.spinner.removeClass("aui-icon-wait")}setTimeout(function(){var a=b(".toolbar-group-preview");a.height(0);a.height();a.height("auto")},1);this.currentEditMode=a;b(k).trigger("mode-changed",[a])},getContentId:function(){return d.getContentId()},addErrorMessage:function(a,d,e){var f=b("#"+a),e=e?"#all-messages":"#editor-messages";f.length?f.empty():f=b("<div></div>").attr("id",a).appendTo(e);c.messages.error(f,{closeable:true,body:d})},changeMode:function(a,h){var e=
require("tinymce");c.debug("Change mode: "+a);h=h||{};if(this.inRichTextMode()&&!c.Rte.BootstrapManager.isInitComplete()||this.currentEditMode==a)return false;var f=this.currentEditMode;c.trigger("rte-changeMode",a);if(a==d.Editor.MODE_PREVIEW){var i=c.Rte.getEditor();f==d.Editor.MODE_SOURCE&&d.Editor.transferSourceToEditor();if(e.isGecko&&f==d.Editor.MODE_RICHTEXT&&!d.Editor.bookmark)d.Editor.bookmark=e.activeEditor.selection.getBookmark();this.currentEditMode=a;e={contentId:d.getContentId(),contentType:g.get("content-type"),
spaceKey:g.get("space-key"),xHtml:i.getContent(),outputType:d.Editor.PREVIEW_OUTPUT_TYPE};c.safe.ajax({type:"POST",url:c.params.contextPath+"/pages/rendercontent.action",data:e,success:d.Editor.replysetPreviewArea,timeout:2E4,error:function(){c.trigger("rte-preview-action-selected");d.Editor.addErrorMessage("preview-error","There was an error loading preview. Please try again later.");d.Editor.currentEditMode=f;h.errorCallback&&h.errorCallback()}})}else this.setMode(a);a==d.Editor.MODE_RICHTEXT&&b(k).trigger("resize.resizeplugin");
return false},replysetPreviewArea:function(a){var d=require("tinymce");c.trigger("rte-preview-action-selected");b("#preview-error").remove();var e=c.params.staticResourceUrlPrefix+"/blank.html";d.activeEditor.setProgressState(true);b("#previewArea").html('<iframe id="editor-preview-iframe" src="'+e+'" scrolling="yes" frameborder="0"></iframe>');d=b("#previewArea iframe")[0];d=d.contentDocument||d.contentWindow.document;d.write(a);d.close()},inRichTextMode:function(){return this.currentEditMode==d.Editor.MODE_RICHTEXT},
isNewPage:function(){return b("#createpageform, #createpagetemplate").length>0},onInit:function(){var a=require("tinymce");d.Editor.setMode(d.Editor.MODE_RICHTEXT);a.activeEditor.onClick.add(function(){var a=d.Editor.UI.postingDatePicker;a&&a.hide()})},contentChangeHandler:function(){this.contentHasChangedSinceLastSave=true},getCurrentForm:function(){return require("tinymce").activeEditor.formElement},transferSourceToEditor:function(){var a=d.Editor;if(a.sourceInitialValue){var b=a.getSourceAreaVal();
if(b!=a.sourceInitialValue){var c=require("tinymce").activeEditor;c.setContent(b);c.setDirty(b)}}a.sourceInitialValue=false},hideSourceArea:function(){b("#editor-html-source-container").addClass("hidden");this.setToolBarInactive(false);this.transferSourceToEditor();b("#rte-button-source-mode").removeClass("active");b("#rte-button-publish").unbind("click.source-save")},showSourceArea:function(){var a=require("tinymce");b("#editor-html-source-container").removeClass("hidden");this.setSourceAreaHeight();
this.setToolBarInactive(true);this.sourceInitialValue=a.activeEditor.getContent();this.setSourceAreaVal(this.sourceInitialValue);b("#rte-button-source-mode").addClass("active");b("#rte-button-publish").bind("click.source-save",d.Editor.transferSourceToEditor)},getSourceAreaVal:function(){return b("#editor-html-source").val()},setSourceAreaVal:function(a){b("#editor-html-source").val(a)},setSourceAreaHeight:function(){var a=c.Rte.getTinyMceEditorMinHeight();c.debug("HTML source height= "+a);var d=
b("#editor-html-source")[0].scrollHeight;if(d>a){a=d;c.debug("ACTUAL HEIGHT "+d)}b("#editor-html-source-container").height(a+"px")},setToolBarInactive:function(a){b("#rte-toolbar").toggleClass("disabled",a)},isVisible:function(){return b("#wysiwyg:visible").length>0||b("#editor-html-source-container:visible").length>0||b("#preview:visible").length>0}}});
require("confluence/module-exporter").safeRequire("confluence-editor/editor/page-editor",function(c){var d=require("confluence/legacy"),b=require("jquery"),k=require("ajs");d.Editor=b.extend(d.Editor||{},c);k.toInit(function(){k.bind("init.rte",d.Editor.onInit)});k.Editor=d.Editor});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-js', location = 'editor/page-editor-ui.js' */
define("confluence-editor/editor/page-editor-ui","jquery confluence/templates ajs confluence/legacy window moment document".split(" "),function(d,i,b,c,j,p,g){return function(){var a={},h=function(b){for(var c=0;c<a.buttons.length;c++)m(b,a.buttons[c])},m=function(a,b){b&&(a?b.removeAttr("aria-disabled"):b.attr("aria-disabled","true"))},n=function(a){return a.length&&a.attr("aria-disabled")!=="true"},k=function(){return b.Meta.get("new-page")},o=function(){var a="";k()||(a="Edit"+
" - ");return a};a.spinner=d("#rte-spinner");var e;e=i.Editor.Page.saveButton({contentType:b.Meta.get("content-type")});d("#rte-button-publish").replaceWith(e);e=d("#rte-button-publish");a.saveButton=e;a.overwriteButton=d("#rte-button-overwrite");a.editButton=d("#rte-button-edit");a.previewButton=d("#rte-button-preview");a.cancelButton=d("#rte-button-cancel");a.watchPageCheckbox=d("#watchPage");a.watchPageToolbarGroup=d(".toolbar-group-watch-page");a.buttons=[a.saveButton,a.overwriteButton,a.editButton,
a.previewButton,a.cancelButton];a.setButtonsState=h;a.setButtonState=m;a.isButtonEnabled=n;a.registerFormButton=function(b,c){a[b]=c;a.buttons.push(c)};a.postingDatePicker=null;a.isFormEnabled=function(){for(var b=0;b<a.buttons.length;b++)if(n(a.buttons[b]))return true;return false};a.toggleSavebarBusy=function(b){if(b){if(!a.isFormEnabled())return false;a.spinner.addClass("aui-icon-wait");h(false)}else{a.spinner.removeClass("aui-icon-wait");h(true)}return true};a.init=function(){c.Editor.addSaveHandler(function(b){if(a.isButtonEnabled(a.saveButton))a.toggleSavebarBusy(true);
else{b.stopImmediatePropagation();b.preventDefault()}});b.trigger("rte.init.ui");c.Editor.isNewPage()&&d("#content-title").focus().select();c.Editor.addCancelHandler(function(){c.Editor.getNumConcurrentEditors()>1&&b.Confluence.Analytics.publish("rte.notification.concurrent-editing.cancel",{numEditors:c.Editor.getNumConcurrentEditors(),pageId:b.params.pageId,draftType:b.params.draftType})});b.Meta.get("content-type")==="comment"&&c.Editor.addSaveHandler(function(){if(b.Rte.Content.isEmpty()){b.Confluence.EditorNotification.notify("warning",
"Comment text is empty. Cannot create empty comments.");a.toggleSavebarBusy(false);return false}});(b.Meta.get("content-type")==="comment"||b.Meta.get("content-type")==="template")&&c.Editor.addCancelHandler(function(d){if(a.isFormEnabled()&&c.Editor.hasContentChanged()&&!c.Editor.isEmpty()){var l=b.Meta.get("content-type")==="comment"?"Your comment will be lost.":"Your unsaved template changes will be lost.";if(!j.confirm(l)){d.stopImmediatePropagation();return false}}});c.Editor.addSaveHandler(function(){c.Editor.getNumConcurrentEditors()>
1&&b.Confluence.Analytics.publish("rte.notification.concurrent-editing.save",{numEditors:c.Editor.getNumConcurrentEditors(),pageId:b.params.pageId,draftType:b.params.draftType})});c.Editor.addSubmitHandler(function(a){return c.Editor.contentFormSubmit(a)});this.currentEditMode=this.MODE_RICHTEXT;a.editButton.click(function(d){var l=require("tinymce");if(a.isFormEnabled()){c.Editor.changeMode(c.Editor.MODE_RICHTEXT);setTimeout(function(){b.Rte.getEditor().focus();l.isGecko&&c.Editor.bookmark&&b.Rte.getEditor().selection.moveToBookmark(c.Editor.bookmark)},
0);a.cancelButton.enable()}d.preventDefault()});a.previewButton.click(function(b){var d=require("tinymce");if(a.isFormEnabled()&&c.Editor.currentEditMode!==c.Editor.MODE_PREVIEW){h(false);a.spinner.addClass("aui-icon-wait");if(d.isGecko&&!c.Editor.bookmark)c.Editor.bookmark=d.activeEditor.selection.getBookmark();c.Editor.changeMode(c.Editor.MODE_PREVIEW,{errorCallback:function(){h(true);a.spinner.removeClass("aui-icon-wait")}});a.cancelButton.disable()}b.preventDefault()});d("#editor-html-source").change(c.Editor.setSourceAreaHeight).keyup(c.Editor.setSourceAreaHeight);
d("#rte-button-labels").bind("updateLabel",function(){var a=+b.Meta.get("num-labels")||0,c="Labels";a===1?c=b.format("{0} Label",a):a>1&&(c=b.format("{0} Labels",a));d("#rte-button-labels").attr("data-tooltip",c)});var f=d("#PostingDate");if(f.length){f.attr("max",p().format("YYYY-MM-DD"));a.postingDatePicker=f.datePicker({overrideBrowserDefault:true});a.postingDatePicker.hide()}d("#wysiwygTextarea_parent .mceProgress, #wysiwygTextarea_parent .mceBlocker").on("click",
function(){b.Rte.getEditor().focus()});d(j).bind("render-content-loaded",function(b,e){var f=d("#previewArea iframe");if(f.contents().find("body")[0]==e){c.Editor.previewFrameOnload(e,f);a.setButtonsState(true);f.focus();j.focus();d(g).trigger("iframeAppended",f)}});if(b.Meta.get("heartbeat")){c.Editor.heartbeat();c.Editor.heartbeatType.normal()}b.bind("watchpage.pageoperation",function(){a.toggleWatchPage(false)});b.bind("unwatchpage.pageoperation",function(){a.toggleWatchPage(true)});if(k()&&b.Meta.get("form-name")===
"inlinecommentform")g.title="Edit"+g.title;var e=g.title;if(k()&&d.trim(d("input#content-title").val()))g.title=o()+d("input#content-title").val()+" - "+b.Meta.get("space-name")+" - "+b.Meta.get("site-title");d("input#content-title").on("change input",function(){if(b.Meta.get("content-type")!=="template"){var a=o();g.title=d.trim(this.value)?a+this.value+" - "+b.Meta.get("space-name")+" - "+b.Meta.get("site-title"):e}});b.trigger("init.rte-control")};a.toggleWatchPage=function(c){if(c&&
b.Meta.get("content-type")==="comment"){a.watchPageToolbarGroup.show();if(a.watchPageCheckbox.length)a.watchPageCheckbox[0].checked=false}else a.watchPageToolbarGroup.hide()};return a}});require("confluence/module-exporter").safeRequire("confluence-editor/editor/page-editor-ui",function(d){var i=require("confluence/legacy");require("ajs").bind("init.rte",function(){var b=d();i.Editor.UI=b;b.init()})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-js', location = 'tinymce3/plugins/insertwiki/insert-wiki-markup.soy' */
// This file was automatically generated from insert-wiki-markup.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.InsertWiki.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.InsertWiki == 'undefined') { Confluence.Templates.InsertWiki = {}; }


Confluence.Templates.InsertWiki.originalDefaultTempWikiMarkupDialog = function(opt_data, opt_ignored) {
  return '<form action=\'#\' method=\'post\' id="insert-wiki-markup-form" class="aui"><textarea class=\'monospaceInput textarea originalDefault\' id=\'insert-wiki-textarea\' name=\'wikitext\'/></form>';
};
if (goog.DEBUG) {
  Confluence.Templates.InsertWiki.originalDefaultTempWikiMarkupDialog.soyTemplateName = 'Confluence.Templates.InsertWiki.originalDefaultTempWikiMarkupDialog';
}


Confluence.Templates.InsertWiki.previewWikiIframeContent = function(opt_data, opt_ignored) {
  return '<!DOCTYPE html><html class="insert-wiki-markup-dialog"><head></head><body class="wiki-content previewWiki"></body></html>';
};
if (goog.DEBUG) {
  Confluence.Templates.InsertWiki.previewWikiIframeContent.soyTemplateName = 'Confluence.Templates.InsertWiki.previewWikiIframeContent';
}


Confluence.Templates.InsertWiki.wikiMarkupDialog = function(opt_data, opt_ignored) {
  return '<p id="insert-wiki-info-title">' + soy.$$escapeHtml("Enter wiki markup or markdown below. Confluence will convert your content to editor format and insert it into your page.") + '</p><form action=\'#\' method=\'post\' id="insert-wiki-markup-form" class="aui"><h3 class="wiki-title"><span id="insert-wiki-insert-title">' + soy.$$escapeHtml("Insert") + '</span><span id="insert-wiki-preview-title">' + soy.$$escapeHtml("Preview") + '</span></h3><textarea class=\'monospaceInput textarea\' id=\'insert-wiki-textarea\' name=\'wikitext\'/><!-- --><div class=\'example-container\' id=\'insert-wiki-textarea-preview\'></div></form>';
};
if (goog.DEBUG) {
  Confluence.Templates.InsertWiki.wikiMarkupDialog.soyTemplateName = 'Confluence.Templates.InsertWiki.wikiMarkupDialog';
}


Confluence.Templates.InsertWiki.wikiErrorSubDialog = function(opt_data, opt_ignored) {
  return '<p class=\'warning\'>' + soy.$$escapeHtml(opt_data.warningMessage) + '</p><p class=\'exception-report\'><span class=\'exceptionMessage\'>' + soy.$$escapeHtml(opt_data.exceptionMessage) + '</span></p>';
};
if (goog.DEBUG) {
  Confluence.Templates.InsertWiki.wikiErrorSubDialog.soyTemplateName = 'Confluence.Templates.InsertWiki.wikiErrorSubDialog';
}


Confluence.Templates.InsertWiki.wikiParserSelector = function(opt_data, opt_ignored) {
  var output = '<span class="wiki-parser-selector"><form action="#" method="post" id="d" class="aui"><select class="select medium-field" id="wiki-parser-selection-tool" name="wiki-parser-selection-tool" title="wiki parser selector"><option value="' + soy.$$escapeHtml(opt_data.DEFAULT.val) + '">' + soy.$$escapeHtml(opt_data.DEFAULT.label) + '</option>';
  var wikiLangList26 = soy.$$getMapKeys(opt_data.WIKI);
  var wikiLangListLen26 = wikiLangList26.length;
  for (var wikiLangIndex26 = 0; wikiLangIndex26 < wikiLangListLen26; wikiLangIndex26++) {
    var wikiLangData26 = wikiLangList26[wikiLangIndex26];
    output += (opt_data.WIKI[wikiLangData26].val != opt_data.DEFAULT.val) ? '<option value="' + soy.$$escapeHtml(opt_data.WIKI[wikiLangData26].val) + '">' + soy.$$escapeHtml(opt_data.WIKI[wikiLangData26].label) + '</option>' : '';
  }
  output += '</select></form></span>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.InsertWiki.wikiParserSelector.soyTemplateName = 'Confluence.Templates.InsertWiki.wikiParserSelector';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-js', location = 'editor/page-editor.soy' */
// This file was automatically generated from page-editor.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Editor.Page.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Editor == 'undefined') { Confluence.Templates.Editor = {}; }
if (typeof Confluence.Templates.Editor.Page == 'undefined') { Confluence.Templates.Editor.Page = {}; }


Confluence.Templates.Editor.Page.saveButton = function(opt_data, opt_ignored) {
  return '<button id="rte-button-publish" class="aui-button aui-button-primary" type="submit" name="confirm" value="Save"' + ((opt_data.contentType == 'blogpost') ? 'title="' + soy.$$escapeHtml("Publish your blog post") + '"' : (opt_data.contentType == 'page') ? 'title="' + soy.$$escapeHtml("Save your page") + '"' : 'title="' + soy.$$escapeHtml("Save") + '"') + 'tabindex="101">' + ((opt_data.contentType == 'blogpost') ? '<span class="trigger-text">' + soy.$$escapeHtml("Publish") + '</span>' : '<span class="trigger-text">' + soy.$$escapeHtml("Save") + '</span>') + '</button>';
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.Page.saveButton.soyTemplateName = 'Confluence.Templates.Editor.Page.saveButton';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-js', location = 'insert-image-dialog/insert-image-dialog.js' */
define("confluence-editor/insert-image-dialog/insert-image-dialog",["jquery","ajs","underscore","confluence/legacy"],function(c,f,e,h){var g={beforeShowListeners:[],panelComponent:[],sizeToFit:function(){this.each(function(){var a=this,b=c(this).parent(),d=b.height();b.children().each(function(){this!==a&&c(this).is(":visible")&&(d-=c(this).outerHeight())});b=c(this).outerHeight()-c(this).height();c(this).css("height",Math.max(0,d-b)+"px")});return this},defaultInsertImageDialog:function(){f.Rte.BookmarkManager.storeBookmark();
g.insertImageDialog(function(a){var b=require("tinymce");f.Rte.BookmarkManager.restoreBookmark();var d={};if(a.url)d={url:a.url,filename:a.url,contentId:a.contentId},b.confluence.ImageUtils.insertFromProperties(d);else{var i=!0,h=1<a.selectItems.length;e.each(a.selectItems,function(a){a.isImage()?(d={filename:a.getFileName(),contentId:a.get("ownerId")},b.confluence.ImageUtils.insertFromProperties(d,h)):(i=!1,f.MacroBrowser.getMacroMetadata("view-file")?g._insertFilePlaceholderToEditor(a):g._insertLinkToEditor(a))});
require(["conf/confluence-drag-and-drop/analytics/files-upload-analytics"],function(b){b.triggerEvent("confluence.insert-files-dialog.insert",a.selectItems,i)})}c("#comments-section").length&&f.Rte.fixEditorFocus()},function(){f.Rte.BookmarkManager.restoreBookmark()})},findPanelComponentById:function(a){for(var b=h.Editor.ImageDialog.panelComponent,d=0,c=b.length;d<c;d++)if(b[d].id==a)return b[d]},insertImageDialog:function(a,b){var d=new h.Editor.FileDialog.FileDialogView({submitCallback:a,cancelCallback:b,
beforeShowListeners:g.beforeShowListeners,panelComponents:g.panelComponent});d.render();return d},_insertLinkToEditor:function(a){var b=h.Link.fromREST(a.attributes);b.attrs["data-linked-resource-container-id"]=a.get("ownerId");b.attrs.href=a.get("downloadUrl");b.insert()},_insertFilePlaceholderToEditor:function(a){var b={name:a.get("fileName"),page:a.get("parentTitle"),space:a.get("space")?a.get("space").key:"",date:a.get("datePath"),ownerId:a.get("ownerId")};require(["confluence-editor/utils/attachments-insert-utils"],
function(a){a.insertFilePlaceholder(b)})}};return g});
require("confluence/module-exporter").safeRequire("confluence-editor/insert-image-dialog/insert-image-dialog",function(c){var f=require("jquery"),e=require("confluence/legacy");f.fn.sizeToFit=c.sizeToFit;e.Editor.ImageDialog=c;e.Editor.defaultInsertImageDialog=c.defaultInsertImageDialog;e.Editor.ImageDialog.findPanelComponentById=c.findPanelComponentById;e.Editor.insertImageDialog=c.insertImageDialog;e.Editor.ImageDialog._insertLinkToEditor=c._insertLinkToEditor;e.Editor.ImageDialog._insertFilePlaceholderToEditor=
c._insertFilePlaceholderToEditor});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-js', location = 'panel-components/panel-components-init.js' */
define("confluence-editor/panel-components/panel-components-init",["confluence/legacy","ajs"],function(a,d){return function(){if(a.Editor&&a.Editor.ImageDialog&&a.Editor.ImageDialog.panelComponent){var b=a.Editor.FileDialog.eventListener,e=a.Editor.FileDialog.ExternalPanelView,f=a.Editor.FileDialog.SearchPanelView,g=a.Editor.FileDialog.AttachmentsPanelView,c=a.Editor.ImageDialog.panelComponent;"template"!==d.Meta.get("content-type")&&(b=new g({eventListener:b}),c.push(b));c.push(new e);c.push(new f)}}});
require("confluence/module-exporter").safeRequire("confluence-editor/panel-components/panel-components-init",function(a){require("ajs").toInit(a)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-js', location = 'drafts/page-editor-drafts.js' */
define("confluence-editor/page-editor-drafts",["jquery","ajs","confluence/legacy"],function(d,a,b){var k=!1,j=!1,l=""!==a.Meta.get("remote-user"),m=a.DarkFeatures.isEnabled("editor.ajax.save")&&!a.DarkFeatures.isEnabled("editor.ajax.save.disable"),h=function(a,c,b){d("<input>").attr({type:"hidden",name:a,value:c}).appendTo(b)};return{isDraftSaved:function(){return k},isDraftManuallySaved:function(){return j},isDraftBlank:function(){return a.Rte.Content.isEmpty()&&!d.trim(b.Editor.getCurrentTitle())},
isNewContent:function(){return a.Rte.getEditor()&&0==a.Meta.get("page-id")&&0<a.Meta.get("draft-id")},unloadMessage:function(){var d=function(){b.Editor.Drafts.isDraftBlank()?b.Editor.Drafts.discardDraft(a.Meta.get("draft-id")):b.Editor.Drafts.save({skipErrorHandler:!0})};if("undefined"!==typeof seleniumAlert)d();else if(b.Editor.hasContentChanged()||b.Editor.Drafts.isDraftSaved()&&!b.Editor.Drafts.isDraftManuallySaved())return d(),"A draft will be saved. You can resume editing this draft the next time you open the editor or view all your drafts in your profile."},bindUnloadMessage:function(){d(window).bind("beforeunload.editor",
b.Editor.Drafts.unloadMessage)},unBindUnloadMessage:function(){d(window).unbind("beforeunload.editor")},useDraft:function(){var e=a.Meta.get("existing-draft-id");b.Editor.Drafts.unBindUnloadMessage();var c=b.Editor.getCurrentForm();h("useDraft","true",c);h("contentChanged",""+b.Editor.hasContentChanged(),c);h("pageId",a.params.pageId,c);d("#draftId",b.Editor.getCurrentForm()).val(e);c.spaceKey||h("spaceKey",a.Meta.get("space-key"),c);c.action=a.contextPath()+"/pages/"+(a.params.newPage?"create":"edit")+
a.params.draftType+".action";c.submit()},discardDraft:function(b){return a.safe.ajax({url:a.contextPath()+"/json/deletedraft.action",type:"GET",dataType:"json",data:{draftId:b},success:function(b){if(b.actionErrors){for(var e=["<ul>"],b=b.actionErrors,f=0;f<b.length;f++)a.log("error: "+b[f]),e.push("<li>"+b[f]+"</li>");e.push("</ul>");a.messages.error("#editor-messages",{title:"Error",body:"There were errors discarding your draft: "+e.join("\n")})}else d("#draft-messages").remove(),a.messages.success("#editor-messages",
{body:"Your draft has been discarded."})},error:function(b){a.messages.error({title:"Error",body:b.errors||"An unknown error has occurred. Please check your logs."})}})},save:function(e){e=e||{};if(b.Editor.isSubmitting||!b.Editor.hasContentChanged()&&!e.forceSave)a.debug("skipping draft save");else{a.debug("preparing to save editor draft");var c=d("#content-title"),h=d("#newSpaceKey"),f=d("#originalVersion"),n=b.Editor.inRichTextMode(),c={draftId:a.Meta.get("draft-id"),pageId:a.params.pageId,type:a.params.draftType,
title:c.hasClass("placeholded")?"":c.val(),spaceKey:h.length?h.val():encodeURIComponent(a.Meta.get("space-key")),content:a.Rte.getEditor().getContent()};f.length&&(c.pageVersion=parseInt(f.val(),10));d.ajax({type:"POST",url:a.params.contextPath+"/rest/tinymce/1/drafts",data:d.toJSON(c),contentType:"application/json",dataType:"text json",success:function(c){if(c!=null&&(!(l&&c.draftId===0)||!m)){b.Editor.contentHasChangedSinceLastSave=false;n&&a.Rte.Content.editorResetContentChanged();k=true;j=!!e.manualSave;
a.Meta.set("draft-id",c.draftId+"");d("#draftId",b.Editor.getCurrentForm()).val(c.draftId);d("#draft-error").remove();if(!a.Meta.get("synchrony-dark-enabled")){var h=d("#draft-status"),g;if(!(g=c.time)){var i=new Date;g=i.getHours();var i=i.getMinutes(),f=g>11?"PM":"AM";g=g%12;g=(g==0?"12":g)+":"+(i<10?"0":"")+i+" "+f}i=j?a.format("Draft saved at {0}",g):a.format("Draft autosaved at {0}",g);f=a.params.newPage?i:"<a id='view-diff-link-heartbeat' class='view-diff-link' href='#'>"+i+"</a>";
h.attr("data-tooltip",i);h.html(f)}+a.Meta.get("content-id")||a.Meta.set("content-id",c.pageId+"");if(d.isFunction(e.onSuccessHandler))e.onSuccessHandler(c);b.Editor.Drafts.lastSaveTime=g;a.trigger("rte-draft-saved",{draftId:c.draftId})}},error:function(c,f){if(!e.skipErrorHandler){b.Editor.addErrorMessage("draft-error",b.Editor.Drafts.lastSaveTime?a.format("Error saving draft. Last draft saved at {0}",b.Editor.Drafts.lastSaveTime):"Error saving draft. No draft has been saved.",true);if(d.isFunction(e.onErrorHandler))e.onErrorHandler(f)}},
timeout:3E4})}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/page-editor-drafts","Confluence.Editor.Drafts");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-js', location = 'editor/page-editor-permissions.js' */
define("confluence-editor/editor/page-editor-permissions",["ajs","jquery"],function(b,d){var c={updateEditPageRestrictions:function(c,a,e,g){var f=d("#rte-button-restrictions"),i=f.find(".icon"),h="";c||a?(i.removeClass("icon-restricted icon-restricted-inherited icon-unrestricted").addClass(c?"icon-restricted":"icon-restricted-inherited"),h="Restrictions apply"):(i.removeClass("icon-restricted icon-restricted-inherited icon-unrestricted").addClass("icon-unrestricted"),h=e?"Restrictions apply":
"Unrestricted");f.attr("data-tooltip",h);f.data("explicit-restrictions",c);f.data("inherited-restrictions",a);f.data("restrictionsHash",g)},handleHeartbeat:function(j,a){if("undefined"!==typeof a.restrictionsHash){var e=d("#rte-button-restrictions");if(e.data("restrictionsHash")!==a.restrictionsHash)if(d("#update-page-restrictions-dialog").is(":visible")&&b.PagePermissions.updateRestrictionsDialog)b.PagePermissions.updateRestrictionsDialog(),e.data("restrictionsHash",a.restrictionsHash);
else{var g=""!==a.restrictionsHash,f=a.hasViewRestrictions,e=!!e.data("inherited-restrictions");c.updateEditPageRestrictions(f,e,g,a.restrictionsHash)}}},init:function(){b.bind("editor-heartbeat",c.handleHeartbeat);b.bind("edit-page-restrictions-updated",function(b,a){c.updateEditPageRestrictions(a.hasExplicitRestrictions,a.hasInheritedRestrictions,a.hasAnyExplicitRestrictions,a.restrictionsHash)})}};return c});
require("confluence/module-exporter").safeRequire("confluence-editor/editor/page-editor-permissions",function(b){var d=require("ajs"),c=require("jquery");d.PagePermissions=d.PagePermissions||{};c.extend(d.PagePermissions,{updateEditPageRestrictions:b.updateEditPageRestrictions});d.toInit(b.init)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
