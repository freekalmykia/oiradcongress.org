import fs from "fs"
import path from "path"
import matter from "gray-matter"

export function getMembers() {
  const memberFiles = fs.readdirSync(path.join("content/people"))
  const members = memberFiles.map((filename) => {
    const slug = filename.replace(".md", "")
    const memberContents = fs.readFileSync(
      path.join("content/people", filename),
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