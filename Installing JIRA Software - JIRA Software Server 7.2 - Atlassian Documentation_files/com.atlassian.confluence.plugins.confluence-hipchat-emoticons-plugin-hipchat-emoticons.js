;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-emoticons-plugin:hipchat-emoticons', location = 'lib/rivets.js' */
(function(){var g,u,v,e,s=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1},h=function(a,b){return function(){return a.apply(b,arguments)}},t=[].slice,x={}.hasOwnProperty,q=function(a,b){function c(){this.constructor=a}for(var d in b)x.call(b,d)&&(a[d]=b[d]);c.prototype=b.prototype;a.prototype=new c;a.__super__=b.prototype;return a};g={binders:{},components:{},formatters:{},adapters:{},config:{prefix:"rv",templateDelimiters:["{","}"],rootInterface:".",
preloadData:!0,handler:function(a,b,c){return this.call(a,b,c.view.models)}}};if("jQuery"in window)e="on"in jQuery.prototype?["on","off"]:["bind","unbind"],u=e[0],v=e[1],g.Util={bindEvent:function(a,b,c){return jQuery(a)[u](b,c)},unbindEvent:function(a,b,c){return jQuery(a)[v](b,c)},getInputValue:function(a){a=jQuery(a);return"checkbox"===a.attr("type")?a.is(":checked"):a.val()}};else{e="addEventListener"in window?function(a,b,c){return a.addEventListener(b,c,!1)}:function(a,b,c){return a.attachEvent("on"+
b,c)};var w;w="removeEventListener"in window?function(a,b,c){return a.removeEventListener(b,c,!1)}:function(a,b,c){return a.detachEvent("on"+b,c)};g.Util={bindEvent:e,unbindEvent:w,getInputValue:function(a){var b,c,d,f;if("checkbox"===a.type)return a.checked;if("select-multiple"===a.type){f=[];c=0;for(d=a.length;c<d;c++)b=a[c],b.selected&&f.push(b.value);return f}return a.value}}}e=function(){};e.parse=function(a,b,c){var d,f,j,g;f=[];c={"interface":c,path:""};d=j=0;for(g=a.length;j<g;d=j+=1)d=a.charAt(d),
0<=s.call(b,d)?(f.push(c),c={"interface":d,path:""}):c.path+=d;f.push(c);return f};g.KeypathParser=e;e=function(){};e.types={text:0,binding:1};e.parse=function(a,b){var c,d,f,j;j=[];f=a.length;for(d=0;d<f;)if(c=a.indexOf(b[0],d),0>c){j.push({type:this.types.text,value:a.slice(d)});break}else{0<c&&d<c&&j.push({type:this.types.text,value:a.slice(d,c)});d=c+b[0].length;c=a.indexOf(b[1],d);if(0>c){f=a.slice(d-b[1].length);c=j[j.length-1];(null!=c?c.type:void 0)===this.types.text?c.value+=f:j.push({type:this.types.text,
value:f});break}d=a.slice(d,c).trim();j.push({type:this.types.binding,value:d});d=c+b[1].length}return j};g.TextTemplateParser=e;e=function(a,b,c,d){this.view=a;this.model=b;this.keypath=c;this.callback=d;this.unobserve=h(this.unobserve,this);this.realize=h(this.realize,this);this.value=h(this.value,this);this.publish=h(this.publish,this);this.read=h(this.read,this);this.set=h(this.set,this);this.adapter=h(this.adapter,this);this.update=h(this.update,this);this.initialize=h(this.initialize,this);
this.parse=h(this.parse,this);this.parse();this.initialize()};e.prototype.parse=function(){var a,b,c,d,f;d=this.view.adapters;f=[];for(a in d)(b=d[a])&&f.push(a);(c=this.keypath[0],0<=s.call(f,c))?(b=this.keypath[0],a=this.keypath.substr(1)):(b=this.view.config.rootInterface,a=this.keypath);this.tokens=g.KeypathParser.parse(a,f,b);return this.key=this.tokens.pop()};e.prototype.initialize=function(){this.objectPath=[];this.target=this.realize();if(null!=this.target)return this.set(!0,this.key,this.target,
this.callback)};e.prototype.update=function(){var a,b;if((a=this.realize())!==this.target)if(null!=this.target&&this.set(!1,this.key,this.target,this.callback),null!=a&&this.set(!0,this.key,a,this.callback),b=this.value(),this.target=a,this.value()!==b)return this.callback()};e.prototype.adapter=function(a){return this.view.adapters[a["interface"]]};e.prototype.set=function(a,b,c,d){return this.adapter(b)[a?"subscribe":"unsubscribe"](c,b.path,d)};e.prototype.read=function(a,b){return this.adapter(a).read(b,
a.path)};e.prototype.publish=function(a){if(null!=this.target)return this.adapter(this.key).publish(this.target,this.key.path,a)};e.prototype.value=function(){if(null!=this.target)return this.read(this.key,this.target)};e.prototype.realize=function(){var a,b,c,d,f,j,g,e;a=this.model;f=null;e=this.tokens;b=j=0;for(g=e.length;j<g;b=++j)if(d=e[b],null!=a){if(null!=this.objectPath[b]){if(a!==(c=this.objectPath[b]))this.set(!1,d,c,this.update),this.set(!0,d,a,this.update),this.objectPath[b]=a}else this.set(!0,
d,a,this.update),this.objectPath[b]=a;a=this.read(d,a)}else null==f&&(f=b),(c=this.objectPath[b])&&this.set(!1,d,c,this.update);null!=f&&this.objectPath.splice(f);return a};e.prototype.unobserve=function(){var a,b,c,d,f,j;j=this.tokens;a=d=0;for(f=j.length;d<f;a=++d)c=j[a],(b=this.objectPath[a])&&this.set(!1,c,b,this.update);if(null!=this.target)return this.set(!1,this.key,this.target,this.callback)};g.Observer=e;e=function(a,b,c){var d,f,j,e,i;this.els=a;this.models=b;this.options=null!=c?c:{};this.update=
h(this.update,this);this.publish=h(this.publish,this);this.sync=h(this.sync,this);this.unbind=h(this.unbind,this);this.bind=h(this.bind,this);this.select=h(this.select,this);this.build=h(this.build,this);this.componentRegExp=h(this.componentRegExp,this);this.bindingRegExp=h(this.bindingRegExp,this);this.els.jquery||this.els instanceof Array||(this.els=[this.els]);e=["config","binders","formatters","adapters"];c=0;for(j=e.length;c<j;c++){a=e[c];this[a]={};if(this.options[a])for(d in f=this.options[a],
f)b=f[d],this[a][d]=b;i=g[a];for(d in i)if(b=i[d],null==(f=this[a])[d])f[d]=b}this.build()};e.prototype.bindingRegExp=function(){return RegExp("^"+this.config.prefix+"-")};e.prototype.componentRegExp=function(){return RegExp("^"+this.config.prefix.toUpperCase()+"-")};e.prototype.build=function(){var a,b,c,d,f,j,e,h,n;this.bindings=[];j=[];a=this.bindingRegExp();c=this.componentRegExp();var k=this;b=function(a,b,c,d){var f,j,e;j={};var h,p;p=d.split("|");d=[];f=0;for(h=p.length;f<h;f++)e=p[f],d.push(e.trim());
var i;i=d.shift().split("<");e=[];h=0;for(p=i.length;h<p;h++)f=i[h],e.push(f.trim());f=e.shift();j.formatters=d;if(d=e.shift())j.dependencies=d.split(/\s+/);return k.bindings.push(new g[a](k,b,c,f,j))};var l=this;f=function(d){var e,h,p,i,k,m,n,q,r,o,t;if(0>s.call(j,d)){if(3===d.nodeType){if(m=g.TextTemplateParser,i=l.config.templateDelimiters)if((e=m.parse(d.data,i)).length&&!(1===e.length&&e[0].type===m.types.text)){r=0;for(o=e.length;r<o;r++)m=e[r],i=document.createTextNode(m.value),d.parentNode.insertBefore(i,
d),1===m.type&&b("TextBinding",i,null,m.value);d.parentNode.removeChild(d)}}else if(c.test(d.tagName))k=d.tagName.replace(c,"").toLowerCase(),l.bindings.push(new g.ComponentBinding(l,d,k));else if(null!=d.attributes){o=d.attributes;m=0;for(r=o.length;m<r;m++)if(e=o[m],a.test(e.name)){k=e.name.replace(a,"");if(!(p=l.binders[k]))for(i in t=l.binders,t)q=t[i],"*"!==i&&-1!==i.indexOf("*")&&(n=RegExp("^"+i.replace("*",".+")+"$"),n.test(k)&&(p=q));p||(p=l.binders["*"]);if(p.block){n=d.childNodes;h=0;for(p=
n.length;h<p;h++)k=n[h],j.push(k);h=[e]}}r=h||d.attributes;i=0;for(m=r.length;i<m;i++)e=r[i],a.test(e.name)&&(k=e.name.replace(a,""),b("Binding",d,k,e.value))}m=d.childNodes;d=[];i=0;for(e=m.length;i<e;i++)k=m[i],d.push(k);r=[];m=0;for(i=d.length;m<i;m++)e=d[m],r.push(f(e));return r}};n=this.els;e=0;for(h=n.length;e<h;e++)d=n[e],f(d)};e.prototype.select=function(a){var b,c,d,f,e;f=this.bindings;e=[];c=0;for(d=f.length;c<d;c++)b=f[c],a(b)&&e.push(b);return e};e.prototype.bind=function(){var a,b,c,
d,f;d=this.bindings;f=[];b=0;for(c=d.length;b<c;b++)a=d[b],f.push(a.bind());return f};e.prototype.unbind=function(){var a,b,c,d,f;d=this.bindings;f=[];b=0;for(c=d.length;b<c;b++)a=d[b],f.push(a.unbind());return f};e.prototype.sync=function(){var a,b,c,d,f;d=this.bindings;f=[];b=0;for(c=d.length;b<c;b++)a=d[b],f.push(a.sync());return f};e.prototype.publish=function(){var a,b,c,d,f;d=this.select(function(a){return a.binder.publishes});f=[];b=0;for(c=d.length;b<c;b++)a=d[b],f.push(a.publish());return f};
e.prototype.update=function(a){var b,c,d,f,e;null==a&&(a={});for(b in a)c=a[b],this.models[b]=c;f=this.bindings;e=[];c=0;for(d=f.length;c<d;c++)b=f[c],e.push(b.update(a));return e};g.View=e;e=function(a,b,c,d,f){this.view=a;this.el=b;this.type=c;this.keypath=d;this.options=null!=f?f:{};this.update=h(this.update,this);this.unbind=h(this.unbind,this);this.bind=h(this.bind,this);this.publish=h(this.publish,this);this.sync=h(this.sync,this);this.set=h(this.set,this);this.eventHandler=h(this.eventHandler,
this);this.formattedValue=h(this.formattedValue,this);this.setBinder=h(this.setBinder,this);this.formatters=this.options.formatters||[];this.dependencies=[];this.model=void 0;this.setBinder()};e.prototype.setBinder=function(){var a,b,c,d;if(!(this.binder=this.view.binders[this.type]))for(a in d=this.view.binders,d)c=d[a],"*"!==a&&-1!==a.indexOf("*")&&(b=RegExp("^"+a.replace("*",".+")+"$"),b.test(this.type)&&(this.binder=c,this.args=RegExp("^"+a.replace("*","(.+)")+"$").exec(this.type),this.args.shift()));
this.binder||(this.binder=this.view.binders["*"]);if(this.binder instanceof Function)return this.binder={routine:this.binder}};e.prototype.formattedValue=function(a){var b,c,d,f,e;e=this.formatters;d=0;for(f=e.length;d<f;d++)c=e[d],b=c.split(/\s+/),c=b.shift(),c=this.view.formatters[c],(null!=c?c.read:void 0)instanceof Function?a=c.read.apply(c,[a].concat(t.call(b))):c instanceof Function&&(a=c.apply(null,[a].concat(t.call(b))));return a};e.prototype.eventHandler=function(a){var b,c;c=(b=this).view.config.handler;
return function(d){return c.call(a,this,d,b)}};e.prototype.set=function(a){var b,a=a instanceof Function&&!this.binder["function"]?this.formattedValue(a.call(this.model)):this.formattedValue(a);return null!=(b=this.binder.routine)?b.call(this,this.el,a):void 0};e.prototype.sync=function(){var a,b,c,d,f;if(this.model!==this.observer.target){d=this.dependencies;b=0;for(c=d.length;b<c;b++)a=d[b],a.unobserve();this.dependencies=[];if(null!=(this.model=this.observer.target)&&null!=(f=this.options.dependencies)&&
f.length){d=this.options.dependencies;b=0;for(c=d.length;b<c;b++)a=d[b],a=new g.Observer(this.view,this.model,a,this.sync),this.dependencies.push(a)}}return this.set(this.observer.value())};e.prototype.publish=function(){var a,b,c,d,f,e,h,i;c=g.Util.getInputValue(this.el);e=this.formatters.slice(0).reverse();d=0;for(f=e.length;d<f;d++)if(a=e[d],a=a.split(/\s+/),b=a.shift(),null!=(h=this.view.formatters[b])&&h.publish)c=(i=this.view.formatters[b]).publish.apply(i,[c].concat(t.call(a)));return this.observer.publish(c)};
e.prototype.bind=function(){var a,b,c,d;null!=(b=this.binder.bind)&&b.call(this,this.el);this.observer=new g.Observer(this.view,this.view.models,this.keypath,this.sync);this.model=this.observer.target;if(null!=this.model&&null!=(c=this.options.dependencies)&&c.length){d=this.options.dependencies;b=0;for(c=d.length;b<c;b++)a=d[b],a=new g.Observer(this.view,this.model,a,this.sync),this.dependencies.push(a)}if(this.view.config.preloadData)return this.sync()};e.prototype.unbind=function(){var a,b,c,d;
null!=(a=this.binder.unbind)&&a.call(this,this.el);this.observer.unobserve();d=this.dependencies;b=0;for(c=d.length;b<c;b++)a=d[b],a.unobserve();return this.dependencies=[]};e.prototype.update=function(a){var b;null==a&&(a={});this.model=this.observer.target;this.unbind();null!=(b=this.binder.update)&&b.call(this,a);return this.bind()};g.Binding=e;e=function(a,b,c){var d,f;this.view=a;this.el=b;this.type=c;this.unbind=h(this.unbind,this);this.bind=h(this.bind,this);this.update=h(this.update,this);
this.locals=h(this.locals,this);this.component=g.components[this.type];this.attributes={};this.inflections={};d=this.el.attributes||[];b=0;for(c=d.length;b<c;b++)a=d[b],(f=a.name,0<=s.call(this.component.attributes,f))?this.attributes[a.name]=a.value:this.inflections[a.name]=a.value};q(e,g.Binding);e.prototype.sync=function(){};e.prototype.locals=function(a){var b,c,d,f,e,g,h;null==a&&(a=this.view.models);f={};d=this.inflections;for(c in d){b=d[c];h=b.split(".");e=0;for(g=h.length;e<g;e++)b=h[e],
f[c]=(f[c]||a)[b]}for(c in a)d=a[c],null==f[c]&&(f[c]=d);return f};e.prototype.update=function(a){var b;return null!=(b=this.componentView)?b.update(this.locals(a)):void 0};e.prototype.bind=function(){var a;if(null!=this.componentView)return null!=(a=this.componentView)?a.bind():void 0;a=this.component.build.call(this.attributes);(this.componentView=new g.View(a,this.locals(),this.view.options)).bind();return this.el.parentNode.replaceChild(a,this.el)};e.prototype.unbind=function(){var a;return null!=
(a=this.componentView)?a.unbind():void 0};g.ComponentBinding=e;var o=function(a,b,c,d,f){this.view=a;this.el=b;this.type=c;this.keypath=d;this.options=null!=f?f:{};this.sync=h(this.sync,this);this.formatters=this.options.formatters||[];this.dependencies=[]};q(o,g.Binding);o.prototype.binder={routine:function(a,b){return a.data=null!=b?b:""}};o.prototype.sync=function(){return o.__super__.sync.apply(this,arguments)};g.TextBinding=o;g.adapters["."]={id:"_rv",counter:0,weakmap:{},weakReference:function(a){var b;
a.hasOwnProperty(this.id)||(b=this.counter++,this.weakmap[b]={callbacks:{}},Object.defineProperty(a,this.id,{value:b}));return this.weakmap[a[this.id]]},stubFunction:function(a,b){var c,d,f;d=a[b];c=this.weakReference(a);f=this.weakmap;return a[b]=function(){var b,e,g,h,k,l,o,s,q;g=d.apply(a,arguments);l=c.pointers;for(e in l){b=l[e];q=null!=(o=null!=(s=f[e])?s.callbacks[b]:void 0)?o:[];h=0;for(k=q.length;h<k;h++)b=q[h],b()}return g}},observeMutations:function(a,b,c){var d,f,e,g,h;if(Array.isArray(a)){e=
this.weakReference(a);if(null==e.pointers){e.pointers={};f="push pop shift unshift sort reverse splice".split(" ");g=0;for(h=f.length;g<h;g++)d=f[g],this.stubFunction(a,d)}if(null==(a=e.pointers)[b])a[b]=[];if(0>s.call(e.pointers[b],c))return e.pointers[b].push(c)}},unobserveMutations:function(a,b,c){var d,f;if(Array.isArray(a&&null!=a[this.id])&&(d=null!=(f=this.weakReference(a).pointers)?f[b]:void 0))if(a=d.indexOf(c),0<=a)return d.splice(a,1)},subscribe:function(a,b,c){var d,f;d=this.weakReference(a).callbacks;
null==d[b]&&(d[b]=[],f=a[b],Object.defineProperty(a,b,{enumerable:!0,get:function(){return f},set:function(e){return function(g){var h,n,k;if(g!==f){f=g;k=d[b].slice();h=0;for(n=k.length;h<n;h++)c=k[h],0<=s.call(d[b],c)&&c();return e.observeMutations(g,a[e.id],b)}}}(this)}));0>s.call(d[b],c)&&d[b].push(c);return this.observeMutations(a[b],a[this.id],b)},unsubscribe:function(a,b,c){var d;d=this.weakmap[a[this.id]].callbacks[b];c=d.indexOf(c);0<=c&&d.splice(c,1);return this.unobserveMutations(a[b],
a[this.id],b)},read:function(a,b){return a[b]},publish:function(a,b,c){return a[b]=c}};g.binders.text=function(a,b){return null!=a.textContent?a.textContent=null!=b?b:"":a.innerText=null!=b?b:""};g.binders.html=function(a,b){return a.innerHTML=null!=b?b:""};g.binders.show=function(a,b){return a.style.display=b?"":"none"};g.binders.hide=function(a,b){return a.style.display=b?"none":""};g.binders.enabled=function(a,b){return a.disabled=!b};g.binders.disabled=function(a,b){return a.disabled=!!b};g.binders.checked=
{publishes:!0,bind:function(a){return g.Util.bindEvent(a,"change",this.publish)},unbind:function(a){return g.Util.unbindEvent(a,"change",this.publish)},routine:function(a,b){var c;return"radio"===a.type?a.checked=(null!=(c=a.value)?c.toString():void 0)===(null!=b?b.toString():void 0):a.checked=!!b}};g.binders.unchecked={publishes:!0,bind:function(a){return g.Util.bindEvent(a,"change",this.publish)},unbind:function(a){return g.Util.unbindEvent(a,"change",this.publish)},routine:function(a,b){var c;
return"radio"===a.type?a.checked=(null!=(c=a.value)?c.toString():void 0)!==(null!=b?b.toString():void 0):a.checked=!b}};g.binders.value={publishes:!0,bind:function(a){return g.Util.bindEvent(a,"change",this.publish)},unbind:function(a){return g.Util.unbindEvent(a,"change",this.publish)},routine:function(a,b){var c,d,f,e,g;if(null!=window.jQuery){if(a=jQuery(a),(null!=b?b.toString():void 0)!==(null!=(c=a.val())?c.toString():void 0))return a.val(null!=b?b:"")}else if("select-multiple"===a.type){if(null!=
b){g=[];d=0;for(f=a.length;d<f;d++)c=a[d],g.push(c.selected=(e=c.value,0<=s.call(b,e)));return g}}else if((null!=b?b.toString():void 0)!==(null!=(d=a.value)?d.toString():void 0))return a.value=null!=b?b:""}};g.binders["if"]={block:!0,bind:function(a){var b,c;if(null==this.marker)return b=[this.view.config.prefix,this.type].join("-").replace("--","-"),c=a.getAttribute(b),this.marker=document.createComment(" rivets: "+this.type+" "+c+" "),a.removeAttribute(b),a.parentNode.insertBefore(this.marker,a),
a.parentNode.removeChild(a)},unbind:function(){var a;return null!=(a=this.nested)?a.unbind():void 0},routine:function(a,b){var c,d,f,e;if(!!b===(null==this.nested)){if(b){f={};e=this.view.models;for(c in e)d=e[c],f[c]=d;c={binders:this.view.options.binders,formatters:this.view.options.formatters,adapters:this.view.options.adapters,config:this.view.options.config};(this.nested=new g.View(a,f,c)).bind();return this.marker.parentNode.insertBefore(a,this.marker.nextSibling)}a.parentNode.removeChild(a);
this.nested.unbind();return delete this.nested}},update:function(a){var b;return null!=(b=this.nested)?b.update(a):void 0}};g.binders.unless={block:!0,bind:function(a){return g.binders["if"].bind.call(this,a)},unbind:function(){return g.binders["if"].unbind.call(this)},routine:function(a,b){return g.binders["if"].routine.call(this,a,!b)},update:function(a){return g.binders["if"].update.call(this,a)}};g.binders["on-*"]={"function":!0,unbind:function(a){if(this.handler)return g.Util.unbindEvent(a,this.args[0],
this.handler)},routine:function(a,b){this.handler&&g.Util.unbindEvent(a,this.args[0],this.handler);return g.Util.bindEvent(a,this.args[0],this.handler=this.eventHandler(b))}};g.binders["each-*"]={block:!0,bind:function(a){var b,c,d;if(null==this.marker)b=[this.view.config.prefix,this.type].join("-").replace("--","-"),this.marker=document.createComment(" rivets: "+this.type+" "),this.iterated=[],a.removeAttribute(b),a.parentNode.insertBefore(this.marker,a),a.parentNode.removeChild(a);else{d=this.iterated;
b=0;for(c=d.length;b<c;b++)a=d[b],a.bind()}},unbind:function(){var a,b,c,d,f;if(null!=this.iterated){d=this.iterated;f=[];b=0;for(c=d.length;b<c;b++)a=d[b],f.push(a.unbind());return f}},routine:function(a,b){var c,d,f,e,h,i,n,k,l,o;i=this.args[0];b=b||[];if(this.iterated.length>b.length){l=Array(this.iterated.length-b.length);k=0;for(l=l.length;k<l;k++)d=this.iterated.pop(),d.unbind(),this.marker.parentNode.removeChild(d.els[0])}f=k=0;for(l=b.length;k<l;f=++k)if(h=b[f],d={index:f},d[i]=h,null==this.iterated[f]){f=
this.view.models;for(e in f)h=f[e],null==d[e]&&(d[e]=h);h=this.iterated.length?this.iterated[this.iterated.length-1].els[0]:this.marker;f={binders:this.view.options.binders,formatters:this.view.options.formatters,adapters:this.view.options.adapters,config:{}};o=this.view.options.config;for(c in o)n=o[c],f.config[c]=n;f.config.preloadData=!0;n=a.cloneNode(!0);d=new g.View(n,d,f);d.bind();this.iterated.push(d);this.marker.parentNode.insertBefore(n,h.nextSibling)}else this.iterated[f].models[i]!==h&&
this.iterated[f].update(d);if("OPTION"===a.nodeName){k=this.view.bindings;l=[];e=0;for(i=k.length;e<i;e++)c=k[e],c.el===this.marker.parentNode&&"value"===c.type?l.push(c.sync()):l.push(void 0);return l}},update:function(a){var b,c,d,e,g;b={};for(c in a)d=a[c],c!==this.args[0]&&(b[c]=d);e=this.iterated;g=[];c=0;for(d=e.length;c<d;c++)a=e[c],g.push(a.update(b));return g}};g.binders["class-*"]=function(a,b){var c;c=" "+a.className+" ";if(!b===(-1!==c.indexOf(" "+this.args[0]+" ")))return a.className=
b?""+a.className+" "+this.args[0]:c.replace(" "+this.args[0]+" "," ").trim()};g.binders["*"]=function(a,b){return null!=b?a.setAttribute(this.type,b):a.removeAttribute(this.type)};g.factory=function(a){a._=g;a.binders=g.binders;a.components=g.components;a.formatters=g.formatters;a.adapters=g.adapters;a.config=g.config;a.configure=function(a){var c,d;null==a&&(a={});for(c in a)d=a[c],g.config[c]=d};return a.bind=function(a,c,d){null==c&&(c={});null==d&&(d={});a=new g.View(a,c,d);a.bind();return a}};
q={};g.factory(q);define("rivets",q)}).call(this);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-emoticons-plugin:hipchat-emoticons', location = 'data/DataManager.js' */
define("confluence-hipchat-emoticons/data/DataManager",["ajs","jquery"],function(g,h){var d,b=[],c={},e=function(a){a&&(c={},a.forEach(function(a){c[a.shortcut]=a}))},f=function(){return h.ajax({url:g.contextPath()+"/rest/emoticons/1.0/",type:"get",dataType:"json",cache:!1}).then(function(a){localStorage.setItem("hipchat.emoticons.data",JSON.stringify(a))}).then(function(a){b=a.hipchat;e(b)})};return{initializeData:function(){var a=JSON.parse(localStorage.getItem("hipchat.emoticons.data"));a&&(b=
a.hipchat,e(b));d=f()},loadRemoteData:f,getAuthoritativeEmoticons:function(){return d},getHipChatEmoticon:function(a){return c[a]}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-emoticons-plugin:hipchat-emoticons', location = 'insertion/EmoticonInserter.js' */
define("confluence-hipchat-emoticons/insertion/EmoticonInserter",["ajs"],function(e){return{insertEmoticon:function(a,f){var c=e.Rte.getEditor();if(f){var b=$(c.getContainer()),d=null;if(b.parents("#comments-section").length)d="comment";else if(b.parents(".ic-comment-container").length)d="inlinecomment";else if(b.parents("#editpageform").length||b.parents("#createpageform").length)d=b.parents(".blogpost").length?"blog":"page";d&&e.trigger("analyticsEvent",{name:"confluence.hipchat.emoticons.insert."+
f,data:{shortcut:a.shortcut,source:d}})}b=c.dom.createHTML("img",a.name?{src:a.url,alt:a.name+" "+a.shortcut,title:a.name+" "+a.shortcut,border:0,"class":"emoticon emoticon-"+a.name,"data-emoticon-name":a.name}:{src:a.url,alt:"("+a.shortcut+")",title:"("+a.shortcut+")",border:0,"class":"emoticon emoticon-"+a.shortcut,"data-hipchat-emoticon":a.shortcut});c.execCommand("mceInsertContent",!1,b,{skip_undo:!0});c.undoManager.beforeChange();c.undoManager.add()}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-emoticons-plugin:hipchat-emoticons', location = 'completion/CompletionManager.js' */
define("confluence-hipchat-emoticons/completion/CompletionManager","ajs jquery underscore confluence-hipchat-emoticons/completion/Utilities confluence-hipchat-emoticons/data/DataManager confluence-hipchat-emoticons/insertion/EmoticonInserter".split(" "),function(g,h,n,f,i,j){function k(c,b,a){if(!b)throw Error("text node is null");if(b.nodeType!=3){b=b.childNodes[a-1];a=b.length}for(;b&&b.nodeType==3;b=b.previousSibling){if(a==-1)a=b.nodeValue.length;if(a>c)return{container:b,offset:a-c};if(a==c){a=
0;for(c=b.parentNode;b.previousSibling;){b=b.previousSibling;a++}return{container:c,offset:a}}c=c-a;a=-1}return null}var l=/\(([A-Za-z0-9]+)$/,m=function(c,b){if(f.getCharCode(b)===41){var a;a=f.getTextFromPreviousSiblingTextNodes(c.selection.getRng(true));if(a=l.exec(a)){a=a[1];if(a=i.getHipChatEmoticon(a)){var d,e;c.execCommand("mceInsertContent",false,")");c.undoManager.beforeChange();c.undoManager.add();d=c.selection.getRng(true);f.getTextFromPreviousSiblingTextNodes(d);e=k(a.shortcut.length+
1+1,d.commonAncestorContainer,d.startOffset);d.setStart(e.container,e.offset);e=h(d.commonAncestorContainer);c.selection.setRng(d);if(e.closest(".wysiwyg-macro-body").length&&d.toString()==e.text()){e[0].innerHTML="<br>";c.selection.select(e[0].childNodes[0]);c.selection.collapse(true)}else c.execCommand("delete",false,{},{skip_undo:true});j.insertEmoticon(a,"autoformat");tinymce.dom.Event.cancel(b);a=false}else a=true}else a=true;return a}};return{start:function(){g.Rte.BootstrapManager.addOnInitCallback(function(){g.Rte.getEditor().onKeyPress.addToTop(m)})}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-emoticons-plugin:hipchat-emoticons', location = 'completion/Utilities.js' */
define("confluence-hipchat-emoticons/completion/Utilities",["jquery"],function(d){return{getTextFromPreviousSiblingTextNodes:function(b){var a,c;if(!b||!b.collapsed)throw Error("range is null or not collapsed");a=b.startContainer;c=b.startOffset;if(1==a.nodeType&&0<c)if(a=a.childNodes[b.startOffset-1],3==a.nodeType)c=a.nodeValue.length;else return"";else if(3!=a.nodeType)return"";b=a.nodeValue.substring(0,c);for(a=a.previousSibling;a&&3==a.nodeType;a=a.previousSibling)b=a.nodeValue+b;return b},getCharCode:function(b){return d.browser.msie?
b.keyCode:b.which}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-emoticons-plugin:hipchat-emoticons', location = 'dialog/DialogEmoticon.js' */
define("confluence-hipchat-emoticons/dialog/DialogEmoticon",["underscore"],function(b){var c=function(a){this.name=a.name;this.shortcut=a.shortcut;this.fullShortcut=a.fullShortcut;this.url=a.url;this.onClick=a.onClick&&b.bind(a.onClick,this,this);this.visible=!0;this._initializeCaption(a)};b.extend(c.prototype,{onKeypress:function(a){13==a.keyCode&&this.click()},_initializeCaption:function(a){a.selectedText?(this.selectedCaptionPortion=a.selectedText,a=this.fullShortcut.indexOf(this.selectedCaptionPortion),
this.leftCaptionPortion=this.fullShortcut.substring(0,a),this.rightCaptionPortion=this.fullShortcut.substring(a+this.selectedCaptionPortion.length)):(this.leftCaptionPortion=this.fullShortcut,this.rightCaptionPortion=this.selectedCaptionPortion="")}});return c});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-emoticons-plugin:hipchat-emoticons', location = 'dialog/EmoticonDialog.js' */
define("confluence-hipchat-emoticons/dialog/EmoticonDialog","ajs jquery rivets underscore confluence-hipchat-emoticons/dialog/DialogEmoticon confluence-hipchat-emoticons/dialog/EmoticonDialogModel confluence-hipchat-emoticons/dialog/Templates".split(" "),function(d,c,e,f,a,g,h){a=function(){var a=new g({dialog:this}),b=c(h.emoticonDialog())[0];document.body.appendChild(b);this._dialog=d.dialog2(b);e.bind(b,a);c(b.querySelector(".loading-spinner")).spin("large");this._dialog.on("show",function(){a.update(a.filterText=
"")})};f.extend(a.prototype,{show:function(){this._dialog.show()},close:function(){this._dialog.hide()}});return a});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-emoticons-plugin:hipchat-emoticons', location = 'dialog/EmoticonDialogModel.js' */
define("confluence-hipchat-emoticons/dialog/EmoticonDialogModel",["ajs","underscore","confluence-hipchat-emoticons/data/DataManager","confluence-hipchat-emoticons/insertion/EmoticonInserter","confluence-hipchat-emoticons/dialog/DialogEmoticon"],function(d,h,e,f,g){var c=function(b){var a=this;this.close=function(){b.dialog.close()};this.onFilterSubmit=function(a){return a.preventDefault()};this.onFilterUpdate=function(){a.update(this.value)};var c=function(b){f.insertEmoticon(b);a.close()},i=function(b){f.insertEmoticon(b,
"gallery");a.close()};this.isAdmin=d.Meta.getBoolean("is-admin");this.isHipChatIntegrated=!1;this.loadEmoticons=function(){var b=a.isError?e.loadRemoteData():e.getAuthoritativeEmoticons();a.isLoading=!0;a.isError=!1;a.showEmoticons=!1;a.showHipChatEmoticons=!1;b.then(function(b){a.isLoading=!1;a.hipchatEmoticons=b.hipchat.map(function(a){return new g({shortcut:a.shortcut,fullShortcut:"("+a.shortcut+")",url:a.url,onClick:i})});a.confluenceEmoticons=b.confluence.map(function(a){return new g({name:a.name,
shortcut:a.shortcut,fullShortcut:a.shortcut,url:a.url,onClick:c})});a.showEmoticons=!0;a.showHipChatEmoticons=Boolean(d.Meta.get("remote-user"));a.allEmoticons=h.union(a.confluenceEmoticons,a.hipchatEmoticons);a.isHipChatIntegrated=b.hipchatIntegrated;setTimeout(function(){document.querySelector("#hipchat-emoticons-filter").focus();document.querySelector("#hipchat-emoticons-filter").select()},100)}).fail(function(){a.isError=!0;a.isLoading=!1})}.bind(this);this.loadEmoticons()};c.prototype.update=
function(b){this._previousFilterText!==b&&(this._previousFilterText=b,(this.allEmoticons||[]).forEach(function(a){a.visible=0<=a.fullShortcut.indexOf(b)}))};return c});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-emoticons-plugin:hipchat-emoticons', location = 'dialog/templates.soy' */
// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.HipChatEmoticons.Dialog.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.HipChatEmoticons == 'undefined') { Confluence.Templates.HipChatEmoticons = {}; }
if (typeof Confluence.Templates.HipChatEmoticons.Dialog == 'undefined') { Confluence.Templates.HipChatEmoticons.Dialog = {}; }


Confluence.Templates.HipChatEmoticons.Dialog.emoticonDialog = function(opt_data, opt_ignored) {
  return '<section role="dialog" id="insert-hipchat-emoticon-dialog" class="aui-layer aui-dialog2 aui-dialog2-medium" aria-hidden="true"><header class="aui-dialog2-header"><h2 class="aui-dialog2-header-main">' + soy.$$escapeHtml("Insert emoticon") + '</h2><div class="aui-dialog2-header-secondary"><form class="aui" action="#"><input id="hipchat-emoticons-filter" class="text medium-field" type="search" rv-show="showEmoticons" rv-value="filterText" rv-on-keyup="onFilterUpdate" rv-on-submit="onFilterSubmit" placeholder="' + soy.$$escapeHtml("Search") + '"></form></div><a class="aui-dialog2-header-close"><span class="aui-icon aui-icon-small aui-iconfont-close-dialog">' + soy.$$escapeHtml("Cancel") + '</span></a></header><div class="aui-dialog2-content"><div class="emoticon-gallery"><div rv-show="isLoading" class="loading-spinner"></div><div rv-show="isError" class="error"><p><span class="aui-icon aui-icon-large aui-iconfont-error"></span></p><p>Oh dear, it seems we had some trouble loading your emoticons. Please click the button below to try loading them again.</p><p><button class="aui-button aui-button-primary" id="hipchat-emoticons-error-rety" rv-on-click="loadEmoticons">Retry</button></p></div><div rv-show="showEmoticons" class="emoticons-panel confluence-emoticons-panel"><h4 class="emoticons-panel-header">' + soy.$$escapeHtml("Confluence") + '</h4><hr>' + Confluence.Templates.HipChatEmoticons.Dialog.confluenceEmoticons(null) + '</div><div rv-show="showHipChatEmoticons" class="emoticons-panel hipchat-emoticons-panel"><h4 class="emoticons-panel-header">' + soy.$$escapeHtml("HipChat") + '</h4><hr>' + Confluence.Templates.HipChatEmoticons.Dialog.hipchatEmoticons(null) + '<div rv-hide="isHipChatIntegrated" class="aui-message info"><span class="aui-icon icon-hint"></span><span rv-show="isAdmin">' + soy.$$filterNoAutoescape(AJS.format("HipChat emoticons are not available as Confluence is not integrated with HipChat. {0}Click here{1} to integrate.",'<a target="_blank" href="' + "" + '/plugins/servlet/hipchat/configure">','</a>')) + '</span><span rv-hide="isAdmin">' + soy.$$filterNoAutoescape("HipChat emoticons are not available as Confluence is not integrated with HipChat. Please contact your administrator for integration.") + '</span></div></div></div></div><footer class="aui-dialog2-footer"><div class="aui-dialog2-footer-actions"><button class="aui-button aui-button-link close-button" rv-on-click="close">' + soy.$$escapeHtml("Cancel") + '</button></div></footer></section>';
};
if (goog.DEBUG) {
  Confluence.Templates.HipChatEmoticons.Dialog.emoticonDialog.soyTemplateName = 'Confluence.Templates.HipChatEmoticons.Dialog.emoticonDialog';
}


Confluence.Templates.HipChatEmoticons.Dialog.confluenceEmoticons = function(opt_data, opt_ignored) {
  return '<div class="confluence-emoticons">' + Confluence.Templates.HipChatEmoticons.Dialog.genericEmoticonRepeater({modelDataAttribute: 'confluenceEmoticons'}) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.HipChatEmoticons.Dialog.confluenceEmoticons.soyTemplateName = 'Confluence.Templates.HipChatEmoticons.Dialog.confluenceEmoticons';
}


Confluence.Templates.HipChatEmoticons.Dialog.hipchatEmoticons = function(opt_data, opt_ignored) {
  return '<div class="hipchat-emoticons">' + Confluence.Templates.HipChatEmoticons.Dialog.genericEmoticonRepeater({modelDataAttribute: 'hipchatEmoticons'}) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.HipChatEmoticons.Dialog.hipchatEmoticons.soyTemplateName = 'Confluence.Templates.HipChatEmoticons.Dialog.hipchatEmoticons';
}


Confluence.Templates.HipChatEmoticons.Dialog.genericEmoticonRepeater = function(opt_data, opt_ignored) {
  return '<div rv-show="emoticon.visible" rv-each-emoticon="' + soy.$$escapeHtml(opt_data.modelDataAttribute) + '" class="gallery-item" rv-data-shortcut="emoticon.shortcut" rv-data-full-shortcut="emoticon.fullShortcut" rv-on-click="emoticon.onClick" rv-on-keydown="emoticon.onKeypress" tabindex="0"><img rv-src="emoticon.url"><br/><span class="caption"><span rv-text="emoticon.leftCaptionPortion"></span><strong rv-text="emoticon.selectedCaptionPortion"></strong><span rv-text="emoticon.rightCaptionPortion"></span></span></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.HipChatEmoticons.Dialog.genericEmoticonRepeater.soyTemplateName = 'Confluence.Templates.HipChatEmoticons.Dialog.genericEmoticonRepeater';
}

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-emoticons-plugin:hipchat-emoticons', location = 'dialog/Templates.js' */
define("confluence-hipchat-emoticons/dialog/Templates",function(){return window.Confluence.Templates.HipChatEmoticons.Dialog});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-emoticons-plugin:hipchat-emoticons', location = 'menu/MenuItemOverrider.js' */
define("confluence-hipchat-emoticons/menu/MenuItemOverrider",["ajs","jquery","confluence-hipchat-emoticons/dialog/EmoticonDialog"],function(d,a,c){return{start:function(){var b=null;a(".content-emoticon").off("click").on("click",function(a){b||(b=new c);b.show();a.preventDefault()})}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-emoticons-plugin:hipchat-emoticons', location = 'hipchat-emoticons.js' */
define("confluence-hipchat-emoticons",["jquery","confluence-hipchat-emoticons/completion/CompletionManager","confluence-hipchat-emoticons/data/DataManager","confluence-hipchat-emoticons/menu/MenuItemOverrider"],function(c,d,a,e){c(document).on("postPaste",function(b,d,a){b=c("img",a.node);b.data("hipchatEmoticon")&&b.removeClass("confluence-embedded-image confluence-external-resource")});return{start:function(){a.initializeData();d.start();e.start()}}});AJS.bind("init.rte",function(){require("confluence-hipchat-emoticons").start()});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-emoticons-plugin:hipchat-emoticons', location = 'tinymce-plugin.js' */
(function(){var t=tinymce.dom.TreeWalker,c=tinymce.VK;tinymce.PluginManager.requireLangPack("noneditable");tinymce.create("tinymce.plugins.UnknownHipChatEmoticonPlugin",{init:function(h){h.onPreInit.add(function(){var l=function(a){var b;if(1===a.nodeType){if((b=a.getAttribute("data-mce-unknownhipchatemoticon"))&&"inherit"!==b)return b;b=a.contentEditable;if("inherit"!==b)return b}return null},k=function(a){for(var b;a;){if(b=l(a))return"false"===b?a:null;a=a.parentNode}},v=function(a){for(;a;){if(a.id===
u)return a;a=a.parentNode}},w=function(a){var b;if(a){b=new t(a,a);for(a=b.current();a;a=b.next())if(3===a.nodeType)return a}},x=function(a,b){var e,c;if("false"===l(a)&&j.isBlock(a))g.select(a);else return c=j.createRng(),"true"===l(a)&&(a.firstChild||a.appendChild(h.getDoc().createTextNode("\u00a0")),a=a.firstChild,b=!0),e=j.create("span",{id:u,"data-mce-bogus":!0},p),b?a.parentNode.insertBefore(e,a):j.insertAfter(e,a),c.setStart(e.firstChild,1),c.collapse(!0),g.setRng(c),e},y=function(a){var b,
e;if(a)e=g.getRng(!0),e.setStartBefore(a),e.setEndBefore(a),(b=w(a))&&b.nodeValue.charAt(0)==p&&b.deleteData(0,1),j.remove(a,!0),g.setRng(e);else for(e=v(g.getStart());(a=j.get(u))&&a!==b;)e!==a&&((b=w(a))&&b.nodeValue.charAt(0)==p&&b.deleteData(0,1),j.remove(a,!0)),b=a},s=function(){function a(a,b){var e,c,g;e=d.startContainer;c=d.startOffset;if(3==e.nodeType){if(g=e.nodeValue.length,0<c&&c<g||(b?c==g:0==c))return}else if(c<e.childNodes.length)e=e.childNodes[!b&&0<c?c-1:c],e.hasChildNodes()&&(e=
e.firstChild);else return!b?a:null;for(e=new t(e,a);c=e[b?"prev":"next"]();){if(3===c.nodeType&&0<c.nodeValue.length)return;if("true"===l(c))return c}return a}var b,e,c,d;y();c=g.isCollapsed();b=k(g.getStart());e=k(g.getEnd());if(b||e)d=g.getRng(!0),c?(b=b||e,a(b,!0)?(b=a(b,!0),x(b,!0)):a(b,!1)?(b=a(b,!1),x(b,!1)):g.select(b)):(d=g.getRng(!0),b&&d.setStartBefore(b),e&&d.setEndAfter(e),g.setRng(d))},j=h.dom,g=h.selection,u="mce_noneditablecaret",p="\ufeff",o=h.getParam("noneditable_prevent_delete");
h.onMouseUp.addToTop(s);h.onMouseDown.addToTop(s);h.onKeyDown.addToTop(function(a,b){function e(a,b){g.select(a);g.collapse(b)}function h(b){function e(a){for(var b=d;b;){if(b===a)return;b=b.parentNode}j.remove(a);s()}var c,d,f;c=g.getRng(!0);d=c.startContainer;c=c.startOffset;d=v(d)||d;if(g.isCollapsed()){if(f=k(d))return e(f),!1;if(3==d.nodeType&&(b?0<c:c<d.nodeValue.length))return!0;1==d.nodeType&&(d=d.childNodes[c]||d);a:{var i=a.schema.getNonEmptyElements();for(f=new tinymce.dom.TreeWalker(d,
a.getBody());(c=b?f.prev():f.next())&&!i[c.nodeName.toLowerCase()]&&!(3===c.nodeType&&0<tinymce.trim(c.nodeValue).length);)if("false"===l(c)){o||e(c);b=!0;break a}b=k(c)?!0:!1}if(b)return!1}return k(d)?(f=k(d),e(f),!1):!0}var d=b.keyCode,f,n,q=!1;n=g.getStart();f=g.getEnd();f=k(n)||k(f);if(o&&!g.isCollapsed()){var r=g.getRng(!0).cloneContents(),q=!1;tinymce.walk(r,function(a){q="false"===l(a);return!q},"childNodes")}if(f&&(112>d||124<d)&&d!=c.DELETE&&d!=c.BACKSPACE){if(!(tinymce.isMac?b.metaKey:b.ctrlKey)||
!(67==d||88==d||86==d))if(b.preventDefault(),d==c.LEFT||d==c.RIGHT)d=d==c.LEFT,a.dom.isBlock(f)?(f=d?f.previousSibling:f.nextSibling,f=new t(f,f),f=d?f.prev():f.next(),e(f,!d)):e(f,d)}else if(d==c.LEFT||d==c.RIGHT||d==c.BACKSPACE||d==c.DELETE){if(f=v(n)){var i,m=d===c.LEFT||d===c.BACKSPACE?"left":"right";n="left"===m?c.LEFT:c.RIGHT;r="left"===m?c.BACKSPACE:c.DELETE;m="left"===m?!0:!1;g.getRng(!0);if(d===n||d===r){a:{for(i=f;i=i[m?"previousSibling":"nextSibling"];)if(3!==i.nodeType||0<i.nodeValue.length)break a;
i=void 0}if(i&&"false"===l(i)){if(d===n&&e(i,m),d===r&&(f.innerHTML===p||!tinymce.trim(f.innerText||f.textContent)))b.preventDefault(),e(i,m),o||j.remove(i)}else o||y(f)}}if((d==c.BACKSPACE||d==c.DELETE)&&!h(d==c.BACKSPACE)||o&&q&&!confirm(a.getLang("noneditable.confirm_delete")))return b.preventDefault(),!1}});h.onKeyUp.addToTop(s);h.parser.addAttributeFilter("class",function(a){for(var b=a.length,c,g;b--;)g=a[b],c=" "+g.attr("class")+" ",-1!==c.indexOf(" unknown-hipchat-emoticon ")&&g.attr("data-mce-unknownhipchatemoticon",
"false")});h.serializer.addAttributeFilter("data-mce-unknownhipchatemoticon",function(a){for(var b=a.length,c;b--;)c=a[b],c.attr("unknownhipchatemoticon",null),c.attr("data-mce-unknownhipchatemoticon",null)});h.parser.addAttributeFilter("unknownhipchatemoticon",function(a){for(var b=a.length,c;b--;)c=a[b],c.attr("data-mce-unknownhipchatemoticon",c.attr("unknownhipchatemoticon")),c.attr("unknownhipchatemoticon",null)})})},getInfo:function(){return{longname:"unknownhipchatemoticon",author:"Moxiecode Systems AB",
authorurl:"http://tinymce.moxiecode.com",infourl:"",version:tinymce.majorVersion+"."+tinymce.minorVersion}}});tinymce.PluginManager.add("unknownhipchatemoticon",tinymce.plugins.UnknownHipChatEmoticonPlugin);AJS.Editor.Adapter.addTinyMcePluginInit(function(c){c.plugins+=",unknownhipchatemoticon"})})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
