;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-view-resources', location = 'view/roadmap-editor/templates.soy' */
// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Roadmap.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Roadmap == 'undefined') { Confluence.Templates.Roadmap = {}; }


Confluence.Templates.Roadmap.roadmapPopupPanel = function(opt_data, opt_ignored) {
  return '<div id=\'' + soy.$$escapeHtml(opt_data.roadmapPopupPanelId) + '\'></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.roadmapPopupPanel.soyTemplateName = 'Confluence.Templates.Roadmap.roadmapPopupPanel';
}


Confluence.Templates.Roadmap.roadmapEditor = function(opt_data, opt_ignored) {
  return '<div id="roadmap-editor-edit-area"><div id="roadmap-editor-edit-content"><!-- START GENERATE ROADMAP --><div id="roadmap-container"><div class="roadmap-drag-area"></div><div class="roadmap-frame"><div class="roadmap-marker"></div></div><div class="roadmap-content"></div></div><!-- END GENERATE ROADMAP --></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.roadmapEditor.soyTemplateName = 'Confluence.Templates.Roadmap.roadmapEditor';
}


Confluence.Templates.Roadmap.lane = function(opt_data, opt_ignored) {
  return '<div class="roadmap-lane-title" style="background-color: ' + soy.$$escapeHtml(opt_data.color.lane) + '; color: ' + soy.$$escapeHtml(opt_data.color.text) + '" title="' + soy.$$escapeHtml(opt_data.title) + '"><div class="title-outer"><div class="title-inner">' + soy.$$escapeHtml(opt_data.title) + '</div></div></div><div class="roadmap-separate-content">&nbsp;</div><div class="roadmap-lane-content"></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.lane.soyTemplateName = 'Confluence.Templates.Roadmap.lane';
}


Confluence.Templates.Roadmap.marker = function(opt_data, opt_ignored) {
  return '<div class="marker-drag-placeholder" /><div class="marker-title-wrapper"><span class="marker-title" title="' + soy.$$escapeHtml(opt_data.title) + '">' + soy.$$escapeHtml(opt_data.title) + '</span></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.marker.soyTemplateName = 'Confluence.Templates.Roadmap.marker';
}


Confluence.Templates.Roadmap.bar = function(opt_data, opt_ignored) {
  return '<p class="roadmap-bar-title">' + soy.$$escapeHtml(opt_data.title) + '</p>';
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.bar.soyTemplateName = 'Confluence.Templates.Roadmap.bar';
}


Confluence.Templates.Roadmap.newRowLine = function(opt_data, opt_ignored) {
  return '<hr class="new-row-line" />';
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.newRowLine.soyTemplateName = 'Confluence.Templates.Roadmap.newRowLine';
}


Confluence.Templates.Roadmap.deprecationDialog = function(opt_data, opt_ignored) {
  return '<section role="dialog" id="' + soy.$$escapeHtml(opt_data.id) + '" class="aui-layer aui-dialog2 aui-dialog2-medium" aria-hidden="true"><header class="aui-dialog2-header"><h1 class="aui-dialog2-header-main">' + soy.$$escapeHtml("Macro unavailable") + '</h1></header><div class="aui-dialog2-content">' + soy.$$filterNoAutoescape("\x3cp\x3eThe roadmap macro has been deprecated as of version 12. You can still view your existing roadmap macros but you will no longer be able to edit them or create new ones.\x3c/p\x3e\x3cp\x3ePlease use our new Roadmap Planner macro to plan your roadmap.\x3c/p\x3e") + '<div class="new-roadmap-thumb"></div></div><footer class="aui-dialog2-footer"><div class="aui-dialog2-footer-actions"><button id="dialog-close-button" class="aui-button aui-button-link">' + soy.$$escapeHtml("Close") + '</button></div></footer></section>';
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.deprecationDialog.soyTemplateName = 'Confluence.Templates.Roadmap.deprecationDialog';
}


Confluence.Templates.Roadmap.newRowPlaceholder = function(opt_data, opt_ignored) {
  return '<hr class= "new-row-placeholder" />';
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.newRowPlaceholder.soyTemplateName = 'Confluence.Templates.Roadmap.newRowPlaceholder';
}


Confluence.Templates.Roadmap.laneDialog = function(opt_data, opt_ignored) {
  return '' + aui.buttons.button({id: 'add-bar-button', type: 'subtle', iconType: 'aui', extraClasses: 'aui-button-compact', text: '', extraAttributes: {title: "Add bar"}, iconClass: 'aui-icon-small aui-iconfont-add'}) + aui.buttons.button({id: 'rename-button', type: 'subtle', iconType: 'aui', extraClasses: 'aui-button-compact', text: '', extraAttributes: {title: "Rename lane"}, iconClass: 'aui-icon-small aui-iconfont-edit'}) + Confluence.Templates.Roadmap.laneColorSelect(opt_data) + ((opt_data.canDelete) ? aui.buttons.button({id: 'delete-button', type: 'subtle', iconType: 'aui', extraClasses: 'aui-button-compact', text: '', extraAttributes: {title: "Delete lane"}, iconClass: 'aui-icon-small delete-icon'}) : '');
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.laneDialog.soyTemplateName = 'Confluence.Templates.Roadmap.laneDialog';
}


