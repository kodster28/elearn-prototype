import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const httpRequest = req.clone({
      headers: new HttpHeaders({
        'X-Api-Key': '8c6b72a16c8147fb8c53b30aecc36195',
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: '0'
      })
    });

    return next.handle(httpRequest);
  }
}
