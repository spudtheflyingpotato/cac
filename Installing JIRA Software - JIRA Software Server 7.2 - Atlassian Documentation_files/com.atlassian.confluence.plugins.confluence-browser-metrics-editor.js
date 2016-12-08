;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:editor', location = '/js/editor.js' */
require(["internal/browser-metrics","jquery"],function(b,c){function a(){var e=AJS.Meta.get("content-type");var d=AJS.Meta.getBoolean("new-page")?"create":"edit";if(e&&d){b.start({key:"confluence."+e+"."+d+".view",ready:".active-richtext",isInitial:true})}}c(a)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
