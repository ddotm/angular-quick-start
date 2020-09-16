import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CommonAppModule} from '../common/common-app.module';
import {FileListComponent} from './file-list/file-list.component';

@NgModule({
  declarations: [
    FileListComponent
  ],
  exports: [
    FileListComponent
  ],
  imports: [
    CommonModule,
    CommonAppModule
  ]
})
export class StorageModule {
}
