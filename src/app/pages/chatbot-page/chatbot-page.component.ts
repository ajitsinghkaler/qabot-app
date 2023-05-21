import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UploadFileComponent } from '../../components/upload-file/upload-file.component';
import { ChatbotListComponent } from '../../components/chatbot-list/chatbot-list.component';

@Component({
  selector: 'qabot-app-chatbot-page',
  standalone: true,
  template: `
    <qabot-app-upload-file class="px-4"/>
    <qabot-app-chatbot-list />
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UploadFileComponent, ChatbotListComponent],
})
export class ChatbotPageComponent {}
