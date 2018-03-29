import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { ProductData } from './InMemoryWebApi/ProductData';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppLevelService } from './app-level-service';
import { SharedModule } from './shared/shared.module';
import { BASE_URL, URL_TOKEN } from './app.constants';
import { AppHttpInterceptor } from './app.http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  // IMP!: Order in which the feature/routing modules are VERY IMPORTANT since the path matching
  // router follows the order of declartion.
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(ProductData, { delay: 200 }),
    ProductModule,
    AppRoutingModule
  ],
  providers: [AppLevelService,
    { provide: URL_TOKEN, useValue: BASE_URL },
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true }],

  bootstrap: [AppComponent]
})
export class AppModule { }
