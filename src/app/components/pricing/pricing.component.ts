import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'qabot-app-pricing',
  standalone: true,
  template: `<p>pricing works!</p>`,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingComponent {}
