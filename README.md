# Neev

**AI crop planning for Indian smallholder farmers: grow what will sell, not what everyone else is growing.**

[Live demo](https://neev-510df.web.app/)

Farmers often plant last season's best-selling crop, which leads to oversupply and price crashes. Neev combines mandi price history with soil type to warn about crops heading for a glut and suggest better-suited alternatives.

## Features

- Flags crops likely to face oversupply and low prices
- Suggests 2–3 alternative crops that suit the local soil and face less competition
- Shows 5-year mandi price trends as simple signals, not spreadsheets
- Interactive demo: choose state, soil type, crop, season and language
- Designed for 22 Indian languages, voice input/output and WhatsApp delivery
- Remembers recent choices on the device

## Built with

HTML, CSS, JavaScript, Firebase Hosting

**Data sources:** Agmarknet mandi prices, data.gov.in

## Roadmap

- Live multilingual voice through the Bhashini API
- WhatsApp Business delivery of crop plans
- Offline mode with weekly cached market data
- Retrieval-augmented (RAG) recommendations with a FastAPI backend

## Run locally

```bash
npx serve .
```

Then open the URL it prints.
