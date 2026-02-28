# Koydo — Data Safety & Privacy Nutrition Labels
**For Google Play Data Safety Section + Apple App Privacy Labels**

---

## Section 1: Google Play Data Safety

Complete at: `Google Play Console → App Content → Data safety`

---

### 1.1 Does your app collect or share any of the required user data types?
**Yes**

---

### 1.2 Is all of the app's data encrypted in transit?
**Yes** — All data is transmitted over HTTPS/TLS 1.2+

---

### 1.3 Do you provide a way for users to request that their data is deleted?
**Yes** — Users can delete their account and all associated data via:
`Settings → Account → Delete Account`

---

### 1.4 Data Types Collected

#### Personal Info
| Data Type | Collected | Shared | Required / Optional | Purpose |
|-----------|-----------|--------|---------------------|---------|
| Name | No | No | — | — |
| Email address | **Yes** | No | Required | Account creation, login, password reset |
| User IDs | **Yes** | No | Required | App functionality |
| Other personal info | No | No | — | — |

#### Financial Info
| Data Type | Collected | Shared | Required / Optional | Purpose |
|-----------|-----------|--------|---------------------|---------|
| Purchase history | **Yes** | No | Required | Subscription management |
| Credit/debit card or other payment info | No | No | — | Handled by Google Play billing |

#### App Activity
| Data Type | Collected | Shared | Required / Optional | Purpose |
|-----------|-----------|--------|---------------------|---------|
| App interactions | **Yes** | No | Required | Personalization, analytics |
| In-app search history | **Yes** | No | Optional | Personalization |
| Installed apps | No | No | — | — |
| Other user-generated content | **Yes** | No | Optional | Discussion board Q&A posts |

#### App Performance
| Data Type | Collected | Shared | Required / Optional | Purpose |
|-----------|-----------|--------|---------------------|---------|
| Crash logs | **Yes** | No | Required | Bug fixes |
| Diagnostics | **Yes** | No | Required | Performance improvement |

#### Device or other IDs
| Data Type | Collected | Shared | Required / Optional | Purpose |
|-----------|-----------|--------|---------------------|---------|
| Device or other IDs (push token) | **Yes** | No | Required | Push notifications |

---

### 1.5 Data Sharing with Third Parties

| Third Party | Data Shared | Purpose |
|-------------|-------------|---------|
| RevenueCat | User ID, purchase receipts | Subscription management |
| Supabase (self-hosted) | Account + learning data | App backend / data storage |
| Crash analytics provider | Crash logs, device info | Bug diagnosis |

*No data is sold to third parties. No data is used for advertising.*

---

### 1.6 Security Practices
- ✅ Data encrypted in transit (HTTPS/TLS 1.2+)
- ✅ Data encrypted at rest (Supabase AES-256)
- ✅ Users can request data deletion
- ✅ Committed to Google Play Families Policy (no targeting of children under 13)
- ✅ No collection of sensitive device permissions beyond what is declared

---

## Section 2: Apple App Privacy (Nutrition Labels)

Set in App Store Connect under `App Privacy`.

---

### 2.1 Privacy Nutrition Label Summary

**Data Used to Track You**: None

**Data Linked to You**:
| Category | Data Type | Purpose |
|----------|-----------|---------|
| Contact Info | Email Address | Account, App Functionality |
| Identifiers | User ID | App Functionality |
| Purchases | Purchase History | App Functionality (subscription) |
| Usage Data | App Interactions | Analytics, App Functionality |
| Diagnostics | Crash Data | App Functionality |

**Data Not Linked to You**:
| Category | Data Type | Purpose |
|----------|-----------|---------|
| Diagnostics | Performance Data | App Functionality |

---

### 2.2 Tracking (ATT — App Tracking Transparency)
- **Does the app track users?**: **No**
- **Tracking definition**: Koydo does NOT use data from this app to track users across other companies' apps or websites.
- **ATT prompt**: Not required (no cross-app tracking)
- **SKAdNetwork**: Not used (no advertising campaigns)

---

### 2.3 Privacy Policy URL
https://koydo.app/privacy

---

### 2.4 Data Retention Policy
| Data Type | Retention Period |
|-----------|-----------------|
| Account data (email, user ID) | Until account deletion |
| Learning progress & quiz history | Until account deletion |
| Purchase receipts | 7 years (financial compliance) |
| Crash logs | 90 days |
| Push notification tokens | Until unsubscribed or token refreshed |

---

### 2.5 Third-Party SDKs & Their Data Practices

| SDK | Version | Data Collected | Purpose |
|-----|---------|----------------|---------|
| RevenueCat iOS SDK | ~5.x | User ID, receipt data | Subscription management |
| Capacitor Push Notifications | ~7.x | Push token | Notifications |
| Supabase JS | ~2.x | Auth tokens | Authentication |

*All SDKs listed comply with Apple's App Store privacy requirements.*

---

## Section 3: Privacy Policy Requirements Checklist

- [ ] Privacy Policy is publicly accessible at https://koydo.app/privacy
- [ ] Privacy Policy covers: data collected, how it's used, third parties, user rights, contact info
- [ ] Privacy Policy complies with CCPA (California), GDPR (EU), COPPA (under-13)
- [ ] Privacy Policy link shown in: app onboarding, Settings, App Store listing, Google Play listing
- [ ] Last updated date visible on privacy policy page
