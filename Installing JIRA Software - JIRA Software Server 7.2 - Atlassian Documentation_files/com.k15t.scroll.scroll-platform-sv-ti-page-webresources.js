;try {
/* module-key = 'com.k15t.scroll.scroll-platform:sv-ti-page-webresources', location = '/com/k15t/scroll/platform/ui/theme-integration/sv-ti-page.soy' */
// This file was automatically generated from sv-ti-page.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Scroll.Versions.Templates.ThemeIntegration.Page.
 */

if (typeof Scroll == 'undefined') { var Scroll = {}; }
if (typeof Scroll.Versions == 'undefined') { Scroll.Versions = {}; }
if (typeof Scroll.Versions.Templates == 'undefined') { Scroll.Versions.Templates = {}; }
if (typeof Scroll.Versions.Templates.ThemeIntegration == 'undefined') { Scroll.Versions.Templates.ThemeIntegration = {}; }
if (typeof Scroll.Versions.Templates.ThemeIntegration.Page == 'undefined') { Scroll.Versions.Templates.ThemeIntegration.Page = {}; }


Scroll.Versions.Templates.ThemeIntegration.Page.pageTitle = function(opt_data, opt_ignored) {
  return '<span class="sv-ti-title-text">' + soy.$$escapeHtml(opt_data.scrollPageTitle) + '</span>';
};
if (goog.DEBUG) {
  Scroll.Versions.Templates.ThemeIntegration.Page.pageTitle.soyTemplateName = 'Scroll.Versions.Templates.ThemeIntegration.Page.pageTitle';
}


Scroll.Versions.Templates.ThemeIntegration.Page.pageKey = function(opt_data, opt_ignored) {
  return '' + ((opt_data.scrollPageKey) ? '<a href="' + soy.$$escapeHtml(contextPath) + soy.$$escapeHtml(opt_data.scrollPageKeyUrl) + '" class="sv-scroll-page-key sv-ti-done">(<span>' + soy.$$escapeHtml(opt_data.scrollPageKey) + '</span>)</a>' : '');
};
if (goog.DEBUG) {
  Scroll.Versions.Templates.ThemeIntegration.Page.pageKey.soyTemplateName = 'Scroll.Versions.Templates.ThemeIntegration.Page.pageKey';
}


Scroll.Versions.Templates.ThemeIntegration.Page.breadcrumbs = function(opt_data, opt_ignored) {
  var output = '';
  var limit__soy16 = 2;
  var breadcrumbList17 = opt_data.breadcrumbs;
  var breadcrumbListLen17 = breadcrumbList17.length;
  for (var breadcrumbIndex17 = 0; breadcrumbIndex17 < breadcrumbListLen17; breadcrumbIndex17++) {
    var breadcrumbData17 = breadcrumbList17[breadcrumbIndex17];
    output += ((breadcrumbIndex17 == 1 && opt_data.breadcrumbs.length > limit__soy16) ? '<li id="sv-ti-breadcrumb-ellipsis" title="' + soy.$$escapeHtml("Show all breadcrumbs") + '"><span><strong>\u2026</strong></span></li>' : '') + '<li class="sv-breadcrumb ' + ((breadcrumbIndex17 >= limit__soy16 - 1 && breadcrumbIndex17 != opt_data.breadcrumbs.length - 1) ? 'sv-ti-hidden-crumb' : '') + '"><span class="' + soy.$$escapeHtml(breadcrumbData17.cssClass) + '"> <a href="' + soy.$$escapeHtml(contextPath) + soy.$$escapeHtml(breadcrumbData17.target) + '" title="' + soy.$$escapeHtml(breadcrumbData17.displayTitle) + '">' + soy.$$escapeHtml(breadcrumbData17.displayTitle) + '</a></span></li>';
  }
  return output;
};
if (goog.DEBUG) {
  Scroll.Versions.Templates.ThemeIntegration.Page.breadcrumbs.soyTemplateName = 'Scroll.Versions.Templates.ThemeIntegration.Page.breadcrumbs';
}


Scroll.Versions.Templates.ThemeIntegration.Page.themeIntegration = function(opt_data, opt_ignored) {
  return Scroll.Versions.Templates.ThemeIntegration.Page.themeIntegrationHead({rootDivClass: 'sv-pagetree sv-ti-done', spaceKey: opt_data.spaceKey, Scroll: opt_data.Scroll}) + '<ul class="sv-pt-children"></ul></div>';
};
if (goog.DEBUG) {
  Scroll.Versions.Templates.ThemeIntegration.Page.themeIntegration.soyTemplateName = 'Scroll.Versions.Templates.ThemeIntegration.Page.themeIntegration';
}


Scroll.Versions.Templates.ThemeIntegration.Page.themeIntegrationHead = function(opt_data, opt_ignored) {
  return '' + Scroll.Versions.Templates.ThemeIntegration.Page.themeIntegrationHead2({rootElement: 'div', rootClasses: opt_data.rootDivClass, spaceKey: opt_data.spaceKey, Scroll: opt_data.Scroll});
};
if (goog.DEBUG) {
  Scroll.Versions.Templates.ThemeIntegration.Page.themeIntegrationHead.soyTemplateName = 'Scroll.Versions.Templates.ThemeIntegration.Page.themeIntegrationHead';
}


Scroll.Versions.Templates.ThemeIntegration.Page.themeIntegrationHead2 = function(opt_data, opt_ignored) {
  return '<' + soy.$$escapeHtml(opt_data.rootElement) + ' class="' + soy.$$escapeHtml(opt_data.rootClasses) + '" data-root-scroll-page-id="' + soy.$$escapeHtml(opt_data.Scroll.Versions.Context.user.settings.isShowTopLevelPages ? '' : opt_data.Scroll.Versions.Context.space.homePage.scrollPageId) + '" data-root-page-id="' + soy.$$escapeHtml(opt_data.Scroll.Versions.Context.user.settings.isShowTopLevelPages ? '' : opt_data.Scroll.Versions.Context.space.homePage.pageId) + '" data-space-key="' + soy.$$escapeHtml(opt_data.spaceKey) + '" data-version-id="' + soy.$$escapeHtml(opt_data.Scroll.Versions.Context.user.workingVersion.versionId) + '" data-variant-id="' + soy.$$escapeHtml(opt_data.Scroll.Versions.Context.user.currentVariant.id) + '" data-language-key="' + soy.$$escapeHtml(opt_data.Scroll.Versions.Context.user.currentLanguage.encodedKey) + '" data-expanded-scroll-page-id="' + soy.$$escapeHtml(opt_data.Scroll.Versions.Context.page.scrollPageId) + '" data-is-show-unavailable-pages="' + soy.$$escapeHtml(opt_data.Scroll.Versions.Context.user.settings.isShowUnavailablePages) + '" data-is-remember-tree-state="' + soy.$$escapeHtml(opt_data.Scroll.Versions.Context.user.settings.isRememberTreeState) + '" data-sort-by="position" data-reverse-order="false" data-start-depth="0" data-is-show-toplevel="' + soy.$$escapeHtml(opt_data.Scroll.Versions.Context.user.settings.isShowTopLevelPages) + '" data-is-show-unavailable="' + soy.$$escapeHtml(opt_data.Scroll.Versions.Context.user.settings.isShowUnavailablePages) + '"><div class="error" style="clear: both;"></div><div class="sv-pagetree-loader sv-spinner"></div>';
};
if (goog.DEBUG) {
  Scroll.Versions.Templates.ThemeIntegration.Page.themeIntegrationHead2.soyTemplateName = 'Scroll.Versions.Templates.ThemeIntegration.Page.themeIntegrationHead2';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.k15t.scroll.scroll-platform:sv-ti-page-webresources', location = '/com/k15t/scroll/platform/ui/theme-integration/sv-ti-confluence-default.soy' */
// This file was automatically generated from sv-ti-confluence-default.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Scroll.Versions.Templates.ThemeIntegration.ConfluenceDefault.
 */

if (typeof Scroll == 'undefined') { var Scroll = {}; }
if (typeof Scroll.Versions == 'undefined') { Scroll.Versions = {}; }
if (typeof Scroll.Versions.Templates == 'undefined') { Scroll.Versions.Templates = {}; }
if (typeof Scroll.Versions.Templates.ThemeIntegration == 'undefined') { Scroll.Versions.Templates.ThemeIntegration = {}; }
if (typeof Scroll.Versions.Templates.ThemeIntegration.ConfluenceDefault == 'undefined') { Scroll.Versions.Templates.ThemeIntegration.ConfluenceDefault = {}; }


Scroll.Versions.Templates.ThemeIntegration.ConfluenceDefault.defaultThemeFlyout = function(opt_data, opt_ignored) {
  return '<div class="page-tree-flyout-content hidden"><div class="acs-side-bar-flyout-wiki-wrapper">' + Confluence.Templates.Sidebar.Pages.renderPageContextualNav(opt_data.pageContextualNav) + '</div></div>';
};
if (goog.DEBUG) {
  Scroll.Versions.Templates.ThemeIntegration.ConfluenceDefault.defaultThemeFlyout.soyTemplateName = 'Scroll.Versions.Templates.ThemeIntegration.ConfluenceDefault.defaultThemeFlyout';
}


Scroll.Versions.Templates.ThemeIntegration.ConfluenceDefault.defaultThemeIntegration = function(opt_data, opt_ignored) {
  return Scroll.Versions.Templates.ThemeIntegration.Page.themeIntegrationHead({rootDivClass: 'plugin_pagetree sv-ti-pagetree sv-ti-done', spaceKey: opt_data.spaceKey, Scroll: opt_data.Scroll}) + '<ul class="plugin_pagetree_children_list plugin_pagetree_children_list_noleftspace"><div class="plugin_pagetree_children" ><ul class="sv-pt-children plugin_pagetree_children_list" ></ul></div></ul></div>';
};
if (goog.DEBUG) {
  Scroll.Versions.Templates.ThemeIntegration.ConfluenceDefault.defaultThemeIntegration.soyTemplateName = 'Scroll.Versions.Templates.ThemeIntegration.ConfluenceDefault.defaultThemeIntegration';
}


Scroll.Versions.Templates.ThemeIntegration.ConfluenceDefault.childrenDefaultTheme = function(opt_data, opt_ignored) {
  var output = '';
  var childList13 = opt_data.children;
  var childListLen13 = childList13.length;
  for (var childIndex13 = 0; childIndex13 < childListLen13; childIndex13++) {
    var childData13 = childList13[childIndex13];
    output += '<li class="' + Scroll.Versions.Templates.Pagetree.nodeClasses(childData13) + '"' + Scroll.Versions.Templates.Pagetree.nodeAttributes(childData13) + ' ><div class="plugin_pagetree_childtoggle_container" >' + ((childData13.hasChildren) ? '<a id="plusminus' + soy.$$escapeHtml(childData13.id) + '-0" class="plugin_pagetree_childtoggle icon ' + ((childData13.children.length > 0) ? 'icon-section-opened' : 'icon-section-closed') + ' sv-pt-toggle" href="#?src=contextnavpagetreemode" ></a>' : '<span class="no-children icon"></span>') + '</div><div class="plugin_pagetree_children_content"><span class="plugin_pagetree_children_span ' + ((childData13.id == opt_data.expandedId || childData13.scrollPageId == opt_data.expandedId) ? 'plugin_pagetree_current' : '') + '" id="childrenspan' + soy.$$escapeHtml(childData13.id) + '-0"><a href="' + soy.$$escapeHtml(contextPath) + soy.$$escapeHtml(childData13.urlPath) + ((childData13.urlPath.indexOf('?') > -1) ? '&' : '?') + 'src=contextnavpagetreemode" class="sv-pt-link">' + soy.$$escapeHtml(childData13.scrollPageTitle) + '</a></span></div><div id="children' + soy.$$escapeHtml(childData13.id) + '-0" class="plugin_pagetree_children_container">' + ((childData13.hasChildren) ? '<ul class="sv-pt-children plugin_pagetree_children_list" id="child_ul' + soy.$$escapeHtml(childData13.id) + '-0">' + Scroll.Versions.Templates.ThemeIntegration.ConfluenceDefault.childrenDefaultTheme({expandedId: opt_data.expandedId, children: childData13.children}) + '</ul>' : '') + '</div></li>';
  }
  return output;
};
if (goog.DEBUG) {
  Scroll.Versions.Templates.ThemeIntegration.ConfluenceDefault.childrenDefaultTheme.soyTemplateName = 'Scroll.Versions.Templates.ThemeIntegration.ConfluenceDefault.childrenDefaultTheme';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.k15t.scroll.scroll-platform:sv-ti-page-webresources', location = '/com/k15t/scroll/platform/ui/theme-integration/sv-ti-confluence-documentation.soy' */
// This file was automatically generated from sv-ti-confluence-documentation.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Scroll.Versions.Templates.ThemeIntegration.ConfluenceDocumentation.
 */

if (typeof Scroll == 'undefined') { var Scroll = {}; }
if (typeof Scroll.Versions == 'undefined') { Scroll.Versions = {}; }
if (typeof Scroll.Versions.Templates == 'undefined') { Scroll.Versions.Templates = {}; }
if (typeof Scroll.Versions.Templates.ThemeIntegration == 'undefined') { Scroll.Versions.Templates.ThemeIntegration = {}; }
if (typeof Scroll.Versions.Templates.ThemeIntegration.ConfluenceDocumentation == 'undefined') { Scroll.Versions.Templates.ThemeIntegration.ConfluenceDocumentation = {}; }


Scroll.Versions.Templates.ThemeIntegration.ConfluenceDocumentation.documentationThemeIntegration = function(opt_data, opt_ignored) {
  return Scroll.Versions.Templates.ThemeIntegration.Page.themeIntegrationHead({rootDivClass: 'plugin_pagetree_children sv-ti-pagetree sv-ti-done', spaceKey: opt_data.spaceKey, Scroll: opt_data.Scroll}) + '<ul class="sv-pt-children plugin_pagetree_children_list plugin_pagetree_children_list_noleftspace"></ul></div>';
};
if (goog.DEBUG) {
  Scroll.Versions.Templates.ThemeIntegration.ConfluenceDocumentation.documentationThemeIntegration.soyTemplateName = 'Scroll.Versions.Templates.ThemeIntegration.ConfluenceDocumentation.documentationThemeIntegration';
}


Scroll.Versions.Templates.ThemeIntegration.ConfluenceDocumentation.renderChildrenPageBottomAnchorDocumentationTheme = function(opt_data, opt_ignored) {
  return '<div id="children-section" class="pageSection group sv-ti-done children-hidden"><div class="section-header"><h2 id="children-section-title" class="section-title"><a href="#" class="children-show-hide">' + ((opt_data.childrenCount == 1) ? soy.$$escapeHtml("1 Child Page") : soy.$$escapeHtml(AJS.format("{0} Child Pages",opt_data.childrenCount))) + '</a></h2><a href="#" class="children-show-hide icon"></a></div><div id="page-children" class="pageSectionBody"></div></div>';
};
if (goog.DEBUG) {
  Scroll.Versions.Templates.ThemeIntegration.ConfluenceDocumentation.renderChildrenPageBottomAnchorDocumentationTheme.soyTemplateName = 'Scroll.Versions.Templates.ThemeIntegration.ConfluenceDocumentation.renderChildrenPageBottomAnchorDocumentationTheme';
}


Scroll.Versions.Templates.ThemeIntegration.ConfluenceDocumentation.renderChildrenPageBottomDocumentationTheme = function(opt_data, opt_ignored) {
  var output = '';
  var childList17 = opt_data.children;
  var childListLen17 = childList17.length;
  for (var childIndex17 = 0; childIndex17 < childListLen17; childIndex17++) {
    var childData17 = childList17[childIndex17];
    output += '<span class="child-display ' + Scroll.Versions.Templates.Pagetree.nodeClasses(childData17) + '"><span class="icon icon-page" title="' + soy.$$escapeHtml("Page") + '">' + soy.$$escapeHtml("Page") + ':</span> <a href="' + soy.$$escapeHtml(contextPath) + soy.$$escapeHtml(childData17.urlPath) + '">' + soy.$$escapeHtml(childData17.scrollPageTitle) + '</a></span></span>';
  }
  return output;
};
if (goog.DEBUG) {
  Scroll.Versions.Templates.ThemeIntegration.ConfluenceDocumentation.renderChildrenPageBottomDocumentationTheme.soyTemplateName = 'Scroll.Versions.Templates.ThemeIntegration.ConfluenceDocumentation.renderChildrenPageBottomDocumentationTheme';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.k15t.scroll.scroll-platform:sv-ti-page-webresources', location = '/com/k15t/scroll/platform/ui/theme-integration/sv-ti-refinedwiki-original.soy' */
// This file was automatically generated from sv-ti-refinedwiki-original.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Scroll.Versions.Templates.ThemeIntegration.RefinedWiki.
 */

if (typeof Scroll == 'undefined') { var Scroll = {}; }
if (typeof Scroll.Versions == 'undefined') { Scroll.Versions = {}; }
if (typeof Scroll.Versions.Templates == 'undefined') { Scroll.Versions.Templates = {}; }
if (typeof Scroll.Versions.Templates.ThemeIntegration == 'undefined') { Scroll.Versions.Templates.ThemeIntegration = {}; }
if (typeof Scroll.Versions.Templates.ThemeIntegration.RefinedWiki == 'undefined') { Scroll.Versions.Templates.ThemeIntegration.RefinedWiki = {}; }


Scroll.Versions.Templates.ThemeIntegration.RefinedWiki.refinedWikiOriginalThemeIntegration = function(opt_data, opt_ignored) {
  return '<div class="rw_pagetree">' + Scroll.Versions.Templates.ThemeIntegration.Page.themeIntegrationHead2({rootElement: 'ul', rootClasses: 'sv-ti-pagetree sv-ti-done rw_pagetree_list rw_toplevel rw_sidebar_content', spaceKey: opt_data.spaceKey, Scroll: opt_data.Scroll}) + '<div class="sv-pt-children rw_pagetree_list"></div></ul></div>';
};
if (goog.DEBUG) {
  Scroll.Versions.Templates.ThemeIntegration.RefinedWiki.refinedWikiOriginalThemeIntegration.soyTemplateName = 'Scroll.Versions.Templates.ThemeIntegration.RefinedWiki.refinedWikiOriginalThemeIntegration';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.k15t.scroll.scroll-platform:sv-ti-page-webresources', location = '/com/k15t/scroll/platform/ui/theme-integration/sv-ti-confluence-default.js' */
Scroll.Versions.ThemeIntegration=Scroll.Versions.ThemeIntegration||{};Scroll.Versions.ThemeIntegration.ConfluenceDefault={_postProcessRanOnce:false,postProcess:function(){function b(c){if(Scroll.Versions.Context.space.config.enableVariants||Scroll.Versions.Context.space.config.enableVersionManagement||Scroll.Versions.Context.space.config.enableTranslation||Scroll.Versions.Context.space.config.enablePermalinks){var g=c.find(".ia-secondary-parent-content .parent-item-link");var e=AJS.$("ol#breadcrumbs li:last-of-type a");if(e.length){g.attr("href",e.attr("href")).attr("title",e.text()).find(".label").text(e.text())}else{g.remove()}var h=c.find(".ia-secondary-currentPage-title .label");if(Scroll.Versions.Context.page&&Scroll.Versions.Context.page.scrollPageTitle){h.text(Scroll.Versions.Context.page.scrollPageTitle)}var f=c.find(".ia-secondary-content .contextual-nav-child-pages");f.find(".children").remove();if(Scroll.Versions.Context.page.childrenCount>0){f.html('<ul class="children"></ul>');var d=f.find(".children");Scroll.Versions.REST.pagetree.get({spaceKey:AJS.params.spaceKey,parentScrollPageId:Scroll.Versions.Context.page.scrollPageId,parentPageId:Scroll.Versions.Context.page.pageId,expandedScrollPageId:Scroll.Versions.Context.page.scrollPageId,expandedPageId:Scroll.Versions.Context.page.pageId,showUnavailablePages:Scroll.Versions.Context.user.settings.isShowUnavailablePages,versionId:Scroll.Versions.Context.user.workingVersion.versionId,variantId:Scroll.Versions.Context.user.currentVariant.id,languageKey:Scroll.Versions.Context.user.currentLanguage.encodedKey,isTopLevel:false,startDepth:1,success:function(j){c.addClass("sv-ti-done");var i=Confluence.Templates.Sidebar.Pages.renderChildren({children:j.children.map(function(k){return{pageId:k.id,url:contextPath+k.urlPath,title:k.scrollPageTitle}})});d.append(i);j.children.forEach(function(k){d.find(" > li[data-page-id="+k.id+"]").addClass(Scroll.Versions.Templates.Pagetree.nodeClasses(k))})},error:function(i,k,j){}})}else{c.addClass("sv-ti-done")}}else{c.addClass("sv-ti-done")}}if(Scroll.Versions.ThemeIntegration.ConfluenceDefault._postProcessRanOnce){return}var a=AJS.$(".ia-secondary-container[data-tree-type=pages]");if(a.length){b(a)}else{AJS.$("body").append(Scroll.Versions.Templates.ThemeIntegration.ConfluenceDefault.defaultThemeFlyout({pageContextualNav:{pageContextualNav:{parentPage:{},currentPage:{},initialChildPages:[],remainingChildPages:[]}}}));b(AJS.$(".page-tree-flyout-content .acs-side-bar-flyout-wiki-wrapper"))}Scroll.Versions.ThemeIntegration.ConfluenceDefault._postProcessRanOnce=true}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.k15t.scroll.scroll-platform:sv-ti-page-webresources', location = '/com/k15t/scroll/platform/ui/theme-integration/sv-ti-confluence-documentation.js' */
Scroll.Versions.ThemeIntegration=Scroll.Versions.ThemeIntegration||{};Scroll.Versions.ThemeIntegration.ConfluenceDocumentation={childrenPages:(function(){return function(){var c,h;var d=function(){if(h){h();h=null}c.addClass("hidden")};var f=function(){$("#page-children").show();if($("#children-section:not(.children-showing)").length){g()}};var b=function(l){var j=$("#page-children:not(.children-loaded)");d();if(l&&j.length){if(l.errorMessage){j.html("<span class='error'>"+l.errorMessage+"</span>");return}var k=Scroll.Versions.Templates.ThemeIntegration.ConfluenceDocumentation.renderChildrenPageBottomDocumentationTheme({children:l.children});j.html(k);j.addClass("children-loaded")}};var g=function(){var j=$("#page-children:not(.children-loaded)");if(j.length){c=$("<div class='throbber'></div>");j.append(c);h=Raphael.spinner(c[0],10,"#666");Scroll.Versions.REST.pagetree.get({spaceKey:AJS.params.spaceKey,parentScrollPageId:Scroll.Versions.Context.page.scrollPageId,parentPageId:Scroll.Versions.Context.page.pageId,expandedScrollPageId:Scroll.Versions.Context.page.scrollPageId,expandedPageId:Scroll.Versions.Context.page.pageId,showUnavailablePages:Scroll.Versions.Context.user.settings.isShowUnavailablePages,versionId:Scroll.Versions.Context.user.workingVersion.versionId,variantId:Scroll.Versions.Context.user.currentVariant.id,languageKey:Scroll.Versions.Context.user.currentLanguage.encodedKey,isTopLevel:false,startDepth:1,success:b,error:function(l,n,m){var k="Could not load child pages.";d();j.html("<span class='error'>"+k+"</span>");AJS.log("Error retrieving child pages: "+n)}})}};function e(k){var j=$("#children-section");if(j.hasClass("children-showing")){$("#page-children").hide();j.removeClass("children-showing").addClass("children-hidden")}else{f();j.removeClass("children-hidden").addClass("children-showing")}return false}if(Scroll.Versions.Context.page.childrenCount){var a=AJS.$("#children-section");var i=Scroll.Versions.Templates.ThemeIntegration.ConfluenceDocumentation.renderChildrenPageBottomAnchorDocumentationTheme({childrenCount:Scroll.Versions.Context.user.settings.isShowUnavailablePages?Scroll.Versions.Context.page.childrenCount:Scroll.Versions.Context.page.availableChildrenCount});if(a.length){a.replaceWith(i)}else{AJS.$("#comments-section").before(i)}a=AJS.$("#children-section");a.find(".children-show-hide").off("click").click(e)}else{AJS.$("#children-section").remove()}}})(),postProcess:(function(){var a=false;return function(){if(a){return}Scroll.Versions.ThemeIntegration.ConfluenceDocumentation.childrenPages();a=true}})()};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.k15t.scroll.scroll-platform:sv-ti-page-webresources', location = '/com/k15t/scroll/platform/ui/theme-integration/sv-ti-refinedwiki-original.js' */
Scroll.Versions.ThemeIntegration=Scroll.Versions.ThemeIntegration||{};Scroll.Versions.ThemeIntegration.RefinedWiki={children:(function(){return function a(e){var d="<div>"+RW.Templates.Velocity.pageItemContainer()+"</div>";var c=RW.Templates.Velocity.pageChildrenListContainer();var b="";e.children.forEach(function(i){var g=AJS.$(d);var h=g.find("> li");h.attr("id","rw_pagetree_item_"+i.id).addClass(Scroll.Versions.Templates.Pagetree.nodeClasses(i));AJS.$.each(AJS.$("<div "+Scroll.Versions.Templates.Pagetree.nodeAttributes(i)+"></div>")[0].attributes,function(j,k){h.attr(k.name,k.value)});g.find("div.rw_item_icon").attr("id",i.id);var f=g.find(".rw_item_content a");f.addClass("sv-pt-link "+((i.id===e.expandedId||i.scrollPageId===e.expandedId)?"rw_current_page_item":""));f.attr("title",i.scrollPageTitle).attr("href",contextPath+i.urlPath).text(i.scrollPageTitle);if(i.hasChildren){g.find(".rw_item_icon > span").addClass("rw_icon "+(i.children.length?"rw_icon_minus":"rw_icon_plus")+" sv-pt-toggle");h.append(c);h.find(".rw_pagetree_list").addClass("sv-pt-children").append(a({children:i.children,expandedId:e.expandedId}))}b+=g.html()});return b}})(),postProcess:function(){AJS.$(".rw_page_tree_wrapper .rw_expand_collapse").remove();var a=AJS.$("#rw_sidebar_icon_pagetree");if(a.length){a.off("click");AJS.InlineDialog(AJS.$("#rw_sidebar_icon_pagetree"),"rw_flyout_pagetree",function(d,c,e){if(!d.hasClass("rw_flyout_content")){d=d.html("");d=d.addClass("rw_flyout_content");d=d.html("<div><div class='rw_pagetree rw_corners'></div></div>");$(".rw_pagetree_list.rw_toplevel.rw_sidebar_content.sv-ti-done").clone(true,true).appendTo(d.find(".rw_pagetree"))}e();return false},{gravity:"w"});Scroll.Versions.ThemeIntegration.ConfluenceDocumentation.childrenPages()}else{window.setTimeout(Scroll.Versions.ThemeIntegration.postProcess,50)}var b=$("#sv-page-edit-link");if(b.length){b.find("#editPageLink").removeClass().attr("class","edit full-load")}$("#sv-theme-navigation-container").addClass("rw_pagetree rw_corners rw_theme_default")}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.k15t.scroll.scroll-platform:sv-ti-page-webresources', location = '/com/k15t/scroll/platform/ui/theme-integration/sv-ti-page.js' */
(function(h){function d(){return(Scroll.Versions.Context&&Scroll.Versions.getPageContext())}function g(){return Scroll.Versions.Context.space.config.enableVersionManagement||Scroll.Versions.Context.space.config.enableTranslation||Scroll.Versions.Context.space.config.enablePermalinks||Scroll.Versions.Context.space.config.enableVariants}c();j();k();a();i();m();f();l();e();AJS.toInit(function(){AJS.$("body").addClass("sv-ti-done")});function j(){AJS.toInit(function(){if(d()&&(Scroll.Versions.Context.space.config.enableVersionManagement||Scroll.Versions.Context.space.config.enableTranslation||Scroll.Versions.Context.space.config.enablePermalinks)&&Scroll.Versions.Context.space.theme.pageTitleSelector){var n=h(Scroll.Versions.Context.space.theme.pageTitleSelector);if(n.length){if(n.prop("tagName")==="SPAN"){n.text(Scroll.Versions.Context.page.scrollPageTitle).addClass("sv-ti-title-text")}else{n.html(Scroll.Versions.Templates.ThemeIntegration.Page.pageTitle({scrollPageTitle:Scroll.Versions.Context.page.scrollPageTitle}))}n.addClass("sv-ti-done");if(Scroll.Versions.Context.page.scrollPageTitle){h("html head title").text(window.Scroll.Versions.Context.page.scrollPageTitle)}AJS.log("[Scroll] pageTitleOverwrite "+Scroll.Versions.Context.space.theme.pageTitleSelector+" done")}}})}function k(){AJS.toInit(function(){var n=b(Scroll.Versions.Context.space.theme.svContentHeaderSelector,AJS.$("#sv-content-header"));if(n.result){n.inserted.addClass("wiki-content");AJS.log("[Scroll] svContentHeaderInsert "+n.selector+" done")}})}function a(){AJS.toInit(function(){var n=b(Scroll.Versions.Context.space.theme.svContentFooterSelector,AJS.$("#sv-content-footer"));if(n.result){n.inserted.addClass("wiki-content");AJS.log("[Scroll] svContentFooterInsert "+n.selector+" done")}})}function i(){AJS.toInit(function(){AJS.$("#sv-theme-navigation-container .sv-pagetree").remove();AJS.$("#sv-theme-navigation-container .sv-pagetree-loader").remove();var n=b(Scroll.Versions.Context.space.theme.svNavigationSelector,AJS.$("#sv-theme-navigation-container"));if(n.result){AJS.$(".theme-documentation #sv-theme-navigation-container").addClass("plugin_pagetree");AJS.log("[Scroll] svNavigationInsert "+n.selector+" done")}})}function b(o,p){if(d()&&o&&p&&p.length&&Scroll.Versions.getPageContext()==="page"){var n=Scroll.Versions.Utils.insertAtSelector(o,p);if(n&&n.result&&n.inserted){n.inserted.addClass("sv-ti-done");n.inserted.show()}return n}return null}function m(){AJS.toInit(function(){if(d()&&Scroll.Versions.Context.space.theme.pageKeySelector){h(Scroll.Versions.Context.space.theme.pageKeySelector).append(Scroll.Versions.Templates.ThemeIntegration.Page.pageKey({scrollPageKey:Scroll.Versions.Context.page.scrollPageKey,scrollPageKeyUrl:Scroll.Versions.Context.page.scrollPageKeyUrl}));AJS.log("[Scroll] pageKeyInsert "+Scroll.Versions.Context.space.theme.pageKeySelector+" done")}})}function f(){AJS.toInit(function(){if(d()&&g()&&Scroll.Versions.Context.space.theme.breadcrumbsSelector){var n=h(Scroll.Versions.Context.space.theme.breadcrumbsSelector);n.length&&n.find(Scroll.Versions.Context.space.theme.breadcrumbsFilter).remove();n=h(Scroll.Versions.Context.space.theme.breadcrumbsSelector);n.find("li").addClass("sv-breadcrumb");if(n.length){n.append(Scroll.Versions.Templates.ThemeIntegration.Page.breadcrumbs({breadcrumbs:Scroll.Versions.Context.getFilteredBreadcrumbs()}));n.find("#sv-ti-breadcrumb-ellipsis").click(function(){n.find(".sv-ti-hidden-crumb").removeClass("sv-ti-hidden-crumb");h(this).remove()})}n.addClass("sv-ti-done");AJS.log("[Scroll] breadcrumbsOverwrite "+Scroll.Versions.Context.space.theme.breadcrumbsSelector+" done")}})}function l(){AJS.toInit(function(){if(d()&&g()&&Scroll.Versions.Context.space.theme.pageTreeContainerSelector){var n=h(Scroll.Versions.Context.space.theme.pageTreeContainerSelector);n.empty();n.each(function(o,q){var p=h(q);p=p.append(Scroll.Versions.propertyPathToObject(window,Scroll.Versions.Context.space.theme.pageTreeContainerTemplate,null)({spaceKey:AJS.params.spaceKey,Scroll:Scroll}));new Scroll.Versions.Pagetree(p.find(".sv-ti-pagetree")[0],{},Scroll.Versions.Context.space.theme)});n.addClass("sv-ti-done");AJS.log("[Scroll] pagetreeOverwrite "+Scroll.Versions.Context.space.theme.pageTreeContainerSelector+" done")}})}function c(){AJS.toInit(function(){if(d()&&Scroll.Versions.getPageContext()==="page"&&(g()||Scroll.Versions.Context.space.config.isTargetSpace)&&Scroll.Versions.Context.space.messages){var n=h(Scroll.Versions.Context.space.theme.contentManagementToolbarSelector);if(n.length){n.before('<div id="scroll-message-bar"></div>');Scroll.Versions.showMessages()}}})}function e(){AJS.toInit(function(){if(d()&&Scroll.Versions.Context.space.theme.customJavaScript){var n=Scroll.Versions.propertyPathToObject(window,Scroll.Versions.Context.space.theme.customJavaScript,null);if(n&&typeof(n)==="function"){window.setTimeout(function(){n.call();AJS.log("[Scroll] executeCustomJavaScript "+Scroll.Versions.Context.space.theme.customJavaScript+" done")},0)}}})}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
