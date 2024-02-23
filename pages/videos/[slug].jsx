import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Layout from '../../components/layout/Layout'
import { getNextVideo } from '../../libs/getVideos'
import Video from '../../components/videos/Video'
import NextVideo from '../../components/videos/NextVideo'
import Newsletter from '../../components/shared/Newsletter'
import { getContentPage } from '../../libs/getContentPage'
import { withLocale } from '../../utils/locale'

export default function VideoPage({
  slug,
  content,
  frontmatter: video,
  nextVideo,
  newsletter
}) {
  return (
    <Layout 
      metaTitle={video.title} 
      metaDescription={video.description} 
      ogImage={`https://oiratcongress.org${video.image}`}
    >
      <Video video={video} videoContent={content} />
      <NextVideo video={nextVideo} />
      <Newsletter newsletter={newsletter} />
    </Layout>
  )
}

export async function getStaticPaths({ locales }) {

  const paths = locales.map(locale => {
    const videoFiles = fs.readdirSync(path.join('content/videos', locale))
    return videoFiles.map((filename) => ({
      params: {
        slug: filename.replace('.md', ''),
      },
      locale
    }))
  }).flat()

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ locale, params: { slug } }) {
  const fileContents = fs.readFileSync(
    withLocale(path.join('content/videos'), locale, slug),
    'utf8'
  )

  const { data: frontmatter, content } = matter(fileContents)
  const nextVideo = getNextVideo(locale)
  
  return {
    props: {
      slug,
      frontmatter,
      content,
      nextVideo,
      newsletter: getContentPage('content/shared/newsletter.md')
    },
  }
}