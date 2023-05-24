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
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoutShellComponent {}
