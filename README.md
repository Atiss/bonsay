# TestBonsay

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

## Registration of the application on Github
Go to https://github.com/settings/applications/new and fill next fields
- Application name
- Homepage URL - root url of project
- Authorization callback URL - root url of project
- Click register application

After registering Github will return clientId.

You should include this clientId into ```environment.ts``` in field ```githubClientId```.
```js
export const environment = {
  ...
  githubClientId: '4bd2d0275ce8b52913a1',
};
```

## Project setup
Run `npm install` to install dependencies

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
