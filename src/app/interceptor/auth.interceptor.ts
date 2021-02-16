import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

export class authInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modReq = req.clone({
      headers: req.headers.append('auth', 'authorised'),
    });
    console.log(modReq)
    return next.handle(modReq);
  }
}
