import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const BENTO_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    // children: [
    //   {
    //     path: 'submit',
    //     component: TicketSubmitComponent,
    //   },
    //   {
    //     path: 'preview',
    //     component: TicketPreviewComponent,
    //   },
    //   {
    //     path: '',
    //     redirectTo: 'submit',
    //     pathMatch: 'full',
    //   },
    // ],
  },
];
