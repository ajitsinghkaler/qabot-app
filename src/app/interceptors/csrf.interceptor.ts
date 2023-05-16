import { HttpInterceptorFn } from '@angular/common/http';
import { CsrfStore } from '../store/csrf.store';
import { inject } from '@angular/core';

export const csrfInterceptor: HttpInterceptorFn = (req, next) => {
  const csrfStore = inject(CsrfStore);
  const csrfToken = csrfStore.csrfToken;
  let clonedRequest = req;
  if (req.method !== 'GET') {
    clonedRequest = req.clone({
      setHeaders: {
        'X-CSRFToken': csrfToken,
      },
      withCredentials: true,
    });
  }
  return next(clonedRequest);
};
