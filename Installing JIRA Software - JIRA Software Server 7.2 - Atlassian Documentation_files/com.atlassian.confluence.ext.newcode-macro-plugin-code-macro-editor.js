;try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:code-macro-editor', location = '/scripts/code-macro-languages.js' */
(function(d){var b=function(){};b.prototype.fields={string:{language:function(h,f){var g=d(Confluence.Templates.MacroBrowser.macroParameterSelect());var e=d("select",g);if(f==null){f={}}f.setValue=function(k){var j=e.find("option[value='"+k+"']");if(j.length==0){var i=d("<option/>");i.val(k);i.text(k);e.append(i)}};a(e);return new AJS.MacroBrowser.Field(g,e,f)}}};AJS.MacroBrowser.Macros.code=new b();function a(e){c(function(g){if(!g.length){AJS.log("Configured code macro languages result was not in the expected format.");return}var f=e.val();e.empty();e.append(d("<option/>").attr("value",""));d.each(g,function(h,j){var i=d("<option />");i.val(j.aliases[0]);i.text(j.friendlyName);e.append(i)});e.val(f)},function(g,h,f){AJS.log("Failed to retrieve syntax highlighters from Confluence "+h+" - "+f)})}function c(f,e){AJS.$.ajax({async:true,url:AJS.params.contextPath+"/plugins/newcode/getlanguages.action",dataType:"json",timeout:10000,error:function(h,i,g){if(e&&typeof(e)=="function"){e(h,i,g)}},success:function(g){if(f&&typeof(f)=="function"){f(g)}}})}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
