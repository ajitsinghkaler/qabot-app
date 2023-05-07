import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'qabot-app-login-shell',
  standalone: true,
  imports: [RouterOutlet],
  template: `<p>login-shell works!</p>
  <router-outlet></router-outlet>
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
export class LoginShellComponent {}
