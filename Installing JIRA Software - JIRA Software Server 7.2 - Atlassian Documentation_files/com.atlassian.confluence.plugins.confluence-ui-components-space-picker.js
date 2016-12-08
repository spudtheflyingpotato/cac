;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:space-picker', location = '/js/internal/space-resolver.js' */
define("confluence-ui-components/js/internal/space-resolver",["underscore","jquery","ajs"],function(i,b,h){var g={conf_all:"All spaces",conf_current:"Current space",conf_favorites:"Favourite spaces",conf_global:"Site spaces",conf_personal:"Personal spaces"};function e(j){var k=i.map(j,function(l){return"spaceKey="+encodeURI(l)});return k.join("&")}function f(k,l){var j=typeof l==="undefined";var m=i.escape(j?k:l);return{id:k,text:m,idOnly:j}}function a(m,p){var n={};var o=[];i.each(m,function(r){var q=d(r);if(q){n[r]=f(r,q)}else{o.push(r)}});var k;if(o.length){var l=h.contextPath()+"/rest/api/space?"+e(o);k=b.getJSON(l)}else{k=new b.Deferred();k.resolve({results:[]})}function j(r){var q=r.results;i.each(q,function(t){n[t.key]=f(t.key,t.name)});var s=i.map(m,function(t){return n[t]||f(t)});p(s)}k.done(j)}function d(j){return g[j]}var c=["conf_favorites","conf_global","conf_personal"];return{getSpaceDisplayItems:a,getSpaceCategoryDisplayName:d,getSpaceTypeKeys:function(){return c}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:space-picker', location = '/js/space-picker.js' */
define("confluence-ui-components/js/space-picker",["underscore","ajs","jquery","confluence-ui-components/js/internal/space-resolver"],function(r,f,b,d){var a={data:null,suggestCategories:null};var p=function(s){return function(t){var u={id:t.spaceKey,text:t.spaceName};if(typeof s==="function"){return s(u)}return u}};var k;var c=function(s){return function(t,x){var w=b(t).val();if(w===""){return}var u=w.split(",");function v(y){if(!s.multiple){y=y[0]}x(y)}d.getSpaceDisplayItems(u,v)}};var e=function(t){var s;if(t.suggestCategories){var u={text:"Select a suggestion or type to search",children:r.map(t.suggestCategories,function(v){return{id:v,text:d.getSpaceCategoryDisplayName(v)}})}}return function(w){if(s){w.callback(s);return}function v(x){var y={results:[]};if(u){y.results.push(u)}if(x.length>0){y.results.push({text:"Suggested spaces",children:r.map(x,function(z){return{id:z.key,text:r.escape(z.name)}})})}s=y;w.callback(s)}b.getJSON(f.contextPath()+"/rest/recentlyviewed/1.0/recent/spaces").done(v).fail(function(){f.log("Couldn't fetch recent spaces");var x={results:[]};if(u){x.results.push(u)}w.callback(x)})}};var n=function(){return window.Select2.query.ajax({url:f.contextPath()+"/rest/quicknav/1/search?type=spacedesc&type=personalspacedesc",data:function(s){return{query:s,maxPerCategory:25}},quietMillis:250,results:function(u){var t=u.contentNameMatches;if(t.length<=1){return{results:[]}}else{var s=r.map(t[0],k);return{results:[{text:"Search results",children:s}]}}}})};function g(t){var s=n();var u=e(t);return function(v,x,w){if(v.term.length<2){return u(v)}else{if(typeof x==="function"){v.term=x(v.term)}k=p(w);return s(v)}}}function h(){var s=b(".select2-container-active").next("input");var t=s.val().trim();return(t!=="")?t.split(","):[]}function i(s){var t=r.intersection(s,d.getSpaceTypeKeys());return t.length>0}function j(s){return(typeof s.id!=="undefined")&&r.contains(d.getSpaceTypeKeys(),s.id)}function q(t,u,v){var s=[];t.forEach(function(w){if(w.children){var x=q(w.children,u,v);if(x.length){s.push(b.extend({},w,{children:x}))}}else{var y=j(w);if((u&&y)||(!u&&!y)){if(!r.contains(v,w.id)){s.push(w)}}}});return s}function m(t,v){if(!t.length||!v.length){return t}var u=i(v);var s=q(t,u,v);if(!s.length){s.push({text:"Can\'t filter by space types AND spaces",disabled:true})}return s}function o(s){var t=h();return m(s,t)}function l(t){t=r.extend({},a,t);var s={placeholder:"Select a space",formatResult:function(u,v,w){v.attr("title",b("<div/>").html(u.text).text());return b.fn.select2.defaults.formatResult.apply(this,arguments)},escapeMarkup:function(u){return u},multiple:t.multiple===true};if(t.disableMixedSpaceTypes){s.sortResults=o}if(t.data){return r.extend(s,{data:t.data})}else{return r.extend(s,{initSelection:c(t),query:g(t)})}}return{build:l,filterMixedTypesForValues:m}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:space-picker', location = '/js/internal/space-picker-legacy.js' */
window.Confluence.UI.Components.SpacePicker=require("confluence-ui-components/js/space-picker");AJS.deprecate.prop(window.Confluence.UI.Components.SpacePicker,"build",{sinceVersion:"1.4.22",extraInfo:"Use require('confluence-ui-components/js/space-picker')"});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
