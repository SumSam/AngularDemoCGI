import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAccordionComponent } from './product-accordion/product-accordion.component';

const routes: Routes = [ { path: 'products', component: ProductListComponent},
                          { path: 'productsAcc', component: ProductAccordionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
