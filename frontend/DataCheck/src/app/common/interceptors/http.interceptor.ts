import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import { AppService } from '../services/app.service';

@Injectable()
export class HTTPInterceptor implements HttpInterceptor {
  constructor(private appService: AppService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Check if the request is a file upload (has FormData)
    if (req.body instanceof FormData) {
      // Set Content-Type to undefined to let the browser set it automatically
      req = req.clone({ headers: req.headers.delete('Content-Type') });
    } else if (!req.headers.has('Content-Type')) {
      req = req.clone({
        headers: req.headers.set('Content-Type', 'application/json'),
      });
    }
    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

    return next.handle(req).pipe(
      tap(),

      finalize(() => {
        this.appService.hideLoader();
      })
    );
  }
}
