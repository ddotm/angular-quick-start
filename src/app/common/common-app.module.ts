import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {CardComponent} from './components/card/card.component';
import {AppDirectivesModule} from './directives/app-directives.module';
import {TokenInterceptorService} from './services/token-interceptor.service';

@NgModule({
  declarations: [CardComponent],
  exports: [
    AppDirectivesModule,
    CardComponent
  ],
  imports: [
    CommonModule,
    AppDirectivesModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})
export class CommonAppModule {
}
