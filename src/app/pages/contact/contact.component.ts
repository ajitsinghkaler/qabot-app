import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'qabot-app-contact',
  standalone: true,
  template: `
      <h2 class="text-slate-900 text-4xl font-bold sm:text-5xl sm:mt-10 mt-8 sm:mb-8 mb-4 ">Contact Form</h2>

    <iframe
      src="https://tally.so/embed/3lqNyW?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      loading="lazy"
      width="100%"
      height="292"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      title="Contact form"
    ></iframe>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 0 1rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {}
