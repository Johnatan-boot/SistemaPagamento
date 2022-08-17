// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  stripe_pk:'pk_test_51Jj2B8E9r1Q1FPXxxhhxIIZp39vtVb5HJUFWJD8hlhf60j4j65UsajK2MvVE13iOAziUSUgknN4UvazwJHdsxyxf00ExYIiWu1',
  api:'http://localhost:3000'
};

export const environment3 = {
  production: false,
  application: {
    api: {
      url: "https://us-central1-payment-card-350701.cloudfunctions.net/",
       //cardConnect: "https://boltgw-uat.cardconnect.com/"
      cardConnect: "https://fts.cardconnect.com/"
    },
    web: {
      url: "http://localhost:4200/"
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
