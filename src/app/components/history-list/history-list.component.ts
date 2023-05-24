import { DatePipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LetDirective } from '@rx-angular/template/let';
import { HistoryListService } from './history-list.service';
import { RouterLink } from '@angular/router';
import { RxFor } from '@rx-angular/template/for';
import { fromNow } from 'src/app/utils/dateago';

@Component({
  selector: 'qabot-app-history-list',
  standalone: true,
  imports: [NgIf, RouterLink, RxFor, DatePipe],
  providers: [HistoryListService],
  template: `
    <h2 class="text-slate-900 text-4xl font-bold sm:text-5xl sm:mt-10 mt-8 sm:mb-8 mb-4 ">Conversations</h2>
    <div
      routerLink="/chatbot/{{ history.id }}/{{history.title}}"
      *rxFor="let history of historyList$; trackBy: 'id'; let count = count"
      class="flex justify-between border border-gray-200 rounded mx-auto shadow-md px-4 py-2 mb-4 bg-white hover:bg-sky-100 hover:text-sky-900 transition-all duration-300 ease-in-out"
    >
      <div class="text-center mt-10" *ngIf="count === 0">
        No history present upload a document and chat with it to create history
      </div>
      {{ history.title }}
      <div>
        {{ fromNow(history.created) }}
        <button class="ml-4">Delete</button>
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
})
export class HistoryListComponent {
  historyService = inject(HistoryListService);
  historyList$ = this.historyService.getHistoryList();
  fromNow = fromNow;
}
