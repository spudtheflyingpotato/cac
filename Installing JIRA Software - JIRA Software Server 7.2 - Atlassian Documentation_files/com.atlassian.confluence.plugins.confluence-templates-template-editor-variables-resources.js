;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-templates:template-editor-variables-resources', location = 'js/variable-manager.js' */
define("confluence-templates/variable-manager",["confluence/api/event","jquery"],function(f,g){function i(c,a){var b=c.toLocaleLowerCase(),d=a.toLocaleLowerCase(),b=b.localeCompare(d);0==b&&(b=c.localCompare(a));return b}function h(c){return g.extend(!0,{},e.defaults[c]||e.defaults.string)}var e=function(){var c={};return{find:function(a){var a=a.toLocaleLowerCase(),b={},d;for(d in c)if(c.hasOwnProperty(d)&&(!a.length||0===d.toLocaleLowerCase().indexOf(a)))b[d]=c[d];return b},contains:function(a){return!!c[a]},
get:function(a){return c[a]},getAll:function(){return g.extend(!0,{},c)},getSortedNames:function(){var a=[],b;for(b in c)a.push(b);return a.sort(i)},add:function(a,b){c[a]=b||h();f.trigger("add.confluence-variable",{name:a,details:g.extend(!0,{},b)})},del:function(a){var b=c[a];delete c[a];f.trigger("delete.confluence-variable",{name:a,details:g.extend(!0,{},b)})},rename:function(a,b){var d=c[a];delete c[a];d&&(c[b]=d,f.trigger("rename.confluence-variable",{oldName:a,newName:b,details:g.extend(!0,
{},details)}))},createDefault:h}};e.defaultVariableManager=e();e.defaults={textarea:{type:"textarea",rows:5,columns:100},list:{type:"list",options:[]},string:{type:"string"}};return e});"template"===AJS.Meta.get("content-type")&&require("confluence/module-exporter").safeRequire("confluence-templates/variable-manager",function(f){require("confluence/legacy").VariableManager=f});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-templates:template-editor-variables-resources', location = 'js/variable-placeholder.js' */
define("confluence-templates/variable-placeholder",["ajs","jquery"],function(a,d){return{component:{insertPlaceholder:function(c,e){var b;b="$"+c;var f=a.Rte.getEditor();a.Rte.BookmarkManager.storeBookmark();b={title:b,src:a.Meta.get("context-path")+"/plugins/servlet/confluence/placeholder/template-variable?name="+encodeURIComponent(c),"data-variable-name":c,"class":"template-variable",alt:"$"+c};e&&d.extend(b,e);b=d("<img/>").attr(b);f.selection.setNode(b[0])}},init:function(){d(a.Rte.getEditor().getBody()).delegate("img.template-variable",
"dragstart",function(a){a.preventDefault()})}}});"template"===AJS.Meta.get("content-type")&&require("confluence/module-exporter").safeRequire("confluence-templates/variable-placeholder",function(a){require("confluence/legacy").VariablePlaceHolder=a.component;require("ajs").bind("init.rte",a.init)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-templates:template-editor-variables-resources', location = 'js/variable-toolbar.js' */
define("confluence-templates/variable-toolbar",["ajs","document","confluence/api/event","jquery","confluence/legacy"],function(e,k,h,f,c){return{init:function(){h.bind("init.rte",function(){var g=c.VariableManager.defaultVariableManager,a=f("#template-menu"),i=a.find(".variables-list");h.bind("add.confluence-variable,delete.confluence-variable,rename.confluence-variable",function(){var b=g.getSortedNames(),j=b.length,d="";i.toggleClass("hidden",!j);for(var a=0;a<j;a++)d+=c.Templates.Variables.renderVariableItem({variableName:"$"+
b[a],tooltip:e.format("Insert the \'\'{0}\'\' field into the page for the template user to fill out.",b[a])});i.html(d)});a.delegate(".variables-list a","click",function(){var b=f(this).attr("data-variable-name");!g.contains(b)&&g.add(b);c.VariablePlaceHolder.insertPlaceholder(b)});a.delegate(".variables-add","click",function(b){var a=c.Editor.Autocompleter.Manager.getInputDrivenDropdown();e.Rte.getEditor().focus();(!a||a.inactive)&&c.Editor.Autocompleter.Manager.shortcutFired("$",!0);b.stopPropagation()});f(k).bind("showLayer",
function(b,c,d){"dropdown"===c&&d.$.closest(a).length&&d.reset()})})}}});"template"===AJS.Meta.get("content-type")&&require("confluence/module-exporter").safeRequire("confluence-templates/variable-toolbar",function(e){e.init()});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-templates:template-editor-variables-resources', location = 'js/autocomplete-settings-variables.js' */
define("confluence-templates/autocomplete-settings-variables",["confluence/legacy","ajs"],function(d,c){return function(){function e(a,b){return{callback:function(c){c.replaceWithSelectedSearchText();!f.contains(a)&&f.add(a);d.VariablePlaceHolder.insertPlaceholder(a,b)},name:c.escapeHtml(a),href:"#"}}function i(a,b){return!a&&!b?0:!a?-1:!b?1:a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase())}var f=d.VariableManager.defaultVariableManager;return{ch:"$",cache:!1,endChars:[],dropDownDelay:0,
preventStartNodes:"",dropDownClassName:"autocomplete-variables",selectFirstItem:!0,getHeaderText:function(a,b){return b?"Variable suggestions":"Variable suggestions"},getAdditionalLinks:function(a,b){var e=d.unescapeEntities(b);return f.get(e)||0===b.length?[]:[{className:"dropdown-create-variable",href:"#",callback:function(a){var b=a.plainText();a.replaceWithSelectedSearchText();!f.contains(b)&&f.add(b);d.VariablePlaceHolder.insertPlaceholder(b,
void 0)},name:c.format("Create variable \'\'{0}\'\'",b)}]},getDataAndRunCallback:function(a,b,c){var g,k,a=d.unescapeEntities(b),j=f.find(a),h=[],l=[];for(g in j)j.hasOwnProperty(g)&&h.push(g);h.sort(i);a=0;for(k=h.length;a<k;a++)g=h[a],l.push(e(g,j[g]));c([l],b)},update:function(){}}}});
require("confluence/module-exporter").safeRequire("confluence-templates/autocomplete-settings-variables",function(d){var c=require("ajs"),e=require("confluence/legacy"),i=require("confluence/meta");c.bind("init.rte",function(){var c=require("tinymce");"template"===i.get("content-type")&&(e.Editor.Autocompleter||(e.Editor.Autocompleter=c.confluence.Autocompleter),e.Editor.Autocompleter.Settings.$=d())})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-templates:template-editor-variables-resources', location = 'js/property-panel-variables.js' */
define("confluence-templates/property-panel-variables",["ajs","jquery","confluence/legacy"],function(b,a,h){return{name:"variable",canHandleElement:function(a){return a.hasClass("template-variable")},handle:function(f){function l(d){b.debug("clicked type: "+d);var c=a("#property-panel");c.find(".panel-buttons").toggleClass("no-inputs","string"===d);c.find(".textarea-section,.list-section,.string-section").addClass("hidden");c.find("."+d+"-section").removeClass("hidden");"textarea"===d?(a("#variable-property-panel-textarea-rows").val(e.rows),
a("#variable-property-panel-textarea-columns").val(e.columns)):"list"===d&&a("#variable-property-panel-list-values").val(e.options.join(","))}function i(d,b,c){return{className:"variable-property-panel-type-item variable-property-panel-type-"+d,text:b,tooltip:c,selected:m===d,click:function(){e.type=d;e=j.createDefault(d);j.add(k,e);a(".variable-property-panel-type-item").removeClass("selected");a(".variable-property-panel-type-"+d).addClass("selected");l(d)}}}function g(a){return m===a?"":" hidden"}
if(!("click"!==f.e.type&&"mouseup"!==f.e.type)){var f=f.containerEl,n=a(f),k,c=[],o={originalHeight:n.height(),anchorIframe:b.Rte.getEditorFrame()};k=n.attr("data-variable-name");var j=h.VariableManager.defaultVariableManager,e=j.get(k),m=e&&e.type||"string";c.push(i("string","Text","Single line text input field."));c.push(i("textarea","Multi-line Text","Multi-line text input field."));
c.push(i("list","List","Drop down list."));c.push(null);c.push({className:"editable textarea-section"+g("textarea"),tooltip:"Number of rows to display for the field.",html:'<input id="variable-property-panel-textarea-rows"/>'});c.push({className:"variable-property-panel-textarea-split textarea-section"+g("textarea"),tooltip:"",html:"<span>x</span>"});c.push({className:"editable textarea-section"+
g("textarea"),tooltip:"Number of columns to display for the field.",html:'<input id="variable-property-panel-textarea-columns"/>'});c.push(null);c.push({className:"editable list-section"+g("list"),tooltip:"Enter each item for the list, separating each with a comma.",html:"<input id=\"variable-property-panel-list-values\" size='50'/>"});b.Confluence.PropertyPanel.createFromButtonModel("variable",f,c,o);l(e.type);a("#variable-property-panel-textarea-rows").change(function(){e.rows=
+a(this).val()||h.VariableManager.defaults.textarea.rows});a("#variable-property-panel-textarea-columns").change(function(){e.columns=+a(this).val()||h.VariableManager.defaults.textarea.columns});a("#variable-property-panel-list-values").change(function(){var d,b,c,f=a(this).val().split(",");e.options=[];d=0;for(b=f.length;d<b;d++)(c=a.trim(f[d]))&&e.options.push(c)});a("#variable-property-panel-textarea-rows,#variable-property-panel-textarea-columns,#variable-property-panel-list-values").keypress(function(b){13===
b.which&&a(this).blur()})}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-templates/property-panel-variables","AJS.Confluence.PropertyPanel.Variable",function(b){var a=require("ajs");a.bind("init.rte",function(){a.trigger("add-handler.property-panel",b)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-templates:template-editor-variables-resources', location = 'js/variable-marshaller.js' */
define("confluence-templates/variable-marshaller",["ajs","jquery","confluence/legacy"],function(d,b,q){function r(c){var a=c.attr("data-variable-type");return"textarea"===a?{type:a,rows:+c.attr("data-variable-rows")||i,columns:+c.attr("data-variable-columns")||s}:"list"===a?{type:a,options:c.find("li").map(function(){return b(this).attr("data-variable-option")}).toArray()}:{type:"string"}}function m(){var c=b(d.Rte.getEditor().getBody()).find("img[data-variable-name]"),a={};b.map(c,function(c){var f=
{};b(c).attr("data-variable-raw-xhtml")&&(f={"data-variable-raw-xhtml":!0});a[b(c).attr("data-variable-name")]=f});return a}var i=5,s=100;return function(){function c(a){for(var b in a)a.hasOwnProperty(b)&&!f.contains(b)&&(d.debug("adding: ",b),f.add(b,a[b]))}var a=d.Rte.getEditor(),i=b(a.getBody()),f=q.VariableManager.defaultVariableManager;a.onGetContent.add(function(a,d){var i=b("<div></div>"),n=b("<ul></ul>").attr("data-variable-declarations","true"),e;i.append(n);var o=m();c(o);var p=f.getAll(),
l;for(l in p)if(o.hasOwnProperty(l)){var j=l;e=p[l];var g=void 0,k=void 0,g=e.type,h=b("<li></li>");h.attr("data-variable-name",j);h.attr("data-variable-type",g);h.text(j);if("textarea"===g)h.attr("data-variable-rows",e.rows),h.attr("data-variable-columns",e.columns);else if("list"===g){g=b("<ul></ul>");j=void 0;for(j in e.options)k=e.options[j],k=b("<li></li>").text(k).attr("data-variable-option",k),g.append(k);h.append(g)}e=h;n.append(e)}d.content=i.html()+d.content});a=i.find("ul[data-variable-declarations]");
a.remove();a.find("li[data-variable-name]").each(function(){var a=b(this);f.add(a.attr("data-variable-name"),r(a))});c(m())}});"template"===AJS.Meta.get("content-type")&&require("confluence/module-exporter").safeRequire("confluence-templates/variable-marshaller",function(d){require("ajs").bind("init.rte",d)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
