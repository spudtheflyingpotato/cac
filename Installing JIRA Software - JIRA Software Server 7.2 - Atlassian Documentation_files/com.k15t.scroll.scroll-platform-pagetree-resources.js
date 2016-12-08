;try {
/* module-key = 'com.k15t.scroll.scroll-platform:pagetree-resources', location = '/com/k15t/scroll/platform/ui/pagetree/pagetree.soy' */
// This file was automatically generated from pagetree.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Scroll.Versions.Templates.Pagetree.
 */

if (typeof Scroll == 'undefined') { var Scroll = {}; }
if (typeof Scroll.Versions == 'undefined') { Scroll.Versions = {}; }
if (typeof Scroll.Versions.Templates == 'undefined') { Scroll.Versions.Templates = {}; }
if (typeof Scroll.Versions.Templates.Pagetree == 'undefined') { Scroll.Versions.Templates.Pagetree = {}; }


Scroll.Versions.Templates.Pagetree.children = function(opt_data, opt_ignored) {
  var output = '';
  var childList3 = opt_data.children;
  var childListLen3 = childList3.length;
  for (var childIndex3 = 0; childIndex3 < childListLen3; childIndex3++) {
    var childData3 = childList3[childIndex3];
    output += '<li class="node type_' + soy.$$escapeHtml(childData3.type) + ' ' + ((childData3.children.length > 0) ? 'open' : '') + ' ' + ((childData3.id == opt_data.expandedId || childData3.scrollPageId == opt_data.expandedId) ? 'highlight' : '') + ' ' + ((childData3.isDeleted == true) ? 'deleted' : '') + ' ' + ((childData3.isEnabled == false) ? 'excluded' : '') + ' "' + Scroll.Versions.Templates.Pagetree.nodeAttributes(childData3) + ' ><div class="openclose ' + ((childData3.hasChildren == true) ? 'openclose-hasChildren' : '') + ' sv-pt-toggle" data-scroll-page-id="' + soy.$$escapeHtml(childData3.scrollPageId) + '"></div>' + ((childData3.type == 'change' || childData3.type == 'masterpage') ? '<a href="' + soy.$$escapeHtml(contextPath) + soy.$$escapeHtml(childData3.urlPath) + '" title="' + soy.$$escapeHtml(childData3.scrollPageTitle) + '" class="sv-pt-link">' + soy.$$escapeHtml(childData3.scrollPageTitle) + '</a>' : soy.$$escapeHtml(childData3.scrollPageTitle)) + ((childData3.children.length > 0) ? '<ul class="children">' + Scroll.Versions.Templates.Pagetree.children({expandedId: opt_data.expandedId, children: childData3.children}) + '</ul>' : '<div class="loading">' + soy.$$escapeHtml("Loading..") + '</div><div class="error"></div><ul class="children"></ul>') + '</li>';
  }
  return output;
};
if (goog.DEBUG) {
  Scroll.Versions.Templates.Pagetree.children.soyTemplateName = 'Scroll.Versions.Templates.Pagetree.children';
}


Scroll.Versions.Templates.Pagetree.nodeAttributes = function(opt_data, opt_ignored) {
  return 'data-page-id="' + soy.$$escapeHtml(opt_data.id) + '" data-master-page-id="' + soy.$$escapeHtml(opt_data.masterPageId) + '" data-scroll-page-id="' + soy.$$escapeHtml(opt_data.scrollPageId) + '" data-scroll-page-title="' + soy.$$escapeHtml(opt_data.scrollPageTitle) + '" data-is-managed="' + soy.$$escapeHtml(opt_data.isManaged) + '" data-scroll-page-type="' + soy.$$escapeHtml(opt_data.type) + '"';
};
if (goog.DEBUG) {
  Scroll.Versions.Templates.Pagetree.nodeAttributes.soyTemplateName = 'Scroll.Versions.Templates.Pagetree.nodeAttributes';
}


Scroll.Versions.Templates.Pagetree.nodeClasses = function(opt_data, opt_ignored) {
  return 'sv-pt-node ' + ((opt_data.type) ? 'type_' + soy.$$escapeHtml(opt_data.type) : '') + ' ' + ((opt_data.children.length > 0) ? 'sv-pt-open' : '') + ' ' + ((opt_data.isDeleted == true) ? 'sv-pt-deleted' : '') + ' ' + ((opt_data.isEnabled == false) ? 'sv-pt-excluded' : '');
};
if (goog.DEBUG) {
  Scroll.Versions.Templates.Pagetree.nodeClasses.soyTemplateName = 'Scroll.Versions.Templates.Pagetree.nodeClasses';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.k15t.scroll.scroll-platform:pagetree-resources', location = '/com/k15t/scroll/platform/ui/pagetree/pagetree.js' */
(function(d,b){var a="sv-pagetree";window.Scroll=window.Scroll||{};window.Scroll=AJS.$.extend(true,window.Scroll,{Versions:{}});window.Scroll.Versions.REST=window.Scroll.Versions.REST||{};window.Scroll.Versions.REST.pagetree={};window.Scroll.Versions.REST.pagetree.getUrlTemplate=function(){return contextPath+"/rest/scroll-versions/1.0"+"/pagetree/{0}?parentScrollPageId={1}&parentPageId={2}&expandedScrollPageId={3}&expandedPageId={4}&versionId={5}&variantId={6}&isShowUnavailablePages={7}&sortBy={8}&reverseOrder={9}&startDepth={10}&isShowToplevelPages={11}&languageKey={12}"};window.Scroll.Versions.REST.pagetree.getUrl=function(e){return AJS.format(Scroll.Versions.REST.pagetree.getUrlTemplate(),e.spaceKey,encodeURIComponent(e.parentScrollPageId||""),e.parentPageId||"",e.isTopLevel?encodeURIComponent(e.expandedScrollPageId||""):"",e.expandedPageId||"",e.versionId||"",e.variantId||"all",e.showUnavailablePages,e.sortBy,e.reverseOrder,e.startDepth,e.showToplevelPages||"false",e.languageKey||"")};window.Scroll.Versions.REST.pagetree._cache={};window.Scroll.Versions.REST.pagetree.get=function(f){var e=window.Scroll.Versions.REST.pagetree.getUrl(f);if(Scroll.Versions.REST.pagetree._cache[e]){f.success.call(null,Scroll.Versions.REST.pagetree._cache[e])}d.ajax({type:"GET",url:e,contentType:"application/x-www-form-urlencoded; charset=UTF-8",data:{openedPageIds:f.isTopLevel&&f.openNodes?f.openNodes.get():[]},success:function(h,i,g){Scroll.Versions.REST.pagetree._cache[e]=h;f.success.call(null,h)},error:f.error})};AJS.toInit(function(){d(".sv-pagetree").each(function(){if(d(this).parent("#sv-theme-navigation-container").length){return}new Scroll.Versions.Pagetree(this,{})})});Scroll.Versions.Pagetree=function(k,u,t){var g=t&&t.pageTreeChildrenTemplate&&Scroll.Versions.propertyPathToObject(window,t.pageTreeChildrenTemplate,null)||Scroll.Versions.Templates.Pagetree.children;var j=t&&t.pageTreeChildrenToggleClassesToToggle||"";var i=t&&t.pageTreeChildrenContainerSelector||"> ul.children";var e=t?"sv-pt-node":"node";var f=t?"sv-pt-locknode":"locknode";var m=t?"sv-pt-open":"open";var p=".sv-pt-toggle";var n={};var r=d(k);var h=new c();n.opts=d.extend(u,{spaceKey:u.spaceKey||r.attr("data-space-key")||"",rootScrollPageId:u.rootScrollPageId||r.attr("data-root-scroll-page-id")||"",rootPageId:u.rootPageId||r.attr("data-root-page-id")||"",expandedScrollPageId:u.expandedScrollPageId||r.attr("data-expanded-scroll-page-id")||"",expandedPageId:u.expandedPageId||r.attr("data-expanded-page-id")||"",versionId:u.versionId||r.attr("data-version-id")||"",variantId:u.variantId||r.attr("data-variant-id")||"all",languageKey:u.languageKey||r.attr("data-language-key")||"",isShowUnavailablePages:(!(Scroll.Versions.Context&&Scroll.Versions.Context.user.settings.isReadOnlyView)&&(u.isShowUnavailablePages||r.attr("data-is-show-unavailable"))),isRememberTreeState:r.data("isRememberTreeState")||"false",sortBy:u.sortBy||r.attr("data-sort-by"),reverseOrder:u.reverseOrder||r.attr("data-reverse-order"),startDepth:u.startDepth||r.attr("data-start-depth"),isShowToplevelPages:u.isShowToplevelPages||r.attr("data-is-show-toplevel")||"false"});var l=function(){h.init(n.opts.isRememberTreeState);h.add(n.opts.expandedScrollPageId);o(n.opts.rootScrollPageId,n.opts.rootPageId,true)};var s=function(x){var w=d(x).closest("."+e);var z=w.attr("data-scroll-page-id");var v=w.attr("data-page-id");var A=w.closest(".sv-ti-pagetree, .sv-pagetree");r=r.add(A[0]);var y=n.findNode(z);if(y.hasClass(f)){return}if(!y.hasClass(m)){y.addClass(f);o(z,v||z)}else{y.addClass(f).removeClass(m);y.find(p).toggleClass(j);y.find(i).slideUp(150,function(){d(this).hide();d(this).closest("."+e).removeClass(f);h.remove(z)})}};var q=function(y,v){var x=g({children:v.children,expandedId:n.opts.expandedScrollPageId||n.opts.expandedPageId});var w=n.findNode(y).addClass(m);w.find(p).toggleClass(j);w.find(i).html(x).slideDown(150,function(){d(this).closest("."+e).removeClass(f);h.add(y)}).find(p).on("click",function(z){s(this);return false})};var o=function(w,v,x){n.findNode(w).addClass("loading");Scroll.Versions.REST.pagetree.get({spaceKey:n.opts.spaceKey,parentScrollPageId:w,parentPageId:v,isTopLevel:x,expandedScrollPageId:n.opts.expandedScrollPageId,expandedPageId:n.opts.expandedPageId,versionId:n.opts.versionId,variantId:n.opts.variantId,showUnavailablePages:n.opts.isShowUnavailablePages,sortBy:n.opts.sortBy,reverseOrder:n.opts.reverseOrder,startDepth:n.opts.startDepth,showToplevelPages:n.opts.isShowToplevelPages,languageKey:n.opts.languageKey,openNodes:h,success:function(y){n.findNode(w).removeClass("loading");q(w,y);AJS.$(".sv-pagetree-loader").hide()},error:function(y,A,z){if(y.readyState>=2){n.findNode(w).removeClass("loading");r.find(".error").text("Error loading children."+" "+y.statusText);AJS.log("Failed to load children:"+y.responseText);AJS.log(y)}}});n.opts.startDepth=1};n.findNode=function(w){if(r.attr("data-root-scroll-page-id")===w||(w==="")){return r}else{var v=Scroll.Versions.Utils.escapeCssSelector(w);return r.find("."+e+"[data-scroll-page-id='"+v+"']")}};n.setExpandedScrollPageId=function(v){n.opts.expandedScrollPageId=v};l();return n};var c=function(){var f=this;f.init=function(h){if(!h){e([])}};f.get=function(){return g()};f.add=function(h){if(!h){return}var i=g();(b.indexOf(i,h)==-1)&&i.push(h);if(i.length>15){i.shift()}e(i)};f.remove=function(h){var i=g();i=b.without(i,h);e(i)};var g=function(){return JSON.parse(d.cookie(a+"-"+AJS.params.spaceKey)||"[]")};var e=function(h){d.cookie(a+"-"+AJS.params.spaceKey,JSON.stringify(h||[]),{path:"/"})};return f}})(AJS.$,_);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
