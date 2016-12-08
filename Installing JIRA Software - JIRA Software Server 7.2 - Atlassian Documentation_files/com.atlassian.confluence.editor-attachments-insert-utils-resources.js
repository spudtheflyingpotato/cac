;try {
/* module-key = 'com.atlassian.confluence.editor:attachments-insert-utils-resources', location = 'utils/attachments-insert-utils.js' */
define("confluence-editor/utils/attachments-insert-utils",["underscore","confluence/meta","jquery"],function(c,b,d){return{insertFilePlaceholder:function(a,e,f){var g=require("tinymce");a.height="comment"===b.get("content-type")?"150":"250";a.ownerId&&a.ownerId===b.get("content-id")&&(delete a.page,delete a.space,delete a.date);a=c.omit(c.pick(a,"name","page","space","date","height"),function(a){return!a});a={contentId:b.get("content-id")||"0",macro:{name:"view-file",params:a}};g.confluence.MacroUtils.insertMacro(a,
e).done(function(a){f&&d(a).click()})}}});require("confluence/module-exporter").safeRequire("confluence-editor/utils/attachments-insert-utils");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
