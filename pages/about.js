import Layout from '../components/layout/Layout'
import AboutHeader from '../components/about/AboutHeader'
import AboutContent from '../components/about/AboutContent'
import Docs from '../components/about/Docs'
import Partners from '../components/about/Partners'
import Links from '../components/about/Links'
// import Authors from '../components/about/Authors'
import Members from '../components/about/Members'
import Careers from '../components/about/Careers'
import Newsletter from '../components/shared/Newsletter'
import { getAuthors } from '../libs/getAuthors'
import { getMembers } from '../libs/getMembers'
import { getContentPage } from '../libs/getContentPage'

export default function About({about, authors, members, newsletter}) {
  return (
    <Layout 
      metaTitle={about.frontmatter.title} 
      metaDescription={about.frontmatter.description}
    >
      <AboutHeader header={about.frontmatter.header} />
      <AboutContent content={about.content} />
      <Docs docSection={about.frontmatter.doc_section} />
      <Partners partnerSection={about.frontmatter.partner_section} />
      <Links linkSection={about.frontmatter.link_section} />
      {/* <Authors authorSection={about.frontmatter.author_section} authors={authors} /> */}
      <Members memberSection={about.frontmatter.member_section} members={members} />
      {/* <Careers careers={about.frontmatter.careers} /> */}
      <Newsletter newsletter={newsletter} />
    </Layout>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      authors: getAuthors(locale),
      members: getMembers(locale),
      about: getContentPage('content/pages/about.md'),
      newsletter: getContentPage('content/shared/newsletter.md')
    },
  }
}
