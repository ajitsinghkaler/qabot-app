import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DownArrowComponent } from "../down-arrow/down-arrow.component";
import { RxFor } from "@rx-angular/template/for";
import faqs from "../../../assets/faq.json";

@Component({
    selector: 'qabot-app-faq',
    standalone: true,
    template: `
    <div class="max-w-screen-xl mx-auto px-5 min-h-sceen">
      <div class="flex flex-col items-center">
        <h2 class="font-bold text-5xl mt-5 tracking-tight">FAQ</h2>
        <p class="text-neutral-500 text-xl mt-3">Frequenty asked questions</p>
      </div>
      <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
        <div *rxFor="let faq of faqs" class="py-5">
          <details class="group">
            <summary
              class="flex justify-between items-center font-medium cursor-pointer list-none"
            >
              <span>{{faq.question}}</span>
              <span class="transition group-open:rotate-180">
                <qabot-app-down-arrow/>
              </span>
            </summary>
            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
              {{faq.answer}}
            </p>
          </details>
        </div>
      </div>
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
    imports: [DownArrowComponent, RxFor]
})
export class FaqComponent {
    faqs = faqs;
}
