import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // All HTTP requests are going to go through this method
    console.log('INTERCEPTOR');
    // We retrieve the token, if any
    const token = this.authService.getAccessToken();
    let newHeaders = req.headers;
    if (token) {
      // If we have a token, we append it to our new headers
      newHeaders = newHeaders.append('Authorization', `Bearer ${token}`);
    }
    // Finally we have to clone our request with our new headers
    // This is required because HttpRequests are immutable
    const authReq = req.clone({headers: newHeaders});
    // Then we return an Observable that will run the request
    // or pass it to the next interceptor if any
    return next.handle(authReq)
               .pipe(catchError((err: HttpErrorResponse) => {
                   if (err.status === 401) {
                     this.authService.login();
                   }
                   return throwError(err);
                 }),
                 map((response: HttpEvent<any>) => {
                   if (response instanceof HttpResponse) {
                   }
                   return response;
                 }));
  }
}
