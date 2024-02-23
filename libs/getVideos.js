import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { sortByDate, sortByViews } from "../utils/sort";
import { withLocale } from "../utils/locale";

export function getVideos(locale) {
  const videos = fs.readdirSync(path.join('content/videos', locale))
    .map(video => {
      const slug = video.replace('.md', '');
      const videoContent = fs.readFileSync(
        withLocale(path.join('content/videos'), locale, slug),
        'utf8'
      )

      const { data: frontmatter, content } = matter(videoContent);

      return {
        slug,
        frontmatter,
        content
      }
    })
    .filter(video => !video.frontmatter.draft)
    .sort(sortByDate)

  return videos;
}

export function getNextVideo(locale) {
  const videos = getVideos(locale);

  if (!videos.length) return null;

  return videos[Math.floor(Math.random() * videos.length)];
}