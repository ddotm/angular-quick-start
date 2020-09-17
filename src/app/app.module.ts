import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommonAppModule} from './common/common-app.module';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {StorageModule} from './storage/storage.module';
import {TopNavComponent} from './top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonAppModule,
    StorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
