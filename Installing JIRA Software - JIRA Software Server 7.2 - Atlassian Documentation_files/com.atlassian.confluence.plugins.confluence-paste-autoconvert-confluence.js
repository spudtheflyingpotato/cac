;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-paste:autoconvert-confluence', location = 'js/autoconvert/transformers/confluencepaste.js' */
define("confluence-paste/autoconvert/transformers/confluencepaste",["ajs","tinymce","jquery","document"],function(d,g,h,i){return function(){g.plugins.Autoconvert.autoConvert.addHandler(function(c,a,e){if(a=(a=c.authority===i.location.host)&&(!d.contextPath()||0===c.path.indexOf(d.contextPath()))){var a=d.contextPath()?c.path.substring(d.contextPath().length+1):c.path.substring(1),a=decodeURIComponent(a).split("/"),b;c.queryKey=c.queryKey||{};var f=function(a,b){return!b.anchor||0===b.anchor.indexOf("comment-")?
a:a+"#"+b.anchor.substring(b.anchor.indexOf("-")+1)};c.queryKey.focusedCommentId?(b="$"+c.queryKey.focusedCommentId,b=f(b,c)):c.queryKey.pageId?(b="$"+c.queryKey.pageId,b=f(b,c)):"display"===a[0]?2===a.length&&0===a[1].indexOf("~")?b=a[1]:3===a.length?(b=a[1]+":"+a[2].replace(/\+/g," "),b=f(b,c)):4===a.length&&"status"===a[1]?b="$"+a[3]:6===a.length&&(b=a[1]+":/"+a[2]+"/"+a[3]+"/"+a[4]+"/"+a[5].replace(/\+/g," "),b=f(b,c)):"users"==a[0]&&(2===a.length&&"viewuserprofile.action"==a[1]?b="~"+c.queryKey.username:
2===a.length&&"viewmyprofile.action"==a[1]&&(b="~"+d.Meta.get("remote-user")));b?g.plugins.Autoconvert.getHtmlFromWikiMarkup("["+b+"]",function(a){e(h(a).children()[0])},function(){e()}):e()}else e()})}});require("confluence/module-exporter").safeRequire("confluence-paste/autoconvert/transformers/confluencepaste",function(d){require("ajs").bind("init.rte",d)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
