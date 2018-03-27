import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAccordionComponent } from './product-accordion/product-accordion.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [ { path: 'products', component: ProductListComponent},
                          { path: 'productsAcc', component: ProductAccordionComponent},
                          { path: 'products/:id', component: ProductEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
