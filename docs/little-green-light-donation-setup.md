# Little Green Light Donation Form + API Key Setup

This guide explains how to connect the donation flow in `src/pages/donate.astro` to a real payment processor using Little Green Light (LGL Forms).

## Important clarification about "API key"

Little Green Light donations are typically handled through **LGL Forms** connected to a payment processor (usually Stripe), rather than a single public "Little Green Light API key" pasted into your page.

In practice, you will manage:

- **Little Green Light account access** (inside LGL dashboard)
- **Stripe keys** for payment processing
- Optional webhook secret for server-side validation

## Prerequisites

- Active Little Green Light account
- Stripe account (recommended by LGL for nonprofit donation flows)
- Access to your Astro project (`RAL`)

## Step 1) Create donation form in LGL

1. Log in to Little Green Light.
2. Go to LGL Forms and create a new donation form.
3. Configure:
   - One-time and/or recurring donation options
   - Suggested amounts (`$50`, `$100`, `$250`, `$500`) to match your current page UI
   - Donor details fields (name, email, optional message)
4. Publish the form.

After publish, LGL gives either:

- a hosted donation URL, or
- an embed snippet (HTML/iframe/script)

## Step 2) Connect payment processor (Stripe)

1. In LGL, open payment processor settings for the form.
2. Connect Stripe account.
3. Confirm nonprofit pricing/eligibility in Stripe if applicable.
4. Run a test transaction.

## Step 3) Store keys safely in Astro project

Never place secret keys directly in `donate.astro` or client-side JavaScript.

Use environment variables in local/dev and hosting platform secrets in production.

Suggested `.env` values:

```bash
# Server-only secret keys (never expose in browser)
STRIPE_SECRET_KEY="sk_live_xxx"
STRIPE_WEBHOOK_SECRET="whsec_xxx"

# Safe publishable key for frontend use
PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_live_xxx"

# Optional: hosted LGL donation URL if redirecting
PUBLIC_LGL_DONATION_URL="https://your-org.littlegreenlight.com/..."
```

## Step 4) Choose integration approach

### Option A (fastest): Redirect to hosted LGL donation page

- Keep your current donation design.
- On `Donate Now`, redirect to `PUBLIC_LGL_DONATION_URL`.
- Pros: quickest, lowest maintenance, payment logic fully handled by LGL + Stripe.

### Option B: Embed LGL form in your page

- Replace/customize the current static form controls in `donate.astro`.
- Paste the LGL embed code in a dedicated section/component.
- Pros: donors stay on your site.

### Option C: Custom Stripe checkout endpoint (advanced)

- Keep your own UI and create a server endpoint in Astro (`src/pages/api/donate.ts`) that creates Stripe Checkout sessions.
- Use `STRIPE_SECRET_KEY` only on server.
- This gives maximum UI control, but more maintenance than hosted/embed forms.

## Step 5) Minimal Astro endpoint pattern (if using custom checkout)

Install Stripe:

```bash
npm install stripe
```

Create server endpoint (example):

```ts
// src/pages/api/donate.ts
import type { APIRoute } from 'astro';
import Stripe from 'stripe';

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-03-31.basil',
});

export const POST: APIRoute = async ({ request }) => {
  const { amount } = await request.json();

  if (!Number.isFinite(amount) || amount <= 0) {
    return new Response(JSON.stringify({ error: 'Invalid amount' }), { status: 400 });
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: { name: 'Rights Action Lab Donation' },
          unit_amount: Math.round(amount * 100),
        },
        quantity: 1,
      },
    ],
    success_url: `${new URL(request.url).origin}/donate?status=success`,
    cancel_url: `${new URL(request.url).origin}/donate?status=cancelled`,
  });

  return new Response(JSON.stringify({ url: session.url }), { status: 200 });
};
```

## Security checklist

- Keep all secret keys in environment/hosting secrets.
- Use `PUBLIC_` prefix only for values safe to expose in browser.
- Validate donation amounts on the server.
- Use HTTPS in production.
- Rotate keys immediately if leaked.

## Testing checklist

- Test preset amounts (`$50`, `$100`, `$250`, `$500`) from your current UI.
- Test custom amount input with invalid/empty values.
- Verify success and cancel redirects.
- Confirm transaction appears in LGL and Stripe dashboards.

## Notes for your current `donate.astro`

Your current file is a styled UI and does not yet submit data to a payment provider. After deciding on Option A/B/C above, wire the `Donate Now` button accordingly.

## Reference

- Little Green Light online donations overview: <https://www.littlegreenlight.com/online-donations/>
