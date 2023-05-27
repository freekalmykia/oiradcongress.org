import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { sortByDate } from '../utils/sort';

export function getDocs() {
  const docFiles = fs.readdirSync(path.join('content/docs'));

  const docs = docFiles.map((filename) => {
    const slug = filename.replace('.md', '');
    const docContents = fs.readFileSync(path.join('content/docs', filename), 'utf8');

    const { data: frontmatter, content } = matter(docContents);

    return {
      slug,
      frontmatter,
      content
    }
  });

  return docs;
}

export function getNextDoc(post) {
  const docs = getDocs();

  if (!docs.length) return null;

  return docs[Math.floor(Math.random() * docs.length)];
}