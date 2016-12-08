;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-paste:autoconvert-cloudapp', location = 'js/autoconvert/transformers/cloudapppaste.js' */
define("confluence-paste/autoconvert/transformers/cloudapppaste",["ajs","jquery"],function(b,c){return function(d,f,e){"cl.ly"==d.host?c.get(b.params.contextPath+"/rest/autoconvert/1.0/cloudappembed?resource="+d.path.substr(1),function(a){if(a)switch(a.item_type){case "image":a=b.escapeHtml(a.content_url);e(c('<img class="confluence-embedded-image confluence-external-resource" src="'+a+'" data-image-src="'+a+'"/>')[0]);break;case "bookmark":f.text(a.name),f.attr("href",b.escapeHtml(a.redirect_url)),
e(f)}else e()}):e()}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-paste/autoconvert/transformers/cloudapppaste","AJS.Editor.CloudAppPaste",function(b){var c=require("ajs"),d=require("tinymce");c.bind("init.rte",function(){d.plugins.Autoconvert.autoConvert.addHandler(b)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
