;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/flextofullsize/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/flextofullsize/editor_plugin_src",["jquery","window","tinymce"],function(a,e,h){var i,g,c=function(){var d=a("#wysiwyg").is(":hidden")?a("#preview"):a("#wysiwyg");g=d.find("iframe");var b=a("#header-precursor"),c=a(e).height(),f=b.offset().top+b.height()+a("#header").height();a("#content.edit").height(c-f);setTimeout(function(){if(a("#preview").is(":hidden"))g.height(0).height(d.height());else{a("#content.edit").height("auto");var b=a("#savebar-container").height();
f+=a("#editor-precursor").height()+a("#conflict-wrapper").height();g.height(c-f-b-4)}},1)};return{init:function(d){d.onInit.add(function(){var b;a(d.getBody()).addClass("fullsize");if(h.isIE||h.isOpera)b=d.getWin(),i=a(b.parent),b=a(b.parent.document),a("body").css({overflow:"hidden"}),i.bind("resize.resizeplugin",function(){c()}),b.bind("messageClose",function(){setTimeout(c,0)}),b.bind("resize.resizeplugin",function(a,b){c(b&&b.height)}),b.bind("mode-changed",function(){c()}),d.onChange.add(function(){c()}),
d.onInit.add(function(){c()})})},getInfo:function(){return{longname:"flex editor to full size plugin",description:"adjusts height of editor so it always occupies the right space in between the toolbars",author:"Atlassian",authorurl:"http://www.atlassian.com",version:"1.0"}}}});
require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/flextofullsize/editor_plugin_src",function(a){var e=require("tinymce");e.create("tinymce.plugins.flextofullsizeplugin",a);e.PluginManager.add("flextofullsize",e.plugins.flextofullsizeplugin)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'i18n/translations.i18n.js' */
define("confluence-editor/i18n/translations.i18n",["ajs"],function(a){return{popup_blocked:"The browser has blocked a popup opened by the Editor.",ctrl_key:"Ctrl",shift_key:"Shift",searchreplace:{search_desc:"Find",replace_desc:"Find/Replace"},searchreplace_dlg:{allreplacedplural:"{0} replacements were made",allreplacedsingular:"1 replacement was made",
notfound:"No replacements were made",findlabel:"Find",replacelabel:"Replace",findnext:"Next",findprevious:"Previous",replace:"Replace",replaceall:"Replace all",close:"Close"},
advhr:{advhr_desc:"tinymce.advhr.advhr_desc"},emotions:{emotions_desc:"Emoticons"},emotions_dlg:{title:"Insert emoticon",desc:"Emoticons",smile:"Smile :)",sad:"Sad :(",tongue:"Tongue :p",biggrin:"Big grin :D",wink:"Wink ;)",
thumbs_up:"Thumbs up (y)",thumbs_down:"Thumbs down (n)",information:"Info (i)",check:"Tick (/)",error:"Error (x)",warning:"Warning (!)",add:"Plus (+)",forbidden:"Minus (-)",help_16:"Question mark (?)",
lightbulb_on:"Lightbulb on (on)",lightbulb:"Lightbulb off (off)",star_yellow:"Yellow star (*y)",star_red:"Red star (*r)",star_green:"Green star (*g)",star_blue:"Blue star (*b)",heart:"Heart \u003c3",broken_heart:"Broken heart \u003c/3"},confluence:{conf_macro_browser:"Macro",
conf_macro_browser_desc:"Insert macro",conf_image:"Image",confimage_desc:"Insert image",conf_file:"Files and images",confifile_desc:"Insert files and images",conf_link:"Link",conflink_desc:"Insert link",conf_table:"Table",
conf_wikimarkup:"Markup",conf_wikimarkup_desc:"Insert markup",conf_wikimarkup_errors:"Wiki markup conversion errors",conf_wikimarkup_timeout:"The server took too long to convert the wiki markup. This may only be a temporary problem so you could try again.",conf_wikimarkup_hint:"Hint: you can also enter wiki markup directly in the editor, where it will be formatted as you type.",conf_wikimarkup_markdown_label:"Markdown",
conf_wikimarkup_confluence_label:"Confluence wiki",conf_shortcuts_help_desc:"Keyboard shortcuts help",conf_insert_button_title:"Insert"},table:{desc:"Insert table",row_before_desc:"Insert row before",row_after_desc:"Insert row after",delete_row_desc:"Remove row",
numbering_column_desc:"Insert numbering column",col_before_desc:"Insert column before",col_after_desc:"Insert column after",col_copy_desc:"Copy table column",col_paste_desc:"Paste table column",col_cut_desc:"Cut table column",delete_col_desc:"Remove column",split_cells_desc:"Split merged table cells",
merge_cells_desc:"Merge table cells",row_desc:"tinymce.table.row_desc",cell_desc:"tinymce.table.cell_desc",props_desc:"tinymce.table.props_desc",paste_row_before_desc:"Paste table row",paste_row_after_desc:"Paste row after",cut_row_desc:"Cut table row",copy_row_desc:"Copy table row",del:"Remove table",
row:"Row",col:"Column",cell:"Cell",row_highlight:"Heading row",col_highlight:"Heading column",selection_highlight:"Change cell colour",invalid_table_field:"Rows and columns must both be numbers greater than zero.",table_more_heading:"Table settings",cut_row_desc_shortcut:"Ctrl+Shift+X",
copy_row_desc_shortcut:"Ctrl+Shift+C",paste_row_before_desc_shortcut:"Ctrl+Shift+V",row_before_desc_shortcut:"Alt+\u2191",row_after_desc_shortcut:"Alt+\u2193"},advanced:{style_select:"tinymce.advanced.style_select",font_size:"tinymce.advanced.font_size",fontdefault:"tinymce.advanced.fontdefault",block:"Format",
paragraph:"Paragraph",pre:"Preformatted",h1:"Heading 1",h2:"Heading 2",h3:"Heading 3",h4:"Heading 4",h5:"Heading 5",h6:"Heading 6",blockquote:"Quote",code:"tinymce.advanced.code",samp:"tinymce.advanced.samp",dt:"tinymce.advanced.dt",
dd:"tinymce.advanced.dd",bold_desc:"Bold",italic_desc:"Italic",underline_desc:"Underline",striketrough_desc:"Strikethrough",justifyleft_desc:"Align left",justifycenter_desc:"Align center",justifyright_desc:"Align right",
justifyfull_desc:"Align full",bullist_desc:"Bullet list",numlist_desc:"Numbered list",tasklist_desc:"Task list",outdent_desc:"Outdent",indent_desc:"Indent",undo_desc:"Undo",redo_desc:"Redo",link_desc:"tinymce.advanced.link_desc",
unlink_desc:"Unlink",image_desc:"tinymce.advanced.image_desc",cleanup_desc:"tinymce.advanced.cleanup_desc",code_desc:"tinymce.advanced.code_desc",sub_desc:"Subscript",sup_desc:"Superscript",hr_desc:"Horizontal rule",removeformat_desc:"tinymce.advanced.removeformat_desc",custom1_desc:"tinymce.advanced.custom1_desc",
forecolor_desc:"Select text colour",backcolor_desc:"tinymce.advanced.backcolor_desc",charmap_desc:"Symbol",visualaid_desc:"tinymce.advanced.visualaid_desc",anchor_desc:"tinymce.advanced.anchor_desc",cut_desc:"tinymce.advanced.cut_desc",copy_desc:"tinymce.advanced.copy_desc",paste_desc:"tinymce.advanced.paste_desc",image_props_desc:"tinymce.advanced.image_props_desc",
newdocument_desc:"tinymce.advanced.newdocument_desc",help_desc:"Help",blockquote_desc:"tinymce.advanced.blockquote_desc",path:"tinymce.advanced.path",newdocument:"tinymce.advanced.newdocument",toolbar_focus:"tinymce.advanced.toolbar_focus",more_colors:"tinymce.advanced.more_colors",paragraph_shortcut:"Ctrl+0",pre_shortcut:"Ctrl+7",
h1_shortcut:"Ctrl+1",h2_shortcut:"Ctrl+2",h3_shortcut:"Ctrl+3",h4_shortcut:"Ctrl+4",h5_shortcut:"Ctrl+5",h6_shortcut:"Ctrl+6",blockquote_shortcut:"Ctrl+8",bullist_shortcut:"Ctrl+Shift+B",numlist_shortcut:"Ctrl+Shift+N",
tasklist_shortcut:"[ then ]",undo_shortcut:"Ctrl+Z",redo_shortcut:"Ctrl+Y"},colorpicker:{more_colors:"More colours",title:"Select a colour",picker_tab:"Picker",picker_title:"Colour picker",palette_title:"tinymce.colorpicker.palette_title",
named_tab:"tinymce.colorpicker.named_tab",named_title:"tinymce.colorpicker.named_title",color:"Colour",name:"tinymce.colorpicker.name",apply:"tinymce.colorpicker.apply"},hints:{drafts:"Hint: Confluence saves drafts automatically. If you ever lose a window, recover your work from the \"Username -\u003e Drafts\" menu.",dnd:"Hint: you can drag and drop images and Office files from your computer right into this editor.",insert_link_recently_viewed:"Hint: type \"\u003cstrong\u003e[\u003c/strong\u003e\" to see a list of suggested pages and insert a link.",insert_link_search:"Hint: type \"\u003cstrong\u003e[\u003c/strong\u003e\" and part of a page title to find and link to that page.",
insert_link_end:"Hint: press \u003cstrong\u003eCtrl+Shift+K\u003c/strong\u003e after a word to find and link to relevant pages. Press it again for more suggestions.",insert_link_newpage:"Hint: type \"\u003cstrong\u003e[\u003c/strong\u003e\" and the title of a new page you wish to create, to see an insert link suggestion.",insert_link_user_mention:"Hint: you can mention somebody in Confluence by typing \"\u003cstrong\u003e@\u003c/strong\u003e\" and then their name.",insert_image_on_page:"Hint: type \"\u003cstrong\u003e!\u003c/strong\u003e\" to see images attached to the page and insert one of them.",insert_image_search:"Hint: type \"\u003cstrong\u003e!\u003c/strong\u003e\" and part of an image name to find and insert the image.",insert_image_end:"Hint: press \u003cstrong\u003eCtrl+Shift+M\u003c/strong\u003e after a word to find and insert relevant images.",insert_wikimarkup:"Hint: the Editor will automatically convert wiki markup as you type it.",insert_wikimarkup_dialog:"Hint: press \u003cstrong\u003eCtrl+Shift+D\u003c/strong\u003e to open the Wiki Markup dialog.",
insert_link:"Hint: press \u003cstrong\u003eCtrl+K\u003c/strong\u003e to open the link browser.",insert_image:"Hint: press \u003cstrong\u003eCtrl+M\u003c/strong\u003e to open the image browser.",insert_macro:"Hint: press \u003cstrong\u003eCtrl+Shift+A\u003c/strong\u003e to open the macro browser.",insert_macro_toc:"Hint: Let Confluence generate you a table of contents for this page. Use \"Insert -\u003e Table of contents\"",insert_bullet_list:"Hint: press \u003cstrong\u003eCtrl+Shift+B\u003c/strong\u003e to start a bullet list.",insert_numbered_list:"Hint: press \u003cstrong\u003eCtrl+Shift+N\u003c/strong\u003e to start a numbered list.",insert_heading:"Hint: press \u003cstrong\u003eCtrl+1\u003c/strong\u003e to create a heading level 1, \u003cstrong\u003eCtrl+2\u003c/strong\u003e for heading level 2 and so on.",insert_table:"Hint: press \u003cstrong\u003eCtrl+Shift+I\u003c/strong\u003e to insert a table.",
table_rows_copy:"Hint: press \u003cstrong\u003eCtrl+Shift+C\u003c/strong\u003e to copy a row and \u003cstrong\u003eCtrl+Shift+V\u003c/strong\u003e to paste a row in a table.",table_rows_cut:"Hint: press \u003cstrong\u003eCtrl+Shift+X\u003c/strong\u003e to cut a row and \u003cstrong\u003eCtrl+Shift+V\u003c/strong\u003e to paste a row in a table.",insert_newline:"Hint: Type \u003cstrong\u003eShift+Enter\u003c/strong\u003e to insert a new paragraph without spacing",autoformat_heading1:"Hint: Type \"\u003cstrong\u003eh1. Title\u003c/strong\u003e\" to quickly insert a Heading 1.",autoformat_heading3:"Hint: Type \"\u003cstrong\u003eh3. Title\u003c/strong\u003e\" to quickly insert a Heading 3.",autoformat_code:"Hint: Type \"\u003cstrong\u003e{{code}}\u003c/strong\u003e\" to quickly insert monospaced text."},auiwindowmanager:{cancel:"Cancel",ok:"OK"},
propertypanel:{links_goto:"Go to link",links_edit:"Edit",links_unlink:"Unlink",links_goto_disabled_tooltip:"This link goes to content on the page you are editing",links_edit_tooltip:"Edit link in a dialogue",links_unlink_tooltip:"Replace link with the text it contains",images_small:"Small",
images_medium:"Medium",images_large:"Large",images_original:"Original",images_border:"Border",images_link_create:"Link",images_link_edit:"Edit link",images_link_remove:"Unlink",
images_link_create_tooltip:"Link this image to other content",images_link_edit_tooltip:"Edit the link for this image",images_link_remove_tooltip:"Remove the link for this image",images_sizing_tooltip:"Resize image to a specific width",images_small_tooltip:"Resize image to small and link to the original",images_medium_tooltip:"Resize image to medium and link to the original",
images_large_tooltip:"Resize image to large and link to the original",images_original_tooltip:"Reset image size to original",images_thumbnail_tooltip:"tinymce.propertypanel.images.thumbnail.tooltip",images_border_tooltip:"Display a border around image"}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/i18n/translations.i18n","TinyMCELang");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'toolbar/toolbar.soy' */
// This file was automatically generated from toolbar.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Editor.Toolbar.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Editor == 'undefined') { Confluence.Templates.Editor = {}; }
if (typeof Confluence.Templates.Editor.Toolbar == 'undefined') { Confluence.Templates.Editor.Toolbar = {}; }


Confluence.Templates.Editor.Toolbar.toolbarButton = function(opt_data, opt_ignored) {
  return '<li id="' + soy.$$escapeHtml(opt_data.button.id) + '" class="toolbar-item ' + soy.$$escapeHtml(opt_data.button.className) + '" data-tooltip="' + soy.$$escapeHtml(opt_data.button.tooltip) + '" data-weight="' + soy.$$escapeHtml(opt_data.button.weight) + '"><a class="toolbar-trigger aui-button" href="#" data-control-id="' + soy.$$escapeHtml(opt_data.button.id) + '"><span class="icon"></span><span class="trigger-text">' + soy.$$escapeHtml(opt_data.button.title) + '</span></a></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.Toolbar.toolbarButton.soyTemplateName = 'Confluence.Templates.Editor.Toolbar.toolbarButton';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/confcharmap/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/confcharmap/editor_plugin_src",["tinymce"],function(b){return{init:function(a){a.addCommand("confCharmap",function(){a.windowManager.open({id:"insert-char-dialog",url:b.settings.editor_plugin_action_base_path+"/charmap.action",width:600+parseInt(a.getLang("advanced.charmap_delta_width",0)),height:290+parseInt(a.getLang("advanced.charmap_delta_height",0)),inline:!0,name:"advanced.charmap_desc"})})},getInfo:function(){return{longname:"Confluence Charmap Plugin",
author:"Atlassian",authorurl:"http://www.atlassian.com",version:b.majorVersion+"."+b.minorVersion}}}});require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/confcharmap/editor_plugin_src",function(b){var a=require("tinymce");a.create("tinymce.plugins.ConfCharmapPlugin",b);a.PluginManager.add("confcharmap",a.plugins.ConfCharmapPlugin)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/confluencelist/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/confluencelist/editor_plugin_src",["jquery","ajs","tinymce"],function(b,g,h){return{init:function(l){!h.isIE8&&l.onKeyDown.add(function(d,k){function j(a){a&&a.lastChild&&!d.dom.isBlock(a.lastChild)&&!b(a.lastChild).is("br")&&b(a).append("<br/>")}if(8===k.keyCode){var c=d.selection.getRng(!0),e=b(c.startContainer).closest("li",d.getBody());if(0!==e.length&&g.EditorUtils.isCursorAtStartOf(e[0],c)){var c=e.prev("li"),f,i=e[0],a;if(0<c.length)return f=c[0],
a=b(i.firstChild),h.isIE9&&0===a.length?a=b("<br/>").appendTo(e):a.is("p")&&(a=a.contents().first()),d.undoManager.beforeChange(),d.undoManager.add(),b(f.lastChild).is("p")&&!d.dom.isBlock(i.firstChild)?(j(f.lastChild),e.contents().each(function(a,c){if(d.dom.isBlock(c))return!1;b(f.lastChild).append(b(c).detach())})):b(i.firstChild).is("p")&&!d.dom.isBlock(f.lastChild)?(j(f),b.each(b.makeArray(c.contents()).reverse(),function(a,c){if(d.dom.isBlock(c))return!1;b(i.firstChild).prepend(b(c).detach())})):
j(f),c.append(e.detach().contents()),a[0]&&g.EditorUtils.setCursorAtStartOfContents(a[0]),d.undoManager.add(),h.dom.Event.cancel(k)}}})},getInfo:function(){return{longname:"Confluence List Plugin",author:"Atlassian",authorurl:"http://www.atlassian.com",version:h.majorVersion+"."+h.minorVersion}}}});
require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/confluencelist/editor_plugin_src",function(b){var g=require("tinymce");g.create("tinymce.plugins.ConfluenceListPlugin",b);g.PluginManager.add("confluencelist",g.plugins.ConfluenceListPlugin)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/atlassianemotions/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/atlassianemotions/editor_plugin_src",["tinymce","jquery"],function(d,e){return{init:function(a,g){a.addCommand("mceEmotion",function(){a.windowManager.open({file:d.settings.editor_plugin_action_base_path+"/emotions.action",width:190+parseInt(a.getLang("emotions.delta_width",0)),height:125+parseInt(a.getLang("emotions.delta_height",0)),inline:1,id:"insert-emoticon-dialog",name:"emotions_dlg.title"},{plugin_url:g})});a.addButton("emotions",{title:"emotions.emotions_desc",
cmd:"mceEmotion"});a.onClick.add(function(a,f){var b=f.target,c;if("IMG"===b.nodeName&&(c=e(b),c.hasClass("emoticon")))return c=a.selection.getRng(!0),(f.offsetX||f.layerX-b.x)<b.width/2?(c.setStartBefore(b),c.setEndBefore(b)):(c.setStartAfter(b),c.setEndAfter(b)),a.selection.setRng(c),a.selection.collapse(),d.dom.Event.prevent(f)})},getInfo:function(){return{longname:"Emotions",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/emotions",
version:d.majorVersion+"."+d.minorVersion}}}});require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/atlassianemotions/editor_plugin_src",function(d){var e=require("tinymce");e.create("tinymce.plugins.EmotionsPlugin",d);e.PluginManager.add("emotions",e.plugins.EmotionsPlugin)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'com/atlassian/confluence/tinymceplugin/tinymce-confluence.js' */
tinymce.confluence=tinymce.confluence||{};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'breadcrumbs/tinymce-breadcrumbs-oninit-rte.js' */
define("confluence-editor/breadcrumbs/tinymce-breadcrumbs-oninit-rte",["ajs","jquery","document"],function(b,a,g){return function(){function f(){var c=a("#breadcrumbs");c.detach();!c.find(".edited-page-title").length&&e.length&&c.append(e);a("#editor-precursor .cell").prepend(c)}if("comment"!==b.Meta.get("content-type")){var d=a("#quickedit-breadcrumbs");0<d.length&&(a("#breadcrumbs").detach(),d.attr("id","breadcrumbs"),a("#breadcrumb-section").append(d));var e=a(".edited-page-title").parent().detach();
f();a(g).bind("mode-changed",function(c,b){if(b==="preview"){var d=a("#breadcrumbs").detach();e.detach();a("#breadcrumb-section").append(d)}else b==="richtext"&&f()})}}});require("confluence/module-exporter").safeRequire("confluence-editor/breadcrumbs/tinymce-breadcrumbs-oninit-rte",function(b){require("ajs").bind("init.rte",b)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'utils/tinymce-node-utils.js' */
define("confluence-editor/utils/tinymce-node-utils",["tinymce","ajs","jquery"],function(m,n,k){var l;return l={updateNode:function(a,c){var e=k(a,m.activeEditor.getDoc()),b=l.prepareNodeForUpdate(e);return l.replaceNode(e,c).fail(b).promise()},storeNodeState:function(a,c){for(var e={},b,d=0,g=c.length;d<g;d++)b=c[d],e[b]=a.attr(b);return function(){for(var b in e)a.attr(b,e[b])}},prepareNodeForUpdate:function(a){var c=null;a.is("img")&&(c=l.storeNodeState(a,["width","height","src","class"]),a.addClass("image-hotswap").attr({src:n.contextPath()+
"/images/border/spacer.gif",width:a.attr("width"),height:a.attr("height")}));return c},replaceNode:function(a,c){var e=l.getDoc(),b=k(c,e),d=k(a,e);return k.Deferred(function(){var a=this;b.is("img")?(b[0].onload=function(){n.debug("replaceNode: new node's src has been loaded by the browser.");this.onload=null;a.resolve(this)},k.browser.opera&&(b[0].src=b.attr("src")),e.createDocumentFragment().appendChild(b[0])):a.resolve(b[0])}).done(function(a){d.replaceWith(a)}).promise()},replaceSelection:function(a){var c=
m.activeEditor,e=c.selection.getRng(!0),b;b=c.getDoc().createRange();a=k(a).clone(!0,!1)[0];e.deleteContents();3===e.startContainer.nodeType&&""===e.startContainer.nodeValue&&(e.startContainer.nodeValue=n.Rte.HIDDEN_CHAR);e.insertNode(a);e=c.getDoc().createTextNode(n.Rte.HIDDEN_CHAR);c.dom.insertAfter(e,a);b.setStartBefore(e);b.setEndAfter(e);b.collapse(!1);c.selection.setRng(b);return a},normalize:function(a){var c,e,b,d,g,f,l=m.activeEditor;g=l.selection.getRng(!0);var h,o=[];if(a&&a.childNodes){if(m.isWebKit)h=
g;else if(m.isGecko&&(h=g.cloneRange(),c=k.inArray(g.startContainer,a.childNodes),e=h.startOffset,b=k.inArray(g.endContainer,a.childNodes),d=h.endOffset,f=g=f=g=void 0,-1<c||-1<b)){var p=[],q=0;k.each(a.childNodes,function(a,b){var c={},e=p[a-1]||{};c.isTextNode=3===b.nodeType;c.textNodesBefore=(c.isTextNode&&e.isTextNode?1:0)+~~e.textNodesBefore;c.precedingTextLength=q;q=c.isTextNode?q+b.nodeValue.length:0;p.push(c)});o=p}a.normalize();if(m.isGecko){if(f=o[c])g=c-f.textNodesBefore,f=e+f.precedingTextLength,
h.setStart(a.childNodes[g],f);if(f=o[b])g=b-f.textNodesBefore,f=d+f.precedingTextLength,h.setEnd(a.childNodes[g],f)}h&&l.selection.setRng(h)}},getDoc:function(){var a=m.activeEditor;return k.browser.mozilla||k.browser.opera?document:a.getDoc()},isolateSelectedRange:function(){function a(a,b,d){var g;(g=c.dom.getParent(a,c.dom.isBlock))||(g=c.getBody());a:{var f,i=null,j=null,h;h=(f=d?!0:!1)?"nextSibling":"previousSibling";i=0===b;!i&&f&&(i=3===a.nodeType?b===a.length:b===a.childNodes.length);if(i){i=
a[h];for(j=a;null===i;){if(j===g){a=void 0;break a}else if(j.parentNode===g)break;j=j.parentNode;i=j[h]}}else 3===a.nodeType?(h=a.data,a.data=h.slice(b),i=e.createTextNode(h.slice(0,b)),j=a,k(i).insertBefore(j),f&&(h=j,j=i,i=h)):(j=a.childNodes[b-(f?1:0)],i=j[h]);a=[j,i]}if(a)if(a[1]){b=a[1];a=a[0];for(d=d?!0:!1;a!==g&&a.parentNode!==g;){i=a.parentNode;f=i.cloneNode(!1);if(d)for(k(f).insertAfter(i);b;)j=b.nextSibling,f.appendChild(b),b=j;else{k(f).insertBefore(i);for(b=i.firstChild;b!==a;)j=b.nextSibling,
f.appendChild(b),b=j}b=f;a=i}d=a}else d=a[0];else d=void 0;return d}var c=m.activeEditor,e=l.getDoc(),b=c.selection,d=b.getRng(!0),g=d.startContainer,f=d.startOffset,n=d.endContainer,h=d.endOffset,o;if(d.collapsed)return d;g===n&&(o=h-f);(f=a(g,f))&&d.setStartBefore(f);g!==d.startContainer&&(h=o||h);(g=a(n,h,!0))&&d.setEndAfter(g);b.setRng(d);return d}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/utils/tinymce-node-utils","tinymce.confluence.NodeUtils");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'autoformat/wiki-autoformat-oninit-rte.js' */
define("confluence-editor/wiki-autoformat",["ajs","jquery","document","window"],function(k,j,m,u){var f=function(v,w){function n(a){return j("<div>").append(a.cloneNode(!0)).html()}function x(a,b,e){if(!b)throw Error("text node is null");3!==b.nodeType&&(b=b.childNodes[e-1],e=b.length);for(;b&&3===b.nodeType;b=b.previousSibling){-1==e&&(e=b.nodeValue.length);if(e>a)return{container:b,offset:e-a};if(e==a){e=0;for(a=b.parentNode;b=b.previousSibling;)e++;return{container:a,offset:e}}a-=e;e=-1}return null}
function p(a){var b,e;if(!a||!a.collapsed)throw Error("range is null or not collapsed");b=a.startContainer;e=a.startOffset;if(1===b.nodeType&&0<e)if(b=b.childNodes[a.startOffset-1],3===b.nodeType)e=b.nodeValue.length;else return"";else if(3!==b.nodeType)return"";a=b.nodeValue.substring(0,e);for(b=b.previousSibling;b&&3===b.nodeType;b=b.previousSibling)a=b.nodeValue+a;return a}function h(a,b,e,c){return{handles:function(b){var e=!1,b=b.selection.getRng(!0),e=b.commonAncestorContainer||{};return!b.collapsed||
j(e).closest("pre,.text-placeholder").length||c&&j(e).closest(c).length?!1:e=a.test(p(b))},execute:function(c,f,i){var d,h,g=1;d=j.browser.msie?f.keyCode:f.which;32===d?c.execCommand("mceInsertContent",!1,"&nbsp;"):c.execCommand("mceInsertContent",!1,String.fromCharCode(d));c.undoManager.beforeChange();c.undoManager.add();d=c.selection.getRng(!0);h=p(d);"|"==h[h.length-1]&&(h+=" ",g=0);h=a.exec(h.substring(0,h.length-1));g=x(h[1].length+g,d.commonAncestorContainer,d.startOffset);d.setStart(g.container,
g.offset);g=j(d.commonAncestorContainer);c.selection.setRng(d);g.closest(".wysiwyg-macro-body").length&&d.toString()==g.text()?(g[0].innerHTML="<br>",c.selection.select(g[0].childNodes[0]),c.selection.collapse(!0)):c.execCommand("delete",!1,{},{skip_undo:!0});b(h,c.selection.getRng(!0));q=c.selection.getRng(!0);if(e)return i.preventDefault(),i.stopPropagation(),o.dom.Event.cancel(f),k.Rte.showElement(q.startContainer),!1}}}function r(){this.handlers={}}function d(a,b,e,d,f){var a=a.charCodeAt(0),
g=k.Rte.getResourceUrlPrefix()+"/images/icons/emoticons/"+f,b=h(b,function(){var a=c.dom.createHTML("img",{src:g,alt:c.getLang(d),title:c.getLang(d),border:0,"class":"emoticon emoticon-"+e,"data-emoticon-name":e});c.execCommand("mceInsertContent",!1,a,{skip_undo:!0})},!0);this.imagePath=g;i.registerHandler(a,b)}function s(a,b){var e=c.formatter.get(a)[0],e=c.dom.create(e.inline,{style:e.styles});e.appendChild(m.createTextNode(b+"{$caret}"));c.execCommand("mceInsertContent",!1,n(e),{skip_undo:!0});
c.formatter.remove(a)}var o=require("tinymce"),q;if(!k.Meta.get("remote-user")||!k.Meta.get("confluence.prefs.editor.disable.autoformat")){r.prototype={registerHandler:function(a,b){this.handlers[a]||(this.handlers[a]=[]);this.handlers[a].push(b)},executeHandlers:function(a,b,e,c){var d=!0;j.each(this.handlers[a]||[],function(a,f){if(f.handles(b))return d=f.execute(b,e,c),!1});return d}};var c=w.editor,i=new r,g=[new d(")",f.regularExpressions._REGEXES_EMOTICON.SMILE,"smile","emotions_dlg.smile",
"smile.png"),new d("(",f.regularExpressions._REGEXES_EMOTICON.SAD,"sad","emotions_dlg.sad","sad.png"),new d("P",f.regularExpressions._REGEXES_EMOTICON.CHEEKY,"cheeky","emotions_dlg.tongue","tongue.png"),new d("p",f.regularExpressions._REGEXES_EMOTICON.CHEEKY_2,"cheeky","emotions_dlg.tongue","tongue.png"),new d("D",f.regularExpressions._REGEXES_EMOTICON.LAUGH,"laugh","emotions_dlg.biggrin","biggrin.png"),new d(")",f.regularExpressions._REGEXES_EMOTICON.WINK,"wink","emotions_dlg.wink","wink.png"),new d(")",
f.regularExpressions._REGEXES_EMOTICON.THUMBS_UP,"thumbs-up","emotions_dlg.thumbs_up","thumbs_up.png"),new d(")",f.regularExpressions._REGEXES_EMOTICON.THUMBS_DOWN,"thumbs-down","emotions_dlg.thumbs_down","thumbs_down.png"),new d(")",f.regularExpressions._REGEXES_EMOTICON.INFORMATION,"information","emotions_dlg.information","information.png"),new d(")",f.regularExpressions._REGEXES_EMOTICON.TICK,"tick","emotions_dlg.check","check.png"),new d(")",f.regularExpressions._REGEXES_EMOTICON.CROSS,"cross",
"emotions_dlg.error","error.png"),new d(")",f.regularExpressions._REGEXES_EMOTICON.WARNING,"warning","emotions_dlg.warning","warning.png"),new d(")",f.regularExpressions._REGEXES_EMOTICON.PLUS,"plus","emotions_dlg.add","add.png"),new d(")",f.regularExpressions._REGEXES_EMOTICON.MINUS,"minus","emotions_dlg.forbidden","forbidden.png"),new d(")",f.regularExpressions._REGEXES_EMOTICON.QUESTION,"question","emotions_dlg.help_16","help_16.png"),new d(")",f.regularExpressions._REGEXES_EMOTICON.LIGHT_ON,"light-on",
"emotions_dlg.lightbulb_on","lightbulb_on.png"),new d(")",f.regularExpressions._REGEXES_EMOTICON.LIGHT_OFF,"light-off","emotions_dlg.lightbulb","lightbulb.png"),new d(")",f.regularExpressions._REGEXES_EMOTICON.YELLOW_STAR,"yellow-star","emotions_dlg.star_yellow","star_yellow.png"),new d(")",f.regularExpressions._REGEXES_EMOTICON.YELLOW_STAR_2,"yellow-star","emotions_dlg.star_yellow","star_yellow.png"),new d(")",f.regularExpressions._REGEXES_EMOTICON.RED_STAR,"red-star","emotions_dlg.star_red","star_red.png"),
new d(")",f.regularExpressions._REGEXES_EMOTICON.GREEN_STAR,"green-star","emotions_dlg.star_green","star_green.png"),new d(")",f.regularExpressions._REGEXES_EMOTICON.BLUE_STAR,"blue-star","emotions_dlg.star_blue","star_blue.png"),new d("3",f.regularExpressions._REGEXES_EMOTICON.HEART,"heart","emotions_dlg.heart","heart.png"),new d("3",f.regularExpressions._REGEXES_EMOTICON.BROKEN_HEAR,"broken-heart","emotions_dlg.broken_heart","broken_heart.png")],l,t=[];for(l=0;l<g.length;l++)t[l]=new u.Image,t[l].src=
g[l].imagePath;j.each({"*":"bold",_:"italic","~":"subscript","^":"superscript","+":"underline","-":"strikethrough"},function(a,b){var c=RegExp("(?:[\\s\\xA0\\u200b\\uFEFF]+|^)(\\"+a+"(?=[^\\s"+a+"])([^"+a+"]*?[^\\s]))$");i.registerHandler(a.charCodeAt(0),h(c,function(a){s(b,a[2])},!0))});c.formatter.register("code",{inline:"code"});i.registerHandler(125,h(/(?:[\s\xA0\u200b]+|^)({{(?=[^\s])([^}]*?[^\s])})$/,function(a){s("code",a[2])},!0));for(l=1;6>=l;l++)(function(a){i.registerHandler(32,h(RegExp("^\\u200b?(h"+
a+"\\.)$"),function(){c.execCommand("formatBlock",!1,"h"+a,{skip_undo:!0})},!0))})(l);i.registerHandler(32,h(/^\u200b?(bq\.)$/,function(){c.execCommand("formatBlock",!1,"blockquote",{skip_undo:!0})},!0));i.registerHandler(32,h(/^\u200b?(\*)$/,function(){c.plugins.lists.applyList("UL","OL")},!0));i.registerHandler(32,h(/^\u200b?(\#)$/,function(){c.plugins.lists.applyList("OL","UL")},!0));i.registerHandler(32,h(/^\u200b?(1\.)$/,function(){c.plugins.lists.applyList("OL","UL")},!0));i.registerHandler(32,
h(/^\u200b?(\-)$/,function(){var a=c.dom,b;c.plugins.lists.applyList("UL","OL");if(b=a.getParent(c.selection.getNode(),"OL,UL"))a.setStyles(b,{listStyleType:"square"}),b.removeAttribute("data-mce-style")},!0));k.trigger("confluence.editor.registerHandlers",{handlerManager:i,createHandler:h,ed:c});i.registerHandler(32,h(/[^-]*[\s](\-\-\-?)$/,function(a){c.execCommand("mceInsertContent",!1,2===a[1].length?"\u2013":"\u2014",{skip_undo:!0})},!1));g=h(/(([^\s-]+)(\-\-\-?)([^\s-]+))$/,function(a){c.execCommand("mceInsertContent",
!1,a[2]+(2===a[3].length?"\u2013":"\u2014")+a[4],{skip_undo:!0})},!1);i.registerHandler(32,g);i.registerHandler(13,g);g=h(/^\u200b?(\-\-\-\-)$/,function(){c.execCommand("mceInsertContent",!1,"<hr />",{skip_undo:!0})},!0);i.registerHandler(32,g);i.registerHandler(13,g);i.registerHandler(13,h(/(^\u200b?\|\|\s*(?:[^|]*\s?\|\|\s?)+$)/,function(a){var b="<table class='confluenceTable'><tr>",e="",d=!0,a=j(a[1].slice(2,-2).split("||")).map(function(a){a=j.trim(this);d=d&&""==a;return a});d&&(a[0]="first cell");
for(var f=0,g=a.length;f<g;f++)b+="<th class='confluenceTh'>"+a[f]+"</th>",e+="<td class='confluenceTd'>"+k.Rte.ZERO_WIDTH_WHITESPACE+"</td>";c.execCommand("mceInsertContent",!1,b+("</tr><tr>"+e+"</tr></table>"),{skip_undo:!0});c.selection.select(j(c.selection.getRng(!0).commonAncestorContainer).parents("table").find(d?"th":"td")[0].childNodes[0]);j(c.selection.getRng().startContainer).parent().closest('[contenteditable="true"]').focus()},!0));i.registerHandler(13,h(/(^\u200b?\|\s?(?:[^|]*\s?\|\s?)+$)/,
function(a){var b="<table class='confluenceTable'><tr>",e=!0,a=j(a[1].slice(1,-1).split("|")).map(function(a){a=j.trim(this);e=e&&""==a;return a});e&&(a[0]="first cell");for(var d=0,f=a.length;d<f;d++)b+="<td class='confluenceTd'>"+a[d]+"</td>";c.execCommand("mceInsertContent",!1,b+"</tr></table>",{skip_undo:!0});e&&c.selection.select(j(c.selection.getRng(!0).commonAncestorContainer).parents("table").find("td")[0].childNodes[0]);j(c.selection.getRng().startContainer).parent().closest('[contenteditable="true"]').focus()},
!0));g=h(/\b(((https?|ftp):\/\/|(www\.))[\w\.\$\-_\+!\*'\(\),/\?:@=&%#~;\[\]]+)$/,function(a){var b=c.dom.create("a",{href:a[3]?a[1]:"http://"+a[1]});b.appendChild(m.createTextNode(a[1]));c.execCommand("mceInsertContent",!1,n(b),{skip_undo:!0});c.getDoc().execCommand("unlink",!1,{})},!1,"a");i.registerHandler(32,g);i.registerHandler(13,g);g=h(/\b((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)$/i,
function(a){var b=c.dom.create("a",{href:"mailto:"+a[1]});b.appendChild(m.createTextNode(a[1]));c.execCommand("mceInsertContent",!1,n(b),{skip_undo:!0});c.getDoc().execCommand("unlink",!1,{})},!1,"a");i.registerHandler(32,g);i.registerHandler(13,g);g=function(a,b){var e=h(a,function(){c.execCommand("mceInsertContent",!1,b,{skip_undo:!0})},!1);i.registerHandler(32,e);i.registerHandler(13,e)};g(/(?:\b|^)([Jj]ira)$/,"JIRA");g(/(?:\b|^)(bitbucket|[Bb]itBucket)$/,"Bitbucket");g(/(?:\b|^)(atlassian)$/,
"Atlassian");g(/(?:\b|^)([Hh]ipchat)$/,"HipChat");j.each({"]":f.regularExpressions._REGEXES.WIKI_LINK,"}":f.regularExpressions._REGEXES.WIKI_MACRO,"!":f.regularExpressions._REGEXES.WIKI_EMBED},function(a,b){i.registerHandler(a.charCodeAt(0),h(b,function(b){var d=b[1]+a,b={type:"POST",contentType:"application/json; charset=utf-8",url:k.Meta.get("context-path")+"/rest/tinymce/1/wikixhtmlconverter",data:j.toJSON({wiki:d,entityId:k.Meta.get("content-id"),spaceKey:k.Meta.get("space-key"),suppressFirstParagraph:!0}),
dataType:"text",timeout:5E3};"}"==a?o.confluence.MacroUtils.insertMacro(b):"!"==a?j.ajax(b).done(function(a){!d===a?o.confluence.ImageUtils.insertImagePlaceholder(a):c.execCommand("mceInsertContent",!1,a,{skip_undo:!0})}):j.ajax(b).done(function(a){c.execCommand("mceInsertContent",!1,a,{skip_undo:!0})})},!0))});c.onKeyPress.addToTop(function(a,b){return i.executeHandlers(j.browser.msie?b.keyCode:b.which,a,b,v)});return{}}};f.regularExpressions={_REGEXES:{WIKI_MACRO:/(?:\s|^)(\{[^{^}]+)$/,WIKI_LINK:/(?:\s|^)(\[[^\[^\]]+)$/,
WIKI_EMBED:/(?:\s|^)(![^!]{5,})$/},_REGEXES_EMOTICON:{SMILE:/\B(:-?)$/,SAD:/\B(:-?)$/,CHEEKY:/\B(:-?)$/,CHEEKY_2:/\B(:-?)$/,LAUGH:/\B(:-?)$/,WINK:/\B(;-?)$/,THUMBS_UP:/\B(\(y)$/,THUMBS_DOWN:/\B(\(n)$/,INFORMATION:/\B(\(i)$/,TICK:/\B(\(\/)$/,CROSS:/\B(\(x)$/,WARNING:/\B(\(!)$/,PLUS:/\B(\(\+)$/,MINUS:/\B(\(-)$/,QUESTION:/\B(\(\?)$/,LIGHT_ON:/\B(\(on)$/,LIGHT_OFF:/\B(\(off)$/,YELLOW_STAR:/\B(\(\*)$/,YELLOW_STAR_2:/\B(\(\*y)$/,RED_STAR:/\B(\(\*r)$/,GREEN_STAR:/\B(\(\*g)$/,BLUE_STAR:/\B(\(\*b)$/,HEART:/\B(<)$/,
BROKEN_HEAR:/\B(<\/)$/}};return f});require("confluence/module-exporter").safeRequire("confluence-editor/wiki-autoformat",function(k){require("confluence/module-exporter").namespace("AJS.Rte.autoformat",k.regularExpressions);require("ajs").bind("init.rte",k)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/confluencedrafts/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/confluencedrafts/editor_plugin_src",["jquery","ajs","confluence/legacy","tinymce"],function(d,a,c,b){return{init:function(b){function e(){c.Editor.editorHasContentChanged()&&c.Editor.Drafts.save({forceSave:!0})}var f;b.onInit.add(function(){a.bind("rte-preview-action-selected",e)});b.onRemove.add(function(){a.unbind("rte-preview-action-selected",e)});a.bind("rte-ready",function(){a.debug("confluence drafts plugin initialisation");d("#draft-status").show();
d("#draft-messages").show();c.Editor.Drafts.bindUnloadMessage();c.Editor.UI.cancelButton.text("Close");c.Editor.UI.cancelButton.click(function(){c.Editor.Drafts.save({skipErrorHandler:!0})});d("#draft-messages").is(":visible")&&a.Confluence.Analytics.publish("rte.notification.draft");d("#draft-messages").find("a.use-draft").click(function(b){b.stopPropagation();b.preventDefault();c.Editor.Drafts.useDraft();a.Confluence.Analytics.publish("rte.notification.draft.resume")});d("#draft-messages").find("a.discard-draft").click(function(b){b.stopPropagation();
b.preventDefault();c.Editor.Drafts.discardDraft(a.Meta.get("existing-draft-id"));a.Confluence.Analytics.publish("rte.notification.draft.discard")});if(a.Meta.getBoolean("shared-drafts")){var b=a.Meta.getNumber("draft-id"),e=a.Meta.get("draft-share-id");0!==b&&(window.history&&window.history.replaceState)&&window.history.replaceState(null,"",a.Meta.get("base-url")+"/pages/resumedraft.action?draftId="+b+"&draftShareId="+e);c.Editor.UI.saveButton.text("Publish")}f=setInterval(c.Editor.Drafts.save,
+a.params.draftSaveInterval||3E4)});a.bind("rte-destroyed",function(){a.debug("confluence drafts plugin tear down");clearInterval(f)})},getInfo:function(){return{longname:"Confluence Drafts",author:"Atlassian",authorurl:"http://www.atlassian.com",version:b.majorVersion+"."+b.minorVersion}}}});
require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/confluencedrafts/editor_plugin_src",function(d){var a=require("tinymce");a.create("tinymce.plugins.ConfluenceDrafts",d);a.PluginManager.add("confluencedrafts",a.plugins.ConfluenceDrafts)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/referrer/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/referrer/editor_plugin_src",["jquery","tinymce"],function(b,a){return{init:function(a){a.onInit.add(function(){var a=b("#createpageform"),c=a.find("#originalReferrer");a.length&&(!c.val()&&document.referrer)&&c.val(document.referrer)})},getInfo:function(){return{longname:"Confluence Cancel Return Url",author:"Atlassian",authorurl:"http://www.atlassian.com",version:a.majorVersion+"."+a.minorVersion}}}});
require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/referrer/editor_plugin_src",function(b){var a=require("tinymce");a.create("tinymce.plugins.Referrer",b);a.PluginManager.add("referrer",a.plugins.Referrer)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/watch/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/watch/editor_plugin_src",["jquery","ajs","tinymce","confluence/templates"],function(c,a,b,d){return{init:function(b){b.onInit.add(function(){if(a.Meta.get("use-watch")){var b={userWatchingOwnContent:a.Meta.get("user-watching-own-content")};c("#rte-savebar-tinymce-plugin-point").append(d.Editor.SaveBar.Watch.render(b))}})},getInfo:function(){return{longname:"Confluence Watch",author:"Atlassian",authorurl:"http://www.atlassian.com",version:b.majorVersion+"."+
b.minorVersion}}}});require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/watch/editor_plugin_src",function(c){var a=require("tinymce");a.create("tinymce.plugins.ConfluenceWatch",c);a.PluginManager.add("confluencewatch",a.plugins.ConfluenceWatch)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/watch/watch.soy' */
// This file was automatically generated from watch.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Editor.SaveBar.Watch.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Editor == 'undefined') { Confluence.Templates.Editor = {}; }
if (typeof Confluence.Templates.Editor.SaveBar == 'undefined') { Confluence.Templates.Editor.SaveBar = {}; }
if (typeof Confluence.Templates.Editor.SaveBar.Watch == 'undefined') { Confluence.Templates.Editor.SaveBar.Watch = {}; }


Confluence.Templates.Editor.SaveBar.Watch.render = function(opt_data, opt_ignored) {
  return '<ul class="toolbar-group toolbar-group-watch-page" id="toolbar-group-watch-page-after-comment"><li class="toolbar-item"><input id="watchPage" name="watchPageAfterComment" value="true" type="checkbox" ' + ((opt_data.userWatchingOwnContent) ? 'checked="checked"' : '') + '/><label for="watchPage">' + soy.$$escapeHtml("Watch this page") + '</label></li></ul>';
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.SaveBar.Watch.render.soyTemplateName = 'Confluence.Templates.Editor.SaveBar.Watch.render';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/notifywatchers/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/notifywatchers/editor_plugin_src",["jquery","ajs","confluence/legacy","tinymce"],function(c,a,d,b){return{init:function(b){b.onInit.add(function(){var b={contentId:a.params.contentId,defaultVersionComment:a.params.versionComment};c("#rte-savebar-tinymce-plugin-point").append(d.Templates.Editor.SaveBar.NotifyWatchers.render(b))});require(["confluence/persistable"])},getInfo:function(){return{longname:"Confluence Notify Watchers",author:"Atlassian",authorurl:"http://www.atlassian.com",
version:b.majorVersion+"."+b.minorVersion}}}});require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/notifywatchers/editor_plugin_src",function(c){var a=require("tinymce");a.create("tinymce.plugins.ConfluenceNotifyWatchers",c);a.PluginManager.add("confluencenotifywatchers",a.plugins.ConfluenceNotifyWatchers)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/notifywatchers/notifywatchers.soy' */
// This file was automatically generated from notifywatchers.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Editor.SaveBar.NotifyWatchers.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Editor == 'undefined') { Confluence.Templates.Editor = {}; }
if (typeof Confluence.Templates.Editor.SaveBar == 'undefined') { Confluence.Templates.Editor.SaveBar = {}; }
if (typeof Confluence.Templates.Editor.SaveBar.NotifyWatchers == 'undefined') { Confluence.Templates.Editor.SaveBar.NotifyWatchers = {}; }


Confluence.Templates.Editor.SaveBar.NotifyWatchers.render = function(opt_data, opt_ignored) {
  return '<span class="minor-edit toolbar-item"><input id="notifyWatchers" name="notifyWatchers" value="true" type="checkbox" data-persist="checked" data-persist-scope="' + soy.$$escapeHtml(opt_data.contentId) + '" data-default-value="true" checked><label for="notifyWatchers"><span>' + soy.$$escapeHtml("Notify watchers") + '</span></label></span>';
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.SaveBar.NotifyWatchers.render.soyTemplateName = 'Confluence.Templates.Editor.SaveBar.NotifyWatchers.render';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/versioncomment/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/versioncomment/editor_plugin_src",["jquery","ajs","tinymce","confluence/templates"],function(c,b,a,d){return{init:function(a){a.onInit.add(function(){var a={versionComment:b.params.versionComment};c("#rte-savebar-tinymce-plugin-point").append(d.Editor.SaveBar.VersionComment.render(a))})},getInfo:function(){return{longname:"Confluence Version Comment",author:"Atlassian",authorurl:"http://www.atlassian.com",version:a.majorVersion+"."+a.minorVersion}}}});
require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/versioncomment/editor_plugin_src",function(c){var b=require("tinymce");b.create("tinymce.plugins.ConfluenceVersionComment",c);b.PluginManager.add("confluenceversioncomment",b.plugins.ConfluenceVersionComment)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/versioncomment/versioncomment.soy' */
// This file was automatically generated from versioncomment.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Editor.SaveBar.VersionComment.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Editor == 'undefined') { Confluence.Templates.Editor = {}; }
if (typeof Confluence.Templates.Editor.SaveBar == 'undefined') { Confluence.Templates.Editor.SaveBar = {}; }
if (typeof Confluence.Templates.Editor.SaveBar.VersionComment == 'undefined') { Confluence.Templates.Editor.SaveBar.VersionComment = {}; }


Confluence.Templates.Editor.SaveBar.VersionComment.render = function(opt_data, opt_ignored) {
  return '<span class="rte-toolbar-comment toolbar-item"><input id="versionComment" name="versionComment" ' + ((opt_data.versionComment) ? 'value="' + soy.$$escapeHtml(opt_data.versionComment) + '"' : '') + 'placeholder="' + soy.$$escapeHtml("What did you change?") + '" class="text" type="text" size="35"><label for="versionComment" class="assistive">' + soy.$$escapeHtml("What did you change?") + '</label></span>';
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.SaveBar.VersionComment.render.soyTemplateName = 'Confluence.Templates.Editor.SaveBar.VersionComment.render';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/imagedialog/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/imagedialog/editor_plugin_src",["tinymce","confluence/legacy"],function(a,b){return{init:function(a){a.onInit.add(function(){a.addCommand("mceConfimage",b.Editor.defaultInsertImageDialog)})},getInfo:function(){return{longname:"Confluence Image Dialog",author:"Atlassian",authorurl:"http://www.atlassian.com",version:a.majorVersion+"."+a.minorVersion}}}});
require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/imagedialog/editor_plugin_src",function(a){var b=require("tinymce");b.create("tinymce.plugins.ConfluenceImageDialog",a);b.PluginManager.add("confluenceimagedialog",b.plugins.ConfluenceImageDialog)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/macrobrowser/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/macrobrowser/editor_plugin_src",["tinymce"],function(b){return{init:function(a){a.onInit.add(function(){a.addCommand("mceConfMacroBrowser",b.confluence.macrobrowser.macroBrowserToolbarButtonClicked)})},getInfo:function(){return{longname:"Confluence Macro Browser",author:"Atlassian",authorurl:"http://www.atlassian.com",version:b.majorVersion+"."+b.minorVersion}}}});
require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/macrobrowser/editor_plugin_src",function(b){var a=require("tinymce");a.create("tinymce.plugins.ConfluenceMacroBrowser",b);a.PluginManager.add("confluencemacrobrowser",a.plugins.ConfluenceMacroBrowser)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/leavecomment/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/leavecomment/editor_plugin_src",["jquery","ajs","tinymce","confluence/legacy","window"],function(c,a,b,e,f){return{init:function(d){function b(){if(e.Editor.UI.isFormEnabled()&&d.isDirty()&&!e.Editor.isEmpty())return "Your comment will be lost."}d.onInit.add(function(){c(f).bind("beforeunload",b)});d.onRemove.add(function(){c(f).unbind("beforeunload",b)})},getInfo:function(){return{longname:"Confluence Leave Comment",author:"Atlassian",authorurl:"http://www.atlassian.com",
version:b.majorVersion+"."+b.minorVersion}}}});require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/leavecomment/editor_plugin_src",function(c){var a=require("tinymce");a.create("tinymce.plugins.ConfluenceLeaveComment",c);a.PluginManager.add("confluenceleavecomment",a.plugins.ConfluenceLeaveComment)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/leavetemplate/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/leavetemplate/editor_plugin_src",["jquery","ajs","confluence/legacy","window","tinymce"],function(c,a,e,f,b){return{init:function(d){function b(){if(e.Editor.UI.isFormEnabled()&&d.isDirty()&&!e.Editor.isEmpty())return "Your unsaved template changes will be lost."}d.onInit.add(function(){c(f).bind("beforeunload",b)});d.onRemove.add(function(){c(f).unbind("beforeunload",b)})},getInfo:function(){return{longname:"Confluence Leave Template",author:"Atlassian",authorurl:"http://www.atlassian.com",
version:b.majorVersion+"."+b.minorVersion}}}});require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/leavetemplate/editor_plugin_src",function(c){var a=require("tinymce");a.create("tinymce.plugins.ConfluenceLeaveTemplate",c);a.PluginManager.add("confluenceleavetemplate",a.plugins.ConfluenceLeaveTemplate)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/template-editor/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/template-editor/editor_plugin_src",["jquery","tinymce"],function(b,a){return{init:function(a){a.onInit.add(function(){b(a.getBody()).addClass("template-editor")})},getInfo:function(){return{longname:"Confluence Template Editor",author:"Atlassian",authorurl:"http://www.atlassian.com",version:a.majorVersion+"."+a.minorVersion}}}});
require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/template-editor/editor_plugin_src",function(b){var a=require("tinymce");a.create("tinymce.plugins.ConfluenceTemplateEditor",b);a.PluginManager.add("confluencetemplateeditor",a.plugins.ConfluenceTemplateEditor)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/customtoolbar/table-toolbar.js' */
define("confluence-editor/tinymce3/plugins/customtoolbar/table-toolbar","ajs jquery confluence/legacy tinymce document window".split(" "),function(g,d,a,b,h,o){return{initContextToolbars:function(z,f){function m(a){var c=d(this),e=d("#table-highlight-group"),b=e.attr("data-highlight-colour"),g=e.attr("data-remove-highlight");if(b){e.removeClass("highlight-"+b);e.removeAttr("data-highlight-colour")}e.removeClass("remove-highlight");g&&e.removeAttr("data-remove-highlight");if(b=c.attr("data-highlight-colour")){e.addClass("highlight-"+
b);e.attr("data-highlight-colour",b)}if(c.attr("data-remove-highlight")){e.addClass("remove-highlight");e.attr("data-remove-highlight",true)}f.focus();f.execCommand("confTableSelectionToggleHighlight",false,{alwaysHighlight:true});a.preventDefault()}var i=require("aui/templates"),k,c=function(a){var d=f.getLang(a);(a=f.getLang(a+"_shortcut",""))&&(d=d+(" ("+a+")"));return d},l=g.storageManager("atlassian.editor","tables"),j;require("aui/inline-dialog2");j=i.buttons.button({id:"table-more-settings-trigger",
text:"",iconType:"aui",iconClass:"aui-icon-small aui-iconfont-configure",iconText:c("table.table_more_heading"),extraAttributes:{type:"button","data-aui-trigger":"true","aria-controls":"table-more-settings","data-tooltip":c("table.table_more_heading")}});var p=i.inlineDialog2.inlineDialog2({alignment:"bottom left",respondsTo:"toggle",id:"table-more-settings",content:"<h2>"+c("table.table_more_heading")+"</h2>"}),q=i.buttons.buttons({content:j});j=function(a){this.render=function(){var b=d(q),e=d(p),
c=e.find(".aui-inline-dialog-contents"),f=e[0],g=function(){f.hide&&f.hide()};a.forEach(function(a){var b=d(i.form.field({type:"checkbox",id:a.id,labelContent:a.text,isChecked:a.isChecked,isDisabled:a.isDisabled}));b.on("change",a.onChange);e.on("aui-layer-show",a.onMenuOpen);e.on("aui-layer-hide",a.onMenuClose);c.append(b)});b.append(e);d(o).on("resize",d.debounce(g,100));d(h).on("enableContextToolbarRow.Toolbar disableContextToolbarRow.Toolbar",g);return b}};f.onNodeChange.add(function(b,c,e){b=
d("body");b=!b.hasClass("no-tools")||b.hasClass("no-tools-toolbars-visible");if(!k&&e.parentNode!=null&&e.nodeName!=="BODY"){k=true;if(d(e).closest("table:not(.wysiwyg-macro)").length){d(h).trigger("createContextToolbarRow.Toolbar",{buttons:a.Editor.tableToolbar.Buttons,topToolbar:true,animate:b}).trigger("enableContextToolbarRow.Toolbar");e=d(e).closest("td,th");b=d(".mceSelected",e.closest("table"));e.add(b).filter(function(){var a=d(this);return parseInt(a.attr("rowspan"),10)>1||parseInt(a.attr("colspan"),
10)>1}).length>=1?f.plugins.customtoolbar.enableToolbarButton("table-split-cells"):f.plugins.customtoolbar.disableToolbarButton("table-split-cells")}else d(h).trigger("disableContextToolbarRow.Toolbar",{animate:b});k=false}});f.onUndo.add(function(a){a.nodeChanged()});f.onInit.add(function(){d(h).delegate("#table-highlight-colour .aui-dropdown a","click",m)});f.onRemove.add(function(){d(h).undelegate("#table-highlight-colour .aui-dropdown a","click",m)});var r=a.Editor,s=new a.Editor.Toolbar.Components.Group([new a.Editor.Toolbar.Components.Button({text:c("table.row_before_desc"),
iconClass:"table-insert-row-before",click:function(){b.execCommand("mceTableInsertRowBefore",false,"")}}),new a.Editor.Toolbar.Components.Button({text:c("table.row_after_desc"),iconClass:"table-insert-row-after",click:function(){b.execCommand("mceTableInsertRowAfter",false,"")}}),new a.Editor.Toolbar.Components.Button({text:c("table.delete_row_desc"),iconClass:"table-delete-row",click:function(){b.execCommand("mceTableDeleteRow",false,"")}})]),l=new a.Editor.Toolbar.Components.Group([new a.Editor.Toolbar.Components.Button({text:c("table.cut_row_desc"),
iconClass:"table-cut",click:function(){b.execCommand("mceTableCutRow",false,"");f.plugins.customtoolbar.enableToolbarButton("table-paste")}}),new a.Editor.Toolbar.Components.Button({text:c("table.copy_row_desc"),iconClass:"table-copy",click:function(){b.execCommand("mceTableCopyRow",false,"");f.plugins.customtoolbar.enableToolbarButton("table-paste")}}),new a.Editor.Toolbar.Components.Button({text:c("table.paste_row_before_desc"),iconClass:"table-paste",click:function(){b.execCommand("mceTablePasteRowBefore",
false,"")},disabled:!l.doesContain("copied")})]),t=new a.Editor.Toolbar.Components.Group([new a.Editor.Toolbar.Components.Button({text:c("table.col_before_desc"),iconClass:"table-insert-column-before",click:function(){b.execCommand("mceTableInsertColBefore",false,"")}}),new a.Editor.Toolbar.Components.Button({text:c("table.col_after_desc"),iconClass:"table-insert-column-after",click:function(){b.execCommand("mceTableInsertColAfter",false,"")}}),new a.Editor.Toolbar.Components.Button({text:c("table.delete_col_desc"),
iconClass:"table-delete-column",click:function(){b.execCommand("mceTableDeleteCol",false,"")}})]),u=new a.Editor.Toolbar.Components.Group([new a.Editor.Toolbar.Components.Button({text:c("table.merge_cells_desc"),iconClass:"table-merge-cells",click:function(){b.execCommand("mceTableMergeCells",false,"")}}),new a.Editor.Toolbar.Components.Button({text:c("table.split_cells_desc"),iconClass:"table-split-cells",click:function(){b.execCommand("mceTableSplitCells",false,"")}})]),v=new a.Editor.Toolbar.Components.Group([new a.Editor.Toolbar.Components.Button({text:c("table.row_highlight"),
iconClass:"table-heading-row",click:function(){b.execCommand("confTableRowToggleHeading",false);b.execCommand("mceTableUpdateNumberingCol",false)}}),new a.Editor.Toolbar.Components.Button({text:c("table.col_highlight"),iconClass:"table-heading-column",click:function(){b.execCommand("confTableColumnToggleHeading",false)}})]),w=a.Editor.Toolbar.Components.SplitGroup,x=[new a.Editor.Toolbar.Components.Button({text:c("table.selection_highlight"),iconClass:"table-highlight-selection",click:function(){b.execCommand("confTableSelectionToggleHighlight",
false)}})],n=d("<ul/>").addClass("table-highlight-picker"),y=[false,false,false,false,false,true];d.each(["grey","red","green","blue","yellow",""],function(a,b){var c=d("<li/>"),f=d("<a href='#'></a>");y[a]?f.addClass("remove-highlight").attr("data-remove-highlight",true):f.addClass("highlight-"+b).attr("data-highlight-colour",b);c.append(f);n.append(c)});r.tableToolbar={Buttons:[s,l,t,u,v,new w(x,{id:"table-highlight-group",dropDownOptions:{id:"table-highlight-colour",dropDownContent:n,alignment:"right"},
postProcess:function(a){a.attr("data-highlight-colour","grey");a.addClass("highlight-grey");var b=d("<span>&nbsp;</span>");b.addClass("highlight-indicator");a.find(".icon.table-highlight-selection").after(b)}}),new a.Editor.Toolbar.Components.Group([new a.Editor.Toolbar.Components.Button({text:c("table.del"),iconClass:"table-delete-table",click:function(){b.execCommand("mceTableDelete",false,"")}})])],Events:[]};g.DarkFeatures.isEnabled("confluence-table-enhancements.copy-cut-paste-cols.disabled")||
a.Editor.tableToolbar.Buttons.splice(3,0,new a.Editor.Toolbar.Components.Group([new a.Editor.Toolbar.Components.Button({text:c("table.col_cut_desc"),iconClass:"table-cut-col",click:function(){b.execCommand("mceTableCutCol",false,"")}}),new a.Editor.Toolbar.Components.Button({text:c("table.col_copy_desc"),iconClass:"table-copy-col",click:function(){b.execCommand("mceTableCopyCol",false,"")}}),new a.Editor.Toolbar.Components.Button({text:c("table.col_paste_desc"),iconClass:"table-paste-col",click:function(){b.execCommand("mceTablePasteColBefore",
false,"")}})]));g.DarkFeatures.isEnabled("confluence-table-enhancements.auto-row.disabled")||a.Editor.tableToolbar.Buttons.push(new j([{text:c("table.numbering_column_desc"),id:"insert-numbering-column",onChange:function(){b.execCommand("mceTableInsertNumberingCol",false,"")},onMenuOpen:function(){var a=d(f.selection.getNode()).closest("table").find(".numberingColumn").length>0;d("#insert-numbering-column").prop("checked",a)}}]))}}});
require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/customtoolbar/table-toolbar",function(g){var d=require("jquery"),a=require("document");d(a).bind("initContextToolbars.Toolbar",g.initContextToolbars)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/customtoolbar/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/customtoolbar/editor_plugin_src",["jquery","ajs","confluence/legacy","document","tinymce"],function(b,g,l,o,u){function v(a){var c=function(){a&&a.hide()};b(o).bind("showLayer",function(b,d,f){"dropdown"==d&&f==a&&(b=g.Rte.getEditor(),b.onClick.add(c),b.onKeyUp.add(c))}).bind("hideLayer",function(b,d,f){"dropdown"==d&&f==a&&(b=g.Rte.getEditor(),b.onClick.remove(c),b.onKeyUp.remove(c))})}function w(b){b.addCallback("show",function(){b.$.parents(".disabled").length&&
b.hide()})}function x(a,c){var e=k(c);b("#"+e).removeClass("disabled")}function y(a,c){var e=k(c);b("#"+e).addClass("disabled")}function m(b,c){c?b.closest(".aui-button").prop("disabled",!0).attr("aria-disabled","true").toggleClass("disabled",c):b.closest(".aui-button").prop("disabled",!1).removeAttr("aria-disabled").toggleClass("disabled",c)}function q(a,c,e,d){var f=b("#toolbar"),h=f.find(".toolbar-item"),r=b("#insert-menu, #more-menu"),i=b("#insert-menu, #color-picker-control"),j=b("#format-dropdown"),
d=d||function(){return!0};h.toggleClass("disabled",a);r.toggleClass("disabled",a);i.toggleClass("disabled",a);j.toggleClass("disabled",!!c);g.Rte.TablePicker[a?"disable":"enable"]();"undefined"!==typeof e&&f.find("button, input").filter(d).toggleClass("disabled",e).prop("disabled",e)}function k(b){var c="default";b&&b.id&&(c=b.id);return"rte-toolbar-row-"+c}function z(a,c){var e=c.animate;void 0==e&&(e=!0);var d=function(){b(this).remove();b(o).trigger("resize.resizeplugin");if(c.onHide)c.onHide()};
clearTimeout(n);n=setTimeout(function(){var a=k(c),a=b("#"+a);e?a.slideUp(400,d):(a.hide(),d.call(a))},100)}function A(a,c){var e=k(c),d=c.animate;void 0==d&&(d=!0);if(0<b("#"+e).length)b("#"+e+":hidden").slideDown(400,function(){g.debug("Prevented toolbar deferred display race condition")});else{var f=b("<div></div>").addClass("toolbar-split toolbar-split-row toolbar-contextual");f.attr("id",e);c.editorAdjacent&&f.addClass("editor-adjacent");for(var e=!c.topToolbar?b("#savebar-container .aui-toolbar"):
b("#rte-toolbar.aui-toolbar"),h=0,r=c.buttons.length;h<r;h++)f.append(c.buttons[h].render());f.css({display:"none"});c.editorAdjacent?e.append(f):(h=b(".editor-adjacent",e).filter(":first"),h.length?h.before(f):e.append(f));f.find(".toolbar-dropdown").each(function(){j(this)});var i=function(){b(o).trigger("resize.resizeplugin").trigger("shown.contextToolbar");if(c.onVisible)c.onVisible()};clearTimeout(n);n=setTimeout(function(){if(d)f.slideDown(400,i);else{f.show();i()}},100)}}function j(a){var a=
b(a),c=a.dropDown("Standard",{alignment:a.data("dropdown-alignment")||"left"})[0];a.find(".dropdown-item").click(function(a){var d=b(this),f=d.attr("data-macro-name"),h=d.attr("data-command"),j=d.attr("data-format"),d=d.attr("data-control-id"),i=g.Rte.getEditor();f&&u.confluence.macrobrowser.macroBrowserToolbarButtonClicked({presetMacroName:f});h&&i.execCommand(h,!1);j&&i.theme.controlHandlers.formatselect.click.dispatch(j);d&&i.theme.controlHandlers.buttons.click.dispatch(d);c.hide();a.preventDefault()});
w(c);v(c)}var n;return{init:function(a){j("#format-dropdown");j("#more-menu .aui-dd-parent");j("#insert-menu .aui-dd-parent");b("#pagelayout-menu").length&&j("#pagelayout-menu .aui-dd-parent");b("#template-menu").length&&j("#template-menu .aui-dd-parent");var c=b("#color-picker-control");if(c.length){var e=c.find(".aui-dd-parent"),d=b("#rte-button-color"),f=d.find(".selected-color"),e=e.dropDown("Standard",{alignment:"left"})[0],h=d.attr("data-color");f.css("background-color","#"+h);c.delegate("a[data-color]",
"click",function(a){var c=b(this),e=c.attr("data-color");a.preventDefault();c.closest(".disabled").length||(u.execCommand("ForeColor",!1,"#"+e),d.attr("data-color",e),f.css("background-color","#"+e))});w(e);v(e)}g.Rte.TablePicker.bindToControl(g.Rte.getEditor(),b("#insert-table-dropdown"));var k=b("#rte-button-source-mode");k.click(function(){k.hasClass("active")?l.Editor.changeMode(l.Editor.MODE_RICHTEXT):l.Editor.changeMode(l.Editor.MODE_SOURCE)});var c=require("confluence-editor/i18n/translations.i18n"),
e=[],i;for(i in c.hints)e.push("hints."+i);var n=l.hintManager(e),m=function(){b("#rte-savebar .hints-text").html(g.Rte.getEditor().getLang(n.getNextHint()))};m();b("#rte-savebar a.hints-close").click(function(a){b(this).closest(".toolbar-split").addClass("hidden");a.preventDefault()});b("#rte-savebar a.hints-next").click(function(b){m();b.preventDefault()});i=g.Rte.EventDelegator(a);b(o).trigger("initContextToolbars.Toolbar",a);b(o).bind("createContextToolbarRow.Toolbar",A).bind("removeContextToolbarRow.Toolbar",
z).bind("enableContextToolbarRow.Toolbar",x).bind("disableContextToolbarRow.Toolbar",y);i.addEventsForComponent("TableToolbar",l.Editor.tableToolbar.Events);var p=b("#format-dropdown"),s=p.find("span.dropdown-text");a.onBeforeExecCommand.add(function(a,c,e,d,f){b.each(["pre","blockquote"],function(){"FormatBlock"==c&&d==this&&(a.formatter.remove("alignleft"),a.formatter.remove("aligncenter"),a.formatter.remove("alignright"))});if(b(a.selection.getNode()).closest("pre,.text-placeholder").length)for(var e=
"Bold Italic Underline Strikethrough InsertUnorderedList InsertOrderedList InsertInlineTaskList InsertInlineTaskListNoToggle superscript subscript mceConfMacroBrowser mceConfimage mceConfAttachments mceEmotion InsertWikiMarkup mceConflink mceInsertTable mceConfAutocompleteLink".split(" "),h=e.length,t=0;t<h;t++)c==e[t]&&(f.terminate=!0);"FormatBlock"==c&&"pre"==d&&(a.undoManager.add(),a.execCommand("removeFormat"));"FormatBlock"==c&&"p"==d?(e=p.find(".dropdown-item[data-format='blockquote']").text(),
s.text()==e&&(f.terminate=!0,a.execCommand("FormatBlock",!1,"blockquote"))):"FormatBlock"==c&&("removeformat"==d&&a.selection.isCollapsed())&&(f.terminate=!0,g.debug("Not removing format for no selected text"))});a.onExecCommand.add(function(b,a,c,e){"FormatBlock"==a&&(b=p.find(".dropdown-item[data-format='"+e+"']"),b.length||(b=p.find(".dropdown-item[data-format='p']")),s.text(b.text()))});a.onNodeChange.add(function(a,c,e){var d,f=e,f=b(f).closest("PRE,BLOCKQUOTE,.text-placeholder");d=function(b){return f.is(b)};
var a=d("BLOCKQUOTE"),g=d("PRE");d=d(".text-placeholder");g?(c=b(e).parents("table").is("[data-macro-body-type='PLAIN_TEXT']"),q(!0,c)):d?q(!0):a?(c.setDisabled("justifyleft",a),c.setDisabled("justifycenter",a),c.setDisabled("justifyright",a)):q(!1)});a.onInit.add(function(a){g.debug("customtoolbar: ed.onInit function");var c={};b(".aui-toolbar").find("[data-control-id]").each(function(e,d){var f,d=b(d);d.closest(".toolbar-item");f=d.attr("data-control-id");"formatselect"==f?(f=a.theme.controlHandlers[f],
f.state.add(function(a){var c=g.Rte.getEditor();"p"==a&&(c=c.selection.getNode(),b(c).closest("p").parent().is("blockquote")&&(a="blockquote"));(a=p.find(".dropdown-item[data-format='"+a+"']").text())&&s.text(a)})):c[f]=d});var e=a.theme.controlHandlers.buttons;e.state.add(function(a,b,e){var d=c[a];d&&(a=d.find(".icon-check"),d=d.closest(".toolbar-item"),a.length?a.toggleClass("hidden",!e):d.toggleClass(b,e))});b(".aui-toolbar").delegate(".toolbar-item","click",function(a){var c=b(this);if(c.hasClass("disabled"))a.preventDefault();
else if(c=c.children(".toolbar-trigger[data-control-id]").attr("data-control-id"))e.click.dispatch(c),a.preventDefault()});b.support.shrinkWrapBlocks=!1;g.debug("customtoolbar: finished ed.onInit function")})},toggleToolbarButton:m,disableToolbarButton:function(a){m(b("."+a.replace(".","")),!0)},enableToolbarButton:function(a){m(b("."+a.replace(".","")),!1)},focusToolbarButton:function(a){b("."+a.replace(".","")).closest(".aui-button").focus()},isToolbarRowEnabled:function(a){a=k({id:a});return 0<
b("#"+a).length&&!b("#"+a).hasClass("disabled")},getToolbarRow:function(a){a=k({id:a});a=b("#"+a);return a.length?a[0]:null},isToolbarButtonEnabled:function(a){return!b("."+a.replace(".","")).closest(".aui-button").prop("disabled")},bindDropdownMenu:j,toggleToolbarButtons:q,getInfo:function(){return{longname:"customtoolbar",author:"Atlassian",authorurl:"http://www.atlassian.com",infourl:"http://www.atlassian.com/",version:"1.0"}}}});
require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/customtoolbar/editor_plugin_src",function(b){var g=require("tinymce");g.create("tinymce.plugins.customtoolbar",b);g.PluginManager.add("customtoolbar",g.plugins.customtoolbar)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/customtoolbar/custom-toolbar-components.js' */
define("confluence-editor/tinymce3/plugins/customtoolbar/custom-toolbar-components",["jquery"],function(d){return{Button:function(a){var b=a.text,f=a.tooltip,c=a.triggerText,i=a.iconClass,g=a.click,j=!!a.disabled,h=a.id;this.render=function(){var a=d('<button type="button"></button>').addClass("aui-button").attr("data-tooltip",f||b);h&&a.attr("id",h);j&&a.prop("disabled",!0).attr("aria-disabled","true");a.click(function(){a.prop("disabled")||g()});if(i){var e=d("<span />");e.addClass("icon "+i);e.text(b);
a.append(e)}c&&(e=d("<span />"),e.addClass("trigger-text"),e.text(c),a.append(e));return a[0]}},DropDownButton:function(a){var b=a.id,f=a.text,c=a.iconClass,i=!!a.disabled,g=a.dropDownContent,j;this.render=function(){var a=d("<div></div>").addClass("toolbar-item").addClass("toolbar-dropdown").attr("data-tooltip",f);a.attr("id",b);var k=d("<div/>").addClass("aui-dd-parent"),e=d("<a href='#'></a>");e.addClass("toolbar-trigger").addClass("aui-dd-trigger");i&&(a.addClass("disabled"),e.addClass("disabled"));
if(c){var l=d("<span />");l.addClass("icon "+c);l.text(f);e.append(l)}l=d("<span/>");l.addClass("icon").addClass("icon-dropdown");e.append(l);j=d("<div/>").addClass("hidden").addClass("aui-dropdown").addClass("aui-dropdown-right");g&&j.append(g);k.append(e);k.append(j);a.append(k);return a[0]}},TextButton:function(a){var b=a.text,f=a.textClass,c=a.click,i=!!a.disabled,g=a.tooltip;this.render=function(){var a=d('<button type="button"></button>').addClass("aui-button").addClass(f).text(b);g&&a.attr("data-tooltip",
g);i&&a.prop("disabled",!0).attr("aria-disabled","true");a.click(function(){a.prop("disabled")||c()});return a[0]}},TextBox:function(a){var b=a.id,f=a.text,c=a.name,i=a.keydown,g=a.cssClass;this.render=function(){var a=d("<div></div>").addClass("toolbar-item");a.append(d("<label for='"+b+"'>"+f+"</label>"));var h=d("<input id='"+b+"' type='text' name='"+c+"' class='"+g+" text' autocomplete='off'>");h.keydown(function(a){i(a)});a.append(h);return a[0]}},Group:function(a,b){this.render=function(){var f=
d("<div></div>");f.addClass("aui-buttons");b&&(b.id&&f.attr("id",b.id),b.groupClass&&f.addClass(b.groupClass));for(var c=0,i=a.length;c<i;c++)f.append(a[c].render());return f[0]}},SplitGroup:function(a,b){function f(){var a=c.id,b=c.disabled,f=c.dropDownContent,h=c.title,k=c.alignment,e=d("<div></div>").addClass("toolbar-item").addClass("toolbar-dropdown").addClass("toolbar-splitbutton");a&&e.attr("id",a);h&&e.attr({"data-tooltip":h});k&&e.data("dropdown-alignment",k);a=d("<div/>").addClass("aui-dd-parent");
h=d("<a href='#'></a>");h.addClass("toolbar-trigger aui-dd-trigger");b&&(e.addClass("disabled"),h.addClass("disabled"));b=d("<span/>");b.addClass("icon").addClass("icon-dropdown");h.append(b);b=d("<div/>").addClass("hidden").addClass("aui-dropdown");f&&b.append(f);a.append(h);a.append(b);e.append(a);return e[0]}var c=b&&b.dropDownOptions||{};this.render=function(){var c=d("<div></div>");c.addClass("aui-buttons");b&&(b.id&&c.attr("id",b.id),b.groupClass&&c.addClass(b.groupClass));for(var g=0,j=a.length;g<
j;g++)c.append(a[g].render());c.append(f(b));b&&b.postProcess&&b.postProcess(c);return c[0]}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/tinymce3/plugins/customtoolbar/custom-toolbar-components","Confluence.Editor.Toolbar.Components");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/customtoolbar/thirdpartycode/tipsy.js' */
(function(a){a.fn.tipsy.autoBounds2=function(f,b){return function(){var d,c,g=a(document).scrollTop()+f,h=a(document).scrollLeft()+f,e=a(this);1<b.length?(d=b[0],c=b[1]):"e"==b[0]||"w"==b[0]?c=b[0]:d=b[0];e.offset().top<g&&(d="n");e.offset().left<h&&(c="w");a(window).width()+a(document).scrollLeft()-(e.offset().left+e.width())<f&&(c="e");a(window).height()+a(document).scrollTop()-(e.offset().top+e.height())<f&&(d="s");return d?d+(c?c:""):c}}})($);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/customtoolbar/chunky-tips.js' */
define("confluence-editor/tinymce3/plugins/customtoolbar/chunky-tips",["ajs","tinymce","jquery"],function(b,j,a){return function(){function h(b,d,c){if("dropdown"===d&&(a(".tipsy").remove(),c&&(c.trigger&&c.trigger.jquery)&&(b=c.trigger.data("tipsy"))))b.hoverState="out"}function i(){a(".tipsy").remove()}b.debug("Enabling Chunky Tooltip for the editor");var e={live:!0,gravity:"n",title:function(){return a(this).attr("data-tooltip")||""},delayIn:250,delayOut:0},f=a.fn.tipsy.autoBounds2(50,"n"),g=a.fn.tipsy.autoBounds2(50,
"s"),k=a.fn.tipsy.autoBounds2(50,"w"),f=a.extend({},e,{gravity:f}),g=a.extend({},e,{gravity:g}),e=a.extend({},e,{gravity:k});a("#rte-toolbar [data-tooltip]:not(.dropdown-item)").tooltip(f);a("#rte-toolbar .dropdown-item[data-tooltip]").tooltip(e);a("#rte-savebar [data-tooltip]").tooltip(g);a("#editor-precursor [data-tooltip]").tooltip(f);a("#property-panel [data-tooltip]").tooltip(f);a(document).bind("showLayer",h);a(document).bind("hideLayer",h);b.bind("created.property-panel",i);b.bind("destroyed.property-panel",
i);var l=/\+/g;b.bind("register-contexts.keyboardshortcuts",function(){setTimeout(function(){a("#rte-savebar .aui-button[title]").each(function(){var b=a(this),d=b.attr("title");b.removeAttr("title");if(j.isMac){var c=d.indexOf("(");0<=c&&(d=d.substr(0,c)+d.substr(c).replace(l,""))}b.attr("data-tooltip",d)})},0)})}});require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/customtoolbar/chunky-tips",function(b){require("ajs").bind("init.rte",b)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/confluencepaste/linkify.js' */
define("confluence-editor/tinymce3/plugins/confluencepaste/linkify",function(){return{RE_EMAIL_PATTERN:"(?:\\s|\\A|^)[\\w.-]+\\+*[\\w.-]+@(?:(?:[\\w-]+\\.)+[A-Za-z]{2,6}|(?:\\d{1,3}\\.){3}\\d{1,3})",RE_URL_SCHEME:"(?:[\\w-]{2,}):/{1,3}",RE_TLD:"(?:aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|travel|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|fi|fj|fk|fm|fo|fr|ga|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|si|sj|sk|sl|sm|sn|so|sr|st|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)",
RE_URL_MIDCHAR:"(?:[^\\s()]+|\\((\\S+)\\))",RE_URL_ENDCHAR:"(?:\\((\\S+)\\)|[^\\s`!()\\[\\]{};:'\".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019])",init:function(){this.RE_URL_ENDING||(this.RE_URL_ENDING="(?:"+this.RE_URL_MIDCHAR+"*"+this.RE_URL_ENDCHAR+")?",this.RE_FULL_URL=this.RE_URL_SCHEME+"\\w+(?:.\\w+)"+this.RE_URL_ENDING,this.RE_OTHER_URL="\\w[\\w_-]*(?:\\.\\w[\\w_-]*)*\\."+this.RE_TLD+"(?:[\\/\\?#]"+this.RE_URL_ENDING+"|\\b)")},linkify:function(f,b,i){this.init();f=this.match_and_replace(this.RE_EMAIL_PATTERN,
f,!0,!1,b,i);f=this.match_and_replace(this.RE_FULL_URL,f,!1,!1,b,i);return f=this.match_and_replace(this.RE_OTHER_URL,f,!1,!0,b,i)},match_and_replace:function(f,b,i,o,k,h){for(var c=0,a=0,d=0,c=0,l=/<\/[aA]>/,f=RegExp(f,"g"),p=h.hasOwnProperty("add_wbrs")?h.add_wbrs:null,j=h.hasOwnProperty("truncate_length")?h.truncate_length:100,m=h.hasOwnProperty("link_target")?h.link_target:"_blank",h=h.hasOwnProperty("link_titles")?h.link_titles:null,d={},n=0;d=f.exec(b);){n++;if(20<n)break;c=d.index;d=d[0].length;
if(0<=b.substring(a,c).search(/<[aA]/)){l.lastIndex=a;c=b.substring(a,b.length).search(l);if(0>c)break;c+=a;f.lastIndex=c+4;a=c+4}else{var a=b.substr(c,d),g=a.search(/&(amp|gt|lt)$/);if(0<g&&b.length>c+d&&";"==b[c+d]){d-=a.length-g;for(a=b.substr(c,d);!a.match(this.RE_URL_ENDCHAR+"$")&&0<d;)d--,a=b.substr(c,d)}g=a;o&&(g="http://"+g);var e="<a";m&&(e+=' target="'+m+'"');e+=' href="';i&&(e+="mailto:");g=g.replace(/"/g,"%22");e+=g+'"';h&&(e+=' title="'+(i?"Email "+g:g)+'"');j&&a.length>j&&(a=a.substr(0,
j)+"...");p&&(a=a.replace(RegExp("([/=])","g"),"<wbr>$1"));e+=">"+a+"</a>";k&&k.push(g);b=b.slice(0,c)+e+b.slice(c+d,b.length);f.lastIndex=c+e.length;a=c+e.length}}return b}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/tinymce3/plugins/confluencepaste/linkify","linkify");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/confluencepaste/post-paste-node-filter.js' */
define("confluence-editor/tinymce3/plugins/confluencepaste/post-paste-node-filter","jquery confluence/legacy confluence-editor/tinymce3/plugins/confluencepaste/linkify ajs document tinymce".split(" "),function(d,A,n,p,x,y){function t(a,b){for(var e=d(a).find("["+b+"]"),c="",g="",f="",h=0,q=e.length;h<q;h++){g=(c=d(e[h]))&&["/",c.attr(b)].join("");f=c&&["/",c.attr("data-mce-"+b)].join("");p.contextPath()&&g.indexOf(p.contextPath())===0&&(e[h]=c.attr(b,g));p.contextPath()&&f.indexOf(p.contextPath())===
0&&(e[h]=c.attr("data-mce-"+b,f))}return e}function i(a,b,e){var a=d(a).find("["+b+"]"),c="",g,f;if(a)for(var h=0,q=a.length;h<q;h++){g=d(a[h]);f=e.standard;for(var i in e)e.hasOwnProperty(i)&&g.is(i)&&(f=e[i]);if(b.indexOf("style")>-1){var c=g,k=f;f=[];for(var m="",m=void 0,o=c.attr("style"),l=c.attr("data-mce-style"),j=0,n=k.length;j<n;j++)if(o&&o.toLowerCase().indexOf(k[j])>-1)f.push(k[j]+": "+c.css(k[j])+";");else if(l&&l.toLowerCase().indexOf(k[j])>-1){m=RegExp(k[j]+":.+?(?:;|$)");m=l.match(m);
f.push(m[0].indexOf(";")>-1?m:m+";")}c=f.join(" ")}else{c=g;k=b;o=[];if(f){l=0;for(j=f.length;l<j;l++)c.is("["+k+"~="+f[l]+"]")&&o.push(f[l])}c=o.join(" ")}g.removeAttr(b);c.length&&g.attr(b,c)}}function z(a,b){function e(e){var f;if(c.index){f=a.splitText(c.index);a&&b.push(a);a=f}(f=a.splitText(c[0].length))&&b.push(f);d(a).wrap("<a href='"+e+a.data+"'></a>")}var c,g,f;g=r.exec(a.data);f=s.exec(a.data);if(g){c=g;e("mailto:")}else if(f){g=(c=f)&&c[0].indexOf("://")===-1?"http://":"";e(g)}}var s;
n.init();var u=RegExp(n.RE_FULL_URL),v=RegExp(n.RE_OTHER_URL);s={exec:function(a){var b=u.exec(a);return b?b:v.exec(a)},test:function(a){return u.test(a)||v.test(a)}};var r,w=RegExp(n.RE_EMAIL_PATTERN);r={exec:function(a){if((a=w.exec(a))&&/\s/.test(a[0][0])){a[0]=a[0].replace(/\s/,"");a.index++}return a},test:function(a){return w.test(a)}};d(x).bind("postPaste",function(a,b,e){a=e.node;b={standard:["text-decoration","text-align","margin-left"],".wysiwyg-macro":["background-image"],p:["margin-left",
"text-align"],span:["color","text-decoration"],pre:["margin-left"]};b.td=b.th=["text-align"];b.li=["list-style-type","background-image"];i(a,"style",b);i(a,"data-mce-style",b);if(d.browser.mozilla){t(a,"src");t(a,"href")}i(a,"face",{standard:[]});i(a,"id",{standard:[]});i(a,"data-mce-href",{standard:[]});var c=e.node;d.each([".contentLayout",".contentLayout2",".columnLayout",".header",".footer",".cell",".innerCell",".panelContent",".panel",".panelHeader",".Apple-converted-space","font",".jira-status",
".jira-issue",".diff-html-removed",".diff-html-added",".diff-html-changed"],function(a,b){d(b,c).contents().unwrap()});d("img",c).map(function(){d(this).attr("data-attachment-copy","");!d(this).attr("src")&&d(this).remove()});d("dl",c).map(function(){d(this).replaceWith(d("<p/>").text(d(this).text()))});d("a",c).map(function(){d(this).removeClass("confluence-userlink userLogoLink")});d("colgroup",c).map(function(){d(this).remove()});if(!d.browser.msie)for(a=d.makeArray(e.node.childNodes);a.length;){b=
a.pop();d(b).is("a")||(b.nodeType===3?z(b,a):b.nodeType===1&&(b.childNodes&&b.nodeName.toLowerCase()!=="pre")&&(a=a.concat(d.makeArray(b.childNodes))))}if(a=d.browser.mozilla){a=d(e.node);a=a.children("br").length&&!a.find(":not(br)").length&&!d(y.activeEditor.selection.getStart()).closest("[data-macro-body-type='PLAIN_TEXT']").length}if(a){e=d(e.node);a="<p>"+e.html().replace(/<br>/gi,"</p><p>")+"</p>";e.html(a)}});return{URL:s,EMAIL:r}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/tinymce3/plugins/confluencepaste/post-paste-node-filter","Confluence.Editor.regex");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/confluencepastetable/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/confluencepastetable/editor_plugin_src",["jquery","document"],function(g,c){return{init:function(i){function m(a){var d={id:!0,"class":!0,style:!0,rowspan:!0,colspan:!0,"data-mce-style":!0,"data-mce-bogus":!0,"data-macro-name":!0,"data-macro-parameters":!0,"data-macro-body-type":!0,"data-highlight-colour":!0,"data-highlight-class":!0},f=["highlight","nohighlight"],b,e=0,c=[],h=g(a);if(!a||j(a))return a;a&&a.getAttribute&&(b=a.getAttribute("class"));if(b&&
0<=b.indexOf("table-wrap"))if(a=g("table",a),a.length)g(a).unwrap(),a=a[0];else return null;if((!a.tagName?0:"TABLE"===a.tagName||"TR"===a.tagName||"TH"===a.tagName||"TD"===a.tagName||"TBODY"===a.tagName||"THEAD"===a.tagName||"TFOOT"===a.tagName||"COL"===a.tagName||"COLGROUP"===a.tagName||"CAPTION"===a.tagName)&&a.attributes){for(;e<=a.attributes.length;)(b=a.attributes[e])&&!0===b.specified&&!d[b.name]?a.removeAttribute(b.name):e++;k(a)&&c.push(k(a));d=0;for(e=f.length;d<e;d++)f[d].exec||h.hasClass(f[d])&&
c.push(f[d]);(f=h.attr("data-highlight-class"))&&c.push(f);(f=h.attr("data-highlight-colour"))&&c.push("highlight-"+f);h.attr("class",c.join(" "))}return a}function k(a){return!a.tagName?"":"TABLE"===a.tagName?"confluenceTable":"TH"===a.tagName?"confluenceTh":"TD"===a.tagName?"confluenceTd":""}function j(a){var d="";a&&a.getAttribute&&(d=a.getAttribute("class"));return!a.tagName?!1:"TABLE"!==a.tagName?!1:!d?!1:-1!==d.indexOf("wysiwyg-macro")}function l(a,d,c){for(var a=c.node,d=m,b=a,e="";b;)if("function"===
typeof d&&(b=d(b)),b)b.firstChild&&e.parentNode!==b&&!j(b)?(e=b,b=b.firstChild):b.nextSibling?(e=b,b=b.nextSibling):(e=b,b=b.parentNode);else break;c.node=a}i.onInit.add(function(){g(c).bind("postPaste",l)});i.onRemove.add(function(){g(c).unbind("postPaste",l)})},getInfo:function(){return{longname:"ConfluencePasteTablePlugin",author:"Atlassian",authorurl:"http://www.atlassian.com",infourl:"http://www.atlassian.com",version:"1.0"}}}});
require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/confluencepastetable/editor_plugin_src",function(g){var c=require("tinymce");c.create("tinymce.plugins.ConfluencePasteTablePlugin",g);c.PluginManager.add("confluencepastetableplugin",c.plugins.ConfluencePasteTablePlugin)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/confluencepastemacro/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/confluencepastemacro/editor_plugin_src",["jquery","document","tinymce"],function(f,a,g){return{init:function(e){var c=this,b=function(b,d,a){d=e.getDoc();f(e.selection.getStart()).closest("[data-macro-body-type='PLAIN_TEXT']").length&&(c.bindPostSerializeHandler(e),b=c.parseHtml(e,a.node),d=d.createElement("div"),d.appendChild(b),a.node=d)};e.onInit.add(function(){f(a).bind("postPaste",b)});e.onRemove.add(function(){f(a).unbind("postPaste",b)})},bindPostSerializeHandler:function(e){function c(e,
d){d.content=d.content.replace(/^<pre>|<\/pre>$/g,"");b.remove(c)}var b=e.serializer.onPostProcess;b.add(c)},parseHtml:function(e,c){for(var b=f.makeArray(c.childNodes),a,d=e.getDoc(),h=d.createElement("pre");b.length;)a=b.shift(),a.childNodes.length?(g.html.Schema.blockElementsMap[a.nodeName]&&b.unshift(d.createElement("br")),b=f.makeArray(a.childNodes).concat(b)):(a=this.formatMacroContent(a,d))&&h.appendChild(a);return h},formatMacroContent:function(a,c){var b,g=/\xA0/g,c=c||window.document;3===
a.nodeType?b=c.createTextNode(f(a).text().replace(g," ")):"BR"===a.nodeName&&(b=c.createElement("br"));return b},getInfo:function(){return{longname:"ConfluencePasteMacroPlugin",author:"Atlassian",authorurl:"http://www.atlassian.com",infourl:"http://www.atlassian.com",version:"1.0"}}}});
require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/confluencepastemacro/editor_plugin_src",function(f){var a=require("tinymce");a.create("tinymce.plugins.ConfluencePasteMacroPlugin",f);a.PluginManager.add("confluencepastemacroplugin",a.plugins.ConfluencePasteMacroPlugin)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/confcursortarget/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/confcursortarget/editor_plugin_src",["jquery","ajs","tinymce"],function(d,h,j){var k=".wysiwyg-macro,.placeholder,table";return{cursorTarget:{addFixSelector:function(d){k+=","+d}},cursorTargetPlugin:{init:function(e){function m(a){d(k,a).each(function(b,a){var w=function(a){if(0===a.length)throw Error("no paragraph element specified");a=a[0];0===a.childNodes.length&&(a.innerHTML=j.isIE&&!j.isIE9?"&nbsp;":"<br />");return a},e=function(a,b){var c=d("<p/>");
if(d(a.parentNode).is("li, td, th"))for(;a[b]&&!d(a[b]).is(s);)c["previousSibling"==b?"prepend":"append"](a[b]);return w(c)},i=d(a);(!i.prev().length||i.prev(k).length||d(a.parentNode).is("li, td, th")&&!d(a.previousSibling).is(s))&&i.before(e(a,"previousSibling"));(!i.next().length||i.next(k).length||d(a.parentNode).is("li, td, th")&&!d(a.nextSibling).is(s))&&i.after(e(a,"nextSibling"));var e=function(a){("BR"===a[0].nodeName||n(a[0]))&&a.replaceWith(w(d("<p/>")))},g=i.prev(),f;if(f=g.length)a:{for(f=
g.prev();f.length&&!f.is(k);){var h=f[0];if("BR"!==h.nodeName&&"P"!==h.nodeName){f=!1;break a}f=f.prev()}f=!0}f&&e(g);i=i.next();if(g=i.length)a:{for(g=i.next();g.length&&!g.is(k);){f=g[0];if("BR"!==f.nodeName&&"P"!==f.nodeName){g=!1;break a}g=g.next()}g=!0}g&&e(i)})}function x(a){d("p",a).each(function(a,c){n(c)&&o(c)&&d(c).attr("data-tag","marked-for-deletion")});d("p[data-tag=marked-for-deletion]",a).remove();return a}function n(a){function b(a){for(var b=0,d=0,e=0,g=a.childNodes.length;e<g;e++){var f=
a.childNodes[e];if("BR"===f.nodeName){if(1<++b)return!1}else if(/^[\s|\u00A0]$/.test(f.nodeValue)){if(1<++d)return!1}else if(""!==f.nodeValue)return!1}return!0}return 1===a.nodeType&&0===a.childNodes.length||b(a)}function o(a){if(!a||1!==a.nodeType)return!1;var b=p(a,!1),c=p(a,!0),a=r(b)||d(b).is(k),e=r(c)||d(c).is(k),b=r(b)&&r(c);return a&&e&&!b}function r(a){return a?a.className&&/cell|header|footer/.test(a.className):!0}function p(a,b){var c=d(a);do{var e=b?c[0].nextSibling:c[0].previousSibling;
if(e)return e;c=c.parent()}while(0<c.length&&!c.is(".cell, .mceContentBody, td, li"));return null}function t(a){var b=a.startContainer;return 3===b.nodeType?!(b.previousSibling&&(3===b.previousSibling.nodeType||d(b.previousSibling).is("br")))&&0===a.startOffset:1===b.nodeType?0===a.startOffset:!1}function y(a){var a=d(a).children(),b;for(b=0;b<a.length;b++)if(!n(a[b])&&(d(a[b]).contents().filter(function(){return 3===this.nodeType}).length||y(a[b])))return!0;return!1}function u(a,b){var c;if(c=b.startContainer==
b.endContainer)if(c=1===b.startContainer.nodeType)c=b.startOffset,a||c--,c=0<=c&&c<b.startContainer.childNodes.length&&"TABLE"===b.startContainer.childNodes[c].nodeName;return c}function z(a){if(!a.collapsed)return!1;var b=a.startContainer,c;if(3===b.nodeType)return c=p(b,!0),a.startOffset==b.nodeValue.length&&(null==c||d(c).is("br"));if(1===b.nodeType){if(d(b).is("td, th")&&0===a.startOffset&&0<b.childNodes.length)return d(b.childNodes[0]).is("br");c=p(b.parentNode.childNodes[0===a.startOffset?0:
a.startOffset-1],!0);return null==c||d(c).is("br")}return!1}function A(a){return a&&1===a.childNodes.length&&d(a.childNodes[0]).is("br")}function B(a,b){return j.isWebKit&&u(!1,b)||j.isGecko&&(z(b)||o(a)&&0===b.startOffset&&A(a))?!0:!1}function C(a,b){var c;if(c=j.isWebKit)if(!(c=u(!0,b)))if(!(c=t(b)&&o(a)))c=e.getBody(),c=c.childNodes.length?b.collapsed&&0===b.startOffset&&c.childNodes[0]==b.startContainer:!1;return c||j.isGecko&&t(b)&&o(a)&&A(a)?!0:!1}function v(a,b){var c=b.keyCode;if(c!==l.BACKSPACE&&
c!==l.DELETE)return!0;a.selection.isCollapsed()?c===l.BACKSPACE&&C(a.selection.getNode(),a.selection.getRng(D))?j.dom.Event.prevent(b):c===l.DELETE&&B(a.selection.getNode(),a.selection.getRng(D))&&j.dom.Event.prevent(b):m(a.getBody());return!0}var D=!0,s="ol, ul, p, pre, table, blockquote, div, h1, h2, h3, h4, h5, h6",l=d.ui.keyCode;e.onSetContent.add(function(a){m(a.getBody());var a=a.getBody(),b=j.isIE?"&nbsp;":"<br/>";d("p, td.confluenceTd, th.confluenceTh",a).each(function(a,e){e&&(e.childNodes&&
1===e.childNodes.length&&3===e.childNodes[0].nodeType&&e.childNodes[0].nodeValue&&1===e.childNodes[0].nodeValue.length&&160===e.childNodes[0].nodeValue.charCodeAt(0))&&d(e).html(b)})});e.onGetContent.add(function(a,b){var c=x(d("<div class='root-node'>"+b.content+"</div>")),c=h.Rte.getEditor().serializer.serialize(c[0],b);b.content=c.substring(23,c.length-6)});var q=function(){m(e.getBody())};e.onInit.add(function(){e.selection.onSetContent.add(q);e.dom.bind(e.getBody(),"cut",q);h.bind("cursor-target-refresh",
q)});e.onRemove.add(function(){h.unbind("cursor-target-refresh",q)});j.isGecko&&e.onKeyDown.add(function(a,b){(b.keyCode===l.ENTER||b.keyCode===l.BACKSPACE||b.keyCode===l.DELETE)&&a.selection.normalize()});e.onKeyDown.add(v);e.onKeyUp.add(v);j.isGecko&&e.onKeyPress.add(v);e.onPaste.add(q);d.extend(this,{_isTextContainerEmpty:n,_processCursorTargets:x,_isCursorAtStartOfContainer:t,_isCursorAtEndOfContainer:function(a){var b=a.startContainer;if(3===b.nodeType)return!(b.nextSibling&&(3===b.nextSibling.nodeType||
d(b.nextSibling).is("br")))&&a.endOffset==b.nodeValue.length;if(1===b.nodeType){var c=b.childNodes[a.startOffset];return d(c).is("br")&&null==c.nextSibling?!0:a.endOffset==b.childNodes.length}return!1},_getSiblingWithinBlockDisregardingNesting:p,_doesContainerHaveNestedContent:y,isCursorBeforeAfterTable:u,isCursorTarget:o,_addCursorTargetParagraphsToContent:m,_isCursorAtEndOfBottomRightCellInTable:z,_shouldCancelDelete:B,_shouldCancelBackspace:C});h.Rte.Cursor=h.Rte.Cursor||{};d.extend(h.Rte.Cursor,
{isTextContainerEmpty:n,fixCursorTargets:m})},getInfo:function(){return{longname:"Cursor Target plugin",author:"Atlassian",authorurl:"http://www.atlassian.com",version:"1.0"}}}}});
require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/confcursortarget/editor_plugin_src",function(d){require("confluence/module-exporter").namespace("AJS.Rte.CursorTarget",d.cursorTarget);var h=require("tinymce");h.create("tinymce.plugins.CursorTargetPlugin",d.cursorTargetPlugin);h.PluginManager.add("cursorTarget",h.plugins.CursorTargetPlugin)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/confcleanup/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/confcleanup/editor_plugin_src",["tinymce","jquery"],function(d,e){return{init:function(g){if(d.isWebKit){var h={},i=function(a,c){var b=a[c];b||(b={},a[c]=b);return b};e("#format-dropdown").find("ul.aui-dropdown li").each(function(){var a=e("a",this),c=a.css("font-size"),b=a.css("font-weight"),a=a.css("color"),a=i(h,a),b=i(a,b);b[c]||(b[c]=e(this).attr("data-format"))});g.onNodeChange.add(function(a){for(var c=a.dom.select("span.Apple-style-span",a.dom.doc.body),
b=a.dom.select("font.Apple-style-span",a.dom.doc.body),c=c.concat(b),b=0,k=c.length;b<k&&!a.dom.is(c[b],'[face="mceinline"]');b++){var f;a:{f=e(c[b]);var d=h[f.css("color")],g=void 0;if(d&&(g=d[f.css("font-weight")])){f=g[f.css("font-size")];break a}f=null}f&&(d=a.selection.getBookmark(),f&&a.dom.remove(c[b],1),a.selection.moveToBookmark(d),a.execCommand("FormatBlock",!1,f))}})}g.onNodeChange.add(function(a){for(var c=a.dom.select("img",a.dom.doc.body),b=c.length,d=0;d<b;d++)"file:///"===e(c[d]).attr("src").substr(0,
8)&&a.dom.remove(c[d])});if(d.isIE9){var j=function(a){a.getBody().childNodes.length||a.setContent("<p>\ufeff</p>")};g.onNodeChange.add(j);g.onSetContent.add(j)}},getInfo:function(){return{longname:"ConfluenceCleanupPlugin",author:"Atlassian",authorurl:"http://www.atlassian.com",infourl:"http://www.atlassian.com",version:"1.0"}}}});
require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/confcleanup/editor_plugin_src",function(d){var e=require("tinymce");e.create("tinymce.plugins.ConfluenceCleanupPlugin",d);e.PluginManager.add("confluencecleanupplugin",e.plugins.ConfluenceCleanupPlugin)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'com/atlassian/confluence/tinymceplugin/auiwindowmanager.js' */
define("confluence-editor/tinymceplugin/auiwindowmanager",["ajs","tinymce","jquery","raphael","window"],function(h,g,e,k,l){var i=g.util.Dispatcher,j=g.isIE;return{AUIWindowManager:{init:function(a){a.onBeforeRenderUI.add(function(){a.windowManager=new g.AUIWindowManager(a)})},getInfo:function(){return{longname:"AUIWindowManager",author:"Atlassian",authorurl:"http://www.atlassian.com",version:g.majorVersion+"."+g.minorVersion}}},WindowManager:{AUIWindowManager:function(a){this.editor=a;this.onOpen=
new i(this);this.onClose=new i(this);this.params={};this.features={};this.modalDialogsStack=[];this.dialogs={};this.count=0},open:function(a,c){g.DOM.getViewPort();a=a||{};this.initialiseSettings(a);c=c||{};c=this.setDefaultParameters(c);c.mce_width=a.width;c.mce_height=a.height;c.mce_auto_focus=a.auto_focus;j&&(a.center=!0,a.help=!1,a.dialogWidth=a.width+"px",a.dialogHeight=a.height+"px");this.features=a;this.params=c;this.onOpen.dispatch(this,a,c);var b=a.height;a.name&&(b+=56);if(c.cancelLink||
c.buttons)b+=51;b+=40;a.popup&&(b+=8);var d=a.id||g.DOM.uniqueId(),f=new h.ConfluenceDialog({width:a.width,height:b,id:d,onCancel:function(){f.hide().remove()}});a.name&&f.addHeader(this.editor.getLang(a.name));this.createDialogButtons(f,c,d);a.file=a.file||a.url;a.file&&(a.file=g._addVer(a.file));this.createDialogContent(f,a,c,d);c.helpLink&&this.createHelpLink(f,c.helpLink,c.helpName,d);c.hintText&&this.createHintText(f,c.hintText,d);b={id:d,settings:a,params:c,dialog:f};this.modalDialogsStack.push(b);
this.dialogs[d]=b;this.count++;h.Rte.BookmarkManager.storeBookmark();f.show();void 0!=f.takeFocus&&f.takeFocus();j&&(e("#"+d).css("overflow","hidden"),e("#"+d+" ."+c.cssClass).css("overflow","hidden"));return d},initialiseSettings:function(a){a.width=parseInt(a.width||400,10);a.height=parseInt(a.height||250,10);a.resizable=!1;void 0==a.popup&&(a.popup=!0);a.popup&&void 0!=a.content&&(a.popup=!1);a.scrollbars=a.scrollbars?"yes":"no"},createDialogButtons:function(a,c,b){if(c.buttons)for(var d=0,d=0;d<
c.buttons.length;d++){var e=c.buttons[d];a.addButton(this.editor.getLang(e.label),e.action)}c.cancelLink&&a.addCancel(this.editor.getLang("auiwindowmanager.cancel"),function(){return g.activeEditor.windowManager.close(b)})},createDialogContent:function(a,c,b,d){var f=this.createContentId(d),d="panel_"+f;c.popup?(a.addPanel(d,e("<iframe id='"+f+"' width='100%' height='"+c.height+"px' frameborder='0' name='auidialogiframe' src='"+c.file+"' scrolling='"+c.scrollbars+"'></iframe>"),b.cssClass),a.takeFocus=
function(){e("#"+f).focus()}):(void 0==c.content?(a.addPanel(d,e("<div id='"+f+"'/>"),b.cssClass),e("#"+f).load(c.file)):a.addPanel(d,e("<div id='"+f+"'>"+c.content+"</div>"),b.cssClass),a.takeFocus=function(){var a=e("#"+f+" :input");if(a.length)e(a[0]).focus();else{a=e("#"+f+" .button-panel button");a.length&&e(a[0]).focus()}});a.gotoPanel(0,0)},createHintText:function(a,c,b){a=e("<div></div>").addClass("dialog-tip");a.text(g.activeEditor.getLang(c));e("#"+b+" .dialog-button-panel").append(a)},
createHelpLink:function(a,c,b,d){a=e("<div></div>").addClass("dialog-help-link");a.load(h.params.contextPath+"/plugins/tinymce/helplink.action",{linkUrlKey:c,linkNameKey:b||""});e("#"+d+" .dialog-components .dialog-title").prepend(a)},close:function(a,c){var b,d;if("string"===typeof a)b=a;else if(c)b=c;else if(d=this.modalDialogsStack.pop())b=d.id;this.dialogs[b]?(this.count--,d=this.dialogs[b],d.dialog.remove(),this.dialogs[b]=null,g.activeEditor.focus(),h.Rte.BookmarkManager.restoreBookmark()):
h.log("Couldn't find id "+b+" in dialogs array so dialog is not closed.");return!1},alert:function(a,c,b){var d;d=this.open({content:"<p>"+a+"</p>",width:500,height:160,popup:!1},{buttons:[{label:"auiwindowmanager.ok",action:function(){g.activeEditor.windowManager.toggleOtherDialogs(d,!0);g.activeEditor.windowManager.close(d);c&&c.call(b||this)}}],cancelLink:!1,cssClass:"tinymce-auidialog-alert"});this.toggleOtherDialogs(d,!1)},createInstance:function(a,c,b,d,e,h){return new (g.resolve(a))(c,b,d,
e,h)},toggleOtherDialogs:function(a,c){for(var b=0,b=0;b<this.modalDialogsStack.length;b++){var d=this.modalDialogsStack[b];d.id!=a&&e("#"+d.id+" .dialog-button-panel").toggle(c)}},confirm:function(a,c,b,d){d=d||l;c.call(b||this,d.confirm(this._decode(this.editor.getLang(a,a))))},setBusy:function(a,c){if(this.dialogs[a])if(c){var b,d;b=this.createContentId(a);b=e("#"+b);b.hide();var f=b.parent();b=this.createBusyContentId(a);d=e("#"+b,f);d.length||(f.append(e("<div id='"+b+"' class='spinner'></div>")),
d=e("#"+b,f),k.spinner(d[0],50,"#666"));e(".button-panel button",e("#"+a)).each(function(a,b){e(b).prop("disabled",true)});e(d[0]).show()}else b=this.createBusyContentId(a),d=e("#"+b),d.length&&e(d[0]).hide(),b=this.createContentId(a),b=e("#"+b),e(".button-panel button",e("#"+a)).each(function(a,b){e(b).prop("disabled",!1)}),e(b[0]).show()},logMCESelection:function(a){var c=g.activeEditor.selection;h.log("******************************");h.log("Logging TinyMCE selection title:    "+a);h.log("Bookmark:");
h.log(c.getBookmark());a=e(c.getRng().startContainer).text()||e(c.getRng().startContainer.parentNode).text();h.log("Range: "+a);h.log(c.getRng())},setDefaultParameters:function(a){a.inline=!1;a.cssClass||(a.cssClass="tinymce-auidialog");!1!=a.cancelLink&&(a.cancelLink=!0);return a},createContentId:function(a){return"content_"+a},createBusyContentId:function(a){return"content_busy_"+a}}}});
require("confluence/module-exporter").safeRequire("confluence-editor/tinymceplugin/auiwindowmanager",function(h){var g=require("tinymce");g.create("tinymce.plugins.AUIWindowManager",h.AUIWindowManager);g.create("tinymce.AUIWindowManager:tinymce.WindowManager",h.WindowManager);g.PluginManager.add("auiwindowmanager",g.plugins.AUIWindowManager)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'macrobrowser/tinymce-macrobrowser.js' */
define("confluence-editor/macrobrowser/tinymce-macrobrowser",["jquery","tinymce","ajs","confluence/legacy"],function(c,e,d,g){return{storedRange:null,bookmark:null,getCurrentNode:function(){return c(e.activeEditor.selection.getNode())},isMacroDiv:function(a){return c(a).hasClass("wysiwyg-macro")},isMacroTag:function(a){a=c(a);return a.hasClass("wysiwyg-macro")||a.hasClass("editor-inline-macro")},isBodylessMacro:function(a){return c(a).hasClass("editor-inline-macro")},isMacroWithBody:function(a){return c(a).hasClass("wysiwyg-macro")},
isMacroStartTag:function(a){return c(a).hasClass("wysiwyg-macro-starttag")},isMacroEndTag:function(a){return c(a).hasClass("wysiwyg-macro-endtag")},isMacroBody:function(a){return c(a).hasClass("wysiwyg-macro-body")},hasMacroBody:function(a){return"true"==c(a).attr("macrohasbody")},getNestingMacros:function(a){var b=[];c(a||this.getCurrentNode()).parents(".wysiwyg-macro").each(function(){b.push(c(this).attr("data-macro-name"))});return b},logMCESelection:function(a){var b=e.activeEditor.selection;
d.log("******************************");d.log("Logging TinyMCE selection title:    "+a);d.log("Bookmark:");d.log(b.getBookmark());a=c(b.getRng().startContainer).text()||c(b.getRng().startContainer.parentNode).text();d.log("Range: "+a);d.log(b.getRng())},getSelectedMacro:function(){var a=e.confluence.macrobrowser,b=a.getCurrentNode();d.log("getSelectedMacro: $selectionNode="+b[0]);return a.isMacroDiv(b)?b:e.confluence.MacroUtils.isInMacro(b)},openMacro:function(a){d.MacroBrowser.open({selectedMacro:a,
onComplete:e.confluence.macrobrowser.macroBrowserComplete,onCancel:e.confluence.macrobrowser.macroBrowserCancel})},editMacro:function(a){var b=e.confluence.macrobrowser,a=c(a);b.editedMacroDiv=a[0];var f=d.Rte.getEditor().serializer.serialize(a.clone()[0],{forced_root_block:!1});d.Rte.getEditor().selection.select(a[0]);d.Rte.BookmarkManager.storeBookmark();c.ajax({type:"POST",contentType:"application/json; charset=utf-8",url:d.params.contextPath+"/rest/tinymce/1/macro/definition",data:c.toJSON({contentId:g.getContentId(),
macroHtml:f}),dataType:"text",success:function(a){b.openMacro(c.secureEvalJSON(a))}})},macroBrowserToolbarButtonClicked:function(a){var b=e.confluence.macrobrowser,f=e.activeEditor,g=b.getCurrentNode();d.Rte.BookmarkManager.storeBookmark();b=c.extend({presetMacroName:null,nestingMacros:b.getNestingMacros(g),onComplete:b.macroBrowserComplete,onCancel:b.macroBrowserCancel,mode:"insert",selectedHtml:"",selectedText:""},a);a.ignoreEditorSelection||(b.selectedHtml=f.selection.getContent(),b.selectedText=
f.selection.getContent({format:"text"}));d.MacroBrowser.open(b)},macroBrowserComplete:function(a){var b=e.confluence.macrobrowser,a={contentId:d.Meta.get("content-id")||"0",macro:{name:a.name,params:a.params,defaultParameterValue:a.defaultParameterValue,body:a.bodyHtml}};d.Rte.BookmarkManager.restoreBookmark();b.editedMacroDiv?(e.confluence.MacroUtils.insertMacro(a,b.editedMacroDiv),delete b.editedMacroDiv):e.confluence.MacroUtils.insertMacro(a)},macroBrowserCancel:function(){var a=e.confluence.macrobrowser;
d.Rte.BookmarkManager.restoreBookmark();a.editedMacroDiv=null;a.editedMacro=null}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/macrobrowser/tinymce-macrobrowser","tinymce.confluence.macrobrowser");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'utils/tinymce-image-utils.js' */
define("confluence-editor/utils/tinymce-image-utils",["jquery","confluence/api/logger","confluence/meta","ajs","tinymce"],function(d,i,o,h,m){var k="imagetext src align border width height".split(" "),p=/\/download\/(thumbnails|attachments)\/([0-9]+)\//,n=function(a,b,g,c,e){c?(b>=e&&(a.width=e),a.style.maxWidth=""):(g>=e&&(a.height=e),a.style.maxHeight="")},j;j={isScaledByWidth:function(){return!1},updateImageElement:function(a,b){var g=d(a),c;c=b.destination;c=j.isRemoteImg(c)?c:b.thumbnail?c.replace("/attachments/",
"/thumbnails/"):c.replace("/thumbnails/","/attachments/");b.src=c;g.toggleClass("confluence-content-image-border",!!b.border);g.toggleClass("confluence-thumbnail",!!b.thumbnail);c=0;for(var e=k.length;c<e;c++){var f=k[c],h=b[f];!1!==h&&null!=h?g.attr(f,h):g.removeAttr(f)}m.activeEditor.undoManager.add()},insertFromProperties:function(a,b){d.ajax({type:"POST",contentType:"application/json; charset=utf-8",url:h.params.contextPath+"/rest/tinymce/1/embed/placeholder/image",data:d.toJSON(a),dataType:"text",
success:function(a){j.insertImagePlaceholder(a,b)}})},insertImagePlaceholder:function(a,b){var g,c=j.isScaledByWidth(),e=d(a);g=c?h.Confluence.PropertyPanel.Image.getPresetImageSize("large"):"comment"===o.get("content-type")?h.Confluence.PropertyPanel.Image.getPresetImageSize("small"):h.Confluence.PropertyPanel.Image.getPresetImageSize("medium");e.css(c?"max-width":"max-height",g+"px");var f=m.activeEditor,i="_"+ +new Date,k=d("<div></div>").append(e.attr("id",i));f.selection.setContent(k.html());
var l=f.dom.get(i);f.dom.setAttrib(l,"id","");e.hasClass("confluence-external-resource")||n(l,e.attr("data-image-width"),e.attr("data-image-height"),c,g);d(l).one("load",function(){e.hasClass("confluence-external-resource")&&n(this,this.width,this.height,c,g);h.Rte.showSelection(function(){b||h.trigger("trigger.property-panel",{elem:l});f.undoManager.add()});f.onChange.dispatch()})},isRemoteImg:function(a){var b=h.Rte.getCurrentBaseUrl();return a.match("(https?://)")&&-1===a.indexOf(b)},isThumbnailUsable:function(a,
b,d,c,e,f){if(a){if(a>e)return!1;e=d/c;return 1<=e?!0:e*f>=a}a=b;if(a>f)return!1;f=c/d;return 1<=f?!0:f*e>=a}};return{ImageProperties:function(a){if(a&&d.nodeName(a,"img")&&d(a).hasClass("confluence-embedded-image")){var b=d(a),a={destination:b.attr("src"),url:b.attr("src"),border:b.attr("class")&&-1!==b.attr("class").indexOf("confluence-content-image-border")?1:0,width:b.prop("width"),height:b.prop("height"),originalSelected:!b.attr("width")&&!b.attr("height")};if(!j.isRemoteImg(a.destination)&&
!d(b).hasClass("confluence-external-resource")){var g=a;var b=d(b).attr("src"),c=b.match(p);c&&3===c.length?b=c[2]:(i.log("ERROR: could not parse page id from image url "+b),b="0");g.pageId=b}return d.extend({},a)}return a.destination?(a.imageFileName=a.imageFileName||a.destination,d.extend({},a)):null},ImageUtils:j}});
require("confluence/module-exporter").safeRequire("confluence-editor/utils/tinymce-image-utils",function(d){var i=require("tinymce");i.confluence.ImageProperties=d.ImageProperties;i.confluence.ImageUtils=d.ImageUtils});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'utils/tinymce-macro-utils.js' */
define("confluence-editor/utils/tinymce-macro-utils",["tinymce","ajs","confluence/legacy","jquery"],function(i,f,l,e){var n;return n={DEFAULT_INSERT_MACRO_TIMEOUT:5E3,insertMacro:function(a,d){var g;if(a.macro&&a.contentId)g={type:"POST",url:f.contextPath()+"/rest/tinymce/1/macro/placeholder",contentType:"application/json; charset=utf-8",data:e.toJSON(a),dataType:"text"};else if(a.url&&a.type)g=a;else throw Error("illegal argument received: "+a);var c=e.Deferred(),h=f.Rte.getEditor(),k,m;d||(m="macro-"+
(new Date).getTime(),k=h.dom.create("span",{id:m}),h.selection.setNode(k),d=k=h.dom.select("#"+m)[0],c.fail(function(){e(k).remove()}));e.extend(g,{timeout:n.DEFAULT_INSERT_MACRO_TIMEOUT});f.debug("Insert macro timeout = "+g.timeout);l.Editor.UI.setButtonsState(!1);e.ajax(g).done(function(b){b[0]!=="<"&&(b=document.createTextNode(b));if(!d||!d.parentNode){f.logError("The node to be replaced has been already deleted from the document");c.rejectWith(this,arguments)}else i.confluence.NodeUtils.updateNode(d,
b).done(function(a){c.resolve(a,b)}).fail(c.reject)}).fail(function(b,a,e){f.logError("Macro placeholder request failed "+a+": '"+e+"'");c.rejectWith(this,arguments)});c.done(function(b,a){l.Editor.UI.setButtonsState(true);i.confluence.macrobrowser.isMacroWithBody(b)&&/P|H\d/.test(b.parentNode.nodeName)&&h.dom.split(b.parentNode,b);var c=i.confluence.macrobrowser,d=i.activeEditor,g=d.getDoc(),j=d.selection.getRng(true);if(c.isMacroWithBody(b)){!i.isIE&&e("p, pre",b).each(function(){this.childNodes.length===
0&&this.appendChild(g.createElement("br"))});if(c=d.dom.select(".wysiwyg-macro-body",b)[0].firstChild){j.setStart(c,0);j.setEnd(c,0)}else f.debug("focusMacroNode: couldn't find anything to focus, cap'n!")}else{j.setStartAfter(b);j.setEndAfter(b)}d.selection.setRng(j);h.nodeChanged();f.Rte.showElement(b);h.selection.onSetContent.dispatch(h.selection,{content:a,format:"html"});i.activeEditor.undoManager.add();f.trigger("macro-browser.macro-inserted")}).fail(function(){l.Editor.UI.setButtonsState(true)});
return c.promise()},isInMacro:function(a){return 0<(a.jquery?a:e(a)).closest(".wysiwyg-macro").length}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/utils/tinymce-macro-utils","tinymce.confluence.MacroUtils");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/confluence/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/confluence/editor_plugin_src",["jquery","ajs","confluence/legacy","tinymce"],function(j,d,m,f){return{init:function(g){g.addCommand("mceConfUnlink",function(g,f){var h=d.Rte.getEditor(),i=h.selection,e=f||i.getNode(),a=j(e);if("A"!==e.nodeName){a=a.closest("a");if(!a.length)return;e=a[0]}var b=a.attr("href");b||(b="#",a.attr("href",b));var c;if(c=!a.attr("data-linked-resource-id"))if(c=m.Link.isExternalLink(b)){c=a.text();var k=b,l=/(.*)[\/]$/.exec(k);c=
c==(null!=l?l[1]:k)}c?(i=h.dom.create("span",{"class":"nolink"},b),h.dom.replace(i,e,!1)):(i.select(e),a.removeClass("createlink unresolved"),h.execCommand("UnLink"))});g.addButton("confimage",{title:"confluence.confimage_desc",cmd:"mceConfimage"});g.addButton("conf_macro_browser",{title:"confluence.conf_macro_browser_desc",cmd:"mceConfMacroBrowser"})},getInfo:function(){return{longname:"Confluence TinyMCE Plugin",author:"Atlassian",authorurl:"http://www.atlassian.com",version:f.majorVersion+"."+
f.minorVersion}}}});require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/confluence/editor_plugin_src",function(j){var d=require("tinymce");d.create("tinymce.plugins.ConfluencePlugin",j);d.PluginManager.add("confluence",d.plugins.ConfluencePlugin)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/macroplaceholder/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/macroplaceholder/editor_plugin_src",["jquery","ajs","tinymce"],function(f,h,d){var k=d.VK;return{init:function(i){function j(a){i.onKeyDown.add(a);d.isGecko&&(i.onKeyPress.add(a),i.onKeyUp.add(a))}function l(a,b){return a&&1===a.childNodes.length&&f(a).is(b)&&f(a.firstChild).is("br")}function m(a){if(!a.collapsed)return!1;a=3===a.startContainer.nodeType?a.startContainer.parentNode:a.startContainer;if(!a||!a.parentNode)return!1;for(;a&&!f(a).is(".wysiwyg-macro-body");){if(a.previousSibling||
a.nextSibling)return!1;a=a.parentNode}return!0}var g=this;i.onInit.add(function(a){a.selection.onSetContent.add(function(a){d.each(a.dom.select("p > .wysiwyg-macro"),function(c){var e=a.dom.getParent(c.parentNode,"p");try{a.dom.split(e,c)}catch(d){}})})});i.onSetContent.add(function(a){d.each(a.dom.select('.wysiwyg-macro[data-macro-body-type="PLAIN_TEXT"] .wysiwyg-macro-body'),function(b){a.dom.select("pre",b).length||(d.isIE?a.dom.setHTML(b,"<pre></pre>"):a.dom.setHTML(b,"<pre><br /></pre>"))})});
i.onKeyDown.add(function(a,b){var c=a.selection,e;if(!(e=-1!=f.inArray(b.keyCode,[k.BACKSPACE,k.DELETE,k.ENTER,k.ESCAPE])))e=!1,0===b.charCode&&(e=-1!=f.inArray(b.keyCode,[k.SHIFT,k.CTRL,k.ALT,k.META])),e=e||c.isCollapsed();if(!e&&!b.ctrlKey&&!(b.metaKey||!d.isMac&&b.altKey))e=c.getNode(),d.confluence.macrobrowser.isMacroWithBody(e)&&(e=f(".wysiwyg-macro-body",e),0<e.length&&(h.debug("MacroPlaceholderPlugin: Adjusting text selection to only include macro's body."),c.select(e[0],!0)))});i.onDblClick.add(function(a,
b){var c=f(b.target),e=c.closest("[data-macro-name]");if(e.length){h.debug("Double-click triggered inside a macro.");if(e.attr("data-macro-body-type"))if(d.isIE)if(c.hasClass("wysiwyg-macro-body")||c.hasClass("wysiwyg-macro"))h.debug("Double-click inside macro body, but its IE so its OK I guess...");else{h.debug("Double-click was inside bodied macro content, even in IE. Skipping.");return}else if(c.closest(".wysiwyg-macro-body").length){h.debug("Double-click was inside bodied macro content. Skipping.");
return}d.confluence.macrobrowser.editMacro(e);h.Confluence.PropertyPanel&&h.Confluence.PropertyPanel.current&&h.Confluence.PropertyPanel.destroy()}});i.onNodeChange.addToTop(function(a){var b=a.selection.getNode();"PRE"===b.nodeName&&f(b).closest(".wysiwyg-macro").length?g._setTinymceControlsState(a,0):g._setTinymceControlsState(a,1)});i.addCommand("mceConfRemoveMacro",function(a){f(a).remove();d.isGecko&&h.Rte.getEditor().execCommand("mceRepaint",!1)});g._isCursorInMostNestedElement=m;var p=function(a){if(!a.collapsed)return!1;
a=3===a.startContainer.nodeType?a.startContainer.parentNode:a.startContainer;return a.previousSibling&&!a.nextSibling&&l(a,"p, pre")};(d.isWebKit||d.isGecko)&&j(function(a,b){if(46===b.keyCode&&p(a.selection.getRng(!0)))return d.dom.Event.cancel(b)});g._isCursorInLastParagraphOrPre=p;d.isWebKit&&j(function(a,b){if(8!==b.keyCode&&46!==b.keyCode)return!0;var c=a.selection.getRng(!0),e=3===c.startContainer.nodeType?c.startContainer.parentNode:c.startContainer;if(c.collapsed)var g=3===c.startContainer.nodeType?
c.startContainer.parentNode:c.startContainer,c=m(c)&&1===g.childNodes.length&&f(g.firstChild).is("br");else c=!1;return c&&(8===b.keyCode?!f(e).is("li"):1)?d.dom.Event.cancel(b):!0});var q=function(a){if(!a.collapsed)return!1;var b=3===a.startContainer.nodeType?a.startContainer.parentNode:a.startContainer;return 0===a.startOffset&&f(b).is(".wysiwyg-macro-body > ul > li")&&1===b.childNodes.length&&f(b.firstChild).is("br")};d.isWebKit&&j(function(a,b){return 8!==b.keyCode?!0:q(a.selection.getRng(!0))?
(a.execCommand("Outdent"),d.dom.Event.cancel(b)):!0});g._isCursorInsideMacroPlacholderInsideListItemContainingSoloBr=q;var r=function(a){var b=3===a.startContainer.nodeType?a.startContainer.parentNode:a.startContainer,c=f(b);return 0===a.startOffset&&l(b,"p, pre")&&c.parent().is("td.wysiwyg-macro-body")&&!b.previousSibling&&b.nextSibling&&l(b.nextSibling,"p, pre")};d.isWebKit&&j(function(a,b){if(46!==b.keyCode)return!0;var c=a.selection.getRng(!0),e=3===c.startContainer.nodeType?c.startContainer.parentNode:
c.startContainer,g=f(e);if(r(c))return c=e.nextSibling,g.remove(),a.selection.select(c,!0),d.dom.Event.cancel(b)});g._isCursorInFirstParagraphWhenThereAreTwoEmptyParagraphs=r;var s=function(a){var b=3===a.startContainer.nodeType?a.startContainer.parentNode:a.startContainer,c=f(b);return 0===a.startOffset&&l(b,"p, pre")&&c.parent().is("td.wysiwyg-macro-body")&&!b.nextSibling&&b.previousSibling&&!b.previousSibling.previousSibling&&l(b.previousSibling,"p, pre")};d.isWebKit&&j(function(a,b){if(8!==b.keyCode)return!0;
var c=a.selection.getRng(!0),e=3===c.startContainer.nodeType?c.startContainer.parentNode:c.startContainer,g=f(e);if(s(c))return c=e.previousSibling,g.remove(),a.selection.select(c,!0),d.dom.Event.cancel(b)});g._isCursorInSecondParagraphWhenThereAreTwoEmptyParagraphs=s;var t=function(a){if(!a.collapsed)return!1;var b=3===a.startContainer.nodeType?a.startContainer.parentNode:a.startContainer,c=f(b);if(!b||0<a.startOffset)return!1;d.confluence.NodeUtils.normalize(b);return b&&0===a.startOffset&&l(b,
"p, pre")&&c.parent().is("td.wysiwyg-macro-body")&&!b.previousSibling&&!b.nextSibling};(d.isWebKit||d.isGecko)&&j(function(a,b){if(8!==b.keyCode&&46!==b.keyCode)return!0;if(t(a.selection.getRng(!0)))return d.dom.Event.cancel(b)});g._isCursorInSoloParagraphOrPreInsidePlaceholder=t;var u=function(a){return a&&a.parentNode&&"BR"===a.nodeName&&a===a.parentNode.lastChild},v=function(a){if(!a.collapsed)return!1;var b=a.startContainer;return b&&0===a.startOffset&&3===b.nodeType&&m(a)&&1===b.nodeValue.length&&
!b.previousSibling&&(!b.nextSibling||u(b.nextSibling))},w=function(a){if(!a.collapsed)return!1;var b=a.startContainer;return b&&1===a.startOffset&&3===b.nodeType&&m(a)&&1===b.nodeValue.length&&!b.previousSibling&&(!b.nextSibling||u(b.nextSibling))},x=function(a){if(!a.collapsed)return!1;var b=a.startContainer;return b&&0===a.startOffset&&1===b.nodeType&&1===b.childNodes.length&&m(a)&&!b.previousSibling&&!b.nextSibling},y=function(a){if(!a.collapsed)return!1;var b=a.startContainer;return b&&1===a.startOffset&&
1===b.nodeType&&1===b.childNodes.length&&m(a)&&!b.previousSibling&&!b.nextSibling};(d.isWebKit||d.isGecko)&&j(function(a,b){if(8!==b.keyCode&&46!==b.keyCode)return!0;var c=a.selection.getRng(!0),e=3===c.startContainer.nodeType?c.startContainer.parentNode:c.startContainer;if(!f(e).closest(".wysiwyg-macro-body").size())return!0;d.confluence.NodeUtils.normalize(e);return 46===b.keyCode&&(v(c)||x(c))||8===b.keyCode&&(w(c)||y(c))?(e.lastChild&&!f(e.lastChild).is("br")&&f(e).append("<br/>"),f(e.firstChild).remove(),
a.selection.select(e,1),d.dom.Event.cancel(b)):!0});g._isCursorBehindOnlyCharacterInNestedElement=v;g._isCursorAfterOnlyCharacterInNestedElement=w;g._isCursorBehindOnlyChildInNestedElement=x;g._isCursorAfterOnlyChildInNestedElement=y;var A=function(a){if(a.collapsed)return!1;var b=function(a){return!a.previousSibling},c=function(a){return!a.nextSibling};return 0===a.startOffset&&z(a.startContainer,b)&&(!a.endContainer?!1:3===a.endContainer.nodeType?a.endOffset===a.endContainer.nodeValue.length:1===
a.endContainer.nodeType?1===a.endContainer.childNodes.length&&f(a.endContainer.firstChild).is("br")?0===a.endOffset:a.endOffset===a.endContainer.childNodes.length:!1)&&z(a.endContainer,c)},z=function(a,b){if(!a)return!1;if(f(a).is(".wysiwyg-macro-body"))return!0;do{if(!b(a))return!1;a=a.parentNode}while(a&&!f(a).is(".wysiwyg-macro-body"));return!0};d.isWebKit&&j(function(a,b){if(8!==b.keyCode&&46!==b.keyCode)return!0;var c=a.selection.getRng(!0);if(A(c)&&(c=f(c.startContainer).closest(".wysiwyg-macro-body"),
0<c.length)){var e=f(c[0].firstChild).is("pre");a.undoManager.add();c.empty();c=e?f("<pre><br/></pre>").appendTo(c):f("<p><br/></p>").appendTo(c);a.selection.select(c[0],!0);return d.dom.Event.cancel(b)}return!0});g._isMacroBodySelected=A;var B=function(a){if(!a.collapsed)return!1;var b=3===a.startContainer.nodeType?a.startContainer.parentNode:a.startContainer,c=f(b);return 0===a.startOffset&&l(b,"p")&&c.next().is("table")};d.isWebKit&&j(function(a,b){if(46===b.keyCode&&B(a.selection.getRng(!0)))return d.dom.Event.cancel(b)});
g._isCursorInEmptyParagraphPrecedingPlaceholder=B;var C=function(a){return!a||f(a.parentNode).is(".wysiwyg-macro td")?null:f(a.parentNode).is("p")?a.parentNode:C(a.parentNode)},n=function(a){return!a?null:3===a.nodeType?a:n(a.firstChild)||n(a.nextSibling)},o=function(a){return!a||"PRE"===a.nodeName||"TD"===a.nodeName?null:"BR"===a.nodeName?a:o(a.previousSibling)||o(a.parentNode)},D=function(a){var b,c;0<f(a.commonAncestorContainer).closest(".wysiwyg-macro td").length&&(o(a.startContainer)||(b=n(C(a.startContainer))));
if(0<(c=f(a.commonAncestorContainer).closest(".wysiwyg-macro td > pre")).length)o(a.startContainer)||(b=n(c[0]));b&&(a=a.cloneRange(),a.setStart(b,0));return a};d.isWebKit&&d.isMac&&j(function(a,b){var c=a.selection.getRng();if((b.metaKey||b.ctrlKey)&&b.shiftKey&&b.keyCode===k.LEFT){var e=D(c);if(e!==c)return a.selection.setRng(e),d.dom.Event.cancel(b)}});g._selectTillStart=D;i.onKeyDown.add(function(a,b){if(b.keyCode===d.VK.TAB){var c=a.selection.getRng(1);if(f(3===c.startContainer.nodeType?c.startContainer.parentNode:
c.startContainer).is(".wysiwyg-macro-body > pre")){a.undoManager.beforeChange();a.undoManager.add();var e=a.getDoc().createTextNode("\t");c.insertNode(e);a.selection.setCursorLocation(e,1);a.undoManager.add();return d.dom.Event.prevent(b)}}})},_setTinymceControlsState:function(f,h){d.each(f.controlManager.controls,function(d){d.setDisabled(!h)})},getInfo:function(){return{longname:"Macro Place Holder plugin",author:"Atlassian",authorurl:"http://www.atlassian.com",version:"1.0"}}}});
require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/macroplaceholder/editor_plugin_src",function(f){var h=require("tinymce");h.create("tinymce.plugins.MacroPlaceHolderPlugin",f);h.PluginManager.add("macroplaceholder",h.plugins.MacroPlaceHolderPlugin)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/insertwiki/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/insertwiki/editor_plugin_src",["jquery","ajs","confluence/legacy","tinymce","underscore"],function(f,c,g,i,s){var n=!c.DarkFeatures.isEnabled("editor.insert-wiki-markdown"),d={DEFAULT:null,HELP_REST_API:c.contextPath()+"/plugins/tinymce/helplink.action",WIKI:{CONFLUENCE:{val:"CONFLUENCE",label:"Confluence wiki",helpLink:"help.insert.wiki.markup",restApi:"/rest/tinymce/1/wikixhtmlconverter"},MARKDOWN:{val:"MARKDOWN",
label:"Markdown",helpLink:"help.insert.wiki.markup.markdown",restApi:"/rest/tinymce/1/markdownxhtmlconverter"}}},p=new g.localStorageCacheManager("insert-wiki-markup-dialog");return{init:function(e,t){e.addCommand("InsertWikiMarkup",function(){var j={id:"insert-wiki-markup-dialog",content:n?g.Templates.InsertWiki.wikiMarkupDialog():g.Templates.InsertWiki.originalDefaultTempWikiMarkupDialog(),width:980,height:500,popup:!1,name:"confluence.conf_wikimarkup_desc"},
u=c.Meta.get("content-id"),v=c.Meta.get("space-key");d.DEFAULT=d.WIKI[p.get("parser")||"CONFLUENCE"];var b={getElement:function(a){b[a]=b[a]||f(a);return b[a]}},k=null,l=function(){var a=b.getElement("#wiki-parser-selection-tool");return a.length?a.val():d.DEFAULT.val},q=function(a){a=a||{};a.setBusy&&e.windowManager.setBusy(j.id,!0);f.ajax({type:"POST",contentType:"application/json; charset=utf-8",url:a.API,data:f.toJSON({wiki:a.textToConvert,entityId:u,spaceKey:v}),dataType:"text",success:a.successCallback,
error:a.errorCallback||function(a){c.logError(a)},timeout:7500})},w=function(a){var b=j.id,d=l();e.windowManager.setBusy(b,!1);i.EditorManager.activeEditor.windowManager.close(b);n&&(c.trigger("analytics",{name:"insert-wiki-markup-dialog."+d}),"MARKDOWN"===d&&(a=f(a),a.find("img").addClass("confluence-embedded-image"),a=f("<div>").append(a.clone()).html()));e.execCommand("mceInsertContent",!1,a);i.each(e.dom.select("p > p"),function(a){try{e.dom.split(a.parentNode,a)}catch(b){c.logError("insertwikimarkup - splitParas()",
b)}})},x=function(a,b,d){e.windowManager.setBusy(j.id,!1);a={warningMessage:i.EditorManager.activeEditor.getLang("confluence.conf_wikimarkup_errors"),exceptionMessage:"timeout"===b?i.EditorManager.activeEditor.getLang("confluence.conf_wikimarkup_timeout"):c.escapeHtml(b)+" : "+c.escapeHtml(d)};a=g.Templates.InsertWiki.wikiErrorSubDialog(a);i.EditorManager.activeEditor.windowManager.alert(a)},r=function(){var a=b.getElement("#insert-wiki-textarea"),e=a.val();f.trim(e)?q({API:c.params.contextPath+d.WIKI[l()].restApi,
textToConvert:e,successCallback:function(a){k.html(a)},errorCallback:function(){k.html(a.val())}}):k.html(e)},y=function(){var a=l();p.put("parser",a);b.getElement("#"+j.id).find(".dialog-help-link").load(d.HELP_REST_API,{linkUrlKey:d.WIKI[a].helpLink});r()};e.windowManager.open(j,{buttons:[{label:"confluence.conf_insert_button_title",action:function(){q({API:c.params.contextPath+d.WIKI[l()].restApi,successCallback:w,errorCallback:x,textToConvert:b.getElement("#insert-wiki-textarea").val(),setBusy:!0})}}],
plugin_url:t,helpLink:d.DEFAULT.helpLink,hintText:"confluence.conf_wikimarkup_hint",cssClass:"insert-wiki-markup-panel"});if(n){var o=f("#wysiwygTextarea_ifr").contents().find("head").html(),z=g.Templates.InsertWiki.previewWikiIframeContent(),h=f("<iframe tabindex='-1' id='insert-wiki-markup-preview' />"),m;b.getElement("#insert-wiki-textarea-preview").append(h);h=h.contents();m=h[0];m.open();m.write(z);m.close();h.find("head").html(o);k=h.find("body");o=f(g.Templates.InsertWiki.wikiParserSelector(d));
b.getElement("#insert-wiki-insert-title").append(o);b.getElement("#wiki-parser-selection-tool").on("change",y);b.getElement("#insert-wiki-textarea").on("keydown",s.debounce(r,300))}});e.addButton("insertwikimarkup",{title:"confluence.conf_wikimarkup_desc",cmd:"InsertWikiMarkup"})},getInfo:function(){return{longname:"InsertWikiMarkip",author:"Atlassian",authorurl:"http://www.atlassian.com",infourl:"http://www.atlassian.com/",version:"1.1"}}}});
require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/insertwiki/editor_plugin_src",function(f){var c=require("tinymce");c.create("tinymce.plugins.InsertWikiMarkupPlugin",f);c.PluginManager.add("insertwikimarkup",c.plugins.InsertWikiMarkupPlugin)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/propertypanel/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/propertypanel/editor_plugin_src",["jquery","ajs","document","tinymce"],function(e,c,k,j){var h=[];c.bind("add-handler.property-panel",function(c,e){e&&h.push(e)});return{init:function(d){c.debug("init property panel plugin");var f,g=function(b,a,d){var f={focusedEl:d,focusedNodeName:d.nodeName&&d.nodeName.toLowerCase(),ed:b,e:e.extend({},a)};b=e(d);b.is("img")?b=b[0]:(b=b.closest("a,table,.wysiwyg-macro,.editor-inline-macro,.text-placeholder"),b=b.length?
b[0]:"");var d=!!e(d).closest("table:not(.wysiwyg-macro,.editor-inline-macro)").length,g=!!e(".toolbar-contextual").length;f.containerEl=b;c.trigger("user-blurred-rte-element",f);var i;if(i=b)a="click"!=a.type?!1:a.which?3===a.which:a.button?2==a.button:void 0,i=!a&&!c.Confluence.PropertyPanel.current&&c.Confluence.PropertyPanel.shouldCreate;if(i){a=0;for(i=h.length;a<i;a++)if(h[a].canHandleElement(e(b))){if(g||!d)return h[a].handle(f);(function(a){e(k).bind("shown.contextToolbar",function(){a.handle(f)})})(h[a])}}};
j.isIE&&d.onMouseDown.add(function(b,a){f&&f.unbind("mouseup.IEDragHandlesWorkaround");f=e(a.target);f.filter("img, table").bind("mouseup.IEDragHandlesWorkaround",function(){g(b,a,a.target)})});c.bind("trigger.property-panel",function(b,a){g(d,b,a.elem)});d.onClick.add(function(b,a){g(b,a,a.target)});d.onKeyUp.addToTop(function(b,a){27!==a.keyCode&&g(b,a,b.selection.getNode())});d.onContextMenu.add(function(){c.Confluence.PropertyPanel.destroy()});c.bind("user-blurred-rte-element",function(b,a){c.Confluence.PropertyPanel.current&&
(!a.containerEl||c.Confluence.PropertyPanel.current.hasAnchorChanged(a.containerEl)?c.Confluence.PropertyPanel.destroy():c.trigger("same-anchor.property-panel"))});c.bind("created.property-panel",function(){setTimeout(function(){c.Rte.bindScroll("property-panel",function(){c.Confluence.PropertyPanel.destroy()})},0);e(d.getDoc()).bind("keydown.property-panel.escape",function(b){27===b.keyCode&&c.Confluence.PropertyPanel.current&&c.Confluence.PropertyPanel.destroy()})});c.bind("destroyed.property-panel",
function(){c.Rte.unbindScroll("property-panel");e(d.getDoc()).unbind("keydown.property-panel.escape")})},getInfo:function(){return{longname:"Image, Link and Macro Property Panels",author:"Atlassian",authorurl:"http://www.atlassian.com",version:j.majorVersion+"."+j.minorVersion}}}});
require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/propertypanel/editor_plugin_src",function(e){var c=require("tinymce");c.create("tinymce.plugins.PropertyPanel",e);c.PluginManager.add("propertypanel",c.plugins.PropertyPanel)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/confmonospace/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/confmonospace/editor_plugin_src",["tinymce"],function(b){return{init:function(a){a.addCommand("confMonospace",function(){a.formatter.toggle("monospace",void 0)});b.activeEditor.onInit.add(function(a){a.formatter.register({monospace:{inline:"code"}});a.editorCommands.addCommands({confMonospace:function(){return a.formatter.match("monospace")}},"state")});a.addButton("monospace",{title:"monospace",cmd:"confMonospace"})},getInfo:function(){return{longname:"Monospace Formatting",
author:"Atlassian",authorurl:"http://www.atlassian.com",version:b.majorVersion+"."+b.minorVersion}}}});require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/confmonospace/editor_plugin_src",function(b){var a=require("tinymce");a.create("tinymce.plugins.ConfMonospacePlugin",b);a.PluginManager.add("confmonospace",a.plugins.ConfMonospacePlugin)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/propertypanel/js/property-panel-links.js' */
define("confluence-editor/tinymce3/plugins/propertypanel/js/property-panel-links",["ajs","jquery","confluence/legacy","tinymce","window"],function(a,d,i,j,k){var h=0;return{name:"link",canHandleElement:function(a){return a.is("a")&&"#"!=a.attr("href")&&!a.hasClass("unresolved")},handle:function(f){var c=f.containerEl,g=f.ed,b=function(c){return a.Rte.getEditor().getLang(c)},f={anchorIframe:a.Rte.getEditorFrame()},e=0===d(c).attr("href").indexOf("#"),b=[{className:"link-property-panel-goto-button",
text:b("propertypanel.links_goto"),tooltip:e?b("propertypanel.links_goto_disabled_tooltip"):c.href,href:c.href,disabled:e,click:function(){a.Confluence.PropertyPanel.destroy();var b=k.open(c.href,j.isIE?"_blank":"confluence-goto-link-"+a.params.pageId+"-"+h);b&&b.focus()}},{className:"link-property-panel-edit-button",text:b("propertypanel.links_edit"),tooltip:b("propertypanel.links_edit_tooltip"),disabled:d(c).hasClass("createlink")||!c.href,click:function(){a.Confluence.PropertyPanel.destroy();g.selection.select(c);
i.Editor.LinkBrowser.open()}},{className:"link-property-panel-unlink-button",text:b("propertypanel.links_unlink"),tooltip:b("propertypanel.links_unlink_tooltip"),click:function(){a.Confluence.PropertyPanel.destroy();g.execCommand("mceConfUnlink",!1,c);g.focus()}}],e=[];a.trigger("link-property-panel-buttons.created",{buttons:e,link:c});b=b.concat(e);a.Confluence.PropertyPanel.createFromButtonModel(this.name,c,b,f);h++}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/tinymce3/plugins/propertypanel/js/property-panel-links","AJS.Confluence.PropertyPanel.Link",function(a){var d=require("ajs");d.bind("init.rte",function(){d.trigger("add-handler.property-panel",a)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/propertypanel/js/property-panel-images.js' */
define("confluence-editor/tinymce3/plugins/propertypanel/js/property-panel-images","jquery ajs tinymce confluence-editor/utils/tinymce-image-utils confluence/meta confluence/legacy confluence/api/browser confluence/property-panel".split(" "),function(f,g,s,F,v,w,G,h){function x(){var a=[];f.each(t,function(b,c){a.push(c)});h.current.panel.find(a.join(", ")).removeClass("selected")}function p(a,b,c){var e=y(a,b),c=y(a,c),j=e||c;if(j){var d=h.getAnchor(),i=d.width(),d=d.height(),f=v.get("max-thumb-width"),
g=v.get("max-thumb-height");a.thumbnail=k.isRemoteImg(a.destination)?false:k.isThumbnailUsable(e,c,i,d,f,g);a.originalSelected=false;if(b){delete a.height;a.width=j}else{delete a.width;a.height=j}m(a);x();return true}return false}function z(a,b){if(u?p(a,n[b]):p(a,null,n[b])){A(b);m(a);return true}return false}function B(a){delete a.width;delete a.height;a.thumbnail=false;a.originalSelected=true;x();A("original");var b=h,c=b.getAnchor();b.current.updating=true;c.one("load",function(){l(b);q(a);a.width=
Math.floor(c.width());a.height=Math.floor(c.height())});k.updateImageElement(c,a);s.isGecko&&g.Rte.getEditor().execCommand("mceRepaint",false);c.each(function(){this.complete&&f(this).trigger("load")});return true}function A(a){h.current.panel.find(t[a]).addClass("selected")}function C(a){f(".image-border-toggle").toggleClass("selected",!a.border);a.border=+!a.border||false;m(a)}function m(a){var b=h,c=b.getAnchor(),e=c.attr("src"),f=c.height();b.current.updating=true;k.updateImageElement(c,a);s.isGecko&&
g.Rte.getEditor().execCommand("mceRepaint",false);if(a.src!=e){var d=setInterval(function(){var a=c.height();if(a!=f){g.debug("updateImageElement : height changed after image src change - "+f+" to "+a);clearTimeout(d);d=null;l(b)}},10);setTimeout(function(){if(d){clearTimeout(d);d=null;l(b)}},1E3)}else l(b);q(a)}function q(a){a=a.width?a.width:h.getAnchor().width();a=Math.floor(a);f("#image-size-input").val(a+"px")}function y(a,b){b=parseInt(b);if(isNaN(b))return null;b<D?b=D:b>E&&(b=E);return b}
var k=F.ImageUtils,u=k.isScaledByWidth(),n;n=u?{small:100,medium:300,large:500}:{small:150,medium:250,large:400};var t={small:".image-size-small",medium:".image-size-medium",large:".image-size-large",original:".image-size-original"},D=16,E=9E4,l=function(a){a.current.updating=false;a.current.snapToElement({animate:true,animateDuration:100})};return{_resizeImage:p,pluginButtons:[],name:"image",getPresetImageSize:function(a){return n[a]},canHandleElement:function(a){return a.is("img")&&!a.hasClass("editor-inline-macro")&&
!a.hasClass("template-variable")},handle:function(a){function b(){p(e,f("#image-size-input").val())?true:q(e);g.trigger("analyticsEvent",{name:"confluence.editor.image.resize.custom"})}var c;c=a.nodeName==="IMG"?a:a.containerEl;var a=f(c),e=s.confluence.ImageProperties(c);if(e&&!a.attr("data-resource-id")){var j=g.Rte.getEditor(),d=function(a){return j.getLang(a)},i=function(a){return{className:"image-size-"+a,text:d("propertypanel.images_"+a),tooltip:d("propertypanel.images_"+a+"_tooltip"),click:function(){z(e,
a);g.trigger("analyticsEvent",{name:"confluence.editor.image.resize."+a})},selected:u?e.width==n[a]:e.height==n[a]}},i=[{className:"editable",tooltip:d("propertypanel.images_sizing_tooltip"),html:'<input id="image-size-input"/>'},null,i("small"),i("medium"),i("large"),{className:"image-size-original",text:d("propertypanel.images_original"),tooltip:d("propertypanel.images_original_tooltip"),click:function(){B(e);g.trigger("analyticsEvent",{name:"confluence.editor.image.resize.original"})},selected:e.originalSelected},
null,{className:"image-border-toggle",text:d("propertypanel.images_border"),tooltip:d("propertypanel.images_border_tooltip"),click:function(){C(e)},selected:e.border||e.border==1}];i.push(null);var k=a.parent();if(k.is("a[href]")){i.push({className:"image-link-edit",text:d("propertypanel.images_link_edit"),tooltip:d("propertypanel.images_link_edit_tooltip"),click:function(){h.destroy();j.selection.select(k[0]);w.Editor.LinkBrowser.open()}});i.push({className:"image-link-remove",text:d("propertypanel.images_link_remove"),
tooltip:d("propertypanel.images_link_remove_tooltip"),click:function(){h.destroy();j.execCommand("mceConfUnlink",false,c);j.focus()}})}else i.push({className:"image-make-link",text:d("propertypanel.images_link_create"),tooltip:d("propertypanel.images_link_create_tooltip"),click:function(){h.destroy();j.selection.select(c);w.Editor.LinkBrowser.open()}});for(var l=h.Image.pluginButtons,r=0;r<l.length;r++)if(l[r]===null)i.push(null);else{var m=l[r].create(a);m&&i.push(m)}h.createFromButtonModel(this.name,
c,i,{anchorIframe:g.Rte.getEditorFrame()});a=f("#image-size-input");a.bind("focus",function(){f(this).select()});a.bind("change",function(){b()});(new G(window.navigator.userAgent)).isIE()&&a.bind("keyup",function(a){a.keyCode===13&&b()});h.current.imageProps=e;q(e);var o=e;return{setPresetSize:function(a){z(o,a)},setPixelSize:function(a){p(o,a)},setToOriginalSize:function(){B(o)},toggleBorder:function(){C(o)},getWidth:function(){return o.width},getHeight:function(){return o.height},getDisplayWidth:function(){return f("#image-size-input").val()},
isButtonSelected:function(a){return h.current.panel.find(t[a]).hasClass("selected")}}}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/tinymce3/plugins/propertypanel/js/property-panel-images","AJS.Confluence.PropertyPanel.Image",function(f){var g=require("ajs");g.bind("init.rte",function(){g.trigger("add-handler.property-panel",f)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/propertypanel/js/property-panel-macros.js' */
define("confluence-editor/tinymce3/plugins/propertypanel/js/property-panel-macros",["ajs","tinymce","jquery","confluence/legacy","document"],function(b,k,d,p,l){var m=[],n=[],e={};return{name:"macro",registeredEvents:m,canHandleElement:function(a){return a.hasClass("editor-inline-macro")||a.hasClass("wysiwyg-macro")},handle:function(a){if(!("click"!==a.e.type&&"mouseup"!==a.e.type)){var c=a.containerEl,f=d(c),h,g=[],a=!f.hasClass("editor-inline-macro"),r=f.hasClass("wysiwyg-unknown-macro"),i=[],q=
{originalHeight:a&&f.height(),anchorIframe:b.Rte.getEditorFrame()},o=function(a,b){return a+"-button-click"+(b?b+".macro":"")+".property-panel"};r||(h=f.attr("data-macro-name"),b.MacroBrowser.getMacroMetadata(h)&&(g=b.MacroBrowser.getMacroMetadata(h).buttons),a="macro-placeholder-property-panel-edit-button",0<g.length&&"__PROPERTY_PANEL_SPACER"==g[0].key&&(a+=" last"),i.push({className:a,text:"Edit",click:function(){b.Confluence.PropertyPanel.destroy();k.confluence.macrobrowser.editMacro(f)}}),
d.each(g,function(a,c){if(c.key!="__PROPERTY_PANEL_SPACER"){var e="macro-property-panel-"+c.key;a>0&&g[a-1].key=="__PROPERTY_PANEL_SPACER"&&(e=e+" first");a<g.length-1&&g[a+1].key=="__PROPERTY_PANEL_SPACER"&&(e=e+" last");i.push({className:e,text:c.label,parameterName:c.key,click:function(){d(l).trigger(o(c.key),f);d(l).trigger(o(c.key,h),f);b.Confluence.PropertyPanel.destroy()}})}}));a="macro-placeholder-property-panel-remove-button";0<g.length&&"__PROPERTY_PANEL_SPACER"==g[g.length-1].key&&(a+=
" first");i.push({className:a,text:"Remove",click:function(){b.Confluence.PropertyPanel.destroy();b.Rte.getEditor().execCommand("mceConfRemoveMacro",c)}});if(f.attr("data-macro-parameters")){var j=p.MacroParameterSerializer.deserialize(f.attr("data-macro-parameters"));"atlassian-macro-output-type"in j&&(a=function(a){return function(c){j["atlassian-macro-output-type"]=a;f.attr("data-macro-parameters",p.MacroParameterSerializer.serialize(j));a=="INLINE"?d(".macro-placeholder-property-panel-display-newline-button").removeClass("selected"):
d(".macro-placeholder-property-panel-display-inline-button").removeClass("selected");d(c).addClass("selected")}},i.push(null),i.push({className:"macro-placeholder-property-panel-display-newline-button",tooltip:"Display on new line",selected:"BLOCK"==j["atlassian-macro-output-type"],click:a("BLOCK")}),i.push({className:"macro-placeholder-property-panel-display-inline-button",tooltip:"Display inline",selected:"INLINE"==j["atlassian-macro-output-type"],
click:a("INLINE")}))}d.each(m,function(){(!this.macroName||this.macroName==h)&&d(l).bind(o(this.id,this.macroName),this.handler)});a=n;h&&e[h]&&(a=a.concat(e[h]));d.each(a,function(){try{this(c,i,q)}catch(a){b.debug("Property panel init handler failed for : "+h+".  Is global handler : "+(d.inArray(this,n)>-1),a)}});0<i.length&&b.Confluence.PropertyPanel.createFromButtonModel("macro",c,i,q)}},registerButtonHandler:function(a,c,b){Array.isArray(a)||(a=[a]);a.forEach(function(a){m.push({id:a,handler:c,
macroName:b})})},registerInitHandler:function(a,c){c?(e[c]=e[c]||[],e[c].push(a)):n.push(a)},yieldButtonFor:function(a,c){var b;d.each(a,function(){this.parameterName&&this.parameterName==c&&(b=this)});return b}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/tinymce3/plugins/propertypanel/js/property-panel-macros","AJS.Confluence.PropertyPanel.Macro",function(b){var k=require("ajs");k.bind("init.rte",function(){k.trigger("add-handler.property-panel",b)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/conftable/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/conftable/editor_plugin_src",["jquery","tinymce"],function(d,a){return{init:function(h){!a.isIE8&&h.onKeyDown.add(function(f,c){if(c.altKey&&!(38!==c.keyCode&&40!==c.keyCode)){var e=f.selection.getRng(!0),b=d(e.startContainer).closest("td.confluenceTd, th.confluenceTh",".mceContent");if(0!==b.length){f.execCommand(38===c.keyCode?"mceTableInsertRowBefore":"mceTableInsertRowAfter");var b=b.parent()[38===c.keyCode?"prev":"next"]().find("td:first-child")[0],
g=d(b);g.hasClass("numberingColumn")&&(b=g.next()[0]);e.setStart(b,0);e.setEnd(b,0);f.selection.setRng(e);return a.dom.Event.prevent(c)}}})},getInfo:function(){return{longname:"Confluence Table Plugin",author:"Atlassian",authorurl:"http://www.atlassian.com",version:a.majorVersion+"."+a.minorVersion}}}});
require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/conftable/editor_plugin_src",function(d){var a=require("tinymce");a.create("tinymce.plugins.ConfluenceTablePlugin",d);a.PluginManager.add("conftable",a.plugins.ConfluenceTablePlugin)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/deletecommand/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/deletecommand/editor_plugin_src",["jquery","ajs","tinymce"],function(b,c,f){return{init:function(d){d.addCommand("mceDelete",function(g,h){(function(){if(f.isWebKit){var a=d.selection.getRng(1);if(a.collapsed)return!1;var e=b(a.startContainer).closest(".wysiwyg-macro-body",d.getBody())[0];if(e&&c.EditorUtils.isRangeAtStartOf(e,a)&&c.EditorUtils.isRangeAtEndOf(e,a))return a=b(e.firstChild).is("pre")?"pre":"p",a=b("<"+a+"><br data-mce-bogus='1'></"+a+">")[0],
b(e).html(a),d.selection.select(a,1),!0}return!1})()||d.getDoc().execCommand("Delete",g,h)})},getInfo:function(){return{longname:"Delete Command Plugin",author:"Atlassian",authorurl:"http://www.atlassian.com",version:f.majorVersion+"."+f.minorVersion}}}});require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/deletecommand/editor_plugin_src",function(b){var c=require("tinymce");c.create("tinymce.plugins.DeleteCommandPlugin",b);c.PluginManager.add("deletecommand",c.plugins.DeleteCommandPlugin)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/draggable/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/draggable/editor_plugin_src",["jquery","ajs"],function(g,e){function F(a){if(1===a.which&&a.target===a.currentTarget)if(d)r(a);else{d=g(a.target);h.selection.select(a.target);a.preventDefault();i.bind({"mousemove.moveable-zone":G,"mouseup.moveable-zone":r,"keydown.moveable-zone":H,"mouseover.moveable-zone":l});var b=d.offset();u=a.pageX;v=a.pageY;z=b.top-v;A=b.left-u;s=!0;a=d;m=a.attr("style")||"";d=a}}function H(a){27===a.keyCode&&(k.cancelScrolling(),i.unbind(".moveable-zone"),
h.undoManager.undo(),h.selection.select(d[0]),h.selection.collapse(!1),d=null)}function l(){i.find(".mceSelected").removeClass("mceSelected")}function G(a){var b;if(s){b=Math.abs(u-a.pageX);var f=Math.abs(v-a.pageY);if(b<B&&f<B)return;e.Rte.BookmarkManager.storeBookmark();h.undoManager.beforeChange();h.undoManager.typing=!0;h.undoManager.add();(b=h.selection.getSel())&&b.removeAllRanges&&b.removeAllRanges();d.css({position:"absolute",width:d.css("width"),"max-width":"50%"});e.Confluence.PropertyPanel.current&&
e.Confluence.PropertyPanel.destroy();d.detach();e.Rte.Cursor.fixCursorTargets(e.Rte.getEditor().getBody());n.append(d);var o=d,p=function(){return i.find("#move-indicator")},r=function(a,b){var c=g(i[0].elementFromPoint(a,b)),j=!0;if(c.is(t)&&"move-indicator"!==c.attr("id")&&!(c.is("td.wysiwyg-macro-body")&&"PLAIN_TEXT"===c.closest("table").attr("data-macro-body-type")||c.is("img")&&!o.is("img"))){j=c;if(c.is("img")){var d;d=c.offset();d=a+i.scrollLeft()-d.left;c=c.width()}else d=w(c,b),c=c.height();
c=d<c/2;return{target:j,before:c}}if(l?c.is(C):c.is(D)){c=c.is("div.cell")?c.children("div.innerCell").first():c;if(0>w(c.children().first(),b))c=c.children().first();else{d=c.children().last();j=w(d,b);d=d.height();if(0<j-d)c=c.children().last();else{if(0<p().length&&0<p().parent(c).length)return null;j=c;c=o.parent(t);c.length||(c=j.find(t).last());c.length||(c=n.find(t).last())}j=!1}return{target:c,before:j}}return null},w=function(a,d){var c=a.offset();return d+i.scrollTop()-c.top},l=!!n.children(".contentLayout,.contentLayout2").length;
q={positionNear:function(a,d){var c;if(c=r(a,d)){var b=c.target;c=c.before;if("move-indicator"!==b.attr("id")){var f=p();if(!b.is(E)||!b.find(f).length){f.length?f.detach():f=g('<span id="move-indicator">|</span>');if(b.is(E)){var o=b.children().first();o.is(I)&&(b=o)}!b.is("img")&&e.Rte.Cursor.isTextContainerEmpty(b[0])?b.prepend(f):b.is(J)?c?b.prepend(f):b.append(f):c?b.before(f):b.after(f)}}}},replaceWith:function(b){var a=p();if(a.length){var c;if(c=b.is(K))c=a.parent(),c=l?c.is(C):c.is(D);c&&
(b=g("<p></p>").append(b));a.replaceWith(b);e.Rte.showElement(b);h.selection.select(b[0]);h.selection.collapse(!0)}else e.debug("No cursor - abort drop"),h.undoManager.undo();e.Rte.Cursor.fixCursorTargets(e.Rte.getEditor().getBody())},destroy:function(){var b=p();b.length&&(b.remove(),e.Rte.Cursor.fixCursorTargets(e.Rte.getEditor().getBody()))}};s=!1}a.preventDefault();d.hide();var f=a.clientY,m;b=x.length;f=Math.max(f,0);f<b?k.scrollUp(x[f]):(m=y.height(),f=Math.max(0,m-f),f<b?k.scrollDown(x[f]):
k.cancelScrolling());q.positionNear(a.clientX,a.clientY);b=Math.min(a.pageY+z,k.scrollHeight()-d.outerHeight());d.css({top:b,left:a.pageX+A,opacity:0.5});d.show()}function r(a){i.unbind(".moveable-zone");k.cancelScrolling();s?d=null:(a.preventDefault(),d.detach(),d.attr("style",m),q.replaceWith(d),q.destroy(),q=d=null,l(),h.undoManager.add())}if(!(g.browser.msie&&8>=g.browser.version)){var K="img",B=10,h,y,i,n,z,A,u,v,d,m,s,k,q,x=[800,800,400,400,400,300,300,300,300,300,300,300,300,300,300,200,200,
200,200,200,200,200,200,200,200,200,200,200,200,200,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100],C="div.innerCell,div.cell",D="body",t="p,h1,h2,h3,h4,h5,h6,blockquote,li,td,th,img",E="li,td,th",I="p,h1,h2,h3,h4,h5,h6,blockquote",J="li,td,th";return{init:function(a){h=a;a.onInit.add(function(){y=g(a.getWin());i=g(a.getDoc());n=g(a.getBody());g(y[0].parent);var b=g.browser.webkit?n:i.find("html"),d=0;k={scrollUp:function(a){d!==-a&&(d=-a,a=1E3*(b.scrollTop()/a),b.stop(!1,!1),b.animate({scrollTop:0},
{duration:a}))},scrollDown:function(a){var e;d!==a&&(d=a,e=b[0].scrollHeight,a=1E3*((e-b.scrollTop())/a),b.stop(!1,!1),b.animate({scrollTop:e},{duration:a}))},cancelScrolling:function(){d=0;b.stop(!0,!1)},scrollHeight:function(){return b[0].scrollHeight}};i.delegate("img.confluence-embedded-image,img.editor-inline-macro,table.wysiwyg-macro",{mousedown:F})})},getInfo:function(){return{longname:"Draggable objects (images, tables, placeholders) around the document via drag and drop",author:"Atlassian",
authorurl:"http://www.atlassian.com",version:"1.0"}}}}});require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/draggable/editor_plugin_src",function(g){var e=require("tinymce");e.create("tinymce.plugins.draggable",g);e.PluginManager.add("draggable",e.plugins.draggable)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'editor/atlassian-editor.js' */
define("confluence-editor/editor/atlassian-editor",["tinymce","ajs","jquery","window","document"],function(f,b,d,g,h){function j(a){a=a&&a.jquery?a[0]:a;if(!a)return!1;if("BR"===a.tagName||3===a.nodeType)a=a.parentNode;a&&9===a.nodeType&&(a=null);return a}var k=parseInt(d.browser.version,10);return{Rte:{HIDDEN_CHAR:"\ufeff",ZERO_WIDTH_WHITESPACE:"&#x200b;",editorId:"wysiwygTextArea",isQuickEdit:!1,getEditor:function(){return f.activeEditor},getCurrentBaseUrl:function(){if(!this.currentBaseUrl){var a=
h.location;this.currentBaseUrl=a.protocol+"//"+a.hostname+(a.port?":"+a.port:"")}return this.currentBaseUrl},showSelection:function(a){b.Rte.showElement(f.activeEditor.selection.getStart(),a)},isAnyPartShown:function(a){a=j(a);if(!a)return b.debug("AJS.Rte.isAnyPartShown: no element to find"),!1;var c=d(a),a=c.offset().top,c=a+c.outerHeight(),e=d(b.Rte.getEditor().getDoc()).scrollTop(),f=e+d(b.Rte.getEditorFrame()).height();return c>e&&a<f},showElement:function(a,c){var e=j(a);if(!e)return b.log("AJS.Rte.showElement: no element to show - skipping"),
!1;var f=d(e),e=b.Rte.getEditor(),i=d(e.getDoc()),e=f.offset().top,f=e+f.outerHeight(),i=i.scrollTop(),g=i+d(b.Rte.getEditorFrame()).height(),h=function(){b.Rte.bindScroll("AJS.Rte.showElement",function(){b.Rte.unbindScroll("AJS.Rte.showElement");setTimeout(c,1)})};e<i?(b.Rte.scrollTo(e),c&&h()):f>g?(b.Rte.scrollTo(Math.min(e,i+f-g)),c&&h()):c&&c()},scrollTo:function(a){var c=b.Rte.getEditor(),a=Math.ceil(a);d(c.getDoc()).scrollTop(a)},bindScroll:function(a,c){var e=b.Rte.getEditor();d(h).add(e.getDoc()).add(e.getWin()).bind("scroll."+
a,c)},unbindScroll:function(a){var c=b.Rte.getEditor();d(h).add(c.getDoc()).add(c.getWin()).unbind("scroll."+a)},getMainEditor:function(){var a=f.EditorManager.editors[b.Rte.editorId];if(!a)throw Error("Main editor has not been initialised yet and is therefore not accessible via tinymce.EditorManager.editors");return a},getEditorContainer:function(){return d("#wysiwyg")},getEditorFrame:function(){return d("#"+b.Rte.getEditor().id+"_ifr")[0]},getEditorTable:function(){return d("#"+b.Rte.getEditor().id+
"_tbl")},webResourcePath:"/download/resources/com.atlassian.confluence.tinymceplugin%3Atinymceeditor/",getResourceUrlPrefix:function(){this.resourceUrlPrefix||(this.resourceUrlPrefix=this.getCurrentBaseUrl()+b.Meta.get("editor-plugin-resource-prefix"));return this.resourceUrlPrefix},getTinyMceBaseUrl:function(){this.absoluteUrl||(this.absoluteUrl=this.getResourceUrlPrefix()+this.webResourcePath+"tinymcesource/");return this.absoluteUrl},getMinEditorHeight:function(){return+b.Meta.get("min-editor-height")},
getTinyMceEditorMinHeight:function(a){var a=a||0,c=b.Rte.getMinEditorHeight(),e=0;if(c)return c;d("#editor-precursor,#header-precursor,#header").each(function(){e+=d(this).outerHeight(!0)});return d(g).height()-e-a},fixEditorFocus:function(){b.log("WARNING: The fixEditorFocus method has been deprecated and it will be removed in an upcoming Confluence release.");if(f.isGecko&&!isNaN(k)&&30>k){var a=b.Rte.getEditor().getBody();b.log("Fixing FF cursor positioning");"true"==a.contentEditable&&(a.contentEditable=
!1,a.contentEditable=!0)}},editorFocus:function(a){if(a&&!a.destroyed){var c;c=a.dom.getRoot();f.isWebKit&&!d(c).parents("body").length&&(c=d(a.getBody()).find("p:first-child")[0]);c?(a.selection.select(c,1),a.selection.collapse(1),c.focus()):b.log("editorFocus was called with an invalid node");a.getBody().focus();a.getWin().focus()}}},KEYS:{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46,META:91}}});
require("confluence/module-exporter").safeRequire("confluence-editor/editor/atlassian-editor",function(f){var b=require("ajs"),d=require("jquery"),g=require("tinymce");b.Rte=d.extend(f.Rte,b.Rte);g.VK=d.extend(f.KEYS,g.VK)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'editor/atlassian-editor-content.js' */
define("confluence-editor/editor/atlassian-editor-content",["jquery","ajs"],function(c,b){return{offset:function(a){var a=c(a).offset(),e=c(b.Rte.getEditorFrame()),g=e.offset(),d=e[0].contentWindow.document,f=c(b.Rte.getEditor().getBody()),e=c.support.boxModel&&d.documentElement.scrollTop||f.scrollTop(),d=c.support.boxModel&&d.documentElement.scrollLeft||f.scrollLeft();return{top:a.top-e+g.top,left:a.left-d+g.left}},getSelectedText:function(){var a=b.Rte.getEditor().selection;return a.getRng().text||
a.getSel()&&a.getSel().toString&&a.getSel().toString()||""},setHtml:function(a){a&&b.Rte.getEditor().setContent(a)},getHtml:function(){return""+b.Rte.getEditor().getContent()},isEmpty:function(){var a=b.Rte.getEditor().getContent().replace("&nbsp;"," ");return!c.trim(a)},editorHasContentChanged:function(){return b.Rte.getEditor().isDirty()},editorResetContentChanged:function(){b.Rte.getEditor().setDirty(!1)},getChildIndex:function(a,b){for(var c=a.childNodes,d=0,f=c.length;d<f;d++)if(c[d]==b)return d;
return-1}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/editor/atlassian-editor-content","AJS.Rte.Content");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'bookmark/atlassian-editor-bookmark-manager.js' */
define("confluence-editor/atlassian-editor-bookmark-manager",["tinymce"],function(b){var c;return{storeBookmark:function(){var a=b.activeEditor,d=b.DOM.getViewPort(b.activeEditor.getWin());a.focus();a=a.selection.getRng();a=a.cloneRange&&"function"===typeof a.cloneRange?a.cloneRange():a.duplicate&&a.duplicate()||a;c={scrollX:d.x,scrollY:d.y,range:a}},restoreBookmark:function(){var a=b.activeEditor.selection,d=b.activeEditor.getWin();c&&(d.scrollTo(c.scrollX,c.scrollY),d.focus(),a.setRng(c.range))}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/atlassian-editor-bookmark-manager","AJS.Rte.BookmarkManager");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'support/atlassian-editor-support.js' */
define("confluence-editor/support/atlassian-editor-support",["ajs"],function(b){return{inlineTasks:function(){var a=b.Meta.get("use-inline-tasks");return"true"===a||!0===a}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/support/atlassian-editor-support","AJS.Rte.Support");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'event/tinymce-event-delegator.js' */
define("confluence-editor/event/tinymce-event-delegator",[],function(){return function(h){var c={},f={},i=function(d,b){var a,e;for(e in c)if(c.hasOwnProperty(e)&&c[e].isEnabled)for(var g=0,f=c[e].events.length;g<f;g++)a=c[e].events[g],-1<a.type.toLowerCase().indexOf(b.type)&&(a.shouldTrigger(d,b)?a.callback.apply(this,[b.target]):a.missed&&a.missed())};return{addEventsForComponent:function(d,b){d in c||(c[d]={},c[d].events=[],c[d].isEnabled=!0);for(var a=0,e=b.length;a<e;a++)b[a].type in f||(f[b[a].type]=
!0,h[b[a].type].add(i)),"function"!==typeof b[a].shouldTrigger&&function(c){b[a].shouldTrigger=function(a,b){return b.target.tagName.toLowerCase()==c}}(b[a].shouldTrigger),c[d].events.push(b[a])},disableEventsForComponent:function(d){for(var b=0,a=c.length;b<a;b++)if(d in c)return c[d].isEnabled=!1,!0;return!1},enableEventsForComponent:function(d){for(var b=0,a=c.length;b<a;b++)if(d in c)return c[d].isEnabled=!0;return!1}}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/event/tinymce-event-delegator","AJS.Rte.EventDelegator");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'oninit/tinymce-cursor-fixes.js' */
define("confluence-editor/oninit/tinymce-cursor-fixes",["jquery","tinymce","ajs"],function(e,d,h){function l(a){if(0===e(a).closest("td").length)return!0;for(a=a.parentNode;"td"!==a.nodeName.toLowerCase();){if(e(a).prevAll().contents().filter(function(){return 3===this.nodeType}).length)return!1;a=a.parentNode}return!0}function m(a,b,g){if(b.compareEndPoints)return a=a.getBody().createTextRange(),a.moveToElementText(g),a.collapse(1),0===b.compareEndPoints("StartToStart",a)&&l(g);if(!a.selection.getSel().isCollapsed)return!1;
g=b.startContainer;if(3===g.nodeType)return!g.previousSibling&&0===b.startOffset&&l(g);if(e(g).is("p:first-child"))return 0===b.startOffset;if(e(g).is(".wysiwyg-macro-body"))return 1==b.startOffset&&3===b.startContainer.childNodes[0].nodeType&&"\n"==b.startContainer.childNodes[0].nodeValue}function k(a,b,g){if(b.compareEndPoints)return a=a.getBody().createTextRange(),a.moveToElementText(g),a.collapse(0),0===b.compareEndPoints("EndToEnd",a);if(!a.selection.getSel().isCollapsed)return!1;g=b.endContainer;
return 3===g.nodeType?g.wholeText.length==b.endOffset:e(g.childNodes[b.endOffset]).is(":last-child")}function i(a,b,g){var c=a.dom.create("p",0,d.isIE?"&nbsp;":'<br data-mce-bogus="1" />');g?b.after(c):b.before(c);a.selection.select(c,!0);a.selection.collapse()}return{insertParagraph:i,isCursorAtStart:m,isCursorAtEnd:k,bindCursorFixes:function(){var a=h.Rte.getEditor();d.isIE&&a.onKeyPress.add(function(b,a){var c=b.selection,f=c.getNode();if(13===a.keyCode&&"P"===f.nodeName&&b.dom.is(f,":first-child")&&
d.confluence.MacroUtils.isInMacro(f)){var e=b.dom.create("p","&#x200b");b.dom.insertAfter(e,f);c.select(e,1);c.collapse();return d.dom.Event.cancel(a)}});d.isGecko&&a.onKeyPress.add(function(b,a){var c,f,d;a.charCode==e.ui.keyCode.SPACE&&(c=b.selection.getNode(),f=e(c).closest("a"),d=b.selection.getRng(),f.length&&k(b,b.selection.getRng(),c)&&(d.setStartAfter(f[0]),d.setEndAfter(f[0]),b.selection.setRng(d),b.selection.collapse()))});a.onKeyPress.addToTop(function(b,a){if(13===a.keyCode&&!a.shiftKey){var c=
b.selection.getNode(),f=e(c).closest("pre");if(f.length&&!d.confluence.MacroUtils.isInMacro(f)&&k(b,b.selection.getRng(),c))return i(b,f,!0),d.dom.Event.cancel(a);f=e(c).closest("blockquote");if(f.length){var j=e(c).closest("p");if(j.is(":first-child")&&m(b,b.selection.getRng(),c))return i(b,f,!1),d.dom.Event.cancel(a);if(c=j.is(":last-child"))c=j.contents(),c=!c.length||1===c.length&&(c.is("br")||"&nbsp;"==c.html()||160===c.text().charCodeAt(0)||3===c[0].nodeType&&c[0].nodeValue==h.Rte.HIDDEN_CHAR)?
!0:!1;if(c)return b.dom.remove(j[0],!1),i(b,f,!0),d.dom.Event.cancel(a)}}return!0})}}});require("confluence/module-exporter").safeRequire("confluence-editor/oninit/tinymce-cursor-fixes",function(e){var d=require("ajs"),h=require("jquery");d.Rte=d.Rte||{};d.Rte.Cursor=d.Rte.Cursor||{};h.extend(d.Rte.Cursor,{insertParagraph:e.insertParagraph,isCursorAtStart:e.isCursorAtStart,isCursorAtEnd:e.isCursorAtEnd});d.bind("init.rte",e.bindCursorFixes)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/highlightnode/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/highlightnode/editor_plugin_src",["jquery","ajs","document","tinymce"],function(b,a,g,f){return{init:function(f){a.debug("Hightlight Current Node Plugin");var j="strong em u s sub sup a code h1 h2 h3 h4 h5 h6 pre".split(" "),h={strong:"Bold",em:"Italic",u:"Underline",s:"Strikethrough",sub:"subscript",sup:"superscript"};f.onNodeChange.add(function(c,e,d){var e=b(d),a=b(".highlight-marker",c.getBody()),c=-1!=b.inArray(d.nodeName.toLowerCase(),j)&&!(d.nodeName.toLowerCase()in
h&&!c.queryCommandState(h[d.nodeName.toLowerCase()]))&&!(!(d.nodeName.toLowerCase()in h)&&!c.formatter.match(d.nodeName.toLowerCase()));if(!e.hasClass("highlight-marker")||!c)a&&a.removeClass("highlight-marker"),c&&e.addClass("highlight-marker")});var i=function(c){b(".highlight-marker",c).each(function(){b(this).removeClass("highlight-marker")})};b(g).bind("mode-changed",function(c,a){"preview"===a&&i(b("iframe").contents().find("#content"))});f.onSaveContent.add(function(a,e){var d=b("<div>"+e.content+
"</div>");i(d);e.content=d[0].innerHTML})},getInfo:function(){return{longname:"Atlassian Show Current Node",author:"Atlassian",authorurl:"http://www.atlassian.com",version:f.majorVersion+"."+f.minorVersion}}}});
require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/highlightnode/editor_plugin_src",function(b){var a=require("tinymce"),g=require("ajs");a.create("tinymce.plugins.ShowCurrentNode",b);g.DarkFeatures.isEnabled("highlightnode")&&a.PluginManager.add("highlightnode",a.plugins.ShowCurrentNode)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/iosediting/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/iosediting/editor_plugin_src",["jquery","ajs","tinymce"],function(b,a,c){return{init:function(){c.isIDevice&&setTimeout(function(){b(a.Rte.getEditor().getBody()).addClass("ios")},0)},getInfo:function(){return{longname:"iOS Comments Plugin",author:"Atlassian",authorurl:"http://www.atlassian.com",version:c.majorVersion+"."+c.minorVersion}}}});
require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/iosediting/editor_plugin_src",function(b){var a=require("tinymce");a.create("tinymce.plugins.iOSEditing",b);a.PluginManager.add("iosediting",a.plugins.iOSEditing)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/overrides/dom-utils.js' */
define("confluence-editor/tinymce3/overrides/dom-utils",["ajs","jquery"],function(b,d){return{getRoot:function(){var a=b.Rte.getEditor(),e=a.dom,c=e.settings;if(!(c=c&&e.get(c.root_element)))a=d(a.selection.getNode()).closest("div.innerCell"),c=0<a.length?a[0]:e.doc.body;return c},setRoot:function(a){b.Rte.getEditor().dom.settings.root_element=a}}});
require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/overrides/dom-utils",function(b){var d=require("tinymce");d.dom.DOMUtils.prototype.getRoot=b.getRoot;d.dom.DOMUtils.prototype.setRoot=b.setRoot});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'toolbar/toolbar-configuration-manager.js' */
define("confluence-editor/toolbar/toolbar-configuration-manager",["jquery"],function(e){return function(c){var d={Formatting:".rte-toolbar-group-formatting",Style:".rte-toolbar-group-style",Indentation:".rte-toolbar-group-indentation",Lists:".rte-toolbar-group-lists",Tasks:".rte-toolbar-group-task-lists",Justification:".rte-toolbar-group-justification",Links:".rte-toolbar-group-link",Table:".rte-toolbar-group-table",Insert:".rte-toolbar-group-insert",Undo:".rte-toolbar-group-undo",PageLayouts:"#page-layout-2-group",
SearchReplace:".rte-toolbar-group-searchreplace",Help:".rte-toolbar-group-help"};return{configureToolbar:function(a){if(!1===a)c.hide();else{var a=a||{},b;for(b in a)a.hasOwnProperty(b)&&d[b]&&!1===a[b]&&e(d[b],c).hide()}}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/toolbar/toolbar-configuration-manager","AJS.Confluence._ToolbarConfigurationManager");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'loader/tinymce-bootstrap.js' */
define("confluence-editor/loader/tinymce-bootstrap",["ajs","underscore","jquery","document"],function(b,o,c,i){var m={atlassian:!0,keep_values:!0,convert_urls:!0,relative_urls:!1,remove_script_host:!1,button_tile_map:!0,gecko_spellcheck:!0,apply_source_formatting:!1,list_outdent_on_enter:!0,visual:!1,confluence_table_style:"confluenceTable",confluence_table_cell_style:"confluenceTd",confluence_table_heading_style:"confluenceTh",confluence_table_default_rows:4,confluence_table_default_cols:3,confluence_table_default_heading:!0,
cleanup:!0,cleanup_on_startup:!0,fix_list_elements:!1,fix_table_elements:!0,valid_elements:"@[id|class|style|title|wysiwyg|dir<ltr?rtl|lang|xml::lang|onclick|ondblclick|onmousedown|onmouseup|onmouseover|onmousemove|onmouseout|onkeypress|onkeydown|onkeyup],a[*],strong/b,em/i,s,u,#p[align|user],-ol[type|compact],-ul[type|compact],li,br,img[imagetext|longdesc|usemap|src|border|alt=|title|hspace|vspace|width|height|align],-sub,-sup,-blockquote[cite|markup],-table[*],-tr[rowspan|width|height|align|valign|bgcolor|background|bordercolor],tbody,thead,tfoot,#td[colspan|rowspan|width|height|align|valign|bgcolor|background|bordercolor|scope],#th[colspan|rowspan|width|height|align|valign|scope],caption,div[*],#span[*],-code,#pre[*],address,-h1,-h2,-h3,-h4,-h5,-h6,hr[size|noshade],-font[face|size|color],dd,dl,dt,cite,abbr,acronym,del[datetime|cite],ins[datetime|cite],object[classid|width|height|codebase|*],param[name|value],embed[type|width|height|src|*],map[name],area[shape|coords|href|alt|target],bdo,button,col[align|char|charoff|span|valign|width],colgroup[align|char|charoff|span|valign|width],dfn,fieldset,form[action|accept|accept-charset|enctype|method],input[accept|alt|checked|disabled|maxlength|name|readonly|size|src|type|value],kbd,label[for],legend,noscript,optgroup[label|disabled],option[disabled|label|selected|value],q[cite],samp,select[disabled|multiple|name|size],small,textarea[cols|rows|disabled|name|readonly],tt,var,big",
extended_valid_elements:"img[*],time[class|datetime|contenteditable|onselectstart|unselectable|oncontrolselect]",formats:{removeformat:[{selector:"h1,h2,h3,h4,h5,h6,pre",remove:"all",split:!0,expand:!1,block_expand:!0,deep:!0,block:"*"},{selector:"address,article,b,big,blockquote,center,cite,code,date,dd,del,dfn,dl,dt,em,embed,font,footer,header,hgroup,i,ins,kbd,link,menu,nav,object,param,q,s,samp,script,section,small,strike,strong,style,sub,sup,time,tt,u,var",remove:"all",split:!0,expand:!1,block_expand:!0,
deep:!0},{selector:"span",attributes:["style","class"],remove:"empty",split:!0,expand:!1,deep:!0},{selector:"table",attributes:["cellpadding","cellspacing","border"],split:!1,expand:!1,deep:!0},{selector:"*",attributes:["style","color","bgcolor","title","lang"],split:!1,expand:!1,deep:!0}]},forced_root_block:"p",force_p_newlines:!0,force_br_newlines:!1,oninit:"AJS.Rte.BootstrapManager.onInit",object_resizing:!1,paste_preprocess:function(a,b){c(i).trigger("prePaste",[a,b])},paste_postprocess:function(a,
b){c("img",b.node).not("[data-emoticon-name]").not(".editor-inline-macro").not(".confluence-embedded-image").not(".template-variable").addClass("confluence-embedded-image confluence-external-resource");c(i).trigger("postPaste",[a,b])}};return{_tinyMceHasInit:!1,_beforeInitCallbacks:[],_tinymcePluginInits:[],_settings:null,isInitComplete:function(){return this._tinyMceHasInit},isEditorActive:function(){var a=require("tinymce");return this.isInitComplete()&&a&&a.activeEditor},onInit:function(){this._tinyMceHasInit=
!0;var a=b.Rte.getEditor();b.trigger("init.rte",{editor:a});!1!==b.Meta.get("editor-auto-focus")?b.Rte.editorFocus(a):b.debug("Bootstrap: editor-auto-focus=false. Do not focus the editor automatically.")},addOnInitCallback:function(a){if(c.isFunction(a))this._tinyMceHasInit?a():b.bind("init.rte",a);else throw Error("Attempt made to register an oninit callback that is not a function. Received: "+a);},addBeforeInitCallback:function(a){this._beforeInitCallbacks.push(a)},addTinyMcePluginInit:function(a){this._tinymcePluginInits.push(a)},
preInitialise:function(a){this._settings=c.extend(m,a)},initialise:function(a){var j=require("tinymce");if(this._settings){var a=c.extend({},a),f=c.extend({},this._settings);b.Rte.isQuickEdit=a.isQuickEdit||!1;b.debug("Bootstrap:initialise: Initialising TinyMce version "+j.majorVersion+"."+j.minorVersion);c.each(this._beforeInitCallbacks,function(a,b){b(f)});for(var d=0,h=this._tinymcePluginInits.length;d<h;d++)if("function"===typeof this._tinymcePluginInits[d])this._tinymcePluginInits[d](f);var d=
f.language,h=require("tinymce"),g=require("confluence-editor/i18n/translations.i18n");b.debug("Bootstrap: set locale translations");void 0==typeof g&&b.log("ERROR: could not find the TinyMCE language pack");var i=RegExp(g.ctrl_key+"\\+","g"),m=RegExp(g.shift_key+"\\+","g"),n=function(a){return a.replace(i,"\u2318").replace(m,"\u21e7")},e;for(e in g){var k=g[e];if("object"===typeof k)for(var l in k)h.isMac&&(k[l]=n(k[l]));h.EditorManager.addI18n(d+"."+e,g[e])}h.isMac&&c("#rte-toolbar .toolbar-item, #rte-toolbar .dropdown-item, #rte-savebar .aui-button").each(function(){var a=
c(this),b=a.attr("title"),d=a.attr("data-tooltip");b&&a.attr("title",n(b));d&&a.attr("data-tooltip",n(d))});(new b.Confluence._ToolbarConfigurationManager(c("#toolbar"))).configureToolbar(a.toolbar);e=a.plugins;l=a.excludePlugins;d=f.plugins.split(",");d=o.chain(d).union(e).difference(l).value();e=d.join(",");f.plugins=e;f.setup=a.onInitialise;j.init(f);b.Rte.Content.editorResetContentChanged();c(b.Rte.getEditorFrame()).attr("tabindex",100);j.isIE&&c(b.Rte.getEditorFrame()).attr("hidefocus","hidefocus");
b.trigger("rte-ready")}else b.log("Bootstrap:initialise: No settings found. Has preInitialise been called?")}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/loader/tinymce-bootstrap","AJS.Rte.BootstrapManager");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'utils/environment.js' */
define("confluence-editor/utils/environment",["ajs"],function(b){return{isMac:0<=navigator.platform.indexOf("Mac"),transformCmdKeyTextBasingOnOS:function(a){var c="Ctrl";return this.isMac?a.replace(RegExp(c,"g"),"\u2318"):a}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'utils/editor-utils.js' */
define("confluence-editor/utils/editor-utils",["jquery","tinymce"],function(g,e){var f={isCursorAtStartOf:function(b,a){return a.collapsed&&f.isRangeAtStartOf(b,a)},isRangeAtStartOf:function(b,a){if(!a||!a.startContainer)throw Error("range is invalid. received: "+a);if(!b||!b.nodeType)throw Error("context is invalid. received: "+b);var c=a.startContainer,d;if(3===c.nodeType){if(0!==a.startOffset)return!1;d=c}else if(d=c.childNodes[a.startOffset],void 0===d&&0<c.childNodes.length)return!1;c=new e.dom.TreeWalker(d,
b);do d=c.prev(!0);while(d&&3===d.nodeType&&0===d.nodeValue.length);return void 0===d},isCursorAtEndOf:function(b,a){return a.collapsed&&f.isRangeAtEndOf(b,a)},isRangeAtEndOf:function(b,a){if(!a||!a.endContainer)throw Error("range is invalid. received: "+a);if(!b||!b.nodeType)throw Error("container is invalid. received: "+b);var c=a.endContainer;if(3===c.nodeType){if(a.endOffset!=c.nodeValue.length)return!1}else c=c.childNodes[0===a.endOffset?a.endOffset:a.endOffset-1];var c=new e.dom.TreeWalker(c,
b),d;do d=c.next(!0);while(d&&3===d.nodeType&&0===d.nodeValue.length);return void 0===d||"BR"===d.nodeName&&void 0===c.next(!0)},setCursorAtStartOfContents:function(b){if(!b)throw Error("element is required.");if(1!==b.nodeType&&3!==b.nodeType)throw Error("invalid argument: expected a DOM element or text node, got: "+b);var a=e.activeEditor,c=a.dom.createRng();g(b).is("br, img")?(c.setStartBefore(b),c.setEndBefore(b),a.selection.setRng(c)):(a.selection.select(b,!0),a.selection.collapse(!0))}};return f});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/utils/editor-utils","AJS.EditorUtils");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/table/atlassian-table.js' */
define("confluence-editor/tinymce3/plugins/table/atlassian-table",["jquery","ajs","tinymce"],function(g,h,l){function p(){return g("#table-highlight-group").attr("data-highlight-colour")||""}function q(c){var j,g,d,e;j=0;for(g=c.length;j<g;j++)if(d=c.eq(j),e=d.attr("data-highlight-colour"))d.removeClass("highlight-"+e),d.removeAttr("data-highlight-colour")}function n(c,j){if(c.length){var f=h.Rte.getEditor(),d;d=g(h.Rte.getEditor().selection.getNode());d=d.length?d[0]===c[0]?!0:!!d.closest(c).length:
!1;for(var e=c[0],k=e.ownerDocument.createElement(j),i=e.attributes,m=0,l=i.length;m<l;m++){var a=i[m];k.setAttribute(a.nodeName,a.nodeValue)}for(;e.hasChildNodes();)k.appendChild(e.firstChild);e.parentNode.replaceChild(k,e);d&&(f.selection.select(k,!0),f.selection.collapse());return g(k)}}function o(){g(h.Rte.getEditor().getDoc().body).find(".confluenceTd.numberingColumn").attr("contenteditable","false")}var i={convertToNormalCells:function(c){c.filter("th").each(function(){var c=g(this),c=n(c,"td");
c.removeClass("confluenceTh");c.addClass("confluenceTd")})},convertToHeadingCells:function(c){c.filter("td").each(function(){var c=g(this),c=n(c,"th");c.removeClass("confluenceTd");c.addClass("confluenceTh")})},areCellsHeadings:function(c){var g=c.filter("th").length;return c.length===g},isColumnHeading:function(c,j){var f=g(c).children("tbody").children("tr");return 1===f.length?!1:f.children().nthCol(j).filter("th").length===f.length},areCellsHighlighted:function(c){var g=c.filter("td[data-highlight-colour],th[data-highlight-colour]");
if(c=c.length===g.length)a:{var c=p(),f,d,e;f=0;for(d=g.length;f<d;f++)if(e=g.eq(f).attr("data-highlight-colour")||"",e!==c){c=!1;break a}c=!0}return c},isColumnHighlighted:function(c,h){var f=g(c).children("tbody").children("tr").children("th,td").nthCol(h),d=f.filter("td[data-highlight-colour],th[data-highlight-colour]").length;if(f.length!==d)return!1;for(var d=f.eq(0).attr("data-highlight-colour"),e=1,i=f.length;e<i;e++)if(d!==f.eq(e).attr("data-highlight-colour"))return!1;return!0}};h.bind("init.rte",
function(c,j){function f(){var a=e.selection.getNode();return g(a).parents("table").is(".confluenceTable")?!e.dom.getParent(a,"UL,OL"):!1}var d,e=j.editor,k=function(a){return g(a.selection.getNode()).closest("th.confluenceTh,td.confluenceTd")},n=function(a){var b=g(a.getBody()).find("th.confluenceTh.mceSelected,td.confluenceTd.mceSelected");return b.length?b:k(a)},m=function(a){return 0===a.find("tbody > tr > td").length};e.addCommand("mceInsertTable",function(){h.Rte.BookmarkManager.storeBookmark();
if(!d){d=new h.Dialog({width:400,height:230,id:"insert-table-dialog",keypressListener:function(b){27===b.keyCode&&d.hide()}});d.addHeader("Insert Table");d.addPanel("Panel 1","panel1");d.getCurrentPanel().html(h.renderTemplate("tableForm","4","3"));g("#tinymce-table-form input[type='text']").click(function(){g(this).select()});var a=function(b){b.hide();e.plugins.table.insertTable()};g("#tinymce-table-form").keypress(function(b){13===b.keyCode&&a(d)});d.addButton("Insert",a,"ok");d.addCancel("Cancel",
function(b){b.hide();return!1},"cancel")}d.show()});e.addCommand("confTableRowToggleHeading",function(){var a;a=g(this.getBody()).find("td.mceSelected,th.mceSelected");a.length||(a=g(this.selection.getNode()));a=a.closest("tr");for(var b=a.parent(),b=b.is("tbody")?a.parent().parent():b;0!==a.length&&!b.is(".confluenceTable");)a=b.closest("tr"),b=a.parent(),b=b.is("tbody")?a.parent().parent():b;var b=a.children("td,th"),c=0;i.areCellsHeadings(b)?(m(a.closest("table"))||(b=b.filter(function(){var b=
g(this),a=b.closest("table");c+=b.attr("colspan")||1;return!i.isColumnHeading(a,c)})),i.convertToNormalCells(b)):i.convertToHeadingCells(b)});e.addCommand("confTableColumnToggleHeading",function(){var a;a=n(this);var b=g([]);a.each(function(){var a=g(this),c=a.index()+1,a=a.closest("table.confluenceTable").children("tbody").children("tr");b=b.add(a.children().nthCol(c))});a=b;i.areCellsHeadings(a)?(m(a.closest("table"))||(a=a.filter(function(){var a=g(this).parent("tr").children(),b=a.filter("th");
return a.length!==b.length})),i.convertToNormalCells(a)):i.convertToHeadingCells(a)});e.addCommand("confTableSelectionToggleHighlight",function(a,b){var c=b&&b.alwaysHighlight,e=n(this);e.filter("td");e.filter("th");i.areCellsHighlighted(e)&&!c||g("#table-highlight-group").attr("data-remove-highlight")?q(e):(q(e),p()&&(c=p(),e.attr("data-highlight-colour",c),e.addClass("highlight-"+c)))});(l.isIE8||h.DarkFeatures.isEnabled("confluence-table-enhancements.auto-row"))&&e.onKeyDown.add(function(a,b){function c(a,
b){var d=e.selection.getRng(!0),g=d.startContainer;if(d.collapsed){var f;a:{for(f=g;f!=a;){if(f[b]){f=!1;break a}f=f.parentNode}f=!0}return 3===g.nodeType?f&&d.startOffset==("nextSibling"==b?g.length:0):g==a?d.startOffset==("nextSibling"==b?g.childNodes.length-1:0):f}return!1}if((37===b.keyCode||39===b.keyCode)&&!b.shiftKey){var d=k(this);if(d.length){var d=d[0],f;if(f=37===b.keyCode)if(f=c(d,"previousSibling"))f=e.selection.getNode(),f=g(f).parents("table").first().find("tr:first-child").children().first()[0]!=
f;if(f)return e.execCommand("mceTableMoveCaretToPrevCell"),l.dom.Event.cancel(b);if(f=39===b.keyCode){if(d=c(d,"nextSibling"))d=e.selection.getNode(),d=g(d).parents("table").first().find("tr:last-child").children().last()[0]!=d;f=d}if(f)return e.execCommand("mceTableMoveCaretToNextCell"),l.dom.Event.cancel(b)}}});if(l.isWebKit){var o=g('<style type="text/css"></style>').html(".confluenceTable th,td { white-space: pre-wrap; }");g(e.getDoc().head).append(o)}e.onKeyDown.add(function(a,b){if(9===b.keyCode&&
f())return e.execCommand(b.shiftKey?"mceTableMoveCaretToPrevCell":"mceTableMoveCaretToNextCell"),b.preventDefault(),!1});h.DarkFeatures.isEnabled("confluence-table-enhancements.auto-row")&&(e.onClick.add(function(){var a=k(this);a.hasClass("numberingColumn")&&!a.hasClass("confluenceTh")&&e.execCommand("mceTableMoveCaretToNextCell")}),e.onKeyDown.addToTop(function(a,b){if((38===b.keyCode||40===b.keyCode)&&f()&&k(this).hasClass("numberingColumn"))return e.execCommand("mceTableMoveCaretToNextCell"),
b.preventDefault(),!1}))});h.DarkFeatures.isEnabled("confluence-table-enhancements.auto-row")&&(h.bind("quickedit.success",o),h.bind("init.rte",o));return i});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/tinymce3/plugins/table/atlassian-table","AJS.Rte.Table");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/table/atlassian-table-picker.js' */
define("confluence-editor/tinymce3/plugins/table/atlassian-table-picker",["ajs","tinymce","jquery","document"],function(c,E,g,O){function F(){e.css({top:g("#insert-table-dropdown").outerHeight(!0)});F=function(){}}function j(){if(!e.hasClass("hidden")){var a=g(c.Rte.getEditor().getDoc());k.unbind(".atlassian-table-picker");a.unbind(".atlassian-table-picker");e.addClass("hidden");q.addClass("hidden");y.removeClass("active")}}function G(a,b){c.debugEnabled()&&c.debug("setSize("+[a,b]+")");a==f&&b==
r||(a=Math.max(1,Math.min(H,a)),b=Math.max(1,Math.min(I,b)),n=Math.max(P,a),s=Math.max(Q,b),f=a,r=b,t.width(n*l+1),t.height(s*m+R),u(o,n,s),u(z,f,r),u(A,n,1),u(v,f,1),J(),K.text(f+" x "+r))}function J(){A.toggleClass("hidden",!h);v.toggleClass("hidden",!h)}function u(a,b,c){a.width(l*b+1);a.height(m*c+1)}function S(a){var b=o.offset(),d=b.top-k.scrollTop(),g=b.left-k.scrollLeft(),b=d+o.outerHeight(!0)+w,e=b-m-w,h=g+o.outerWidth(!0)+w,j=h-l-w,f=a.clientY,i=a.clientX,a=n,p=s;c.debugEnabled()&&c.debug("[mouseX,spLeft,spRightShrink,spRightGrow][mouseY,spTop,spBottomShrink,spBottomGrow] = "+
[i,g,j,h]+"/"+[f,d,e,b]);i>h?(d=~~((i-h)/l+1),a+=d,c.debugEnabled()&&c.debug("grow: xdelta = "+d)):i<j&&(d=~~((i-j)/l-1),a+=d,c.debugEnabled()&&c.debug("shrink: xdelta = "+d));f>b?(d=~~((f-b)/m+1),p+=d,c.debugEnabled()&&c.debug("grow: ydelta = "+d)):f<e&&(d=~~((f-e)/m-1),p+=d,c.debugEnabled()&&c.debug("shrink: ydelta = "+d));G(a,p)}function L(a){c.debugEnabled()&&c.debug("enableHeading("+a+")");a!=h&&(h=a,J())}function B(a){var b;b=~~(~~(a.offsetX||a.originalEvent.layerX)/l)+1;var d=~~(~~(a.offsetY||
a.originalEvent.layerY)/m)+1;b=1>b||b>H||1>d||d>I?null:{width:b,height:d};a.preventDefault();c.debug("insertTable: size = "+(b&&[b.width,b.height]));if(b){j();a=b.width;d=b.height;b=h;var e,f;c.debugEnabled()&&c.debug("shamefulInsertTable("+a+","+d+","+b+")");e=g("#tinymce-table-form");e.length?(e.find('input[name="rows"]').val(d),e.find('input[name="cols"]').val(a)):(a=c.renderTemplate("tableForm",d,a),f=g("<div></div>").addClass("hidden"),f.append(a),M.append(f));g("#table-heading-checkbox").prop("checked",
b);c.Rte.BookmarkManager.restoreBookmark();E.activeEditor.undoManager.beforeChange();E.activeEditor.plugins.table.insertTable();f&&f.remove()}}function x(a){c.debugEnabled()&&c.debug("key: "+a.charCode+"/"+a.keyCode+"/"+a.shiftKey);c.debug("key: "+a.charCode+"/"+a.keyCode+"/"+a.shiftKey);g.browser.msie?(16===a.keyCode&&L(!a.shiftKey),27===a.keyCode&&j()):(0===a.charCode&&L(!a.shiftKey),27===a.keyCode&&0===a.charCode&&j())}function T(){j()}var N={},k,M,q,i,C,y,e,t,o,A,z,v,K,P=4,Q=4,H=15,I=20,l=25,
m=17,R=20,w=0,n,s,f,r,h,D=!1;N.insertTable=B;return{bindToControl:function(){c.debugEnabled()&&c.debug("Table Picker - bind to control");k=g(O);M=k.find("body");i=g("#insert-table-dropdown");C=g("#rte-button-insert-table");y=i.find(".aui-dd-parent");e=g("#table-picker-container");t=e.find(".table-picker-box");o=e.find(".picker-cell");A=e.find(".picker-heading");z=e.find(".picker-selected-cell");v=e.find(".picker-selected-heading");K=t.find(".desc");q=g("<div></div>").attr("id","table-picker-backdrop").addClass("hidden").appendTo(i);
C.click(function(a){a.preventDefault();D||(c.Rte.BookmarkManager.storeBookmark(),F(),h=!0,G(1,1),a=g(c.Rte.getEditor().getDoc()),k.bind("mousemove.atlassian-table-picker",S),k.bind("keydown.atlassian-table-picker",x),k.bind("keyup.atlassian-table-picker",x),a.bind("keydown.atlassian-table-picker",x),a.bind("keyup.atlassian-table-picker",x),q.removeClass("hidden"),e.removeClass("hidden"),y.addClass("active"),C.focus())});q.click(T);z.click(B);v.click(B)},disable:function(){D=!0;i.addClass("disabled")},
enable:function(){D=!1;i.removeClass("disabled")},close:j,_internal:N}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/tinymce3/plugins/table/atlassian-table-picker","AJS.Rte.TablePicker");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/table/atlassian-table-migration.js' */
define("confluence-editor/tinymce3/plugins/table/atlassian-table-migration",["ajs","jquery","confluence-editor/tinymce3/plugins/table/atlassian-table"],function(b,f,g){return function(d){var d=d||f(b.Rte.getEditor().getBody()),h=(new Date).getTime(),e=d.find("td.highlight,th.nohighlight,td[data-highlight-class],th[data-highlight-class]"),d=(new Date).getTime();e.each(function(){var a=f(this),b=a.attr("data-highlight-class"),c;if(a.hasClass("nohighlight"))a.removeClass("nohighlight"),g.convertToNormalCells(a);
else if(a.hasClass("highlight")&&(a.removeClass("highlight"),b||(a.attr("data-highlight-colour","grey"),a.addClass("highlight-grey"))),b){a.removeClass(b);a.removeAttr("data-highlight-class");switch(b){case "warning":c="red";break;case "success":c="green";break;case "note":c="yellow";break;case "info":c="blue"}c&&(a.addClass("highlight-"+c),a.attr("data-highlight-colour",c))}});e=(new Date).getTime();b.debug("Migration duration: selector: "+(d-h)+"ms; migration: "+(e-d)+"ms")}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/tinymce3/plugins/table/atlassian-table-migration","AJS.Rte.Migration.Table.migrateTables",function(){var b=require("ajs");require("jquery")(document).bind("postPaste",function(){b.Rte.Migration.Table.migrateTables()});b.bind("init.rte",function(){b.Rte.Migration.Table.migrateTables()})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/placeholder/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/placeholder/editor_plugin_src",["jquery","ajs","tinymce"],function(f,d,i){var p={click:!1,keypress:!0},g=i.VK,j=i.dom.Event,q="template"===d.Meta.get("content-type"),m={UL:!0,OL:!0,LI:!0,TABLE:!0,TBODY:!0};return{init:function(k){k.onInit.add(function(){if(q)d.trigger("cursor-target-refresh"),f("#rte-button-insert-placeholder").click(function(b){b.preventDefault();d.Rte.Placeholder.insertTextPlaceHolder()}),k.onKeyPress.addToTop(function(b,c){if(13===c.keyCode&&
!c.shiftKey){var a=b.selection.getNode(),e=f(a).closest(".text-placeholder");if(e.length&&d.Rte.Cursor.isCursorAtEnd(b,b.selection.getRng(),a))return d.Rte.Cursor.insertParagraph(b,e,!0),i.dom.Event.cancel(c)}});else{var r=function(){var b=f(d.Rte.getEditor().getBody()).find(".text-placeholder.selected");b.length&&d.Rte.getEditor().selection.select(b[0])},l=function(b){b.onKeyDown.remove(n);b.onKeyPress.remove(h);b.onClick.remove(h)},n=function(b,c){var a=f(b.getBody()).find(".text-placeholder.selected");
if(a.length){if(c.keyCode===g.LEFT||c.keyCode===g.UP){for(var a=a[0],e=a.previousSibling;a&&!e;)a=a.parentNode,e=a.previousSibling;if(e){for(a=e;m[a.nodeName]&&a.lastChild;)a=a.lastChild;b.selection.select(a.lastChild||a);b.selection.collapse(!1);b.selection.normalize()}return j.cancel(c)}if(c.keyCode===g.RIGHT||c.keyCode===g.DOWN){a=a[0];for(e=a.nextSibling;a&&!e;)a=a.parentNode,e=a.nextSibling;if(e){for(a=e;m[a.nodeName]&&a.firstChild;)a=a.firstChild;b.selection.select(a.firstChild||a);b.selection.collapse(!0);
b.selection.normalize()}return j.cancel(c)}if(c.keyCode===g.BACKSPACE||c.keyCode===g.DELETE)return d.Rte.Placeholder.removePlaceholder(a),j.cancel(c)}else l(b)},h=function(b,c){if(!i.isGecko||c.isChar||"keypress"!==c.type){var a=f(b.getBody()).find(".text-placeholder.selected");if(a.length){if(a.length){var e=a.attr("data-placeholder-type"),g=c.type,h=d.Rte.Placeholder.getPlaceholderType(e);f.extend({},p,h&&h.activation)[g]&&(d.Rte.Placeholder.removePlaceholder(a),d.trigger("editor.text-placeholder.activated",
{placeholderType:e||"",triggerEvent:c}))}}else l(b)}};k.onNodeChange.addToTop(function(b,c,a){c=f(a).closest(".text-placeholder");f(b.getBody()).find(".text-placeholder.selected").not(c).removeClass("selected");c.length?(c.hasClass("selected")||(c.addClass("selected"),b.onKeyDown.addToTop(n),b.onKeyPress.addToTop(h),b.onClick.addToTop(h)),setTimeout(r,0)):l(b)})}var o=f(d.Rte.getEditor().getDoc()).find("head");f.browser.msie?o.append('<style type="text/css">.wiki-content .text-placeholder { display: inline; }</style>'):
o.append('<style type="text/css">.wiki-content .text-placeholder { display: inline-block; }</style>')})},getInfo:function(){return{longname:"Text Placeholder Plugin",author:"Atlassian",authorurl:"http://www.atlassian.com",infourl:"http://www.atlassian.com",version:"1.0"}}}});
require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/placeholder/editor_plugin_src",function(f){var d=require("tinymce");d.create("tinymce.plugins.TextPlaceholderPlugin",f);d.PluginManager.add("textplaceholders",d.plugins.TextPlaceholderPlugin)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/placeholder/placeholder.js' */
define("confluence-editor/tinymce3/plugins/placeholder/placeholder",["jquery","ajs","tinymce"],function(e,b,f){var d=[],i={};b.Rte=b.Rte||{};b.Rte.Placeholder=b.Rte.Placeholder||{};var g,h;f.isIE?(g="\ufeff{$caret}",h="<p>{$caret}</p>"):h=g=f.isWebKit?"\ufeff{$caret}<br>":"\ufeff{$caret}";return{insertTextPlaceHolder:function(a){var c=e("<div></div>").append(b.Rte.Placeholder.Templates.textPlaceholder({content:g}));a&&c.find(".text-placeholder").html(a);b.Rte.getEditor().execCommand("mceInsertContent",
false,c.html())},removePlaceholder:function(a){var c=b.Rte.getEditor(),f=e(c.getBody()),d=g;a.parent()[0].nodeName==="LI"&&(d=h);a.replaceWith('<span id="placeholder-cursor">&nbsp;</span>');a=f.find("#placeholder-cursor")[0];c.selection.select(a.firstChild);c.execCommand("mceInsertContent",false,d);c.dom.remove(a,true)},addPlaceholderType:function(a){if(!a||!a.type)b.log("PlaceHolderRegister : unable to register new place holder type !");else{d.push(a);i[a.type]=a}},getPlaceholderTypes:function(){return[].concat(d)},
getPlaceholderType:function(a){return i[a]}}});require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/placeholder/placeholder",function(e){require("jquery").extend(require("ajs").Rte.Placeholder,e)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/placeholder/property-panel-text-placeholders.js' */
define("confluence-editor/tinymce3/plugins/placeholder/property-panel-text-placeholders",["jquery","ajs","confluence/property-panel"],function(e,a,h){return{name:"textplaceholder",canHandleElement:function(a){return a.hasClass("text-placeholder")},handle:function(b){function i(a,b,c){return{className:"text-placeholder-property-panel-type-item text-placeholder-property-panel-type-"+a,text:b,tooltip:c,selected:j===a,click:function(){"default"===a?f.removeAttr("data-placeholder-type"):f.attr("data-placeholder-type",
a);var b=e(".text-placeholder-property-panel-type-"+a);b.parent().find(".text-placeholder-property-panel-type-item").removeClass("selected");b.addClass("selected")}}}if(!("click"!==b.e.type&&"mouseup"!==b.e.type)){var k=a.Rte.Placeholder.getPlaceholderTypes(),b=b.containerEl,f=e(b),j=f.attr("data-placeholder-type"),d=[],c=i("default","Text","Instructional text is replaced with empty content when a person types.");c.selected=!j;d.push(c);for(var g=
0,l=k.length;g<l;g++)c=k[g],d.push(i(c.type,c.label,c.tooltip));d.push(null);d.push({className:"text-placeholder-property-panel-remove-button",text:"Remove",click:function(){h.destroy();a.Rte.Placeholder.removePlaceholder(f)}});h.createFromButtonModel("textplaceholder",b,d,{anchorIframe:a.Rte.getEditorFrame()})}}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/tinymce3/plugins/placeholder/property-panel-text-placeholders","AJS.Confluence.PropertyPanel.TextPlaceholder",function(e){var a=require("ajs");a.bind("init.rte",function(){"template"===a.Meta.get("content-type")&&a.trigger("add-handler.property-panel",e)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/placeholder/placeholder.soy' */
// This file was automatically generated from placeholder.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace AJS.Rte.Placeholder.Templates.
 */

if (typeof AJS == 'undefined') { var AJS = {}; }
if (typeof AJS.Rte == 'undefined') { AJS.Rte = {}; }
if (typeof AJS.Rte.Placeholder == 'undefined') { AJS.Rte.Placeholder = {}; }
if (typeof AJS.Rte.Placeholder.Templates == 'undefined') { AJS.Rte.Placeholder.Templates = {}; }


AJS.Rte.Placeholder.Templates.textPlaceholder = function(opt_data, opt_ignored) {
  return '<span class="text-placeholder">' + opt_data.content + '</span>';
};
if (goog.DEBUG) {
  AJS.Rte.Placeholder.Templates.textPlaceholder.soyTemplateName = 'AJS.Rte.Placeholder.Templates.textPlaceholder';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/plugins/imageproperties/js/image-properties-dialog.js' */
define("confluence-editor/tinymce3/plugins/imageproperties/js/image-properties-dialog",["jquery","ajs"],function(d,a){function l(){h||(h=d("#image-properties-tab-items > div").map(function(){var a=d(this);return{key:a.text(),weight:a.attr("data-weight"),label:this.title}}).sort(function(a,b){return a.weight-b.weight}));return h}function m(){var a=c.popup.element,b=650/60,e=d('<div class="image-properties-loading-blanket"><div class="loading-data"></div></div>').appendTo(a.find(".dialog-page-body")),
f=e.find(".loading-data");e.css({width:e.parent().width(),height:a.height()});f.css({marginTop:-60,marginLeft:-60});f.spin({color:"#666",width:b,radius:25,length:25,top:0,left:0,zIndex:0,speed:1.042});var a=[],g;for(g in i)b=i[g],(b=b.saveFn&&b.saveFn())&&b.done&&a.push(b);d.when.apply(d,a).done(function(){var a=c.popup.element.find(".image-properties-loading-blanket .loading-data");a.css({marginTop:"",marginLeft:""});a.spinStop();a.closest(".image-properties-loading-blanket").remove();c.hide().remove()})}
function o(){c.hide().remove()}var c,h,i={},n;return{init:function(){n||(h=null,0<l().length&&(n=!0,a.Confluence.PropertyPanel.Image.pluginButtons.push(null,{create:function(){return{className:"image-properties",text:"Properties",tooltip:"Set additional image properties",click:function(h,b){a.trigger("analyticsEvent",{name:"confluence.editor.image-properties-trigger"});a.Confluence.PropertyPanel.destroy();d("#image-properties-dialog").remove();c=new a.ConfluenceDialog({id:"image-properties-dialog",
onSubmit:m});a.trigger("dialog-created.image-properties",{img:b});c.popup.element.attr("data-tab-default","0");c.addHeader("Image Properties");c.addSubmit("Save",m);c.addCancel("Cancel",o);for(var e=c,f=l(),g=0;g<f.length;g++){var j=f[g],k=i[j.key];k&&e.addPanel(j.label,k.content,k.panelClass,j.key)}1===f.length&&e.popup.element.find(".dialog-page-menu").show();a.trigger("dialog-before-show.image-properties");
c.show()}}}})))},registerPanel:function(a,b,c,d){i[a]={content:b,panelClass:c,saveFn:d}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/tinymce3/plugins/imageproperties/js/image-properties-dialog","Confluence.Editor.ImageProps",function(d){var a=require("ajs");a.toInit(d.init);a.bind("quickedit.success",d.init)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'unpublished-changes/unpublished-changes.soy' */
// This file was automatically generated from unpublished-changes.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.UnpublishedChanges.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.UnpublishedChanges == 'undefined') { Confluence.Templates.UnpublishedChanges = {}; }


Confluence.Templates.UnpublishedChanges.lozenge = function(opt_data, opt_ignored) {
  return '<a id="unpublished-changes-lozenge" href="#" class="view-diff-link" title="' + soy.$$escapeHtml(opt_data.tooltip) + '"><span class="aui-lozenge aui-lozenge-complete aui-lozenge-subtle unpublished-changes-lozenge">' + soy.$$escapeHtml(opt_data.label) + '</span></a>';
};
if (goog.DEBUG) {
  Confluence.Templates.UnpublishedChanges.lozenge.soyTemplateName = 'Confluence.Templates.UnpublishedChanges.lozenge';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'unpublished-changes/unpublished-changes.js' */
define("confluence-editor/unpublished-changes/unpublished-changes",["jquery","confluence/legacy","ajs","underscore","tinymce"],function(c,a,g,i,h){return{init:function(e){var f=c(a.Templates.UnpublishedChanges.lozenge({tooltip:"This page has unpublished changes",label:"Unpublished"})),h=function(d){d=i.isBoolean(d)?d:!0;a.Editor.UI.setButtonState(d,c("#rte-button-publish"))},j=function(d,b){var a=b||function(){};(i.isBoolean(d)?
d:1)?f.addClass("visible").fadeIn("fast",a):f.fadeOut("fast",function(){c(this).hide().removeClass("visible");a()})},b={show:function(){f.hasClass("visible")||j(!0,h)},hide:function(){j(!1);h(!1)}};g.bind("rte-ready",function(){var a=c("#content-title-div");b.hide();f.insertBefore(a);f.tooltip();c("#content-title").on("keydown change",b.show);e.onChange.add(b.show);e.onKeyDown.add(b.show);e.onLoad.add(function(){c(e.startContent).text().trim()&&0<g.Meta.get("draft-id")&&b.show()});f.on("mouseenter.tipsy",
function(){g.trigger("analytics",{name:"confluence.editor.unpublished-changes.lozenge.hover"})});e.addCommand("mceConf.UnpublishedChangesLozenge.show",b.show);e.addCommand("mceConf.UnpublishedChangesLozenge.hide",b.hide)})},getInfo:function(){return{longname:"Unpublished Changes",author:"Atlassian",authorurl:"http://www.atlassian.com",version:h.majorVersion+"."+h.minorVersion}}}});
require("confluence/module-exporter").safeRequire("confluence-editor/unpublished-changes/unpublished-changes",function(c){var a=require("tinymce");a.create("tinymce.plugins.UnpublishedChanges",c);a.PluginManager.add("unpublishedchanges",a.plugins.UnpublishedChanges)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'tinymce3/settings/tinymce-default-settings.js' */
define("confluence-editor/tinymce3/settings/tinymce-default-settings",[],function(){});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'loader/tinymce-adapter.js' */
define("confluence-editor/loader/tinymce-adapter",["ajs","confluence/legacy","jquery"],function(a,e,f){return function(){var b;b=a.contextPath();b={autoresize_min_height:"100%",width:"100%",height:"100%",document_base_url:e.getBaseUrl()+"/",plugins:"auiwindowmanager,table,emotions,confluence,macroplaceholder,customtoolbar,insertwikimarkup,propertypanel,keyboardshortcuts,confmonospace,confcharmap,lists,aePaste,cursorTarget,confluencecleanupplugin,conftable,confluencepastetableplugin,confluencepastemacroplugin,pagelayoutplugin,highlightnode,iosediting,autoconvert,confluencelist,deletecommand,draggable,confluencesortabletablesplugin,textplaceholders,linkbrowser,insertfiles",
theme:"atlassian",theme_advanced_buttons1:"formatselect,bold,italic,underline,strikethrough,forecolor,separator,table,row_before,row_after,delete_row,col_before,col_after,delete_col,delete_table,separator,bullist,numlist,tasklist,outdent,indent,blockquote,justifyleft,justifycenter,justifyright,justifyfull,separator,sup,sub,separator,undo,redo,separator,confimage,conf_macro_browser,separator,code,customtoolbar,help,monospace,separator,searchreplace,linkbrowserButton",theme_advanced_toolbar_location:"top",
theme_advanced_toolbar_align:"left",theme_advanced_resizing:!1,theme_advanced_resize_horizontal:!1,theme_advanced_statusbar_location:"none",theme_advanced_path:!1,theme_advanced_blockformats:"p,h1,h2,h3,h4,h5,h6,pre,blockquote",mode:"specific_textareas",editor_selector:"tinymce-editor",body_class:"wiki-content",popup_css:!1,content_css:!1,editor_css:!1,custom_undo_redo:!0,custom_undo_redo_levels:20,context_path:b,plugin_action_base_path:b+"/plugins/tinymce",editor_plugin_action_base_path:b+"/plugins/editor/tinymce",
page_id:a.Meta.get("page-id"),draft_type:null,form_name:a.Meta.get("form-name"),space_key:encodeURI(a.Meta.get("space-key")),confluence_popup_width:620,confluence_popup_height:550,editor_id:"wysiwygTextarea"};0==b.page_id&&(b.page_id=null,b.draft_type=a.Meta.get("draft-type"));a.Rte.BootstrapManager.addBeforeInitCallback(function(b){b.contentCssTags=f("script[title='editor-css']").html();b.language=a.Meta.get("action-locale");var c=a.Meta.get("min-editor-height");if(c)b.autoresize_min_height=c});
var c=!(a.Meta.get("remote-user")&&a.Meta.get("confluence.prefs.editor.disable.autocomplete"));c&&(b.plugins+=",autocomplete,autocompletelink,autocompletemedia");if(a.Meta.get("auto-start")){c&&(b.plugins+=",autocompletemacro");c="0"===""+a.Meta.get("page-id");var d=a.Meta.get("content-type"),c="template"===d?a.Confluence.Editor._Profiles.createProfileForTemplateEditor():"comment"===d?a.Confluence.Editor._Profiles.createProfileForCommentEditor():a.Confluence.Editor._Profiles.createProfileForPageEditor({versionComment:!c,
notifyWatchers:!c});if(c=c.plugins.join(","))b.plugins+=","+c;a.Rte.BootstrapManager.preInitialise(b);a.Rte.BootstrapManager.initialise()}else a.Rte.BootstrapManager.preInitialise(b)}});require("confluence/module-exporter").safeRequire("confluence-editor/loader/tinymce-adapter",function(a){require("ajs").toInit(a)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'com/atlassian/confluence/tinymceplugin/tinymce-adapter-deprecated.js' */
define("confluence-editor/tinymceplugin/tinymce-adapter-deprecated",["tinymce","ajs","confluence/legacy","jquery"],function(e,a,g,h){return{putCursorAtPostionInElement:function(b,a,c){var d=e.activeEditor,i=d.getDoc(),b=h(b,c||i),b=b.contents().filter(function(){return 3===this.nodeType})[0],c=d.selection.getRng(!0);c.setStart(b,a);c.setEnd(b,a);d.selection.setRng(c)},storeCurrentSelectionState:a.Rte.BookmarkManager.storeBookmark,restoreSelectionState:a.Rte.BookmarkManager.restoreBookmark,insertLink:function(b,
f){f&&a.Rte.getEditor().selection.select(f);g.Editor.LinkAdapter.setLink(b)},getCurrentBaseUrl:a.Rte.getCurrentBaseUrl,addOnInitCallback:function(b){a.debug("Adding callback to AJS.Rte.BootstrapManager. AJS.Rte.BootstrapManager = "+a.Rte.BootstrapManager);a.Rte.BootstrapManager.addOnInitCallback(b)},bindScroll:function(b,f){a.Rte.bindScroll(b,f)},unbindScroll:function(b){a.Rte.unbindScroll(b)},getTinyMceHasInit:function(){return a.Rte.BootstrapManager.isInitComplete()},getEditor:a.Rte.getEditor,addTinyMcePluginInit:function(b){a.Rte.BootstrapManager.addTinyMcePluginInit(b)},
isExternalLink:function(a){return g.Link.isExternalLink(a)},isInMacroPlaceholder:function(a){return e.confluence.MacroUtils.isInMacro(a)},initialiseTinyMce:function(){var b=a.Editor.Adapter;e.EditorManager.preInit.apply(e.EditorManager);e.EditorManager.init(b.settings)},offset:function(b){a.Rte.Content.offset(b)},getSelectedText:function(){return a.Rte.Content.getSelectedText()},setEditorValue:function(b){a.Rte.Content.setHtml(b)},getEditorHTML:function(){return""+a.Rte.getEditor.getContent()},editorHasContentChanged:function(){return a.Rte.getEditor().isDirty()},
editorResetContentChanged:function(){a.Rte.getEditor().setDirty(!1)},getChildIndex:function(a,f){for(var c=a.childNodes,d=0,e=c.length;d<e;d++)if(c[d]==f)return d;return-1},getMainEditor:function(){return a.Rte.getMainEditor()},getEditorContainer:function(){return a.Rte.getEditorContainer()},getEditorFrame:function(){return a.Rte.getEditorFrame()},getEditorTable:function(){return a.Rte.getEditorTable()},webResourcePath:a.Rte.webResourcePath,getResourceUrlPrefix:function(){return a.Rte.getResourceUrlPrefix()},
getTinyMceBaseUrl:function(){return a.Rte.getTinyMceBaseUrl()},getMinEditorHeight:function(){return a.Rte.getMinEditorHeight()},getTinyMceEditorMinHeight:function(b){return a.Rte.getTinyMceEditorMinHeight(b)}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/tinymceplugin/tinymce-adapter-deprecated","AJS.Editor.Adapter");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.editor:editor-javascript-resources', location = 'analytics/editor-analytics.js' */
define("confluence-editor/analytics/editor-analytics",["ajs","jquery","window"],function(d,k,l){function e(a,i){if(a&&(c[a]?c[a]++:c[a]=1,i)){var b=a+"Size";c[b]=c[b]?c[b]+i:i}}function g(){c.pageID=d.Meta.get("page-id");d.Confluence.Analytics.publish("confluence.editor.action",c);c={};clearTimeout(f);f=setTimeout(g,j)}var j=6E4,f,c={},h=0,m={Bold:"bold",confCharmap:"insert.symbol",confMonospace:"monospace",confTableRowToggleHeading:"table.row.toggle.heading",confTableColumnToggleHeading:"table.column.toggle.heading",
confTableSelectionToggleHighlight:"table.selection.toggle.highlight",ForeColor:"foreground.color",FormatBlock:"format.block",Indent:"indent",InsertHorizontalRule:"insert.horizontal.rule",InsertOrderedList:"insert.ordered.list",InsertUnorderedList:"insert.unordered.list",InsertWikiMarkup:"insert.wiki.markup",Italic:"italic",JustifyCenter:"justify.center",JustifyLeft:"justify.left",JustifyRight:"justify.right",mceConfimage:"insert.files.images",mceConflink:"insert.link",mceConfMacroBrowser:"open.other.macros.browser",
mceEmotion:"insert.emoticon",mceTableCopyRow:"table.copy.row",mceTableCutRow:"table.cut.row",mceTableDelete:"table.delete",mceTableDeleteCol:"table.delete.column",mceTableDeleteRow:"table.delete.row",mceTableInsertColAfter:"table.insert.column.after",mceTableInsertColBefore:"table.insert.column.before",mceTableInsertRowAfter:"table.insert.row.after",mceTableInsertRowBefore:"table.insert.row.before",mceTableMergeCells:"table.merge.cells",mceTablePasteRowBefore:"table.paste.row.before",mceTableSplitCells:"table.split.cells",
mcePageLayoutsToolbar:"page.layouts.toolbar.toggle",mcePageLayoutAddSection:"page.layouts.toolbar.add.section",mcePageLayoutRemoveSection:"page.layouts.toolbar.remove.section",mcePageLayoutMoveSectionDown:"page.layouts.toolbar.movedown.section",mcePageLayoutMoveSectionUp:"page.layouts.toolbar.moveup.section",mcePageLayoutChangeSection:"page.layouts.toolbar.change.section",mceConfShortcutDialog:"open.help.dialog",mceSearchReplaceToolbar:"search.replace.toolbar.toggle",mceConfSearchClose:"search.replace.toolbar.close",
mceConfSearch:"search",mceConfReplace:"replace",mceConfReplaceAll:"replace.all",Outdent:"outdent",Redo:"redo",Strikethrough:"strikethrough",subscript:"subscript",superscript:"superscript",Underline:"underline",Undo:"undo",InsertInlineTaskList:"insert.inline.tasklist",InsertInlineTaskListNoToggle:"insert.inline.tasklist.no.toggle"};return{bindAnalyticsToEditorCommands:function(){var a=require("tinymce");clearTimeout(f);f=setTimeout(g,j);a.activeEditor.onExecCommand.add(function(a,b){e(m[b])});a.activeEditor.onKeyPress.add(function(){e("keys")});
a.activeEditor.onKeyUp.add(function(a,b){46===b.keyCode?e("delete",h):8===b.keyCode&&e("backspace",h);h=a.selection.getContent().length});a.activeEditor.onMouseUp.add(function(a){h=a.selection.getContent().length});a.activeEditor.onPaste.add(function(a,b){e("paste",b.clipboardData.getData("text/plain").length)});a.activeEditor.onRemove.add(function(){g();clearTimeout(f)})},bindAnalyticsToIconClicks:function(){k("#rte-button-insert-table").on("click",function(){e("insert.table")})},bindAnalyticsPublishingToWindowUnload:function(){l.addEventListener("beforeunload",
function(){g()})}}});require("confluence/module-exporter").safeRequire("confluence-editor/analytics/editor-analytics",function(d){require("ajs").bind("rte-ready",function(){d.bindAnalyticsToEditorCommands();d.bindAnalyticsToIconClicks();d.bindAnalyticsPublishingToWindowUnload()})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
