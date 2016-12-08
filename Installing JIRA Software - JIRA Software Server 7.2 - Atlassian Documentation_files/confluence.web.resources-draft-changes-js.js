;try {
/* module-key = 'confluence.web.resources:draft-changes-js', location = '/includes/js/draft-changes.js' */
define("confluence/draft-changes",["jquery","ajs","window","confluence/legacy"],function(f,a,l,c){return{init:function(){var e,k=function(e){var c="Are you sure you want to discard this draft?";return confirm(c)?(a.safe.ajax({url:a.contextPath()+"/json/deletedraft.action",type:"GET",dataType:"json",data:{draftId:e},success:function(d){if(d.actionErrors){for(var c=["<ul>"],d=d.actionErrors,b=0;b<d.length;b++)a.log("error: "+d[b]),c.push("<li>"+d[b]+"</li>");c.push("</ul>");a.messages.error("#errors",
{title:"Error",body:"There were errors discarding your draft."+" "+c.join("\n")})}else c=f("#draft-"+e),d=c.closest("table"),b=d.closest(".drafts-container"),c.remove(),0===d.find("tbody tr").length&&b.append('<span id="no-drafts-message">'+"No drafts found."+"</span>")},error:function(c){a.messages.error({title:"Error",body:c.errors||"An unknown error has occurred. Please check your logs."})}}),!0):!1};f("body").on("click",".view-diff-link",function(m){var j=
this.id,d=f(this);if(!e){var h="view-diff-link-notification"===j;e=new a.Dialog(860,530,"view-diff-draft-dialog");var b="Unpublished Changes for \'{0}\'";e.addHeader(b.replace(/\{0\}/,""));b=f(c.Templates.DraftChanges.dialogContent());e.addPanel("Diff",b);h&&(e.addButton("Edit",function(){e.hide();c.Editor&&c.Editor.Drafts?c.Editor.Drafts.useDraft():l.location=f(this).attr("data-href")},"resume-diff-link"),e.addButton("Discard",function(){if(a.DarkFeatures.isEnabled("editor.ajax.save")&&
!a.DarkFeatures.isEnabled("editor.ajax.save.disable")&&""!==a.Meta.get("remote-user"))c.Editor.SafeSave.Draft.discardDraft(a.params.pageId,a.Meta.get("existing-draft-id")).done(c.Editor.SafeSave.Draft.onSuccessDiscardDraft).fail(c.Editor.SafeSave.Draft.onErrorDiscardDraft),e.hide();else if(c.Editor&&c.Editor.Drafts)e.hide(),c.Editor.Drafts.discardDraft(a.Meta.get("existing-draft-id")),a.Confluence.Analytics.publish("rte.notification.draft.discard");else{var b=f(this).data("draftid");k(b)&&e.hide()}},
"discard-diff-link"));e.addCancel("Close",function(){e.hide();return false});b.removeClass("hidden")}e.addHeader("Loading");f("#diff-view").html("<tr><td id='draft-changes-waiting-icon'>Loading...</td></tr>");var i,b=d.attr("class"),g=/draftPageId:([^ ]*)/.exec(b),d=g?g[1]:a.Meta.get("page-id"),h=(g=/username:([^ ]*)/.exec(b))?g[1]:a.Meta.get("remote-user");i=(g=/draftId:([^ ]*)/.exec(b))?g[1]:null;a.safe.ajax({url:a.contextPath()+"/draftchanges/viewdraftchanges.action",
type:"GET",dataType:"json",data:{pageId:d,username:h},success:function(b){if(b.actionErrors){for(var d="",b=b.actionErrors,g=0;g<b.length;g++)a.log("error: "+b[g]),d=d+"<div>"+b[g]+"</div>";f("#diff-view").html(d)}else f("#diff-view").html(b.htmlDiff),d=a.format("Unpublished Changes for \'\'{0}\'\'",a.escapeHtml(b.title)),e.addHeader(d),e.popup.element.find(".dialog-title").prepend(c.Templates.DraftChanges.helpLink()),d=a.contextPath(),f(".resume-diff-link").attr("data-href",d+"/pages/resumedraft.action?draftId="+
i),f(".discard-diff-link").data("draftid",i),a.setVisible("#merge-warning",b.isMergeRequired)},error:function(a){a=a.errors||"An unknown error has occurred. Please check your logs";f("#diff-view").html(a)}});e.show();a.trigger("analytics",{name:"confluence.editor.view-diff-dialog.open",data:{elementTriggerId:j}});return a.stopEvent(m)});f("#draft-space-list").on("click",".discard-draft-link",function(c){c.preventDefault();a.Confluence.Analytics.publish("confluence.draft-list.discard");c=f(this).data("draftid");
k(c)}).on("click",".resume-draft-link",function(){a.Confluence.Analytics.publish("confluence.draft-list.resume")})}}});require("confluence/module-exporter").safeRequire("confluence/draft-changes",function(f){require("ajs").toInit(f.init)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:draft-changes-js', location = '/includes/soy/draft-changes-dialog.soy' */
// This file was automatically generated from draft-changes-dialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.DraftChanges.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.DraftChanges == 'undefined') { Confluence.Templates.DraftChanges = {}; }


Confluence.Templates.DraftChanges.dialogContent = function(opt_data, opt_ignored) {
  return '<div id="draft-changes-dialog" class="hidden"><div id="diff-view" class="wiki-content"></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.DraftChanges.dialogContent.soyTemplateName = 'Confluence.Templates.DraftChanges.dialogContent';
}


Confluence.Templates.DraftChanges.helpLink = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.Dialog.helpLink({href: "https://docs.atlassian.com/confluence/docs-59/Drafts#viewchange"});
};
if (goog.DEBUG) {
  Confluence.Templates.DraftChanges.helpLink.soyTemplateName = 'Confluence.Templates.DraftChanges.helpLink';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
