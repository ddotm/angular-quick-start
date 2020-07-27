import _ from 'lodash';

export class FooterVm {
  public appName: string = null;
  public envName: string = null;

  constructor(data?: FooterVm) {
    if (!_.isEmpty(data)) {
      _.merge(this, data);
    }
  }
}
