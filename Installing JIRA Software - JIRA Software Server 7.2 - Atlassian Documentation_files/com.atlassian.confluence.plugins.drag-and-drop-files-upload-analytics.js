;try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:files-upload-analytics', location = 'js/analytics/files-upload-analytics.js' */
define("conf/confluence-drag-and-drop/analytics/files-upload-analytics",["ajs","underscore"],function(d,e){return{triggerEvent:function(b,a,c){a&&a.length&&(a={multiple:1<a.length,number:a.length,isAllImage:void 0===c?this._isAllImages(a):c},d.trigger("analyticsEvent",{name:b,data:a}))},_isAllImages:function(b){return e.every(b,function(a){return a.nativeFile&&a.nativeFile.type&&0===a.nativeFile.type.indexOf("image/")})}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
