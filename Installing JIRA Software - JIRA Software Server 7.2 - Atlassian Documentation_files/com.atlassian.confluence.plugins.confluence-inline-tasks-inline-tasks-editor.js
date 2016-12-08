;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-editor', location = 'js/editor_plugin_src.js' */
(function(b){var c=/^\u200b?(\[)$/;AJS.bind("confluence.editor.registerHandlers",function(n,m){if(!AJS.Rte.Support.inlineTasks()){return}var k=m.handlerManager,j=m.ed,l=m.createHandler;k.registerHandler("]".charCodeAt(0),l(c,function(){j.plugins.lists.applyList("UL","OL","inline-task-list",{attributesOnItems:{"data-inline-task-id":""},placeholderText:"Type your task here, using \"@\" to assign to a user and \"//\" to select a due date"})},true))});function e(j){j.plugins.lists.applyList=_.bind(_.wrap(j.plugins.lists.applyList,function(k){k.apply(this,Array.prototype.slice.call(arguments,1));g(j)}),j.plugins.lists)}function g(j,l){if(!(tinymce.isIE8||tinymce.isIE11||tinymce.isGecko||tinymce.isWebKit)){return}var k=l||b(d(j));if(k.height()===0||tinymce.isIE8){k.append("&nbsp;");(tinymce.isWebKit||tinymce.isIE8)&&j.selection.setCursorLocation(k[0],0)}}function h(m,k){var j,n,l;if(tinymce.isGecko){l=k.getBoundingClientRect();j=m.pageX-(l.left+tinymce.DOM.getViewPort(tinymce.activeEditor.getWin()).x);n=m.pageY-(l.top+tinymce.DOM.getViewPort(tinymce.activeEditor.getWin()).y)}else{if(tinymce.isIE8){j=m.offsetX-k.offsetLeft;n=m.offsetY-k.offsetTop}else{j=m.offsetX;n=m.offsetY}}return j>=3&&j<=14&&n>=3&&n<=14}function i(j,m){var k=m.target;if(k.tagName!=="LI"){return}var l=j.dom.getParent(k,"ul,ol");if(l.tagName==="UL"&&j.dom.hasClass(l,"inline-task-list")){if(h(m,k)){if(j.dom.hasClass(k,"checked")){j.dom.removeClass(k,"checked")}else{j.dom.addClass(k,"checked")}}}}function d(k){var l=k.selection.getStart();var j=(l&&l.tagName&&l.tagName.toUpperCase()==="LI")?l:k.dom.getParent(l,"li");return j}function a(k,l){if(l.keyCode===tinymce.VK.ENTER&&!l.shiftKey){var j=d(k);if(j){var m=b(j);if(k.dom.hasClass(j.parentNode,"inline-task-list")){m.removeClass("checked").attr("data-inline-task-id","")}else{m.removeClass("checked").removeAttr("data-inline-task-id")}g(k,m)}}}function f(k,l){var j=d(k);if(j){var m=b(j);if(k.dom.hasClass(j.parentNode,"inline-task-list")){m.find("font").contents().unwrap()}}}tinymce.create("tinymce.plugins.ConfluenceTaskListPlugin",{init:function(j,k){e(j);j.onClick.add(i);j.onKeyUp.add(a);if(tinymce.isIE){j.onKeyUp.add(f)}},getInfo:function(){return{longname:"Confluence Task List Plugin",author:"Atlassian",authorurl:"http://www.atlassian.com",version:tinymce.majorVersion+"."+tinymce.minorVersion}}});tinymce.PluginManager.add("confluencetasklist",tinymce.plugins.ConfluenceTaskListPlugin);AJS.Editor.Adapter.addTinyMcePluginInit(function(j){j.plugins+=",confluencetasklist"})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-editor', location = 'js/inline-tasks-rte.js' */
(function(c){function a(e){var d=c(e).find("li[data-inline-task-id]");d.each(function(){var g=c(this),f=g.parent();if(!f.is("ul")){f.wrapInner('<ul class="inline-task-list"/>')}else{if(!f.hasClass("inline-task-list")){f.addClass("inline-task-list")}}})}function b(e){a(e);var g;if(Confluence.Editor&&Confluence.Editor.getContentType){g=Confluence.Editor.getContentType()}else{g=AJS.Meta.get("content-type")}var f=c(e).find("ul.inline-task-list"),d=f.find("> li");if(g=="comment"){d.removeClass("checked").removeAttr("data-inline-task-id");f.removeClass("inline-task-list")}else{d.attr("data-pasted-task","true")}}c(document).bind("postPaste",function(f,d,g){b(g.node)})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
