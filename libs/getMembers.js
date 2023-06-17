import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { withLocale } from "../utils/locale"

export function getMembers(locale) {
  const members = fs.readdirSync(path.join("content/people", locale))
    .map((filename) => {
      const slug = filename.replace(".md", "")
      const memberContents = fs.readFileSync(
        withLocale(path.join("content/people"), locale, slug),
        "utf8"
      )

      const { data: frontmatter, content: bio } = matter(memberContents)

      return {
        slug,
        frontmatter: {
          ...frontmatter,
          social_links: frontmatter.social_links || []
        },
        bio,
      }
    })
    .filter(({ frontmatter: { role, order } }) => {
      return role === 'member';
    })

  return members
}