;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:space-page-picker', location = '/js/space-page-picker.js' */
(function(i,c){var t={conf_all:"All spaces",conf_favorites:"Favourite spaces",conf_global:"Site spaces",conf_personal:"Personal spaces",conf_current:"Current space"};var b={data:null,suggestCategories:null};var v="SPACE-PAGE-TRIGGER-VALUE";var f={placeholder:"Select a space or page",multiple:true,formatInputTooShort:function(){return "Start typing to search"},formatResult:function(G,I,L){if(G.children){I.addClass("space-page-picker-result-category");return i.fn.select2.defaults.formatResult.apply(this,arguments)}else{if(G.id){I.attr("title",G.text);I.addClass("space-page-picker-result-label-with-icon");var F=i("<span/>").addClass(G.className+" item-text").html(i.fn.select2.defaults.formatResult.apply(this,arguments));var K=(G.subText)?i("<span/>").addClass("space-name").html(G.subText):i("");var H=i("<span/>").attr(s(G.id),G.id).append(F).append(K);var J=i("<span/>").append(H);return J}else{I.addClass(G.className);return i.fn.select2.defaults.formatResult.apply(this,arguments)}}},formatSelection:function(G,H){H.addClass("space-page-picker-selected-item");H.attr("title",G.text);var F=i("<span/>").attr(s(G.id),G.id).addClass(G.className+" item-text").html(i.fn.select2.defaults.formatSelection.apply(this,arguments));H.append(F)},escapeMarkup:function(F){return F},formatResultCssClass:function(F){return(F.children||F.id)?"":"select2-result-space-page-separator"},containerCssClass:"space-page-picker-container",dropdownCssClass:"space-page-picker-drop"};var B=function(F,H){var G=F.data("select2").opts.manualInit;if(G===true){return}d(F.val(),F,H)};function r(H,G,F){var I=_.map(H,function(J){return G[J]});return(F)?I:((I.length>0)?I[0]:null)}var l=function(F){var G;if(F.suggestCategories){var H={text:"Suggested categories",children:_.map(F.suggestCategories,function(I){return o(I)})}}return function(J){if(G){J.callback(G);return}var I=[];G={results:[]};if(x(F)){var L=i.getJSON(AJS.contextPath()+"/rest/recentlyviewed/1.0/recent/spaces").done(function(M){var N=(H)?[H]:[];(M.length>0)&&N.push({text:"Suggested spaces",children:_.map(M,function(O){return m(O.key,_.escape(O.name),null,true)})});(N.length>0)&&(G.results=G.results.concat(N))}).fail(function(){AJS.debug("Couldn't fetch recent spaces");var M=(H)?[H]:[];(M.length>0)&&(G.results=G.results.concat(M))});I.push(L)}if(j(F)){var K=i.getJSON(AJS.contextPath()+"/rest/recentlyviewed/1.0/recent/pages",{noTrashedContent:true}).done(function(M){if(M.length>0){G.results.push({text:"Suggested pages",children:_.map(M,function(N){return h(N.id,_.escape(N.title),_.escape(N.space),"content-type-page",true)})})}}).fail(function(){AJS.debug("Couldn't fetch recent pages")});I.push(K)}i.when.apply(i,_.map(I,function(N){var M=i.Deferred();N.always(function(){M.resolve()});return M})).done(function(){if(G.results.length===0){G.results=[{text:"",children:[]}]}J.callback(G)})}};var w=function(F){var G="";if(!F||F.length===2&&F.indexOf("space")>=0&&F.indexOf("page")>=0){G="type=spacedesc&type=personalspacedesc&type=page"}else{if(F.length===1&&F[0]==="space"){G="type=spacedesc&type=personalspacedesc"}else{if(F.length===1&&F[0]==="page"){G="type=page"}else{return}}}return window.Select2.query.ajax({url:AJS.contextPath()+"/rest/quicknav/1/search?"+G,data:function(H,I){return{query:H,maxPerCategory:25}},quietMillis:250,results:function(K,O){var N=K.contentNameMatches;if(N.length<=1){return{results:[]}}else{var P=[];var I=function(Q){return E(Q.spaceKey,Q.spaceName,Q.id,Q.name,Q.className)};for(var L=0;L<N.length-1;L++){var M=[];for(var J=0;J<N[L].length;J++){var H=I(N[L][J]);if(H){M.push(H)}}if(M.length>0){P=P.concat(M);P.push({id:"",text:"",subText:"",className:"",disabled:true})}}return{results:[{text:"Search results",children:P}]}}}})};var p=function(G){var F=w(G.contentType);var H=l(G);return function(I){if(I.term.length<2){H(I)}else{F(I)}}};function s(F){return(F.indexOf("page:")===0)?"data-item-id":"data-item-key"}function m(F,I,G,H){G=(G)?G:((F.indexOf("~")===0)?"content-type-personalspacedesc":"content-type-spacedesc");return e("space",F,I,"",G,H)}function o(F){var G=t[F];return e("space-cat",F,G,"","content-type-space-category",G)}function h(J,I,F,G,H){return e("page",J,I,F,G,H)}function e(L,I,K,H,G,J){var F=y(L,I);K=(!K)?I:K;G=(J)?G:(G+" content-not-found");return{id:F,text:K,subText:H,className:G,disabled:(J?false:true)}}function C(F){return"space-cat:"+F}function a(F){return"space:"+F}function D(F){return"page:"+F}function E(J,G,K,H,I){var F;if(I==="content-type-spacedesc"||I==="content-type-personalspacedesc"){F=m(J,G,I,true)}else{if(I==="content-type-page"){F=h(K,H,G,I,true)}}return F}function y(){var F=Array.prototype.slice.apply(arguments);return F.join(":")}function x(F){return((!F.contentType||F.contentType.length===0||F.contentType.indexOf("space")>=0)&&F.showRecentlyViewedSpaces!==false)}function j(F){return((!F.contentType||F.contentType.length===0||F.contentType.indexOf("page")>=0)&&F.showRecentlyViewedPages!==false)}function n(G,F){var H=q("SpaceCat",G,F.inputSpaceCatId,(F.inputSpaceCatName)?F.inputSpaceCatName:F.inputSpaceCatId);return u(G,H.id,H.name)}function g(G,F){var H=q("Space",G,F.inputSpaceId,(F.inputSpaceName)?F.inputSpaceName:F.inputSpaceId);return u(G,H.id,H.name)}function z(G,F){var H=q("Page",G,F.inputPageId,(F.inputPageName)?F.inputPageName:F.inputPageId);return u(G,H.id,H.name)}function q(J,H,K,G){var F;if(!K){F=H.attr("id");if(!F){return null}K=F+J}if(!G){var I=H.attr("name")||F;G=I+J}return{id:K,name:G}}function u(G,I,F){var H=i("#"+I);if(H.length===0){H=i(Confluence.UI.Components.templates.hiddenField({id:I,name:F}));G.after(H)}return H}function k(G,I,H){if(!G){return}var F=_.filter(I,function(J){return J.indexOf(H)===0});F=_.map(F,function(J){return J.substring(H.length,J.length)});G.val(F.join(","))}function A(M,H,I,F){I=(I)?(_.isArray(I)?I:I.split(",")):[];F=(F)?F.split(","):[];var L=_.union(I,F);var G=_.map(L,function(O){return H+O});var J=M.val();var N=J?J.split(","):[];var K=_.union(N,G);if(K.length>0){M.val(K.join(","))}}c.build=function(G){var F=_.extend({},b,f,G);if(!G.data){F=_.extend({},{initSelection:B,query:p(F)},F)}var H=i(F.orgElement);if(!H||H.length!==1){return F}if(!H.val()&&!F.manualInit){H.val(v)}H.addClass("select2-input");return F};c.setValue=function(G,F){d(G,F,function(H){F.auiSelect2("data",H)})};function d(P,G,S){var U=G.data("select2").opts;var Q=U.placeholder||G.data("placeholder");var K=n(G,U);var M=g(G,U);var I=z(G,U);G.on("change",function(V){k(K,V.val,"space-cat:");k(M,V.val,"space:");k(I,V.val,"page:")});G.val("");var T=(G["0"].tagName==="SELECT")?(G.context.multiple):(U.multiple);var N=[];var R=[];var L=[];var F={};var H=(P)?P.split(","):[];H=_.filter(H,function(V){var W=V.split(":");if(W.length===2){return true}else{if(W.length<0||W.length>=3||(W.length===1&&(W[0]!==v&&W[0]!==Q))){AJS.debug("Error value: "+W)}}});P=H.join(",");G.val(P);A(G,"space-cat:",U.spaceCatKeys,(K)?K.val():"");A(G,"space:",U.spaceKeys,(M)?M.val():"");A(G,"page:",U.pageIds,(I)?I.val():"");P=G.val();H=(P)?P.split(","):[];k(K,H,"space-cat:");k(M,H,"space:");k(I,H,"page:");if(H.length===0){return}_.each(H,function(V,W){var Z=V.split(":");if(Z.length===2){var Y=Z[0];var X=Z[1];if(Y==="space-cat"){N.push(X)}else{if(Y==="space"){R.push(X)}else{if(Y==="page"){L.push(X)}}}}});_.each(N,function(V){F[C(V)]=o(V)});var O=[];if(R.length>0){var J=i.getJSON(AJS.contextPath()+"/rest/prototype/1/space",{spaceKey:R}).done(function(X){var V=[];_.each(X.space,function(Y){F[a(Y.key)]=m(Y.key,_.escape(Y.name),null,true);V.push(Y.key)});var W=_.difference(R,V);_.each(W,function(Y){F[a(Y)]=m(Y,Y,null,false)})}).fail(function(){AJS.debug("Couldn't resolve spaceKeys:",R);_.each(R,function(V){F[a(V)]=m(V,V,null,false)})});O.push(J)}_.each(L,function(V){var W=i.getJSON(AJS.contextPath()+"/rest/api/content/"+V,{expand:"space"}).done(function(X){F[D(X.id)]=h(X.id,_.escape(X.title),_.escape(X.space.name),"content-type-page",true)}).fail(function(){AJS.debug("Couldn't resolve pageId:",V);F[D(V)]=h(V,V,"","content-type-page",false)});O.push(W)});i.when.apply(i,_.map(O,function(W){var V=new i.Deferred();W.always(function(){V.resolve()});return V.promise()})).done(function(){S(r(H,F,T))})}}(AJS.$,window.Confluence.UI.Components.SpacePagePicker));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:space-page-picker', location = '/soy/space-page-picker.soy' */
// This file was automatically generated from space-page-picker.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.UI.Components.templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.templates == 'undefined') { Confluence.UI.Components.templates = {}; }


Confluence.UI.Components.templates.hiddenField = function(opt_data, opt_ignored) {
  return '<input type="hidden" id="' + soy.$$escapeHtml(opt_data.id) + '" name="' + soy.$$escapeHtml(opt_data.name) + '" />';
};
if (goog.DEBUG) {
  Confluence.UI.Components.templates.hiddenField.soyTemplateName = 'Confluence.UI.Components.templates.hiddenField';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
