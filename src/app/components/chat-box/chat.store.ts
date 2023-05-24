import { Injectable, inject } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, switchMap } from 'rxjs';
import { ChatService, Message } from './chat.service';
import { Params } from '@angular/router';

interface ChatBoxState {
  // history: string;
  messages: Message[];
}
@Injectable()
export class ChatStore extends ComponentStore<ChatBoxState> {
  chatService =   inject(ChatService);
  messages$ = this.select((state) => state.messages);

  readonly setMessages = this.updater(
    (state: ChatBoxState, messages: Message[]) => ({
      ...state,
      messages,
    })
  );

  readonly addMessage = this.updater(
    (state: ChatBoxState, message: Message) => ({
      ...state,
      messages: [...state.messages, message],
    }
  ));

  readonly getMessages = this.effect((id: Observable<Params>) =>
    id.pipe(
      switchMap((params) =>
        this.chatService.getHistory(params['id']).pipe(
          tapResponse(
            (history) => this.setMessages(history.history),
            (error) => this.logError(error)
          )
        )
      )
    )
  );

  private logError(error: unknown) {
    console.error(error);
  }

  constructor() {
    super({ messages: [] });
  }
}
