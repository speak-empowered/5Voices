# 5 Voices — Lead Empowered

A standalone, responsive Netlify/GitHub site promoting **5 Voices for Teams** and **5 Voices Leader Academy**.

## Site structure

- `index.html` — Main 5 Voices landing page
- `contact.html` — Internal contact/conversation page with a Netlify Form
- `styles.css` — Responsive styling
- `script.js` — Lightweight interactions and form confirmation
- `assets/` — Logo, Nathan Mitchell headshot, hero team image, and program PDFs

## Navigation & CTAs

The site intentionally keeps visitors on this domain. The following calls to action route to the internal `contact.html` page:

- Talk With Nathan
- Learn More
- Discuss 5 Voices for Teams
- Discuss Leader Academy
- Start the Conversation

The only external link retained is the **Learn more about Lead Empowered** link in Nathan's bio section, as requested. The two program overview PDFs are also available directly from the site.

## Netlify deployment

1. Upload this folder to a GitHub repository, or drag the folder into Netlify.
2. If using GitHub, connect the repository to Netlify.
3. Set the publish directory to `.` if Netlify asks.
4. Netlify Forms will detect the `5-voices-contact` form automatically after deployment.
5. In Netlify, open **Forms** to view submissions and configure notification emails.

No build step or framework is required.
