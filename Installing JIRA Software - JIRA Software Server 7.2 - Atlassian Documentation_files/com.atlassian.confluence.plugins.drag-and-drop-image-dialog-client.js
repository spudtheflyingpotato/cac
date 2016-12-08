;try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:image-dialog-client', location = 'js/insert-dialog-upload-controller.js' */
define("confluence-drag-and-drop/insert-dialog-upload-controller",["confluence/meta","ajs","jquery"],function(d,c,e){var b=function(a){this.messageHandler=null;this.context=a;a=this.getForm();d.getBoolean("can-attach-files")||a.remove()};b.prototype.getForm=function(){return e("form",this.context.baseElement)};b.prototype.pack=function(){};b.prototype.displayErrors=function(a){this.getMessageHandler().displayMessages(a);a=this.getMessageHandler().getMessageContainer().find("ul");a.toggleClass("one-message",
1===a.find("li").length);a.closest(".aui-message").append("<span class='aui-icon icon-warning'></span>");this.pack()};b.prototype.clearErrors=function(){this.getMessageHandler().clearMessages();this.pack()};b.prototype.getMessageHandler=function(){this.messageHandler||(this.messageHandler=c.MessageHandler({baseElement:e(".aui-message",this.context.baseElement)}));return this.messageHandler};return b});
require("confluence/module-exporter").safeRequire("confluence-drag-and-drop/insert-dialog-upload-controller",function(d){var c=require("confluence/legacy");c.DragAndDrop=c.DragAndDrop||{};c.DragAndDrop.UploadClientController=d});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:image-dialog-client', location = 'js/image-dialog-client.js' */
define("confluence-drag-and-drop/image-dialog-client",["jquery","confluence/legacy","ajs","confluence/meta","underscore"],function(j,g,f,h,l){var k=function(){this._workIdToBytesUploaded={};this._totalBytes=0};k.prototype={update:function(a,b,e){a in this._workIdToBytesUploaded||(this._totalBytes+=e);this._workIdToBytesUploaded[a]=b},percentComplete:function(){var a=0;j.each(this._workIdToBytesUploaded,function(b,e){a+=e});return Math.round(100*a/this._totalBytes)}};var i=function(a){this.urlHandleUpload=
"/plugins/drag-and-drop/upload.action";this.pageId=parseInt(h.get("page-id"),10);this.draftId=parseInt(h.get("draft-id"),10);this.dragAndDropEntityId=h.get("drag-and-drop-entity-id");this.spaceKey=h.get("space-key")||"";this.atlToken=h.get("atl-token");this.base=/^\w+:\/\/[^\/?#]+/.exec(location.href);this.metaMaxFileSize=h.get("global-settings-attachment-max-size");this.errors=[];this.batchProgress=new k;this.attachmentPanelComponent=a.attachmentPanelComponent;this.dropZone=a.dropZone;this.browserButtonId=
a.browserButtonId;this.uploader=null;this.isUploadUsingDragAndDrop=!1;var b=this;j(this.dropZone).bind("drop",function(){b.isUploadUsingDragAndDrop=!0})};i.prototype.createPlupload=function(){var a=this,b=new plupload.Uploader({runtimes:"html5",dragdrop:!0,drop_element:a.dropZone,browse_button:a.browserButtonId,multipart:!1,stop_propagation:!0,max_file_size:parseInt(a.metaMaxFileSize,10),inputFileClazz:"file-library-input-file"});b.init();b.bind("Started",function(e,c){a.errors=[];a.attachmentPanelComponent.clearErrors();
a.batchProgress=new k;require(["conf/confluence-drag-and-drop/analytics/files-upload-analytics"],function(e){e.triggerEvent(a.isUploadUsingDragAndDrop?"confluence.insert-files-dialog.drag-and-drop":"confluence.insert-files-dialog.upload",c);a.isUploadUsingDragAndDrop=!1})});b.bind("FilesAdded",function(e,c){function b(c,e){for(var d=0;d<e.length;d++)if(e[d].status===plupload.FAILED)c.removeFile(e[d]);else{var f=l.find(c.files,function(a){return a.name===e[d].name&&a.id!==e[d].id});f&&c.removeFile(f);
a.metaMaxFileSize>e[d].size&&a.attachmentPanelComponent.addPreviewImage(e[d])}c.start()}0<c.length&&(a.attachmentPanelComponent.getNoFileContainer().hide(),f.UploadUtils.filterFiles(e,c,b))});b.bind("BeforeUpload",function(e,c){var d=a.base+f.contextPath()+a.urlHandleUpload,b={},g=c.name.substr(c.name.lastIndexOf(".")+1);a.pageId?b.pageId=a.pageId:b.draftId=a.draftId;a.dragAndDropEntityId&&(b.dragAndDropEntityId=a.dragAndDropEntityId);b.filename=c.name;b.size=c.size;b.minorEdit=!0;b.spaceKey=a.spaceKey;
b.mimeType=plupload.mimeTypes[g.toLowerCase()]||f.DragAndDropUtils.defaultMimeType;b.atl_token=a.atlToken;e.settings.url=plupload.buildUrl(d,b);a.batchProgress=new k});b.bind("UploadProgress",function(b,c){a.batchProgress.update(c.id,c.loaded,c.size);a.attachmentPanelComponent.setUploadInProgress(a.batchProgress.percentComplete()/100,c.id)});b.bind("FileUploaded",function(b,c,d){b.getFile(c.id)?(b=JSON.parse(d.response).data.id,a.attachmentPanelComponent.attachmentUploaded(c.id,b)):a.attachmentPanelComponent.attachmentUploadingCancelled(c.id)});
b.bind("Error",function(b,c){var d="";if(c.response){try{d=j.parseJSON(c.response).actionErrors[0]}catch(g){d=c.message}f.trigger("analyticsEvent",{name:"confluence.image-dialog.upload.error.server-unknown"})}else{var d=c.message,h=c.file.name;c.code===plupload.FILE_SIZE_ERROR?(d=f.DragAndDropUtils.niceSize(a.metaMaxFileSize).toString(),d=f.format("{0} is too big to upload. Files must be less than {1}.",h,d),f.trigger("analyticsEvent",{name:"confluence.image-dialog.upload.error.file-size"})):c.code===f.UploadUtils.ErrorCode.FILE_IS_A_FOLDER_ERROR&&
(d=f.format("Cannot upload {0} - it might be a folder or an unsupported file type.",h),f.trigger("analyticsEvent",{name:"confluence.image-dialog.upload.error.file-type"}))}a.attachmentPanelComponent.displayErrors([d]);a.errors.push(d)});require(["conf/confluence-drag-and-drop/drag-and-drop-overlay"],function(b){b.bindFileDragOverlay({$dragZone:j(a.dropZone),zIndex:3005})});return b};i.prototype.init=function(){this.uploader=this.createPlupload()};i.prototype.cancelUpload=function(a){(a=this.uploader.getFile(a))&&
this.uploader.removeFile(a)};if(g.Editor&&g.Editor.FileDialog)g.Editor.FileDialog.eventListener.on("AttachmentsPanelView.render",function(a){a.getUploaderController=function(){return new g.DragAndDrop.UploadClientController(a.context)}});f.toInit(function(){if(g.Editor&&g.Editor.ImageDialog){var a=g.Editor.ImageDialog.beforeShowListeners,b=g.Editor.ImageDialog.findPanelComponentById("attachments");a&&a.push(function(){if(b){var a=b.getPanelElement();if(a.length&&h.getBoolean("can-attach-files")){var c=
new i({dropZone:a[0],browserButtonId:"upload-files-button",attachmentPanelComponent:b});c.init();g.Editor.FileDialog.eventListener.on("uploadingfile.cancelled",function(a){c.cancelUpload(a)})}}else f.debug("Do not support Attachment Panel and Drag-Drop in Insert Image Dialog (ex: in creating Template)")})}});return i});require("confluence/module-exporter").exportModuleAsGlobal("confluence-drag-and-drop/image-dialog-client","Confluence.DragAndDrop.UploadClient");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
