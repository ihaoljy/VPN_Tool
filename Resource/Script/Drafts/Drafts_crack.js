/*
脚本引用https://raw.githubusercontent.com/chxm1023/Rewrite/main/Drafts.js
*/
//2023-09-14 16:16:39

var chxm1023 = JSON.parse($response.body);

chxm1023 = {
  "active_expires_at" : "2099-09-09T09:09:09Z",
  "is_subscription_active" : true,
  "active_subscription_type" : "none",
  "is_blocked" : false,
  "has_had_free_trial" : true
};

$done({body : JSON.stringify(chxm1023)});