import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { HistoryList } from 'src/app/interfaces/history-list';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoryListService {

  http = inject(HttpClient);

  getHistoryList() {
    return this.http.get<HistoryList[]>(environment.API_SERVER_URL + '/chat_messages');
  }
}
