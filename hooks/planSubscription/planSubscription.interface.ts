export interface IPlanSubscriptions {
  id: number;
  uuid: string;
  user_id: number;
  plan_id: number;
  amount_paid: number;
  transaction_ref: string;
  payment_provider: string;
  status: string;
  expiration_time: string;
  deleted_at: null;
  created_at: string;
  updated_at: string;
  payment: Payment;
}

export interface Payment {
  paymentIntent: string;
  ephemeralKey: string;
  customerId: string;
  publishableKey: string;
}
