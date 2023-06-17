import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Layout from '../../components/layout/Layout'
import Newsletter from '../../components/shared/Newsletter'
import AuthorHeader from '../../components/headers/AuthorHeader'
import SingleColFeed from '../../components/shared/SingleColFeed'
import SidebarAuthorBio from '../../components/sidebar/SidebarAuthorBio'
import SidebarAd from '../../components/sidebar/SidebarAd'
import SidebarArticles from '../../components/sidebar/SidebarArticles'
import SidebarSocialLinks from '../../components/sidebar/SidebarSocialLinks'
import Pagination from '../../components/shared/Pagination'
import { getContentPage } from '../../libs/getContentPage'
import { getPostsFromAuthor, getPopularPostsFromAuthor } from '../../libs/getPosts'
import { getAuthors } from '../../libs/getAuthors'
import { withLocale } from '../../utils/locale'

export default function AuthorPage({
  author,
  authors,
  newsletter,
  posts,
  popularPosts
}) {
  return (
    <Layout metaTitle={`Showing posts written by ${author.frontmatter.name}`}>
      <AuthorHeader author={author} />

      {/* Feed with Sidebar */}
      <section className="relative max-w-xl px-4 py-12 mx-auto lg:max-w-screen-xl sm:py-16 lg:py-24 sm:px-12 md:max-w-3xl lg:px-8">
        <div className="w-full lg:grid lg:gap-8 xl:gap-12 lg:grid-cols-3">
          
          <div className="col-span-2">

            {/* Articles */}
            <div className="pb-8 mb-6 border-b-2 border-gray-100 sm:pb-10 sm:mb-10">
              <SingleColFeed posts={posts.slice(0,7)} authors={authors} />
            </div>

            <Pagination />
          </div>

          {/* Sidebar */}
          <div className="w-full mt-12 space-y-8 sm:mt-16 lg:mt-0 lg:col-span-1">
            <SidebarAuthorBio author={author} />
            <SidebarArticles posts={popularPosts} header="Most read articles" />
            <SidebarSocialLinks />
            <SidebarAd />
          </div>

        </div>
      </section>


      <Newsletter newsletter={newsletter} />
    </Layout>
  )
}

export async function getStaticPaths({ locales }) {

  const paths = locales.map(locale => {
    const authorFiles = fs.readdirSync(path.join('content/people', locale))
    return authorFiles.map((filename) => ({
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
    withLocale(path.join('content/people'), locale, slug),
    'utf8'
  )

  const { data: frontmatter, content: bio } = matter(fileContents)
  const author = {
    frontmatter: {
      ...frontmatter,
      social_links: frontmatter.social_links || []
    },
    bio
  }

  return {
    props: {
      author,
      authors: getAuthors(locale),
      newsletter: getContentPage('content/shared/newsletter.md'),
      popularPosts: getPopularPostsFromAuthor(author.frontmatter.name, locale),
      posts: getPostsFromAuthor(author.frontmatter.name, locale)
    },
  };
}