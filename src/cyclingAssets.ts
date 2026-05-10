/**
 * Cycling screen / device chrome — sourced from Figma MCP (refresh if URLs expire).
 * File: https://www.figma.com/design/tQdl6ug0q7SVITewCQlGJW/KINETIK node 2108:3398
 */
export const cyclingAssets = {
  iphoneFrame:
    'https://www.figma.com/api/mcp/asset/4b206aeb-ac35-4afd-8fd5-5356875c11d2',
  shadow:
    'https://www.figma.com/api/mcp/asset/7ab52c10-ef78-4c55-99ac-df05d3508af3',
  decor:
    'https://www.figma.com/api/mcp/asset/b9c402c1-93ba-40ef-aafc-437245f337ec',
  cap: 'https://www.figma.com/api/mcp/asset/f4c55f2a-72e8-4481-be9f-6692e659d9d6',
  wifi: 'https://www.figma.com/api/mcp/asset/ac7e604c-5c99-481b-9224-5bd3e2388d8e',
  cellular:
    'https://www.figma.com/api/mcp/asset/5386fc43-6b38-45c3-84ef-c10aeccd78ba',
  /** Semicircle track + arc — Figma 2108:3469 / 2108:3470 (refresh if URLs expire) */
  gaugeArcBg:
    'https://www.figma.com/api/mcp/asset/932b606e-f8c5-4354-9e24-b7a7b33045bf',
  gaugeArcFg:
    'https://www.figma.com/api/mcp/asset/1f3e00f7-9e47-407a-900e-b03b581a8ca7',
  heart: 'https://www.figma.com/api/mcp/asset/381bacee-0114-49e6-92c1-54af8fb1ad9e',
  fab: 'https://www.figma.com/api/mcp/asset/cbdb5e00-de87-4ef7-adc8-47bc9f050fa0',
  goalsRing:
    'https://www.figma.com/api/mcp/asset/e80bcc1e-4d06-4dd4-b477-64aa2c76d377',
  goalsDot:
    'https://www.figma.com/api/mcp/asset/8a974c90-7faf-4c7d-83b2-8fe05fda72c3',
  goalsCentre:
    'https://www.figma.com/api/mcp/asset/23066df7-c6bc-4436-9c40-e038cc121f09',
  historyIcon:
    'https://www.figma.com/api/mcp/asset/642a7600-c0dd-49ce-b9b6-c079f588975e',
  insightLines: [
    'https://www.figma.com/api/mcp/asset/f789c403-7123-42f4-aa15-0b5dd02122ca',
    'https://www.figma.com/api/mcp/asset/d726ba21-ea14-4685-adf1-4f8e75507d29',
    'https://www.figma.com/api/mcp/asset/e6557519-c352-447a-ad48-8232811f218a',
    'https://www.figma.com/api/mcp/asset/88ddc09c-56f3-4f53-b74f-5e12cc6414cf',
    'https://www.figma.com/api/mcp/asset/488cd86b-6bfb-4750-ab3e-8bacf0df4c67',
    'https://www.figma.com/api/mcp/asset/39bad2b8-e519-4dc7-8861-5aa7fd6a6948',
    'https://www.figma.com/api/mcp/asset/d509ec6e-671c-4bb7-8c3a-56fd6eafecae',
  ] as const,
}

/** Bars from Figma “Graph” (2108:3490): left px, height px, top px, fill */
export const bodyLoadBars = [
  { left: 208, h: 36, top: 371, bg: '#2dd463' },
  { left: 219, h: 42, top: 365, bg: '#66d162' },
  { left: 230, h: 46, top: 361, bg: '#75d161' },
  { left: 241, h: 50, top: 357, bg: '#b2cc5c' },
  { left: 252, h: 54, top: 353, bg: '#cbc55a' },
  { left: 263, h: 58, top: 349, bg: '#e8ca5c' },
  { left: 274, h: 66, top: 341, bg: '#fec053' },
  { left: 285, h: 62, top: 345, bg: '#fdbb54' },
  { left: 296, h: 56, top: 351, bg: '#b1b1b1' },
  { left: 307, h: 58, top: 349, bg: '#b1b1b1' },
  { left: 318, h: 60, top: 347, bg: '#b1b1b1' },
  { left: 329, h: 62, top: 345, bg: '#b1b1b1' },
  { left: 340, h: 66, top: 341, bg: '#b1b1b1' },
] as const
