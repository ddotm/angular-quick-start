import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpService} from '../common/services/http.service';
import {StorageFileInfo} from './storage-file-info';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private httpService: HttpService) {
  }

  public getFileList(storageContainerName: string): Observable<Array<StorageFileInfo>> {
    return this.httpService.get(`api/v1/storage/container/${storageContainerName}/files`)
               .pipe(
                 map((response: any) => {
                   return response.files;
                 }));
  }
}
