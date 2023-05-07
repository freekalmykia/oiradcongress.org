import fs from "fs"
import path from "path"
import matter from "gray-matter"

export function getTags() {
  const postFiles = fs.readdirSync(path.join("content/posts"))

  const allPostTags = postFiles.map((filename) => {
    const postContents = fs.readFileSync(
      path.join("content/posts", filename),
      "utf8"
    )

    const { data: frontmatter } = matter(postContents)
    const postTags = frontmatter.tags
    return postTags
  }).flat()

  const tagCount = new Map()

  allPostTags.forEach((tag) => {
    if (tagCount.has(tag)) {
      tagCount.set(tag, tagCount.get(tag) + 1)
    } else {
      tagCount.set(tag, 1) // Map to capture Count of elements
    }
  })

  const uniqueTags = [...new Set(allPostTags)];

  const tags = uniqueTags.sort((tag1, tag2) => {       
    let freq1 = tagCount.get(tag1)
    let freq2 = tagCount.get(tag2)

    return freq2 - freq1
  })

  return tags
}