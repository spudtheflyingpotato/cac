;try {
/* module-key = 'com.k15t.scroll.scroll-platform:includeplus-includepicker-webresources', location = '/com/k15t/scroll/platform/ui/includeplus/includepicker/includepicker.soy' */
// This file was automatically generated from includepicker.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Scroll.Versions.Templates.IncludePlus.Edit.
 */

if (typeof Scroll == 'undefined') { var Scroll = {}; }
if (typeof Scroll.Versions == 'undefined') { Scroll.Versions = {}; }
if (typeof Scroll.Versions.Templates == 'undefined') { Scroll.Versions.Templates = {}; }
if (typeof Scroll.Versions.Templates.IncludePlus == 'undefined') { Scroll.Versions.Templates.IncludePlus = {}; }
if (typeof Scroll.Versions.Templates.IncludePlus.Edit == 'undefined') { Scroll.Versions.Templates.IncludePlus.Edit = {}; }


Scroll.Versions.Templates.IncludePlus.Edit.pageTree = function(opt_data, opt_ignored) {
  return '<div class="sv-pagetree" data-root-scroll-page-id="" data-space-key="' + soy.$$escapeHtml(opt_data.spaceKey) + '" data-version-id="' + soy.$$escapeHtml(opt_data.versionId) + '" data-variant-id="' + soy.$$escapeHtml(opt_data.variantId) + '" data-language-key="' + soy.$$escapeHtml(opt_data.languageKey) + '" data-expanded-scroll-page-id="' + soy.$$escapeHtml(opt_data.expandedScrollPageId) + '", data-is-show-toplevel="' + soy.$$escapeHtml(opt_data.isShowToplevelPages) + '"><div class="error"></div><ul class="children" style="margin-top: 0;"></ul></div>';
};
if (goog.DEBUG) {
  Scroll.Versions.Templates.IncludePlus.Edit.pageTree.soyTemplateName = 'Scroll.Versions.Templates.IncludePlus.Edit.pageTree';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.k15t.scroll.scroll-platform:includeplus-includepicker-webresources', location = '/com/k15t/scroll/platform/ui/includeplus/includepicker/includepicker.js' */
(function(a){var b=function(d){var l;var m;var i;var k=function(n){h(n);f();j();m.show();m.gotoPanel(0)};var h=function(n){l=(n.params&&n.params.scrollPageId)?n.params.scrollPageId:""};var f=function(){if(m){m.remove();m=null}m=new AJS.Dialog({height:480,width:640,closeOnOutsideClick:true,id:"includeplus-dialog"}).addHeader("Include+").addPanel("Browse",Scroll.Versions.Templates.IncludePlus.Edit.pageTree({rootPageId:"-1",spaceKey:AJS.params.spaceKey,versionId:(Scroll.Versions.Context&&Scroll.Versions.Context.user&&Scroll.Versions.Context.user.workingVersion?Scroll.Versions.Context.user.workingVersion.versionId:"current"),variantId:(Scroll.Versions.Context&&Scroll.Versions.Context.user?Scroll.Versions.Context.user.currentVariant&&Scroll.Versions.Context.user.currentVariant.id:""),languageKey:(Scroll.Versions.Context&&Scroll.Versions.Context.user?Scroll.Versions.Context.user.currentLanguage.key:""),expandedScrollPageId:l,isShowToplevelPages:true}),"sv-browse-pagetree").addPanel("","","sv-dummy-panel").addButton("Insert",function(n,o){c();n.remove();m=null},"insert-button").addLink("Cancel",function(n,o){n.remove();m=null});if(!l){a(".insert-button").attr("disabled","disabled")}a("#includeplus-dialog li.page-menu-item:last-child").hide()};var j=function(){i=new Scroll.Versions.Pagetree(".sv-pagetree",{});a("#includeplus-dialog .sv-pagetree a").die("click.includeplus").live("click.includeplus",function(){g(a(this).parent());return false}).die("dblclick.includeplus").live("dblclick.includeplus",function(){g(a(this).parent());c();m.remove();m=null;return false})};var g=function(n){l=n.data().scrollPageId;i.setExpandedScrollPageId(l);a(".sv-pagetree li.node").removeClass("highlight");n.addClass("highlight");a(".insert-button").removeAttr("disabled")};var c=function(){var n={contentId:Confluence.Editor.getContentId(),macro:e()};tinymce.confluence.MacroUtils.insertMacro(n)};var e=function(){var o=i.findNode(l);var n=Scroll.Versions.Context&&Scroll.Versions.Context.user&&Scroll.Versions.Context.user.workingVersion;return{name:"includeplus",defaultParameterValue:(n?null:o.data().scrollPageId),params:{scrollPageId:(n?o.data().scrollPageId:""),scrollEditorDisplayTitle:o.data().scrollPageTitle,scrollEditorUrl:a(o).find("> a").attr("href")}}};k(d)};AJS.bind("init.rte",function(){AJS.MacroBrowser.setMacroJsOverride("includeplus",{opener:function(c){b(c)}});AJS.Confluence.PropertyPanel.Macro.registerButtonHandler("includePlusGotoPage",function(h,c){var g=AJS.$(c);var d=g.data("macro-parameters");var f=/scrollEditorUrl=([^|]*)/.exec(d);if(f&&f.length==2){window.open(f[1],"_blank")}console.log("PROPERTY PANEL "+d)})})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
