;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-paste:autoconvert-shortcut-links', location = 'js/autoconvert/transformers/shortcutlinks.js' */
define("confluence-paste/autoconvert/transformers/shortcutlinks",["ajs","tinymce","jquery"],function(e,k,i){return function(){var f=[],j;j=e.contextPath()?e.contextPath():"";k.plugins.Autoconvert.autoConvert.addHandler(function(a,c,g){if(a.source===c.text())for(var h=0;h<f.length;h++){var b=f[h],d=a.source.match(b.regex);if(d){a=d[1];if(b.defaultAlias){b=b.defaultAlias.replace(/%s/,a);g(i(c).text(b));return}g(i(c).text(a));return}}g()});setTimeout(function(){i.ajax({url:j+"/rest/autoconvert/latest/shortcutlinkconfigurations",
type:"GET",dataType:"json",success:function(a){f=a.configurations;for(a=0;a<f.length;a++){var c=f[a];try{var g=c,h=RegExp,b;var d=c.expandedValue;b=0<=d.indexOf("%s")?d.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&").replace("%s","(.*)"):d.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")+"(.*)";g.regex=new h(b)}catch(e){console.log("Failed to generated regex for "+c)}}},error:function(a){console.log("Failed to load shortcut link configurations "+a.statusText)}})},0)}});
require("confluence/module-exporter").safeRequire("confluence-paste/autoconvert/transformers/shortcutlinks",function(e){require("ajs").bind("init.rte",e)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
