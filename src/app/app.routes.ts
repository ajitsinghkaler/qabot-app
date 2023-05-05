import { Route } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    // path: '',
    // component: AppComponent,
    // children: [
      // {
        path: 'home',
        loadComponent: () => import('./components/home/home.component'),
      // },
    // ],
  }
];
