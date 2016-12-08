;try {
/* module-key = 'com.atlassian.integration.jira.jira-integration-plugin:jira-create-issue-form', location = '/jira-create-issue-form/jira-create-issue-form.js' */
var jiraIntegration=window.jiraIntegration||{};jiraIntegration.JiraCreateIssueForm=(function(c,a){b.defaults={formClass:"jira-interation-create-issue-form",ignoreFieldsWithDefaultValue:true,excludedField:["project","issuetype","reporter"],renderSummaryAndDescription:false,get$unsupportedFieldMessage:function(d,e){return c(jiraIntegration.templates.jiraCreateIssueForm.unsupportedFieldsMessage({unsupportedFields:d,createIssueUrl:e}))},get$unexpectedError:function(d){return c(aui.message.error({content:AJS.escapeHtml(d)}))},get$unauthorizeMessage:function(d){return c(jiraIntegration.templates.jiraCreateIssueForm.authorize({extraClasses:"jira-oauth-dialog",applicationName:d}))},get$unsupportedServerMessage:function(d){return c(jiraIntegration.templates.jiraCreateIssueForm.unsupportedServerMessage({serverUrl:d}))}};function b(d){this.configuration=a.extend({},b.defaults,d);if(this.configuration.renderSummaryAndDescription){this.configuration.excludedField.push("summary","description")}this._init()}b.prototype._trigger=function(d,e){var f=this.configuration[d];if(f){f.apply(this,Array.prototype.slice.call(arguments,1))}};b.prototype._bindEventListener=function(){var d=this;this.defaultFields.server.on("change",function(g){d.resetForm();var f=this.value;d.currentServerId=f;if(f){d.formIsLoading(d.defaultFields.server);jiraIntegration.JiraCreateIssueForm.Data.isIssueCreationSupported(f).done(function(e){if(e){d._loadProjectData(f);d.formLoadingCompleted(d.defaultFields.server)}else{var h=jiraIntegration.JiraCreateIssueForm.Data.getServerById(f).displayUrl;d._handleUnsupportedServer(h)}}).fail(function(e){d._handleAjaxError(e)})}else{jiraIntegration.JiraCreateIssueForm.FieldHelper.resetSelectField(d.defaultFields.project);d.defaultFields.project.trigger("change")}d._trigger("onServerChanged",this.value)});this.defaultFields.project.on("change",function(){if(this.value){c('option[value=""]',d.defaultFields.project).remove();d._loadIssueType(d.defaultFields.server.val(),this.value)}else{jiraIntegration.JiraCreateIssueForm.FieldHelper.resetSelectField(d.defaultFields.issueType)}d.resetForm();d.defaultFields.issueType.trigger("change");d._trigger("onProjectChanged",this.value)});this.defaultFields.issueType.on("change",function(){d.resetForm();if(this.value){d._loadRequireFields()}else{d.$containerRequireField&&d.$containerRequireField.html("");c(".aui-message",this.formEl).remove()}d._trigger("onTypeChanged",this.value)})};b.prototype._init=function(){this.container=c(this.configuration.container);if(this.container.length){this._renderForm();this._bindEventListener();this._loadServerData()}else{throw new Error("container property should be defined.")}};b.prototype._renderForm=function(){this.formEl=c(jiraIntegration.templates.jiraCreateIssueForm.form({formClass:this.configuration.formClass}));if(this.configuration.renderSummaryAndDescription){this._renderSummaryAndDescription()}this.container.append(this.formEl);this.defaultFields=this._getDefaultFields();a.each(this.defaultFields,a.bind(function(d){this.createSelect2WithIcon(c(d))},this));this.$containerRequireField=c(".create-issue-required-fields",this.container);this._trigger("onFormRendered")};b.prototype._renderSummaryAndDescription=function(){var d=c(".create-issue-default-fields",this.formEl);d.append(aui.form.textField({labelContent:"Summary",isRequired:true,name:"summary"}));d.append(aui.form.textareaField({labelContent:"Description",name:"description"}))};b.prototype._getDefaultFields=function(){var d=c("."+this.configuration.formClass,this.configuration.container);return{server:c(".server-select",d),project:c(".project-select",d),issueType:c(".issuetype-select",d)}};b.prototype._loadServerData=function(){var d=this;this.formIsLoading(this.defaultFields.server);c.when(jiraIntegration.JiraCreateIssueForm.Data.loadServers()).then(function(e){d.formLoadingCompleted(d.defaultFields.server);d._loadServerDataComplete(e)})};b.prototype._loadRequireFields=function(){var e=this;var d={serverId:this.defaultFields.server.val(),projectKey:this.defaultFields.project.val(),issueType:this.defaultFields.issueType.val()};this.formIsLoading(this.defaultFields.issueType);var f=jiraIntegration.JiraCreateIssueForm.Data.getFieldMetadata(d);f.done(function(j){var g=e._getValidRequiredFields(j);if(e.configuration.renderSummaryAndDescription){var h=j.fields.description;var i=!!(h&&h.required);e._setDescriptionAsRequiredField(i)}e._renderRequireFields(g,d);e.formLoadingCompleted(e.defaultFields.issueType)}).fail(a.bind(e._handleAjaxError,this))};b.prototype._loadServerDataComplete=function(d){if(d.length){if(d.length===1){jiraIntegration.JiraCreateIssueForm.FieldHelper.hideField(this.defaultFields.server)}jiraIntegration.JiraCreateIssueForm.FieldHelper.fillSelectData(this.defaultFields.server,d,true);this._loadProjectData(d[0].id);this.currentServerId=d[0].id;this._hasMultiServer=d.length>1}else{this._handlerUnexpectedError("Don\'t have any JIRA server, please check the application link configuration.")}};b.prototype._loadProjectData=function(d){var e=this;this.formIsLoading(this.defaultFields.project);var f=jiraIntegration.JiraCreateIssueForm.Data.loadProjects(d);f.then(function(g){if(g.errors&&g.errors.length){var h=g.errors[0];if(h.authenticationUri){e._handleAuthorizeError(h)}else{e._handlerUnexpectedError(h.message)}}else{if(g.length){jiraIntegration.JiraCreateIssueForm.FieldHelper.fillSelectData(e.defaultFields.project,g);jiraIntegration.JiraCreateIssueForm.FieldHelper.resetSelectField(e.defaultFields.issueType)}else{e._handlerUnexpectedError("You do not have permission to create issues on this JIRA server.")}}e.formLoadingCompleted(e.defaultFields.project)},a.bind(e._handleAjaxError,this))};b.prototype._loadIssueType=function(e,d){var f=jiraIntegration.JiraCreateIssueForm.Data.getIssueTypes(e,d);jiraIntegration.JiraCreateIssueForm.FieldHelper.fillSelectData(this.defaultFields.issueType,f,true)};b.prototype._renderRequireFields=function(d,e){this.$containerRequireField.html("");var f=a.reject(d,jiraIntegration.fields.canRender);if(f.length){this._handleUnsupportedFields(f)}else{this.$containerRequireField.html(a.map(d,function(g){return jiraIntegration.fields.renderField(null,g,null,null)}).join(""));jiraIntegration.fields.attachFieldBehaviors(this.$containerRequireField,{serverId:e.serverId,projectKey:e.projectKey},null);this._trigger("onRequiredFieldsRendered",d,f)}};b.prototype._handlerUnexpectedError=function(e){var d=this.configuration.get$unexpectedError(e);c(".aui-message",this.formEl).remove();this.formEl.prepend(d);this.formLoadingCompleted();this.formHasError()};b.prototype._handleUnsupportedFields=function(d){d=a.map(d,function(f){return AJS.escapeHtml(f.name)});var e=this.configuration.get$unsupportedFieldMessage(d,this._getCreateJiraIssueUrl());c(".aui-message",this.formEl).remove();this.formEl.prepend(e);this._trigger("onError");this.formLoadingCompleted()};b.prototype._handleUnsupportedServer=function(d){var e=this.configuration.get$unsupportedServerMessage(d);c(".aui-message",this.formEl).remove();this.formEl.prepend(e);this.formLoadingCompleted();this.formHasError()};b.prototype._handleAjaxError=function(e){var d=this;if(e.status>=500&&e.status<600){d._handlerUnexpectedError("Received the following HTTP error code from the server"+":"+e.status)}d.formHasError()};b.prototype._handleAuthorizeError=function(f){var e=this;this.formHasError();var d=this.configuration.get$unauthorizeMessage(f.applicationName);this.formEl.append(d);c(".oauth-init",d).on("click",function(g){AppLinks.authenticateRemoteCredentials(f.authenticationUri,function(){e.resetForm();e._loadProjectData(e.currentServerId)},function(){e._handlerUnexpectedError(AJS.format("You have refused to permit access to {0}.",f.applicationName))});g.preventDefault()})};b.prototype._getCreateJiraIssueUrl=function(){var f=this.defaultFields.project.find("option:selected").val();var g=this.defaultFields.issueType.find("option:selected").val();var h=jiraIntegration.JiraCreateIssueForm.Data.getServerById(this.currentServerId).displayUrl;h=h+"/secure/CreateIssueDetails!Init.jspa?pid="+f+"&issuetype="+g;var e=this._getFieldValue("summary");if(e.length){h=h+"&summary="+encodeURIComponent(e)}var d=this._getFieldValue("description");if(d.length){h=h+"&description="+encodeURIComponent(d)}return h};b.prototype._getValidRequiredFields=function(d){var e=this;return a.filter(d.fields,function(h){var g=h.schema?(h.schema.system||h.schema.custom||h.schema.customId):h;var f=a.contains(e.configuration.excludedField,g);return(h.required&&!f&&!h.hasDefaultValue)})};b.prototype._getFieldValue=function(e){var d=c("[name='"+e+"']",this.formEl);return(d)?c.trim(d.val()):""};b.prototype._setDescriptionAsRequiredField=function(d){var e=c('.field-group [name="description"]',this.formEl).prev("label");e.find(".aui-icon.aui-icon-required").remove();if(d){e.append(aui.icons.icon({icon:"required"}))}};b.prototype.resetForm=function(){c(".aui-message",this.formEl).remove();c(".field-group",this.formEl).show();if(this.configuration.renderSummaryAndDescription){this._setDescriptionAsRequiredField(false)}if(!this._hasMultiServer){jiraIntegration.JiraCreateIssueForm.FieldHelper.hideField(this.defaultFields.server)}this.$containerRequireField.html("")};b.prototype.formHasError=function(){c(".field-group",this.formEl).hide();this.$containerRequireField.html("");jiraIntegration.JiraCreateIssueForm.FieldHelper.showField(this.defaultFields.server);jiraIntegration.JiraCreateIssueForm.FieldHelper.setFieldDisabled(c(".insert-issue-button"),true);this._trigger("onError");this.formLoadingCompleted()};b.prototype.getCurrentServer=function(){return jiraIntegration.JiraCreateIssueForm.Data.getServerById(this.currentServerId)};b.prototype.formIsLoading=function(d){if(d){jiraIntegration.JiraCreateIssueForm.FieldHelper.setIsLoading(d,true)}var e=c(":input",c(this.formEl));jiraIntegration.JiraCreateIssueForm.FieldHelper.setFieldDisabled(e,true)};b.prototype.formLoadingCompleted=function(d){if(d){jiraIntegration.JiraCreateIssueForm.FieldHelper.setIsLoading(d,false)}else{c(".aui-icon.aui-icon-wait",this.formEl).remove()}var e=c(":input",c(this.formEl));jiraIntegration.JiraCreateIssueForm.FieldHelper.setFieldDisabled(e,false)};b.prototype.createSelect2WithIcon=function(d){if(d.is(".server-select")){d.auiSelect2({minimumResultsForSearch:-1})}else{var e=d.is(".project-select")?{formatSelection:this.projectSelectFormat,formatResult:this.projectSelectFormat,extraAttributes:this.defaultFields}:{formatSelection:this.issueTypeSelectFormat,formatResult:this.issueTypeSelectFormat,minimumResultsForSearch:-1,extraAttributes:this.defaultFields};d.auiSelect2(e)}d.auiSelect2("val","")};b.prototype.projectSelectFormat=function(f){var e=this.extraAttributes.server.find("option:selected").val();var d=jiraIntegration.JiraCreateIssueForm.Data.getProjectIconUrl(e,f.id);return jiraIntegration.templates.fields.select2WithIconOption({optionValue:f.text,iconUrl:d,isProject:true})};b.prototype.issueTypeSelectFormat=function(g){var f=this.extraAttributes.server.find("option:selected").val();var d=this.extraAttributes.project.find("option:selected").val();var e=jiraIntegration.JiraCreateIssueForm.Data.getIssueTypeIconUrl(f,d,g.id);return jiraIntegration.templates.fields.select2WithIconOption({optionValue:g.text,iconUrl:e,isProject:false})};return b})(AJS.$,window._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.integration.jira.jira-integration-plugin:jira-create-issue-form', location = '/jira-create-issue-form/jira-create-issue-form-data.js' */
var jiraIntegration=window.jiraIntegration||{};jiraIntegration.JiraCreateIssueForm=jiraIntegration.JiraCreateIssueForm||{};jiraIntegration.JiraCreateIssueForm.Data=(function(d){var m={};var b={};var p=AJS.contextPath()+"/plugins/servlet/jira-integration/icons?serverId={0}&iconType={1}&{2}";var i=[];var g=function(r,q){return d.ajax({dataType:"json",timeout:0,url:r,success:q})};function o(){return g(AJS.contextPath()+"/rest/jira-integration/1.0/servers",function(q){if(q.length){d.each(q,function(r,s){m[s.id]=s})}})}function n(q){var r=(m[q])?m[q].projects:undefined;return r?d.Deferred().resolve(r):g(AJS.contextPath()+"/rest/jira-integration/1.0/servers/"+q+"/projects",function(s){if(s.length){d.each(s,function(v,x){var w=_.filter(x.issuetypes,function(y){return !y.subtask});x.issueTypes=w;var u=[];_.each(w,function(y){u[y.id]=y.iconUrl});var t={iconUrl:AJS.format(p,q,"project",x.avatarUrls["16x16"].split("/secure/projectavatar?")[1]),issueTypes:u};i[a(q,x.id)]=t});if(!m[q]){m[q]={}}m[q].projects=s}})}function f(r,q){var s=_.find(l(r),function(t){return t.id===q});return s?s.issueTypes:[]}function h(q){var r=a(q.serverId,q.projectKey,q.issueType);if(!_.has(b,r)){return d.ajax({type:"GET",timeout:0,url:AJS.contextPath()+"/rest/jira-integration/1.0/servers/"+q.serverId+"/projects/"+q.projectKey+"/issue-types/"+q.issueType+"/fields-meta"}).pipe(function(s){b[r]=s;return b[r]})}else{return d.Deferred().resolve(b[r])}}function e(q){return m?m[q]:{}}function k(q){if(!m||!m[q]){return false}return(m[q].isSupported!=undefined)?d.Deferred().resolve(m[q].issueCreationSupported):d.ajax({type:"GET",timeout:0,url:AJS.contextPath()+"/rest/jira-integration/1.0/servers/"+q+"/features"}).pipe(function(r){if(r!=undefined){m[q].issueCreationSupported=_.contains(r,"CREATE_ISSUE")}return m[q].issueCreationSupported})}function l(q){return m&&m[q]?m[q].projects:[]}function j(r,q){var s=a(r,q);return i[s]?i[s].iconUrl:""}function c(s,r,t){var u=a(s,r);var q=i[u];return(q&&q.issueTypes[t])?q.issueTypes[t]:""}function a(r,q,s){return r+(q?"-"+q:"")+(s?"-"+s:"")}return{loadServers:o,loadProjects:n,getIssueTypes:f,getFieldMetadata:h,getServerById:e,getProjectIconUrl:j,getIssueTypeIconUrl:c,getProjects:l,isIssueCreationSupported:k}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.integration.jira.jira-integration-plugin:jira-create-issue-form', location = '/jira-create-issue-form/jira-create-issue-form-field-helper.js' */
var jiraIntegration=window.jiraIntegration||{};jiraIntegration.JiraCreateIssueForm=jiraIntegration.JiraCreateIssueForm||{};jiraIntegration.JiraCreateIssueForm.FieldHelper=(function(c,h){function e(j,l,k){var m=k?[]:[a(j)];c.each(l,function(n,p){var o={value:p.id,text:p.name,iconUrl:p.iconUrl?p.iconUrl:(p.avatarUrls?p.avatarUrls["16x16"]:"")};if(k&&n===0){o.selected=true}m.push(aui.form.optionOrOptgroup(o))});j.html(m.join(""));j.auiSelect2("val","")}function b(j){j.html(a(j));j.auiSelect2("val","")}function a(j){var k=j.attr("data-placeholder");return aui.form.optionOrOptgroup({value:"",text:k,iconUrl:""})}function i(j){j.parent().hide()}function d(j){j.parent().show()}function f(k,j){j?k.disable():k.enable()}function g(k,j){return j?k.after(aui.icons.icon({icon:"wait"})):k.next(".aui-icon.aui-icon-wait").remove()}return{fillSelectData:e,resetSelectField:b,hideField:i,showField:d,setFieldDisabled:f,setIsLoading:g}})(AJS.$,window._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.integration.jira.jira-integration-plugin:jira-create-issue-form', location = '/jira-create-issue-form/jira-create-issue-form.soy' */
// This file was automatically generated from jira-create-issue-form.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace jiraIntegration.templates.jiraCreateIssueForm.
 */

if (typeof jiraIntegration == 'undefined') { var jiraIntegration = {}; }
if (typeof jiraIntegration.templates == 'undefined') { jiraIntegration.templates = {}; }
if (typeof jiraIntegration.templates.jiraCreateIssueForm == 'undefined') { jiraIntegration.templates.jiraCreateIssueForm = {}; }


jiraIntegration.templates.jiraCreateIssueForm.form = function(opt_data, opt_ignored) {
  return '' + aui.form.form({id: 'jira-create-form', extraClasses: opt_data.formClass, method: 'post', action: '#', content: '<fieldset class="create-issue-default-fields"><div class="field-group"><label>' + soy.$$escapeHtml("Server") + '<span class="aui-icon icon-required"> required</span></label><select class="jira-select2-drop-box server-select" name="server" data-placeholder="' + soy.$$escapeHtml("Select a server") + '"><option disabled selected value="">' + soy.$$escapeHtml("Select a server") + '</option></select></div><div class="field-group"><label>' + soy.$$escapeHtml("Project") + '<span class="aui-icon icon-required"> required</span></label><select class="jira-select2-drop-box project-select" name="project" data-placeholder="' + soy.$$escapeHtml("Select a project") + '"><option disabled selected value="">' + soy.$$escapeHtml("Select a project") + '</option></select></div><div class="field-group"><label>' + soy.$$escapeHtml("Issue Type") + '<span class="aui-icon icon-required"> required</span></label><select class="jira-select2-drop-box issuetype-select" name="issue-type" data-placeholder="' + soy.$$escapeHtml("Select an issue type") + '"><option disabled selected value="">' + soy.$$escapeHtml("Select an issue type") + '</option></select></div></fieldset><fieldset class="create-issue-required-fields"></fieldset>'});
};
if (goog.DEBUG) {
  jiraIntegration.templates.jiraCreateIssueForm.form.soyTemplateName = 'jiraIntegration.templates.jiraCreateIssueForm.form';
}


jiraIntegration.templates.jiraCreateIssueForm.unsupportedFieldsMessage = function(opt_data, opt_ignored) {
  var param29 = '';
  if (opt_data.unsupportedFields.length == 1) {
    var field__soy32 = '<strong>' + soy.$$escapeHtml(opt_data.unsupportedFields) + '</strong>';
    param29 += soy.$$filterNoAutoescape(AJS.format("The required field {0} is not available in this form. You will need to",field__soy32));
  } else {
    var fieldList__soy39 = '' + jiraIntegration.templates.jiraCreateIssueForm.buildFieldList({fields: opt_data.unsupportedFields});
    param29 += soy.$$filterNoAutoescape(AJS.format("The required fields {0} are not available in this form. You will need to",fieldList__soy39));
  }
  param29 += ' <a href="' + soy.$$escapeHtml(opt_data.createIssueUrl) + '" target="_blank">' + soy.$$escapeHtml("create your issue directly in JIRA") + '</a>.';
  var output = '' + aui.message.warning({content: param29});
  return output;
};
if (goog.DEBUG) {
  jiraIntegration.templates.jiraCreateIssueForm.unsupportedFieldsMessage.soyTemplateName = 'jiraIntegration.templates.jiraCreateIssueForm.unsupportedFieldsMessage';
}


jiraIntegration.templates.jiraCreateIssueForm.buildFieldList = function(opt_data, opt_ignored) {
  var output = '';
  var joinText__soy51 = '' + ((opt_data.fields.length == 2) ? ' ' + soy.$$escapeHtml("and") + ' ' : ', ');
  var fieldList59 = opt_data.fields;
  var fieldListLen59 = fieldList59.length;
  for (var fieldIndex59 = 0; fieldIndex59 < fieldListLen59; fieldIndex59++) {
    var fieldData59 = fieldList59[fieldIndex59];
    output += ((! (fieldIndex59 == 0)) ? soy.$$escapeHtml(joinText__soy51) : '') + '<strong>' + soy.$$escapeHtml(fieldData59) + '</strong>';
  }
  return output;
};
if (goog.DEBUG) {
  jiraIntegration.templates.jiraCreateIssueForm.buildFieldList.soyTemplateName = 'jiraIntegration.templates.jiraCreateIssueForm.buildFieldList';
}


jiraIntegration.templates.jiraCreateIssueForm.authorize = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '';
  var applicationNameEscaped__soy68 = '' + soy.$$escapeHtml(opt_data.applicationName);
  output += aui.message.info({content: '' + soy.$$filterNoAutoescape(AJS.format("{0}Log in and approve{1} to retrieve data from {2}",'<a class="oauth-init" href="#">','</a>',applicationNameEscaped__soy68))});
  return output;
};
if (goog.DEBUG) {
  jiraIntegration.templates.jiraCreateIssueForm.authorize.soyTemplateName = 'jiraIntegration.templates.jiraCreateIssueForm.authorize';
}


jiraIntegration.templates.jiraCreateIssueForm.unsupportedServerMessage = function(opt_data, opt_ignored) {
  return '' + aui.message.warning({content: '' + soy.$$filterNoAutoescape(AJS.format("The version of selected JIRA server is not supported. You may want to upgrade to at least version 5.x or {0}create issue in JIRA{1}.",'<a href="' + opt_data.serverUrl + '" target="_blank">','</a>'))});
};
if (goog.DEBUG) {
  jiraIntegration.templates.jiraCreateIssueForm.unsupportedServerMessage.soyTemplateName = 'jiraIntegration.templates.jiraCreateIssueForm.unsupportedServerMessage';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
