# Angular Quick Start app

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2.

## Angular CLI commands
### Development server
Run `npm start` for a dev server.  
Navigate to `http://localhost:4200/`.  
The app will automatically reload if you change any of the source files.

### Code scaffolding
Run `ng g c ComponentName` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## New app process
`npm i -g @angular/cli@10.0.2`  
`ng new angular-quick-start --commit=false --createApplication=true --packageManager=npm --routing=true --skipGit=true --skipInstall=true --style=scss --dryRun=true`  
`npm outdated`  
Update any npm libraries that are outdated.  
`npm start`  
Make sure the app builds and runs without errors.  
Add `package-lock.json` to `.gitignore`

### Add lodash
`npm add lodash@latest -E --save`  
`npm add @types/lodash@latest -E --save-dev`  
Add `"allowSyntheticDefaultImports": true` to tsconfig.base.json under `compilerOptions`
Add `import _ from 'lodash';` to any component or service where you need to use lodash

### Add Bootstrap 4
Add the latest Bootstrap  
`npm i bootstrap@latest -E --save`  
In styles.scss  
`@import '~bootstrap/dist/css/bootstrap.min.css';`  
Bootstrap requires its JavaScript dependencies for the widgets to work.  
`npm i jquery@latest -E --save`  
`npm i popper.js@latest -E --save`    
In `angular.json`, modify the `"scripts"` property to include the required js files  
```json
{
  "scripts": [  
    "node_modules/jquery/dist/jquery.slim.min.js",  
    "node_modules/popper.js/dist/umd/popper.min.js",  
    "node_modules/bootstrap/dist/js/bootstrap.min.js"  
  ]
}
```

### web.config
Add `web.config` file to the `src` directory with the following settings.
If a web.config already exists, add the rewrite rules, httpCompression, and staticContent properties.
```xml
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="Angular Routes" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/" />
        </rule>
      </rules>
    </rewrite>
    <httpCompression>
      <staticTypes>
        <add mimeType="text/css" enabled="true" />
        <add mimeType="application/javascript" enabled="true" />
        <add mimeType="*/*" enabled="false" />
      </staticTypes>
    </httpCompression>
    <staticContent>
      <remove fileExtension=".json" />
      <mimeMap fileExtension=".json" mimeType="application/json" />
    </staticContent>
  </system.webServer>
</configuration>
```

### Environment specific config subsystem
By default, Angular app configuration is implemented as environment.ts files that are located in `environments` directory.
The problem with having typescript based configurations is that they are read into the app at build time, not run time.
That necessitates a re-build per environment. Generally, you want a build to happen once, and the same artifacts to be promoted from environment to environment until it is deployed to production.
This quick start app implements JSON based configurations. Config.json is read into the app at run time. So, the build happens once, all environments' configs are packaged into the dist directory, and then a specific environment deploy will push the appropriate config.json file to the root directory of the app.
The artifacts never have to be modified or re-built for promotion from environment to environment.
If desired, config.json could be hosted separately from the app.
Here are the implementation steps.
1. Create `config` directory under the `src` directory
2. Add `config.json` file under the `config` directory. This will be your local runtime config file.
3. Add any properties to `config.json` that your application may need
```json
{
  "production": false,
  "envName": "local",
  "apiUrl": "https://YOUR_API_URL"
}
``` 
4. Create `configs` directory at the same level as the `src` directory.
This is the container directory for the environment-specific config files.
5. Under the `configs` directory, add a directory for each of your intended deploy environments, e.g. `dev`.
6. Add a `config.json` file with the same schema as the config file for the local environment to each deploy environment's config subdirectory.
7. Create a typescript class that contains the same properties as the `config.json` file.
```typescript
export class Config {
  public static props: ConfigProps;
}

export class ConfigProps {
  public production: boolean = null;
  public envName: string = null;
  public apiUrl: string = null;
}
``` 
8. Modify `angular.json` file to copy config files during build
```json
"assets": [
  "src/favicon.ico",
  "src/assets",
  "src/web.config",
  { "glob": "**/*", "input": "./configs", "output": "/configs/" },
  { "glob": "**/*", "input": "./src/config", "output": "./" }
]
```
Remove the environment.ts references under `fileReplacements`
```json
"fileReplacements": [
    {
      "replace": "",
      "with": ""
    }
]
```
9. Add `"resolveJsonModule": true` to `tsconfig.base.json`
10. Finally, modify `main.ts` as follows
```typescript
import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import _ from 'lodash';
import {AppModule} from './app/app.module';
import {Config, ConfigProps} from './app/common/config';

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
```
11. To access configurations anywhere in the app, simply import `Config` class and reference any property it contains.
Example: 
```typescript
import {Component, OnInit} from '@angular/core';
import {Config} from '../common/config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public envName: string = null;

  constructor() {
  }

  ngOnInit(): void {
    this.envName = Config.props.envName;
  }
}
```

### Add top nav menu
`ng g c TopNav`  
Add TopNavComponent to the AppComponent's template  
`<app-top-nav></app-top-nav>`
Add mark-up for the top nav menu  
