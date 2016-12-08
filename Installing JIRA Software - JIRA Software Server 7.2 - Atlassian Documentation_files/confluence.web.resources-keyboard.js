;try {
/* module-key = 'confluence.web.resources:keyboard', location = '/includes/js/api/keyboard.js' */
define("confluence/api/keyboard",["jquery"],function(f){function b(a,b,c){h[b]=a;i[a]=b;c&&(j[b]=!0);return a}function g(a){a=a.originalEvent||a;return null==a.which?a.keyCode:0!==a.which&&0!==a.charCode?a.which:null}function k(a){var a=a.originalEvent||a,b=e.specialKeyEntered(a);if(b)return b;if(f.browser.mozilla){if("keypress"===a.type&&(a=g(a),null!==a))return String.fromCharCode(a).toLowerCase()}else if("keypress"!==a.type)return String.fromCharCode(a.keyCode).toLowerCase()}var e={},h={},i={},
j={},c=e.SpecialKey={BACKSPACE:b("backspace",8,!0),TAB:b("tab",9,!0),RETURN:b("return",13,!0),SHIFT:b("shift",16),CTRL:b("ctrl",17),ALT:b("alt",18),PAUSE:b("pause",19),CAPS_LOCK:b("capslock",20),ESC:b("esc",27,!0),SPACE:b("space",32,!0),PAGE_UP:b("pageup",33),PAGE_DOWN:b("pagedown",34),END:b("end",35),HOME:b("home",36),LEFT:b("left",37),UP:b("up",38),RIGHT:b("right",39),DOWN:b("down",40),INSERT:b("insert",45),DELETE:b("del",46),F1:b("f1",112),F2:b("f2",113),F3:b("f3",114),F4:b("f4",115),F5:b("f5",
116),F6:b("f6",117),F7:b("f7",118),F8:b("f8",119),F9:b("f9",120),F10:b("f10",121),F11:b("f11",122),F12:b("f12",123),NUMLOCK:b("numlock",144),SCROLL:b("scroll",145),META:b("meta",224)};c.eventType=function(){return f.browser.mozilla?"keypress":"keydown"};c.fromKeyCode=function(a){return h[a]};c.toKeyCode=function(a){return i[a]};c.isAscii=function(a){return!!j[a]};c.isSpecialKey=function(a){return!!c.toKeyCode(a)};e.characterEntered=function(a){a=a.originalEvent||a;if("keypress"===a.type&&(a=g(a),
null!==a&&(!c.isAscii(a)||c.fromKeyCode(a)===c.SPACE)))return String.fromCharCode(a)};e.specialKeyEntered=function(a){a=a.originalEvent||a;if(f.browser.mozilla){if("keypress"===a.type){var b=g(a);if(null===b)return c.fromKeyCode(a.keyCode);if(c.isAscii(b))return c.fromKeyCode(b)}}else if("keypress"!==a.type)return c.fromKeyCode(a.keyCode)};e.shortcutEntered=function(a){a=a.originalEvent||a;if(a.type===e.SpecialKey.eventType()){var b=e.specialKeyEntered(a),d="";a.altKey&&b!==c.ALT&&(d+=c.ALT+"+");
a.ctrlKey&&b!==c.CTRL&&(d+=c.CTRL+"+");a.metaKey&&(!a.ctrlKey&&b!==c.META)&&(d+=c.META+"+");a.shiftKey&&b!==c.SHIFT&&(d+=c.SHIFT+"+");if(b)return d+b;if(0<d.length&&"shift+"!==d&&(a=k(a)))return d+a}};return e});require("confluence/module-exporter").exportModuleAsGlobal("confluence/api/keyboard","AJS.Keyboard");
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
