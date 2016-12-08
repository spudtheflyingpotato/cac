;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-resources', location = 'js/link-object.js' */
define("confluence-link-browser/link-object",["jquery","ajs","confluence/legacy"],function(c,g,m){function j(a){return c.nodeName(a,"img")?a:a.hasChildNodes()&&1===a.childNodes.length&&c.nodeName(a,"a")&&c.nodeName(a.firstChild,"img")?a.firstChild:null}function k(a){return!a?"":c(a).attr("data-linked-resource-default-alias")||c(a).attr("src")}function l(a){var b={};"A"===a.nodeName&&c(a.attributes).each(function(){b[this.name]=this.value});return b}function i(a,b){for(var c=a;c&&c!=b;){if(3!=c.nodeType)return!1;
c=c.nextSibling}return 3===b.nodeType}var e={isLink:function(a){return a&&!!a.fillNode}},f=function(a){if(e.isLink(a))return a;var b={insert:function(){return m.Editor.LinkAdapter.setLink(b)},fillNode:function(a){var b=this.attrs;b.href=b.href||"#";a.attr(b);this.classes&&this.classes.length&&a.addClass(this.classes.join(" "));a.html(this.body.html);return a},getData:function(){var a={},b;for(b in this)this.hasOwnProperty(b)&&!c.isFunction(this[b])&&(a[b]=this[b]);return a},getLinkedImage:function(){return this.body&&
this.body.jquery?1===this.body.length&&this.body.is("img")&&this.body:null},getResourceId:function(){return this.attrs["data-linked-resource-id"]||""},getResourceVersion:function(){return this.attrs["data-linked-resource-version"]||""},isToConfluenceEntity:function(){return this.attrs["data-linked-resource-id"]},isToAttachmentOnSamePage:function(a){return"attachment"==this.attrs["data-linked-resource-type"]&&this.attrs["data-linked-resource-container-id"]==a},isCustomAtlassianContentLink:function(){return this.classes&&
this.classes.length?-1!=c.inArray("confluence-link",this.classes):!1},hasAnchor:function(){return this.attrs["data-anchor"]},getResourceType:function(){return this.attrs["data-linked-resource-type"]},getDefaultAlias:function(){return this.attrs["data-linked-resource-default-alias"]},getHref:function(){return this.attrs.href},getAnchor:function(){return this.attrs["data-anchor"]},getHtml:function(){return this.body.html},getShortcut:function(){return this.attrs["data-linked-resource-shortcut"]},isHrefValid:function(){return this.attrs.href&&
"http://"!=this.attrs.href},isImage:function(){return this.body.isImage},isNewLink:function(){return c.isEmptyObject(this.attrs)},isShortcutLink:function(){return"shortcut"===this.getResourceType()},showsBreadcrumbs:function(){return!0}};if(a&&a.attrs){var f={},h=null;c.each(a.attrs,function(a,b){"class"==a?h=b:f[a]=b});a.attrs=f;if(h){var d=h.split(" ");a.classes=a.classes&&a.classes.length?a.classes.concat(d):d}}c.extend(b,a);return b};e.fromData=function(a){return f(a)};e.fromNode=function(a,b){f({attrs:{},
body:{html:b,text:b}});return f({attrs:l(a),body:{html:b,text:b}})};e.fromSelectedAnchor=function(a,b){var e=c(a),h=j(a),d=!h&&i(a.firstChild,a.lastChild);return f({attrs:l(a),body:{isEditable:d,isImage:!!h,html:e.html(),imgName:k(h),text:b}})};e.fromSelection=function(a,b,c,e){var b=j(b),d;if(d=!b)if(a.collapsed)d=!0;else if(d=a.startContainer,d==a.endContainer)d=3===d.nodeType?!0:i(d.childNodes[a.startOffset],d.childNodes[a.endOffset-1]);else{var g=require("tinymce").activeEditor.dom;d=g.isBlock(a.startContainer)?
a.startContainer.childNodes[a.startOffset]:a.startContainer;a=g.isBlock(a.endContainer)?a.endContainer.childNodes[a.endOffset-1]:a.endContainer;a=d&&a&&d.parentNode==a.parentNode?{start:d,end:a}:null;d=!!a&&i(a.start,a.end)}return f({attrs:{},body:{isEditable:d,isImage:!!b,html:c,imgName:k(b),text:e}})};e.fromREST=function(a){var b=f({attrs:{"data-base-url":g.Confluence.getBaseUrl(),"data-linked-resource-id":a.id,"data-linked-resource-type":a.type,"data-linked-resource-content-type":a.contentType,
href:g.REST.findLink(a.link),"data-linked-resource-default-alias":a.title},body:{html:g.escapeHtml(a.title),text:g.escapeHtml(a.title)},classes:["confluence-link"]});"user"===a.type&&(b.attrs["data-linked-resource-type"]="userinfo");return b};e.createLinkToNewPage=function(a,b){return f({attrs:{"data-space-key":b,"data-content-title":a,href:g.contextPath()+"/pages/createpage.action?spaceKey="+b+"&title="+a},body:{html:g.escapeEntities(a),text:a},classes:["createlink","confluence-link"]})};e.makeExternalLink=
function(a){return f({attrs:{href:a},body:{html:a,text:a}})};e.isExternalLink=function(a){return a&&(a.match(/^(\/\/|mailto:|file:|http:|https:)/)||0===a.indexOf("\\"))};return e});require("confluence/module-exporter").exportModuleAsGlobal("confluence-link-browser/link-object","Confluence.Link");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-resources', location = 'js/link-adapter.js' */
define("confluence-link-browser/link-adapter",["ajs","jquery","confluence/legacy","tinymce"],function(d,e,f,h){return{setLink:function(a){var b=d.Rte.getEditor(),b=e(b.dom.create("a"),b.getDoc());a.fillNode(b);a=h.confluence.NodeUtils.replaceSelection(b);e("#comments-section").length&&d.Rte.fixEditorFocus();return a},getLink:function(){var a,b,c;a=d.Rte.getEditor().selection;var g=a.getNode();if(c=e(g).parents().andSelf().filter("a[href]")[0])return a.select(c),b=a.getContent({format:"text"}),f.Link.fromSelectedAnchor(c,
b);c=a.getRng(!0);b=a.getContent({format:"text"});a=a.getContent();return f.Link.fromSelection(c,g,a,b)}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-link-browser/link-adapter","Confluence.Editor.LinkAdapter");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-resources', location = 'js/link-browser.js' */
define("confluence-link-browser/link-browser",["ajs","confluence/legacy","jquery"],function(b,o,j){function r(){if(!e.prop("disabled")){e.prop("disabled",!0);b.debug("link-browser.js: submit");h.preSubmit&&h.preSubmit();var a=f.getLink();n();a.insert();b.trigger("closed.link-browser")}}function n(){k.hide().remove();b.Rte.BookmarkManager.restoreBookmark()}function p(){n();b.trigger("closed.link-browser")}function s(a,e,l){var c=e.key,e=e.label,d=c+"-panel",g=o.Templates.LinkBrowser[c+"Panel"]({atlToken:b.Meta.get("atl-token")});
k.addPanel(e,g,d,d+"-id");var a=k.get("panel:"+a),i=l.tabs[c];i.panelObj=a;i.key=c;i.createPanel({baseElement:j(a[0].body)});a[0].onblur=i.onDeselect;a[0].onselect=function(){var a=!!i.hasBreadcrumbs;b.debug("Link Browser: on tab select, breadcrumbs enabled: "+a);i.onSelect();f.refresh(a);h=i};return i}var k,f,e,h;return{SEARCH_PANEL:"search",ATTACHMENTS_PANEL:"attachments",WEBLINK_PANEL:"weblink",ADVANCED_PANEL:"advanced",open:function(a){if(j(".aui-dialog:visible").length)return null;a=a||{};b.Rte.BookmarkManager.storeBookmark();
a.linkInfo=a.linkInfo||o.Editor.LinkAdapter.getLink();if(a.opener)return a.opener(a.linkInfo.alias,a.linkInfo);var q=a,a={tabs:{},setLink:function(t,a){f.setLink(t,a)},getLink:function(){return f.getLink()},getSelectedDataTableItem:function(){return j(".data-table:visible tr.selected")},linkValid:function(a){e.prop("disabled",!a)},focusLinkText:function(){f.focusLinkText()||(b.debug("LinkBrowser: focusing submit button"),e.focus())},getLinkText:function(){return f.getLinkText()},isLinkTextVisible:function(){return f.isLinkTextVisible()},
hasBreadcrumbs:function(a){return f.hasBreadcrumbs(a)},getLocationPresenter:function(){return f},doSearch:function(a){this.tabs.search.doSearch(a)},getSearchTextField:function(){return this.tabs.search.getSearchTextField()},moveLocationPanel:function(a){f.moveLocationPanel(a)},restoreLocationPanel:function(){f.restoreLocationPanel()},gotoPanel:function(a){this.popup.gotoPanel(a)},getCurrentPanel:function(){return this.popup.getCurrentPanel()},setWebLinkURL:function(a){var c=this.tabs.weblink;h!=c?
b.debug("Cannot set URL "+a+" on hidden Web Link panel"):c.setURL(a)},getWebLinkUrl:function(){var a=this.tabs.weblink;return h!=a?(b.debug("Cannot get URL on hidden Web Link panel"),null):a.getURL()},getTitle:function(){return this.popup.getTitle()},getSubmitButtonText:function(){return e.text()},isSubmitButtonEnabled:function(){return e.is(":enabled")},isVisible:function(){return this.popup.isVisible()},getAdvancedTextField:function(){var a=this.tabs.advanced;return h!=a?(b.debug("Cannot get link text on hidden advanced panel"),
null):a.getLink()},setAdvancedTextField:function(a){var c=this.tabs.advanced;h!=c?b.debug("Cannot set link text on hidden advanced panel"):c.setLink(a)},submit:r,cancel:p},l=q.linkInfo,c=l.isNewLink(),d,g;d=new b.ConfluenceDialog({width:840,height:590,id:"insert-link-dialog",onCancel:p,onSubmit:r});g=c?"Insert link":"Edit link";c=c?"Insert":"Save";d.addHeader(g);d.addButton(c,
r);d.addCancel("Cancel",p);d.addHelpText("Hint: type \"[\" in the editor to see a list of suggested pages and insert a link.");g=j("#insert-link-dialog .dialog-tip");g.attr("title",g.text());j("#insert-link-dialog .dialog-components .dialog-title").prepend(o.Templates.LinkBrowser.helpLink());e=d.get("button:0")[0].item;e.attr("id","link-browser-insert");e.prop("disabled",!0);k=d;a.popup=k;b.trigger("dialog-created.link-browser",[a]);f=o.Editor.LinkBrowser.LinkInfoPresenter(a);f.setLinkBody(l.body);q=q.panelKey;
d=j("#link-browser-tab-items").find("div").map(function(){var a=j(this);return{key:a.text(),weight:a.attr("data-weight"),label:this.title}}).sort(function(a,b){return a.weight-b.weight});var i="template"!==b.Meta.get("content-type");d=j.grep(d,function(a){return i||"attachments"!==a.key});var n;g=null;for(var c=0,u=d.length;c<u;c++){var m=s(c,d[c],a);0===c&&(n=m);!l.isNewLink()&&j.isFunction(m.handlesLink)&&m.handlesLink(l)?(g=m,m.openedLink=l):q==m.key&&(g=m)}g?a.popup.overrideLastTab():g=n;h=g;
k.popup.element.find(".dialog-page-body:first").append(f.getContainer());h.panelObj.select();h.openedLink=null;k.show();b.trigger("dialog-shown.link-browser",k);return a},cancel:p}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-link-browser/link-browser","Confluence.Editor.LinkBrowser");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-resources', location = 'js/link-browser-location.js' */
define("confluence-link-browser/link-browser-location",["jquery","confluence/legacy","ajs","confluence/dialog-breadcrumbs"],function(v,w,i,o){return function(x){function j(){return i.escapeHtml(p())}function p(){return d.val()}function q(a){f.closest(".row").toggleClass("hidden",!a);b.toggleClass("has-breadcrumbs",!!a)}function r(){return d.is(":visible")}var b,f,k,e,d,l,s,t,m,g,n,c,h;b=v(w.Templates.LinkBrowser.locationPanel());f=b.find("#breadcrumbs-container");k=o.Breadcrumbs(f,o.getBreadcrumbsLegacy);
s=b.find(".link-image");t=b.find(".link-mixed");g=b.find("#link-image-filename");m=b.find("#link-mixed-content");l=b.find(".link-text");d=l.find("input");d.change(function(a){a.keyCode=a.keyCode||a.which;a.keyCode&&13!==a.keyCode&&d.removeClass("default-alias")});return{setLink:function(a,b){i.debug("Link Browser: setting link : "+a);var c=a.attrs["data-linked-resource-default-alias"]||a.getHtml();if(""===j()||d.hasClass("default-alias"))d.addClass("default-alias"),d.val(c);if(b&&a.getResourceId()&&
a.getResourceType()){var u={clearErrors:function(){},error:function(){},select:function(a){k.update(a,u)}},c={id:a.getResourceId(),type:a.getResourceType()};k.update(c,u)}q(b);e=a;x.linkValid(e&&e.isHrefValid())},getLink:function(){if(!e)return null;var a=n;a||((a=j())||(a=e.getDefaultAlias()||e.getHref()),a={html:a});e.body=a;return e},refresh:function(a){e&&q(a)},setLinkBody:function(a){n||(a.isEditable?d.val(a.text):a.isImage?g.text(a.imgName):m.text(a.text),n=a.isEditable?null:a,l.toggleClass("hidden",
!a.isEditable),s.toggleClass("hidden",!a.isImage),t.toggleClass("hidden",a.isEditable||a.isImage))},getContainer:function(){return b},isLinkTextVisible:r,isLinkImageVisible:function(){return g.is(":visible")},isLinkMixedContentVisible:function(){return m.is(":visible")},focusLinkText:function(){return r()?(i.debug("LinkInfoPresenter.focusLinkText focusing alias"),d.select(),!0):!1},getLinkText:j,getRawLinkText:p,getLinkImageName:function(){return g.text()},moveLocationPanel:function(a){c||(c=b.find(".row:not(.hidden) .field-group"),
h=c.parent());a.append(c);b.hide()},restoreLocationPanel:function(){h&&(h.append(c),b.show(),h=c=null)},hasBreadcrumbs:function(a){if(!f.is(":visible"))return!1;var b=a.length,d=f.find("li");if(d.length!==b)return!1;for(var c=0;c<b;c++)if(d.eq(c).text()!==a[c])return!1;return!0}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-link-browser/link-browser-location","Confluence.Editor.LinkBrowser.LinkInfoPresenter");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-resources', location = 'js/link-browser-tab-search.js' */
define("confluence-link-browser/link-browser-tab-search",["jquery","ajs","document","confluence/legacy","confluence/page-location"],function(d,b,n,i,o){return{dialogCreatedLinkBrowserSearch:function(n,j){var c,e,f,m,p=b.REST.getBaseUrl()+"search.json",k=function(a,b){i.Link.isLink(a)||(a=i.Link.fromREST(a));b&&c.val(a.attrs["data-linked-resource-default-alias"]);j.setLink(a,!0);j.focusLinkText()},l=function(a){b.debug("link-browser-tab-search.js: doing search");c.trigger("hide.autocomplete");var g=
d.trim(c.val());g?(f.loading(),b.getJSONWrap({url:p,data:{search:"site",query:g,spaceKey:e.val()},successCallback:function(b){d.isFunction(a)?(f.update(b.result),a()):f.updateAndSelect(b.result);c.trigger("hide.autocomplete")},messageHandler:m})):d.isFunction(a)&&a()};j.tabs.search={hasBreadcrumbs:!0,createPanel:function(a){var g=a.baseElement;c=g.find("#link-search-text");e=g.find("#search-panel-space");var h=o.get();e.find("option:eq(1)").text(h.spaceName).val(h.spaceKey);e.change(function(){c.attr("data-spacekey",
e.val());c.trigger("clearCache.autocomplete")});i.Binder.autocompleteSearch(c.parent());c.bind("selected.autocomplete-content",function(a,b){b.searchFor?l():(f.clear(),k(b.content,!1))});h=[b.SelectGrid.Column({key:"title",heading:"Title",getHref:function(a){return b.REST.findLink(a.link)},getInnerClass:function(a){return a.iconClass||"content-type-"+a.type}}),b.SelectGrid.Column({key:"space",heading:"Space",getText:function(a){return a.space&&
a.space.title||""}}),b.SelectGrid.Column({key:"last-modified",heading:"Last Modified",getText:function(a){return a.lastModifiedDate&&a.lastModifiedDate.friendly||""},getTitle:function(a){return a.lastModifiedDate&&a.lastModifiedDate.date||""}})];m=b.MessageHandler({baseElement:a.baseElement.find(".message-panel")});f=new b.ResultGrid({baseElement:a.baseElement,columns:h,selectionCallback:function(a,b){k(b)},noResultMessage:"No search results found.",
dontShiftFocus:function(){return d(c).add(e).is(":focus")}});g.find(".search-form").submit(function(){l();return!1}).keydown(function(a){13===a.keyCode&&!d(".aui-dropdown:visible .active",this).length&&(d("#search-panel-button").focus(),a.stopPropagation())})},onSelect:function(){b.debug("Link Browser Search panel selected");var a=this.openedLink;a?(b.debug("Link Browser Search panel setting link info"),k(a,!0)):c.focus()},handlesLink:function(a){return a.isCustomAtlassianContentLink()&&!a.hasAnchor()&&
!a.isShortcutLink()&&!a.isToAttachmentOnSamePage(b.Meta.get("content-id"))},doSearch:function(a,b){c.val(a);l(b)},isResultGridVisible:function(){return f.isVisible()},getSearchTextField:function(){return c}}}}});require("confluence/module-exporter").safeRequire("confluence-link-browser/link-browser-tab-search",function(d){require("ajs").bind("dialog-created.link-browser",d.dialogCreatedLinkBrowserSearch)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-resources', location = 'js/link-browser-tab-history.js' */
define("confluence-link-browser/link-browser-tab-history",["ajs","confluence/legacy"],function(a,h){return{dialogCreatedLinkBrowserHistory:function(i,d){var e=a.REST.makeUrl("session/history.json?max-results=20"),f,g;d.tabs.recentlyviewed={createPanel:function(c){var e=[a.SelectGrid.Column({key:"title",heading:"Title",getHref:function(b){return a.REST.findLink(b.link)},getInnerClass:function(b){return b.iconClass||"content-type-"+b.type}}),a.SelectGrid.Column({key:"space",
heading:"Space",getText:function(b){return b.space&&b.space.title||""}}),a.SelectGrid.Column({key:"last-modified",heading:"Last Modified",getText:function(b){return b.lastModifiedDate&&b.lastModifiedDate.friendly||""},getTitle:function(b){return b.lastModifiedDate&&b.lastModifiedDate.date||""}})];g=a.MessageHandler({baseElement:c.baseElement.find(".message-panel")});f=new a.ResultGrid({baseElement:c.baseElement,
columns:e,getRowId:function(b){return b.attachmentId},selectionCallback:function(b,a){var c=h.Link.fromREST(a);d.setLink(c);d.focusLinkText()},messageHandler:g,noResultMessage:"You have no recently viewed content."})},onSelect:function(){f.loading();a.getJSONWrap({url:e,messageHandler:g,successCallback:function(c){f.update(c.content);a.trigger("updated.link-browser-recently-viewed")}})}}}}});
require("confluence/module-exporter").safeRequire("confluence-link-browser/link-browser-tab-history",function(a){require("ajs").bind("dialog-created.link-browser",a.dialogCreatedLinkBrowserHistory)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-resources', location = 'js/link-browser-tab-attachment.js' */
define("confluence-link-browser/link-browser-tab-attachment",["jquery","ajs","confluence/legacy"],function(h,a,j){return{dialogCreatedLinkBrowserAttachment:function(m,i){var f=a.REST.makeUrl("content/"+a.Meta.get("attachment-source-content-id")+"/attachments.json"),g,k,l,d;i.tabs.attachments={hasBreadcrumbs:!1,createPanel:function(b,c){var e=b.baseElement.find(".attach-file-form");g=h.extend({getUploaderController:function(){return j.AttachmentUploader({baseElement:e},function(){return{onUploadSuccess:function(a){for(var b=
0,c=a.length;b<c;b++)a[b].type="attachment";d.prependAndSelect(a)}}})}},c&&c(b));k=g.getUploaderController(b);l=k.getMessageHandler();var f=[a.SelectGrid.Column({key:"title",heading:"Name",getHref:function(b){return b.link?a.REST.findLink(b.link):b.url},getInnerClass:function(a){return a.iconClass}}),a.SelectGrid.Column({key:"size",heading:"Size",getText:function(a){return a.niceFileSize}}),a.SelectGrid.Column({key:"comment",
heading:"Comment"})];d=new a.ResultGrid({baseElement:b.baseElement,columns:f,selectionCallback:function(b,c){var d=j.Link.fromREST(c);d.attrs["data-linked-resource-container-id"]=a.Meta.get("content-id");if(h.isArray(c.link))for(var e=0,f=c.link.length;e<f;e++){var g=c.link[e];"download"===g.rel&&(d.attrs.href=g.href)}i.setLink(d);i.focusLinkText()},noResultMessage:"There are no files on this page."})},onSelect:function(){var b=this.openedLink,c=i.getLink();
d.loading();a.getJSONWrap({url:f,messageHandler:l,successCallback:function(e){d.update(e.attachment);c?"attachment"==c.getResourceType()&&d.select(c.getResourceId()):b?d.select(b.getResourceId()):e.attachment.length&&d.select(e.attachment[0].id);a.debug("Loaded attachments")}})},handlesLink:function(b){return b.isToAttachmentOnSamePage(a.Meta.get("content-id"))}}}}});
require("confluence/module-exporter").safeRequire("confluence-link-browser/link-browser-tab-attachment",function(h){var a=require("ajs");"template"!==a.Meta.get("content-type")&&a.bind("dialog-created.link-browser",h.dialogCreatedLinkBrowserAttachment)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-resources', location = 'js/link-browser-tab-weblink.js' */
define("confluence-link-browser/link-browser-tab-weblink",["ajs","jquery","confluence/legacy"],function(c,j,h){return{dialogCreatedLinkBrowserWeblink:function(l,d){function e(){return j.trim(b.val())}function f(){var a=e();if(!(c.Validate.url(a)||0===a.indexOf("mailto:"))){if(c.Validate.email(a))a="mailto:"+a;else{if(k.test(a))return;a="http://"+a}c.debug("Updating Link Browser Web Link URL to: "+a);b.val(a);a=h.Link.makeExternalLink(a);d.setLink(a)}}var b,g,i,k=/[:/]/;i=d.tabs.weblink={createPanel:function(a){g=
a.baseElement;b=g.find("input[name='destination']");b.keyup(function(){var a=e();(a=a?h.Link.makeExternalLink(a):null)&&d.setLink(a)});b.change(f);b.bind("paste",function(){c.debug("Link Browser web link url pasted");setTimeout(f,0)})},onSelect:function(){d.moveLocationPanel(g.find("form"));this.openedLink&&(i.setURL(this.openedLink.attrs.href),d.setLink(this.openedLink));setTimeout(function(){b.focus()})},onDeselect:d.restoreLocationPanel,preSubmit:f,handlesLink:function(a){return!a.isCustomAtlassianContentLink()},
setURL:function(a){b.val(a);b.keyup();b.change()},getURL:e}}}});require("confluence/module-exporter").safeRequire("confluence-link-browser/link-browser-tab-weblink",function(c){require("ajs").bind("dialog-created.link-browser",c.dialogCreatedLinkBrowserWeblink)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-resources', location = 'js/link-browser-tab-advanced.js' */
define("confluence-link-browser/link-browser-tab-advanced",["jquery","ajs","confluence/legacy"],function(g,d,k){return{dialogCreatedLinkBrowserAdvanced:function(n,e){var b,f,h,j,l=function(a){a=g(a);if(a.length){var c=a.find("a:first");c.length?c.hasClass("unresolved")?(a=c.attr("shortcut-key"),c=c.attr("data-space-key"),a?f.text(d.format("{0} is not a recognised shortcut",a)):c&&f.text(d.format("{0} is not a recognised space",c))):(a=k.Link.fromNode(c[0],b.val()),
e.setLink(a)):f.text("The markup provided is not valid link markup")}},m=function(a,c,b){d.debug("Error during conversion: textStatus = "+c+", errorThrown = "+b);f.text("An internal server error occurred")},i=e.tabs.advanced={createPanel:function(a){h=a.baseElement;b=h.find("input[name='advanced-link']");f=h.find("div[name='advanced-error']");h.find("form").keydown(function(a){13===a.keyCode&&!e.isSubmitButtonEnabled()&&a.preventDefault()});b.keyup(function(){clearTimeout(j);
f.text("");b.val()&&(j=setTimeout(function(){var a={wiki:"["+b.val()+"]",entityId:d.Meta.get("content-id"),spaceKey:d.Meta.get("space-key")};g.ajax({type:"POST",contentType:"application/json; charset=utf-8",url:d.params.contextPath+"/rest/tinymce/1/wikixhtmlconverter",data:g.toJSON(a),dataType:"text",success:l,error:m,timeout:1E4})},200))})},setLink:function(a){b.val(a);b.keyup();b.change()},getLink:function(){return b.val()},onSelect:function(){e.moveLocationPanel(h.find("form"));this.openedLink&&
(this.openedLink.isShortcutLink()?i.setLink(this.openedLink.getShortcut()):this.openedLink.getResourceId()?i.setLink(this.openedLink.getDefaultAlias()):i.setLink("#"+this.openedLink.getAnchor()),e.setLink(this.openedLink));setTimeout(function(){b.focus()})},onDeselect:function(){e.restoreLocationPanel()},handlesLink:function(a){return a.isShortcutLink()||a.hasAnchor()}}}}});
require("confluence/module-exporter").safeRequire("confluence-link-browser/link-browser-tab-advanced",function(g){require("ajs").bind("dialog-created.link-browser",g.dialogCreatedLinkBrowserAdvanced)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-resources', location = 'templates/link-browser.soy' */
// This file was automatically generated from link-browser.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.LinkBrowser.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.LinkBrowser == 'undefined') { Confluence.Templates.LinkBrowser = {}; }


Confluence.Templates.LinkBrowser.searchPanel = function(opt_data, opt_ignored) {
  return '<form class="aui search-form" onsubmit="return false;"><fieldset class="inline"><div class="search-input"><label for="link-search-text" id="linkSearch-label" class="assistive">' + soy.$$escapeHtml("Search") + '</label><input id="link-search-text" type="text" tabindex="0" class="text autocomplete-search" name="linkSearch" autocomplete="off" data-search-link-message="' + soy.$$escapeHtml("Search for \x26lsquo;{0}\x26rsquo;") + '"></div><select tabindex="0" class="search-space select" id="search-panel-space"><option value="">' + soy.$$escapeHtml("All content") + '</option><option value=""> </option></select><button type="submit" tabindex="0" class="aui-button" id="search-panel-button">' + soy.$$escapeHtml("Search") + '</button></fieldset></form><div class="message-panel hidden"></div><div id="search-results-table" class="data-table hidden"></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.LinkBrowser.searchPanel.soyTemplateName = 'Confluence.Templates.LinkBrowser.searchPanel';
}


Confluence.Templates.LinkBrowser.recentlyviewedPanel = function(opt_data, opt_ignored) {
  return '<div class="recently-viewed-panel"><div class="message-panel hidden"></div><div class="data-table"></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.LinkBrowser.recentlyviewedPanel.soyTemplateName = 'Confluence.Templates.LinkBrowser.recentlyviewedPanel';
}


Confluence.Templates.LinkBrowser.attachmentsPanel = function(opt_data, opt_ignored) {
  return '<div class="attach-file-form"><form method="post" enctype="multipart/form-data" id="attachments-attachfile-form" action="' + soy.$$escapeHtml("") + '/pages/attachfile.action" class="aui"><p>' + soy.$$escapeHtml("Link to a file that is attached to this page or attach a new one.") + '</p><div class="upload-field field-group"><label for="file_0">' + soy.$$escapeHtml("Upload file") + '</label> <input type="file" name="file_0" class="upfile" id="file_0"> <input type="hidden" name="minorEdit_0" value="true"></div><input type="hidden" name="atl_token" value="' + soy.$$escapeHtml(opt_data.atlToken) + '" /></form><div class="upload-in-progress upload-field hidden">' + soy.$$escapeHtml("Upload in progress\u2026") + '</div><div class="warning"><ul class="hidden message-panel"></ul></div></div><div class="message-panel hidden"></div><div id="attachments-table" class="attachment-list data-table"></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.LinkBrowser.attachmentsPanel.soyTemplateName = 'Confluence.Templates.LinkBrowser.attachmentsPanel';
}


Confluence.Templates.LinkBrowser.weblinkPanel = function(opt_data, opt_ignored) {
  return '<form class="aui" onsubmit="return false;"><div class="field-group"><label id="destination-label" for="weblink-destination">' + soy.$$escapeHtml("Address") + '</label><input type="text" tabindex="0" class="text" id="weblink-destination" name="destination"><div class="web-link-desc description">' + soy.$$escapeHtml("Web, email or any other internet address") + '</div></div></form>';
};
if (goog.DEBUG) {
  Confluence.Templates.LinkBrowser.weblinkPanel.soyTemplateName = 'Confluence.Templates.LinkBrowser.weblinkPanel';
}


Confluence.Templates.LinkBrowser.advancedPanel = function(opt_data, opt_ignored) {
  return '<form class="aui" onsubmit="return false;"><div class="advanced-desc title">' + soy.$$filterNoAutoescape(AJS.format("Here you can insert a link into the page using \x3ca href\x3d\x22{0}\x22 target\x3d\x22_blank\x22\x3ewiki markup\x3c/a\x3e.","https://docs.atlassian.com/confluence/docs-59/Links")) + '</div><div class="field-group"><label id="advanced-label" for="advanced-link">' + soy.$$escapeHtml("Link") + '</label><input type="text" tabindex="0" class="text" id="advanced-link" name="advanced-link"><div class="advanced-desc description">' + soy.$$escapeHtml("To insert a link to a new page, type in the desired page title.") + '<br/>' + soy.$$escapeHtml("To insert an anchor link, type #anchorname.") + '</div><div name="advanced-error" class="advanced-error error"></div></div></form>';
};
if (goog.DEBUG) {
  Confluence.Templates.LinkBrowser.advancedPanel.soyTemplateName = 'Confluence.Templates.LinkBrowser.advancedPanel';
}


Confluence.Templates.LinkBrowser.locationPanel = function(opt_data, opt_ignored) {
  return '<div id="link-browser-location" class="location-info"><form class="aui"><div class="row hidden field-group"><label class="link-location-label" for="breadcrumbs-link">' + soy.$$escapeHtml("Link location") + '</label><div class="breadcrumbs-container" id="breadcrumbs-link"><div class="breadcrumbs-line"><ol id="breadcrumbs-container" class="breadcrumbs"></ol></div></div></div></form><div class="row link-text"><form class="aui" onsubmit="return false;"><div class="field-group"><label for="alias" id="alias-label">' + soy.$$escapeHtml("Link text") + '</label><input type="text" tabindex="0" class="text" name="alias" id="alias"></div></form></div><div class="row link-image hidden"><div class="readonly"><label for="link-image-filename">' + soy.$$escapeHtml("Link image") + '</label><span id="link-image-filename" class="content-type-attachment-image"></span></div></div><div class="row link-mixed hidden"><div class="readonly"><label for="link-mixed-content">' + soy.$$escapeHtml("Link text") + '</label><span id="link-mixed-content"></span></div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.LinkBrowser.locationPanel.soyTemplateName = 'Confluence.Templates.LinkBrowser.locationPanel';
}


Confluence.Templates.LinkBrowser.helpLink = function(opt_data, opt_ignored) {
  return '<div class="dialog-help-link"><a href="' + soy.$$escapeHtml("https://docs.atlassian.com/confluence/docs-59/Links") + '" target="_blank">' + soy.$$escapeHtml("Help") + '</a></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.LinkBrowser.helpLink.soyTemplateName = 'Confluence.Templates.LinkBrowser.helpLink';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
