;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-mentions-plugin:editor-autocomplete-mentions', location = 'js/editor_plugin_src.js' */
(function(b){AJS.EventQueue=AJS.EventQueue||[];function c(){AJS.EventQueue.push({name:"confluencementioninsert"});Confluence.Editor.Autocompleter.Manager.shortcutFired("@",true)}function a(d){return d&&d.shiftKey&&!d.ctrlKey&&!d.altKey&&!d.altGraphKey&&!d.metaKey&&d.which===64}tinymce.create("tinymce.plugins.InsertMention",{init:function(d){b("#insertmention-button").click(function(e){e.stopPropagation();e.preventDefault();var f=Confluence.Editor.Autocompleter.Manager.getInputDrivenDropdown();if(!f||f.inactive){tinymce.execCommand("mceFocus",false,d.id);c()}});AJS.bind("editor.text-placeholder.activated",function(g,f){if(f&&f.placeholderType==="mention"){if(a(f.triggerEvent)){tinymce.dom.Event.cancel(f.triggerEvent)}c()}});if(AJS.Rte.Placeholder&&AJS.Rte.Placeholder.addPlaceholderType){AJS.Rte.Placeholder.addPlaceholderType({type:"mention",label:"User mention",tooltip:"Instructional text is replaced with suggested people when a person types."})}},getInfo:function(){return{longname:"Insert Mention",author:"Atlassian",authorurl:"http://www.atlassian.com",version:tinymce.majorVersion+"."+tinymce.minorVersion}}});tinymce.PluginManager.add("insertmention",tinymce.plugins.InsertMention)})(AJS.$);AJS.Rte.BootstrapManager.addTinyMcePluginInit(function(a){a.plugins+=",insertmention"});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-mentions-plugin:editor-autocomplete-mentions', location = 'js/tinyMce-autocomplete-settings-mentions.js' */
AJS.Rte.BootstrapManager.addOnInitCallback(function(){if(!Confluence.Editor.Autocompleter){Confluence.Editor.Autocompleter=tinymce.confluence.Autocompleter}var b=function(e){if(e){return AJS.params.contextPath+"/rest/prototype/1/search.json"}else{if(AJS.Meta.get("remote-user")){return AJS.params.contextPath+"/rest/mentions/1/network.json"}}return null},c=function(g,f){var e={"max-results":g.maxResults||10};if(f){e.query=Confluence.unescapeEntities(f);e.search="user"}return e},a=function(m,f,l,h,g){var k=m.statusMessage;var i;if(k){i=[[{html:m.statusMessage,className:"error"}]]}else{var e=[];i=[e];if(m.result){AJS.$.each(m.result,function(n,p){var o=AJS.$.extend({},p);o.key=o.username;o.linkAlias=o.title;o.title=o.title+" ("+o.username+")";e.push(o)})}i=AJS.REST.convertFromRest(i)}function j(o,n){if(g&&typeof g=="function"){g(i,o,n)}}l(i,f,j)},d=function(g,i,m,f,l,o,j){var e=i(f),k=g.settings.cacheManager,h=k.get(f),n;if(e){n=$.ajax({type:"GET",url:e,data:m(g,f),dataType:"json",global:false,timeout:10000});n.done(function(p){k.put(f,p)});if(h){a(h,f,l,o,j)}else{n.done(function(p){a(p,f,l,o,j)});n.fail(function(q,p){if(p=="timeout"){a({statusMessage:"Timeout",query:f},f,l,o)}})}}else{l([],f)}};Confluence.Editor.Autocompleter.Settings["@"]={ch:"@",endChars:[],dropDownClassName:"autocomplete-mentions",selectFirstItem:true,getHeaderText:function(f,e){if(e){return "User suggestions"}else{return "Mention someone by typing their name..."}},getAdditionalLinks:function(h,f,g){var e=[];g(f,e);return e},getDataAndRunCallback:function(g,e,f){d(g,b,c,e,f,"content",function(h,j,i){if(j!==""&&h.length<2){if(i.length==0){i.push({html:'<span class="no-result">'+"No user found"+"</span>"})}}else{i.length=0}})},update:function(g,e){if(e.restObj){var f=AJS.$.extend(e.restObj,{title:e.restObj.linkAlias});e=Confluence.Link.fromREST(f)}e.insert()}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
