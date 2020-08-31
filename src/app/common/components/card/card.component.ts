import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ComponentLoaderDirective} from '../../directives/component-loader.directive';
import {CardModel} from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardModel?: CardModel = new CardModel();
  @ViewChild(ComponentLoaderDirective, {static: true}) componentHost: ComponentLoaderDirective;

  constructor() {
  }

  ngOnInit(): void {
  }

}
