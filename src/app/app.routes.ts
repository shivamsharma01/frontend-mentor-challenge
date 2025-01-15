import { Routes } from '@angular/router';
import { ChallengeListComponent } from './challenge-list/challenge-list.component';

export const routes: Routes = [
  {
    path: 'conference',
    loadChildren: () =>
      import('./conference-ticket/').then((m) => m.CONFERENCER_ROUTES),
  },
  {
    path: 'bento-ui',
    loadChildren: () =>
      import('./bento-grid/').then((m) => m.BENTO_ROUTES),
  },
  {
    path: 'challenges',
    component: ChallengeListComponent,
  },
  {
    path: '',
    redirectTo: 'challenges',
    pathMatch: 'full',
  },
];
