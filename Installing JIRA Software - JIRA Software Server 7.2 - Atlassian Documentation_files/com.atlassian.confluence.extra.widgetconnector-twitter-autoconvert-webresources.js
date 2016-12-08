;try {
/* module-key = 'com.atlassian.confluence.extra.widgetconnector:twitter-autoconvert-webresources', location = 'com/atlassian/confluence/extra/widgetconnector/js/autoconvert-twitter.js' */
(function(){AJS.bind("init.rte",function(){var A=/^\/(.*?)\/status\/([^/]+\/?$)/,C=/^\/(.*?)\/statuses\/([^/]+\/?$)/,B=function(H,G,D){var E,I,F;
if(H.host.match(/^twitter.com/)){if(E=decodeURI(H.path).match(A)){I=H.protocol+"://twitter.com/"+E[1]+"/status/"+E[2]
}else{if(E=decodeURI(H.path).match(C)){I=H.protocol+"://twitter.com/"+E[1]+"/statuses/"+E[2]
}}if(I){F={name:"widget",params:{url:I}};
tinymce.plugins.Autoconvert.convertMacroToDom(F,D,D)
}else{D()
}}else{D()
}};
tinymce.plugins.Autoconvert.autoConvert.addHandler(B)
})
})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
