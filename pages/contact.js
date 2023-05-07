import Layout from '../components/layout/Layout'
import SimpleHeader from '../components/headers/SimpleHeader'
import ContactDepartments from '../components/contact/ContactDepartments'
import ContactLocations from '../components/contact/ContactLocations'
import ContactMail from '../components/contact/ContactMail'
import SidebarSocialLinks from '../components/sidebar/SidebarSocialLinks'
import SidebarInstagramFeed from '../components/sidebar/SidebarInstagramFeed'
import Newsletter from '../components/shared/Newsletter'
import { getContentPage } from '../libs/getContentPage'
import { getInstagramFeed } from '../libs/getInstagramFeed'

export default function About({contact, newsletter, instagramFeed}) {
  return (
    <Layout 
      metaTitle={contact.frontmatter.title} 
      metaDescription={contact.frontmatter.description}
    >
      <SimpleHeader header={contact.frontmatter.header} />
      
      {/* Contact main */}
      <section className="relative max-w-screen-xl py-12 mx-auto md:py-16 lg:py-24 lg:px-8">
        <div className="w-full lg:space-x-8 lg:flex lg:items-start">
          
          {/* Contact Information */}
          <div className="space-y-16 lg:w-2/3">
            <ContactDepartments contactInfo={contact.frontmatter.contact_info} />
            <ContactLocations locationsInfo={contact.frontmatter.locations_info} />
            <ContactMail mailInfo={contact.frontmatter.mail_info} />
          </div>

          {/* Sticky Sidebar */}
          <div className="w-full max-w-xl px-4 mx-auto mt-12 space-y-8 lg:top-8 lg:sticky sm:mt-16 lg:mt-0 md:max-w-2xl sm:px-6 md:px-8 lg:px-0 lg:w-1/3 lg:max-w-none">
            <SidebarSocialLinks />
            <SidebarInstagramFeed feed={instagramFeed} />
          </div>

        </div>
      </section>

      <Newsletter newsletter={newsletter} />
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      contact: getContentPage('content/pages/contact.md'),
      instagramFeed: getInstagramFeed(),
      newsletter: getContentPage('content/shared/newsletter.md')
    },
  };
}