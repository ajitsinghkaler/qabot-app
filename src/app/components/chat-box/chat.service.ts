import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class ChatService {
  http = inject(HttpClient);

  getAnswer(){
    return this.http.get(`${environment.API_SERVER_URL}/answer`);
  }
}
