;try {
/* module-key = 'com.atlassian.confluence.plugins.sticky-table-headers:stickytableheaders-resources', location = '/js/vendor/jquery.stickytableheaders.js' */
/*! Modified by Atlassian | Copyright (c) 2011 by Jonas Mosbech - https://github.com/jmosbech/StickyTableHeaders
	MIT license info: https://github.com/jmosbech/StickyTableHeaders/blob/master/license.txt */
(function(d,c,f){var a="stickyTableHeaders",g=0,e={fixedOffset:0,leftOffset:0,marginTop:0,objDocument:document,objHead:"head",objWindow:c,scrollableArea:c,cacheHeaderHeight:false};function b(i,h){var j=this;j.$el=d(i);j.el=i;j.id=g++;j.$el.bind("destroyed",d.proxy(j.teardown,j));j.$clonedHeader=null;j.$originalHeader=null;j.cachedHeaderHeight=null;j.isSticky=false;j.hasBeenSticky=false;j.leftOffset=null;j.topOffset=null;j.init=function(){j.setOptions(h);j.$el.each(function(){var k=d(this);k.css("padding",0);j.$originalHeader=d("thead:first",this);j.$clonedHeader=j.$originalHeader.clone();k.trigger("clonedHeader."+a,[j.$clonedHeader]);j.$clonedHeader.addClass("tableFloatingHeader");j.$clonedHeader.css("display","none");j.$originalHeader.addClass("tableFloatingHeaderOriginal");j.$originalHeader.after(j.$clonedHeader);j.$printStyle=d('<style type="text/css" media="print">.tableFloatingHeader{display:none !important;}.tableFloatingHeaderOriginal{position:static !important;}</style>');j.$head.append(j.$printStyle)});j.updateWidth();j.toggleHeaders();j.bind()};j.destroy=function(){j.$el.unbind("destroyed",j.teardown);j.teardown()};j.teardown=function(){if(j.isSticky){j.$originalHeader.css("position","static")}d.removeData(j.el,"plugin_"+a);j.unbind();j.$clonedHeader.remove();j.$originalHeader.removeClass("tableFloatingHeaderOriginal");j.$originalHeader.css("visibility","visible");j.$printStyle.remove();j.el=null;j.$el=null};j.bind=function(){j.$scrollableArea.on("scroll."+a,j.toggleHeaders);if(!j.isWindowScrolling){j.$window.on("scroll."+a+j.id,j.setPositionValues);j.$window.on("resize."+a+j.id,j.toggleHeaders)}j.$scrollableArea.on("resize."+a,j.toggleHeaders);j.$scrollableArea.on("resize."+a,j.updateWidth)};j.unbind=function(){j.$scrollableArea.off("."+a,j.toggleHeaders);if(!j.isWindowScrolling){j.$window.off("."+a+j.id,j.setPositionValues);j.$window.off("."+a+j.id,j.toggleHeaders)}j.$scrollableArea.off("."+a,j.updateWidth)};j.debounce=function(l,k){var m=null;return function(){var o=this,n=arguments;clearTimeout(m);m=setTimeout(function(){l.apply(o,n)},k)}};j.toggleHeaders=j.debounce(function(){if(j.$el){j.$el.each(function(){var q=d(this),r,n=j.isWindowScrolling?(isNaN(j.options.fixedOffset)?j.options.fixedOffset.outerHeight():j.options.fixedOffset):j.$scrollableArea.offset().top+(!isNaN(j.options.fixedOffset)?j.options.fixedOffset:0),m=q.offset(),k=j.$scrollableArea.scrollTop()+n,l=j.$scrollableArea.scrollLeft(),o=j.options.cacheHeaderHeight?j.cachedHeaderHeight:j.$clonedHeader.height(),p=j.isWindowScrolling?k>m.top:n>m.top,s=(j.isWindowScrolling?k:0)<(m.top+q.height()-o-(j.isWindowScrolling?0:n));if(p&&s){r=m.left-l+j.options.leftOffset;j.$originalHeader.css({position:"fixed","margin-top":j.options.marginTop,left:r,"z-index":3});j.leftOffset=r;j.topOffset=n;j.$clonedHeader.css("display","");if(!j.isSticky){j.isSticky=true;j.updateWidth();q.trigger("enabledStickiness."+a)}j.setPositionValues()}else{if(j.isSticky){j.$originalHeader.css("position","static");j.$clonedHeader.css("display","none");j.isSticky=false;j.resetWidth(d("td,th",j.$clonedHeader),d("td,th",j.$originalHeader));q.trigger("disabledStickiness."+a)}}})}},0);j.setPositionValues=j.debounce(function(){var k=j.$window.scrollTop(),l=j.$window.scrollLeft();if(!j.isSticky||k<0||k+j.$window.height()>j.$document.height()||l<0||l+j.$window.width()>j.$document.width()){return}j.$originalHeader.css({top:j.topOffset-(j.isWindowScrolling?0:k),left:j.leftOffset-(j.isWindowScrolling?0:l)})},0);j.updateWidth=j.debounce(function(){if(!j.isSticky){return}if(!j.$originalHeaderCells){j.$originalHeaderCells=d("th,td",j.$originalHeader)}if(!j.$clonedHeaderCells){j.$clonedHeaderCells=d("th,td",j.$clonedHeader)}var k=j.getWidth(j.$clonedHeaderCells);j.setWidth(k,j.$clonedHeaderCells,j.$originalHeaderCells);j.$originalHeader.css("width",j.$clonedHeader.width());if(j.options.cacheHeaderHeight){j.cachedHeaderHeight=j.$clonedHeader.height()}},0);j.getWidth=function(k){var l=[];k.each(function(p){var r,s=d(this);if(s.css("box-sizing")==="border-box"){var t=s[0].getBoundingClientRect();if(t.width){r=t.width}else{r=t.right-t.left}}else{var n=d("th",j.$originalHeader);if(n.css("border-collapse")==="collapse"){if(c.getComputedStyle){r=parseFloat(c.getComputedStyle(this,null).width)}else{var q=parseFloat(s.css("padding-left"));var m=parseFloat(s.css("padding-right"));var o=parseFloat(s.css("border-width"));r=s.outerWidth()-q-m-o}}else{r=s.width()}}l[p]=r});return l};j.setWidth=function(m,k,l){k.each(function(n){var o=m[n];l.eq(n).css({"min-width":o,"max-width":o})})};j.resetWidth=function(k,l){k.each(function(m){var n=d(this);l.eq(m).css({"min-width":n.css("min-width"),"max-width":n.css("max-width")})})};j.setOptions=function(k){j.options=d.extend({},e,k);j.$window=d(j.options.objWindow);j.$head=d(j.options.objHead);j.$document=d(j.options.objDocument);j.$scrollableArea=d(j.options.scrollableArea);j.isWindowScrolling=j.$scrollableArea[0]===j.$window[0]};j.updateOptions=function(k){j.setOptions(k);j.unbind();j.bind();j.updateWidth();j.toggleHeaders()};j.init()}d.fn[a]=function(h){return this.each(function(){var i=d.data(this,"plugin_"+a);if(i){if(typeof h==="string"){i[h].apply(i)}else{i.updateOptions(h)}}else{if(h!=="destroy"){d.data(this,"plugin_"+a,new b(this,h))}}})}})(jQuery,window);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.sticky-table-headers:stickytableheaders-resources', location = '/js/lib/utils.js' */
define("sticky-table-headers/utils",["jquery"],function(e){var c=function(m){return !m.hasClass("stickyTableHeaders")};var g=function(m){return !m.parents("table").length>0};var d=function(m){return m.find("> :first-child").is("thead")};var b=function(m){return m.find("thead").children().length===1};var j=function(m){return !m.closest(".columnLayout").length>0};var i=function(){return !e("body").hasClass("theme-documentation")};var a=function(m){return m.find(".confluenceTh").parent().length===1};var k=function(m){return m.find(".confluenceTh").siblings().hasClass("confluenceTh")};var h=function(n){var m=e(n);return i()&&c(m)&&j(m)&&g(m)&&d(m)&&b(m)&&a(m)&&k(m)};var l=function(m,o){var n=o||e(window);m.closest(".table-wrap").scroll(function(){n.trigger("scroll.stickyTableHeaders")})};var f=function(m){e(m).each(function(){var r=e(this);var s=r.find(".confluenceTh[rowspan]").length>0;var o=r.find("> :first-child > :first-child .confluenceTh");var n=o.length&&o.closest("thead").length>0;var q=o.length&&o.parent().index()===0;if(g(r)&&j(r)&&!n&&q&&!s){var p=e("<thead />").append(o.parent());r.prepend(p)}})};return{isAValidTable:h,bindHorizontalScrolling:l,moveHeaderRowsToTHead:f,isNotDocumentationTheme:i}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.sticky-table-headers:stickytableheaders-resources', location = '/js/lib/viewpage.js' */
define("sticky-table-headers/viewpage",["jquery","ajs","sticky-table-headers/utils"],function(e,b,d){var c=function(h,g){var f=e(h).filter(function(){return d.isAValidTable(this)});f.stickyTableHeaders(g).addClass("stickyTableHeaders");b.bind("sticky-table-headers.change.options",function(i,j){f.stickyTableHeaders(j)});d.bindHorizontalScrolling(f)};var a=function(){var g=e(".confluenceTable");var j=e(window);if(!d.isNotDocumentationTheme()){return}d.moveHeaderRowsToTHead(g);if(window.MutationObserver){var i=document.querySelector("#page");var h=/sticky|tableFloating|confluenceTh/;var f=new MutationObserver(e.debounce(function(l){var n=false;var o;for(var m=0,k=l.length;m<k;m++){o=l[m].target.className;if(!h.test(o)){n=true;break}}if(n){j.trigger("resize.stickyTableHeaders")}},0));f.observe(i,{subtree:true,attributes:true,childList:true})}c(g,{cacheHeaderHeight:true})};return{initialize:a,setupTable:c}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.sticky-table-headers:stickytableheaders-resources', location = '/js/lib/editor.js' */
define("sticky-table-headers/editor",["ajs","jquery","sticky-table-headers/utils",],function(b,f,e){var d=function(g){var h={};h.objWindow=f(g.getWin());h.scrollableArea=h.objWindow;h.objDocument=f(g.getDoc());h.objHead=h.objDocument.find("head");return h};var c=function(k,h){var j=b.Rte.getEditor();if(j){var l=d(j);var i=f.extend({},l,h);var g=f(k).filter(function(){return e.isAValidTable(this)});g.stickyTableHeaders(i).addClass("stickyTableHeaders");e.bindHorizontalScrolling(g,i.objWindow)}};var a=function(){var h=b.Rte.getEditor();if(h){var g=f(h.getBody()).find(".confluenceTable");e.moveHeaderRowsToTHead(g);c(g)}};return{initialize:a,setupTable:c}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.sticky-table-headers:stickytableheaders-resources', location = '/js/stickytableheaders.js' */
define("sticky-table-headers",["ajs","sticky-table-headers/viewpage","sticky-table-headers/editor"],function(a,c,b){return{initialize:function(){if(!a.DarkFeatures.isEnabled("confluence-table-enhancements.sticky-headers.disabled")){a.toInit(c.initialize)}if(a.DarkFeatures.isEnabled("confluence-table-enhancements.sticky-headers-editor")){a.bind("rte-ready",b.initialize);a.bind("rte-quick-edit-push-state",b.initialize);a.bind("rte-quick-edit-push-hash",b.initialize)}}}});require("sticky-table-headers").initialize();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
