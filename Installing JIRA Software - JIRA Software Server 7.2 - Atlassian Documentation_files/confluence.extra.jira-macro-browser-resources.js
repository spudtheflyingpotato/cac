;try {
/* module-key = 'confluence.extra.jira:macro-browser-resources', location = 'templates/extra/jira/view-in-jira.js' */
AJS.bind("add-handler.property-panel",function(b,a){AJS.log("add-handler.property-panel: panel name = "+a.name);if(a.name!="macro"){return}a.registerButtonHandler("view-in-jira",function(d,j){if(AJS.Editor.JiraConnector.servers){var s=AJS.Editor.JiraConnector.servers;var l=AJS.$(j);var g=l.attr("data-macro-default-parameter");var k=l.attr("data-macro-parameters")||"";var t=Confluence.MacroParameterSerializer.deserialize(k);var n=/=|!=|~|>|<|!~| is | in /i;var h=function(u){var i=u.indexOf("|");if(i>=0){return u.substring(0,i)}return u};var f=g||t.jqlQuery||t.key||h(k);var c=t.server;var q=t.serverId;var p=f.match(n);var m=null;for(var o=0;o<s.length;o++){if((q&&s[o].id==q)){m=s[o];break}if((c&&s[o].name==c)||(!c&&s[o].selected)){m=s[o];break}}if(m!=null){var e=(typeof m.displayUrl!=="undefined")?m.displayUrl:m.url;if(e.charAt(e.length-1)=="/"){e=e.substr(0,e.length-1)}var r=tinymce.isIE?"_blank":"confluence-goto-jiralink-"+AJS.params.pageId;if(!p){window.open(e+"/browse/"+encodeURIComponent(f),r)}else{window.open(e+"/secure/IssueNavigator.jspa?reset=true&jqlQuery="+encodeURIComponent(f),r)}}}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.extra.jira:macro-browser-resources', location = 'templates/extra/jira/show-summary.js' */
AJS.bind("init.rte",function(){if(!AJS.Confluence&&!AJS.Confluence.PropertyPanel&&!AJS.Confluence.PropertyPanel.Macro){AJS.logError("JIRA Issues Macro : can't register property panel init handler since AJS.Confluence.PropertyPanel.Macro is undefined");return}var a="showSummary";var f="jira";var e="jiraissues";var d="show-summary";AJS.Confluence.PropertyPanel.Macro.registerInitHandler(c,f);AJS.Confluence.PropertyPanel.Macro.registerInitHandler(c,e);function c(g,m,j){var l=AJS.$.grep(m,function(i){return i.parameterName==d})[0];if(!l){AJS.logError("JIRA Issues Macro - Show-summary : The system cannot find SummaryButton, all buttons are: ");for(var k in m){AJS.logError(m[k].text)}return}if(b(g)){var h=AJS.SummaryHelper.getParam(g,a);if(h=="false"){l.text="Show summary"}else{l.text="Hide summary"}}else{l.className+=" hidden"}}function b(g){var i=AJS.$(g);var j=i.attr("src");if(!j){return true}var h=AJS.SummaryHelper.getParam(g,"count");if(j.indexOf("confluence.extra.jira/jira-table")==-1&&h!="true"){return true}return false}});AJS.bind("add-handler.property-panel",function(b,a){if(a.name!="macro"){return}a.registerButtonHandler("show-summary",function(e,c){var d=AJS.SummaryHelper.getParam(c,"showSummary");AJS.SummaryHelper.updateMacro("jira",c,"showSummary",d=="false"?"true":"false")})});AJS.SummaryHelper=(function(){return{getCurrentParams:function(a){return Confluence.MacroParameterSerializer.deserialize(a.attr("data-macro-parameters"))},getParam:function(a,d){var c=AJS.$(a);var b=AJS.SummaryHelper.getCurrentParams(c);return b[d]},updateMacro:function(b,a,c,g){var e=AJS.$(a);AJS.Rte.getEditor().selection.select(e[0]);AJS.Rte.BookmarkManager.storeBookmark();var d=AJS.SummaryHelper.getCurrentParams(e);d[c]=g;var f={contentId:Confluence.Editor.getContentId(),macro:{name:b,params:d,defaultParameterValue:e.attr("data-macro-default-parameter")}};tinymce.confluence.MacroUtils.insertMacro(f)}}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
