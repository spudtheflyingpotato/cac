;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-editor-resources', location = 'tinymce/editor_plugin_src.js' */
define("confluence-link-browser/tinymce/editor_plugin_src",["tinymce","confluence/legacy"],function(a,b){return{init:function(a){var c=b.Editor.LinkBrowser;a.addButton("linkbrowserButton",{title:"confluence.conflink_desc",cmd:"mceConflink","class":"mce_conflink"});a.addCommand("mceConflink",c.open);a.addCommand("mceConfAttachments",function(){return c.open({panelKey:c.ATTACHMENTS_PANEL})})},getInfo:function(){return{longname:"Confluence Link Browser",author:"Atlassian",authorurl:"http://www.atlassian.com",
version:a.majorVersion+"."+a.minorVersion}}}});require("confluence/module-exporter").safeRequire("confluence-link-browser/tinymce/editor_plugin_src",function(a){var b=require("tinymce");b.create("tinymce.plugins.LinkBrowser",a);b.PluginManager.add("linkbrowser",b.plugins.LinkBrowser)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
