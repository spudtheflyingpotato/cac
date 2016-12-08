;try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:drag-and-drop-overlay', location = 'js/drag-and-drop-overlay.js' */
define("conf/confluence-drag-and-drop/drag-and-drop-overlay",["ajs","jquery"],function(g,e){var h;return{bindFileDragOverlay:function(a){var f=a.$dragZone,d=a.$overlayZone||f.eq(0),i=a.isTransparent||!1,j=a.zIndex||1;f.on("dragover",function(c){c=c.originalEvent.dataTransfer.types;if(-1!==e.inArray("Files",c)&&(!e.browser.mozilla||-1!==e.inArray("application/x-moz-file",c))){var c=!!i,b;if(!h){var a=g.DragAndDrop.Templates.dragOverlay();h=e(a)}b=h;if(b.parent()[0]!==d[0]){a=0<d.closest(".quick-comment-container, .ic-container, .cp-editor").length;
b.toggleClass("dnd-small",a);var f=b.find(".overlay-center p");a?f.text("Drop a file here"):f.text("Drop files to insert them into the page");b.toggleClass("dnd-overlay-transparent",c);c=getComputedStyle(d[0]);b.css({"z-index":j});b.css({"margin-left":"-"+c.paddingLeft,"margin-top":"-"+c.paddingTop,width:d.innerWidth()+"px",height:d.innerHeight()+"px"}).prependTo(d);b.off("dragleave").on("dragleave",function(a){(!a.relatedTarget||!e.contains(b[0],a.relatedTarget))&&
b.remove()});b.off("drop").on("drop",function(){b.remove()})}}})}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
