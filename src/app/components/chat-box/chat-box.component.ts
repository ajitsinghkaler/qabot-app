import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from './chat.service';
import { ActivatedRoute } from '@angular/router';
import { ChatStore } from './chat.store';
import { NgIf } from '@angular/common';
import { RxFor } from '@rx-angular/template/for';
import { tap } from 'rxjs';

@Component({
  selector: 'qabot-app-chat-box',
  standalone: true,
  imports: [FormsModule, RxFor, NgIf],
  providers: [ChatService, ChatStore],
  template: ` <ul>
      <!-- <li >{{ item }}</li> -->
    </ul>
    <div class="flex-1 p-4 sm:p-6 justify-between flex flex-col h-80">
      <div
        class="flex sm:items-center justify-between pb-3 border-b border-gray-200"
      >
        <div class="relative flex items-center space-x-4 mt-1">
          <!-- <div class="flex flex-col leading-tight">
          <div class="text-2xl mt-1 flex items-center"> -->
          <span class="text-gray-700 mr-3">{{route.snapshot.params['name']}}</span>
          <!-- </div>
        </div> -->
        </div>
      </div>
      <div class="h-full">
        <div
          *rxFor="let message of messages$; trackBy: 'id'"
          class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
        >
          <div *ngIf="message.user_generated" class="chat-message">
            <div class="flex items-end">
              <div
                class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start"
              >
                <span
                  class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600"
                  >{{ message.content }}
                </span>
              </div>
            </div>
          </div>
          <div *ngIf="!message.user_generated" class="chat-message">
            <div class="flex items-end justify-end">
              <div
                class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end"
              >
                <span
                  class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white "
                  >{{ message.content }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
        <form #f="ngForm" (ngSubmit)="answer()">
          <div class="relative flex">
            <input
              [(ngModel)]="question"
              type="text"
              name="question"
              placeholder="Write your message!"
              class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
            />
            <div class="absolute right-0 items-center inset-y-0 hidden sm:flex">
              <button
                class="inline-flex items-center justify-center rounded-r-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-gray-600 hover:bg-gray-700 focus:outline-none"
              >
                <span class="font-bold">Send</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-6 w-6 ml-2 transform rotate-90"
                >
                  <path
                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>`,
  styles: [
    `
      :host {
        display: block;
      }
      .scrollbar-w-2::-webkit-scrollbar {
        width: 0.25rem;
        height: 0.25rem;
      }

      .scrollbar-track-blue-lighter::-webkit-scrollbar-track {
        --bg-opacity: 1;
        background-color: #f7fafc;
        background-color: rgba(247, 250, 252, var(--bg-opacity));
      }

      .scrollbar-thumb-blue::-webkit-scrollbar-thumb {
        --bg-opacity: 1;
        background-color: #edf2f7;
        background-color: rgba(237, 242, 247, var(--bg-opacity));
      }

      .scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
        border-radius: 0.25rem;
      }
      .h-80 {
        height: 80vh;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatBoxComponent implements OnInit {
  chatService = inject(ChatService);
  chatStore = inject(ChatStore);
  route = inject(ActivatedRoute);
  question = '';
  messages$ = this.chatStore.messages$;

  ngOnInit() {
    if (this.route.snapshot.params['id'] !== 'new') {
      this.chatService.history = this.route.snapshot.params['id'];
      this.chatStore.getMessages(this.route.params);
    }
  }

  answer() {
    this.chatStore.addMessage({
      chat_history: this.chatService.history,
      content: this.question,
      id: "1",
      user_generated: true,
    })
    this.chatService
      .getAnswer({
        content: this.question,
        chat_history: this.chatService.history,
        title: this.route.snapshot.params['name']
      }).pipe(
        tap(
          (history) =>
            this.chatStore.addMessage({
              chat_history: history.history,
              content: history.answer,
              id: 'test',
              user_generated: false,
            }),
        )
      )
      .subscribe();
  }
}
