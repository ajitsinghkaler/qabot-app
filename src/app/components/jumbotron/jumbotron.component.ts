import { ChangeDetectionStrategy, Component } from '@angular/core';
// import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'qabot-app-jumbotron',
  standalone: true,
  template: `
<section class="py-24 flex items-center min-h-[90vh] justify-center bg-white">
  <div class="mx-auto max-w-[43rem]">
    <div class="text-center">
      <p class="text-3xl font-medium leading-8 text-blue-700">Chat with Documents</p>
      <h1 class="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">Just upload a document or add a link and talk to your documents</h1>
      <!-- <p class="mt-3 text-lg leading-relaxed text-slate-400">Specify helps you unify your brand identity by collecting, storing and distributing design tokens and assets — automatically.</p> -->
    </div>

    <div class="mt-6 flex items-center justify-center gap-4">
      <a href="#" class="transform rounded-md bg-blue-700 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-800">Upload a Document</a>
      <!-- <a href="#" class="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50"> Request a demo </a> -->
    </div>
  </div>
</section>
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
export class JumbotronComponent {}
