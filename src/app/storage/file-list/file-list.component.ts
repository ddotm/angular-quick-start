import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {CardModel} from '../../common/components/card/card.model';
import {StorageFileInfo} from '../storage-file-info';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {
  public cardModel: CardModel = new CardModel({
    title: 'My files',
    cardClasses: 'w-25'
  });

  public $fileList: Observable<Array<StorageFileInfo>> = null;
  public form: FormGroup = new FormGroup({
    containerName: new FormControl('')
  });

  constructor(private storageService: StorageService) {
  }

  ngOnInit(): void {
  }

  public getFileList(): void {
    const containerName: string = this.form.getRawValue()['containerName'];
    this.$fileList = this.storageService.getFileList(containerName);
  }

}
