import fs from "fs"
import path from "path"
import matter from "gray-matter"

export function getAuthors() {
  const authorFiles = fs.readdirSync(path.join("content/authors"))
  const authors = authorFiles.map((filename) => {
    const slug = filename.replace(".md", "")
    const authorContents = fs.readFileSync(
      path.join("content/authors", filename),
      "utf8"
    )

    const { data: frontmatter, content: bio } = matter(authorContents)

    return {
      slug,
      frontmatter,
      bio,
    }
  })

  return authors
}