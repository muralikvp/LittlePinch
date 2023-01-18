import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { catchError, EMPTY, finalize, map, Observable } from 'rxjs';
//ng generate interceptor <interceptor Name>

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Header Loading...");
    
    request = request.clone(
      { headers: request.headers.set('a-Murali', 'HopeTutorsToken1') }
      );

      return next.handle(request).pipe(
        map((res) => {
          if (res instanceof HttpResponse) {
            res = res.clone({body:res.body.slice(0,5)});
            return res;
          }
          return res;
        })
        ,
        catchError((err) => {
          console.log("Error",err);
          return EMPTY;
        }),
        finalize (() => {
          console.log("Loading completed");
        })
      );
  }
}
