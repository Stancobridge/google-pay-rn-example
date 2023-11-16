import { initStripe, usePlatformPay } from "@stripe/stripe-react-native";
import { useEffect } from "react";

export const useProcessSubscriptionIntent = () => {
  const { isPlatformPaySupported, confirmPlatformPayPayment } =
    usePlatformPay();
  useEffect(() => {}, []);
  const showPaymentSheet = async () => {
    await initStripe({
      publishableKey: "" // stripe publishable key here,
    });

    const platformPayAvailable = await isPlatformPaySupported({
      googlePay: { testEnv: true, existingPaymentMethodRequired: false },
    });
    if (!platformPayAvailable) {
      console.log("Platform payment not supported");
      return;
    }

    const { paymentIntent: data, error } = await confirmPlatformPayPayment(
      "dsdsds",
      {
        googlePay: {
          currencyCode: "USD",
          merchantCountryCode: "US",
          testEnv: true,
        },
      }
    );

    console.log({ data, error });
  };

  return { showPaymentSheet };
};
