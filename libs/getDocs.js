import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { sortByDate } from '../utils/sort';
import { withLocale } from '../utils/locale';

export function getDocs(locale) {
  const docs = fs.readdirSync(path.join('content/docs', locale))
    .map((filename) => {
      const slug = filename.replace('.md', '');
      const docContents = fs.readFileSync(withLocale(path.join('content/docs'), locale, slug), 'utf8');

      const { data: frontmatter, content } = matter(docContents);

      return {
        slug,
        frontmatter,
        content
      }
    });
    
  return docs;
}

export function getNextDoc(locale) {
  const docs = getDocs(locale);

  if (!docs.length) return null;

  return docs[Math.floor(Math.random() * docs.length)];
}