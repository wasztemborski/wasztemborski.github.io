
import { provideRouter, RouterConfig }  from '@angular/router';
import { LiveComponent } from './live/live.component';
import { ScoresComponent } from './scores/scores.component';

const routes: RouterConfig = [
  {
    path: 'live',
    component: LiveComponent
  },
  {
    path: 'scores',
    component: ScoresComponent
  },
  {
    path: '',
    redirectTo: '/live',
    pathMatch: 'full'
    },
];

export const appRouterProviders = [
  provideRouter(routes)
];