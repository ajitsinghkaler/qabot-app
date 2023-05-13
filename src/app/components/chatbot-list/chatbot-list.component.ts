import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ChatbotListService } from './chatbot-list.service';
import { LetDirective } from '@rx-angular/template/let';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'qabot-app-chatbot-list',
  standalone: true,
  imports: [LetDirective, NgFor, NgIf],
  providers: [ChatbotListService],
  template: `
  <h3>Chatbot List</h3>
    <ng-container *rxLet="chatBotList$; let chatbots">
      <div *ngFor="let chatbot of chatbots">
        <!-- {{chatbot.}} -->
        <!-- <pre>{{chatbots.length}}</pre> -->
        <!-- Count = {{count}} -->
      </div>
      <div class="text-center mt-10" *ngIf="!chatbots.length">
        No Chatbots present upload a document to create a chatbot
      </div>
    </ng-container>
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
export class ChatbotListComponent {
  chatbotService = inject(ChatbotListService);

  chatBotList$ = this.chatbotService.getChatbotList();
}
