import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CardComponent} from './components/card/card.component';
import {AppDirectivesModule} from './directives/app-directives.module';

@NgModule({
  declarations: [CardComponent],
  exports: [
    AppDirectivesModule,
    CardComponent
  ],
  imports: [
    CommonModule,
    AppDirectivesModule
  ]
})
export class CommonAppModule {
}
