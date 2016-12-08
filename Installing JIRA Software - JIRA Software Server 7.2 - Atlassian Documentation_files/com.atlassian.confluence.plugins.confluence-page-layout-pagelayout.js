;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-layout:pagelayout', location = 'js/pagelayout/page-layout.soy' */
// This file was automatically generated from page-layout.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.PageLayout.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.PageLayout == 'undefined') { Confluence.Templates.PageLayout = {}; }


Confluence.Templates.PageLayout.contentLayout = function(opt_data, opt_ignored) {
  return '<div class="contentLayout"></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.PageLayout.contentLayout.soyTemplateName = 'Confluence.Templates.PageLayout.contentLayout';
}


Confluence.Templates.PageLayout.cellLayout = function(opt_data, opt_ignored) {
  return '<div class="cell"><div class="innerCell"></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.PageLayout.cellLayout.soyTemplateName = 'Confluence.Templates.PageLayout.cellLayout';
}


Confluence.Templates.PageLayout.smallCellLayout = function(opt_data, opt_ignored) {
  return '<div class="cell aside"><div class="innerCell"></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.PageLayout.smallCellLayout.soyTemplateName = 'Confluence.Templates.PageLayout.smallCellLayout';
}


Confluence.Templates.PageLayout.headerLayout = function(opt_data, opt_ignored) {
  return '<div class="header"><div class="innerCell"></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.PageLayout.headerLayout.soyTemplateName = 'Confluence.Templates.PageLayout.headerLayout';
}


Confluence.Templates.PageLayout.footerLayout = function(opt_data, opt_ignored) {
  return '<div class="footer"><div class="innerCell"></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.PageLayout.footerLayout.soyTemplateName = 'Confluence.Templates.PageLayout.footerLayout';
}


Confluence.Templates.PageLayout.columnLayout = function(opt_data, opt_ignored) {
  return '<div class="columnLayout"></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.PageLayout.columnLayout.soyTemplateName = 'Confluence.Templates.PageLayout.columnLayout';
}


Confluence.Templates.PageLayout.emptyLayout2 = function(opt_data, opt_ignored) {
  return '<div class="contentLayout2">' + Confluence.Templates.PageLayout.emptySection2(null) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.PageLayout.emptyLayout2.soyTemplateName = 'Confluence.Templates.PageLayout.emptyLayout2';
}


Confluence.Templates.PageLayout.emptySection2 = function(opt_data, opt_ignored) {
  return '<div class="columnLayout single" data-layout="single">' + Confluence.Templates.PageLayout.cell2({type: 'normal'}) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.PageLayout.emptySection2.soyTemplateName = 'Confluence.Templates.PageLayout.emptySection2';
}


Confluence.Templates.PageLayout.newSection2 = function(opt_data, opt_ignored) {
  return '<div class="columnLayout single" data-layout="single">' + Confluence.Templates.PageLayout.cell2({type: 'normal'}) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.PageLayout.newSection2.soyTemplateName = 'Confluence.Templates.PageLayout.newSection2';
}


