;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-image-attributes:image-attributes', location = 'js/image-attributes-panel.js' */
define("confluence-image-attributes/image-attributes-panel",["jquery","ajs","confluence/legacy"],function(f,i,h){return function(){function j(){var a=c.val();d.attr({"data-element-title":a,title:k(d.attr("data-location"),a),alt:e.val()})}function k(a,b){return a&&0<a.length&&b&&0<b.length?a+" ("+b+")":a&&0<a.length?a:b&&0<b.length?"("+b+")":""}i.bind("dialog-created.image-properties",function(a,b){d=f(b.img);var g=f(h.Templates.Editor.ImageAttributes.content({imgTitle:d.attr("data-element-title"),
imgAlt:d.attr("alt")}));c=g.find("#image-title-attribute");e=g.find("#image-alt-attribute");c.val()===e.val()&&(c.bind("input.chained",function(){e.val(c.val())}),e.on("change",function(){c.unbind("input.chained")}));h.Editor.ImageProps.registerPanel(l,g,m,j)});var l="image-attributes",m="image-attributes-panel",d,c,e}});require("confluence/module-exporter").safeRequire("confluence-image-attributes/image-attributes-panel",function(f){require("ajs").toInit(f)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
