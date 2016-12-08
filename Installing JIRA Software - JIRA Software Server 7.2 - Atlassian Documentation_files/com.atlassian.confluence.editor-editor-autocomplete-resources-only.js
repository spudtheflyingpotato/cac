;try {
/* module-key = 'com.atlassian.confluence.editor:editor-autocomplete-resources-only', location = 'tinymce3/plugins/autocomplete/autocomplete-settings.js' */
define("confluence-editor/tinymce3/plugins/autocomplete/autocomplete-settings",["ajs"],function(b){return{Settings:{},log:function(d){return function(e,f,a){var c=null!=a&&"object"!==typeof a;b.debug(d+" - "+e+" : "+(f||null)+(null!=a?c?" = "+a:" >":""));a&&!c&&b.debug(a)}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/tinymce3/plugins/autocomplete/autocomplete-settings","Confluence.Editor.Autocompleter");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-autocomplete-resources-only', location = 'tinymce3/plugins/autocomplete/autocomplete-util.js' */
define("confluence-editor/tinymce3/plugins/autocomplete/autocomplete-util",["ajs","jquery"],function(f,k){var h=function(a,c,g,b,d){var e;a.statusMessage?e=[[{html:a.statusMessage,className:"error"}]]:(a=c?f.REST.makeRestMatrixFromSearchData(a):f.REST.makeRestMatrixFromData(a,b),e=f.REST.convertFromRest(a));g(e,c,function(a,b){d&&typeof d==="function"&&d(e,a,b)})};return{dropdownLink:function(a,c,g){return"<a href='#' class='"+(c||"")+"'><span class='icon "+(g||"")+"'></span><span>"+a+"</span></a>"},
getRestData:function(a,c,g,b,d,e,f){var i=c(b),j=a.settings.cacheManager,c=j.get(b);i?(a=k.ajax({type:"GET",url:i,data:g(a,b),dataType:"json",global:!1,timeout:5E3}),a.done(function(a){j.put(b,a)}),c?h(c,b,d,e,f):(a.done(function(a){h(a,b,d,e,f)}),a.fail(function(a,c){"timeout"==c&&h({statusMessage:"Timeout",query:b},b,d,e)}))):d([],b)}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/tinymce3/plugins/autocomplete/autocomplete-util","Confluence.Editor.Autocompleter.Util");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-autocomplete-resources-only', location = 'tinymce3/plugins/autocomplete/autocomplete-control.js' */
define("confluence-editor/tinymce3/plugins/autocomplete/autocomplete-control",["ajs","jquery","confluence/legacy","confluence-editor/tinymce3/plugins/autocomplete/autocomplete-settings","document"],function(c,g,t,z,A){var v=function(d,r){var a,e,h=z.log("Autocompleter.Control"),s=require("tinymce"),b={},p=d.selection,u=p.getRng(!0),n=u.startOffset,q=u.startContainer;e=q.nodeValue;var l=r.leadingChar,x=d.getDoc(),m=r.backWords||0,i=z.Settings[l||"["];a=!i||"undefined"===typeof i.preventStartNodes?
"div.code, a[href], img, pre":i.preventStartNodes;if(g("#autocomplete",x).length)return c.debug("init","Autocomplete already exists, returning null."),null;b.backWords=m;b.maxResults=r.maxResults||10;null==e&&(u.collapsed&&n&&q.childNodes[n-1])&&(q=q.childNodes[n-1],n=(e=q.nodeValue)&&e.length||0);var o="";if(null!=e)for(var o=(e+"").substring(0,n),k=q.previousSibling;k&&3===k.nodeType;)o=k.nodeValue+o,k=k.previousSibling;var k=[/([("'<\(\u201c\u2018]\[|[\ufeff\u200b\u2014\s\xa0].)$/,/(\([^!])$/,
/(\/\/)$/],f;if(f=!m)if(f=o){a:{o+=l;f=0;for(var F=k.length;f<F;f++)if(k[f].test(o)){k=!0;break a}k=!1}f=!k}if(f)return h("init","Cursor is in wrong word location to start autocomplete, returning null."),null;if(g(q).closest(a).length)return h("init","Cursor is in wrong node to start autocomplete, returning null."),null;t.PropertyPanel&&t.PropertyPanel.current&&(t.PropertyPanel.shouldCreate=!1,t.PropertyPanel.destroy());!l&&null==e&&(c.debug("init","No text available for suggestion, range is",u),
e="");b.getContainer=function(){return g("#autocomplete",x)};a="";if(u.collapsed&&m&&e){a=q;e=n;k=function(b,j,c){!j.global&&(j=RegExp(j.source,"g"+"i".slice(0,j.ignoreCase)+"m".slice(0,j.multiLine)));c==null?c=b.length:c<0&&(c=0);for(var b=b.substring(0,c+1),c=-1,a=0,d;(d=j.exec(b))!=null;){c=d.index;j.lastIndex=++a}return c};for(o=0;o<m;o++){f=a.nodeValue.substring(0,e);for(e=k(f,/\s+/,e);-1==e;)if((f=a.previousSibling)&&3===f.nodeType)a=f,(f=f.nodeValue)&&(e=k(f,/\s+/,f.length));else{o=m;break}}e+=
1;s.isIE&&1==m?(m=p.getRng(),m.moveStart("character",e-n),m.select()):(m=p.getRng(!0),m.setStart(a,e),m.setEnd(q,n),p.setRng(m))}a=p.getContent({format:"text"}).replace("\n","");h("init","suggestionHtml",a);n=c("span").attr("id","autocomplete");l&&n.append(c("span").attr("id","autocomplete-trigger").text(l));l=c("span").attr("id","autocomplete-search-text");l.text(c.Rte.HIDDEN_CHAR);n.append(l);p.setNode(n[0]);var w=b.getContainer();b.previousSearchText="";b.settings=i;!1!==i.cache&&!i.cacheManager?
i.cacheManager=new c.Confluence.localStorageCacheManager(i.ch):!1===i.cache&&!i.cacheManager&&(i.cacheManager={get:g.noop,put:g.noop});i=g("#autocomplete-search-text",b.getContainer());l=g(x.createElement("span")).text(a||c.Rte.HIDDEN_CHAR);i.empty().append(l);p.select(l[0],!0);p.collapse();var B=function(c,j){if(b.onBeforeKey&&!b.onBeforeKey(j,b.text())){s.dom.Event.cancel(j);h("before","blocked by onBeforeKey: "+j.keyCode);return false}},C=function(c,j){var a=p.getRng(true),d=b.getContainer(),e=
a.startContainer,a=e.parentNode;e.nodeType===3&&(a=a.parentNode);var f=(e=a?a.parentNode:null)?e.parentNode:null,d=a!==d[0]&&e!==d[0]&&f!==d[0];if(j.keyCode===27||d){h("after","dying because of: "+(d?"outside search span":"escape pressed"));b.die()}else if(b.onAfterKey&&!b.onAfterKey(j,b.text())){s.dom.Event.cancel(j);h("after","blocked by onAfterKey: "+j.keyCode);return false}},D=function(c,a){if(b.onKeyPress&&!b.onKeyPress(a,b.text())){s.dom.Event.cancel(a);h("press","blocked by onKeyPress: "+a.keyCode);
return false}},E=function(a,c){if(b.getContainer()[0]!=c.target.parentNode){h("click","Clicked outside of autocomplete, closing.");b.die()}};d.onKeyDown.addToTop(B);d.onKeyUp.addToTop(C);d.onKeyPress.addToTop(D);d.onClick.addToTop(E);b.word="";r.keepAlias?h("init","No suggestion based on previous or selected text"):b.word=a;c.Rte.showElement(w[0]);i=s.DOM.getPos(w[0]);l=w.height();b.left=i.x;b.top=i.y+l;b.text=function(a){var d=g("#autocomplete-search-text",b.getContainer());if(a!=null){d.html(a);
return this}a=c.escapeEntities(d.text());return a.replace(c.Rte.HIDDEN_CHAR,"")};b.plainText=function(a){var d=g("#autocomplete-search-text",b.getContainer());if(a!=null){d.text(a);return this}a=d.text();return a.replace(c.Rte.HIDDEN_CHAR,"")};var y=function(a,c){var d=b.getContainer();return v.replaceWithTextAndGetRange(d,a,c)};b.replaceWithSelectedSearchText=function(){var a=b.text();h("replaceWithSelectedSearchText",a);y(a,false);return a};b.die=function(a){if(b.dying)c.debug("die","Already dying, returning.");
else{b.dying=true;if(t.PropertyPanel)t.PropertyPanel.shouldCreate=true;if(b.getContainer().length){h("die","Tearing down autocomplete, cleaning up autocompleter");a=(a||r.backWords?"":b.settings.ch)+b.text();u=y(a,true)}setTimeout(function(){h("die","Removing autocomplete-control keyboard listeners.");d.onKeyDown.remove(B);d.onKeyUp.remove(C);d.onClick.remove(E);d.onKeyPress.remove(D)},1);c.Rte.unbindScroll("autocomplete");g(A).unbind("click.autocomplete-outside");this.onDeath&&this.onDeath()}};c.Rte.bindScroll("autocomplete",
function(a){c.debug("scrolling:",a);if(c.Rte.isAnyPartShown(w))b.onScroll();else b.die()});g(A).bind("click.autocomplete-outside",function(a){g(a.target).closest("#autocomplete-dropdown, .aui-datepicker-dialog, .ui-datepicker-header").length||b.die()});c.Rte.getEditor().onBeforeExecCommand.add(function(a,c){c=="mceConfSavePage"&&b.die()});b.update=function(a){c.Rte.BookmarkManager.storeBookmark();y("",true);this.settings.update(this,a)};b.removeSpan=function(){b.getContainer().remove()};return b};
v.removeOrphanedControl=function(){var d=g(c.Rte.getEditor().getDoc()),r=d.find("#autocomplete"),a;if(!r.length)return null;a=d.find("#autocomplete-trigger").text();d=d.find("#autocomplete-search-text").text();v.replaceWithTextAndGetRange(r,d,!1);return{leadingChar:a,content:d}};v.replaceWithTextAndGetRange=function(d,g,a){if(d.length){var g=g||"",a=a||!g,e=c.Rte.getEditor(),h=d[0].parentNode,s=c.Rte.Content.getChildIndex(h,d[0]),b=a?1:0,a=e.selection.getRng(!0);a.setStart(h,s+b);a.setEnd(h,s+1);
d.before(g||c.Rte.HIDDEN_CHAR).remove();e.selection.setRng(a);return a}c.log("replaceWithTextAndGetRange Error: attempting to replace a non-existent element")};return v});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/tinymce3/plugins/autocomplete/autocomplete-control","Confluence.Editor.Autocompleter.Control");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-autocomplete-resources-only', location = 'tinymce3/plugins/autocomplete/autocomplete-manager.js' */
define("confluence-editor/tinymce3/plugins/autocomplete/autocomplete-manager",["ajs","jquery","window","confluence-editor/tinymce3/plugins/autocomplete/autocomplete-settings","confluence-editor/tinymce3/plugins/autocomplete/autocomplete-control"],function(e,j,p,g,k){g.log("Autocompleter.Manager");var c,a,n=function(m){c=k(e.Rte.getEditor(),m);if(!c)return!1;var q=j(p).width(),h,f=function(b){var i=j("#autocomplete-dropdown"),d=c.getContainer(),a,m,f,g,l;i.length||(i=e("div").addClass("aui-dd-parent quick-nav-drop-down").attr("id",
"autocomplete-dropdown").appendTo("body"));a=e.Position.spaceAboveBelow(e.Rte.getEditorFrame(),d);b.find("ol:has(a.menu-header)").addClass("top-menu-item");b.find("ol:empty").hide();i.append(b);f=e.Rte.Content.offset(d);g=Math.max(i.width()+f.left-q+10,0);m=f.left-g-0;b=b.outerHeight(!0);l=b+10;if(h){var k;k=1==h?a.above>=l:a.below>=l;k||(h=null)}h||(h=a.below>=l?2:a.above>=l?1:a.below>a.above?2:1);a=i.find(".autocomplete-dropdown-arrow");a.length||(a=j('<div class="autocomplete-dropdown-arrow"></div>'));
1===h?(a.addClass("autocomplete-dropdown-bottom-arrow").css({top:b-1}),d=f.top-b-10):(a.removeClass("autocomplete-dropdown-bottom-arrow").css("top",""),d=f.top+d.height()+10);a.css({left:g}).appendTo(i);i.css({position:"absolute",top:d,left:m})};a=e.inputDrivenDropdown({onShow:function(b){e.trigger("rte-autocomplete-on-show",{triggerChar:c.settings.ch});var a=e.Rte.getEditorFrame();a&&a.shim&&a.shim.hide();b.find("a.menu-header").unbind().click(function(b){b.preventDefault();c.die()});this.reset();
c.settings.selectFirstItem&&b.find("a:not('.menu-header')").length&&e.dropDown.current.moveDown()},dropdownPlacement:f,onDeath:function(){j("#autocomplete-dropdown").remove()},ajsDropDownOptions:{selectionHandler:function(b,a){b.preventDefault();var d=j.data(a[0],"properties");d&&"function"===typeof d.callback?d.callback(c):"menu-header"!==d.className&&c.update(d);c.die()},moveHandler:function(b,a){var c=e.dropDown.current;b&&b.find("a").is(".menu-header")&&("up"==a?c.moveUp():c.moveDown())},className:"autocomplete "+
c.settings.dropDownClassName},getDataAndRunCallback:function(b){c&&c.settings.getDataAndRunCallback&&c.settings.getDataAndRunCallback(c,b,function(i,d,f){i.unshift([{className:"menu-header dropdown-prevent-highlight",href:"#",name:c.settings.getHeaderText(c,b)}]);i.push(c.settings.getAdditionalLinks(c,b,f));a&&a.show(i,d,[d])})},dropDownDelay:c.settings.dropDownDelay});c.onBeforeKey=function(b,a){var c=require("tinymce");return 40===b.keyCode||38===b.keyCode||13===b.keyCode?(c.dom.Event.cancel(b),
!1):27===b.keyCode||9===b.keyCode||8===b.keyCode&&!a?(this.die(8===b.keyCode),!1):!0};c.onKeyPress=function(b){var a=require("tinymce"),d=String.fromCharCode(j.browser.msie?b.keyCode:b.which);if(13===b.keyCode)return a.dom.Event.cancel(b),!1;-1!==e.indexOf(this.settings.endChars,d)&&c.die();return!0};var g=/\S{2,}/;c.onAfterKey=function(b,f){if(40===b.keyCode||38===b.keyCode||13===b.keyCode){var d=e.dropDown.current;if(!d)return!1;if(-1==d.getFocusIndex()&&13===b.keyCode)return c.die(),c=null,!0;
b.which||(b.which=b.keyCode);return d.moveFocus(b)}((d=8===b.keyCode&&!f)||g.test(f))&&a.change(f,d);return!0};c.onDeath=function(){a&&(a.remove(),a.closing=!0)};c.onScroll=function(){a.dd&&f(a.dd.$)};a.change(c.text(),"force");return!0},o={getInputDrivenDropdown:function(){return a},triggerListener:function(c,e){var h=require("tinymce");if(e.metaKey)return!0;var f=j.browser.msie?e.keyCode:e.which;a&&a.closing&&(a=null);f=String.fromCharCode(f);!a&&f in g.Settings&&n({leadingChar:f})&&h.dom.Event.cancel(e);
return!0},shortcutFired:function(e,g){var h=g?0:1;a&&a.closing&&(a=null);a&&(h=g?0:c.backWords+1,c.die(),c=null);return n({leadingChar:e,backWords:h})},reattach:function(){var a=k.removeOrphanedControl();a&&o.shortcutFired(a.leadingChar)}};return o});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/tinymce3/plugins/autocomplete/autocomplete-manager","Confluence.Editor.Autocompleter.Manager");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-autocomplete-resources-only', location = 'tinymce3/plugins/autocomplete/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/autocomplete/editor_plugin_src",["tinymce","confluence/legacy","ajs"],function(a,b,c){return{init:function(a){b.Editor.Autocompleter.Settings={};a.onPostRender.add(function(){c.debug("Autocomplete enabled, adding keyPress listener");a.onKeyPress.addToTop(b.Editor.Autocompleter.Manager.triggerListener);c.trigger("ready-editor-autocomplete")});a.onUndo.add(b.Editor.Autocompleter.Manager.reattach);a.onRedo.add(b.Editor.Autocompleter.Manager.reattach)},getInfo:function(){return{longname:"Auto Complete",
author:"Atlassian",authorurl:"http://www.atlassian.com",version:a.majorVersion+"."+a.minorVersion}}}});require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/autocomplete/editor_plugin_src",function(a){var b=require("tinymce");b.create("tinymce.plugins.AutoComplete",a);b.PluginManager.add("autocomplete",b.plugins.AutoComplete)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-autocomplete-resources-only', location = 'tinymce3/plugins/autocomplete-link/autocomplete-settings-links.js' */
define("confluence-editor/tinymce3/plugins/autocomplete-link/autocomplete-settings-links",["jquery","ajs","confluence/legacy"],function(k,d,e){return function(){var h=e.Editor.Autocompleter,i=function(a){return a?d.contextPath()+"/rest/prototype/1/search.json":d.Meta.get("remote-user")?d.contextPath()+"/rest/prototype/1/session/history.json":null},j=function(a,b){var c={"max-results":a.maxResults};b&&(c.query=e.unescapeEntities(b),c.search="name",c.preferredSpaceKey=d.Meta.get("space-key"));return c};
e.Editor.Autocompleter.Settings["["]={ch:"[",cache:!1,endChars:["]"],dropDownClassName:"autocomplete-links",selectFirstItem:!0,getHeaderText:function(){return "Link suggestions"},getAdditionalLinks:function(a,b,c){b?(a="Search for &lsquo;{0}&rsquo;",a=d.format(a,b)):a="Search";var f=e.Editor.LinkBrowser,a=[{className:"search-for",name:a,href:"#",callback:function(a){a.replaceWithSelectedSearchText();
a=f.open({panelKey:f.SEARCH_PANEL});a.doSearch(a.getLocationPresenter().getRawLinkText())}},{className:"dropdown-insert-link",html:h.Util.dropdownLink("Insert web link","dropdown-prevent-highlight","editor-icon"),callback:function(a){a.replaceWithSelectedSearchText();f.open({panelKey:f.WEBLINK_PANEL})}}];c&&c(b,a);return a},getDataAndRunCallback:function(a,b,c){e.Editor.Autocompleter.Util.getRestData(a,i,j,b,c,"content",function(a,b,c){if(b){var g;if(!(g=2>a.length))a=
a[1][0].restObj,a="page"===a.type?a.space.key==d.Meta.get("space-key")&&a.title.toLowerCase()===b.toLowerCase():!1,g=!a;g&&c.push({className:"insert-create-page-link",html:h.Util.dropdownLink("Insert link to create page","dropdown-prevent-highlight","editor-icon"),callback:function(a){var c=e.unescapeEntities(b),c=e.Link.createLinkToNewPage(c,d.Meta.get("space-key"));a.update(c)}})}})},update:function(a,b){b.restObj&&(b=e.Link.fromREST(b.restObj));b.insert()}}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-autocomplete-resources-only', location = 'tinymce3/plugins/autocomplete-link/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/autocomplete-link/editor_plugin_src",["tinymce","confluence/legacy","confluence-editor/tinymce3/plugins/autocomplete-link/autocomplete-settings-links"],function(a,b,c){return{init:function(a){a.addCommand("mceConfAutocompleteLink",function(){b.Editor.Autocompleter.Manager.shortcutFired("[")});a.addShortcut("ctrl+shift+k",a.getLang("AutoComplete"),"mceConfAutocompleteLink");c()},getInfo:function(){return{longname:"Auto Complete Link",author:"Atlassian",authorurl:"http://www.atlassian.com",
version:a.majorVersion+"."+a.minorVersion}}}});require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/autocomplete-link/editor_plugin_src",function(a){var b=require("tinymce");b.create("tinymce.plugins.AutoCompleteLink",a);b.PluginManager.add("autocompletelink",b.plugins.AutoCompleteLink)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-autocomplete-resources-only', location = 'tinymce3/plugins/autocomplete-media/autocomplete-settings-media.js' */
define("confluence-editor/tinymce3/plugins/autocomplete-media/autocomplete-settings-media",["jquery","ajs","confluence-editor/utils/attachments-insert-utils","confluence/legacy","tinymce"],function(h,d,i,f,g){return function(){var j=function(c){var b=d.params.attachmentSourceContentId||d.Meta.get("content-id");return c?d.contextPath()+"/rest/prototype/1/search.json":+b?d.contextPath()+"/rest/prototype/1/content/"+b+"/attachments.json":null},k=function(c,b){var a=d.MacroBrowser.getMacroMetadata("view-file")?
[]:"image word excel pdf powerpoint multimedia".split(" ");return b?{type:"attachment",attachmentType:a,search:"name","max-results":c.maxResults,query:b}:{attachmentType:a,"max-results":c.maxResults}};f.Editor.Autocompleter.Settings["!"]={ch:"!",cache:!1,endChars:["!"],dropDownClassName:"autocomplete-media",selectFirstItem:!0,getHeaderText:function(){return d.MacroBrowser.getMacroMetadata("view-file")?"File suggestions":"Media suggestions"},
getAdditionalLinks:function(){var c="Open file library";return[{className:"dropdown-insert-image",html:f.Editor.Autocompleter.Util.dropdownLink(c,"dropdown-prevent-highlight","editor-icon"),callback:function(b){b.replaceWithSelectedSearchText();f.Editor.defaultInsertImageDialog()}},{className:"dropdown-insert-macro",html:f.Editor.Autocompleter.Util.dropdownLink("Insert other media","dropdown-prevent-highlight",
"editor-icon"),callback:function(b){b.replaceWithSelectedSearchText();g.confluence.macrobrowser.macroBrowserToolbarButtonClicked({selectedCategory:"media"})}}]},getDataAndRunCallback:function(c,b,a){f.Editor.Autocompleter.Util.getRestData(c,j,k,b,a,"attachment")},update:function(c,b){d.trigger("rte-autocomplete-on-insert",{triggerChar:"!",selectedFile:b});var a=b.restObj,e=d.REST.wikiLink(a),f=a&&a.title||b.name;"Image"==a.niceType?(e.destination&&e.destination.replace(/^\^/,""),a=h.extend({filename:f,
contentId:b.ownerId||a.ownerId},e.params),g.confluence.ImageUtils.insertFromProperties(a)):d.MacroBrowser.getMacroMetadata("view-file")&&"Multimedia"!==a.niceType?i.insertFilePlaceholder({name:f,page:a.parentTitle,space:a.space?a.space.key:"",date:a.datePath,ownerId:a.ownerId}):this._insertFile(f,b,e)},_insertFile:function(c,b,a){var e;switch(b.restObj.niceType){case "PDF Document":e="viewpdf";break;case "Word Document":e="viewdoc";break;case "Excel Spreadsheet":e="viewxls";break;case "PowerPoint Presentation":e=
"viewppt";break;case "Multimedia":e="multimedia"}c={page:a.destination.substring(0,a.destination.indexOf("^")),name:c};d.MacroBrowser.getMacroJsOverride("viewdoc").beforeParamsRetrieved(c);c.page||delete c.page;e={contentId:d.Meta.get("content-id")||"0",macro:{name:e,params:c,body:""}};g.confluence.MacroUtils.insertMacro(e)}}}});require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/autocomplete-media/autocomplete-settings-media");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-autocomplete-resources-only', location = 'tinymce3/plugins/autocomplete-media/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/autocomplete-media/editor_plugin_src",["tinymce","confluence/legacy","confluence-editor/tinymce3/plugins/autocomplete-media/autocomplete-settings-media"],function(a,b,c){return{init:function(a){a.addCommand("mceConfAutocompleteImage",function(){b.Editor.Autocompleter.Manager.shortcutFired("!")});a.addShortcut("ctrl+shift+m",a.getLang("AutoComplete"),"mceConfAutocompleteImage");c()},getInfo:function(){return{longname:"Auto Complete Media",author:"Atlassian",
authorurl:"http://www.atlassian.com",version:a.majorVersion+"."+a.minorVersion}}}});require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/autocomplete-media/editor_plugin_src",function(a){var b=require("tinymce");b.create("tinymce.plugins.AutoCompleteMedia",a);b.PluginManager.add("autocompletemedia",b.plugins.AutoCompleteMedia)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-autocomplete-resources-only', location = 'tinymce3/plugins/autocomplete-media/autocomplete-analytics-media.js' */
require(["ajs"],function(a){a.bind("init.rte",function(){a.bind("rte-autocomplete-on-show",function(d,c){"!"===c.triggerChar&&a.trigger("analytics",{name:"confluence.editor.autocomplete.trigger",data:{type:"media"}})});a.bind("rte-autocomplete-on-insert",function(d,c){if("!"===c.triggerChar){var b=c.selectedFile;b&&b.name&&(b={extension:b.name.split(".").pop(),type:"media"},a.trigger("analytics",{name:"confluence.editor.autocomplete.insert",data:b}))}})});a.bind("rte-destroyed",function(){a.unbind("rte-autocomplete-on-insert");
a.unbind("rte-autocomplete-on-show")})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-autocomplete-resources-only', location = 'tinymce3/plugins/autocomplete-macro/autocomplete-settings-macros.js' */
define("confluence-editor/tinymce3/plugins/autocomplete-macro/autocomplete-settings-macros",["jquery","underscore","ajs","tinymce","confluence/legacy"],function(h,n,b,e,d){return function(){function j(c){h("#autocomplete-dropdown .top-menu-item").spin(c)}var f=function(c,a){var g=a.presetMacroMetadata;c.replaceWithSelectedSearchText();g?b.MacroBrowser.hasRequiredParameters(g)||g.alwaysShowConfig?e.confluence.macrobrowser.macroBrowserToolbarButtonClicked(a):(b.Rte.BookmarkManager.storeBookmark(),e.confluence.MacroUtils.insertMacro({contentId:b.Meta.get("content-id")||
"0",macro:{name:g.macroName,body:""}})):e.confluence.macrobrowser.macroBrowserToolbarButtonClicked(a)},k=function(c){if(c.hidden&&!b.MacroBrowser.isHiddenMacroShown(c))return null;var a={className:"autocomplete-macro-"+c.macroName,callback:function(b){f(b,{ignoreEditorSelection:!0,presetMacroMetadata:c})}};c.icon?(a.name=c.title,a.href="#",a.icon=(c.icon.relative?b.params.staticResourceUrlPrefix:"")+c.icon.location):a.html=d.Editor.Autocompleter.Util.dropdownLink(c.title);return a};d.Editor.Autocompleter.Settings["{"]=
{ch:"{",cache:!1,endChars:["}",":","{"],dropDownClassName:"autocomplete-macros",dropDownDelay:0,selectFirstItem:!0,getHeaderText:function(){return "Macro suggestions"},getAdditionalLinks:function(){return[{className:"dropdown-insert-macro",html:d.Editor.Autocompleter.Util.dropdownLink("Open macro browser","dropdown-prevent-highlight","editor-icon"),callback:function(b){var a=b.text();f(b,{searchText:a})}}]},getDataAndRunCallback:function(c,
a,g){function e(a){a.preventDefault();a.stopPropagation();b.trigger("analytics",{name:"autocomplete-macrobrowser.load-retry"});b.MacroBrowser.reset();b.MacroBrowser.preLoadMacro();i.getDataAndRunCallback.apply(i,f)}var d=b.MacroBrowser.getMetadataPromise(),i=this,f=arguments;i.alreadyBinded||(i.alreadyBinded=!0,d.always(function(){var d;if(a){d=[];for(var e=b.MacroBrowser.searchSummaries(a,{keywordsField:"keywordsNoDesc"}),f=0,o=e.length;f<o;f++){var l=k(e[f]);if(l&&d.push(l)==c.maxResults)break}}else{var p=
b.MacroBrowser.metadataList,m=[];h("#macro-insert-list li").each(function(){var b=h(this),a=n.find(p,function(a){return a.macroName===b.attr("data-macro-name")});a&&(a=k(a))&&m.push(a)});d=m}j(!1);g([d],a);i.alreadyBinded=!1}),d.fail(function(){b.trigger("analytics",{name:"autocomplete-macrobrowser.fail-to-load"});b.messages.warning("#autocomplete-dropdown ol:nth(1)",{title:"Failed to get macro details",body:'<p><a id="macro-retry-link" href="#">'+"Try again"+
"</a></p>"});h("#macro-retry-link").click(e);h("#autocomplete-dropdown ol:nth(1)").show()}));"pending"===d.state()&&(g([],a),j(!0))},update:function(){throw Error("All items in the Macro Autocomplete dropdown must have a callback function");}}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-autocomplete-resources-only', location = 'tinymce3/plugins/autocomplete-macro/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/autocomplete-macro/editor_plugin_src",["tinymce","confluence-editor/tinymce3/plugins/autocomplete-macro/autocomplete-settings-macros"],function(b,a){return{init:function(){a()},getInfo:function(){return{longname:"Auto Complete Macro",author:"Atlassian",authorurl:"http://www.atlassian.com",version:b.majorVersion+"."+b.minorVersion}}}});
require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/autocomplete-macro/editor_plugin_src",function(b){var a=require("tinymce");a.create("tinymce.plugins.AutoCompleteMacro",b);a.PluginManager.add("autocompletemacro",a.plugins.AutoCompleteMacro)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-autocomplete-resources-only', location = 'tinymce3/plugins/searchreplace/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/searchreplace/editor_plugin_src",["jquery","ajs","confluence/legacy","document","tinymce"],function(f,g,c,l,e){var i=null,j=!1,h=function(c,b){b.preventDefault();b.stopPropagation()},m=function(c,b){h(c,b);var a=b.which;a||(a=b.charCode?b.charCode:b.keyCode);48>a||i.push(a)},k=function(c){var b=f("#rte-button-searchreplace a");b.length&&(c?b.unbind("click",!1):b.bind("click",!1))};return{init:function(d){d.addCommand("mceSearchReplaceToolbar",function(){if(!j){j=
!0;var b=f("#rte-button-searchreplace"),a=!b.hasClass("active"),d=f("body"),d=!d.hasClass("no-tools")||d.hasClass("no-tools-toolbars-visible");a?(b.addClass("active"),c.Editor.searchManager||(c.Editor.searchManager=new c.Editor.SearchManager("searchreplace")),f(l).trigger("createContextToolbarRow.Toolbar",{id:"searchreplace",buttons:c.Editor.searchToolbar.Buttons,topToolbar:!0,editorAdjacent:!0,animate:d,onVisible:function(){var a;a=g.Rte.getEditor();a.onKeyDown.remove(m);a.onKeyPress.remove(h);a.onKeyUp.remove(h);
var b="";for(a=0;a<i.length;a++){var d;d=i[a];if(d>65535){d=d-65536;d=String.fromCharCode(55296+(d>>10),56320+(d&1023))}else d=String.fromCharCode(d);b=b+d}a=b.toLowerCase();c.Editor.searchManager.onVisible(a);k(true);j=false;c.Editor.searchManager.initialised=true}}).trigger("enableContextToolbarRow.Toolbar"),b=g.Rte.getEditor(),i=[],b.onKeyDown.add(m),b.onKeyPress.add(h),b.onKeyUp.add(h),c.Editor.searchManager.init(),k(!1)):(b.removeClass("active"),c.Editor.searchManager.onHide(),f(l).trigger("removeContextToolbarRow.Toolbar",
{id:"searchreplace",animate:d,onHide:function(){f(l).trigger("contextToolbarRowRemoved.Toolbar");k(!0);j=!1;c.Editor.searchManager.initialised=!1}}),k(!1),e.isGecko||frames.wysiwygTextarea_ifr.focus(),e.activeEditor.focus())}});d.addCommand("mceConfSearch",function(b,a){c.Editor.searchManager&&(a=a||{},a.backwards&&!e.activeEditor.plugins.customtoolbar.isToolbarButtonEnabled("search-toolbar-find-previous-button")?c.Editor.searchManager.focus():!a.backwards&&!e.activeEditor.plugins.customtoolbar.isToolbarButtonEnabled("search-toolbar-find-next-button")?
c.Editor.searchManager.focus():c.Editor.searchManager.find(a.backwards,a.onFound,a.onNotFound))});d.addCommand("mceConfReplace",function(b,a){c.Editor.searchManager&&(a=a||{},e.activeEditor.plugins.customtoolbar.isToolbarButtonEnabled("search-toolbar-replace-button")?c.Editor.searchManager.replace(a.onFound,a.onNotFound):a.onInactive&&a.onInactive())});d.addCommand("mceConfReplaceAll",function(b,a){c.Editor.searchManager&&(a=a||{},e.activeEditor.plugins.customtoolbar.isToolbarButtonEnabled("search-toolbar-replaceall-button")&&
c.Editor.searchManager.replaceAll(a.onReplaced,a.onNotReplaced))});d.addCommand("mceConfSearchClose",function(){c.Editor.searchManager&&d.execCommand("mceSearchReplaceToolbar",!1,null)});d.addButton("searchreplace",{title:"searchreplace.search_desc",cmd:"mceSearchReplaceToolbar"});e.isIE8||d.addShortcut("ctrl+f","searchreplace.search_desc",function(){c.Editor.searchManager&&c.Editor.searchManager.isVisible()?c.Editor.searchManager.focus():d.execCommand("mceSearchReplaceToolbar",!1,!1,{skip_undo:!0})})},
getInfo:function(){return{longname:"Search/Replace",author:"Atlassian",authorurl:"http://www.atlassian.com",infourl:"http://www.atlassian.com",version:e.majorVersion+"."+e.minorVersion}}}});require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/searchreplace/editor_plugin_src",function(f){var g=require("tinymce");g.create("tinymce.plugins.AtlassianSearchReplacePlugin",f);g.PluginManager.add("searchreplace",g.plugins.AtlassianSearchReplacePlugin)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-autocomplete-resources-only', location = 'tinymce3/plugins/searchreplace/searchreplace.js' */
define("confluence-editor/tinymce3/plugins/searchreplace/searchreplace",["confluence/legacy","jquery","tinymce"],function(t,n,d){var p=function(a){var b=null,c=null,f=null,m=null,j=null,q=function(d,e){e.content=e.content.replace(RegExp('<mark class="find-current">',"g"),"");e.content=e.content.replace(RegExp("</mark>","g"),"")};return{initialised:!1,find:function(d,e,a){var k=b.getFindInput().val();(d=f.findText(k,!0,d))&&e?e():!d&&a&&a()},replace:function(d,e){var a=b.getFindInput(),k=b.getReplaceInput(),
l="";k&&(l=k.val());(a=f.replaceText(a.val(),l,!0))&&d?d():!a&&e&&e()},replaceAll:function(d,a){var c=b.getFindInput(),k=b.getReplaceInput(),l="";k&&(l=k.val());(c=f.replaceAll(c.val(),l))&&d?d():!c&&a&&a()},focus:function(){b.focusFindTextBox()},isVisible:function(){return null!=b},init:function(){b=p.UI(a,m,j);c=new p.MarkManager;c.addListener(b);f=null;f=d.isIE?new p.implIE(b):new p.impl(b,c);d.activeEditor.undoManager.onAdd.add(q)},onVisible:function(d){if(null!=d&&0<d.length){var a=b.getFindInput(),
f=a.val();a.val(f+d)}b.onVisible()},onHide:function(){m=b.getFindInput().val();j=b.getReplaceInput().val();f.destroy();f=null;b.destroy();b=null;c.destroy();c=null;d.activeEditor.undoManager.onAdd.remove(q)},_clearSavedValues:function(){j=m=null}}};p.utils={moveCursorToEnd:function(a){if(d.isIE)a=a.createTextRange(),a.execCommand("SelectAll"),a.move("textedit"),a.select();else if(d.isGecko){var b=n(a).val().length;a.setSelectionRange(b,b)}},createTextRange:function(d,b){return d.selection?d.selection.createRange():
b.getBody().createTextRange()}};p.impl=function(a,b){var c=new d.html.Writer,f=b,m=function(a,b,e){function c(){f.markCurrentlySelectedRange();return!0}function k(){f.removeCurrentMark(!0);d.activeEditor.selection.isCollapsed()||d.activeEditor.selection.collapse();return!1}if(!a)return!1;var l=d.activeEditor,o=l.selection,h=l.getWin();f.isCursorAtCurrentMark()&&(o=f.selectCurrentMark());o.isCollapsed()||o.collapse(e);return d.isGecko?h.find(a,!1,e)?c():b?(o.select(l.getBody(),!1),o.collapse(!e),m(a,
!1,e)):k():h.find(a,!1,e,!0,!1,!1,!1)?c():k()},j={};j.findText=m;j.replaceText=function(a,b,e){if(!f.hasCurrentMark())return m(a,e);(b=f.replaceCurrentMark(b))&&d.activeEditor.selection.select(b);return m(a,e)};j.replaceAll=function(a,b){var e=d.activeEditor,j=e.getWin();f.removeCurrentMark(!1);e.execCommand("selectAll");e.selection.collapse(!0);for(var k=0;j.find(a,!1,!1,!1,!1,!1,!1);){var l=d.activeEditor;c.text(b);l.selection.setContent(c.getContent(),{format:"raw"});c.reset();l.selection.collapse(!0);
k++}e.undoManager.add();0==k?t.EditorNotification.notify("info",e.getLang("searchreplace_dlg.notfound")):1==k?t.EditorNotification.notify("success",e.getLang("searchreplace_dlg.allreplacedsingular")):1<k&&(e=e.getLang("searchreplace_dlg.allreplacedplural"),t.EditorNotification.notify("success",e.replace("{0}",k)));return k};j.destroy=function(){c=f=null};return j};p.implIE=function(a){var b={},c=a,f=null,m=new d.html.Writer,j=p.utils.createTextRange,q=function(a,l,o){if(!a)return!1;var h=d.activeEditor,
i=h.getDoc(),g=b.storedRange=b.storedRange||i.body.createTextRange();h.focus();f&&f.select();h.selection.collapse(!o);e();o&&f&&(i=i.body.createTextRange(),i.moveToElementText(n("p:first",h.getBody())[0]),g.setEndPoint("StartToStart",i),i=f.text,i.length&&(i=i.replace(/s+$/,""),i.length&&g.moveEnd("character",-i.length)),i=g.text.length,g.moveEnd("word",-1),g.text.length>=i&&g.moveEnd("character",-1),g.select(),g.collapse(!1));f=null;if(g.findText(a,o?-1:1,0))return g.scrollIntoView(),a=g,a.pasteHTML('<mark class="find-current">'+
a.htmlText+"</mark>"),c.marked(),l=d.activeEditor,l.onChange.add(s),l.onBeforeSetContent.add(s),g=a,g.select(),f=g,!0;if(l)return h.selection.select(d.activeEditor.getBody(),!0),h.selection.collapse(!o),q(a,!1,o);b.storedRange=null},s=function(){e()},e=function(){var a=d.activeEditor;a.onChange.remove(s);a.onBeforeSetContent.remove(s);var a=d.activeEditor,b=n("mark",a.getDoc());if(b.length){var e=!1,h=a.selection.getRng(!0).commonAncestorContainer;n(h).closest("mark").length&&(e=!0);b.each(function(a,
g){var d=n(g);d.contents().each(function(a,g){d.before(g)})}).remove();e&&a.execCommand("RemoveFormat")}c.markRemoved()},r=function(){e()};b.findText=q;b.replaceText=function(a,b,e){var h=d.activeEditor;if(f){var i=h.getDoc().createTextNode(b),g=n("mark",h.getDoc());g.parent()[0].replaceChild(i,g[0]);h.undoManager.add();g=h.getDoc().createElement("mark");g.setAttribute("class","current");i.parentNode.insertBefore(g,i);g.appendChild(h.getDoc().createTextNode(b));g.parentNode.removeChild(i)}return q(a,
e)};b.replaceAll=function(a,b){var c=d.activeEditor,h=c.selection;c.getWin();var i=c.undoManager,g=c.getDoc();e();h.select(c.getBody(),!1);h.collapse(!0);c.focus();g=j(g,c);for(h=0;g.findText(a,1,0);)g.scrollIntoView(),g.select(),m.text(b),c.selection.setContent(m.getContent(),{format:"raw"}),m.reset(),h++,g.moveStart("character",b.length);i.add();0==h?t.EditorNotification.notify("info",c.getLang("searchreplace_dlg.notfound")):1==h?t.EditorNotification.notify("success",c.getLang("searchreplace_dlg.allreplacedsingular")):
1<h&&(c=c.getLang("searchreplace_dlg.allreplacedplural"),t.EditorNotification.notify("success",c.replace("{0}",h)));return h};b.destroy=function(){d.activeEditor.onBeforeGetContent.remove(r);e();m=f=c=null};d.activeEditor.onBeforeGetContent.add(r);return b};p.UI=function(a,b,c){var f=null,m=p.utils.moveCursorToEnd;d.activeEditor&&(d.activeEditor.plugins&&d.activeEditor.plugins.customtoolbar)&&(f=d.activeEditor.plugins.customtoolbar.getToolbarRow(a));var j=function(){var a=n(".toolbar-find-input",
f);return!a.length?null:a},q=function(){var a=n(".toolbar-replace-input",f);return!a.length?null:a},s=function(a){a?(d.activeEditor.plugins.customtoolbar.enableToolbarButton("search-toolbar-find-next-button"),d.activeEditor.plugins.customtoolbar.enableToolbarButton("search-toolbar-find-previous-button")):(d.activeEditor.plugins.customtoolbar.disableToolbarButton("search-toolbar-find-next-button"),d.activeEditor.plugins.customtoolbar.disableToolbarButton("search-toolbar-find-previous-button"))},e=
function(a){var d=j(),g;g=n(".search-toolbar-find-next-button",f).closest(".aui-button");g=g.length?g:null;g.toggleClass("default-action",a&&0<d.val().length)},r=function(a){var b=d.activeEditor.plugins.customtoolbar;a?b.enableToolbarButton("search-toolbar-replace-button"):b.disableToolbarButton("search-toolbar-replace-button")},k=function(a){var b=d.activeEditor.plugins.customtoolbar;a?b.enableToolbarButton("search-toolbar-replaceall-button"):b.disableToolbarButton("search-toolbar-replaceall-button")},
a={};a.getFindInput=j;a.getReplaceInput=q;a.focusFindTextBox=function(){top.focus();j().focus()};a.onVisible=function(){var a=j();a.focus();0<a.val().length&&(m(a[0]),s(!0),k(!0))};a.destroy=function(){};a.marked=function(){r(!0)};a.markRemoved=function(){r(!1)};var l=j(),o=!1;b&&b.length&&(l.val(b),o=!0);c&&c.length&&q().val(c);b=function(a,b){a&&(d.isIE9?a[0].attachEvent("onpropertychange",b):a.bind(d.isIE8?"propertychange":"input",b))};c=j();b(c,function(a){if(a.type==="input"||a.type==="propertychange"){a=
j();a=a!=null&&a.val().length>0;s(a);e(a)}});b(c,function(){var a=j();k(a&&a.val())});n(f).focusin(function(){e(true)}).focusout(function(){e(false)});c.focus(function(){e(true)});s(o);k(o);r(!1);return a};p.MarkManager=function(){var a=null,b=new d.html.Writer,c=null,f=[],m=function(){p()},j=function(){if(!a)return null;var g=d.activeEditor;g.selection.select(a[0]);return g.selection},q=function(g){h();if(e(a,g)||c&&d.activeEditor.selection.getRng(!0).toString()==c)c=a=null,n.each(f,function(a,g){g.markRemoved()})},
p=function(){h();n("mark",d.activeEditor.getDoc()).each(function(a,d){e(n(d),!1)});c=a=null;n.each(f,function(a,d){d.markRemoved()})},e=function(a,b){var c=d.activeEditor.selection.getRng(!0);if(!a)return!1;var e=a[0];if(c.intersectsNode)c=c.intersectsNode(e);else{var f=d.activeEditor.getDoc().createRange();f.selectNodeContents(e);c=0>=c.compareBoundaryPoints(Range.START_TO_END,f)||0<=c.compareBoundaryPoints(Range.END_TO_START,f)?!1:!0}var h=null,i=null;a.contents().each(function(d,b){a.before(b);
h||(h=b);i=b});if(c||b)c=d.activeEditor.selection.getRng(!0),c.setStartBefore(h),c.setEndAfter(i),b||c.collapse(!1),d.activeEditor.selection.setRng(c);a.remove();return!0},r=function(){if(a)return!0;if(c)return d.activeEditor.selection.getRng(!0).toString()==c},k=function(){p()},l=function(){h();n.each(f,function(a,d){d.markRemoved()})},o=function(a){var b=d.activeEditor;b.onChange.add(m);b.onBeforeSetContent.add(m);a&&(b.onClick.add(l),b.onDblClick.add(l))},h=function(){var a=d.activeEditor;a.onChange.remove(m);
a.onBeforeSetContent.remove(m);a.onClick.remove(l);a.onDblClick.remove(l)},i={markCurrentlySelectedRange:function(){var b=d.activeEditor;if(a){var e=b.selection.getBookmark();q(!1);b.selection.moveToBookmark(e)}c=null;e=b.selection.getRng(!0);a=n('<mark class="find-current"></mark>',b.getDoc());try{e.surroundContents(a[0]),o(!1)}catch(h){1==h.code&&(c=e.toString(),a=null,o(!0))}n.each(f,function(a,b){b.marked()});c||j().collapse()}};i.removeCurrentMark=q;i.removeAllMarks=p;i.selectCurrentMark=j;i.isCursorAtCurrentMark=
function(){if(!a)return!1;var b=d.activeEditor.selection;b.isCollapsed()||b.collapse();var c=b.getRng(!0);if(3===c.startContainer.nodeType)return c.startContainer.parentNode.normalize(),c.startContainer.nextSibling===a[0]||c.startContainer.previousSibling===a[0];if(1===c.startContainer.nodeType)return b=c.startContainer.childNodes,c=c.startOffset,0<c&&b[c-1]===a[0]||c+1<b.length&&b[c+1===a[0]]?!0:!1};i.hasCurrentMark=r;i.replaceCurrentMark=function(c){var e;a||!r()?e=!1:(e=d.activeEditor,b.text(c),
e.selection.setContent(b.getContent(),{format:"raw"}),b.reset(),e.undoManager.add(),q(!1),e=!0);if(e||!a)return null;var f=[];a.contents().each(function(a,b){f.push(b)});q(!1);e=d.activeEditor;for(var c=n(f[0]).before(e.getDoc().createTextNode(c))[0].previousSibling,h=f.length-1;0<=h;h--)n(f[h]).remove();e.undoManager.add();return c};i.addListener=function(a){f.push(a)};i.destroy=function(){q(!0);d.activeEditor.onBeforeGetContent.remove(k)};d.activeEditor.onBeforeGetContent.add(k);return i};return p});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/tinymce3/plugins/searchreplace/searchreplace","Confluence.Editor.SearchManager");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-autocomplete-resources-only', location = 'tinymce3/plugins/searchreplace/search-toolbar.js' */
define("confluence-editor/tinymce3/plugins/searchreplace/search-toolbar",["jquery","tinymce","confluence/legacy"],function(f,b,d){return{initContextToolbars:function(h,c){var i=function(a){if(b.isIE)a=a.createTextRange(),a.execCommand("SelectAll"),a.move("textedit"),a.select();else if(b.isGecko){var c=f(a).val().length;a.setSelectionRange(c,c)}},g=function(a){top.focus();b.activeEditor.plugins.customtoolbar.focusToolbarButton(a)},e=function(){top.focus();var a=f("#search-toolbar-find-text");a.focus();
i(a[0])},j=function(){top.focus();var a=f("#search-toolbar-replace-text");a.focus();i(a[0])},l=function(){b.isIE&&frames.wysiwygTextarea_ifr.focus();if(b.isIE||b.isGecko){var a=b.activeEditor;a.focus();a.selection.select(a.getBody());a.selection.collapse(!1);a.focus()}},m=new d.Editor.Toolbar.Components.TextBox({id:"search-toolbar-find-text",text:c.getLang("searchreplace_dlg.findlabel"),name:"find",keydown:function(a){!b.isIE8&&(a.ctrlKey||b.isMac&&a.metaKey)&&70===a.which?a.preventDefault():13===
a.which?(a.preventDefault(),b.activeEditor.execCommand("mceConfSearch",!1,{backwards:!1,onFound:e,onNotFound:e},{skip_undo:!0})):27===a.which&&(a.preventDefault(),b.activeEditor.execCommand("mceSearchReplaceToolbar",!1,!1,{skip_undo:!0}))},cssClass:"toolbar-find-input"}),n=new d.Editor.Toolbar.Components.TextBox({id:"search-toolbar-replace-text",text:c.getLang("searchreplace_dlg.replacelabel"),name:"replace",keydown:function(a){!b.isIE8&&(a.ctrlKey||b.isMac&&a.metaKey)&&70===a.which?a.preventDefault():
13===a.which?(a.preventDefault(),b.activeEditor.execCommand("mceConfReplace",!1,{onFound:j,onNotFound:e,onInactive:function(){b.activeEditor.execCommand("mceConfSearch",false,{backwards:false,onFound:j,onNotFound:e},{skip_undo:true})}},{skip_undo:!0})):27===a.which&&(a.preventDefault(),b.activeEditor.execCommand("mceSearchReplaceToolbar",!1,!1,{skip_undo:!0}))},cssClass:"toolbar-replace-input"}),o=new d.Editor.Toolbar.Components.TextButton({text:c.getLang("searchreplace_dlg.findprevious"),click:function(){c.execCommand("mceConfSearch",
!1,{backwards:!0,onFound:function(){top.focus();g("search-toolbar-find-previous-button")},onNotFound:e},{skip_undo:!0})},textClass:"search-toolbar-find-previous-button"}),k=new d.Editor.Toolbar.Components.TextButton({text:b.isIE?c.getLang("searchreplace_dlg.findlabel"):c.getLang("searchreplace_dlg.findnext"),click:function(){c.execCommand("mceConfSearch",!1,{backwards:!1,onFound:function(){top.focus();g("search-toolbar-find-next-button")},onNotFound:e},{skip_undo:!0})},textClass:"search-toolbar-find-next-button"}),
p=new d.Editor.Toolbar.Components.TextButton({text:c.getLang("searchreplace_dlg.replace"),click:function(){c.execCommand("mceConfReplace",!1,{onFound:function(){top.focus();g("search-toolbar-replace-button")},onNotFound:e},{skip_undo:!0})},textClass:"search-toolbar-replace-button"}),q=new d.Editor.Toolbar.Components.TextButton({text:c.getLang("searchreplace_dlg.replaceall"),click:function(){c.execCommand("mceConfReplaceAll",!1,{onReplaced:l,onNotReplaced:e})},textClass:"search-toolbar-replaceall-button"}),
r=new d.Editor.Toolbar.Components.Button({text:c.getLang("searchreplace_dlg.close"),iconClass:"icon-close",click:function(){c.execCommand("mceConfSearchClose",!1,null)}});return{Buttons:[new d.Editor.Toolbar.Components.Group([r],{groupClass:"close"}),new d.Editor.Toolbar.Components.Group([m,n],{groupClass:"no-separator"}),new d.Editor.Toolbar.Components.Group(b.isIE?[k]:[o,k]),new d.Editor.Toolbar.Components.Group([p,q])]}}}});
require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/searchreplace/search-toolbar",function(f){var b=require("jquery"),d=require("document"),h=require("confluence/legacy");b(d).bind("initContextToolbars.Toolbar",function(b,d){h.Editor.searchToolbar=f.initContextToolbars(b,d)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
