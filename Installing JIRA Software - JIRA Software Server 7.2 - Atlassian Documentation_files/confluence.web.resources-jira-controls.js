;try {
/* module-key = 'confluence.web.resources:jira-controls', location = '/includes/js/class.js' */
define("confluence/class",["jquery"],function(f){var j=function(d){var a=function(){};a.prototype=d;return new a},i=!1,l=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/,k=function(){};k.extend=function(){function d(){!i&&this.init&&this.init.apply(this,arguments)}var a,g=this.prototype;if(1<arguments.length){var c=f.makeArray(arguments);a=c.pop();var h;f.each(c,function(b,a){h=h?h.extend(a):a});return h.extend(this.prototype).extend(a)}a=arguments[0];i=!0;c=new this;i=!1;for(var b in a)if(c[b]="function"===
typeof a[b]&&"function"===typeof g[b]&&l.test(a[b]))c[b]=function(a,b){return function(){var c=this._super;this._super=g[a];var d=b.apply(this,arguments);this._super=c;return d}}(b,a[b]);else if("object"===typeof g[b]){var e=j(a[b]);f.each(g[b],function(a,b){if(e[a]){if("object"===typeof e[a]){var c=j(e[a]);f.each(b,function(a,b){c[a]||(c[a]=b)});e[a]=c}}else e[a]=b});c[b]=e}else c[b]=a[b];d.prototype=c;d.constructor=d;d.extend=arguments.callee;return d};return k});
require("confluence/module-exporter").exportModuleAsGlobal("confluence/class","Class");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:jira-controls', location = '/includes/js/control.js' */
define("confluence/control","confluence/class confluence/trigger confluence/api/logger confluence/api/keyboard jquery document".split(" "),function(k,l,i,g,d,e){return k.extend({INVALID:"INVALID",_throwReadOnlyError:function(a){Error(this.CLASS_SIGNATURE+": Sorry ["+a+"] is a read-only property")},_assignEvents:function(a,b){this._unassignEvents(a,b);if(typeof b==="string")for(var c in this._events[a])d(e).delegate(b,c,this._getDispatcher(a,c));else{b=d(b);for(c in this._events[a]){b.bind(c,this._getDispatcher(a,
c));i.debug("Control bound eventType '"+c+"' for group '"+a+"' on target '"+(b[0].type||b[0])+"'")}}},_unassignEvents:function(a,b){if(typeof b==="string")for(var c in this._events[a])d(e).undelegate(b,c,this._getDispatcher(a,c));else{b=d(b);try{for(c in this._events[a])b.unbind(c,this._getDispatcher(a,c))}catch(g){var f=b.data("events");if(f)for(c in f)if(c in this._events[a]){for(var m=this._getDispatcher(a,c),j=f[c],h=0;h<j.length;h++)if(j[h]===m){j.splice(h,1);break}i.debug("Control unbound eventType '"+
c+"' for group '"+a+"' on target '"+(b[0].type||b[0])+"'")}}}},_getDispatcher:function(a,b){var c=a+"/"+b;if(!this._dispatchers)this._dispatchers={};if(!this._dispatchers[c]){var e=this._events[a][b],f=this;this._dispatchers[c]=function(c){i.debug("Control dispatching eventType '"+b+"' for group '"+a+"' on instance '"+f.type+"'");return e.call(f,c,d(this))}}return this._dispatchers[c]},_isValidInput:function(){return true},_handleKeyEvent:function(a){if(this._isValidInput(a)){var b=g.SpecialKey,c=
g.shortcutEntered(a);if(c){if(this.keys[c]){this.keys[c].call(this,a);return}if((c===b.BACKSPACE||c===b.DELETE)&&this.keys.onEdit){this.keys.onEdit.call(this,a);return}}(b=g.characterEntered(a))&&this.keys.onEdit&&this.keys.onEdit.call(this,a,b)}},getCustomEventName:function(a){return(this.CLASS_SIGNATURE||"")+"_"+a},_getCustomEventArgs:function(){return[this]},trigger:function(a){return l(a,this)},_supportsBoxShadow:function(){var a=e.body.style;return a.WebkitBoxShadow!==void 0||a.MozBoxShadow!==
void 0||a.boxShadow!==void 0},_setOptions:function(a){var b,c,a=a||{};if(a instanceof d||typeof a==="string"||typeof a==="object"&&a.nodeName)a={element:a};b=d(a.element);c=b.getOptionsFromAttributes();this.options=d.extend(true,this._getDefaultOptions(a),c,a);if(b.length===0)return this.INVALID},getCaret:function(a){var b=a.selectionStart;if(b>=0)return a.selectionEnd>b?-1:b;if(e.selection){b=e.selection.createRange();if(b.text.length===0){var c=b.duplicate();c.moveToElementText(a);c.setEndPoint("EndToStart",
b);return c.text.length}}return-1},_render:function(){var a,b=arguments[0],c=[];for(a=1;a<arguments.length;a++)c.push(arguments[a]);return this._renders[b].apply(this,c)}})});require("confluence/module-exporter").exportModuleAsGlobal("confluence/control","AJS.Control");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:jira-controls', location = '/includes/js/api/mouse.js' */
define("confluence/api/mouse",["jquery","window"],function(d,e){var b={MotionDetector:function(){this.reset()}};b.MotionDetector.prototype.reset=function(){this._y=this._x=this._handler=null;this.moved=!1};b.MotionDetector.prototype.wait=function(b){var a=this;a._handler||(this.reset(),d(e.top.document).bind("mousemove",a._handler=function(c){!a._x&&!a._y?(a._x=c.pageX,a._y=c.pageY):c.pageX===a._x&&c.pageY===a._y||(a.unbind(),a.moved=!0,b&&b.call(this,c))}))};b.MotionDetector.prototype.unbind=function(){this._handler&&
(d(e.top.document).unbind("mousemove",this._handler),this.reset())};return b});require("confluence/module-exporter").exportModuleAsGlobal("confluence/api/mouse","AJS.Mouse");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:jira-controls', location = '/includes/js/group.js' */
define("confluence/group",["confluence/control","confluence/api/logger","jquery"],function(d,e,c){return d.extend({init:function(){this.type=this.type||"Group";this.items=[];this.index=-1;this._assignEvents("instance",this)},addItem:function(a){this.items.push(a);this._assignEvents("item",a)},removeItem:function(a){var b=c.inArray(a,this.items);if(0>b)throw Error("Group: item ["+a+"] is not a member of this group");a.trigger("blur");b<this.index&&this.index--;this.items.splice(b,1);this._unassignEvents("item",
a)},removeAllItems:function(){for(var a=0;a<this.items.length;a++)this._unassignEvents("item",this.items[a]),this.items[a].trigger("blur");this.index=-1;this.items.length=0;this._unassignEvents("keys",document)},shiftFocus:function(a){e.debug("Group.shiftFocus called with offset: "+a);-1===this.index&&1===a&&(a=0);0<this.items.length&&(a=(Math.max(0,this.index)+this.items.length+a)%this.items.length,this.items[a].trigger("focus"))},prepareForInput:function(){this._assignEvents("keys",document)},_events:{instance:{focus:function(){0!==
this.items.length&&(0>this.index?this.items[0].trigger("focus"):this._assignEvents("keys",document))},blur:function(){0<=this.index?this.items[this.index].trigger("blur"):this._unassignEvents("keys",document)}},keys:{"keydown keypress":function(a){this._handleKeyEvent(a)}},item:{focus:function(a){var b=this.index;this.index=c.inArray(a.target,this.items);0>b?this.trigger("focus"):b!==this.index&&this.items[b].trigger("blur")},blur:function(a){this.index===c.inArray(a.target,this.items)&&(this.index=
-1,this.trigger("blur"))},remove:function(a){this.removeItem(a.target)}}},keys:{}})});require("confluence/module-exporter").exportModuleAsGlobal("confluence/group","AJS.Group");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:jira-controls', location = '/includes/js/select-grid.js' */
define("confluence/select-grid",["ajs","jquery","confluence/templates","confluence/group","confluence/control"],function(c,f,k,g,i){var g=g.extend({init:function(a){this.type=this.type||"SelectGrid";this._super();var b=f(k.SelectGrid.gridOutline()),d=b.find("thead tr");f(a.columns).each(function(a,b){var e=c("th").addClass(b.getClassName()).text(b.heading);d.append(e)});this.gridContainer=f(a.gridContainer).append(b);this.getRowId=a.getRowId;this.table=b;this.columns=a.columns;this.selectionCallback=
a.selectionCallback;this.body=b.find("tbody");this.body.delegate("a","click",function(a){a.preventDefault()});this.dontShiftFocus=a.dontShiftFocus||function(){}},keys:{up:function(a){this.table.is(":visible")&&!this.dontShiftFocus()&&(this.shiftFocus(-1),a.preventDefault())},down:function(a){this.table.is(":visible")&&!this.dontShiftFocus()&&(this.shiftFocus(1),a.preventDefault())}},_addRow:function(a,b,d,c){f.isFunction(d)&&(c=d,d=!1);d?this.body.prepend(a):this.body.append(a);a=new n({row:a,data:b,
callback:c,getRowId:this.getRowId,selectionCallback:c});this.addItem(a);return a},clear:function(){this.removeAllItems();this.body.children().remove()},_addRows:function(a,b){var d=this,g=[];f(a).each(function(a,e){var i=d.columns,h,j,l,m;h=c("tr");f(i).each(function(a,b){j={outerClass:b.getClassName(e)||"",href:b.getHref&&b.getHref(e)||"",innerClass:b.getInnerClass&&b.getInnerClass(e)||"",title:b.getTitle&&b.getTitle(e)||"",text:b.getText(e)||""};l=j.href?"cellWithLink":"cellWithoutLink";m=k.SelectGrid[l](j);
h.append(m)});h.attr("data-id",d.getRowId(e));g.push(d._addRow(h,e,b,d.selectionCallback))});return g},update:function(a){this.clear();!a||!a.length?c.debug("SelectGrid.update called with no data, returning."):(this._addRows(a),this.prepareForInput())},prependAndSelect:function(a,b){!a||!a.length?c.debug("SelectGrid.prependAndSelect called with no data, returning."):this._addRows(a,!0)[b||0].selectRow()},findItem:function(a){for(var b=0;b<this.items.length;b++)if(this.items[b].getRowId()==a)return this.items[b];
c.debug("SelectGrid.findItem didn't find item, returning null.");return null},select:function(a){(a=this.findItem(a))&&a.selectRow()},selectIndex:function(a){a=a||0;this.items[a]?this.items[a].selectRow():c.debug("SelectGrid.selectIndex couldn't select row with index "+a+", not found")},show:function(){this.gridContainer.removeClass("hidden")},hide:function(){this.gridContainer.addClass("hidden")},isVisible:function(){return!this.gridContainer.hasClass("hidden")}}),n=i.extend({init:function(a){this.type=
"SelectableRow";this.$row=f(a.row);this.$row.data("properties",a.data);this.getRowId=function(){return a.getRowId(a.data)};this.selectionCallback=a.selectionCallback;this._assignEvents("element",this.$row);this._assignEvents("instance",this);c.debug("SelectableRow initialized")},_events:{instance:{focus:function(){var a=this.$row;a.addClass("selected");this.selectionCallback(a,a.data("properties"))},blur:function(){this.$row.removeClass("selected")}},element:{click:function(){this.trigger("focus")}}},
selectRow:function(){this.trigger("focus")}});g.Column=function(a){var b=function(b){return b[a.key]};return{key:a.key,heading:a.heading,getClassName:a.getClassName||function(){return a.className||a.key+"-field"},getHref:a.getHref,getInnerClass:a.getInnerClass,getTitle:a.getTitle,getText:a.getText||b}};return g});require("confluence/module-exporter").exportModuleAsGlobal("confluence/select-grid","AJS.SelectGrid");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:jira-controls', location = '/includes/js/select-grid.soy' */
// This file was automatically generated from select-grid.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.SelectGrid.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.SelectGrid == 'undefined') { Confluence.Templates.SelectGrid = {}; }


Confluence.Templates.SelectGrid.gridOutline = function(opt_data, opt_ignored) {
  return '<table class="select-grid aui"><thead><tr class="data-table-header"></tr></thead><tbody></tbody></table>';
};
if (goog.DEBUG) {
  Confluence.Templates.SelectGrid.gridOutline.soyTemplateName = 'Confluence.Templates.SelectGrid.gridOutline';
}


Confluence.Templates.SelectGrid.cellWithLink = function(opt_data, opt_ignored) {
  return '<td class="' + soy.$$escapeHtml(opt_data.outerClass) + '"><a class="' + soy.$$escapeHtml(opt_data.innerClass) + '" href="' + soy.$$escapeHtml(opt_data.href) + '" title="' + soy.$$escapeHtml(opt_data.title) + '"><span>' + soy.$$escapeHtml(opt_data.text) + '</span></a></td>';
};
if (goog.DEBUG) {
  Confluence.Templates.SelectGrid.cellWithLink.soyTemplateName = 'Confluence.Templates.SelectGrid.cellWithLink';
}


Confluence.Templates.SelectGrid.cellWithoutLink = function(opt_data, opt_ignored) {
  return '<td class="' + soy.$$escapeHtml(opt_data.outerClass) + '"><span class="' + soy.$$escapeHtml(opt_data.innerClass) + '" title="' + soy.$$escapeHtml(opt_data.title) + '">' + soy.$$escapeHtml(opt_data.text) + '</span></td>';
};
if (goog.DEBUG) {
  Confluence.Templates.SelectGrid.cellWithoutLink.soyTemplateName = 'Confluence.Templates.SelectGrid.cellWithoutLink';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'confluence.web.resources:jira-controls', location = '/includes/js/result-grid.js' */
define("confluence/result-grid",["ajs","jquery","confluence/control"],function(f,e,l){return l.extend({init:function(a){this.type=this.type||"ResultGrid";var c,g,k,h,j,d,i;g=a.gridContainer||e(a.baseElement).find(".data-table");g.length||f.debug("gridContainer for AJS.ResultGrid not found!");k=function(b){return b.id};c=new f.SelectGrid({gridContainer:g,columns:a.columns,selectionCallback:a.selectionCallback,getRowId:a.getRowId||k,dontShiftFocus:a.dontShiftFocus});d=a.messageHandler||f.MessageHandler({baseElement:e(a.baseElement).find(".message-panel")});
i=a.noResultMessage||"There are no results.";e.extend(this,{update:function(b,a){d.clearMessages();h&&(h(),j.remove(),h=null);c.clear();if(!b||!b.length){c.hide();var m=e.isFunction(i)?i(a):i;d.displayMessages(m);return!1}c.update(b);c.show();return!0},updateAndSelect:function(b,c,a){this.update(b,c)&&this.selectIndex(a)},prependAndSelect:function(b,a){!b||!b.length?f.debug("ResultGrid.prependAndSelect called with no data, returning."):(d.clearMessages(),c.prependAndSelect(b,
a),c.show())},select:function(b){c.select(b)},selectIndex:function(b){c.selectIndex(b)},clear:function(){d.clearMessages();c.hide()},loading:function(){c.show();var b=g.width(),a=g.height();this.clear();if(!h){var d,e;d=b/2-73;e=a/2-73;j=f("div").addClass("spinner-container").width(b-d).height(a-e).css({"padding-left":d,"padding-top":e}).insertAfter(g);h=Raphael.spinner(j[0],60,"#666")}},isVisible:function(){return c.isVisible()}})}})});
require("confluence/module-exporter").exportModuleAsGlobal("confluence/result-grid","AJS.ResultGrid");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
