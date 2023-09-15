/*
脚本引用https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/break/revenuecat.js
*/
// 2023-07-31 07:20

const url = $request.url;
const header = $request.headers;
let ua = header["User-Agent"] || header["user-agent"];
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (ua.includes("Pomodoro/11521")) {
  if (obj.subscriber) {
    obj.subscriber.non_subscriptions = {};
    obj.subscriber.original_application_version = "11521";
    obj.subscriber.other_purchases = {};
    obj.subscriber.management_url =
      "https://apps.apple.com/account/subscriptions";
    obj.subscriber.subscriptions = {
      "com.MINE.PomodoroTimer.plus.lifetime": {
        store_transaction_id: "350001638433463",
        expires_date: "2999-12-28T09:00:00Z",
        is_sandbox: false,
        refunded_at: null,
        unsubscribe_detected_at: null,
        auto_resume_date: null,
        grace_period_expires_date: null,
        period_type: "plus",
        purchase_date: "2023-06-27T10:08:54Z",
        billing_issues_detected_at: null,
        ownership_type: "PURCHASED",
        store: "app_store",
        original_purchase_date: "2023-06-27T10:08:55Z"
      }
    };
    obj.subscriber.entitlements = {
      Lifetime: {
        expires_date: "2999-12-28T09:00:00Z",
        purchase_date: "2023-06-27T10:08:54Z",
        product_identifier: "com.MINE.PomodoroTimer.plus.lifetime",
        grace_period_expires_date: null
      },
      Plus: {
        expires_date: "2999-12-28T09:00:00Z",
        purchase_date: "2023-06-27T10:08:54Z",
        product_identifier: "com.MINE.PomodoroTimer.plus.lifetime",
        grace_period_expires_date: null
      }
    };
    obj.subscriber.original_purchase_date = "2023-06-26T23:02:50Z";
    obj.subscriber.original_app_user_id =
      "$RCAnonymousID:703ef974c072411c8df2e0a6c94f4yqc";
  }
  $done({ body: JSON.stringify(obj) });
} else {
  $done({});
}
