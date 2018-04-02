import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductData } from './InMemoryWebApi/ProductData';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppLevelService } from './app-level-service';
import { SharedModule } from './shared/shared.module';
import { BASE_URL, URL_TOKEN } from './app.constants';
import { AppHttpInterceptor } from './app.http-interceptor.service';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { UserModule } from './user/user.module';
import { MessageModule } from './messages/messages.module';
import { SelectivePreLoadStrategy } from './selective-pre-load-strategy.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  // IMP!: Order in which the feature/routing modules are VERY IMPORTANT since the path matching
  // router follows the order of declartion.
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(ProductData, { delay: 200 }),
    UserModule,
    MessageModule,
    AppRoutingModule
  ],
  providers: [{ provide: AppLevelService, useClass: AppLevelService },
  { provide: URL_TOKEN, useValue: BASE_URL },
  { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true },
  SelectivePreLoadStrategy],
  bootstrap: [AppComponent],
})
export class AppModule { }
