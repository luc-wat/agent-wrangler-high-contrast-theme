# High Contrast theme for Agent Wrangler

An [Agent Wrangler](https://github.com/PortSwigger/agent-wrangler) extension that adds a
**High Contrast** theme to Settings › Appearance.

It is a dark theme with solid black surfaces, no translucency or wallpaper, white text, clearly
visible borders and a bright blue accent for focus, selection and keyboard hints. Every text and
background pair meets WCAG AAA (at least 7:1), including muted and subtle text, the status pills,
the hint markers, the terminal ANSI palette and text on a terminal selection. Borders are at least
3:1.

## Install

Needs Agent Wrangler with host API 1.43.0 or later.

1. Open **Settings › Extensions** and choose **+ Add extension**.
2. Either find **agent-wrangler-high-contrast-theme** under **Browse GitHub**, or switch to
   **Git URL** and paste `https://github.com/luc-wat/agent-wrangler-high-contrast-theme.git`.
3. Review the extension and install it. It asks for no capabilities and has no dependencies.
4. Open **Settings › Appearance** and choose **High Contrast**.

Turning the extension off removes the theme from the picker; a browser that had it chosen shows
Dark until it is back on.

## Develop

Place a checkout at `<AW_DATA_DIR>/extensions/high-contrast-theme/` on an isolated `AW_DATA_DIR`
and restart Agent Wrangler. The theme lives in `themes/high-contrast/theme.json`; the folder name
`high-contrast` is the id a browser saves, so keep it stable.

## License

MIT
