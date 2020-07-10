# AngularQuickStart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## New app process
`npm i -g @angular/cli@10.0.2`  
`ng new angular-quick-start --commit=false --createApplication=true --packageManager=npm --routing=true --skipGit=true --skipInstall=true --style=scss --dryRun=true`  
`npm outdated`  
Update any npm libraries that is outdated.  
`npm start`  
Make sure the app builds and runs without errors.  
Add `package-lock.json` to `.gitignore`

### Add lodash
`npm add lodash@latest -E --save`  
`npm add @types/lodash@latest -E --save-dev`  
Add `"allowSyntheticDefaultImports": true` to tsconfig.base.json under `compilerOptions`
Add `import _ from 'lodash';` to any component or service where you need to use lodash
