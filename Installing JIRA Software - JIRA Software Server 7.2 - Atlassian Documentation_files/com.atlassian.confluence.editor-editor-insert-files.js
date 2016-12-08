;try {
/* module-key = 'com.atlassian.confluence.editor:editor-insert-files', location = 'tinymce3/plugins/insert-files/insert-files-plugin.js' */
define("confluence-editor/tinymce3/plugins/insert-files/insert-files-plugin",["ajs","jquery","confluence-editor/utils/environment"],function(b,a,c){return{init:function(a){a.addButton("confluence-insert-files",{title:"Files",tooltip:"Insert files and images"+" ("+c.transformCmdKeyTextBasingOnOS("Ctrl+M")+")",cmd:"mceConfimage",className:"insert-files",locationGroup:"rte-toolbar-group-files",
weight:0})},getInfo:function(){return{longname:"Insert Files",author:"Atlassian",authorurl:"http://www.atlassian.com",infourl:"http://www.atlassian.com/",version:"1.0"}}}});require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/insert-files/insert-files-plugin",function(b){var a=require("tinymce");a.create("tinymce.plugins.InsertFiles",b);a.PluginManager.add("insertfiles",a.plugins.InsertFiles)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
