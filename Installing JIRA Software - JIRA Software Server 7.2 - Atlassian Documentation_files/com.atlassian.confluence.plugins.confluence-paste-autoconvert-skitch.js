;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-paste:autoconvert-skitch', location = 'js/autoconvert/transformers/skitchpaste.js' */
define("confluence-paste/autoconvert/transformers/skitchpaste",["ajs","jquery"],function(c,b){return{pasteHandler:function(a,e,d){"www.skitch.com"==a.host||"skitch.com"==a.host?b.get(c.params.contextPath+"/rest/autoconvert/1.0/skitchembed?url="+a.source,function(a){a&&a.url?d(b('<img class="confluence-embedded-image confluence-external-resource" src="'+a.url+'" data-image-src="'+a.url+'"/>')[0]):d()}):d()}}});
require("confluence/module-exporter").safeRequire("confluence-paste/autoconvert/transformers/skitchpaste",function(c){var b=require("ajs"),a=require("tinymce");b.bind("init.rte",function(){b.Editor.SkitchPaste=c;a.plugins.Autoconvert.autoConvert.addHandler(c.pasteHandler)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
