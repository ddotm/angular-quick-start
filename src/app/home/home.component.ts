import {Component, OnInit} from '@angular/core';
import {CardModel} from '../common/components/card/card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cardModel: CardModel = new CardModel({
    title: 'CardComponent - generic container',
    subtitle: 'Use this container to present forms',
    cardClasses: 'w-25'
  });

  constructor() {
  }

  ngOnInit(): void {
  }

}
