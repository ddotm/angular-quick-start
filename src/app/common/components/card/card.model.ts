import _ from 'lodash';

export interface ICardModel {
  showHeader?: boolean;
  collapsible?: boolean;
  icon?: any;
  iconClasses?: string;
  title?: string;
  cardClasses?: string;
  cardHeaderClasses?: string;
  cardBodyClasses?: string;
}

export class CardModel implements ICardModel {
  public showHeader?: boolean = false;
  public collapsible?: boolean = false;
  public startCollapsed?: boolean = false;
  public icon?: any = null;
  public iconClasses?: string = null;
  public title?: string = null;
  public subtitle?: string = null;
  public cardClasses?: string = null;
  public cardHeaderClasses?: string = null;
  public cardBodyClasses?: string = null;

  constructor(cardModel?: ICardModel) {
    if (!_.isEmpty(cardModel)) {
      _.merge(this, cardModel);
    }
  }
}
