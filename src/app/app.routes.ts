import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'conference',
    loadChildren: () =>
      import('./conference-ticket/').then((m) => m.CONFERENCER_ROUTES),
  },
  {
    path: '',
    redirectTo: 'conference',
    pathMatch: 'full',
  },
];
