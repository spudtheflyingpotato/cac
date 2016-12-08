;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-paste:autoconvert-widget-connector', location = 'js/autoconvert/transformers/widgetpaste.js' */
define("confluence-paste/autoconvert/transformers/widgetpaste",["tinymce"],function(a){return function(){var e=[/youtube.com\/watch\?/,/vimeo.com\/[0-9]+/,/maps.google(.[a-z]+)+\/maps/,/[^\.]\.wufoo\.com\/(?:forms|reports)/];a.plugins.Autoconvert.autoConvert.addHandler(function(b,c,d){b=decodeURI(b.source);for(c=0;c<e.length;c++)if(b.match(e[c])){a.plugins.Autoconvert.convertMacroToDom({name:"widget",params:{url:b}},d,d);return}d()})}});
require("confluence/module-exporter").safeRequire("confluence-paste/autoconvert/transformers/widgetpaste",function(a){require("ajs").bind("init.rte",a)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-paste:autoconvert-widget-connector', location = 'js/autoconvert/transformers/flickrpaste.js' */
define("confluence-paste/autoconvert/transformers/flickrpaste",["tinymce"],function(b){return function(){var e=/^\/photos\/tags\/[^/]+/,f=/^\/photos\/[^/]+\/sets\/[0-9]+/,g=/^\/photos\/[^/]+\/[0-9]+/;b.plugins.Autoconvert.autoConvert.addHandler(function(a,c,d){a.host.match(/flickr.com/)?(c=decodeURIComponent(a.path),c.match(e)||c.match(f)||c.match(g)?(a={name:"widget",params:{url:decodeURI(a.source)}},b.plugins.Autoconvert.convertMacroToDom(a,d,d)):d()):d()})}});
require("confluence/module-exporter").safeRequire("confluence-paste/autoconvert/transformers/flickrpaste",function(b){require("ajs").bind("init.rte",b)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
