import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatBoxComponent } from '../../components/chat-box/chat-box.component';

@Component({
  selector: 'qabot-app-chat-page',
  standalone: true,
  template: `
  <div class="mx-auto container"> 
  <qabot-app-chat-box class="border mx-4 rounded-lg border-gray-300"/> 
  </div>`,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }
      
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ChatBoxComponent],
})
export class ChatPageComponent {}