Confluence.Templates.PageLayout.cell2 = function(opt_data, opt_ignored) {
  return '<div class="cell ' + soy.$$escapeHtml(opt_data.type) + '" data-type="' + soy.$$escapeHtml(opt_data.type) + '"><div class="innerCell">' + ((opt_data.content) ? soy.$$filterNoAutoescape(opt_data.content) : '') + '</div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.PageLayout.cell2.soyTemplateName = 'Confluence.Templates.PageLayout.cell2';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-layout:pagelayout', location = 'js/pagelayout/tinymce-page-layout.js' */
define("confluence-page-layout/pagelayout/tinymce-page-layout",["jquery","ajs","tinymce"],function(e,f,c){function j(a){a=e(a.getBody());if(a.children(".contentLayout").length)return!1;a.children(".contentLayout2");return!0}var i=function(a){var c=e("#pagelayout-menu"),h=e(".icon-check",c);i=function(a){var b=h.not(".hidden"),a=h.siblings("."+a.name).siblings();b.addClass("hidden");a.removeClass("hidden")};i(a)};return{init:function(a){function l(){j(a)||c.plugins.PageLayoutPlugin.PageLayout.needsContentEditableBody(b.getLayout())||
c.webkit||f.Rte.editorFocus(a)}function h(){c.isGecko&&setTimeout(function(){a.focus();a.dom.getRoot().focus()},1)}function k(){var g=e("#pagelayout-menu").parent(),d=e("#page-layout-2-group");j(a)?(g.addClass("hidden"),d.removeClass("hidden"),b=new c.plugins.PageLayoutPlugin.PageLayout2(a),c.plugins.PageLayoutPlugin.PageLayout2.needsContentEditableBody()&&e(a.getBody()).attr("contenteditable","true")):(g.removeClass("hidden"),d.addClass("hidden"),b=new c.plugins.PageLayoutPlugin.PageLayout(a),c.plugins.PageLayoutPlugin.PageLayout.needsContentEditableBody(b.getLayout())?
b.body.attr("contenteditable","true"):h(),i(b.getLayout()))}var b;this.ed=a;"comment"!==f.Meta.get("content-type")&&(a.onInit.add(function(){a.undoManager.clear();a.undoManager.add();k();f.bind("editor.external.change",function(){b.setup()});f.bind("rte-ready",function(){var b=e('[contenteditable="true"]',a.getBody()),d=!1!==f.Meta.get("editor-auto-focus");b.attr("contenteditable","false");b.attr("contenteditable","true");d&&f.Rte.editorFocus(a)});a.selection.onSetContent.add(l);j(a)&&a.undoManager.onUndo.add(function(){c.plugins.PageLayoutPlugin.PageLayout2.needsContentEditableBody()&&
b.body.attr("contenteditable","true");h()})}),e("#pagelayout-menu").delegate("li.dropdown-item a","click",function(){a.execCommand("mcePageLayout",!1,c.plugins.PageLayoutPlugin.PageLayout.getLayoutOptions(this))}),a.addCommand("mcePageLayoutInitialize",function(){a.undoManager.add();b.createInitialLayoutIfNone()}),a.addCommand("mcePageLayout",function(g,d){a.undoManager.add();b.setLayout(d);i(b.getLayout())}),a.addCommand("mcePageLayoutAddSection",function(g,d){a.undoManager.add();b.addSection&&b.addSection(d&&
d.section)}),a.addCommand("mcePageLayoutChangeSection",function(g,d){a.undoManager.add();b.changeSection&&b.changeSection(d&&d.layout,d&&d.section)}),a.addCommand("mcePageLayoutRemoveSection",function(g,d){a.undoManager.add();b.removeSection&&b.removeSection(d&&d.section)}),a.addCommand("mcePageLayoutMoveSectionUp",function(g,d){a.undoManager.add();b.moveSectionUp&&b.moveSectionUp(d&&d.section)}),a.addCommand("mcePageLayoutMoveSectionDown",function(g,d){a.undoManager.add();b.moveSectionDown&&b.moveSectionDown(d&&
d.section)}),a.onSetContent.add(k),a.onClick.add(function(a,d){var b=e(d.target);b.is("div.cell")&&b.children(".innerCell").focus();if(c.isWebKit&&(d.target===a.getBody()||d.target===a.getBody().parentNode))b=b.find(".innerCell"),b.length&&(a.execCommand("selectAll"),b=d.target!==a.getBody(),a.selection.collapse(b))}),!c.isIE9&&a.onKeyUp.add(function(a,b){var c=b.keyCode;if(8!==c&&46!==c)return!0;c=a.selection.getRng(!0).startContainer;if(e(c).closest(".contentLayout,.contentLayout2",a.getBody()).length&&
(c=e(c).closest(".innerCell"))&&c.length&&a.dom.isEmpty(c.clone()[0]))c.html('<p><br data-mce-bogus="1"></p>'),a.selection.select(c[0],!0),a.selection.collapse(!0)}))},execCommand:function(a){if("selectAll"===a){var a=this.ed,c=a.getBody(),e,f;if("true"==a.dom.getAttrib(c,"contenteditable"))return!1;e=a.dom.select(".innerCell",c);c=e[0];e=e[e.length-1];f=a.dom.createRng();f.setStart(c,0);f.setEnd(e,e.childNodes.length);a.selection.setRng(f);return!0}return!1},getInfo:function(){return{longname:"Page Layout Plugin",
author:"Atlassian",authorurl:"http://www.atlassian.com",infourl:"http://www.atlassian.com",version:"1.0"}}}});require("confluence/module-exporter").safeRequire("confluence-page-layout/pagelayout/tinymce-page-layout",function(e){var f=require("tinymce");f.create("tinymce.plugins.PageLayoutPlugin",e);f.PluginManager.add("pagelayoutplugin",f.plugins.PageLayoutPlugin)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-layout:pagelayout', location = 'js/pagelayout/page-layout.js' */
define("confluence-page-layout/pagelayout/page-layout",["jquery","confluence/templates","ajs"],function(c,k,r){var h=function(a){this.editor=a;this.body=c(a.getBody());this.setup()};h.DEFAULT_LAYOUT={name:"pagelayout-none",columns:0};h.prototype.setup=function(){var a=c(".contentLayout",this.body);a.length?(n(a),o(a,this.body,this.editor),this.editor.undoManager.add()):this.body.attr("contenteditable","true")};h.prototype.setLayout=function(a){var g=require("tinymce"),b;b=c(".contentLayout",this.body);
if(h.getLayoutOptions(b).name!==a.name){r.trigger("analyticsEvent",{name:"PageLayoutEvent.pageLayoutChanged",data:{name:a.name}});if(1===b.length)b=b.clone();else{var d=this.editor;b=this.body;var e=k.PageLayout.contentLayout(),d=d.dom.create("div");d.innerHTML=e;b=c(d).children().html(b.html())}n(b);var e=b,d=c(".columnLayout > .cell",e).length,i=a.name,j=a.columns,f;if(0===d){f=e.html();for(e.html(k.PageLayout.columnLayout());d!==j.length;)p(e),d++}i=i.substring(i.indexOf("-")+1);i=i.substring(0,
Math.max(0,i.indexOf("-"))||void 0);c(".columnLayout",e).attr("class","columnLayout "+i+"Columns");if(j)for(c(".columnLayout > .cell",e).each(function(a,b){void 0!==j[a]&&c(b).attr("class","cell "+j[a])});d!==j.length;)if(d<j.length)p(e),d++;else{var i=c(".columnLayout .cell:nth-child("+d+") .innerCell",e),s=c(".columnLayout > .cell:nth-child("+(d-1)+") .innerCell",e),t=l(i);s.append(t);i.parent().remove();d--}else{var m="";c(".columnLayout > .cell",e).each(function(){m+=l(c(".innerCell",this))});
c(".columnLayout",e).replaceWith(m)}f&&q(e).html(f);a.header?(f=b,c(".header",f).length||f.prepend(k.PageLayout.headerLayout())):(e=b,f=c(".header",e),e=q(e),d=l(c(".innerCell",f)),e.length?(e.prepend(d),f.remove()):f.replaceWith(d));a.footer?(f=b,c(".footer",f).length||f.append(k.PageLayout.footerLayout())):(e=b,f=c(".footer",e),e=c(".columnLayout > .cell:last-child .innerCell",e),d=l(c(".innerCell",f)),e.length?(e.append(d),f.remove()):f.replaceWith(d));h.needsContentEditableBody(a)?(b=b.contents().unwrap(),
this.body.attr("contenteditable","true")):(o(b,this.body,this.editor),b.attr("data-atlassian-layout",JSON.stringify(a)));this.body.empty().append(b);g.isIE&&this.editor.dom.setRoot();b=this.editor;a=b.selection;g=a.getRng(!0);f=c('[contenteditable="true"]',b.getBody());f.length?(b.focus(),f[0].focus(),b=f.children()[0],g.setStart(b,0),g.setEnd(b,0),a.setRng(g)):b.focus()}};h.prototype.getLayout=function(){var a=c(".contentLayout",this.body);return a.length&&a.attr("data-atlassian-layout")?JSON.parse(a.attr("data-atlassian-layout")):
h.DEFAULT_LAYOUT};h.getLayoutOptions=function(a){return(a=(a.jquery?a:c(a)).attr("data-atlassian-layout"))?JSON.parse(a):h.DEFAULT_LAYOUT};h.needsContentEditableBody=function(a){return!(a.header||a.footer||a.columns)};var l=function(a){a=a.jquery?a:c(a);if(a.length)for(var g=a[0].childNodes,b=0;b<g.length;b++){var d=g[b];if(!("P"===d.nodeName&&1===d.childNodes.length&&"BR"===d.firstChild.nodeName))return a.html()}return""},n=function(a){for(var g,b,a=c(".cell, .header, .footer",a),d=0,e=a.length;d<
e;d++)g=c(a[d]),b=g.html(),c(".innerCell",g).length||(g.removeAttr("contenteditable"),g.html('<div class="innerCell">'+b+"</div>"))},o=function(a,g,b){var d=require("tinymce");g.attr("contenteditable","false");c(".innerCell",a).each(function(){var a=c(this);a.attr("contenteditable","true");a.children().length||a.append("<p><br /></p>")});d.isIE&&g.delegate(".innerCell","focus.pageLayout",function(){b.dom.settings.root_element=this})},q=function(a){return c(".columnLayout > .cell:first-child .innerCell",
a)},p=function(a){return c(".columnLayout",a).append(k.PageLayout.cellLayout())};return h});require("confluence/module-exporter").exportModuleAsGlobal("confluence-page-layout/pagelayout/page-layout","tinymce.plugins.PageLayoutPlugin.PageLayout");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-layout:pagelayout', location = 'js/pagelayout/page-layout-2.js' */
define("confluence-page-layout/pagelayout/page-layout-2",["jquery","confluence/templates","ajs"],function(h,n,f){function q(a,b,c,d){var e=a.find(".cell"),f=e.length,i=h(),l=b.cells.length,j=[],m=[],g,k;a.attr("class","columnLayout");a.addClass(b.id);a.attr("data-layout",b.id);g=0;for(k=f;g<k;g++)m=e.eq(g).detach(),j.push(s(m.children(".innerCell")));g=0;for(k=l;g<k;g++)i=i.add(n.PageLayout.cell2({type:b.cells[g].type||""}));if(f<=l)m=j;else{m=j.slice(0,l);g=l;for(k=f;g<k;g++)m[l-1]+=j[g]}a.prepend(i);
g=0;for(k=l;g<k;g++)i.eq(g).find(".innerCell").html(m[g]);p(a,c,d)}var e=function(a){this.editor=a;this.body=h(a.getBody());this.setup()};e.prototype.setup=function(){var a=this.body.find(".contentLayout2");a.length?(p(a,this.body,this.editor),this.editor.undoManager.add()):this.body.attr("contenteditable","true")};e.prototype.addSection=function(a){var b=this,c=h(n.PageLayout.newSection2()),d=a||i(this.body,this.editor,!0);if(d.length){var o=e.Layouts.get(d.attr("data-layout"));this.editor.undoManager.ignore(function(){q(c,
o,b.body,b.editor);d.after(c)});j(this.editor,c);f.trigger("editor.page-layout.add-section",{section:c})}else this.createInitialLayoutIfNone()};e.prototype.changeSection=function(a,b){var c=this;e.isPageLayout()||this.createInitialLayoutIfNone();var d=b||i(this.body,this.editor,!1);if(d.length){var o=e.Layouts.get(d.attr("data-layout"));this.editor.undoManager.ignore(function(){q(d,a,c.body,c.editor)});j(this.editor,d);f.trigger("editor.page-layout.change-layout",{section:d,originalLayout:o,currentLayout:a})}};
e.prototype.removeSection=function(a){if(e.isPageLayout()){var a=a||i(this.body,this.editor,!0),b=a.next(),c=a.prev(),d;b.length?(d=b,a.remove()):c.length?(d=c,a.remove()):(a.closest(".contentLayout2").remove(),a=this.body.find(".contentLayout2").find(".columnLayout").first(),a.length?d=a:(a=this.editor,a.getBody().setAttribute("contenteditable",!0),a.setContent("<p></p>"),r(a),a=h("#rte-button-pagelayout-2"),a.hasClass("active")&&a.click()));d&&d.length&&j(this.editor,d);f.trigger("editor.page-layout.remove-section",
{})}};e.prototype.moveSectionUp=function(a){if(e.isPageLayout()){var a=a||i(this.body,this.editor,!0),b=a.prev();b.length&&(a.detach(),b.before(a),j(this.editor,a));f.trigger("editor.page-layout.move-section-up",{section:a})}};e.prototype.moveSectionDown=function(a){if(e.isPageLayout()){var a=a||i(this.body,this.editor,!0),b=a.next();b.length&&(a.detach(),b.after(a),j(this.editor,a));f.trigger("editor.page-layout.move-section-down",{section:a})}};e.prototype.createInitialLayoutIfNone=function(){if(!e.isPageLayout()){var a=
h(n.PageLayout.emptyLayout2()),b=a.find(".innerCell"),c=this.body.children().detach();b.append(c);this.body.append(a);p(a,this.body,this.editor);r(this.editor)}};e.isPageLayout=function(){return!!h(f.Rte.getEditor().getBody()).find("div.contentLayout2").length};e.needsContentEditableBody=function(){return!e.isPageLayout()};e.Layouts=[{id:"single",name:"Single column section",cells:[{type:"normal"}]},{id:"two-equal",name:"Two column section",cells:[{type:"normal"},
{type:"normal"}]},{id:"two-left-sidebar",name:"Two column section with left side-bar",cells:[{type:"aside"},{type:"normal"}]},{id:"two-right-sidebar",name:"Two column section with right side-bar",cells:[{type:"normal"},{type:"aside"}]},{id:"three-equal",name:"Three column section",cells:[{type:"normal"},{type:"normal"},{type:"normal"}]},{id:"three-with-sidebars",name:"Three column section with side-bars",cells:[{type:"sidebars"},
{type:"normal"},{type:"sidebars"}]}];e.Layouts.get=function(a){for(var b=e.Layouts,c=0,d=b.length;c<d;c++)if(b[c].id===a)return b[c];return null};e.Layouts.findNearestSection=function(a){var b=f.Rte.getEditor(),c=h(b.getBody());return i(c,b,a)};var s=function(a){a=h(a);if(a.length)for(var b=a[0].childNodes,c=0;c<b.length;c++){var d=b[c];if(!("P"===d.nodeName&&1===d.childNodes.length&&"BR"===d.firstChild.nodeName))return a.html()}return""},i=function(a,b,c){b=h(b.selection.getRng(!0).startContainer).closest(".columnLayout");
!b.length&&c&&(b=a.find(".columnLayout").last());return b},p=function(a,b,c){var d=require("tinymce");b.attr("contenteditable","false");h(".innerCell",a).each(function(){var a=h(this);a.attr("contenteditable","true");a.children().length||a.append("<p><br /></p>")});d.isIE&&b.delegate(".innerCell","focus.pageLayout",function(){c.dom.settings.root_element=this})},r=function(a){var b=a.selection,c=b.getRng(!0),d=h('[contenteditable="true"]',a.getBody());d.length?(a.focus(),d[0].focus(),a=d.children()[0],
c.setStart(a,0),c.setEnd(a,0),b.setRng(c)):a.focus()},j=function(a,b){var c=a.selection,d=c.getRng(!0),e=b.find('[contenteditable="true"]').first(),h=e.children();h.length?(a.focus(),e[0].focus(),e=h[0],d.setStart(e,0),d.setEnd(e,0),c.setRng(d),f.Rte.showElement(e)):a.focus()};return e});require("confluence/module-exporter").exportModuleAsGlobal("confluence-page-layout/pagelayout/page-layout-2","tinymce.plugins.PageLayoutPlugin.PageLayout2");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-layout:pagelayout', location = 'js/pagelayout/tinymce-page-layout-toolbar.js' */
define("confluence-page-layout/pagelayout/tinymce-page-layout-toolbar",["jquery","ajs","tinymce","document","confluence/legacy"],function(d,b,e,f,a){var i=function(a){var a=a||e.plugins.PageLayoutPlugin.PageLayout2.Layouts.findNearestSection(),c=a.attr("data-layout"),a=d("#rte-toolbar-row-pl2-toolbar").find(".layouts button"),c=a.find(".pl2-layout-"+c).closest(".aui-button");c.hasClass("active")||(a.filter(".active").removeClass("active"),c.addClass("active"))};return{initContextToolbars:function(p,
c){var j=d(f),m=d("#page-layout-2"),g=d("#rte-button-pagelayout-2");c.addCommand("mcePageLayoutsToolbar",function(){g.hasClass("active")?j.trigger("removeContextToolbarRow.Toolbar",{id:"pl2-toolbar",animate:!0}):(j.trigger("createContextToolbarRow.Toolbar",{id:"pl2-toolbar",buttons:a.Editor.PageLayoutToolbar.Buttons,topToolbar:!0,animate:!0}),i(),c.execCommand("mcePageLayoutInitialize"));g.toggleClass("active")});g.click(function(a){a.preventDefault();m.hasClass("disabled")||c.execCommand("mcePageLayoutsToolbar",
!1,null)});c.onNodeChange.add(function(a,c,b){a=d(b).closest(".columnLayout");i(a)});for(var k=e.plugins.PageLayoutPlugin.PageLayout2.Layouts,l=[],n=function(b){l.push(new a.Editor.Toolbar.Components.Button({text:b.name,iconClass:"icon-fat pl2-layout-"+b.id,click:function(){c.execCommand("mcePageLayoutChangeSection",!1,{layout:b})}}))},h=0,o=k.length;h<o;h++)n(k[h]);return{Buttons:[new a.Editor.Toolbar.Components.Group([new a.Editor.Toolbar.Components.Button({triggerText:"Add section",
id:"add-layout-section",tooltip:"Add a new section below",iconClass:"pl2-layout-add-section",click:function(){c.execCommand("mcePageLayoutAddSection")}}),new a.Editor.Toolbar.Components.Button({triggerText:"Remove section",id:"remove-layout-section",tooltip:"Remove the current section",iconClass:"pl2-layout-remove-section",click:function(){c.execCommand("mcePageLayoutRemoveSection")}})]),new a.Editor.Toolbar.Components.Group([new a.Editor.Toolbar.Components.Button({triggerText:"Move up",
id:"move-up-layout-section",tooltip:"Move section up",iconClass:"pl2-layout-move-section-up",click:function(){c.execCommand("mcePageLayoutMoveSectionUp")}}),new a.Editor.Toolbar.Components.Button({triggerText:"Move down",id:"move-down-layout-section",tooltip:"Move section down",iconClass:"pl2-layout-move-section-down",click:function(){c.execCommand("mcePageLayoutMoveSectionDown")}})]),
new a.Editor.Toolbar.Components.Group(l,{id:"pagelayout2-toolbar",text:"Apply layout",groupClass:"layouts"}),new a.Editor.Toolbar.Components.Group([new a.Editor.Toolbar.Components.Button({text:"Close toolbar",iconClass:"icon-close",click:function(){c.execCommand("mcePageLayoutsToolbar",!1,null)}})],{groupClass:"close"})],Events:[]}}}});
require("confluence/module-exporter").safeRequire("confluence-page-layout/pagelayout/tinymce-page-layout-toolbar",function(d){var b=require("confluence/meta"),e=require("jquery"),f=require("document"),a=require("confluence/legacy");"comment"!==b.get("content-type")&&e(f).bind("initContextToolbars.Toolbar",function(b,e){a.Editor.PageLayoutToolbar=d.initContextToolbars(b,e)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
