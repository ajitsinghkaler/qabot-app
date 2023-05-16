import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeaderLoginComponent } from '../header-login/header-login.component';
import { HeaderLogoutComponent } from '../header-logout/header-logout.component';
import { AuthService } from '@auth0/auth0-angular';
import { RxIf } from '@rx-angular/template/if';
import { tap } from 'rxjs';

@Component({
  selector: 'qabot-app-header',
  standalone: true,
  imports: [HeaderLoginComponent, HeaderLogoutComponent, RxIf],
  template: `
    <qabot-app-header-login *rxIf="authenticated$; else logout" />
    <ng-template #logout>
      <qabot-app-header-logout />
    </ng-template>
    
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
export class HeaderComponent {
  auth = inject(AuthService);
  authenticated$ = this.auth.isAuthenticated$.pipe(
    tap((au) => console.log(au))
  );
}
