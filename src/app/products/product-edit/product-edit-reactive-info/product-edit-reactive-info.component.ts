import { Component, OnInit, OnDestroy, ViewChild, group } from '@angular/core';
import { IProduct } from '../../product';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../product.service';
import { NgForm, FormBuilder, FormGroup, Validators, AbstractControl, FormArray } from '@angular/forms';
import { validateCleanProduct } from '../../product-code.validator';

function matcher(c: AbstractControl): { [key: string]: boolean } | null {
  const nameControl = c.get('productName');
  const codeControl = c.get('productCode');

  if (nameControl.pristine || codeControl.pristine) {
    return null;
  }

  if (nameControl.value === codeControl.value) {
    return { 'match': true };
  }
  return null;
}

@Component({
  selector: 'ad-product-edit-reactive-info',
  templateUrl: './product-edit-reactive-info.component.html',
  styleUrls: ['./product-edit-reactive-info.component.css']
})
export class ProductEditReactiveInfoComponent implements OnInit, OnDestroy {
  product: IProduct;
  errorMessage: string;
  prodSubscription: Subscription;
  productForm: FormGroup;
  get notes(): FormArray {
    return <FormArray>this.productForm.get('notes');
  }

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required, Validators.minLength(3)]],
      productCode: ['', [Validators.required, validateCleanProduct()]],
      descNeeded: 'n',
      description: '',
      notes: this.fb.array([this.addNote()])
    }, { validator: matcher });

    this.productForm.get('descNeeded').valueChanges
      .subscribe(value => this.setDynamicValidation(value));
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
      product => {
        this.productForm.patchValue(product);
      },
      error => this.errorMessage = <any>error);
  }

  saveProduct(): void {
    console.log('Model values');
    console.log(this.product);
    console.log('Form values');
    console.log(this.productForm);

    // this.product = <IProduct>{};
    // Object.keys(this.productForm.value).forEach((prop) => {
    //   this.product[prop] = this.productForm.value[prop];
    // });

    this.product = <IProduct>this.productForm.value;
  }

  goToProductList(): void {
    this._router.navigate(['/products']);
  }

  duplicateNote(): void {
    this.notes.push(this.addNote());
  }

  private setDynamicValidation(value: string): void {
    const descriptionControl = this.productForm.get('description');
    if (value === 'y') {
      descriptionControl.setValidators(Validators.required);
    } else {
      descriptionControl.clearValidators();
    }
    descriptionControl.updateValueAndValidity();
  }

  private addNote(): FormGroup {
    return this.fb.group({
      note: ''
    });
  }

}
