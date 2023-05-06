import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'qabot-app-testimonial',
  standalone: true,
  imports: [],
  template: ` <div class="bg-gray-50 py-32">
    <div class="container">
      <div
        class="relative max-w-md mx-auto flex flex-col py-6 px-8 bg-white rounded-lg shadow-lg"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRreh9Fwfj6mP6s9CINDCpfUXmi6OrRXJoD8fFI7BV01mzbbC1FhW5MLGQZYgH9PJ8UhC0&usqp=CAU"
          alt=""
          class="absolute rounded-full w-14 h-14 -left-6 -top-6"
        />
        <p class="text-[#5E6282]">
          “On the Windows talking painted pasture yet its express parties use.
          Sure last upon he same as knew next. Of believed or diverted no.”
        </p>
        <p class="mt-6 mb-2">Mike taylor</p>
        <p class="text-sm">USA, CA</p>
      </div>
    </div>
  </div>`,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialComponent {}
