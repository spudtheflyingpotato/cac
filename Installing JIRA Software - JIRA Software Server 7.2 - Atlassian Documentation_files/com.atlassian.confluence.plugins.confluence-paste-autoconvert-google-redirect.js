;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-paste:autoconvert-google-redirect', location = 'js/autoconvert/transformers/google-redirect-convert.js' */
define("confluence-paste/autoconvert/transformers/google-redirect-convert",["jquery","tinymce"],function(c,e){return function(){e.plugins.Autoconvert.autoConvert.addHandler(function(a,b,d){a.host.match(/google.*/)&&"/url"===a.path&&a.queryKey&&a.queryKey.url?(a=decodeURIComponent(a.queryKey.url),b=c(b),b.attr("href",a),b.attr("data-mce-href",a),b.text(a),d(b)):d()})}});
require("confluence/module-exporter").safeRequire("confluence-paste/autoconvert/transformers/google-redirect-convert",function(c){require("ajs").bind("init.rte",c)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
