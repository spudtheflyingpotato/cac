;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-fixed-headers:confluence-fixed-headers-editor-resources', location = '/js/slow-edit-handler.js' */
require(["confluence/fh/utils/dom","ajs"],function(b,a){a.toInit(function(){var c=a.Meta.get("browse-page-tree-mode");if(c!=="create"&&c!=="edit"){return}b.addClassToPage();$("#content").css({paddingRight:0})})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
