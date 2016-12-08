;try {
/* module-key = 'confluence.web.resources:page-location', location = '/includes/js/page-location.js' */
define("confluence/page-location",["ajs","confluence/meta"],function(c,a){var b=null;return{get:function(){return b?b:{spaceName:a.get("space-name"),spaceKey:a.get("space-key"),parentPageTitle:a.get("parent-page-title")}},set:function(a){b=a}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence/page-location","Confluence.PageLocation");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
