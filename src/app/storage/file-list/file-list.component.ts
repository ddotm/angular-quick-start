import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CardModel} from '../../common/components/card/card.model';
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

  public $fileList: Observable<string> = null;

  constructor(private storageService: StorageService) {
  }

  ngOnInit(): void {
    // this.$fileList = this.storageService.getFileList('');
  }

}
