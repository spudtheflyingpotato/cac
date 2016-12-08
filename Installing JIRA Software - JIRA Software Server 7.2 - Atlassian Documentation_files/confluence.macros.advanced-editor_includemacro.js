;try {
/* module-key = 'confluence.macros.advanced:editor_includemacro', location = 'com/atlassian/confluence/plugins/macros/advanced/js/include-macro.js' */
AJS.bind("init.rte",function(){var b=AJS.Meta.get("context-path"),d=AJS.Meta.get("content-id"),c="plugins/servlet/confluence/include-page-macro/goto",a=function(e){var j=AJS.$(e),f=j.attr("data-macro-default-parameter"),h=b+"/"+c+"?location="+f+"&contentId="+d,g=(AJS.$.browser&&AJS.$.browser.msie)?"_blank":"confluence-goto-link-include-macro-"+e.id,i=window.open(h,g);if(i){i.focus()}};AJS.Confluence.PropertyPanel.Macro.registerButtonHandler("goto-page",function(g,f){a(f)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
