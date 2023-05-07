export const sortByDate = (a, b) => {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
}

export const sortByViews = (a, b) => {
  return b.frontmatter.views - a.frontmatter.views
}