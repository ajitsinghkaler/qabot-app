import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
  HttpClient,
  withInterceptors,
} from '@angular/common/http';
import { AuthHttpInterceptor, AuthModule, AuthService } from '@auth0/auth0-angular';
import { csrfInterceptor } from './app/interceptors/csrf.interceptor';
import { initializeCsrfFactory } from './app/interceptors/csrf.initialze';
import { CsrfStore } from './app/store/csrf.store';

bootstrapApplication(AppComponent, {
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
}).catch((err) => console.error(err));
