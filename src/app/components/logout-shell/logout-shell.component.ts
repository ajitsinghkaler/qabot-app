import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderLogoutComponent } from '../header-logout/header-logout.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'qabot-app-logout-shell',
  standalone: true,
  imports: [HeaderLogoutComponent, RouterOutlet],
  template: ` <qabot-app-header-logout />
    <router-outlet></router-outlet> `,
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
})
export class LogoutShellComponent {}
