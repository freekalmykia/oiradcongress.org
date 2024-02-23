import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { sortByDate, sortByViews } from "../utils/sort"
import { withLocale } from "../utils/locale"

export function getPosts(locale) {
  const posts = fs.readdirSync(path.join("content/posts", locale))
    .map(post => {
      const slug = post.replace('.md', '')
      const postContents = fs.readFileSync(
        withLocale(path.join("content/posts"), locale, slug),
        "utf8"
      )
  
      const { data: frontmatter, content } = matter(postContents)
  
      return {
        slug,
        frontmatter,
        content,
      }
    })
    .filter(post => !post.frontmatter.draft)

  return posts
}

export function getFeaturedPosts(locale) {
  const posts = getPosts(locale)
  
  const FeaturedPosts = posts.filter((post) => post.frontmatter.group == "Featured")

  return FeaturedPosts.sort(sortByDate)
}

export function getArchivedPosts(locale) {
  const posts = getPosts(locale)
  
  const archivedPosts = posts.filter((post) => post.frontmatter.group == "Archived")

  return archivedPosts.sort(sortByDate)
}

export function getPopularPosts(locale) {
  const posts = getPosts(locale)
  
  const archivedPosts = posts.filter((post) => post.frontmatter.group == "Archived")

  return archivedPosts.sort(sortByViews).slice(0,6)
}

export function getPostsInCategory(slug, locale) {
  const posts = getPosts(locale)

  const postsInSameCategory = posts.filter((post) => {
    return post.frontmatter.category.toLowerCase() == slug
  })

  return postsInSameCategory.sort(sortByDate)
}

export function getPopularPostsInCategory(slug, locale) {
  let posts = getPostsInCategory(slug, locale)
  return posts.sort(sortByViews).slice(0,4)
}

export function getPostsFromAuthor(author, locale) {
  const posts = getPosts(locale)

  const postsFromAuthor = posts.filter((post) => {
    return post.frontmatter.author == author
  })

  return postsFromAuthor.sort(sortByDate)
}

export function getPopularPostsFromAuthor(author, locale) {
  let posts = getPostsFromAuthor(author, locale)
  return posts.sort(sortByViews).slice(0,4)
}

export function getNextArticle(post, locale) {
  const posts = getPosts(locale)

  const postsInSameCategory = posts.filter((p) => {
    return p.slug != post.slug && p.frontmatter.category == post.frontmatter.category
  })

  if (postsInSameCategory.length > 0) {
    /* Return random post in same category */
    return postsInSameCategory[Math.floor(Math.random() * postsInSameCategory.length)]
  } else {
    /* Return random post */
    return posts[Math.floor(Math.random() * posts.length)]
  }
}

export function getPostsWithTag(tagSlug, locale) {
  const posts = getPosts(locale)
  
  const postsWithTag = posts.filter((post) => {
    return post.frontmatter.tags.some((tag) => {
      return tag.toLowerCase().replace(/ /g, '-') === tagSlug
    })
  })

  return postsWithTag
}