Confluence.Templates.Roadmap.markerDialog = function(opt_data, opt_ignored) {
  return '' + aui.buttons.button({id: 'rename-button', type: 'subtle', iconType: 'aui', extraClasses: 'aui-button-compact', text: '', extraAttributes: {title: "Rename marker"}, iconClass: 'aui-icon-small aui-iconfont-edit'}) + aui.buttons.button({id: 'delete-button', type: 'subtle', iconType: 'aui', extraClasses: 'aui-button-compact', text: '', extraAttributes: {title: "Delete marker"}, iconClass: 'aui-icon-small delete-icon'});
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.markerDialog.soyTemplateName = 'Confluence.Templates.Roadmap.markerDialog';
}


Confluence.Templates.Roadmap.markerRenameDialog = function(opt_data, opt_ignored) {
  return '' + aui.form.form({action: '', content: '' + aui.form.input({extraClasses: 'marker-title', name: 'marker-title', type: 'text', value: opt_data.markerTitle}) + aui.buttons.button({extraClasses: 'rename-button', text: "Save"})});
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.markerRenameDialog.soyTemplateName = 'Confluence.Templates.Roadmap.markerRenameDialog';
}


Confluence.Templates.Roadmap.laneRenameDialog = function(opt_data, opt_ignored) {
  return '' + aui.form.form({action: '', content: '' + aui.form.input({extraClasses: 'lane-title', name: 'lane-title', type: 'text', value: opt_data.laneTitle}) + aui.buttons.button({extraClasses: 'rename-button', text: "Save"})});
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.laneRenameDialog.soyTemplateName = 'Confluence.Templates.Roadmap.laneRenameDialog';
}


Confluence.Templates.Roadmap.laneColorSelect = function(opt_data, opt_ignored) {
  var output = '<a id="lane-color-select" href="#" aria-owns="lane-color-picker" aria-haspopup="true" class="aui-button aui-button-subtle aui-button-compact aui-dropdown2-trigger aui-style-default" title="' + soy.$$escapeHtml("Lane color") + '"><span class="color-item" style="background-color: ' + soy.$$escapeHtml(opt_data.laneColor) + ';">&nbsp;</span></a></a><div id="lane-color-picker" class="aui-dropdown2"><ul class="aui-list-truncate">';
  var colorList120 = opt_data.colors;
  var colorListLen120 = colorList120.length;
  for (var colorIndex120 = 0; colorIndex120 < colorListLen120; colorIndex120++) {
    var colorData120 = colorList120[colorIndex120];
    output += '<li class="color-display-item"><a href="#" ><span class="color-item ' + ((colorData120.lane == opt_data.laneColor) ? 'aui-icon aui-icon-small aui-iconfont-success' : '') + '" style="background-color: ' + soy.$$escapeHtml(colorData120.lane) + ';"></span></a></li>';
  }
  output += '</ul></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.laneColorSelect.soyTemplateName = 'Confluence.Templates.Roadmap.laneColorSelect';
}


