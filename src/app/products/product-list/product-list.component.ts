import { Component, OnInit, ViewChild } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../product.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'ad-product-list', // IMP! Selector not required for ROUTED components => this is a routed component.
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';

  // IMP! : For parent to child communication
  @ViewChild(ProductDetailComponent) viewChild: ProductDetailComponent;

  // IMP! Crude example of property binding directly in html
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage: string;

  products: IProduct[] = [];

  selectedProduct: IProduct;

  prodDescFromChild = '';

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

  loadDetail(product: IProduct): void {
    this.prodDescFromChild = '';
    this.viewChild.codeFromParent = '';
    this.selectedProduct = product;
  }

  logProductName(productDesc: string): void {
      this.prodDescFromChild = productDesc;
  }

  invokeChild(productCode: string): void {
    this.viewChild.fromParent(productCode);
  }

}
