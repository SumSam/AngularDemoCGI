import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
    template: `
        <h1> Product Dynamic component loading works!!! </h1>
    `,
})
export class ProductDynamicComponent {

    constructor(private _productService: ProductService) {
        _productService.getProducts().subscribe(products => console.log(products));
    }
}
