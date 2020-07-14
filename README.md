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

### Add top nav menu
`ng g c TopNav`  
Add TopNavComponent to the AppComponent's template  
`<app-top-nav></app-top-nav>`
Add mark-up for the top nav menu  

