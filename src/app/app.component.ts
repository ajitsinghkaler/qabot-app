import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { AuthService } from '@auth0/auth0-angular';
// import { AsyncPipe, NgIf } from '@angular/common';
// import { SigninComponent } from './components/signin/signin.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
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
    <qabot-app-header />
    <router-outlet>
      </router-outlet>
      <qabot-app-footer></qabot-app-footer>
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
