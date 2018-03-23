import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list.component';
import { RouterModule } from '@angular/router';
import { ProductService } from './product.service';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [ProductListComponent],
  providers: [ProductService]
})
export class ProductModule { }
