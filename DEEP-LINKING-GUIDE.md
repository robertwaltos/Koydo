# Deep Linking Guide

## Android Setup
In \ndroid/app/src/main/AndroidManifest.xml\, add the following intent filter inside the \<activity>\ tag:

\\\xml
<intent-filter android:autoVerify="true">
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="https" android:host="koydo.app" android:pathPrefix="/explore" />
    <data android:scheme="https" android:host="koydo.app" android:pathPrefix="/lessons" />
    <data android:scheme="https" android:host="koydo.app" android:pathPrefix="/auth/callback" />
</intent-filter>
\\\`n
## iOS Setup
1. In Xcode, add the **Associated Domains** capability.
2. Add: \pplinks:koydo.app\`n3. Host the AASA file located at \public/.well-known/apple-app-site-association\:

\\\json
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "TEAMID.com.koydo.app",
        "paths": [ "/explore/*", "/lessons/*", "/auth/callback*" ]
      }
    ]
  }
}
\\\`n
## Fallback
If the app is not installed, deep links automatically act as standard https web links, leading users directly to the web app.