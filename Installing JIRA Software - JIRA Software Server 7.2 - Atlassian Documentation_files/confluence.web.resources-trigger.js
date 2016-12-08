;try {
/* module-key = 'confluence.web.resources:trigger', location = '/includes/js/trigger.js' */
define("confluence/trigger",["jquery","window"],function(b,c){return function(a,d){a=new b.Event(a);b(d||c.top.document).trigger(a);return!a.isDefaultPrevented()}});require("confluence/module-exporter").exportModuleAsGlobal("confluence/trigger","AJS.jiraTrigger");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
