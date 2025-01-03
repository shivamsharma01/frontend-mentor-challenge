import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { TicketPreviewComponent } from './ticket-preview/ticket-preview.component';
import { TicketSubmitComponent } from './ticket-submit/ticket-submit.component';

export const CONFERENCER_ROUTES: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: 'submit',
        component: TicketSubmitComponent,
      },
      {
        path: 'preview',
        component: TicketPreviewComponent,
      },
      {
        path: '',
        redirectTo: 'submit',
        pathMatch: 'full',
      },
    ],
  },
];
