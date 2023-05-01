import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    RouterOutlet
  ],
  selector: 'qabot-app-root',
  template: ` <router-outlet></router-outlet>
  <div>123</div>
    <ul *ngIf="auth.user$ | async as user">
      <li>{{ user.name }}</li>
      <li>{{ user.email }}</li>
      <li>{{auth.isAuthenticated$|async}}</li>
    </ul>
    `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'qabot-app';
  auth = inject(AuthService);
}
