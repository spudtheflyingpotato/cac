;try {
/* module-key = 'confluence.extra.jira:proxy-js', location = '/jira/proxy.js' */
AppLinks=AJS.$.extend(window.AppLinks||{},{makeRequest:function(a){var b=contextPath||AJS.params.contextPath;if(a.processData){if(a.appId){a.data=AJS.$.extend(a.data||{},{appId:a.appId})}else{if(a.appType){a.data=AJS.$.extend(a.data||{},{appType:a.appType})}}a.data=AJS.$.extend(a.data||{},{path:a.url})}else{var c=a.url;a=AJS.$.extend(a,{beforeSend:function(d){if(a.appId){d.setRequestHeader("X-AppId",a.appId)}else{if(a.appType){d.setRequestHeader("X-AppType",a.appType)}}d.setRequestHeader("X-AppPath",c)}})}a=AJS.$.extend(a,{url:b+"/plugins/servlet/applinks/proxy"});return AJS.$.ajax(a)},createProxyGetUrl:function(b){var c="";if(b.includeContext){c=contextPath||AJS.params.contextPath}var a=c+"/plugins/servlet/applinks/proxy";if(b.appId){a+="?appId="+encodeURIComponent(b.appId)}else{if(b.appType){a+="?appType="+encodeURIComponent(b.appType)}else{AJS.log("You need to specify an appType or appId");return""}}if(b.path){a+="&path="+encodeURIComponent(b.path)}return a}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
