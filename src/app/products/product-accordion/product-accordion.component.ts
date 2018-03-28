import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'ad-product-accordion',
  templateUrl: './product-accordion.component.html',
  styleUrls: ['./product-accordion.component.css'],
})
export class ProductAccordionComponent implements OnInit {

  products: IProduct[] = [];
  errorMessage: string;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getProducts()
    .subscribe(products => {
      this.products = products;
      // this.filteredProducts = this.products;
    },
      error => this.errorMessage = <any>error);
  }

}
