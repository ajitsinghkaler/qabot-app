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
    path: '',
    loadComponent: () =>
      import('./components/logout-shell/logout-shell.component').then(
        (m) => m.LogoutShellComponent
      ),
    children: [
      {
        path: 'pricing',
        loadComponent: () =>
          import('./components/pricing/pricing.component').then(
            (m) => m.PricingComponent
          ),
      },
      {
        path: 'privacy-policy',
        loadComponent: () =>
          import('./pages/privacy-policy/privacy-policy.component').then(
            (m) => m.PrivacyPolicyComponent
          ),
      },
      {
        path: "contact",
        loadComponent: () =>
          import("./pages/contact/contact.component").then((m) => m.ContactComponent),
      }
    ],
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
        path: 'document',
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
        path: ':id/:name',
        loadComponent: () =>
          import('./pages/chat-page/chat-page.component').then(
            (m) => m.ChatPageComponent
          ),
      },
    ],
  },
];
