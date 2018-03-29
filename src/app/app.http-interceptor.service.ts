import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // FOR REQUEST HANDLING
        console.log('intercepted request ... ');

        // Clone the request to add the new header.
        const interceptedReq = req.clone({ headers: req.headers.set('headerName', 'headerValue') });

        console.log('Sending request with new header now ...');

        console.log(interceptedReq);

        // FOR RESPONSE HANDLING
        // send the newly created request
        return next.handle(interceptedReq)
            // .filter(x => x instanceof HttpResponse)
            .map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('HttpResponse');
                } else {
                    console.log('Event');
                }
                console.log(event);
                return event;
            })
            .catch((err: any, caught) => { // Caught at service as well as interceptor
                console.log('Error');
                console.log(err);
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 403) {
                    }
                    return Observable.throw(err);
                }
            });
    }
}
