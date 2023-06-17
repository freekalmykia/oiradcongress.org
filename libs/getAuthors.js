import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { withLocale } from "../utils/locale"

export function getAuthors(locale) {
  const authors = fs.readdirSync(path.join("content/people", locale))
    .map((filename) => {
      const slug = filename.replace(".md", "")
      const authorContents = fs.readFileSync(
        withLocale(path.join("content/people"), locale, slug),
        "utf8"
      )

      const { data: frontmatter, content: bio } = matter(authorContents)

      return {
        slug,
        frontmatter: {
          ...frontmatter,
          social_links: frontmatter.social_links || []
        },
        bio,
      }
    })

  return authors
}