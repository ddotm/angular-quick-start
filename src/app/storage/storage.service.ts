import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from '../common/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private httpService: HttpService) {
  }

  public getFileList(storageContainerName: string): Observable<any> {
    return this.httpService.get(`api/v1/storage/container/${storageContainerName}`);
  }
}
