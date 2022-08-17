export const environment = {
  production: true,
  application: {
    api: {
      url: "https://us-central1-payment-card-350701.cloudfunctions.net/",
      //cardConnect: "https://boltgw-uat.cardconnect.com/"
      cardConnect: "https://fts.cardconnect.com/",

    },
    web: {
      url: "WEB_URL"
    }
  }
};

export const environment2 = {
  production: false,
  stripe_pk:'pk_test_51Jj2B8E9r1Q1FPXxxhhxIIZp39vtVb5HJUFWJD8hlhf60j4j65UsajK2MvVE13iOAziUSUgknN4UvazwJHdsxyxf00ExYIiWu1',
  api:'http://localhost:3000'
};
