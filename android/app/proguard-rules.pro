# Add project specific ProGuard rules here.
# You can control the set of applied configuration files using the
# proguardFiles setting in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Keep line number information for debugging stack traces
-keepattributes SourceFile,LineNumberTable
-renamesourcefileattribute SourceFile

# ── Capacitor ─────────────────────────────────────────────────────────────────
-keep class com.getcapacitor.** { *; }
-keep interface com.getcapacitor.** { *; }
-keepclassmembers class * extends com.getcapacitor.Plugin {
    @com.getcapacitor.annotation.CapacitorPlugin *;
    @com.getcapacitor.annotation.PluginMethod *;
}

# ── WebView JavaScript Interface ───────────────────────────────────────────────
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}

# ── RevenueCat ────────────────────────────────────────────────────────────────
-keep class com.revenuecat.purchases.** { *; }
-keep class com.revenuecat.purchases.interfaces.** { *; }
-dontwarn com.revenuecat.purchases.**

# ── Firebase / FCM (push notifications) ───────────────────────────────────────
-keep class com.google.firebase.** { *; }
-keep class com.google.android.gms.** { *; }
-dontwarn com.google.firebase.**
-dontwarn com.google.android.gms.**

# ── Kotlin coroutines (used by RevenueCat + Capacitor) ────────────────────────
-keepclassmembers class kotlinx.coroutines.** { *; }
-dontwarn kotlinx.coroutines.**

# ── Reflection-based serialization ────────────────────────────────────────────
-keepattributes Signature
-keepattributes *Annotation*
-keepattributes InnerClasses
-keepattributes EnclosingMethod

# ── OkHttp / Retrofit (network layer) ─────────────────────────────────────────
-dontwarn okhttp3.**
-dontwarn okio.**
-dontwarn retrofit2.**
