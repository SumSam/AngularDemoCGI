import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './product-routing.module';
import { RouterModule } from '@angular/router';
import { ProductService } from './product.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAccordionComponent } from './product-accordion/product-accordion.component';
import { SharedModule } from '../shared/shared.module';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductCodeValidator } from './product-code.validator';
import { AppLevelService } from '../app-level-service';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductResolver } from './product-resolver.service';
import { ProductEditInfoComponent } from './product-edit/product-edit-info/product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit/product-edit-tags/product-edit-tags.component';
import { ProductEditGuard } from './product-edit-guard.service';
import { ProductEditReactiveInfoComponent } from './product-edit/product-edit-reactive-info/product-edit-reactive-info.component';

@NgModule({
  imports: [
    SharedModule,
    ProductsRoutingModule
  ],
  declarations: [ProductListComponent,
    ProductDetailComponent,
    ProductAccordionComponent,
    ProductEditComponent,
    ProductCodeValidator,
    ProductFilterPipe,
    ProductEditInfoComponent,
    ProductEditReactiveInfoComponent,
    ProductEditTagsComponent],
    // replace with useClass implementation during demo
  providers: [ProductService,
    AppLevelService,
    ProductResolver,
    ProductEditGuard]
})
export class ProductModule { }
