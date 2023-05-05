import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { AuthService } from '@auth0/auth0-angular';
import { AsyncPipe, NgIf } from '@angular/common';
// import { SigninComponent } from './components/signin/signin.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  standalone: true,
  imports: [AsyncPipe, NgIf, RouterOutlet, HeaderComponent],
  selector: 'qabot-app-root',
  template: `
    <!-- <qabot-app-header> -->
      <!-- <div>123</div>
    <qabot-app-signin></qabot-app-signin>
    <ul *ngIf="auth.user$ | async as user">
      <li>{{ user.name }}</li>
      <li>{{ user.email }}</li>
      <li>{{ auth.isAuthenticated$ | async }}</li>
    </ul> -->
    <!-- </qabot-app-header> -->
    <router-outlet >
    <qabot-app-header/>

    </router-outlet>
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
  // auth = inject(AuthService);
}
