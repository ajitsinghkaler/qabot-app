import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HistoryListComponent } from '../../components/history-list/history-list.component';

@Component({
  selector: 'qabot-app-history-page',
  standalone: true,
  template: `
    <qabot-app-history-list class="container mx-auto px-4" />`,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HistoryListComponent],
})
export class HistoryPageComponent {}
