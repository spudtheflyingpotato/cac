;try {
/* module-key = 'confluence.web.components:editor-notifications', location = '/includes/js/editor-notifications.js' */
define("confluence/editor-notifications",[],function(){var a;return{notify:function(b,c){var d=require("aui/flag");void 0!==a&&"true"!==a.getAttribute("aria-hidden")&&a.close();a=d({type:b,body:c,close:"error"===b?"manual":"auto"})}}});require("confluence/module-exporter").safeRequire("confluence/editor-notifications",function(a){var b=require("ajs");b.bind("init.rte",function(){b.Confluence.EditorNotification=a})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
