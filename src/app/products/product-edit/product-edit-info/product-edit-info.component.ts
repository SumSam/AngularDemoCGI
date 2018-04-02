import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { IProduct } from '../../product';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ad-product-edit-info',
  templateUrl: './product-edit-info.component.html',
  styleUrls: ['./product-edit-info.component.css']
})
export class ProductEditInfoComponent implements OnInit, OnDestroy {
  @ViewChild('productForm') form: NgForm;
  product: IProduct;
  errorMessage: string;
  prodSubscription: Subscription;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService) {
  }

  ngOnInit() {
    const param = this._route.parent.snapshot.paramMap.get('id');
    // this._route.params.subscribe( x =>  this.getProduct(+x['id']));
    this.getProduct(+param);
  }

  ngOnDestroy(): void {
    if (this.prodSubscription) {
      this.prodSubscription.unsubscribe();
    }
  }

  getProduct(id: number) {
    this.prodSubscription = this._productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }

  saveProduct(form: NgForm): void {
    console.log('Model values');
    console.log(this.product);
    console.log('Form values');
    console.log(form);
  }

  goToProductList(): void {
    this._router.navigate(['/products']);
  }

}
