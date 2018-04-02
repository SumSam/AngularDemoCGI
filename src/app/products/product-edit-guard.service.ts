import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ProductEditInfoComponent } from './product-edit/product-edit-info/product-edit-info.component';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class ProductEditGuard implements CanDeactivate<ProductEditInfoComponent> {

    constructor() { }

    canDeactivate(component: ProductEditInfoComponent): Observable<boolean> | boolean {

        return component.form.valid;
    }
}
