import fs from 'fs';
import path from 'path';

export const withLocale = (dirname, locale, slug) => {
  const filePath = path.join(dirname, locale, slug + '.md');
  const defaultFilePath = path.join(dirname, 'en', slug + '.md');
  if (fs.existsSync(filePath)) return filePath;
  return defaultFilePath;
}