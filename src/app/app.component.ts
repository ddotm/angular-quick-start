import {Component, OnInit} from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title: string = null;

  constructor() {
  }

  public ngOnInit(): void {
    this.useLodash();
  }

  public useLodash(): void {
    this.title = _.toString('Angular Quick Start');
  }
}
