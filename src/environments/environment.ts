// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyAwA_4VEjtroAxYukACWbgJg3ZZRLraVzs',
    authDomain: 'angular-firebase-80b2a.firebaseapp.com',
    databaseURL: 'https://angular-firebase-80b2a.firebaseio.com',
    projectId: 'angular-firebase-80b2a',
    storageBucket: 'angular-firebase-80b2a.appspot.com',
    messagingSenderId: '28967809944'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
