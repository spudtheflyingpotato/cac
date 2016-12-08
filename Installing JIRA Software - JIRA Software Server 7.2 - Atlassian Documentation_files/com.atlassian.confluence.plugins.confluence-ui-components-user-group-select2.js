;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:user-group-select2', location = '/js/user-group-select2.js' */
define("confluence-ui-components/js/user-group-select2",["ajs","confluence/legacy","jquery"],function(a,d,b){function c(f){f=f||document.body;var e=function(){var g=b(".select2-drop-active > .select2-results");if(g.children(".select2-result-selectable").length===0&&g.children(".select2-disabled").length){g.append('<li class="select2-no-results">'+a.escapeHtml("No matches found")+"</li>")}};b("input.autocomplete-multiusergroup[data-autocomplete-bound != 'true']",f).each(function(){var g=b(this);g.attr("data-autocomplete-bound","true");var h=g.attr("data-include-groups");g.auiSelect2({multiple:true,minimumInputLength:2,formatInputTooShort:function(){return h?"Start typing to search for a user or group":"Start typing to search for a user"},ajax:{transport:function(l){var m=l.success;delete l.success;return b.ajax.apply(b.ajax,arguments).done(m).done(e)},data:function(l){return{"max-results":6,query:l}},dataType:"json",url:d.getContextPath()+"/rest/prototype/1/search/user"+(h?"-or-group":"")+".json",results:function(m){var l=[];b.each(m.result,function(){if(this.type=="user"){l.push({id:this.username,text:this.title,imgSrc:this.thumbnailLink.href,entity:this})}else{l.push({id:this.name,text:this.name,imgSrc:a.contextPath()+"/images/icons/avatar_group_48.png",entity:this})}});return{results:l}},quietMillis:300},formatResult:function(l){return d.UI.Components.UserGroupSelect2.avatarWithName({size:"small",displayName:l.text,userId:l.id,avatarImageUrl:l.imgSrc})},escapeMarkup:function(l){return l},formatSelection:function(l){return d.UI.Components.UserGroupSelect2.avatarWithName({size:"xsmall",displayName:l.text,userId:l.id,avatarImageUrl:l.imgSrc})},dropdownCssClass:"users-dropdown",containerCssClass:"users-autocomplete",hasAvatar:true});if(!g.data("autofill-user")){return}var k=a.Meta.get("remote-user"),j=a.Meta.get("current-user-fullname"),i=a.Meta.get("current-user-avatar-url");if(k&&j&&i){g.auiSelect2("data",[{id:k,text:j,imgSrc:a.contextPath()+i}])}})}return{bind:c}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:user-group-select2', location = '/soy/user-group-select2.soy' */
// This file was automatically generated from user-group-select2.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.UI.Components.UserGroupSelect2.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.UserGroupSelect2 == 'undefined') { Confluence.UI.Components.UserGroupSelect2 = {}; }


Confluence.UI.Components.UserGroupSelect2.avatarWithName = function(opt_data, opt_ignored) {
  return '' + aui.avatar.avatar({size: opt_data.size, avatarImageUrl: opt_data.avatarImageUrl, accessibilityText: opt_data.displayName, title: opt_data.displayName, extraAttributes: {'data-username': opt_data.userId}}) + soy.$$escapeHtml(opt_data.displayName);
};
if (goog.DEBUG) {
  Confluence.UI.Components.UserGroupSelect2.avatarWithName.soyTemplateName = 'Confluence.UI.Components.UserGroupSelect2.avatarWithName';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
