;try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-analytics-resources', location = 'analytics/roadmap-analytics.js' */
Confluence.Roadmap=Confluence.Roadmap||{};Confluence.Roadmap.Analytics=(function(f,j){var c={INSERT:"confluence.roadmap.insert",CREATE:"confluence.roadmap.create",EDIT:"confluence.roadmap.edit",EDIT_ACTIONS:{OPEN_BAR_DIALOG:"confluence.roadmap.editmode.open_bar_dialog",ADD_DESCRIPTION:"confluence.roadmap.editmode.add_description",ADD_PAGE_LINK:"confluence.roadmap.editmode.add_page_link"},VIEW_ACTIONS:{OPEN_BAR_DIALOG:"confluence.roadmap.viewmode.open_bar_dialog",CLICK_PAGE_LINK:"confluence.roadmap.viewmode.click_page_link",ADD_PAGE_LINK:"confluence.roadmap.viewmode.add_page_link"}};function h(o,p){AJS.trigger("analytics",{name:o,data:p})}function m(p){var o=0;j.each(p.lanes,function(q){o=o+q.bars.length});return{lanes:p.lanes.length,bars:o,markers:p.markers.length,months:Confluence.Roadmap.DateUtilities.getNumberOfMonths(p.timeline.startDate,p.timeline.endDate)+1}}function k(){h(c.INSERT)}function d(p){var o=m(p);h(c.CREATE,o)}function e(p){var o=m(p);h(c.EDIT,o)}function a(){h(c.EDIT_ACTIONS.OPEN_BAR_DIALOG)}function n(){h(c.VIEW_ACTIONS.OPEN_BAR_DIALOG)}function b(){h(c.VIEW_ACTIONS.CLICK_PAGE_LINK)}function l(){h(c.EDIT_ACTIONS.ADD_DESCRIPTION)}function g(o){h(c.EDIT_ACTIONS.ADD_PAGE_LINK,o)}function i(o){h(c.VIEW_ACTIONS.ADD_PAGE_LINK,o)}return{insertRoadmap:k,createRoadmap:d,editRoadmap:e,openBarDialogInEdit:a,addDescription:l,addPageLinkEditMode:g,addPageLinkViewMode:i,openBarDialogInView:n,clickPageLink:b}})(AJS.$,window._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
