import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Chatbot } from 'src/app/interfaces/chatbot';
import { environment } from 'src/environments/environment';

@Injectable()
export class ChatbotListService  {
  http = inject(HttpClient);

  getChatbotList() {
    return this.http.get<Chatbot[]>(environment.API_SERVER_URL + '/chat_messages');
  }
}
