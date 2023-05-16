import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class UploadFileService {
  http = inject(HttpClient);

  uploadFile(data: FormData) {
    return this.http.post(`${environment.API_SERVER_URL}/document`, data);
  }
}
