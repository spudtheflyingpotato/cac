;try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:drag-and-drop-tip', location = 'js/drag-and-drop-tip.js' */
define("confluence-drag-and-drop/drag-and-drop-tip",["ajs","confluence/legacy"],function(b,g){return function(d){function h(c,a){"true"===a&&(c.append(b.DragAndDrop.Templates.dragAndDropTip()),c.find(".attach-tip-discovery .close-tip").on("click",function(a){a.preventDefault();d(this).closest(".attach-tip-discovery").remove();c.sizeToFit();d.ajax({url:b.contextPath()+"/rest/drag-and-drop/1/tip/disable",type:"POST",contentType:"application/json",dataType:"json",success:function(){e.setItem(f,!1)}})}))}
var f="show-drag-and-drop-tip",e=g.storageManager("confluence-editor");g.Editor.ImageDialog.beforeShowListeners.push(function(){var c=d("#attached-files");if(b.Meta.getBoolean("can-attach-files")){var a=e.getItem(f);null===a?d.ajax({url:b.contextPath()+"/rest/drag-and-drop/1/tip/setting",contentType:"application/json",dataType:"json",success:function(b){a=(!1!==b).toString();e.setItem(f,a);h(c,a)}}):h(c,a)}})}});
require("confluence/module-exporter").safeRequire("confluence-drag-and-drop/drag-and-drop-tip",function(b){require("ajs").toInit(b)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
