import { environment, environment3 } from "src/environments/environment";

const apiURL: string = environment3.application.api.url;
const apiCardConnectURL: string = environment3.application.api.cardConnect;
const webURL: string = environment3.application.web.url;

export const api = {
    cardConnect: {
        cardSegure: {
            tokenize: apiCardConnectURL + "cardsecure/api/v1/ccn/tokenize"
        },
        iToke: {
            ajaxTokenizer: apiCardConnectURL + "itoke/ajax-tokenizer.html"
        }
    },
    payment: apiURL + "payment"
  };
