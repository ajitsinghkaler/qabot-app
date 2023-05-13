import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LetDirective } from '@rx-angular/template/let';
import { HistoryListService } from './history-list.service';

@Component({
  selector: 'qabot-app-history-list',
  standalone: true,
  imports: [LetDirective, NgFor, NgIf],
  providers: [HistoryListService],
  template: `
  <h3>History List</h3>
    <ng-container *rxLet="historyList$; let historyList">
      {{historyList.status}}
      <div *ngFor="let history of historyList.history">
        <!-- <pre>{{historys.length}}</pre> -->
        <!-- Count = {{count}} -->
      </div>
      <div class="text-center mt-10" *ngIf="!historyList.history">
        No history present upload a document and chat with it to create history
      </div>
    </ng-container>`,
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


}
