;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-sortable-tables:ConfluenceSortableTablesEditorPlugin', location = 'js/editor_plugin_src.js' */
define("confluence-sortable-tables/tinymce-plugin",["jquery","document"],function(d,a){return{init:function(e){var c=function(a,e,c){d(".tablesorter",c.node).each(function(a,c){var b=d(c).find("thead"),e,f;1===b.length&&(b=b[0],"THEAD"===b.nodeName&&1===b.childNodes.length&&(f=b.removeChild(b.childNodes[0]),e=d(c).find("tbody")[0],c.removeChild(b),e.insertBefore(f,e.childNodes[0])))})};e.onInit.add(function(){d(a).bind("postPaste",c)});e.onRemove.add(function(){d(a).unbind("postPaste",c)})},getInfo:function(){return{longname:"ConfluenceSortableTablesPlugin",
author:"Atlassian",authorurl:"http://www.atlassian.com",infourl:"http://www.atlassian.com",version:"1.0"}}}});require("confluence/module-exporter").safeRequire("confluence-sortable-tables/tinymce-plugin",function(d){var a=require("tinymce");a.create("tinymce.plugins.ConfluenceSortableTablesPlugin",d);a.PluginManager.add("confluencesortabletablesplugin",a.plugins.ConfluenceSortableTablesPlugin)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
