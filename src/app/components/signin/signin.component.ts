import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'qabot-app-signin',
  standalone: true,
  imports: [CommonModule],
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
  constructor(private auth: AuthService) {}

  handleLogin(): void {
    // debugger
    this.auth.loginWithRedirect();
  }
}

// (anonymous) @ http://localhost:4200/vendor.js:3438
// asyncGeneratorStep @ http://localhost:4200/vendor.js:12458
// _next @ http://localhost:4200/vendor.js:12477
// invoke @ http://localhost:4200/polyfills.js:7575
// onInvoke @ http://localhost:4200/vendor.js:46316
// invoke @ http://localhost:4200/polyfills.js:7575
// run @ http://localhost:4200/polyfills.js:7358
// (anonymous) @ http://localhost:4200/polyfills.js:8451
// invokeTask @ http://localhost:4200/polyfills.js:7602
// (anonymous) @ http://localhost:4200/vendor.js:46003
// onInvokeTask @ http://localhost:4200/vendor.js:46003
// invokeTask @ http://localhost:4200/polyfills.js:7602
// onInvokeTask @ http://localhost:4200/vendor.js:46305
// invokeTask @ http://localhost:4200/polyfills.js:7602
// runTask @ http://localhost:4200/polyfills.js:7404
// drainMicroTaskQueue @ http://localhost:4200/polyfills.js:7773
// onScheduleTask @ http://localhost:4200/vendor.js:45997
// scheduleTask @ http://localhost:4200/polyfills.js:7587
// onScheduleTask @ http://localhost:4200/polyfills.js:7504
// scheduleTask @ http://localhost:4200/polyfills.js:7587
// scheduleTask @ http://localhost:4200/polyfills.js:7443
// scheduleMicroTask @ http://localhost:4200/polyfills.js:7462
// scheduleResolveOrReject @ http://localhost:4200/polyfills.js:8441
// resolvePromise @ http://localhost:4200/polyfills.js:8382
// (anonymous) @ http://localhost:4200/polyfills.js:8300
// (anonymous) @ http://localhost:4200/polyfills.js:8316
// invoke @ http://localhost:4200/polyfills.js:7575
// onInvoke @ http://localhost:4200/vendor.js:46316
// invoke @ http://localhost:4200/polyfills.js:7575
// run @ http://localhost:4200/polyfills.js:7358
// (anonymous) @ http://localhost:4200/polyfills.js:8451
// invokeTask @ http://localhost:4200/polyfills.js:7602
// (anonymous) @ http://localhost:4200/vendor.js:46003
// onInvokeTask @ http://localhost:4200/vendor.js:46003
// invokeTask @ http://localhost:4200/polyfills.js:7602
// onInvokeTask @ http://localhost:4200/vendor.js:46305
// invokeTask @ http://localhost:4200/polyfills.js:7602
// runTask @ http://localhost:4200/polyfills.js:7404
// drainMicroTaskQueue @ http://localhost:4200/polyfills.js:7773

