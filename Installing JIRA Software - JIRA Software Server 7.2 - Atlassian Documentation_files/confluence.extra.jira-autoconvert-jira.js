;try {
/* module-key = 'confluence.extra.jira:autoconvert-jira', location = '/jira/jirapaste.js' */
(function(){AJS.bind("init.rte",function(){AJS.Editor.JiraConnector.Paste={issueKeyOnlyRegEx:/\/(i#)?browse\/([\x00-\x19\x21-\x22\x24\x27-\x3E\x40-\x7F]+-[0-9]+$)/,singleTicketXMLEx:/\/jira\.issueviews:issue-xml\/([\x00-\x19\x21-\x22\x24\x27-\x3E\x40-\x7F]+-[0-9]+)\//,issueKeyWithinRegex:/\/(i#)?browse\/([\x00-\x19\x21-\x22\x24\x27-\x3E\x40-\x7F]+-[0-9]+)(?:\?|#)/,jqlRegEx:/jqlQuery\=([^&]+)/,jqlRegExAlternateFormat:/jql\=([^&]+)/,pasteHandler:function(e,g,k){var n=AJS.Editor.JiraConnector.servers;var m=AJS.Editor.JiraAnalytics;var d={};var o;if(!n){k();return}for(var l in n){var h=n[l];if(e.source.indexOf(h.url)==0){o=h;break}}var f;if(o){var b=AJS.Editor.JiraConnector.Paste.jqlRegEx.exec(e.source)||AJS.Editor.JiraConnector.Paste.jqlRegExAlternateFormat.exec(e.source);var a=AJS.JQLHelper.isFilterUrl(e.source);var j=AJS.Editor.JiraConnector.Paste.issueKeyOnlyRegEx.exec(e.source)||AJS.Editor.JiraConnector.Paste.issueKeyWithinRegex.exec(e.source);if(j){j=j[2];if(m){d.type=m.linkTypes.jql}}else{j=AJS.Editor.JiraConnector.Paste.singleTicketXMLEx.exec(e.source);if(j){j=j[1];if(m){d.type=m.linkTypes.xml}}}if(b){d.is_single_issue=false;d.type=AJS.JQLHelper.checkQueryType(e.source);f={name:"jira",params:{server:o.name,serverId:o.id,jqlQuery:decodeURIComponent(b[1].replace(/\+/g,"%20"))}}}else{if(a){var c=e.source;d.is_single_issue=false;d.type=AJS.JQLHelper.checkQueryType(c);f={name:"jira",params:{server:o.name,serverId:o.id,jqlQuery:AJS.JQLHelper.getFilterFromFilterUrl(c)}}}else{if(j){d.is_single_issue=true;f={name:"jira",params:{server:o.name,serverId:o.id,key:j}}}}}}if(f){tinymce.plugins.Autoconvert.convertMacroToDom(f,k,k);if(m){m.triggerPasteEvent(d)}}else{k()}}};tinymce.plugins.Autoconvert.autoConvert.addHandler(AJS.Editor.JiraConnector.Paste.pasteHandler)})})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
