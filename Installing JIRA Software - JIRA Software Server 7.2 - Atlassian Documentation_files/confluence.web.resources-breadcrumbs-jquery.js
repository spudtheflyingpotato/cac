;try {
/* module-key = 'confluence.web.resources:breadcrumbs-jquery', location = '/includes/js/breadcrumbs-jquery.js' */
define("confluence/breadcrumbs-jquery",["jquery","confluence/templates"],function(e,h){return function(a){var i=this,f=[],b=0,c=a.length-1,d=a[b],j=i.closest(".breadcrumbs-container").width(),g=function(){return i.width()<j};for(f.push(h.Dialog.breadcrumbItem({text:d.title,title:d.title,className:b===c?"last":""}));b++<c;)d=a[b],f.push(h.Dialog.breadcrumbItem({text:d.title,title:d.title,className:b===c?"last":""}));this.html(f.join(""));a=e("li a span",this);a.each(function(a){0!==a&&a!==c&&e(this).shortenUntil(g)});
e(a.get(0)).shortenUntil(g);e(a.get(c)).shortenUntil(g);return this}});require("confluence/module-exporter").exportModuleAsGlobal("confluence/breadcrumbs-jquery","jQuery.fn.renderBreadcrumbs");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
