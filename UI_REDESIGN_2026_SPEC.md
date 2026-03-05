# Koydo 2026 UI/UX Redesign Specification
**Date:** March 2026
**Branch:** `gemini_prompt_ui`
**Role:** Creative Director / UI Engineer

## Overview
This document serves as the official specification and changelog for the Phase 1 & Phase 2 UI/UX redesign of Koydo, executed per the `Design_prompt_gemini.md` creative brief. 

The core goal of this sprint was to implement a jaw-dropping, "Living Interface" that actively morphs based on the user's age/developmental stage without breaking core layout components.

## 1. The Adaptive Background Engine (`AdaptiveBackground.tsx`)
We replaced all static background images on the Landing Page and Auth Pages with a procedural, Framer Motion-powered "Living Background".
- **Technology:** React, Framer Motion, CSS Mix-Blend Modes, SVG SVG Fractal Noise.
- **Behavior:** The engine renders floating, blurred "orbs".
- **Adaptive Triggers:**
  - **Ages 1-5 (Tiny Explorer):** Soft pastel orbs (Mint, Yellow, Peach) moving with slow, bouncy, playful physics.
  - **Ages 6-11 (Young Adventurer):** Vibrant, high-energy orbs (Blue, Emerald, Coral) with faster traversal paths.
  - **Ages 12-17 (Teen Mode):** Deep cyber/neon blurs (Purple, Cyan) acting as a native dark mode.
  - **18+ (Adult Pro):** Stripe-clean, ultra-subtle white/indigo blurs providing a calming, professional atmosphere.

## 2. Interactive Morphing Hero (`LandingHeroInteractive.tsx`)
The static landing page hero has been completely replaced with a showcase of Koydo's adaptive capabilities.
- **The Age Slider:** A draggable timeline slider is now front-and-center. 
- **Real-Time Morphing:** As the user drags the slider, the `AdaptiveBackground`, H1 typography scale (Fredoka -> Nunito -> Inter), and CTA button physics (bouncy rounded pills -> sharp modern buttons) transition smoothly via Framer Motion. 
- **Purpose:** Visually proves to parents and educators *exactly* how the app adapts to cognitive load before they even sign up.

## 3. "Split-Door" Auth Experience
The authentication flows (Sign-In and Sign-Up) have been visually overhauled to match the premium 2026 aesthetic.
- **The Layout (`AuthLayout.tsx`):** We injected the new `AdaptiveBackground` at the layout level.
- **Glassmorphism:** The static white auth cards have been upgraded to deep frosted glass (`backdrop-blur-2xl`, `bg-white/40`) with subtle `shadow-[0_16px_48px_rgba(0,0,0,0.1)]`.
- **Experience:** The login form now appears to float magically above the living, breathing application background.

## 4. Top Navigation (Aesthetic Only)
**CRITICAL NOTE:** Per engineering requirements, the layout, flexbox structure, and content of `TopNav.tsx` were strictly preserved for a parallel agent's work.
- **Styling Upgrade:** Applied high-end glassmorphism tokens to the top navigation bar.
- **Changes:** Shifted the background to a deeper blur (`backdrop-blur-2xl`), refined the drop shadow for better elevation, and rounded the corners of the dropdown menu container (`rounded-[1.5rem]`) to match the new visual language.

## 5. Gamification (Previously Implemented)
- **Floating XP:** Spawning `+XP` numbers that animate upwards off the screen using Framer Motion.
- **Ignis the AI Dragon:** Added a new mood-sensing companion persona with fiery SVG aesthetics.
- **Ambient Co-Regulator:** Added predictive focus timers to `GreeterCompanion` that trigger a breathing exercise when a student hits peak cognitive load.
