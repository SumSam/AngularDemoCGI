import {
  Component, OnInit, OnChanges, DoCheck, SimpleChange, Input, EventEmitter,
  Output, OnDestroy, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef, Host, Optional
} from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../product';
import { AppLevelService } from '../../app-level-service';
import { SharedModuleService } from '../../shared/shared-module.service';
import { ComponentLevelService } from '../product-detail/component-level-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ad-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ComponentLevelService],
  changeDetection: ChangeDetectionStrategy.OnPush // IMP! : Only immutable changes detected.
})
export class ProductDetailComponent implements OnChanges, OnInit, DoCheck, OnDestroy {


  static counter = 0;

  // @Input() product: IProduct;
  @Output() callParent = new EventEmitter<string>();
  product: IProduct;
  pageTitle = 'Product Detail';
  codeFromParent: string;
  errorMessage: string;
  prodSubscription: Subscription;

  constructor(private _productService: ProductService,
    private cdRef: ChangeDetectorRef,
    private _route: ActivatedRoute,
    private _router: Router,
    appLevelServiceInstance: AppLevelService,
  @Optional() @Host()componentLevelService: ComponentLevelService, // IMP! Also @Optional() available instance set to null
sharedModuleService: SharedModuleService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Current value: ');
    console.log(changes['product'].currentValue);
    console.log('Previous value: ');
    console.log(changes['product'].previousValue);
  }
  ngOnInit() {
    // const param = this._route.snapshot.paramMap.get('id');
    // this.getProduct(+param);

    this.product = this._route.snapshot.data['product'];
  }
  ngDoCheck(): void {
    console.log('ngDoCheck' + ProductDetailComponent.counter++);
    if (1 !== 1) {
      this.cdRef.markForCheck();
    }
  }
  ngOnDestroy(): void {
    // IMP!:  Use as a Dispose() analogy
    // unsubscribing here is a common practice in Angular
  }
  getProduct(id: number) {
    this.prodSubscription = this._productService.getProduct(id).subscribe(
      product =>  {
        this.product = product;
      },
      error => this.errorMessage = <any>error);
  }
  handleClick(): void {
    this.callParent.emit(this.product.description);
  }

  fromParent(productCode: string): void {
    this.codeFromParent = productCode; // Fix an issue here.
  }

  onBack(): void {
    this._router.navigate(['/products'], { preserveQueryParams: true });
  }

}
