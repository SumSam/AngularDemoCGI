import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './product';

@Component({
  selector: 'ad-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage: string;

  products: IProduct[] = [];

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getProducts()
    .subscribe(products => {
        this.products = products;
        // this.filteredProducts = this.products;
    },
        error => this.errorMessage = <any>error);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
}

}
