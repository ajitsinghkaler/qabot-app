import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Csrf } from '../interfaces/csrf';
import { CsrfStore } from '../store/csrf.store';

export function initializeCsrfFactory(
  httpClient: HttpClient,
  crsfTokenStore: CsrfStore
): () => Observable<Csrf> {
  return () =>
    httpClient
      .get<Csrf>(`${environment.API_SERVER_URL}/csrf`, {
        withCredentials: true,
      })
      .pipe(
        tap((csrf) => (crsfTokenStore.csrfToken = csrf.csrfToken)),
        catchError(() => of({ csrfToken: '' } as Csrf))
      );
}
