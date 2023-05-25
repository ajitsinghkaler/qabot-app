import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLoginComponent } from "../header-login/header-login.component";

@Component({
    selector: 'qabot-app-login-shell',
    standalone: true,
    template: `
  <qabot-app-header-login/>
  <router-outlet></router-outlet>
  `,
    styles: [
        ` 
      :host {
        display: block;
        min-height: 90vh;
        max-width: 1080px;
        margin: 0 auto;
      }
    `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterOutlet, HeaderLoginComponent]
})
export class LoginShellComponent {}
