;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-paste:autoconvert-youtu.be-rewrite', location = 'js/autoconvert/transformers/youtube.js' */
define("confluence-paste/autoconvert/transformers/youtube",["tinymce","jquery"],function(a,d){return function(){a.plugins.Autoconvert.autoConvert.addHandler(function(b,a,c){b.host.match(".*youtu.be.*")?(b="http://youtube.com/watch?v="+b.path.substr(1),c(d(a).attr("href",b).html(b))):c()})}});require("confluence/module-exporter").safeRequire("confluence-paste/autoconvert/transformers/youtube",function(a){require("ajs").bind("init.rte",a)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
