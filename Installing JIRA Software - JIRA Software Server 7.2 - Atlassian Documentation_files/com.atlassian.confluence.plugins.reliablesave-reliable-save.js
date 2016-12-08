;try {
/* module-key = 'com.atlassian.confluence.plugins.reliablesave:reliable-save', location = 'templates/reliable-save.soy' */
// This file was automatically generated from reliable-save.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Editor.Reliable.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Editor == 'undefined') { Confluence.Templates.Editor = {}; }
if (typeof Confluence.Templates.Editor.Reliable == 'undefined') { Confluence.Templates.Editor.Reliable = {}; }


Confluence.Templates.Editor.Reliable.draftMessage = function(opt_data, opt_ignored) {
  var output = '<div id="draft-messages">';
  if (opt_data.isNewPage) {
    if (opt_data.existingDraft.title) {
      var escapedTitle__soy8 = '' + soy.$$escapeHtml(opt_data.existingDraft.title);
      output += soy.$$filterNoAutoescape(AJS.format("A new page you were adding on {0} called \x26#8216;{1}\x26#8217; was saved as a draft.",opt_data.existingDraft.date,escapedTitle__soy8));
    } else {
      output += soy.$$filterNoAutoescape(AJS.format("A new page you were adding on {0} was saved as a draft.",opt_data.existingDraft.date));
    }
    output += ' ' + soy.$$filterNoAutoescape(AJS.format("Do you want to {0}resume editing{1} or {2}discard{3} it?",'<a href="#" class="use-draft"> ','</a>','<a href="#" class="discard-draft"> ','</a>'));
  } else {
    output += soy.$$filterNoAutoescape(AJS.format("A version of this page you were editing at {0} was saved as a draft.",opt_data.existingDraft.date)) + ((opt_data.mergeRequired) ? ' ' + soy.$$escapeHtml("The page has since been updated. Your changes will be merged with the latest version.") : '') + ((opt_data.conflictFound) ? ' ' + soy.$$filterNoAutoescape(AJS.format("The page has since been updated. The changes made conflict with your changes and cannot be merged. Do you want to {0}view the conflict{1} or {2}discard{3} your changes?",'<a href="?pageId=' + opt_data.pageId + '&viewConflict=true&spaceKey=' + opt_data.spaceKey + '" >','</a>','<a href="#" class="discard-draft">','</a>','<a href="' + "" + '/users/viewmydrafts.action">','</a>')) : (opt_data.mergeRequired) ? ' ' + soy.$$filterNoAutoescape(AJS.format("Do you want to {0}view{1}, {2}merge and resume editing{3} or {4}discard{5} it?",'<a id="view-diff-link-notification" href="#" class="view-diff-link">','</a>','<a href="#" class="use-draft"> ','</a>','<a href="#" class="discard-draft">','</a>')) : ' ' + soy.$$filterNoAutoescape(AJS.format("Do you want to {0}view the change{1}, {2}resume editing{3} or {4}discard{5} it?",'<a id="view-diff-link-notification" href="#" class="view-diff-link">','</a>','<a href="#" class="use-draft"> ','</a>','<a href="#" class="discard-draft">','</a>')));
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.Reliable.draftMessage.soyTemplateName = 'Confluence.Templates.Editor.Reliable.draftMessage';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.reliablesave:reliable-save', location = 'js/reliable-save.js' */
define("confluence-editor-reliable-save/reliable-save","ajs confluence/legacy underscore jquery window document".split(" "),function(a,h,b,e,r,s){function m(){return a.Meta.getBoolean("new-page")}function n(){h.Editor.UI.toggleSavebarBusy(false)}function p(){var g="There was an error processing the request.";d.Message.closeMessages(["generic-error"]);d.Message.handleMessage("generic-error",{type:"error",message:g})}function o(g){var i="Looks like your session expired. Log in again to keep working.\n \u003cdiv\u003e\u003ca href=\"dashboard.action\" target=\"_blank\"\u003eLogin\u003c/a\u003e\u003c/div\u003e";d.Message.closeMessages(["noauthorized"]);
d.Message.handleMessage("noauthorized",{title:"Can\'t connect to the server",type:"error",message:i});g&&a.trigger("rte.safe-save.invalid-xsrf-token")}function q(){var g="Unable to communicate with server. Saving is not possible at the moment.";d.Message.closeMessages(["sever-offline"]);d.Message.handleMessage("sever-offline",{type:"error",message:g})}var k=[],d={Message:{handleMessage:function(g,i){var l=false;b.each(k,function(a){b.contains([g],a.groupMessage)&&(l=true)});l||i&&require(["aui/flag"],
function(c){c=c({title:i.title?i.title:"",type:i.type,close:i.close?i.close:"manual",persistent:false,body:"<span class='"+g+"'>"+i.message+"</span>"});k.push({groupMessage:g,handler:c});c=e("#draft-messages");if(c.length>0){c.is(":visible")&&a.Confluence.Analytics.publish("rte.notification.draft");c.find("a.use-draft").click(function(c){c.stopPropagation();c.preventDefault();h.Editor.Drafts.useDraft();a.Confluence.Analytics.publish("rte.notification.draft.resume")});c.find("a.discard-draft").click(function(c){c.stopPropagation();
c.preventDefault();d.Draft.discardDraft(a.params.pageId,a.Meta.get("existing-draft-id")).done(d.Draft.onSuccessDiscardDraft).fail(d.Draft.onErrorDiscardDraft)})}})},closeMessages:function(a){b.each(k,function(d){b.contains(a,d.groupMessage)&&d.handler.close()})},isDisplayed:function(a){var d=false;b.each(k,function(e){b.contains(a,e.groupMessage)&&(d=true)});return d}},Draft:{discardDraft:function(d,i){var b={draftId:i,pageId:d,type:a.Meta.get("draft-type"),spaceKey:a.Meta.get("space-key")};return e.ajax({type:"DELETE",
url:a.params.contextPath+"/rest/tinymce/1/drafts/discard",data:e.toJSON(b),contentType:"application/json",dataType:"json"})},onSuccessDiscardDraft:function(){m()||a.Meta.set("draft-id","0");d.Message.closeMessages(["draft-message"]);d.Message.handleMessage("discarding-successfull",{type:"info",message:"Your draft has been discarded.",close:"auto"});a.Confluence.Analytics.publish("rte.notification.draft.discard")},onErrorDiscardDraft:function(e){switch(e.status){case 403:o(true);
break;case 404:d.Message.handleMessage("draft-deleted",{type:"info",message:"This draft has been discarded."});break;case 422:d.Message.handleMessage("discarding-invalid",{type:"error",message:"This draft is invalid. It can be deleted by someone or looks like your session expired."});break;default:d.Message.handleMessage("discarding-error",{type:"error",message:"An unknown error has occurred. Please check your logs."})}}}};d._internal=h.SafeSafe&&h.SafeSave._internal?h.SafeSave._internal:{};d._internal.onSuccessfulResponse=function(d){e("#rte-button-overwrite").unbind("click.overwrite");
var b={dataType:"json",contentId:h.Editor.Drafts.isNewContent()?a.params.draftId:a.params.pageId,draftType:a.params.draftType};a.safe.post(a.params.contextPath+"/json/stopheartbeatactivity.action",b,function(){a.log("Stop heartbeat activity on",b.draftType,"id",b.contentId)},"json").fail(function(d,c,b){a.logError("Server error on stop heartbeat activity request:");a.log(b)}).always(function(){var b=d._links.webui;b?r.location=b.indexOf("/")!==0?b:a.params.contextPath+b:n()})};d.initialize=function(){function g(c){c&&
c.preventDefault();var b=e("#content-title");if(b.hasClass("placeholded")||b.val()===""){a.trigger("rte.safe-save.error");d.Message.closeMessages(["duplicate-title"]);d.Message.handleMessage("empty-title",{title:"Your page needs a title",type:"error",message:"Before you hit save, you need to enter a page title."});n()}else{h.Editor.Drafts.unBindUnloadMessage();var f={},c=a.contextPath()+"/rest/api/content",j=h.Editor.Drafts.isNewContent()?a.params.draftId:a.params.pageId;f.title=b.val();f.body=
{editor:{value:a.Rte.getEditor().getContent(),representation:"editor"}};f.status="current";f.space={key:a.Meta.get("space-key")};b=(b=h.Editor.UI.postingDatePicker)&&b.getDate();if(l.type==="blogpost"&&b&&b.toISOString)f.history={createdDate:b.toISOString()};if(m()&&!a.Meta.get("shared-drafts")){b="POST";j=a.Meta.get("draft-id");a.Meta.get("is-blueprint-page")&&(c=a.contextPath()+"/rest/api/content/blueprint/instance/"+j);c=c+"?status=draft";f.id=j;f.type=a.Meta.get("content-type");f.body.editor.content=
{id:a.Meta.get("draft-id")}}else{b="PUT";c=c+"/"+j;if(m()&&a.Meta.get("shared-drafts")){f.id=a.Meta.get("draft-id");f.body.editor.content={id:a.Meta.get("draft-id")}}else{f.id=a.params.pageId;f.body.editor.content={id:a.params.pageId}}c=a.Meta.get("draft-id")==="0"?c+"?status=current":c+"?status=draft";f.type=a.params.contentType;f.version={number:parseInt(e('meta[name="page-version"]').attr("content"))+1,message:e("#versionComment").val(),minorEdit:e("#notifyWatchers").is(":checked")?false:true,
syncRev:e("#syncRev").val()}}j={};j.id=a.Meta.get("parent-page-id")||"0";j.type=a.Meta.get("content-type");var g=a.Meta.get("parent-page-id");if(!g||f.space.key!==a.Meta.get("space-key"))j.id="0";if(g&&j.id!==g)j.id=e("#parentPageString").val()===a.Meta.get("from-page-title")?j.id:g;if(j.id!=="0")f.ancestors=[j];e.ajax({type:b,url:c,contentType:"application/json; charset=utf-8",dataType:"json",data:JSON.stringify(f),success:function(c){a.trigger("rte.safe-save.success",c);d._internal.onSuccessfulResponse(c)},
error:function(c){n();var b=c.responseText?JSON.parse(c.responseText).message:"";switch(c.status){case 400:if(b.indexOf(i.duplicatedTitleCreatePage)>=0||b.indexOf(i.duplicatedTitleEditPage)>=0){d.Message.closeMessages(["empty-title"]);d.Message.closeMessages(["duplicate-title"]);d.Message.handleMessage("duplicate-title",{type:"error",message:a.format("A page with the title \'\'{0}\'\' already exists in this space. Enter a different title for your page.",e("#content-title").val())})}else p();break;case 403:o(true);break;case 404:d.Message.closeMessages(["page-not-accessible"]);
d.Message.closeMessages(["noauthorized"]);d.Message.handleMessage("page-not-accessible",{title:"This content cannot be accessed.",type:"error",message:a.format("Your session may have expired, you can attempt to \u003ca href=\"dashboard.action\" target=\"_blank\"\u003elog in\u003c/a\u003e.",f.space.key)});break;case 409:e("#editpageform").submit();return;case 410:d.Message.closeMessages(["page-deleted"]);d.Message.handleMessage("page-deleted",{title:"This content has been deleted",type:"error",message:a.format("Copy your content, then add it to a new page or \u003cdiv\u003e\u003ca href=\"viewtrash.action?key={0}\" target=\"_blank\"\u003erestore this page from the trash\u003c/a\u003e and try again.\u003c/div\u003e",
f.space.key)});break;case 413:d.Message.closeMessages(["page-too-big"]);d.Message.handleMessage("page-too-big",{type:"error",message:"This page is too big to save. You could split it into multiple pages, then use the \u003ca href=\"https://confluence.atlassian.com/conf51/include-page-macro-336169384.html\" target=\"_blank\"\u003einclude page macro\u003c/a\u003e to display the content."});break;case 0:case 500:case 503:q();break;default:p();a.logError("Generic error: "+JSON.stringify(c))}a.trigger("rte.safe-save.error")}})}}if(!(e("#editpageform").length===0&&e("#createpageform").length===0)){var i={duplicatedTitleCreatePage:"A page with this title already exists",duplicatedTitleEditPage:"A page already exists with the title"},
l={pageId:a.Meta.getNumber("page-id"),type:a.Meta.get("draft-type"),spaceKey:a.Meta.get("space-key")};if(a.Meta.get("show-draft-message")===true){if(e("#conflict-diffs").length>0)return;e.ajax({type:"GET",url:a.params.contextPath+"/rest/tinymce/1/drafts/message",data:l,contentType:"application/json",dataType:"text json",success:function(c){if(c&&c.draftData){c=h.Templates.Editor.Reliable.draftMessage({existingDraft:c.draftData,conflictFound:c.conflictFound,mergeRequired:c.mergeRequired,isNewPage:c.newPage,
pageId:a.Meta.get("page-id"),spaceKey:a.Meta.get("space-key")});d.Message.handleMessage("draft-message",{type:"info",message:c})}}})}s.addEventListener("aui-flag-close",function(a){a&&a.target&&(k=b.filter(k,function(b){return!e(a.target).find("span").hasClass(b.groupMessage)}))});h.Editor.overrideSave(g);e("#rte-button-overwrite").bind("click.overwrite",g);a.bind("rte.heartbeat-error",function(c,b){switch(b.status){case 401:case 403:d.Message.isDisplayed(["page-not-accessible"])||o(false);break;
case 0:case 404:case 500:case 503:q();break;default:a.logError("Heartbeat action error: "+JSON.stringify(b))}});a.bind("rte.heartbeat",function(){var c=false;b.each(k,function(a){if(b.contains(["noauthorized","sever-offline","page-not-accessible"],a.groupMessage)){c=true;a.handler.close()}});c&&d.Message.handleMessage("reconnect",{type:"info",title:"Successfully reconnected",message:"We\'re back in business. You\'re free to save your page again.",close:"auto"})})}};return d});
require("confluence/module-exporter").safeRequire("confluence-editor-reliable-save/reliable-save",function(a){var h=require("ajs");if(h.DarkFeatures.isEnabled("editor.ajax.save")&&!(h.DarkFeatures.isEnabled("editor.ajax.save.disable")||""===h.Meta.get("remote-user"))){var b=require("confluence/legacy");h.bind("rte.init.ui",function(){a.initialize();b.Editor=b.Editor||{};b.Editor.SafeSave=b.Editor.SafeSave||{};b.Editor.SafeSave.Draft=a.Draft;b.Editor.SafeSave.Message=a.Message;b.Editor.SafeSave._internal=
a._internal||{}})}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.reliablesave:reliable-save', location = 'js/ajax-login.js' */
define("confluence-editor-reliable-save/ajax-login",["confluence/dark-features","confluence/meta","ajs","jquery","document"],function(d,c,f,g,u){return function(){function v(c,j){var a=q.call(g,c,j),d=c&&c.url;if(r&&(!j||j&&!j.preventAjaxLogin)&&d&&(l&&0===d.indexOf(l)||k&&0===d.indexOf(k))){var t=function(a,d,w,l){function k(){b.readyState=a.readyState;b.status=a.status;b.statusText=a.statusText;a.responseXML?b.responseXML=a.responseXML:b.responseText=a.responseText;d.apply(w,l)}var n=a.getResponseHeader("X-AUSERNAME");
r===n?k():(m.push({deferred:e,url:c,settings:j,defaultCallback:k}),o||(p=!1,h||(h=new f.Dialog(840,700),h.addPanel("ajax-login","ajax-login-content","ajax-login-panel",1),n=g(".ajax-login-panel"),i=g("<iframe></iframe>"),i.bind("load",function(){var a=i[0].contentDocument.location.pathname;a&&0<=a.indexOf("/"+s)&&(o=!1,p=!0,h.hide(),i.attr("src","about:blank"))}),n.append(i),g(u).bind("hideLayer",function(a,b,d){if("popup"===b&&d===h.popup){f.debug("hiding login dialog");if(p){a=m;b=0;for(d=a.length;b<
d;b++){var c=a[b];f.debug("Rerunning ajax query to: "+c.url,c);q.call(g,c.url,c.settings).done(function(){f.debug("Rerunning done");c.deferred.resolve(arguments)}).fail(function(){f.debug("Rerunning failed");c.deferred.reject(arguments)})}}else{a=m;b=0;for(d=a.length;b<d;b++){var e=a[b];f.debug("Executing with original response for: "+e.url,e);e.defaultCallback&&e.defaultCallback()}}m=[]}})),i.attr("src",x),h.show(),o=!0))};f.debug("Using authenticatingPromise");var b={abort:function(){a.abort.apply(a,
arguments)},getAllResponseHeaders:function(){a.getAllResponseHeaders.apply(a,arguments)},getResponseHeader:function(){a.getResponseHeader.apply(a,arguments)},overrideMimeType:function(){a.overrideMimeType.apply(a,arguments)},readyState:a.readyState,setRequestHeader:function(b,c){a.setRequestHeader.apply(a,arguments)},state:function(){a.state.apply(a,arguments)},status:a.status,statusCode:function(){a.statusCode.apply(a,arguments)},statusText:a.statusText},e=g.Deferred();e.promise(b);b.success=b.done;
b.error=b.fail;a.done(function(a,b,c){t(c,e.resolve,e,arguments)});a.fail(function(a,b,c){t(a,e.reject,e,arguments)});return b}return a}if(d.isEnabled("ajax.login")){f.debug("AJAX login support enabled");var o=!1,h,i,p,m=[],q=g.ajax,r=c.get("remote-user"),l=c.get("base-url"),k=c.get("context-path"),s="ajaxlogincomplete.action",x=c.get("context-path")+"/login.action?os_destination=%2F"+s;g.ajax=v}}});require("confluence/module-exporter").safeRequire("confluence-editor-reliable-save/ajax-login",function(d){require("ajs").toInit(d)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
