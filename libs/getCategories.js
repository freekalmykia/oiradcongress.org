import fs from "fs"
import path from "path"
import matter from "gray-matter"

export function getCategories(locale) {
  const categoryFiles = fs.readdirSync(path.join("content/categories", locale))
  const categories = categoryFiles.map((filename) => {
    const slug = filename.replace(".md", "")
    const categoryContents = fs.readFileSync(
      path.join("content/categories", locale, filename),
      "utf8"
    )

    const { data: frontmatter } = matter(categoryContents)

    return {
      slug,
      frontmatter,
    }
  })

  return categories
}