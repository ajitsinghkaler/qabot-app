import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChatStore } from './chat.store';
import { tapResponse } from '@ngrx/component-store';

// interface ChatMessage {
//   question: string;
//   history: string;
// }

interface Answer {
  answer: string;
  history: string;
}

export interface Message {
  chat_history: string;
  content: string;
  id: string;
  user_generated: boolean;
}
interface HistoryApiResponse {
  history: Message[];
  status: string;
}

@Injectable()
export class ChatService {
  http = inject(HttpClient);
  history = '';

  getAnswer(data: Partial<Message> & { title: string }) {
    return this.http
      .post<Answer>(`${environment.API_SERVER_URL}/chat_messages/answer`, data)
      .pipe(tap((answer) => (this.history = answer.history)));
  }

  getHistory(historyId: string) {
    return this.http.get<HistoryApiResponse>(
      `${environment.API_SERVER_URL}/chat_messages/history?id=${historyId}`
    );
  }
  private logError(error: unknown) {
    console.error(error);
  }
}
