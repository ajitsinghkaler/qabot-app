import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'qabot-app-signin',
  standalone: true,
  imports: [],
  template: `<p>login works!</p>
    <button class="button__login" (click)="handleLogin()">Log In</button>`,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SigninComponent {
  auth = inject(AuthService);

  handleLogin(): void {
    this.auth.loginWithRedirect();
  }
}

