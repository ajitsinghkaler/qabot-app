import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'qabot-app-footer',
  standalone: true,
  imports: [],
  template: `
    <!-- component -->
    <!-- This is an example component -->
    <div class="max-w-5xl mx-auto">
      <footer
        class="p-4 bg-white rounded-lg flex items-center justify-between p-6 flex-col sm:flex-row"
      >
        <ul class="flex flex-wrap items-center">
          <li>
            <a
              href="#"
              class="mr-4 text-sm text-gray-500 hover:underline md:mr-6"
              >Privacy Policy</a
            >
          </li>
          <li>
            <a href="#" class="text-sm text-gray-500 hover:underline"
              >Contact</a
            >
          </li>
        </ul>
        <span class="text-sm text-gray-500 sm:text-center mt-3 sm:mt-0"
          >© 2023
          <a href="https://flowbite.com" class="hover:underline" target="_blank"
            >Qabot</a
          >. All Rights Reserved.
        </span>
      </footer>
    </div>
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
export class FooterComponent {}
