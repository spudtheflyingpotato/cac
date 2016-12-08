;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:page-picker', location = '/js/page-picker.js' */
(function(b,a){a.build=function(c){c.placeholder="Select a page";c.contentType=["page"];c.showRecentlyViewedSpaces=false;c.spaceCatKeys=[];c.spaceKeys=[];return window.Confluence.UI.Components.SpacePagePicker.build(c)}}(AJS.$,window.Confluence.UI.Components.PagePicker));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
