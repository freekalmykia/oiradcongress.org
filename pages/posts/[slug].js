import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Layout from '../../components/layout/Layout'
import { getAuthors } from '../../libs/getAuthors'
import { getNextArticle } from '../../libs/getPosts'
import Post from '../../components/posts/Post'
import NextArticle from '../../components/posts/NextArticle'
import Newsletter from '../../components/shared/Newsletter'
import { getContentPage } from '../../libs/getContentPage'
import { withLocale } from '../../utils/locale'

export default function PostPage({
  slug,
  content,
  frontmatter: post,
  authors,
  nextArticle,
  newsletter
}) {
  return (
    <Layout 
      metaTitle={post.title} 
      metaDescription={post.description} 
      ogImage={`https://oiratcongress.org${post.image}`}
    >
      <Post slug={slug} post={post} postContent={content} authors={authors} />
      <NextArticle post={nextArticle} />
      <Newsletter newsletter={newsletter} />
    </Layout>
  )
}

export async function getStaticPaths({ locales }) {
  const paths = locales.map(locale => {
    const fileNames = fs.readdirSync(path.join('content/posts', locale));
    return fileNames.map(fileName => ({
      params: { slug: fileName.replace('.md', '') },
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
    withLocale(path.join('content/posts'), locale, slug),
    'utf8'
  )

  const { data: frontmatter, content } = matter(fileContents)
  const nextArticle = getNextArticle({frontmatter, slug}, locale)
  
  return {
    props: {
      slug,
      frontmatter,
      content,
      authors: getAuthors(locale),
      nextArticle,
      newsletter: getContentPage('content/shared/newsletter.md')
    },
  }
}