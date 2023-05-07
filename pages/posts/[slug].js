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
      ogImage={post.image}
    >
      <Post post={post} postContent={content} authors={authors} />
      <NextArticle post={nextArticle} />
      <Newsletter newsletter={newsletter} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const postFiles = fs.readdirSync(path.join('content/posts'))

  const paths = postFiles.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const fileContents = fs.readFileSync(
    path.join('content/posts', slug + '.md'),
    'utf8'
  )

  const { data: frontmatter, content } = matter(fileContents)
  const nextArticle = getNextArticle({frontmatter, slug})
  
  return {
    props: {
      slug,
      frontmatter,
      content,
      authors: getAuthors(),
      nextArticle,
      newsletter: getContentPage('content/shared/newsletter.md')
    },
  }
}