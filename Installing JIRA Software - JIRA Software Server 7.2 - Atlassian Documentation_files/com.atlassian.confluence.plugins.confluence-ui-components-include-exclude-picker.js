;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:include-exclude-picker', location = '/js/include-exclude-picker.js' */
define("confluence-ui-components/js/include-exclude-picker",["jquery","underscore"],function(d,j){var e="";function c(k){var l=k.charAt(0);if(j.contains(["-"],l)){e=l;k=k.substring(1)}else{e=""}return k}function h(k){var l=d.extend({},k);if(l.children){l.children=j.map(l.children,h)}else{l.id=e+l.id;l.text=e+l.text}return l}function b(k){return function(l){l=c(l);return k(l)}}function f(k){return function(m){var l=k?k(m):m;if(e){l.results=j.map(l.results,h)}return l}}function a(k){return function(l){return k(l,c,h)}}function g(k){var l=k.text.charAt(0);if(l==="-"){return"select2-search-choice-subtle"}return}function i(l){var k=d.extend({formatSelectionCssClass:g},l);if(k.query){k.query=a(k.query);return k}else{k.ajax=d.extend({},k.ajax);k.ajax.data=b(k.ajax.data);k.ajax.results=f(k.ajax.results);return k}}return{build:i}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
