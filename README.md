# YourTradePartner - Agency Landing Page

A high-conversion landing page designed specifically for trade businesses (plumbers, electricians, builders, etc.). Built with React, Tailwind CSS, and Vite.

## Features

- **High-Performance Design:** Dark-themed, premium aesthetic tailored for the construction industry.
- **AI ChatBot:** Integrated "Trade Assistant" powered by Google Gemini (Flash 2.0 Exp), capable of answering trade-specific growth questions.
  - *Note:* Requires a valid `VITE_GEMINI_API_KEY` in `.env`.
- **Package Selection:** Interactive pricing tiers (Trade-Ready, Local Jobs Engine, Growth System).
- **Lead Capture:** Integrated contact forms and "Missed Job Review" modal.
- **Resource Download:** "Get a Free Guide" lead magnet implementation.

## Tech Stack

- **Framework:** React + Vite
- **Styling:** Tailwind CSS + Lucide React Icons
- **AI:** Google Generative AI SDK

## Setup & and Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sahar7373/agencylandingpage.git
   cd agencylandingpage
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` file in the root directory and add your Gemini API key:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

4. **Run Development Server:**
   ```bash
   npm run dev
   ```

## Project Structure

- `src/App.jsx`: Main landing page structure.
- `src/components/ChatBot.jsx`: The floating AI assistant component.
- `src/components/MissedJobReviewModal.jsx`: Lead capture modal.
- `public/`: Static assets (images, PDFs).

## License

All rights reserved.
