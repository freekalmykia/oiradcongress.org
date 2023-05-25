import fs from "fs"
import path from "path"
import matter from "gray-matter"

export function getAuthors() {
  const authorFiles = fs.readdirSync(path.join("content/people"))
  const authors = authorFiles.map((filename) => {
    const slug = filename.replace(".md", "")
    const authorContents = fs.readFileSync(
      path.join("content/people", filename),
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
  .filter(({ frontmatter: { role } }) => {
    // return role === 'author';
    return role === 'member';
  })

  return authors
}