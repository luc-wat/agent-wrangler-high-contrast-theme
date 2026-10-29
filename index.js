import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Agent Wrangler reads themes from `themes/<id>/theme.json`, resolved against
// this absolute `dir`. The folder name `high-contrast` is the theme id a
// browser saves, so keep it stable across releases.
export default {
  id: 'high-contrast-theme',
  label: 'High Contrast theme',
  description: 'Adds a High Contrast theme to Settings › Appearance.',
  author: 'luc-wat',
  requires: [],
  engines: { wranglerApi: '^1.43.0' },
  dir: path.dirname(fileURLToPath(import.meta.url)),
  defaultEnabled: true,
  themes: 'themes',
};
