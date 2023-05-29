export const getAuthorLink = (post, authors) => {
  const author = authors.find(author => post.author === author.frontmatter.name);
  if (!author) return '#';
  if (author.frontmatter.role === 'external') {
    return author.frontmatter.externalAuthorLink;
  }
  return `/people/${post.author.replace(/ /g, '-').toLowerCase()}`;
}