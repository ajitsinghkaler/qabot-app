import { ChangeDetectionStrategy, Component } from '@angular/core';
// import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'qabot-app-jumbotron',
  standalone: true,
  imports: [],
  template: `
  <!-- <h1>Chat with Documents</h1>
  <h2>Just upload a document or add a link to your website</h2>
  <button mat-raised-button>Upload a document</button> -->
  <!-- component -->
<!-- 
    Author: Surjith S M
    Twitter: @surjithctly

    Get more templates on web3templates.com
    Tailwind Play: https://play.tailwindcss.com/O0fbQqzI8M 
-->

<section class="py-24 flex items-center min-h-[90vh] justify-center bg-white">
  <div class="mx-auto max-w-[43rem]">
    <div class="text-center">
      <p class="text-lg font-medium leading-8 text-indigo-600/95">Introducing Design Data Platform</p>
      <h1 class="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">Distribute your brand from&nbsp;design to code</h1>
      <p class="mt-3 text-lg leading-relaxed text-slate-400">Specify helps you unify your brand identity by collecting, storing and distributing design tokens and assets — automatically.</p>
    </div>

    <div class="mt-6 flex items-center justify-center gap-4">
      <a href="#" class="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700">Get started for free</a>
      <a href="#" class="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50"> Request a demo </a>
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