Confluence.Templates.Roadmap.linkPageTitle = function(opt_data, opt_ignored) {
  return '<span class="link-page-title" />';
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.linkPageTitle.soyTemplateName = 'Confluence.Templates.Roadmap.linkPageTitle';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-view-resources', location = 'view/roadmap-editor/bar/bar.js' */
(function(b,a){Roadmap.BarView=Backbone.View.extend({className:"roadmap-bar",events:{click:"_showDialog",dragstart:"_onDragstart",dragstop:"_onDragStop",dropover:"_onDropOver",dropout:"_onDropOut"},attributes:function(){return{cid:this.cid}},initialize:function(){a.bindAll(this,"render","_updateBar","_beforeResize","updateMaxWidth","_deleteBar","_updateTitle");this._addEvents()},_addEvents:function(){var c=this;this.$el.draggable({opacity:0.3,cursor:"move",appendTo:".roadmap-drag-area",snap:".roadmap-bar-row, .new-bar-row",snapMode:"inner",snapTolerance:17,scroll:true,zIndex:4020,helper:function(){return c.$el.clone().addClass("roadmap-bar-clone").data("View",c)}});this.$el.droppable({accept:".roadmap-bar",tolerance:"touch",hoverClass:"bar-hover-bar"});this.$el.data("View",this)},render:function(){this.updateColor(this.options.color);var c=this.options.timelineView.getBarPosition(this.model.attributes);this.$el.css({left:c.left+"px",width:c.width+"px"});this.$el.attr("title",this.model.get("title"));this.$el.append(Confluence.Templates.Roadmap.bar({title:this.model.get("title")}));this.$el.resizable({handles:"e, w",minWidth:Roadmap.barMinWidth,start:this._beforeResize,stop:this._updateBar});return this},updateMaxWidth:function(d){this.$el.resizable("option","maxWidth",d);var c=this.$el.resizable("option","minWidth");if(d<c){this.$el.resizable("option","minWidth",d)}},_beforeResize:function(d,c){this._barDialog&&this._barDialog.remove();this.trigger("beforeResize",this,this._checkHandleDirection(d))},_checkHandleDirection:function(c){var d=b(c.toElement?c.toElement:c.originalEvent.target);if(d.hasClass("ui-resizable-w")){return"left"}else{if(d.hasClass("ui-resizable-e")){return"right"}}throw"Unsupport resize direction handling = "+d},_updateBar:function(d,c){if(c.originalPosition.left!=c.position.left){this.model.set({startDate:this.options.timelineView.getBarStartDate(c.position.left),duration:this.options.timelineView.getBarDuration(c.element.outerWidth())})}else{if(c.originalSize.width!=c.size.width){this.model.set("duration",this.options.timelineView.getBarDuration(c.element.outerWidth()))}}},appendTo:function(c){this.$el.appendTo(c)},updateColor:function(c){this.$el.css({"background-color":c.bar,"border-color":c.lane,color:c.text})},updatePositionLeft:function(c){this.$el.css("left",c)},_onDragStop:function(d,c){this.options.lane.cleanLaneAfterDrop();this.$el.trigger("BarView.dragstop")},updateDeleteBar:function(c){this.options.deleteBar=c},_showDialog:function(c){if(!b(c.target).is(".ui-resizable-handle")){this._barDialog&&this._barDialog.remove();this._barDialog=this._createDialog();this._barDialog.show();Confluence.Roadmap.Analytics.openBarDialogInEdit()}},_createDialog:function(){return new Roadmap.BarDialogView({trigger:this.$el,model:this.model,timelineWidth:this.options.timelineView.$el.width(),renderOption:{isEditMode:true,editInplace:{title:true,pageLink:true,description:true}},linkPageEditable:true,deleteBar:this._deleteBar,updateTitle:this._updateTitle,updateDescription:this._updateDescription,updatePageLink:this._updatePageLink,createLinkPageCallback:this._goToCreateLinkPage})},_deleteBar:function(){this.options.deleteBar(this)},_updateTitle:function(c){this.model.set("title",c);this.$el.attr("title",c);this.$el.find(".roadmap-bar-title").html(AJS.escapeHtml(c))},_updateDescription:function(c){this.model.set("description",c)},_updatePageLink:function(c){this.model.set("pageLink",c)},_onDragstart:function(d,c){Roadmap.DragDrop.barDraggingOver={};this.$el.trigger("BarView.dragstart",[c])},_onDropOver:function(d,c){Roadmap.DragDrop.barDraggingOver[this.cid]=this.cid;if(Roadmap.DragDrop.barDraggingOver&&c.helper.data("isAddingNewRow")!==true){c.helper.addClass("roadmap-bar-overlapped")}},_onDropOut:function(f,d){var c=this;delete Roadmap.DragDrop.barDraggingOver[c.cid];d.helper.removeClass("roadmap-bar-overlapped");a.each(Roadmap.DragDrop.barDraggingOver,function(g){var e=d.helper.data("isAddingNewRow")!==true;if(e){if(typeof g==="string"){d.helper.addClass("roadmap-bar-overlapped")}else{if(g.className==="roadmap-bar-row"){g.$el.addClass("roadmap-bar-drag-hover")}}}})},_goToCreateLinkPage:function(f){f.preventDefault();var e=this.me;var c=parseInt(AJS.Meta.get("page-id"));var d=c>0?c:AJS.Meta.get("parent-page-id");var g={roadmapBarId:e.model.id,roadmapContentId:d,updateRoadmap:false};Confluence.RoadmapLink.addCreateLinkPageListener(g,function(i){var h=e._updatePageLink(i.pageLink);e.fields.$pageLink.html(h)})}})})(AJS.$,window._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-view-resources', location = 'view/roadmap-editor/bar/bar-row.js' */
(function(b,a){Roadmap.BarRowView=Backbone.View.extend({className:"roadmap-bar-row",initialize:function(){a.bindAll(this,"_addEvents");this._addEvents();return this},attributes:function(){return{cid:this.cid}},_addEvents:function(){var c=this;this.$el.droppable({greedy:true,tolerance:"pointer",hoverClass:"roadmap-bar-drag-hover",activeClass:"roadmap-bar-drag-active",accept:".roadmap-bar",over:function(f,d){Roadmap.DragDrop.barDraggingOver[c.cid]=c;if(d.helper.data("isAddingNewRow")!==true){var g=b(this);g.closest(".roadmap-content").find(".new-row-placeholder").remove()}else{c.$el.removeClass("roadmap-bar-drag-hover")}},out:function(){var d=b(this);delete Roadmap.DragDrop.barDraggingOver[c.cid];d.closest(".roadmap-content").find(".new-row-placeholder").remove()},drop:function(g,f){var d=a.reject(Roadmap.DragDrop.barDraggingOver,function(e){return(typeof e==="object")}).length>0;if(!f.helper.hasClass("roadmap-bar-overlapped")&&!d){b(this).trigger("BarView.drop",[{$barViewHelper:f.helper,$barViewOriginal:f.draggable,$barRow:b(this)},f])}}})},isEmptyRow:function(){return this.$el.is(":empty")}})})(AJS.$,window._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-view-resources', location = 'view/roadmap-editor/bar/bar-row-new.js' */
(function(b,a){Roadmap.BarRowNewView=Backbone.View.extend({className:"new-bar-row",overlayTop:3,margin:5,events:{drop:"_onDrop",dropover:"_onDropOver",dropout:"_onDropOut"},initialize:function(){a.bindAll(this,"render","_addEvent");return this},render:function(){this.$el.append(Confluence.Templates.Roadmap.newRowLine());this._addEvent();this._setSizePosition();return this},_addEvent:function(){this.$el.droppable({accept:".roadmap-bar",tolerance:"pointer",hoverClass:"new-bar-row-hover"})},_setSizePosition:function(){var f=this.options.$barRow;var c=this.options.renderBottom===false?(this.margin*-1):f.height();var e=f.index()===0;var d=(e)?this.overlayTop+this.margin:this.overlayTop;this.$el.css({top:f.position().top+c-d,width:f.width()})},_onDrop:function(d,c){this.$el.trigger("BarView.drop",[{barRowNewView:this},c])},_onDropOver:function(d,c){this.$el.trigger("BarRowNew.dropover",[this,c])},_onDropOut:function(d,c){this.$el.trigger("BarRowNew.dropout",[this,c])}})})(AJS.$,window._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-view-resources', location = 'view/roadmap-editor/lane-dialog/lane-dialog.js' */
(function(c,a){var b=Roadmap.InlineDialogView;Roadmap.LaneDialogView=b.extend({events:{"click #delete-button":"_onDeleteClick","click #rename-button":"_onRenameClick","click #add-bar-button":"_onAddBarClick"},initialize:function(){a.bindAll(this,"_onHide");this.options.dialogOptions={width:this._getDialogWidth(),hideCallback:this._onHide};b.prototype.initialize.call(this,this.options)},_getContent:function(d){var g=this.options.lane.model.get("color").lane;d.html(Confluence.Templates.Roadmap.laneDialog({canDelete:this.options.canDelete,colors:Roadmap.COLORS,laneColor:g}));this.$el.find(".aui-button").tooltip({gravity:"s"});var e=this;var f=this.$el.find("#lane-color-picker .color-item");f.click(function(i){i.preventDefault();var h=Roadmap.COLORS[f.index(this)];if(h.lane!=g){e.options.changeColor(h)}})},_getDialogWidth:function(){var e=29;var f=51;var d=2;if(this.options.canDelete){d++}return d*e+f},_onDeleteClick:function(){this.options.deleteLane();this.remove()},_onRenameClick:function(){if(!this._laneRenameDialog){this._laneRenameDialog=new Roadmap.LaneRenameDialogView({trigger:this.options.trigger,lane:this.options.lane})}this._laneRenameDialog.show();this.hide()},_onAddBarClick:function(){this.options.addBar();this.remove()},_onHide:function(){c("#lane-color-picker").hide();b.prototype._onHide.call(this)}})})(AJS.$,window._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-view-resources', location = 'view/roadmap-editor/lane-dialog/lane-rename-dialog.js' */
(function(c,a){var b=Roadmap.InlineDialogView;Roadmap.LaneRenameDialogView=b.extend({events:{"click .rename-button":"_onRenameButtonClick","keyup .lane-title":"_onChangeLaneTitle"},initialize:function(){this.options.dialogOptions={width:this._getDialogWidth()};b.prototype.initialize.call(this,this.options)},_getContent:function(d){d.html(Confluence.Templates.Roadmap.laneRenameDialog({laneTitle:this.options.trigger.text()}));this.controls={$renameButton:this.$el.find(".rename-button"),$laneTitle:this.$el.find(".lane-title")}},_getDialogWidth:function(){return 315},_onChangeLaneTitle:function(d){var f=c.trim(this.controls.$laneTitle.val());if(!f){this.controls.$renameButton.disable()}else{this.controls.$renameButton.enable();if(d.which==AJS.$.ui.keyCode.ENTER){this.controls.$renameButton.click()}}},_onShow:function(d){this.controls.$laneTitle.select()},_onRenameButtonClick:function(d){d.preventDefault();this.hide();var e=this.controls.$laneTitle.val();this.options.lane.renameTitle(e)}})})(AJS.$,window._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-view-resources', location = 'view/roadmap-editor/marker-dialog/marker-dialog.js' */
(function(c,a){var b=Roadmap.InlineDialogView;Roadmap.MarkerDialogView=b.extend({events:{"click #rename-button":"_onRenameButtonClick","click #delete-button":"_onDeleteButtonClick"},initialize:function(){this.options.dialogOptions={width:60};b.prototype.initialize.call(this,this.options)},_getContent:function(d){d.html(Confluence.Templates.Roadmap.markerDialog());this.$el.find(".aui-button.aui-button-compact").tooltip({gravity:"s"})},_onRenameButtonClick:function(){if(!this._markerRenameDialog){this._markerRenameDialog=new Roadmap.MarkerRenameDialogView({trigger:this.options.trigger,marker:this.options.marker})}this._markerRenameDialog.show();this.hide()},_onDeleteButtonClick:function(){this.options.marker.removeMarker();this.hide()}})})(AJS.$,window._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-view-resources', location = 'view/roadmap-editor/marker-dialog/marker-rename-dialog.js' */
(function(c,a){var b=Roadmap.InlineDialogView;Roadmap.MarkerRenameDialogView=b.extend({events:{"click .rename-button":"_onSaveButtonClick","keyup .marker-title":"_onChangeMarkerTitle"},initialize:function(){this.options.dialogOptions={width:315};b.prototype.initialize.call(this,this.options)},_getContent:function(d){d.html(Confluence.Templates.Roadmap.markerRenameDialog({markerTitle:this.options.marker.model.get("title")}));this.controls={$renameButton:this.$el.find(".rename-button"),$title:this.$el.find(".marker-title")}},_onChangeMarkerTitle:function(d){var f=c.trim(this.controls.$title.val());if(!f){this.controls.$renameButton.disable()}else{this.controls.$renameButton.enable();if(d.which==AJS.$.ui.keyCode.ENTER){this.controls.$renameButton.click()}}},_onShow:function(d){this.controls.$title.select()},_onSaveButtonClick:function(d){d.preventDefault();this.hide();this.options.marker.renameTitle(this.controls.$title.val())}})})(AJS.$,window._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-view-resources', location = 'view/roadmap-editor/lane.js' */
(function(b,a){window.Roadmap=window.Roadmap||{};Roadmap.LaneView=Backbone.View.extend({tagName:"div",className:"roadmap-lane",events:{"click .roadmap-lane-title":"_showDialog","BarView.drop":"_onBarDropped","BarRowNew.dropover":"_onBarRowNewDropover","BarRowNew.dropout":"_onBarRowNewDropout"},attributes:function(){return{cid:this.cid}},initialize:function(){a.bindAll(this,"render","renameTitle","updateRowIndex","removeEmptyRow","cleanLaneAfterDrop","_deleteLane","_updateLaneHeight","_renderComplete","_deleteBar","_addBar","_changeColor","addDefaultBarRow");this._barViews=[];this._barRowViews=[];this.listenTo(this.model.get("bars"),"add",function(d){var c=this._newBarRowView();var e=this._newBarView(d);c.$el.append(e.render().$el);this._$laneContent.append(c.$el);this._barViews.push(e);this.$el.trigger("BarView.add",e);a.defer(this._updateLaneHeight)})},render:function(){var c=this;this.$el.append(Confluence.Templates.Roadmap.lane({title:this.model.get("title"),color:this.model.get("color")}));Confluence.Roadmap.ColorHelper.adjustColorCount(this.model.get("color"),1);var d=this.model.get("bars").models;d=a.sortBy(d,function(e){return e.attributes.rowIndex});a.each(d,function(e){var f=c._newBarView(e);c._barViews.push(f)});this._renderBars();a.defer(this._renderComplete);return this},_renderComplete:function(){this._updateLaneHeight()},renameTitle:function(c){this.model.set("title",c);this.$el.find(".roadmap-lane-title").attr("title",c);this.$el.find(".title-inner").html(AJS.escapeHtml(c));this._updateLaneHeight()},_updateLaneHeight:function(){var d=this.$el.find(".title-inner");d.hide();var c=this._$laneContent.outerHeight();d.width(c-2*Roadmap.LANE_PADDING);d.show()},_barBeforeResize:function(e,k){var l=e.$el;var g=Math.ceil(l.outerWidth()-l.width());var j;if(k=="left"){var f=this._getNearestBarView(e,k);var c=f==null?0:f.position().left+f.width()+g;var d=l.position().left-c;j=l.width()+d}else{var i=this._getNearestBarView(e,k);var h=i==null?this._getLaneContentWidth()-g:i.position().left-g;j=h-l.position().left}e.updateMaxWidth(j-Roadmap.BAR_MARGIN)},_renderBars:function(){var c=this;this._$laneContent=this.$el.find(".roadmap-lane-content");var d={};a.each(this._barViews,function(f){var g="row-"+f.model.get("rowIndex");var e=d[g];if(!e){e=c._newBarRowView(f.model.get("rowIndex"));d[g]=e}e.$el.append(f.render().$el);c._$laneContent.append(e.$el)})},_newBarRowView:function(){var c=new Roadmap.BarRowView();this._barRowViews.push(c);return c},_newBarView:function(c){var d=new Roadmap.BarView({model:c,lane:this,color:this.model.get("color"),timelineView:this.options.timelineView,deleteBar:this._deleteBar});d.on("beforeResize",a.bind(this._barBeforeResize,this));return d},_getNearestBarView:function(d,e){var f=a.filter(d.options.lane._barViews,function(g){return g.model.get("rowIndex")===d.model.get("rowIndex")});var c=null;if(e=="left"){a.each(f,function(g){if(g.$el.position().left<d.$el.position().left&&(c==null||g.$el.position().left>c.$el.position().left)){c=g}})}else{a.each(f,function(g){if(g.$el.position().left>d.$el.position().left&&(c==null||g.$el.position().left<c.$el.position().left)){c=g}})}return c!=null?c.$el:null},_getLaneContentWidth:function(){return this.$el.find(".roadmap-lane-content").width()},_showDialog:function(){this._laneDialog&&this._laneDialog.remove();this._laneDialog=this._createLaneDialog();this._laneDialog.show()},_createLaneDialog:function(){return new Roadmap.LaneDialogView({trigger:this.$el.find(".title-outer"),canDelete:this.options.canDelete,deleteLane:this._deleteLane,addBar:this._addBar,changeColor:this._changeColor,lane:this})},_onBarDropped:function(i,k,l){var n=!!k.barRowNewView;var f=l.draggable.data("View");var m=f.model;var h=f.options.lane;var j=(h.cid===this.cid);var g=this.model.get("bars");var o=l.position.left;var d=this.options.timelineView.getBarStartDate(o);if(j&&g.models.length===1&&n){return}f.updatePositionLeft(o);f.updateColor(this.model.get("color"));m.attributes.startDate=d;if(n){var c=this._newBarRowView();k.barRowNewView.$el.replaceWith(c.$el);f.appendTo(c.$el)}else{f.appendTo(k.$barRow)}l.helper.remove();if(!j){f.options.lane.removeEmptyRow();g._byId[m.id]=m;this._barViews.push(f);f.updateDeleteBar(this._deleteBar);h.model.get("bars").remove(m);g.models.push(m);h._barViews.splice(a.indexOf(h._barViews,f),1);this.updateRowIndex(h.$el);f.options=a.extend(f.options,{color:this.model.get("color"),lane:this});h._updateLaneHeight()}this.removeEmptyRow();this.updateRowIndex(this.$el);this._updateLaneHeight()},updateRowIndex:function(c){c.find(".roadmap-bar-row").each(function(e,d){b(d).find('.roadmap-bar:not(".roadmap-bar-clone")').each(function(h,f){var g=b(f).data("View");if(g){g.model.attributes.rowIndex=e}})})},removeEmptyRow:function(){var c=0;a.each(this._barRowViews,function(d){if(d.isEmptyRow()){d.remove();c++}});return !!c},cleanLaneAfterDrop:function(){this._$laneContent.find(".roadmap-bar-drag-active").removeClass("roadmap-bar-drag-active");this._$laneContent.find(".new-row-placeholder").remove()},_deleteLane:function(){Confluence.Roadmap.ColorHelper.adjustColorCount(this.model.get("color"),-1);this.$el.trigger("Lane.delete",this)},updateDeleteStatus:function(c){if(this._laneDialog){this._laneDialog.remove();delete this._laneDialog}this.options.canDelete=c},_deleteBar:function(c){this.model.get("bars").remove(c.model);this._barViews.splice(a.indexOf(this._barViews,c),1);c.remove();if(this.removeEmptyRow()){this.updateRowIndex(this.$el);this._updateLaneHeight();this.$el.trigger("BarRowView.remove")}},_addBar:function(){var c=this.model.get("bars");var e=this.options.timelineView.model;var f=moment(e.get("startDate"));var d=e.get("displayOption")===Roadmap.TIMELINE_DISPLAY_OPTION.MONTH?f.startOf("month"):f.startOf("isoWeek");c.add(new Roadmap.Bar({rowIndex:this.model.getNumberOfRows(),startDate:d.toDate()}))},_changeColor:function(c){Confluence.Roadmap.ColorHelper.adjustColorCount(this.model.get("color"),-1);this.model.set("color",c);Confluence.Roadmap.ColorHelper.adjustColorCount(c,1);this.$el.find(".roadmap-lane-title").css({"background-color":c.lane,color:c.text});a.each(this._barViews,function(d){d.updateColor(c)})},addNewBarRow:function(h){var g=this._$laneContent.find(".roadmap-bar-row");var c=[];var d=function(){g.each(function(){var k=b(this);var j=k.index()===0;if(j){var l=new Roadmap.BarRowNewView({$barRow:k,renderBottom:false});k.before(l.render().$el);c.push(l)}var i=new Roadmap.BarRowNewView({$barRow:k});k.after(i.render().$el);c.push(i)})};if(g.length==0){this.addDefaultBarRow()}else{var e=g.find(".roadmap-bar");if(e.length>0){var f=(e.length>0)&&(e.length==1)&&(e.attr("cid")===h.attr("cid"));if(!f){d()}}}return c},addDefaultBarRow:function(){var c=this._newBarRowView();this._$laneContent.append(c.$el)},_onBarRowNewDropover:function(f,d,c){if(!a.isEmpty(Roadmap.DragDrop.barDraggingOver)){a.each(Roadmap.DragDrop.barDraggingOver,function(e){e.$el&&e.$el.removeClass("new-bar-row-hover roadmap-bar-drag-hover")})}Roadmap.DragDrop.barDraggingOver[d.cid]=d;c.helper.removeClass("roadmap-bar-overlapped");c.helper.data("isAddingNewRow",true)},_onBarRowNewDropout:function(f,d,c){c.helper.data("isAddingNewRow",false);delete Roadmap.DragDrop.barDraggingOver[d.cid];a.each(Roadmap.DragDrop.barDraggingOver,function(e){if(typeof e==="string"){c.helper.addClass("roadmap-bar-overlapped")}else{if(e.className==="roadmap-bar-row"&&c.helper.data("isAddingNewRow")!==true){e.$el.addClass("roadmap-bar-drag-hover")}}})}})})(AJS.$,window._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-view-resources', location = 'view/roadmap-editor/marker.js' */
(function(b,a){window.Roadmap=window.Roadmap||{};Roadmap.MarkerView=Backbone.View.extend({className:"vertical-line",events:{dragstop:"_onDragStop",dragstart:"_onDragStart"},initialize:function(){a.bindAll(this,"render","updateHeight","renameTitle","_renderComplete","_onMarkerClick")},render:function(){var d=this.options.roadmap._timelineView.model;var c;if(d.get("displayOption")===Roadmap.TIMELINE_DISPLAY_OPTION.MONTH){c=Confluence.Roadmap.Helper.getPosXOnMonthTimeline(d.attributes,this.model.get("markerDate"))}else{c=Confluence.Roadmap.Helper.getPosXOnWeekTimeline(d.attributes,this.model.get("markerDate"))}if(c<0||c>this.options.roadmap._timelineView.$el.width()){return false}this.$el.css({left:(c+Roadmap.LANE_TITLE_WIDTH)+"px"});this.$el.append(Confluence.Templates.Roadmap.marker({title:this.model.get("title")}));this.updateHeight(this.options.roadmap._getLaneHeight());a.defer(this._renderComplete);return this},_renderComplete:function(){this._setupMarkerDragging();this.$el.click(this._onMarkerClick);this.$el.find(".marker-title").ellipsis({row:Roadmap.MARKER_TITLE_LINE})},_setupMarkerDragging:function(){this.$el.draggable({axis:"x",zIndex:4013,containment:".roadmap-frame-content",cursor:"move"})},_onDragStop:function(g,f){var c=f.position.left-Roadmap.LANE_TITLE_WIDTH;var d=this.options.roadmap._timelineView.model.attributes;var h;if(d.displayOption===Roadmap.TIMELINE_DISPLAY_OPTION.MONTH){h=Confluence.Roadmap.Helper.getMonthStartDateByPosition(d,c)}else{h=Confluence.Roadmap.Helper.getWeekStartDateByPosition(d,c)}this.model.set("markerDate",h)},_onDragStart:function(d,c){this.options.roadmap.hideDialog()},_onMarkerClick:function(c){if(!b(c.target).hasClass("marker-title")){return}this._markerDialog&&this._markerDialog.remove();this._markerDialog=this._createMarkerDialog();this._markerDialog.show()},_createMarkerDialog:function(){return new Roadmap.MarkerDialogView({trigger:this.$el.find(".marker-title"),marker:this})},updateHeight:function(c){this.$el.height(c+Roadmap.MARKER_HEIGHT_PADDING)},renameTitle:function(d){this.model.set("title",d);var c=this.$el.find(".marker-title");c.attr("title",d);c.html(AJS.escapeHtml(d)).ellipsis({row:Roadmap.MARKER_TITLE_LINE})},removeMarker:function(){this.model.collection.remove(this.model);this.remove()}})})(AJS.$,window._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-view-resources', location = 'view/roadmap-editor/roadmap.js' */
(function(b,a){window.Roadmap=window.Roadmap||{};Roadmap.RoadmapEditorView=Backbone.View.extend({className:"roadmap-editor-container",events:{"BarView.add":"_onAddBar","BarView.dragstart":"_onBarDragstart","BarView.dragstop":"_onBarDragstop","BarView.drop":"_onBarDropped","LaneView.drop":"_onBarDropped","Lane.delete":"_onDeleteLane","BarRowView.remove":"_onBarRowViewRemove","sortstart .roadmap-content":"_onSortStart","sortstop .roadmap-content":"_onSortStop",remove:"_onRemove"},initialize:function(){a.bindAll(this,"render");this.listenTo(this.model.get("lanes"),"add",function(c){var d=new Roadmap.LaneView({model:c,timelineView:this._timelineView,canDelete:true});if(this._laneViews.length===1){this._laneViews[0].updateDeleteStatus(true)}this._laneViews.push(d);this.$roadmapContent.append(d.render().$el);this._updateTimelineColumnHeight();this._scrollToBottom()});this.listenTo(this.model.get("markers"),"add",function(c){var d=new Roadmap.MarkerView({model:c,roadmap:this});this.$roadmapMarker.append(d.render().$el);this._markerViews.push(d)});this.listenTo(this.model.get("timeline"),"change",function(){if(this._isTimelineChanged()){this._calculateMinWidthOfABar();this._timelineView.update();this._timelineColumnView.update();this.$roadmapContent.empty();a.each(this._laneViews,function(c){c.remove()});this._laneViews=[];this._renderLanes();this.$roadmapMarker.empty();this._markerViews=[];this._renderMarkers();this._updateDragArea()}})},render:function(){this.$el.html(Confluence.Templates.Roadmap.roadmapEditor());this._calculateMinWidthOfABar();this._initVariables();this._renderToolbar();this._renderTimeline();this._renderLanes();this._renderMarkers();this._renderTimelineColumn();this._updateDragArea();return this},_calculateMinWidthOfABar:function(){Roadmap.barMinWidth=this.model.get("timeline").get("displayOption")===Roadmap.TIMELINE_DISPLAY_OPTION.MONTH?Roadmap.MONTH_BAR_MIN_WIDTH:Roadmap.WEEK_BAR_MIN_WIDTH},_initVariables:function(){this.$roadmapContainer=this.$el.find("#roadmap-container");this.$roadmapTimeline=this.$roadmapContainer.find(".roadmap-frame");this.$roadmapContent=this.$roadmapContainer.find(".roadmap-content");this.$roadmapMarker=this.$roadmapContainer.find(".roadmap-marker");this._timelineView=new Roadmap.TimelineView({model:this.model.get("timeline")});this._timelineColumnView=new Roadmap.TimelineColumnView({model:this.model.get("timeline")});this._laneViews=[];this._markerViews=[]},_renderTimeline:function(){this.$roadmapTimeline.prepend(this._timelineView.render().$el)},_renderTimelineColumn:function(){this._updateTimelineColumnHeight();this.$roadmapTimeline.append(this._timelineColumnView.render().$el)},_renderMarkers:function(){var c=this;this.model.get("markers").each(function(d){var e=new Roadmap.MarkerView({model:d,roadmap:c});c.$roadmapMarker.append(e.render().$el);c._markerViews.push(e)})},_renderLanes:function(){Confluence.Roadmap.ColorHelper.resetColorCounts();var d=this;this._updateLaneWidth();var c=this.model.get("lanes").models.length>1;this.model.get("lanes").each(function(e){var f=new Roadmap.LaneView({model:e,timelineView:d._timelineView,canDelete:c});d._laneViews.push(f);d.$roadmapContent.append(f.render().$el)});this._setupLaneReordering()},_onAddBar:function(d,c){this._updateTimelineColumnHeight();var e=c.$el;if(!this._isInViewScreen(e)){this._scrollToBar(e)}},_renderToolbar:function(){var d=b("#"+this.options.dialogId+" .dialog-page-body");d.find(".roadmap-toolbar").remove();var c=new Roadmap.ToolbarView({model:this.model,timelineView:this._timelineView});d.prepend(c.render().$el)},_getTimelineWidth:function(){return this.$roadmapTimeline.find(".roadmap-frame-title").width()},_getLaneHeight:function(){return this.$roadmapContent.height()},_updateLaneWidth:function(){this.$roadmapContent.width(this._getTimelineWidth()+Roadmap.LANE_TITLE_WIDTH)},_scrollToBottom:function(){this.options.roadmapPopup.scrollTop(this._getLaneHeight())},_isInViewScreen:function(c){return b.inviewport(c,{threshold:-100})},_scrollToBar:function(c){this.options.roadmapPopup.scrollTop(c.parent().position().top);this.options.roadmapPopup.scrollLeft(0)},_onBarDropped:function(){this._updateTimelineColumnHeight()},_onDeleteLane:function(d,c){this.model.get("lanes").remove(c.model);this._laneViews.splice(a.indexOf(this._laneViews,c),1);c.remove();this._updateTimelineColumnHeight();if(this._laneViews.length===1){this._laneViews[0].updateDeleteStatus(false)}},_onBarRowViewRemove:function(){this._updateTimelineColumnHeight()},_updateTimelineColumnHeight:function(){var c=this._getLaneHeight();this._timelineColumnView.updateHeight(c);a.each(this._markerViews,function(d){d.updateHeight(c)})},hideDialog:function(){b("#inline-dialog-roadmap-dialog, #inline-dialog-timeline-options").hide()},removeDialog:function(){b("#inline-dialog-roadmap-dialog, #inline-dialog-timeline-options").remove()},_onBarDragstart:function(f,d){var c=this;this.hideDialog();this._updateDragArea();this._barRowNewViewList=[];a.each(this._laneViews,function(e){c._barRowNewViewList.push(e.addNewBarRow(d.helper))})},_updateDragArea:function(){var c=this.$roadmapContainer.find(".roadmap-drag-area");c.css(this._timelineColumnView.getSizeAndPosition())},_onBarDragstop:function(){a.each(a.flatten(this._barRowNewViewList),function(c){c.remove()});delete this._barRowNewViewList;a.each(this._laneViews,function(c){c.removeEmptyRow()})},_setupLaneReordering:function(){this.$roadmapContent.sortable({axis:"y",cursor:"move",handle:".roadmap-lane-title",opacity:0.3,placeholder:"roadmap-lane lane-sorting-placeholder",helper:function(d,c){return b(c).clone().addClass("lane-sorting-hepler")}})},_onSortStart:function(d,c){this.hideDialog();this._timelineColumnView.$el.hide();c.placeholder.css({height:Math.min(c.helper.height(),100),width:c.helper.width()}).html(Confluence.Templates.Roadmap.lane(Roadmap.TRANSPARENT_LANE));c.helper.find(".roadmap-lane-content").css({width:c.helper.width()-(c.helper.find(".roadmap-lane-title").outerWidth()+c.helper.find(".roadmap-separate-content").outerWidth())})},_onSortStop:function(h,g){this._timelineColumnView.$el.show();var d=g.item.attr("cid");var f=a.find(this._laneViews,function(e){return e.cid===d});var c=f.model;var i=this.model.get("lanes");i.remove(c);i.models.splice(g.item.index(),0,c);i._byId[c.cid]=c},_onRemove:function(){this.$roadmapTimeline.remove()},_isMonthYearChanged:function(){var d=function(f,e){if(f.getMonth()!==e.getMonth()||f.getYear()!==e.getYear()){return true}return false};var c=this.model.get("timeline");return d(c._previousAttributes.startDate,c.attributes.startDate)||d(c._previousAttributes.endDate,c.attributes.endDate)},_isWeekChanged:function(){var c=function(l,k){var j=moment(l);var i=moment(k);return j.get("year")===i.get("year")&&j.isoWeek()===i.isoWeek()};var d=this.model.get("timeline");var g=d._previousAttributes.startDate;var h=d.attributes.startDate;var f=d._previousAttributes.endDate;var e=d.attributes.endDate;return !(c(g,h)&&c(f,e))},_isTimelineChanged:function(){var d=this.model.get("timeline");var c=d.changed.displayOption;if(c){this.model.updateDurationUnit(d.get("displayOption"))}else{c=d.get("displayOption")===Roadmap.TIMELINE_DISPLAY_OPTION.MONTH?this._isMonthYearChanged():this._isWeekChanged()}return c},resize:function(){this._updateLaneWidth();this._updateTimelineColumnHeight();this.$roadmapContent.css({top:this.$roadmapTimeline.find(".roadmap-column-title:first").innerHeight()})}})})(AJS.$,window._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
