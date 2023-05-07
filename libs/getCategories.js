import fs from "fs"
import path from "path"
import matter from "gray-matter"

export function getCategories() {
  const categoryFiles = fs.readdirSync(path.join("content/categories"))
  const categories = categoryFiles.map((filename) => {
    const slug = filename.replace(".md", "")
    const categoryContents = fs.readFileSync(
      path.join("content/categories", filename),
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