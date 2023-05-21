import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ChatbotListService } from './chatbot-list.service';
import { LetDirective } from '@rx-angular/template/let';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'qabot-app-chatbot-list',
  standalone: true,
  imports: [LetDirective, NgFor, NgIf, RouterLink],
  providers: [ChatbotListService],
  template: `
    <h3>Document List</h3>
    <ng-container *rxLet="chatBotList$; let chatbots">
      <div class="container mx-auto px-4">
        <div class="overflow-hidden">
          <div
            routerLink="/chatbot/new"
            *ngFor="let chatbot of chatbots"
            class="border border-gray-200 rounded max-w-3xl mx-auto shadow-md px-4 py-2 mb-4 bg-white hover:bg-sky-100 hover:text-sky-900  transition-all duration-300 ease-in-out"
          >
            {{ chatbot.title }}
          </div>
        </div>
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

  chatBotList$ = this.chatbotService.getDocumentList();
}
