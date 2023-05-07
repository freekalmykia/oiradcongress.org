import fs from 'fs';
import matter from 'gray-matter';

export function getContentPage(filePath) {
  const readFileContents = fs.readFileSync(filePath, 'utf8', () => {})
  const { data: frontmatter, content } = matter(readFileContents)

  return {
    frontmatter,
    content,
  }
}
