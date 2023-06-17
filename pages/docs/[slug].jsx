import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Layout from '../../components/layout/Layout'
import { getNextDoc } from '../../libs/getDocs'
import Doc from '../../components/docs/Doc'
import NextDoc from '../../components/docs/NextDoc'
import Newsletter from '../../components/shared/Newsletter'
import { getContentPage } from '../../libs/getContentPage'
import { withLocale } from '../../utils/locale'

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

export async function getStaticPaths({ locales }) {

  const paths = locales.map(locale => {
    const docFiles = fs.readdirSync(path.join('content/docs', locale))
    return docFiles.map((filename) => ({
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
    withLocale(path.join('content/docs'), locale, slug),
    'utf8'
  )

  const { data: frontmatter, content } = matter(fileContents)
  const nextDoc = getNextDoc(locale)
  
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