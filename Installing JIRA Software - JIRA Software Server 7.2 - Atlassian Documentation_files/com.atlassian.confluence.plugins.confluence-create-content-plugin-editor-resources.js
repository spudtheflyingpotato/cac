;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:editor-resources', location = 'com/atlassian/confluence/plugins/createcontent/js/move-hidden-fields-hack.js' */
AJS.toInit(function(a){a("fieldset.create-content-template-fields > input").appendTo("form.editor")});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
