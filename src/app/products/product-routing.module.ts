import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAccordionComponent } from './product-accordion/product-accordion.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductResolver } from './product-resolver.service';
import { ProductEditInfoComponent } from './product-edit/product-edit-info/product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit/product-edit-tags/product-edit-tags.component';
import { ProductEditGuard } from './product-edit-guard.service';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: ':id',
    component: ProductDetailComponent,
    resolve: { product: ProductResolver }
  },
  {
    path: ':id/edit',
    component: ProductEditComponent,
    children: [
      {
        path: '',
        redirectTo: 'info',
        pathMatch: 'full'
      },
      {
        path: 'info',
        component: ProductEditInfoComponent,
        canDeactivate: [ProductEditGuard],
      },
      {
        path: 'tags',
        component: ProductEditTagsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
