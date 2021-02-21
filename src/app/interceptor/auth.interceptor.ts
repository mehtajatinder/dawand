import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { exhaustMap, catchError, take } from 'rxjs/operators';
import { AccountService } from '../account/account.service';
@Injectable()
export class authInterceptor implements HttpInterceptor {
  constructor(private accountService: AccountService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.accountService.user.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user) {
          return next.handle(req);
        }
        const modReq = req.clone({
          headers: req.headers.append('token', user.token!),
        });

        return next.handle(modReq).pipe(
          catchError((err) => {
            if (err) {
              if (err.status == '401') {
                this.accountService.LogoutUser();
              }
            }
            return throwError(err);
          })
        );
      })
    );
  }
}
