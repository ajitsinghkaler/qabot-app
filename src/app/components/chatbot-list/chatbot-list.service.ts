import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BotDocument } from 'src/app/interfaces/document';
import { environment } from 'src/environments/environment';

@Injectable()
export class ChatbotListService  {
  http = inject(HttpClient);

  getDocumentList() {
    return this.http.get<Partial<BotDocument>[]>(environment.API_SERVER_URL + '/document');
  }
}
