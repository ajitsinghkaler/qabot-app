import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'qabot-app-login-shell',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <router-outlet></router-outlet>
  `,
  styles: [
    ` 
      :host {
        display: block;
        min-height: 75vh;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginShellComponent {}
