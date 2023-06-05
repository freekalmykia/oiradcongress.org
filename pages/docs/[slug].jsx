import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Layout from '../../components/layout/Layout'
import { getNextDoc } from '../../libs/getDocs'
import Doc from '../../components/docs/Doc'
import NextDoc from '../../components/docs/NextDoc'
import Newsletter from '../../components/shared/Newsletter'
import { getContentPage } from '../../libs/getContentPage'

export default function DocPage({
  slug,
  content,
  frontmatter: doc,
  nextDoc,
  newsletter
}) {
  return (
    <Layout 
      metaTitle={doc.title} 
      metaDescription={doc.description} 
      ogImage={`https://oiratcongress.org${doc.image}`}
    >
      <Doc doc={doc} docContent={content} />
      <NextDoc doc={nextDoc} />
      <Newsletter newsletter={newsletter} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const docFiles = fs.readdirSync(path.join('content/docs'))

  const paths = docFiles.map((filename) => ({
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
    path.join('content/docs', slug + '.md'),
    'utf8'
  )

  const { data: frontmatter, content } = matter(fileContents)
  const nextDoc = getNextDoc({frontmatter, slug})
  
  return {
    props: {
      slug,
      frontmatter,
      content,
      nextDoc,
      newsletter: getContentPage('content/shared/newsletter.md')
    },
  }
}