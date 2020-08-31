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
    AppDirectivesModule
  ]
})
export class CommonAppModule {
}
