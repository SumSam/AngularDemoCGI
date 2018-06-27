import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';



import { IProduct } from './product';
import { ProductService } from './product.service';

@Injectable()
export class ProductResolver implements Resolve<IProduct> {

    constructor(private productService: ProductService,
                private router: Router) { }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<IProduct> {
        const id = route.params['id'];
        // let id = route.paramMap.get('id');
        if (isNaN(+id)) {
            console.log(`Product id was not a number: ${id}`);
            this.router.navigate(['/products']);
            return of(null);
        }
        return this.productService.getProduct(+id).pipe(
            map(product => {
                if (product) {
                    return product;
                }
                console.log(`Product was not found: ${id}`);
                this.router.navigate(['/products']);
                return null;
            }),
            catchError(error => {
                console.log(`Retrieval error: ${error}`);
                this.router.navigate(['/products']);
                return of(null);
            })
        );
    }
}
