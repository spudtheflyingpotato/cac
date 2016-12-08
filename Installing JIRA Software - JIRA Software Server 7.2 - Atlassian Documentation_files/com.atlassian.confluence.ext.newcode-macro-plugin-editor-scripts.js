;try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:editor-scripts', location = 'scripts/paste-cleanup.js' */
AJS.$(document).bind("postPaste",function(b,a,c){AJS.$(c.node).find('span[class|="code"]').contents().unwrap();AJS.$(c.node).find('pre[class|="code"]').each(function(d,f){f.className=f.className.replace(/\bcode-.[^\s]*\b/gi,"")})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
