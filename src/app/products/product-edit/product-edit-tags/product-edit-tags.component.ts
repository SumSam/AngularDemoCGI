import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from '../../product';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../product.service';

@Component({
  selector: 'ad-product-edit-tags',
  templateUrl: './product-edit-tags.component.html',
  styleUrls: ['./product-edit-tags.component.css']
})
export class ProductEditTagsComponent implements OnInit, OnDestroy {

  product: IProduct;
  errorMessage: string;
  prodSubscription: Subscription;
  newTags = '';

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

  addTags(): void {
    const tagArray = this.newTags.split(',');
    this.product.tags = this.product.tags ? this.product.tags.concat(tagArray) : tagArray;
    this.newTags = '';
  }

  // Remove the tag from the array of tags.
  removeTag(idx: number): void {
    this.product.tags.splice(idx, 1);
  }

  goToProductList(): void {
    this._router.navigate(['/products']);
  }
}
