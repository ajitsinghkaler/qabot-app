import { Route } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home-page/home-page.component').then(
        (m) => m.HomePageComponent
      ),
  },
  {
    path: 'pricing',
    loadComponent: () =>
      import('./components/pricing/pricing.component').then(
        (m) => m.PricingComponent
      ),
  },
  {
    path: 'chatbot',
    loadComponent: () =>
      import('./components/login-shell/login-shell.component').then(
        (m) => m.LoginShellComponent
      ),
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/chatbot-page/chatbot-page.component').then(
            (m) => m.ChatbotPageComponent
          ),
      },
      {
        path: 'history',
        loadComponent: () =>
          import('./pages/history-page/history-page.component').then(
            (m) => m.HistoryPageComponent
          ),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./pages/chat-page/chat-page.component').then(
            (m) => m.ChatPageComponent
          ),
      },
    ],
  },
];
