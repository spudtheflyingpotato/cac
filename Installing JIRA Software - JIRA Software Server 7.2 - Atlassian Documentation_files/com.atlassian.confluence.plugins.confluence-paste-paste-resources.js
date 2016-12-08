;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-paste:paste-resources', location = 'js/clipboard-access.js' */
define("confluence-paste/clipboard-access",["jquery","ajs","window","tinymce"],function(c,b,g,h){return function(){var e={initializeEditor:function(){b&&b.Rte&&b.Rte.BootstrapManager?b.Rte.BootstrapManager.addOnInitCallback(function(){var a=b.Rte.getEditor();a?g.MutationObserver&&!c.browser.webkit?(new MutationObserver(function(a){for(var f=0;f<a.length;f++){var d=a[f];if(d.addedNodes.length)for(var b=0;b<d.addedNodes.length;b++)if("img"===d.addedNodes[b].localName){g.setTimeout(e.pasteFromDataURL,
0);return}}})).observe(a.getDoc(),{childList:!0,subtree:!0}):a.onPaste.add(function(a,b){if(e.onPaste(b))return!0;h.dom.Event.cancel(b);return!1}):b.log("Could not getEditor from adapter")}):b.log("Could not initialize pasteHandler on Confluence.Editor")},pasteFromDataURL:function(){var a=c('img[src^="data:image"]:not(".editor-inline-macro")',h.activeEditor.getDoc());c.each(a,function(){for(var a=this.src.substring(22,this.src.length),f=3*a.length/4,d=0,c=a.length-1;"="==a[c];c--)d++;b.Confluence.Uploader.upload([e.createUploadFile(a,
f-d,"base64")])});a.remove()},onPaste:function(a){return a&&a.clipboardData?e.pasteFromEvent(a):!0},showClipboardAccessError:function(){(new b.Dialog({width:400,closeOnOutsideClick:!0})).addPanel("alert",c("<div />",{text:"Your browser does not support pasting images from the clipboard."})).addButton("OK",function(a){a.remove()}).show().updateHeight()},pasteFromEvent:function(a){if(a&&a.clipboardData){if(a.clipboardData.items){a=a.clipboardData.items[0];if(!a||"file"!=a.kind)return!0;
a=a.getAsFile();a=e.createUploadFile(a,a.size);b.Confluence.Uploader.upload([a]);return!1}g.setTimeout(function(a){var b=c("img[src^='webkit-fake-url://']",h.activeEditor.getDoc());b.length&&(b.remove(),a.showClipboardAccessError())},0,this)}return!0},createUploadFile:function(a,b,c){var d=new Date,e=d.getMonth()+1;return{fileName:"image"+d.getFullYear()+"-"+e+"-"+d.getDate()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+".png",fileSize:b,slice:function(b,c){return a.slice(b,b+c)},getAsBinary:function(){return a},
getData:function(){return a},encoding:c}}};e.initializeEditor(c);return e}});require("confluence/module-exporter").safeRequire("confluence-paste/clipboard-access",function(c){require("ajs").toInit(c)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
