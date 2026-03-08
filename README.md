# LLM Cost Calculator 💰

Enter your expected token usage and see what it'll cost across all the major AI models — GPT-4o, Claude 3.5 Sonnet, Gemini Pro, and more.

Handy when you're picking a model for a project and need to know what the bill will look like.

## Try It

Open `index.html` in your browser. No install needed.

## Models Included

| Provider | Models |
|----------|--------|
| OpenAI | GPT-4o, GPT-4o mini, GPT-4 Turbo, o1 |
| Anthropic | Claude 3.5 Sonnet, Claude 3 Haiku, Claude 3 Opus |
| Google | Gemini 1.5 Pro, Gemini 1.5 Flash |
| Meta | Llama 3.1 (via API providers) |

Prices are updated as of early 2025. If they're out of date, PRs welcome.

## Features

- Enter input and output tokens separately
- See cost per request and monthly estimates
- Sort by cheapest
- Side-by-side comparison table
- Works offline — it's just a static page

## npm

```bash
npm install llm-cost-calculator
```

Or just grab the HTML file and host it yourself.

## Contributing

Spotted a wrong price? New model missing? Open a PR — just update the `models` array in `index.html`.

## About Hand On Web
We build AI chatbots, voice agents, and automation tools for businesses.
- 🌐 [handonweb.com](https://www.handonweb.com)
- 📧 outreach@handonweb.com
- 📍 Chester, UK

## Licence
MIT
