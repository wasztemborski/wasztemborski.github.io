"use strict";
var router_1 = require('@angular/router');
var live_component_1 = require('./live/live.component');
var scores_component_1 = require('./scores/scores.component');
var routes = [
    {
        path: 'live',
        component: live_component_1.LiveComponent
    },
    {
        path: 'scores',
        component: scores_component_1.ScoresComponent
    },
    {
        path: '',
        redirectTo: '/live',
        pathMatch: 'full'
    },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map