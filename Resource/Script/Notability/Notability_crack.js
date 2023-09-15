/*
转载自https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/break/notability.js
*/
// 2023-08-09 22:25

if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (obj.data) {
  obj.data = {
    processAppleReceipt: {
      error: 0,
      subscription: {
        productId: "com.gingerlabs.Notability.premium_subscription",
        originalTransactionId: "570001184068302",
        tier: "premium",
        refundedDate: null,
        refundedReason: null,
        isInBillingRetryPeriod: false,
        expirationDate: "2090-12-31T23:59:59.000Z",
        gracePeriodExpiresAt: null,
        overDeviceLimit: false,
        expirationIntent: null,
        __typename: "AppStoreSubscription",
        user: null,
        status: "canceled",
        originalPurchaseDate: "2022-09-01T09:12:34.000Z"
      },
      __typename: "SubscriptionResult"
    }
  };
}

$done({ body: JSON.stringify(obj) });
