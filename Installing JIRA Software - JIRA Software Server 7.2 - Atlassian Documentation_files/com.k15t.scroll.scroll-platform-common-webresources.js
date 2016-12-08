;try {
/* module-key = 'com.k15t.scroll.scroll-platform:common-webresources', location = '/com/k15t/scroll/platform/ui/page/context/context.js' */
(function(a){Scroll.Versions._=window._;if(Scroll.Versions._.findWhere===undefined){Scroll.Versions._.findWhere=function(c,b){return this.where(c,b,true)}}Scroll.Versions.getPageContext=function(){var b=AJS.$("#content.page");if(b.length){if(b.hasClass("view")){return"page"}else{if(b.hasClass("edit")){return"editor"}}}return undefined};Scroll.Versions.showMessages=function(){Scroll.Versions.Utils.showMessages()};Scroll.Versions.loadPageContextApp=function(){var b=a.Deferred();var c=window.Scroll.Versions.Context.SPARK.scopePageApp;if(c){c.$apply(function(){b.resolve(c)})}else{SPARK.appLoader.createDialog(a("body"),"sv-page-context-apps","/plugins/servlet/page-context/",function(d){c=d.element(a("#sv-page-context-apps")).scope();window.Scroll.Versions.Context.SPARK.scopePageApp=c;c.$apply(function(){b.resolve(c)})})}return b.promise()};AJS.toInit(function(){if(Scroll.Versions.Context===undefined){return}Scroll.Versions.Context.SPARK={};var b=[];var c=a("#editPageLink");if(AJS.Confluence.QuickEdit&&AJS.Confluence.QuickEdit.QuickEditPage){AJS.Confluence.QuickEdit.QuickEditPage.disable()}else{if(AJS.Confluence.QuickEdit&&!AJS.Confluence.QuickEdit.QuickEditPage){c.off()}}AJS.whenIType("e").followLink(c);var d=function(){return Scroll.Versions.Context.user.permissions.ManageContent&&Scroll.Versions.Context.user.settings.isShowArchivedVersions};window.Scroll.Versions.Context.space.getVersions=function(){if(d()){return Scroll.Versions.Context.space.allVersions}else{if(b.length==0){a.each(Scroll.Versions.Context.space.allVersions,function(f,e){if(!e.isArchived){b.push(e)}})}return b}};window.Scroll.Versions.Context.getFilteredBreadcrumbs=function(){if(!Scroll.Versions.Context.page.scrollBreadcrumbs){return[]}if(!Scroll.Versions.Context.space.theme.breadcrumbsTypeFilter){return Scroll.Versions.Context.page.scrollBreadcrumbs}var f=Scroll.Versions.Context.space.theme.breadcrumbsTypeFilter.split(" ");var e=Scroll.Versions.getPageContext();return Scroll.Versions.Context.page.scrollBreadcrumbs.filter(function(g){return((e?a.inArray(e+":"+g.type,f)==-1:true)&&a.inArray(g.type,f)==-1)})};window.Scroll.Versions.Context.getVariant=function(e){return window.Scroll.Versions._.find(Scroll.Versions.Context.space.allVariants,function(f){return(f.id===e)})}})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.k15t.scroll.scroll-platform:common-webresources', location = '/com/k15t/scroll/platform/ui/common/dialog.soy' */
// This file was automatically generated from dialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Scroll.Versions.Templates.Dialog.
 */

if (typeof Scroll == 'undefined') { var Scroll = {}; }
if (typeof Scroll.Versions == 'undefined') { Scroll.Versions = {}; }
if (typeof Scroll.Versions.Templates == 'undefined') { Scroll.Versions.Templates = {}; }
if (typeof Scroll.Versions.Templates.Dialog == 'undefined') { Scroll.Versions.Templates.Dialog = {}; }


Scroll.Versions.Templates.Dialog.userMessage = function(opt_data, opt_ignored) {
  return '<div class="aui-message closeable shadowed ' + soy.$$escapeHtml(opt_data.severity) + '">' + ((opt_data.title) ? '<p class="title"><span class="aui-icon icon-' + soy.$$escapeHtml(opt_data.severity) + '"></span>' + ((opt_data.autoEscape == false) ? '<strong>' + soy.$$filterNoAutoescape(opt_data.title) + '</strong>' : '<strong>' + soy.$$escapeHtml(opt_data.title) + '</strong>') + '</p>' : '') + ((opt_data.message) ? (opt_data.autoEscape == false) ? '<p>' + soy.$$filterNoAutoescape(opt_data.message) + '</p>' : '<p>' + soy.$$escapeHtml(opt_data.message) + '</p>' : '') + '</div>';
};
if (goog.DEBUG) {
  Scroll.Versions.Templates.Dialog.userMessage.soyTemplateName = 'Scroll.Versions.Templates.Dialog.userMessage';
}


Scroll.Versions.Templates.Dialog.logo = function(opt_data, opt_ignored) {
  return '<div id="sv-logo" class="sv-logo-table" ' + ((opt_data.customStyles) ? 'style="' + soy.$$escapeHtml(opt_data.customStyles) + '"' : '') + '><div class="sv-logo-cell-one"></div><div class="sv-logo-cell-two"></div><div class="sv-logo-cell-three"></div></div>';
};
if (goog.DEBUG) {
  Scroll.Versions.Templates.Dialog.logo.soyTemplateName = 'Scroll.Versions.Templates.Dialog.logo';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.k15t.scroll.scroll-platform:common-webresources', location = '/com/k15t/scroll/platform/ui/common/dialog.js' */
(function(a){window.Scroll=window.Scroll||{};window.Scroll=AJS.$.extend(true,window.Scroll,{Versions:{}});Scroll.Versions.Dialog=function(c){var e;var b;if(c.maximize===undefined){c.maximize=false}c.width=(c.maximize?(window.innerWidth-30):(c.width||800));c.height=(c.maximize?(window.innerHeight-80):(c.height||480));c.keypressListener=function(m){if(m.keyCode===27&&e.popup.element.is(":visible")){var g=e.popup.element;var l=parseInt(g.css("zIndex"),10);var f=a(".aui-dialog:visible");for(var j=0;j<f.size();++j){var h=f.eq(j);var k=parseInt(h.css("zIndex"),10);if(k>l&&!g.is(h)){return}}m.stopImmediatePropagation();e.hide()}};e=a.extend(new AJS.Dialog(c||{}),this);if(c.maximize){a(window).resize(function(){var g=e.popup.element;var j=(a(window).height()-80);var h=(a(window).width()-30);var f=-(a(window).height()-80)/2;var i=-(a(window).width()-30)/2;a(e.popup.element).css({height:j,width:h,"margin-top":f,"margin-left":i});a(g).find(".dialog-panel-body").height((a(window).height()-80)-106)})}e.showUserMessage=function(f,j,h,i){f=f.toLowerCase();i=i===null||i===undefined?true:i;AJS.log("[Scroll Versions] user message ("+f+"): "+h);var g=a(e.getCurrentPanel().body);if(!g.find(".user-feedback").length){g.prepend('<div class="user-feedback" />')}g.find(".user-feedback").html(Scroll.Versions.Templates.Dialog.userMessage({severity:f,message:h,title:j,autoEscape:i}))};e.showHtmlUserMessage=function(f,i,h){if(arguments.length>3){var j=Array.prototype.slice.call(arguments).slice(3);a(j).each(function(k,l){j[k]=AJS.escapeHtml(l)});i=AJS.format.apply(AJS,[i].concat(j));h=AJS.format.apply(AJS,[h].concat(j))}f=f.toLowerCase();AJS.log("[Scroll Versions] user message ("+f+"): "+h);var g=a(e.getCurrentPanel().body);if(!g.find(".user-feedback").length){g.prepend('<div class="user-feedback" />')}g.find(".user-feedback").html(Scroll.Versions.Templates.Dialog.userMessage({severity:f,message:h,title:i,autoEscape:false}))};e.hideUserMessages=function(){a(e.popup.element).find(".user-feedback").html("")};e.find=function(f){return a(e.popup.element).find(f)};e.onSuccess=function(h,k,i,f,g){e.enable();i.hide();if(f.urlPath){var j=contextPath+f.urlPath;e.showUserMessage(g,f.userMessageTitle,AJS.format(f.userMessageDetails,j));var l=setTimeout(function(){if(!e.opts.beforeRedirectCallback||e.opts.beforeRedirectCallback(e)){window.location.href=j}},e.opts.waitBeforeRedirect)}else{e.showUserMessage(g,f.userMessageTitle,AJS.format(f.userMessageDetails,j));var l=setTimeout(function(){e.cancel()},e.opts.waitBeforeRedirect)}};e.submit=function(h,k,g,f){var j=undefined;if(g&&g.length){j=g}if(!j){j=h.getCurrentPanel().body.find("form")}if(!j){AJS.log("[Scroll Versions] Form for dialog '"+e.opts.header+"' not found");return}var i=a(e.popup.element).find(".dialog-button-panel button");a.ajax({type:j.attr("method"),url:j.attr("action"),contentType:"application/x-www-form-urlencoded; charset=UTF-8",data:j.serialize(),timeout:e.opts.ajaxTimeout,beforeSend:function(m,l){e.disable();i.attr("disabled",true)},complete:function(m,o){j.find(".error").html("");var l;try{l=jQuery.parseJSON(m.responseText)}catch(n){e.enable();j.hide();AJS.log("[Scroll Versions] Could not parse response text: "+m.responseText);e.showUserMessage("error","Unknown Error","An unknown error has occurred while processing the server response. Please contact your administrator.");return}if(o==="success"&&m.status==200){e.opts.onSuccess(h,k,j,l,l.severity)}else{if(o==="error"&&m.status==400){e.enable();i.attr("disabled",false);e.hideUserMessages();a.each(l.fieldErrors,function(p,q){AJS.log("[Scroll Versions] Field Validation Error with '"+p+"': "+q);a(j.find("[name="+p+"] ~ .error")).html(q).show()});e.showUserMessage("error",l.title,l.message)}else{if(o==="error"&&(a.inArray(m.status,[403,404,409,500,503])!=-1)){e.enable();j.hide();e.showUserMessage("error",l.title,l.message,l.autoEscape)}else{e.showUserMessage("error","Unknown Error","An unknown error has occurred while processing the server response. Please contact your administrator.")}}}}})};e._fixBlankets=function(){this.$blanket=AJS("div").addClass("sv-dialog-blanket");this.$blanket.css("z-index",this.popup.element.css("z-index")-1).appendTo("body").show().click(function(){if(c.closeOnOutsideClick){e.close()}});AJS.dim.$dim.hide()};e.addClass=function(f){a(e.popup.element).addClass(f)};e.cancel=function(){e.hideUserMessages();a(e.popup.element).find("form.aui input, form.aui select").each(function(f){a(this).val(a(this).attr("data-original-value"))});a(e.popup.element).find("form.aui .error").html("");a(e.popup.element).find(".dialog-button-panel button").attr("disabled",false);a(e.popup.element).find("form").show();e.hide()};e._hide=e.hide;e.hide=function(){e.resetBodyCssSettings();e._hide();this.$blanket.remove()};e._remove=e.remove;e.remove=function(){e.resetBodyCssSettings();e._remove();this.$blanket.remove()};e._addCancel=e.addCancel;e.addCancel=function(f){e.addLink("Cancel",f||e.cancel)};e.addClose=function(f){e.addButton("Close",f||e.cancel)};e._addHeader=e.addHeader;e.addHeader=function(g,f){e._addHeader(g,f||"")};e.addNextPageButton=function(f){e.addButton(f||"Next",function(g){g.nextPage()})};e.resetBodyCssSettings=function(){a("body").css("position",b)};e._show=e.show;var d=false;b=a("body").css("position");e.show=function(){if(!d){a(e.popup.element).find("form.aui input, form.aui select").each(function(g){a(this).attr("data-original-value",a(this).val())});if(!c.suppressFormSubmit){e.find("form").bind("submit",function(g){g.preventDefault();e.submit(e,null,a(this))});a(e.popup.element).find("form input, form select").unbind("keypress.submit_on_enter").bind("keypress.submit_on_enter",function(g){if(g.keyCode==13){e.submit(e)}})}if(!c.omitK15tFooter){a(e.popup.element).find(".dialog-button-panel").prepend(Scroll.Versions.Templates.Dialog.logo({customStyles:null}))}var f=e.opts.tabIdxStart;a("input, select, button, .button-panel-link").each(function(){if(this.type!="hidden"){var g=a(this);g.attr("tabindex",f);f++}});a("body").css({position:"static"});d=true}e.gotoPage(0);e._show();e._fixBlankets()};e.opts=a.extend({maximize:c.maximize||false,closeOnOutsideClick:c.closeOnOutsideClick||false,onSuccess:c.onSuccess||e.onSuccess,ajaxTimeout:c.ajaxTimeout||12000,waitBeforeRedirect:c.waitBeforeRedirect||500,suppressFormSubmit:c.suppressFormSubmit||false},c);return e};Scroll.Versions.Dialog.alert=function(d,b){var c=new Scroll.Versions.Dialog({id:"sv-alert",height:240,width:640});c.addHeader(d.title);c.addPanel("","","sv-dialog-alert");c.showUserMessage("error",d.message,"",b);c.addButton("Close",function(){c.hide();c=null});c.show()}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.k15t.scroll.scroll-platform:common-webresources', location = '/com/k15t/scroll/platform/ui/common/message-dialog.soy' */
// This file was automatically generated from message-dialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Scroll.Versions.Templates.MessageDialog.
 */

if (typeof Scroll == 'undefined') { var Scroll = {}; }
if (typeof Scroll.Versions == 'undefined') { Scroll.Versions = {}; }
if (typeof Scroll.Versions.Templates == 'undefined') { Scroll.Versions.Templates = {}; }
if (typeof Scroll.Versions.Templates.MessageDialog == 'undefined') { Scroll.Versions.Templates.MessageDialog = {}; }


Scroll.Versions.Templates.MessageDialog.messagesDialogPanel = function(opt_data, opt_ignored) {
  var output = '<div class="sv-message-dialog-panel"><div class="aui-message">' + soy.$$escapeHtml("Please review the following items for potential problems.") + '</div><div class="scrollable-messages-container"><ul>';
  var messageList6 = opt_data.messages.errors;
  var messageListLen6 = messageList6.length;
  for (var messageIndex6 = 0; messageIndex6 < messageListLen6; messageIndex6++) {
    var messageData6 = messageList6[messageIndex6];
    output += '<li class="user-message error">' + soy.$$filterNoAutoescape(messageData6.text) + '</li>';
  }
  output += '</ul><ul>';
  var messageList13 = opt_data.messages.warnings;
  var messageListLen13 = messageList13.length;
  for (var messageIndex13 = 0; messageIndex13 < messageListLen13; messageIndex13++) {
    var messageData13 = messageList13[messageIndex13];
    output += '<li class="user-message warning">' + soy.$$filterNoAutoescape(messageData13.text) + '</li>';
  }
  output += '</ul><ul>';
  var messageList20 = opt_data.messages.infos;
  var messageListLen20 = messageList20.length;
  for (var messageIndex20 = 0; messageIndex20 < messageListLen20; messageIndex20++) {
    var messageData20 = messageList20[messageIndex20];
    output += '<li class="user-message info">' + soy.$$filterNoAutoescape(messageData20.text) + '</li>';
  }
  output += '</ul></div></div>';
  return output;
};
if (goog.DEBUG) {
  Scroll.Versions.Templates.MessageDialog.messagesDialogPanel.soyTemplateName = 'Scroll.Versions.Templates.MessageDialog.messagesDialogPanel';
}


Scroll.Versions.Templates.MessageDialog.messagesIndicators = function(opt_data, opt_ignored) {
  return '' + ((opt_data.label) ? '<span class="sv-messages-indicators-label">' + soy.$$escapeHtml(opt_data.label) + '&nbsp;</span>' : '') + ((opt_data.messages.errors.length > 0) ? '<span class="lozenge lozenge-error">' + soy.$$escapeHtml(opt_data.messages.errors.length) + '&nbsp;' + ((opt_data.messages.errors.length > 1) ? soy.$$escapeHtml("Errors") : soy.$$escapeHtml("Error")) + '</span>' : '') + ((opt_data.messages.warnings.length > 0) ? '<span class="lozenge lozenge-warning">' + soy.$$escapeHtml(opt_data.messages.warnings.length) + '&nbsp;' + ((opt_data.messages.warnings.length > 1) ? soy.$$escapeHtml("Warnings") : soy.$$escapeHtml("Warning")) + '</span>' : '') + ((opt_data.messages.infos.length > 0) ? '<span class="lozenge lozenge-info">' + soy.$$escapeHtml(opt_data.messages.infos.length) + '&nbsp;' + ((opt_data.messages.infos.length > 1) ? soy.$$escapeHtml("Messages") : soy.$$escapeHtml("Message")) + '</span>' : '') + ((opt_data.messages.errors.length > 0 || opt_data.messages.warnings.length > 0 || opt_data.messages.infos.length > 0) ? '<a class="sv-message-dialog-opener" href="#">' + soy.$$escapeHtml("Show") + '</a>' : '');
};
if (goog.DEBUG) {
  Scroll.Versions.Templates.MessageDialog.messagesIndicators.soyTemplateName = 'Scroll.Versions.Templates.MessageDialog.messagesIndicators';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.k15t.scroll.scroll-platform:common-webresources', location = '/com/k15t/scroll/platform/ui/common/message-dialog.js' */
(function(a){Scroll.Versions.Messages={};Scroll.Versions.Messages.getGroupedUserMessages=function(d){var b={errors:[],warnings:[],infos:[]};if(a.isArray(d)){for(var c=0;c<d.length;c++){if(d[c].severity=="error"){b.errors.push(d[c])}else{if(d[c].severity=="warning"){b.warnings.push(d[c])}else{if(d[c].severity=="info"){b.infos.push(d[c])}}}}}else{a.extend(b,d)}return b};Scroll.Versions.Messages.appendMessageIndicators=function(f,e,c,d){var b=Scroll.Versions.Messages.getGroupedUserMessages(e);a(f).html(Scroll.Versions.Templates.MessageDialog.messagesIndicators({label:d||"",messages:b}));a(f).find(".sv-message-dialog-opener").click(function(){new Scroll.Versions.Messages.Dialog(b,{header:c||""}).open()})};Scroll.Versions.Messages.Dialog=function(e,c){var d=this;var b=c.header||"Messages";var f=Scroll.Versions.Messages.getGroupedUserMessages(e);d.open=function(){var g=new Scroll.Versions.Dialog({height:c.height||540,width:c.width||860});g.addHeader(b);g.addPanel("messages-panel","","sv-messages");g.addClose(function(h,i){h.remove()});a(g.getCurrentPanel().body).html(Scroll.Versions.Templates.MessageDialog.messagesDialogPanel({messages:f}));g.show()};return d}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.k15t.scroll.scroll-platform:common-webresources', location = '/com/k15t/scroll/platform/ui/common/infopopup.js' */
(function(c){AJS.toInit(function(){c(".sv-infopopup-container .sv-infopopup-container").removeClass("sv-infopopup-container");c.each(c(".sv-infopopup-container"),function(){new Scroll.Versions.InfoPopup(c(this))})});window.Scroll=window.Scroll||{};window.Scroll=AJS.$.extend(true,window.Scroll,{Versions:{}});var b=0;Scroll.Versions.InfoPopup=function(d){new AJS.InlineDialog(d,"sv-infopopup-"+b++,function(i,g,j){var f=d.data("svInfopopupTemplate");var h=a(window,f);var e=h(d.data());i.html(e);j()},{noBind:true,onHover:true,hideDelay:100,calculatePositions:function(g,i,l,h){var f=c(i.target).closest(".sv-infopopup-container");var j=f.offset();var e={top:j.top-10-c(g).height(),left:j.left-13,right:"auto"};var k={top:c(g).height(),left:25};return{displayAbove:true,popupCss:e,arrowCss:k}},getArrowAttributes:function(){return{fill:"#FFFFFF",stroke:"#BBBBBB"}}})};function a(e,f){var d=f.split(".");while(d.length&&(e=e[d.shift()])){}return e}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.k15t.scroll.scroll-platform:common-webresources', location = '/com/k15t/scroll/platform/ui/common/tooltip.js' */
(function(a){AJS.toInit(function(){var b=0;a.each(a(".sv-tooltip"),function(c,d){new AJS.InlineDialog(a(d),"id_"+b++,function(f,e,g){if(a(e).data("ttText")){f.html('<p style="margin: 0.5em 0.5em 0.3em 0.5em;">'+a(e).data("ttText")+"</p>");g()}},{noBind:true,onHover:true,hideDelay:100,width:a(d).data("ttWidth")||"auto"})})})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.k15t.scroll.scroll-platform:common-webresources', location = '/com/k15t/scroll/platform/ui/common/loadingblanket.js' */
(function(a){window.Scroll=window.Scroll||{};window.Scroll.Versions=window.Scroll.Versions||{};window.Scroll.Versions.LoadingBlanket={show:function(f){var b=a(f);var d=b.next(".loading-overlay");if(!d.length||d.is(":visible")){d=a('<div class="loading-overlay sv-spinner"/>');d.insertAfter(b)}var c={position:"absolute"};var e={};var g=function(j){e=jQuery.extend(e,c);var h=b.position();var m=b.css(["margin-top","margin-left","border-top-width","border-left-width","z-index"]);e.top=h.top+parseInt(b.css("margin-top"),10)+parseInt(b.css("border-top-width"),10);e.left=h.left+parseInt(b.css("margin-left"),10)+parseInt(b.css("border-left-width"),10);e.width=b.innerWidth();e.height=b.innerHeight();e["z-index"]=b.css("z-index")+1;for(var l in e){if(e.hasOwnProperty(l)&&c.hasOwnProperty(l)){if(e[l]!==c[l]){j=true;break}}}if(j){d.css(e);var k=c;c=e;e=k}if(f.is(":visible")){setTimeout(g,100)}else{d.hide()}};g(true);d.show();return{element:f,blanket:d,hide:function(){d.hide();return this},show:function(){g(true);d.show();return this},dispose:function(){d.remove();return this},update:g}}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.k15t.scroll.scroll-platform:common-webresources', location = '/com/k15t/scroll/platform/ui/common/url-util.js' */
(function(b){AJS.toInit(function(){var c=a(b(location).attr("href"),"svReturnTo");if(c){b(".view-information p a").attr("href",contextPath+"/"+c)}});function a(d,c){var e=new RegExp("[\\?&]"+c+"=([^&#]*)").exec(d);return e&&e.length<=1&&e[1]}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
