import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ChatbotListService } from './chatbot-list.service';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RxFor } from '@rx-angular/template/for';

@Component({
  selector: 'qabot-app-chatbot-list',
  standalone: true,
  imports: [RxFor, NgIf, RouterLink],
  providers: [ChatbotListService],
  template: `
    <h2 class="text-slate-900 text-4xl font-bold sm:text-5xl sm:my-10 my-8">
      Documents
    </h2>
    <div class="container mx-auto">
      <div class="overflow-hidden">
        <div
          routerLink="/chatbot/new/{{chatbot.title}}"
          *rxFor="let chatbot of chatBotList$; trackBy: 'id'; let count = count"
          class="border border-gray-200 rounded mx-auto shadow-md px-4 py-2 mb-4 bg-white hover:bg-sky-100 hover:text-sky-900  transition-all duration-300 ease-in-out"
        >
          <div class="text-center mt-10" *ngIf="count === 0">
            No Chatbots present upload a document to create a chatbot
          </div>
          {{ chatbot.title }}
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
})
export class ChatbotListComponent {
  chatbotService = inject(ChatbotListService);

  chatBotList$ = this.chatbotService.getDocumentList();
}
