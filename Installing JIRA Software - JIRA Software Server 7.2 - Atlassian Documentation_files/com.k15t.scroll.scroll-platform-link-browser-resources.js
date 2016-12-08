;try {
/* module-key = 'com.k15t.scroll.scroll-platform:link-browser-resources', location = '/com/k15t/scroll/platform/ui/linkbrowserext/link-browser.soy' */
// This file was automatically generated from link-browser.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.LinkBrowser.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.LinkBrowser == 'undefined') { Confluence.Templates.LinkBrowser = {}; }


Confluence.Templates.LinkBrowser.pagetreePanel = function(opt_data, opt_ignored) {
  return '<div id="plugin_pagetree" class="sv-pagetree plugin_pagetree"><ul class="children"></ul></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.LinkBrowser.pagetreePanel.soyTemplateName = 'Confluence.Templates.LinkBrowser.pagetreePanel';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.k15t.scroll.scroll-platform:link-browser-resources', location = '/com/k15t/scroll/platform/ui/linkbrowserext/link-browser-tab-pagetree.js' */
(function(a){AJS.bind("dialog-created.link-browser",function(f,c){var g="pagetree";var k;var d;var h;function i(l){var n=l.closest("span").attr("id"),e=n&&/[0-9]+/.exec(n);return e&&e[0]}function b(e){a(".sv-pagetree li.node").removeClass("highlight");e.parent().addClass("highlight");var l=e.parent().attr("data-master-page-id");if(l){e.attr({"data-base-url":Confluence.getBaseUrl(),"data-linked-resource-id":l,"data-linked-resource-type":"page","data-linked-resource-default-alias":e.parent().attr("data-scroll-page-title"),"data-scroll-page-id":e.parent().attr("data-scroll-page-id")});e.addClass("confluence-link");var m=Confluence.Link.fromNode(e[0],e.text());c.setLink(m,true);c.focusLinkText()}else{AJS.log("link-browser-tab-pagetree.js: Unable to extract page id from pagetree node")}}function j(e){if(AJS.params.spaceKey){d=new Scroll.Versions.Pagetree(".sv-pagetree",{spaceKey:AJS.params.spaceKey,expandedPageId:e,versionId:Scroll.Versions.Context?Scroll.Versions.Context.user.workingVersion.versionId:"current",languageKey:Scroll.Versions.Context?Scroll.Versions.Context.user.currentLanguage.key:"all",sortBy:"position",isShowToplevelPages:"true"})}else{AJS.log("link-browser-tab-pagetree.js: spacekey is undefined")}}c.tabs[g]={hasBreadcrumbs:true,createPanel:function(l){AJS.log("link-browser-tab-pagetree.js: createPanel");k=a(".pagetree-panel div.sv-pagetree",l.baseElement);k.attr("data-root-page-id","");a("a",k).live("click",function(m){m.preventDefault();b(a(this));d.setExpandedScrollPageId(a(this).parent().attr("data-scroll-page-id"))}).die("dblclick.link-pagetree").live("dblclick.link-pagetree",function(m){m.preventDefault();d.setExpandedScrollPageId(a(this).parent().attr("data-scroll-page-id"));a("#link-browser-insert").click()});var e=Confluence.PageLocation.get();AJS.log(e)},onSelect:function(){AJS.debug("link-browser-tab-pagetree.js: onSelect");h=this.openedLink||c.getLink();var e;if(h&&h.getResourceType()==="page"){e=h.getResourceId();c.setLink(h,true)}else{e=""}j(e)},handlesLink:function(e){return e.getResourceType()==="page"}}})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
