import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { IProduct } from '../product';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ad-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnDestroy {
  @ViewChild(NgForm) productForm: NgForm;
  product: IProduct;
  errorMessage: string;
  prodSubscription: Subscription;

  constructor(private _route: ActivatedRoute,
    private _productService: ProductService) {
  }

  ngOnInit() {
    const param = this._route.snapshot.paramMap.get('id');
    this.getProduct(+param);
  }

  ngOnDestroy(): void {
    this.prodSubscription.unsubscribe();
  }

  getProduct(id: number) {
    this.prodSubscription = this._productService.getProduct(id).subscribe(
      product =>  this.product = product,
      error => this.errorMessage = <any>error);
  }

  saveProduct(form: NgForm): void {
    console.log('Model values');
    console.log(this.product);
    console.log('Form values');
    console.log(form);
  }
}
