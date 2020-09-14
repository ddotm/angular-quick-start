import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Config} from '../models/config';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = Config.props.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  public get<T>(url: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}${url}`);
  }

  public post<T>(url: string, data: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}${url}`, data);
  }

  public put<T>(url: string, data: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}${url}`, data);
  }

  public patch<T>(url: string, data: any): Observable<any> {
    return this.httpClient.patch(`${this.apiUrl}${url}`, data);
  }

  public delete<T>(url: string): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}${url}`);
  }
}
