import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

interface ChatMessage {
  question: string;
  history: string;
}

interface Answer {
  answer: string;
  history: string;
}

@Injectable()
export class ChatService {
  http = inject(HttpClient);
  history = '';

  getAnswer(data: Partial<ChatMessage>) {
    return this.http
      .post<Answer>(`${environment.API_SERVER_URL}/chat_messages/answer`, data)
      .pipe(
        tap((answer) => {
            this.history = answer.history;
        })
      );
  }
}
