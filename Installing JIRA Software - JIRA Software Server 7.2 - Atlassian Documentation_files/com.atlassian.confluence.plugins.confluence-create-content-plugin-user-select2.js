;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:user-select2', location = 'user-select2/avatar.soy' */
// This file was automatically generated from avatar.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace CreateContent.avatar.
 */

if (typeof CreateContent == 'undefined') { var CreateContent = {}; }
if (typeof CreateContent.avatar == 'undefined') { CreateContent.avatar = {}; }


CreateContent.avatar.avatarWithName = function(opt_data, opt_ignored) {
  return '' + aui.avatar.avatar({size: opt_data.size, avatarImageUrl: opt_data.avatarImageUrl, accessibilityText: opt_data.displayName, title: opt_data.displayName, extraAttributes: {'data-username': opt_data.userId}}) + soy.$$escapeHtml(opt_data.displayName);
};
if (goog.DEBUG) {
  CreateContent.avatar.avatarWithName.soyTemplateName = 'CreateContent.avatar.avatarWithName';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:user-select2', location = 'user-select2/user-multiselect.js' */
Confluence.Binder.autocompleteMultiUser=function(b){b=b||document.body;var c=AJS.$;var a=function(){var d=c(".select2-drop-active > .select2-results");if(d.children(".select2-result-selectable").length===0&&d.children(".select2-disabled").length){d.append('<li class="select2-no-results">'+AJS.escapeHtml("No matches found")+"</li>")}};c("input.autocomplete-multiuser[data-autocomplete-bound != 'true']",b).each(function(){var d=c(this);d.auiSelect2({multiple:true,minimumInputLength:2,formatInputTooShort:function(){return "Start typing to search for a user"},ajax:{transport:function(h){var i=h.success;delete h.success;return c.ajax.apply(c.ajax,arguments).done(i).done(a)},data:function(h){return{"max-results":6,query:h}},dataType:"json",url:Confluence.getContextPath()+"/rest/prototype/1/search/user.json",results:function(i){var h=[];c.each(i.result,function(){h.push({id:this.username,text:this.title,imgSrc:this.thumbnailLink.href})});return{results:h}},quietMillis:300},formatResult:function(h){return CreateContent.avatar.avatarWithName({size:"small",displayName:h.text,userId:h.id,avatarImageUrl:h.imgSrc})},escapeMarkup:function(h){return h},formatSelection:function(h){return CreateContent.avatar.avatarWithName({size:"xsmall",displayName:h.text,userId:h.id,avatarImageUrl:h.imgSrc})},dropdownCssClass:"users-dropdown",containerCssClass:"users-autocomplete",hasAvatar:true});if(!d.data("autofill-user")){return}var g=AJS.Meta.get("remote-user"),f=AJS.Meta.get("current-user-fullname"),e=AJS.Meta.get("current-user-avatar-url");if(g&&f&&e){d.auiSelect2("data",[{id:g,text:f,imgSrc:AJS.contextPath()+e}])}})};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
