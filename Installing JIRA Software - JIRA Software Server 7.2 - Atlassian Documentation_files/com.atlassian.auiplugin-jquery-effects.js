;try {
/* module-key = 'com.atlassian.auiplugin:jquery-effects', location = 'js-vendor/jquery/jquery-ui/jquery.effects.core.js' */
/*
 * jQuery UI Effects 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */
jQuery.effects||(function(H,E){H.effects={};H.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],function(O,N){H.fx.step[N]=function(P){if(!P.colorInit){P.start=M(P.elem,N);P.end=K(P.end);P.colorInit=true}P.elem.style[N]="rgb("+Math.max(Math.min(parseInt((P.pos*(P.end[0]-P.start[0]))+P.start[0],10),255),0)+","+Math.max(Math.min(parseInt((P.pos*(P.end[1]-P.start[1]))+P.start[1],10),255),0)+","+Math.max(Math.min(parseInt((P.pos*(P.end[2]-P.start[2]))+P.start[2],10),255),0)+")"}});function K(O){var N;if(O&&O.constructor==Array&&O.length==3){return O}if(N=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(O)){return[parseInt(N[1],10),parseInt(N[2],10),parseInt(N[3],10)]}if(N=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(O)){return[parseFloat(N[1])*2.55,parseFloat(N[2])*2.55,parseFloat(N[3])*2.55]}if(N=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(O)){return[parseInt(N[1],16),parseInt(N[2],16),parseInt(N[3],16)]}if(N=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(O)){return[parseInt(N[1]+N[1],16),parseInt(N[2]+N[2],16),parseInt(N[3]+N[3],16)]}if(N=/rgba\(0, 0, 0, 0\)/.exec(O)){return A.transparent}return A[H.trim(O).toLowerCase()]}function M(P,N){var O;do{O=(H.curCSS||H.css)(P,N);if(O!=""&&O!="transparent"||H.nodeName(P,"body")){break}N="backgroundColor"}while(P=P.parentNode);return K(O)}var A={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]};var F=["add","remove","toggle"],C={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};function G(){var Q=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,R={},O,P;if(Q&&Q.length&&Q[0]&&Q[Q[0]]){var N=Q.length;while(N--){O=Q[N];if(typeof Q[O]=="string"){P=O.replace(/\-(\w)/g,function(S,T){return T.toUpperCase()});R[P]=Q[O]}}}else{for(O in Q){if(typeof Q[O]==="string"){R[O]=Q[O]}}}return R}function B(O){var N,P;for(N in O){P=O[N];if(P==null||H.isFunction(P)||N in C||(/scrollbar/).test(N)||(!(/color/i).test(N)&&isNaN(parseFloat(P)))){delete O[N]}}return O}function I(N,P){var Q={_:0},O;for(O in P){if(N[O]!=P[O]){Q[O]=P[O]}}return Q}H.effects.animateClass=function(N,O,Q,P){if(H.isFunction(Q)){P=Q;Q=null}return this.queue(function(){var U=H(this),R=U.attr("style")||" ",V=B(G.call(this)),T,S=U.attr("class")||"";H.each(F,function(W,X){if(N[X]){U[X+"Class"](N[X])}});T=B(G.call(this));U.attr("class",S);U.animate(I(V,T),{queue:false,duration:O,easing:Q,complete:function(){H.each(F,function(W,X){if(N[X]){U[X+"Class"](N[X])}});if(typeof U.attr("style")=="object"){U.attr("style").cssText="";U.attr("style").cssText=R}else{U.attr("style",R)}if(P){P.apply(this,arguments)}H.dequeue(this)}})})};H.fn.extend({_addClass:H.fn.addClass,addClass:function(O,N,Q,P){return N?H.effects.animateClass.apply(this,[{add:O},N,Q,P]):this._addClass(O)},_removeClass:H.fn.removeClass,removeClass:function(O,N,Q,P){return N?H.effects.animateClass.apply(this,[{remove:O},N,Q,P]):this._removeClass(O)},_toggleClass:H.fn.toggleClass,toggleClass:function(P,O,N,R,Q){if(typeof O=="boolean"||O===E){if(!N){return this._toggleClass(P,O)}else{return H.effects.animateClass.apply(this,[(O?{add:P}:{remove:P}),N,R,Q])}}else{return H.effects.animateClass.apply(this,[{toggle:P},O,N,R])}},switchClass:function(N,P,O,R,Q){return H.effects.animateClass.apply(this,[{add:P,remove:N},O,R,Q])}});H.extend(H.effects,{version:"1.8.24",save:function(O,P){for(var N=0;N<P.length;N++){if(P[N]!==null){O.data("ec.storage."+P[N],O[0].style[P[N]])}}},restore:function(O,P){for(var N=0;N<P.length;N++){if(P[N]!==null){O.css(P[N],O.data("ec.storage."+P[N]))}}},setMode:function(N,O){if(O=="toggle"){O=N.is(":hidden")?"show":"hide"}return O},getBaseline:function(O,P){var Q,N;switch(O[0]){case"top":Q=0;break;case"middle":Q=0.5;break;case"bottom":Q=1;break;default:Q=O[0]/P.height}switch(O[1]){case"left":N=0;break;case"center":N=0.5;break;case"right":N=1;break;default:N=O[1]/P.width}return{x:N,y:Q}},createWrapper:function(N){if(N.parent().is(".ui-effects-wrapper")){return N.parent()}var O={width:N.outerWidth(true),height:N.outerHeight(true),"float":N.css("float")},R=H("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),Q=document.activeElement;try{Q.id}catch(P){Q=document.body}N.wrap(R);if(N[0]===Q||H.contains(N[0],Q)){H(Q).focus()}R=N.parent();if(N.css("position")=="static"){R.css({position:"relative"});N.css({position:"relative"})}else{H.extend(O,{position:N.css("position"),zIndex:N.css("z-index")});H.each(["top","left","bottom","right"],function(S,T){O[T]=N.css(T);if(isNaN(parseInt(O[T],10))){O[T]="auto"}});N.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}return R.css(O).show()},removeWrapper:function(N){var O,P=document.activeElement;if(N.parent().is(".ui-effects-wrapper")){O=N.parent().replaceWith(N);if(N[0]===P||H.contains(N[0],P)){H(P).focus()}return O}return N},setTransition:function(O,Q,N,P){P=P||{};H.each(Q,function(S,R){var T=O.cssUnit(R);if(T[0]>0){P[R]=T[0]*N+T[1]}});return P}});function D(O,N,P,Q){if(typeof O=="object"){Q=N;P=null;N=O;O=N.effect}if(H.isFunction(N)){Q=N;P=null;N={}}if(typeof N=="number"||H.fx.speeds[N]){Q=P;P=N;N={}}if(H.isFunction(P)){Q=P;P=null}N=N||{};P=P||N.duration;P=H.fx.off?0:typeof P=="number"?P:P in H.fx.speeds?H.fx.speeds[P]:H.fx.speeds._default;Q=Q||N.complete;return[O,N,P,Q]}function L(N){if(!N||typeof N==="number"||H.fx.speeds[N]){return true}if(typeof N==="string"&&!H.effects[N]){return true}return false}H.fn.extend({effect:function(Q,P,S,U){var O=D.apply(this,arguments),R={options:O[1],duration:O[2],callback:O[3]},T=R.options.mode,N=H.effects[Q];if(H.fx.off||!N){if(T){return this[T](R.duration,R.callback)}else{return this.each(function(){if(R.callback){R.callback.call(this)}})}}return N.call(this,R)},_show:H.fn.show,show:function(O){if(L(O)){return this._show.apply(this,arguments)}else{var N=D.apply(this,arguments);N[1].mode="show";return this.effect.apply(this,N)}},_hide:H.fn.hide,hide:function(O){if(L(O)){return this._hide.apply(this,arguments)}else{var N=D.apply(this,arguments);N[1].mode="hide";return this.effect.apply(this,N)}},__toggle:H.fn.toggle,toggle:function(O){if(L(O)||typeof O==="boolean"||H.isFunction(O)){return this.__toggle.apply(this,arguments)}else{var N=D.apply(this,arguments);N[1].mode="toggle";return this.effect.apply(this,N)}},cssUnit:function(N){var O=this.css(N),P=[];H.each(["em","px","%","pt"],function(Q,R){if(O.indexOf(R)>0){P=[parseFloat(O),R]}});return P}});var J={};H.each(["Quad","Cubic","Quart","Quint","Expo"],function(O,N){J[N]=function(P){return Math.pow(P,O+2)}});H.extend(J,{Sine:function(N){return 1-Math.cos(N*Math.PI/2)},Circ:function(N){return 1-Math.sqrt(1-N*N)},Elastic:function(N){return N===0||N===1?N:-Math.pow(2,8*(N-1))*Math.sin(((N-1)*80-7.5)*Math.PI/15)},Back:function(N){return N*N*(3*N-2)},Bounce:function(P){var N,O=4;while(P<((N=Math.pow(2,--O))-1)/11){}return 1/Math.pow(4,3-O)-7.5625*Math.pow((N*3-2)/22-P,2)}});H.each(J,function(O,N){H.easing["easeIn"+O]=N;H.easing["easeOut"+O]=function(P){return 1-N(1-P)};H.easing["easeInOut"+O]=function(P){return P<0.5?N(P*2)/2:N(P*-2+2)/-2+1}})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-effects', location = 'js-vendor/jquery/jquery-ui/jquery.effects.blind.js' */
/*
 * jQuery UI Effects Blind 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Blind
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.blind=function(C){return this.queue(function(){var E=A(this),D=["position","top","bottom","left","right"];var I=A.effects.setMode(E,C.options.mode||"hide");var H=C.options.direction||"vertical";A.effects.save(E,D);E.show();var K=A.effects.createWrapper(E).css({overflow:"hidden"});var F=(H=="vertical")?"height":"width";var J=(H=="vertical")?K.height():K.width();if(I=="show"){K.css(F,0)}var G={};G[F]=I=="show"?J:0;K.animate(G,C.duration,C.options.easing,function(){if(I=="hide"){E.hide()}A.effects.restore(E,D);A.effects.removeWrapper(E);if(C.callback){C.callback.apply(E[0],arguments)}E.dequeue()})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-effects', location = 'js-vendor/jquery/jquery-ui/jquery.effects.bounce.js' */
/*
 * jQuery UI Effects Bounce 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Bounce
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.bounce=function(C){return this.queue(function(){var F=A(this),L=["position","top","bottom","left","right"];var K=A.effects.setMode(F,C.options.mode||"effect");var N=C.options.direction||"up";var D=C.options.distance||20;var E=C.options.times||5;var H=C.duration||250;if(/show|hide/.test(K)){L.push("opacity")}A.effects.save(F,L);F.show();A.effects.createWrapper(F);var G=(N=="up"||N=="down")?"top":"left";var P=(N=="up"||N=="left")?"pos":"neg";var D=C.options.distance||(G=="top"?F.outerHeight(true)/3:F.outerWidth(true)/3);if(K=="show"){F.css("opacity",0).css(G,P=="pos"?-D:D)}if(K=="hide"){D=D/(E*2)}if(K!="hide"){E--}if(K=="show"){var I={opacity:1};I[G]=(P=="pos"?"+=":"-=")+D;F.animate(I,H/2,C.options.easing);D=D/2;E--}for(var J=0;J<E;J++){var O={},M={};O[G]=(P=="pos"?"-=":"+=")+D;M[G]=(P=="pos"?"+=":"-=")+D;F.animate(O,H/2,C.options.easing).animate(M,H/2,C.options.easing);D=(K=="hide")?D*2:D/2}if(K=="hide"){var I={opacity:0};I[G]=(P=="pos"?"-=":"+=")+D;F.animate(I,H/2,C.options.easing,function(){F.hide();A.effects.restore(F,L);A.effects.removeWrapper(F);if(C.callback){C.callback.apply(this,arguments)}})}else{var O={},M={};O[G]=(P=="pos"?"-=":"+=")+D;M[G]=(P=="pos"?"+=":"-=")+D;F.animate(O,H/2,C.options.easing).animate(M,H/2,C.options.easing,function(){A.effects.restore(F,L);A.effects.removeWrapper(F);if(C.callback){C.callback.apply(this,arguments)}})}F.queue("fx",function(){F.dequeue()});F.dequeue()})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-effects', location = 'js-vendor/jquery/jquery-ui/jquery.effects.clip.js' */
/*
 * jQuery UI Effects Clip 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Clip
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.clip=function(C){return this.queue(function(){var G=A(this),K=["position","top","bottom","left","right","height","width"];var J=A.effects.setMode(G,C.options.mode||"hide");var L=C.options.direction||"vertical";A.effects.save(G,K);G.show();var D=A.effects.createWrapper(G).css({overflow:"hidden"});var F=G[0].tagName=="IMG"?D:G;var H={size:(L=="vertical")?"height":"width",position:(L=="vertical")?"top":"left"};var E=(L=="vertical")?F.height():F.width();if(J=="show"){F.css(H.size,0);F.css(H.position,E/2)}var I={};I[H.size]=J=="show"?E:0;I[H.position]=J=="show"?0:E/2;F.animate(I,{queue:false,duration:C.duration,easing:C.options.easing,complete:function(){if(J=="hide"){G.hide()}A.effects.restore(G,K);A.effects.removeWrapper(G);if(C.callback){C.callback.apply(G[0],arguments)}G.dequeue()}})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-effects', location = 'js-vendor/jquery/jquery-ui/jquery.effects.drop.js' */
/*
 * jQuery UI Effects Drop 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Drop
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.drop=function(C){return this.queue(function(){var F=A(this),E=["position","top","bottom","left","right","opacity"];var J=A.effects.setMode(F,C.options.mode||"hide");var I=C.options.direction||"left";A.effects.save(F,E);F.show();A.effects.createWrapper(F);var G=(I=="up"||I=="down")?"top":"left";var D=(I=="up"||I=="left")?"pos":"neg";var K=C.options.distance||(G=="top"?F.outerHeight(true)/2:F.outerWidth(true)/2);if(J=="show"){F.css("opacity",0).css(G,D=="pos"?-K:K)}var H={opacity:J=="show"?1:0};H[G]=(J=="show"?(D=="pos"?"+=":"-="):(D=="pos"?"-=":"+="))+K;F.animate(H,{queue:false,duration:C.duration,easing:C.options.easing,complete:function(){if(J=="hide"){F.hide()}A.effects.restore(F,E);A.effects.removeWrapper(F);if(C.callback){C.callback.apply(this,arguments)}F.dequeue()}})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-effects', location = 'js-vendor/jquery/jquery-ui/jquery.effects.explode.js' */
/*
 * jQuery UI Effects Explode 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Explode
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.explode=function(C){return this.queue(function(){var J=C.options.pieces?Math.round(Math.sqrt(C.options.pieces)):3;var F=C.options.pieces?Math.round(Math.sqrt(C.options.pieces)):3;C.options.mode=C.options.mode=="toggle"?(A(this).is(":visible")?"hide":"show"):C.options.mode;var I=A(this).show().css("visibility","hidden");var K=I.offset();K.top-=parseInt(I.css("marginTop"),10)||0;K.left-=parseInt(I.css("marginLeft"),10)||0;var H=I.outerWidth(true);var D=I.outerHeight(true);for(var G=0;G<J;G++){for(var E=0;E<F;E++){I.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-E*(H/F),top:-G*(D/J)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:H/F,height:D/J,left:K.left+E*(H/F)+(C.options.mode=="show"?(E-Math.floor(F/2))*(H/F):0),top:K.top+G*(D/J)+(C.options.mode=="show"?(G-Math.floor(J/2))*(D/J):0),opacity:C.options.mode=="show"?0:1}).animate({left:K.left+E*(H/F)+(C.options.mode=="show"?0:(E-Math.floor(F/2))*(H/F)),top:K.top+G*(D/J)+(C.options.mode=="show"?0:(G-Math.floor(J/2))*(D/J)),opacity:C.options.mode=="show"?1:0},C.duration||500)}}setTimeout(function(){C.options.mode=="show"?I.css({visibility:"visible"}):I.css({visibility:"visible"}).hide();if(C.callback){C.callback.apply(I[0])}I.dequeue();A("div.ui-effects-explode").remove()},C.duration||500)})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-effects', location = 'js-vendor/jquery/jquery-ui/jquery.effects.fade.js' */
/*
 * jQuery UI Effects Fade 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fade
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.fade=function(C){return this.queue(function(){var D=A(this),E=A.effects.setMode(D,C.options.mode||"hide");D.animate({opacity:E},{queue:false,duration:C.duration,easing:C.options.easing,complete:function(){(C.callback&&C.callback.apply(this,arguments));D.dequeue()}})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-effects', location = 'js-vendor/jquery/jquery-ui/jquery.effects.fold.js' */
/*
 * jQuery UI Effects Fold 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fold
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.fold=function(C){return this.queue(function(){var F=A(this),L=["position","top","bottom","left","right"];var I=A.effects.setMode(F,C.options.mode||"hide");var P=C.options.size||15;var O=!(!C.options.horizFirst);var H=C.duration?C.duration/2:A.fx.speeds._default/2;A.effects.save(F,L);F.show();var E=A.effects.createWrapper(F).css({overflow:"hidden"});var J=((I=="show")!=O);var G=J?["width","height"]:["height","width"];var D=J?[E.width(),E.height()]:[E.height(),E.width()];var K=/([0-9]+)%/.exec(P);if(K){P=parseInt(K[1],10)/100*D[I=="hide"?0:1]}if(I=="show"){E.css(O?{height:0,width:P}:{height:P,width:0})}var N={},M={};N[G[0]]=I=="show"?D[0]:P;M[G[1]]=I=="show"?D[1]:0;E.animate(N,H,C.options.easing).animate(M,H,C.options.easing,function(){if(I=="hide"){F.hide()}A.effects.restore(F,L);A.effects.removeWrapper(F);if(C.callback){C.callback.apply(F[0],arguments)}F.dequeue()})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-effects', location = 'js-vendor/jquery/jquery-ui/jquery.effects.highlight.js' */
/*
 * jQuery UI Effects Highlight 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.highlight=function(C){return this.queue(function(){var E=A(this),D=["backgroundImage","backgroundColor","opacity"],G=A.effects.setMode(E,C.options.mode||"show"),F={backgroundColor:E.css("backgroundColor")};if(G=="hide"){F.opacity=0}A.effects.save(E,D);E.show().css({backgroundImage:"none",backgroundColor:C.options.color||"#ffff99"}).animate(F,{queue:false,duration:C.duration,easing:C.options.easing,complete:function(){(G=="hide"&&E.hide());A.effects.restore(E,D);(G=="show"&&!A.support.opacity&&this.style.removeAttribute("filter"));(C.callback&&C.callback.apply(this,arguments));E.dequeue()}})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-effects', location = 'js-vendor/jquery/jquery-ui/jquery.effects.pulsate.js' */
/*
 * jQuery UI Effects Pulsate 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Pulsate
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.pulsate=function(C){return this.queue(function(){var G=A(this),J=A.effects.setMode(G,C.options.mode||"show"),I=((C.options.times||5)*2)-1,H=C.duration?C.duration/2:A.fx.speeds._default/2,D=G.is(":visible"),E=0;if(!D){G.css("opacity",0).show();E=1}if((J=="hide"&&D)||(J=="show"&&!D)){I--}for(var F=0;F<I;F++){G.animate({opacity:E},H,C.options.easing);E=(E+1)%2}G.animate({opacity:E},H,C.options.easing,function(){if(E==0){G.hide()}(C.callback&&C.callback.apply(this,arguments))});G.queue("fx",function(){G.dequeue()}).dequeue()})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-effects', location = 'js-vendor/jquery/jquery-ui/jquery.effects.scale.js' */
/*
 * jQuery UI Effects Scale 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Scale
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.puff=function(C){return this.queue(function(){var G=A(this),H=A.effects.setMode(G,C.options.mode||"hide"),F=parseInt(C.options.percent,10)||150,E=F/100,D={height:G.height(),width:G.width()};A.extend(C.options,{fade:true,mode:H,percent:H=="hide"?F:100,from:H=="hide"?D:{height:D.height*E,width:D.width*E}});G.effect("scale",C.options,C.duration,C.callback);G.dequeue()})};A.effects.scale=function(C){return this.queue(function(){var H=A(this);var E=A.extend(true,{},C.options);var K=A.effects.setMode(H,C.options.mode||"effect");var I=parseInt(C.options.percent,10)||(parseInt(C.options.percent,10)==0?0:(K=="hide"?0:100));var J=C.options.direction||"both";var D=C.options.origin;if(K!="effect"){E.origin=D||["middle","center"];E.restore=true}var G={height:H.height(),width:H.width()};H.from=C.options.from||(K=="show"?{height:0,width:0}:G);var F={y:J!="horizontal"?(I/100):1,x:J!="vertical"?(I/100):1};H.to={height:G.height*F.y,width:G.width*F.x};if(C.options.fade){if(K=="show"){H.from.opacity=0;H.to.opacity=1}if(K=="hide"){H.from.opacity=1;H.to.opacity=0}}E.from=H.from;E.to=H.to;E.mode=K;H.effect("size",E,C.duration,C.callback);H.dequeue()})};A.effects.size=function(C){return this.queue(function(){var D=A(this),O=["position","top","bottom","left","right","width","height","overflow","opacity"];var N=["position","top","bottom","left","right","overflow","opacity"];var K=["width","height","overflow"];var Q=["fontSize"];var L=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"];var G=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"];var H=A.effects.setMode(D,C.options.mode||"effect");var J=C.options.restore||false;var F=C.options.scale||"both";var P=C.options.origin;var E={height:D.height(),width:D.width()};D.from=C.options.from||E;D.to=C.options.to||E;if(P){var I=A.effects.getBaseline(P,E);D.from.top=(E.height-D.from.height)*I.y;D.from.left=(E.width-D.from.width)*I.x;D.to.top=(E.height-D.to.height)*I.y;D.to.left=(E.width-D.to.width)*I.x}var M={from:{y:D.from.height/E.height,x:D.from.width/E.width},to:{y:D.to.height/E.height,x:D.to.width/E.width}};if(F=="box"||F=="both"){if(M.from.y!=M.to.y){O=O.concat(L);D.from=A.effects.setTransition(D,L,M.from.y,D.from);D.to=A.effects.setTransition(D,L,M.to.y,D.to)}if(M.from.x!=M.to.x){O=O.concat(G);D.from=A.effects.setTransition(D,G,M.from.x,D.from);D.to=A.effects.setTransition(D,G,M.to.x,D.to)}}if(F=="content"||F=="both"){if(M.from.y!=M.to.y){O=O.concat(Q);D.from=A.effects.setTransition(D,Q,M.from.y,D.from);D.to=A.effects.setTransition(D,Q,M.to.y,D.to)}}A.effects.save(D,J?O:N);D.show();A.effects.createWrapper(D);D.css("overflow","hidden").css(D.from);if(F=="content"||F=="both"){L=L.concat(["marginTop","marginBottom"]).concat(Q);G=G.concat(["marginLeft","marginRight"]);K=O.concat(L).concat(G);D.find("*[width]").each(function(){var S=A(this);if(J){A.effects.save(S,K)}var R={height:S.height(),width:S.width()};S.from={height:R.height*M.from.y,width:R.width*M.from.x};S.to={height:R.height*M.to.y,width:R.width*M.to.x};if(M.from.y!=M.to.y){S.from=A.effects.setTransition(S,L,M.from.y,S.from);S.to=A.effects.setTransition(S,L,M.to.y,S.to)}if(M.from.x!=M.to.x){S.from=A.effects.setTransition(S,G,M.from.x,S.from);S.to=A.effects.setTransition(S,G,M.to.x,S.to)}S.css(S.from);S.animate(S.to,C.duration,C.options.easing,function(){if(J){A.effects.restore(S,K)}})})}D.animate(D.to,{queue:false,duration:C.duration,easing:C.options.easing,complete:function(){if(D.to.opacity===0){D.css("opacity",D.from.opacity)}if(H=="hide"){D.hide()}A.effects.restore(D,J?O:N);A.effects.removeWrapper(D);if(C.callback){C.callback.apply(this,arguments)}D.dequeue()}})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-effects', location = 'js-vendor/jquery/jquery-ui/jquery.effects.shake.js' */
/*
 * jQuery UI Effects Shake 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Shake
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.shake=function(C){return this.queue(function(){var F=A(this),L=["position","top","bottom","left","right"];var K=A.effects.setMode(F,C.options.mode||"effect");var N=C.options.direction||"left";var D=C.options.distance||20;var E=C.options.times||3;var H=C.duration||C.options.duration||140;A.effects.save(F,L);F.show();A.effects.createWrapper(F);var G=(N=="up"||N=="down")?"top":"left";var P=(N=="up"||N=="left")?"pos":"neg";var I={},O={},M={};I[G]=(P=="pos"?"-=":"+=")+D;O[G]=(P=="pos"?"+=":"-=")+D*2;M[G]=(P=="pos"?"-=":"+=")+D*2;F.animate(I,H,C.options.easing);for(var J=1;J<E;J++){F.animate(O,H,C.options.easing).animate(M,H,C.options.easing)}F.animate(O,H,C.options.easing).animate(I,H/2,C.options.easing,function(){A.effects.restore(F,L);A.effects.removeWrapper(F);if(C.callback){C.callback.apply(this,arguments)}});F.queue("fx",function(){F.dequeue()});F.dequeue()})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-effects', location = 'js-vendor/jquery/jquery-ui/jquery.effects.slide.js' */
/*
 * jQuery UI Effects Slide 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Slide
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.slide=function(C){return this.queue(function(){var F=A(this),E=["position","top","bottom","left","right"];var J=A.effects.setMode(F,C.options.mode||"show");var I=C.options.direction||"left";A.effects.save(F,E);F.show();A.effects.createWrapper(F).css({overflow:"hidden"});var G=(I=="up"||I=="down")?"top":"left";var D=(I=="up"||I=="left")?"pos":"neg";var K=C.options.distance||(G=="top"?F.outerHeight(true):F.outerWidth(true));if(J=="show"){F.css(G,D=="pos"?(isNaN(K)?"-"+K:-K):K)}var H={};H[G]=(J=="show"?(D=="pos"?"+=":"-="):(D=="pos"?"-=":"+="))+K;F.animate(H,{queue:false,duration:C.duration,easing:C.options.easing,complete:function(){if(J=="hide"){F.hide()}A.effects.restore(F,E);A.effects.removeWrapper(F);if(C.callback){C.callback.apply(this,arguments)}F.dequeue()}})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.auiplugin:jquery-effects', location = 'js-vendor/jquery/jquery-ui/jquery.effects.transfer.js' */
/*
 * jQuery UI Effects Transfer 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Transfer
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.transfer=function(C){return this.queue(function(){var G=A(this),I=A(C.options.to),F=I.offset(),H={top:F.top,left:F.left,height:I.innerHeight(),width:I.innerWidth()},E=G.offset(),D=A('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(C.options.className).css({top:E.top,left:E.left,height:G.innerHeight(),width:G.innerWidth(),position:"absolute"}).animate(H,C.duration,C.options.easing,function(){D.remove();(C.callback&&C.callback.apply(G[0],arguments));G.dequeue()})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
