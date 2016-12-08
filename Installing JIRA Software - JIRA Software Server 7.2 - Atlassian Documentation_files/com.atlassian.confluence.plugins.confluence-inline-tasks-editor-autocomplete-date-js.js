;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:editor-autocomplete-date-js', location = '/js/editor-plugin/date-autocomplete-help-dialog.js' */
AJS.toInit(function(){if(!(Confluence.KeyboardShortcuts&&Confluence.KeyboardShortcuts.Autoformat)){return}Confluence.KeyboardShortcuts.Autoformat.push({action:"//",context:"autoformat.autocomplete",description:"Date"})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:editor-autocomplete-date-js', location = '/js/editor-plugin/autocomplete-manager.js' */
(function(d){var e=window.Confluence||{};e.Editor=e.Editor||{};e.Editor.AutoComplete=e.Editor.AutoComplete||{};var b=e.InlineTasks.Util.KEY,a=e.InlineTasks.DateUtil,c=e.Editor.AutoComplete;c.SETTING_DEFAULT={leadingChar:"",isDataValid:function(f){return false},backWords:0,onBeforeDie:function(){},onAfterStart:function(){},onScroll:function(){}};c.Manager=function(f){this.ed=AJS.Rte.getEditor();this.settings=d.extend({},c.SETTING_DEFAULT,f);this.log=AJS.debug;this.control=null};c.Manager.prototype={start:function(f){this.log("startAutoComplete - Started");var g=d.extend({},this.settings,f);this.control=e.Editor.Autocompleter.Control(this.ed,g);if(!this.control){return false}this.attachEventsToControl();g.onAfterStart&&g.onAfterStart({date:f.date,isTriggerFromOrphan:f.isTriggerFromOrphan?true:false});return true},attachEventsToControl:function(){var i=this,l=i.control,h=i.log,g=i.settings;if(typeof this.settings.onBeforeDie==="function"){var k=this.control.die;this.control.die=function(){i.settings.onBeforeDie.apply(i.control,arguments);if(i.dateInserted()){k.apply(i.control,[true]);AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.daterecognition.killed"})}else{k.apply(i.control,arguments)}}}var f=_.bind(_.throttle(i.settings.onScroll,40),this);var j={onBeforeKey:function(m,n){if(m.keyCode!==b.ESCAPE&&m.keyCode!==b.ENTER){i.control&&i.control.getContainer().addClass("isDirty")}if(m.keyCode===b.DOWN||m.keyCode===b.UP||m.keyCode===b.ENTER){tinymce.dom.Event.cancel(m);return false}if(m.keyCode===b.ESCAPE||m.keyCode===b.TAB||m.keyCode===b.BACKSPACE&&!n){h("autoCompleteControl.onBeforeKey - killing autoCompleteControl");this.die(m.keyCode===b.BACKSPACE);return false}return true},onKeyPress:function(p,q){var n=AJS.$.browser.msie?p.keyCode:p.which;if(p.keyCode===b.ENTER){tinymce.dom.Event.cancel(p);return false}var o=String.fromCharCode(n),m=AJS.indexOf(this.settings.endChars,o);if(m>=0){h("autoCompleteControl.onKeyPress - caught autocomplete-closing char - character");l.die()}return true},onAfterKey:function(o,p){var n=d("#autocomplete-trigger",i.control.getContainer()),m=n.text();if(n.length>0&&m!==i.settings.leadingChar){h("after","dying because of: trigger text is modified");i.reset();return false}if(o.keyCode===b.ENTER){if(g.isDataValid(p)){l.update(p)}else{h("autoCompleteControl.onAfterKey - closing autocomplete due to invalid data - "+p);l.die(false)}return false}if(i.dateInserted()&&(p.length>10)&&(!a.parse(p,[a.PATTERN_INSERTING,a.PATTERN_INSERTING_ALTERNATE]))){i.reset();return false}if(o.keyCode===b.SPACE){i.reset();return false}return true},onDeath:function(){i.reset()},onScroll:function(){if(!i.isAlive()){return}f()}};d.extend(l,j)},isAlive:function(){return this.control&&!this.control.dying},reset:function(){if(!this.control){return}this.control.die();this.control=null},dateInserted:function(f){if(f===true){return this.control.getContainer().addClass("hasDateInserted")}else{if(f===false){return this.control.getContainer().removeClass("hasDateInserted")}else{return this.control.getContainer().hasClass("hasDateInserted")}}},dirty:function(f){if(f===true){return this.control.getContainer().addClass("isDirty")}else{return this.control.getContainer().hasClass("isDirty")}},reattach:function(){var f=e.Editor.Autocompleter.Control.removeOrphanedControl();if(f&&f.leadingChar===this.settings.leadingChar){this.reset();return this.start({backWords:1,isTriggerFromOrphan:true})}return false}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:editor-autocomplete-date-js', location = '/js/editor-plugin/date-autocomplete.js' */
(function(h,e){var q="dateautocomplete",m="tinymce.plugins.DateAutocomplete",p="mceConfInsertDateAutocomplete",k="//";var r=Confluence.InlineTasks.Util,n=r.NODE_TYPE,d=r.KEY,a=Confluence.InlineTasks.DateUtil,g=null,o=null,b=false,i=e.dom.TreeWalker;var j={initDateAutoCompleteObject:function(s){if(!Confluence.Editor.Autocompleter){Confluence.Editor.Autocompleter=e.confluence.Autocompleter}Confluence.Editor.Autocompleter.Settings[k]={ch:k,endChars:[],update:function(w,v){o.picker.die();var u=(v==a.PATTERN_INSERTING.toLowerCase())?moment():a.guessPartialDate(v,a.PATTERN_INSERTING);u&&a.insertDateIntoCurrentCursor(u,"<time>","",a.PATTERN_LOZENGE,"&nbsp;");if(o.dateInserted()){AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.daterecognition.used"})}o.reset();s.undoManager.add()}};var t={leadingChar:k,isDataValid:function(u){return !o.dirty()||a.guessPartialDate(u,a.PATTERN_INSERTING)!=null},onBeforeDie:function(){o.picker&&o.picker.die();if(o.control){var u=h(o.control.getContainer());if(!o.dirty()){u.find("#autocomplete-search-text").remove()}}},onAfterStart:function(v){if(v&&v.date){j.fillPlaceholderDateAutoComplete(s,v.date,true);o.dirty(true);o.dateInserted(true)}else{if(v&&!v.isTriggerFromOrphan){j.fillPlaceholderDateAutoComplete(s,a.PATTERN_INSERTING.toLowerCase(),false);o.dateInserted(false)}}var u=o.control.text();var w=a.guessPartialDate(u,a.PATTERN_INSERTING)||moment();j.bindDatePickerToAutoComplete(w)},onScroll:function(){o.picker&&o.picker.placeDatePicker()}};o=new Confluence.Editor.AutoComplete.Manager(t)},activateDateAutocomplete:function(u,t){if(!o.isAlive()){var s=o.start(t);if(!s){g.execCommand("mceInsertContent",false,k,{skip_undo:true});return false}}},bindDatePickerToAutoComplete:function(v){var s=o.control&&o.control.getContainer();if(!s.length){return}s.addClass("date-autocomplete");s.find("#autocomplete-search-text span").addClass("inserting");var u=function(w){o.control.update(w.format(a.PATTERN_INSERTING))},t=j.isInsideTaskAndFirstTimeNode(s);o.picker=a.datepicker.create({$attachTo:s,$positionTo:s,startDate:v,onSelect:u,isSetDueDate:t})},fillPlaceholderDateAutoComplete:function(t,w,v){var s=o.control.getContainer().find("#autocomplete-search-text span");s.text(AJS.Rte.HIDDEN_CHAR+w);var u=t.dom.createRng();u.setStart(s[0].firstChild,1);u.setEnd(s[0].firstChild,w.length+1);v&&u.collapse(false);t.selection.setRng(u)},autocompleteDoubleSlash:function(x,w){var u=w.handlerManager,t=w.ed,v=w.createHandler;var s=v(/(?:\s|\xA0|^|\ufeff|\u200b)(\/)$/,function(){t.execCommand(p,false,{},{skip_undo:true})},true,"#autocomplete");u.registerHandler("/".charCodeAt(0),s)},registerTriggerDoubleSlash:function(s){s.addCommand(p,j.activateDateAutocomplete);AJS.bind("confluence.editor.registerHandlers",this.autocompleteDoubleSlash)},isTimeNode:function(s){return s&&s.nodeType===n.ELEMENT_NODE&&s.tagName.toLowerCase()==="time"},getTimeNodeAtCursor:function(s){if(!s){s=g}var t=s.selection.getNode();if(j.isTimeNode(t)){return t}t=s.selection.getStart();if(j.isTimeNode(t)){return t}t=s.selection.getEnd();if(j.isTimeNode(t)){return t}},makeTimeNodesUnEditable:function(s){s.each(function(){var t=h(this);if(h.trim(t.text())===""){t.remove()}e.isWebKit&&t.remove("br.Apple-interchange-newline");r.addContentEditableIfApplicable(this)})},wrapTimeNodesWithHiddenChar:function(s){s.each(function(){var t=h(this);if(!this.previousSibling||this.previousSibling.nodeType!==n.TEXT_NODE||this.previousSibling.nodeValue===""){t.before(AJS.Rte.HIDDEN_CHAR)}if(!this.nextSibling||this.nextSibling.nodeType!==n.TEXT_NODE||this.previousSibling.nodeValue===""){t.after(AJS.Rte.HIDDEN_CHAR)}})},putCursorAtEdge:function(t,v,s){s=!!s;if(s){if(!v.nextSibling||v.nextSibling.nodeType!==n.TEXT_NODE){h(v).after(t.dom.doc.createTextNode(""))}}else{if(!v.previousSibling||v.previousSibling.nodeType!==n.TEXT_NODE){h(v).before(t.dom.doc.createTextNode(""))}}var u=t.selection.dom.createRng();u.selectNode(s?v.nextSibling:v.previousSibling);u.collapse(s);t.selection.setRng(u)},findFirstTimeNodeInClosestBlock:function(t,y,v){var x=new i(y,t.getBody());var w=y,u=0;do{if(u==1&&j.isTimeNode(y)){return y}var s=v?y.previousSibling:y.nextSibling;if(y!==w&&s&&(t.dom.isBlock(y)||t.dom.isBlock(s))){u++}}while((y=v?x.next():x.prev())&&u<2)},findFirstTimeNodeNearby:function(s,w,t){var v=w;var u=new i(w,s.getBody());do{if(j.isTimeNode(w)){return w}if(s.dom.isBlock(w)||(w!==v&&w.nodeType===n.TEXT_NODE&&w.nodeValue!=="")){return}}while(w=t?u.next():u.prev())},convertInvalidTimeNodeToPlainText:function(s){s.each(function(){var v=h(this);var t=v.attr("datetime");var u=a.parse(t);if(!u){v.before(v.text());v.remove()}})},isInsideTaskAndFirstTimeNode:function(t){var s=h(t),u=s.closest("ul.inline-task-list > li[data-inline-task-id]");if(!u.length){return false}return u.find("time, span.date-autocomplete")[0]===s[0]}};var c={handleRemoveDateLozenge:function(t,z){var y=z.keyCode;if(y!==d.BACKSPACE&&y!==d.DELETE){return}var w=(y===d.DELETE),s=t.selection.getRng(true),u=s.startContainer,v=u;if(u.nodeType==n.TEXT_NODE&&(w?s.startOffset!=u.nodeValue.length:s.startOffset!=0)){return}if(u.nodeType===n.ELEMENT_NODE){if(w){v=(u.childNodes.length===s.startOffset)?u:u.childNodes.item(s.startOffset)}else{v=(s.startOffset===0)?u:u.childNodes.item(s.startOffset-1)}}var x=j.findFirstTimeNodeNearby(t,v,w);x&&t.dom.remove(x)},handleClickingDateLozenge:function(x,A){var u=h(A.target);if(!u.is("time")){return}var s=(u.closest("li[data-inline-task-id]").length)?"task":"page";var v={mode:"editor",context:s};AJS.trigger("analyticsEvent",{name:"confluence-spaces.date.clicked",data:v});var D=u.closest("body");var z=function(){AJS.Rte.unbindScroll("date-lozenge-date-picker");y.die()};D.one("keydown click",z);var C=function(F){var G=F.format(a.PATTERN_INSIDE_TIME_ELE);var E=F.format(a.PATTERN_LOZENGE);if(G!==u.attr("datetime")){var H={context:s};AJS.trigger("analyticsEvent",{name:"confluence-spaces.date.changed",data:H})}u.attr("datetime",G);u.text(E);D.unbind("keydown click",z)};var t=a.parse(u.attr("datetime")),w=j.isInsideTaskAndFirstTimeNode(u),y=a.datepicker.create({$attachTo:u,$positionTo:u,startDate:t,onSelect:C,isSetDueDate:w});var B=_.bind(_.throttle(function(){if(y&&AJS.Rte.isAnyPartShown(u)){y.placeDatePicker()}else{z()}},40),this);AJS.Rte.bindScroll("date-lozenge-date-picker",B)},handleTypingDate:function(t,v){var u=v.keyCode;if(u===d.UP||u===d.DOWN||u===d.LEFT||u===d.RIGHT||u===d.HOME||u===d.END||u===d.PAGEDOWN||u===d.PAGEUP||v.metaKey||v.ctrlKey||v.altKey){return}if(o.control&&o.picker){var s=o.control.text();o.picker.setDate(s)}},handleOnLoadContent:function(s){var u=h(s.dom.doc),t=u.find("time");j.makeTimeNodesUnEditable(t);j.wrapTimeNodesWithHiddenChar(t)},handlePostPaste:function(t,s,u){j.convertInvalidTimeNodeToPlainText(h(u.node).find("time"))},handlePostPasteContent:function(u,s,v){var t=h(v.node).find("time");j.makeTimeNodesUnEditable(t)},handlePrePasteContent:function(t,s,u){if(j.getTimeNodeAtCursor(g)){u.content="";return false}},fixWhenUpDownNavOnList:function(t,z){var v=z.keyCode;if(v!==d.UP&&v!==d.DOWN){return}var s=t.selection.getRng(true),u=s.startContainer,w=u,x=v===d.DOWN;if(u.nodeType===n.ELEMENT_NODE){if(x){w=(u.childNodes.length===s.startOffset)?u:u.childNodes.item(s.startOffset)}else{w=(s.startOffset===0)?u:u.childNodes.item(s.startOffset-1)}}var y=j.findFirstTimeNodeInClosestBlock(t,w,x);if(y){j.wrapTimeNodesWithHiddenChar(h(y))}},preventCursorInsideDateLozenge:function(t,s,v){var u=(v.nodeType===n.TEXT_NODE)?v.parentNode:v;if(j.isTimeNode(u)){if(b||t.selection.getRng().startOffset>1){j.putCursorAtEdge(t,u,true)}else{j.putCursorAtEdge(t,u,false)}}},handleUndoRedo:function(){o&&o.reattach()}};var f={init:function(s){j.initDateAutoCompleteObject(s);j.registerTriggerDoubleSlash(s);g=s;s.onContextMenu.add(function(){o.reset()});s.onSetContent.add(c.handleOnLoadContent);s.onClick.add(c.handleClickingDateLozenge);s.onKeyUp.add(c.handleTypingDate);if(e.isWebKit){s.onKeyDown.add(c.fixWhenUpDownNavOnList);s.onInit.add(function(){h(document).bind("postPaste",c.handlePostPasteContent)});s.onRemove.add(function(){h(document).unbind("postPaste",c.handlePostPasteContent)})}s.onKeyUp.add(function(y,A){b=(A.keyCode===d.RIGHT);var x=y.selection.getRng(true);var w=x.commonAncestorContainer;var z=!!w&&w.data;if(!!z&&!AJS.$(w).closest("pre,.text-placeholder").length){var B=String.prototype.slice.apply(z,[-11]);if((A.keyCode>=48&&A.keyCode<=57)||(A.keyCode>=96&&A.keyCode<=105)){var t=/(^| )\d{2}[\/\-]\d{2}[\/\-]\d{4}$/;var v=String.prototype.slice.apply(z,[-10]);if(t.test(z)&&a.parse(v,[a.PATTERN_INSERTING,a.PATTERN_INSERTING_ALTERNATE])){var u=x.commonAncestorContainer;x.setStart(u,x.endOffset-v.length);y.undoManager.add();y.undoManager.beforeChange();y.selection.setRng(x);y.execCommand("mceConfInsertDateAutocomplete",false,{date:v},{skip_undo:true});AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.daterecognition.triggered"})}}}});if(e.isGecko){s.onKeyDown.add(c.handleRemoveDateLozenge);s.onInit.add(function(){h(document).bind("prePaste",c.handlePrePasteContent)});s.onRemove.add(function(){h(document).unbind("prePaste",c.handlePrePasteContent)})}if(e.isWebKit||e.isGecko){s.onNodeChange.add(c.preventCursorInsideDateLozenge)}s.onUndo.add(c.handleUndoRedo);s.onRedo.add(c.handleUndoRedo);s.onInit.add(function(){h(document).bind("postPaste",c.handlePostPaste)});s.onRemove.add(function(){h(document).unbind("postPaste",c.handlePostPaste);AJS.unbind("confluence.editor.registerHandlers",j.autocompleteDoubleSlash)})},getInfo:function(){return{longname:"Insert Date Autocomplete",author:"Atlassian",authorurl:"http://www.atlassian.com",version:e.majorVersion+"."+e.minorVersion}}};function l(){e.create(m,f);e.PluginManager.add(q,e.plugins.DateAutocomplete);AJS.Rte.BootstrapManager.addTinyMcePluginInit(function(s){s.plugins+=","+q})}l()})(AJS.$,tinymce);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
