'use strict';

const PRICES = {
  'gpt-4o': { input: 2.50, output: 10.00 },
  'gpt-4o-mini': { input: 0.15, output: 0.60 },
  'gpt-4': { input: 30.00, output: 60.00 },
  'gpt-3.5-turbo': { input: 0.50, output: 1.50 },
  'claude-3-opus': { input: 15.00, output: 75.00 },
  'claude-3-sonnet': { input: 3.00, output: 15.00 },
  'claude-3-haiku': { input: 0.25, output: 1.25 },
  'gemini-pro': { input: 0.50, output: 1.50 },
  'gemini-flash': { input: 0.075, output: 0.30 }
};
// prices per 1M tokens

module.exports = {
  calculate: (model, inputTokens, outputTokens) => {
    const p = PRICES[model];
    if (!p) return null;
    const inputCost = (inputTokens / 1000000) * p.input;
    const outputCost = (outputTokens / 1000000) * p.output;
    return {
      model,
      inputCost,
      outputCost,
      totalCost: +(inputCost + outputCost).toFixed(6),
      currency: 'USD'
    };
  },
  models: () => Object.keys(PRICES),
  getPrice: (model) => PRICES[model] || null
};
