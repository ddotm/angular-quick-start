import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppUtilityService {

  constructor() {
  }

  public randomNum(max: number = 10000): number {
    const randomNum = Math.floor((Math.random() * max) + 1);

    return randomNum;
  }
}
