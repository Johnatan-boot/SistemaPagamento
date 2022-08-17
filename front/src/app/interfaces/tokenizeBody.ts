export interface TokenizeBody {
    account: string; // A clear or encrypted payment account number (PAN) | An ACH routing and account number string in the format <routing>/<account> for eCheck transactions
    source?: string; // Ex.: "iToke"
    encryptionhandler?: "RSA" | "EC_APPLE_PAY" | "EC_GOOGLE_PAY"; // Ex.: RSA
    unique?: boolean;
    expiry?: string; // Formats: "MMYY"; "YYYYM"; "YYYYMM"; "YYYYMMDD". Ex.: "20261"
    cvv?: string; // Optional, the 3 or 4 digits card verification value (CVV) | Min: 3, Max: 4 | Ex.: "123"
  }