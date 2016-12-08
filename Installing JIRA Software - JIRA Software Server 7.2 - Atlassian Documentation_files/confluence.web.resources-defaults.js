;try {
/* module-key = 'confluence.web.resources:defaults', location = '/includes/js/defaults.js' */
define("confluence/defaults",[],function(){return{maxResults:50}});require("confluence/module-exporter").exportModuleAsGlobal("confluence/defaults","Confluence.Defaults");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
