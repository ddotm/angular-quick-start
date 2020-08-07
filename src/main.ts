import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import _ from 'lodash';
import {AppModule} from './app/app.module';
import {Config, ConfigProps} from './app/common/models/config';

fetch('config.json')
  .then(res => res.json())
  .then((configProps: ConfigProps) => {
    console.log('config.json read in main.ts ' + JSON.stringify(configProps));

    Config.props = _.cloneDeep(configProps);

    if (Config.props.production) {
      enableProdMode();
    }

    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .catch(err => console.log(err));
  });
