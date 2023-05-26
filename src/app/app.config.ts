import { ApplicationConfig } from '@angular/core';
import { CsrfStore } from '../app/store/csrf.store';
import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import {
  AuthHttpInterceptor,
  AuthModule,
  AuthService,
} from '@auth0/auth0-angular';
import { environment } from '../environments/environment';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
  HttpClient,
  withInterceptors,
} from '@angular/common/http';
import { csrfInterceptor } from '../app/interceptors/csrf.interceptor';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from '../app/app.routes';
import { initializeCsrfFactory } from '../app/interceptors/csrf.initialze';

export const appConfig: ApplicationConfig = {
  providers: [
    CsrfStore,
    importProvidersFrom(
      AuthModule.forRoot({
        ...environment.auth0,
        httpInterceptor: {
          allowedList: [`${environment.API_SERVER_URL}/*`],
        },
      })
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeCsrfFactory,
      deps: [HttpClient, CsrfStore, AuthService],
      multi: true,
    },
    provideHttpClient(
      withInterceptorsFromDi(),
      withInterceptors([csrfInterceptor])
    ),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
  ],
};
