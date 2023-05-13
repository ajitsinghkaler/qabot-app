import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HistoryListComponent } from '../../components/history-list/history-list.component';

@Component({
  selector: 'qabot-app-history-page',
  standalone: true,
  template: `<p>history-page works!</p>
    <qabot-app-history-list />`,
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
