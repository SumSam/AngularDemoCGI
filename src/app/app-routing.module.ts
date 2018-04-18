import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard } from './user/auth-guard.service';
import { SelectivePreLoadStrategy } from './selective-pre-load-strategy.service';

const routes: Routes = [{ path: 'welcome', component: WelcomeComponent },
{
  path: 'products',
  canActivate: [AuthGuard],
  data: { preload: true },
  loadChildren: 'app/products/product.module#ProductModule'
},
{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: SelectivePreLoadStrategy })], // enableTracing: true,
  exports: [RouterModule]
})
export class AppRoutingModule { }
