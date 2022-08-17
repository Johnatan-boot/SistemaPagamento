export interface PaymentBody {
    amount: string;
    total: string;
    fee: string;
    token: string;
    expiry: string;
    invoice?: string;
    payment_type: string;
    account_type?: "ECHK" | "ESAV";
    postal_code: string;
  }