;try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:drag-and-drop-for-editor', location = 'js/editor.js' */
require(["ajs","jquery","conf/confluence-drag-and-drop/analytics/files-upload-analytics","conf/confluence-drag-and-drop/drag-and-drop-overlay","document"],function(a,r,o,p,m){a.toInit(function(h){var e,q=/^\w+:\/\/[^\/?#]+/.exec(location.href),n=!1;a.Rte.BootstrapManager.addOnInitCallback(function(){var j=a.Rte.getEditor().getBody().parentNode,k=m.getElementById("fileuploadShim"),l=!1;k||(k=m.createElement("div"),k.setAttribute("id","fileuploadShim"),m.body.appendChild(k));h.browser.mozilla&&-1<h.browser.version.indexOf("1.9.2")&&
j.addEventListener("drop",function(a){a.stopPropagation()},!1);var c=new plupload.Uploader({runtimes:"html5",dragdrop:!0,drop_element:j,browse_button:k.getAttribute("id"),multipart:!1,max_file_size:+a.Meta.get("global-settings-attachment-max-size")});e||(e=new a.DragAndDropProgressDialog);c.init();c.bind("Started",function(a,b){o.triggerEvent("confluence.editor.files.drag-and-drop",b)});c.bind("FilesAdded",function(i,b){a.UploadUtils.filterFiles(i,b,function(a,b){for(var d=0;d<b.length;d++){var i=
b[d];i.status!==plupload.FAILED&&e.render({workId:i.id,status:i.status,file:i})}c.start()})});c.bind("BeforeUpload",function(i,b){if(a.Meta.get("content-type")==="template"){i.stop();if(!n){var f=new a.Dialog(450,180);f.addHeader("Not Supported");f.addSubmit("Ok",function(){f.remove()});f.addPanel("Panel 1","panel1");f.getCurrentPanel().html("\u003cp\u003eAttachments are not supported in Templates.\u003c/p\u003e \u003cp\u003eFiles may be attached to a Page, and added as an image via the Insert menu.\u003c/p\u003e");f.show();n=true}}else{var g=
q+a.contextPath()+"/plugins/drag-and-drop/upload.action",d={},c=a.Meta.get("page-id");if(c)d.pageId=c;var h=a.Meta.get("draft-id");if(c==0&&h>0)d.draftId=h;if(c=a.Meta.get("drag-and-drop-entity-id"))d.dragAndDropEntityId=c;c=b.name.substr(b.name.lastIndexOf(".")+1);d.filename=b.name;d.size=b.size;d.minorEdit=true;d.spaceKey=a.Meta.get("space-key")||"";d.mimeType=plupload.mimeTypes[c.toLowerCase()]||a.DragAndDropUtils.defaultMimeType;d.atl_token=a.Meta.get("atl-token");d.contentType=a.Meta.get("content-type");
d.isVFMSupported=!!a.MacroBrowser.getMacroMetadata("view-file");i.settings.url=plupload.buildUrl(g,d);e.cancelListeners.push(function(b,c){var d=i.getFile(c.workId);d&&i.removeFile(d);e.renderInfo(c.workId,"File was manually removed from the queue.")});e.show()}});c.bind("UploadProgress",function(a,b){e.renderUpdateToBytesUploaded(b.id,b.loaded,b.size);e.hideCloseButton()});h.browser.mozilla&&plupload.addEvent(j,"dragenter",function(a){l=a.rangeParent&&a.rangeOffset!=void 0?{startElement:a.rangeParent,
startOffset:a.rangeOffset}:false});c.bind("FileUploaded",function(c,b,f){if(f.status){if(f.response)try{var g=h.parseJSON(f.response);l&&h(l.startElement.parentNode).closest('[contenteditable="true"]',j).length&&tinymce.activeEditor.selection.setCursorLocation(l.startElement,l.startOffset);g.htmlForEditor.substr(0,4)==="<img"?tinymce.confluence.ImageUtils.insertImagePlaceholder(g.htmlForEditor):a.Rte.getEditor().execCommand("mceInsertContent",false,g.htmlForEditor,{skip_focus:true})}catch(d){a.log("FileUploaded threw an exception "+
d)}e.renderComplete(b.id)}else e.renderError(b.id,"The server is not responding. Please check that it is running.")});c.bind("Error",function(c,b){var f,g;if(b.response){try{f=h.parseJSON(b.response);g=f.actionErrors[0]}catch(d){g=d.name==="SyntaxError"?"Invalid response received from the server.":b.message}e.renderError(b.file.id,g);a.trigger("analyticsEvent",{name:"confluence.editor.upload.error.server-unknown"})}else{g=b.message;if(b.code===plupload.FILE_SIZE_ERROR){g=a.format("is too big to upload. Files must be less than {0}.",
a.DragAndDropUtils.niceSize(a.Meta.get("global-settings-attachment-max-size")));a.trigger("analyticsEvent",{name:"confluence.editor.upload.error.file-size"})}else if(b.code===a.UploadUtils.ErrorCode.FILE_IS_A_FOLDER_ERROR){g="might be a folder or an unsupported file type.";a.trigger("analyticsEvent",{name:"confluence.editor.upload.error.file-type"})}e.render({workId:b.file.id,status:b.file.status,file:b.file,errorMessage:g});if(!e.isVisible()){e.show();e.showCloseButton()}}});c.bind("UploadComplete",
function(){if(!c.total.queued){c.stop();e.showCloseButton();e.hasErrors()||setTimeout(function(){e.hide();e.clearRenderOutput();a.Rte.BookmarkManager.restoreBookmark()},1E3)}});a.Confluence.Uploader=c;a.Confluence.EditorUploadProgressDialog=e;p.bindFileDragOverlay({$dragZone:h(j).add("#toolbar ~ #editor-precursor"),$overlayZone:h("#rte"),isTransparent:!0})})})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:drag-and-drop-for-editor', location = 'js/link-dialog-drop-zone.js' */
define("confluence-drag-and-drop/link-dialog-drop-zone",["ajs"],function(a){return function(b){a.bind("dialog-shown.link-browser",function(){b.browser.msie||a.DragAndDropUtils.bindDrop(b("#insert-link-dialog")[0],function(a){a.preventDefault();a.stopPropagation()})})}});require("confluence/module-exporter").safeRequire("confluence-drag-and-drop/link-dialog-drop-zone",function(a){require("ajs").toInit(a)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
