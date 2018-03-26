import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './product-routing.module';
import { RouterModule } from '@angular/router';
import { ProductService } from './product.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAccordionComponent } from './product-accordion/product-accordion.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    SharedModule,
    ProductsRoutingModule
  ],
  declarations: [ProductListComponent,
                  ProductDetailComponent,
                  ProductAccordionComponent],
  providers: [ProductService]
})
export class ProductModule { }
