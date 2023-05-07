# Banter Next.js
A modern multipurpose blog theme built with Tailwind CSS & Next.js

This is a [Next.js](https://nextjs.org/) template bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). If you're new to Next.js I recommend you check out the [official Next.js documentation](https://nextjs.org/docs) first.

## System Requirements
* [Node.js 12.22.0](https://nodejs.org/) or later
* MacOS, Windows (including WSL), and Linux are supported

## Getting Started
First, install the dependencies by navigating to the project directory in your terminal and run
```bash
npm install
# or
yarn install  # if you have Yarn installed
```
This will install all the required dependencies and place them in a folder called `node_modules` in the root directory.

Once the dependencies are installed, you can run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## File Structure
* `components` - Directory of Components Files
  * `404` - Components for 404 page
  * `about` - Components for about page
  * `contact` - Components for contact page
  * `headers` - All header components
  * `home` - Components for home page
  * `layout` - All components related to the site layout
  * `posts` - Components for the post page
  * `shared` - Components that are reused in multiple pages
  * `sidebar` - All sidebar components
  * `social` - Components for social media icons
* `config` - Directory of configuration files that contain site-wide data
* `content` - Directory of all Content markdown files
  * `authors` - Contains all markdown data files for authors
  * `categories` - Contains all markdown data files for post categories
  * `pages` - Contains all markdown data files for individual pages
  * `posts` - Contains all of the markdown data files for posts
  * `shared` - Contains all of the markdown data files for shared components
* `libs` - Directory of all library files
* `pages` - Directory of all pages
* `public` - Directory of images and external files
* `styles` - Contains the entry point CSS file for Tailwind CSS
* `utils` - Directory of javascript utility files

## Site Configuration
The `config/site.config.js` file contains default site data used across the site. You can change this data by editing the file

```javascript
export default {
  "metaData": {
    "title" : "Banter | Multipurpose NextJS Blog Template",
    "description" : "Banter - a modern, stylish Tailwind CSS template for any blog, magazine, or news site.",
    "author" : "Tailwind Awesome",
    "keyword" : "magazine, multipurpose, react, nextjs, blog, template",
    "ogImage" : "/images/ogimage.jpg"
  },
  "baseURL" : "https://banter.tailwindawesome.com/",
  "logo" : "/images/banter-logo.png",
  "logoText" : "Banter",
  "favicon" : "/images/banter-icon-logo.png",
  "postPerPage" : 6,
  "copyright" : "© 2022 Banter. All rights reserved."
}
```

## Menu Links Configuration
You can configure the navbar and footer links by editing the `config/menus.js` file and changing the `name` and `link` values.

## Social Media Links
You can add or modify your social media links in the `config/social.js` file:

```javascript
export default [
  {
    name: 'facebook',
    href: '#'
  },
  {
    name: 'instagram',
    href: '#'
  },
  {
    name: 'twitter',
    href: '#'
  },
  {
    name: 'linkedin',
    href: '#'
  }
]
```

However, if you add a social media link make sure to add its corresponding icon in the `components/social` directory.

## Content
All of the content data is in markdown format. If you are not familiar with markdown, you can take a look at this excellent [markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/) that provides a quick overview of all the Markdown syntax elements.

### Content Structure
All of the markdown files are located in the `content` directory. Banter uses [`gray-matter`](https://github.com/jonschlinkert/gray-matter) to parse our YAML front matter and markdown content. All of the frontmatter data for each content file is located at the top of the file in between 3 hyphens. Below the frontmatter is the markdown content. 

### Adding new authors
You can add new or customize existing authors in the `content/authors` directory. Each author's file name is the slug for that particular author's page. For example, the author Mark Jack has a corresponding markdown file named `mark-jack.md` and an author page at `/authors/mark-jack`.

Every author has data in the following format:

```markdown
---
name: "Mark Jack"
image: "/images/authors/mark-jack.jpeg"
role: "Staff Writer"
social_links:
  - name: "twitter"
    url: "#"
  - name: "facebook"
    url: "#"
  - name: "instagram"
    url: "#"
  - name: "linkedin"
    url: "#"
---
Lorem ipsum dolor sit amet mauris quis phasellus ornare dui lectus. Laoreet habitasse eiusmod nulla odio tortor neque diam convallis morbi dolore molestie tellus faucibus pharetra.
```

All of the author images are stored in the `public/images/authors` directory. The markdown content below the frontmatter is the author's bio.

Similar to the site's social links, if you add a social media link make sure to add its corresponding icon in the `components/social` directory.

### Adding new posts

All of the posts are located in the `content/posts` directory. All of the posts have data in the following format:

```javascript
---
title: "15 Ways to Grow Your Startup"
description: "Lorem ipsum dolor sit amet tempus bendum labore laoreet.Hendrerit lobortis a leo curabitur faucibus sapien ullamcorper do labore odio."
image: "/images/posts/archive-02.jpeg"
date: "2022-04-05T16:56:47+06:00"
author: "Matt Burgess"
time_to_read_in_minutes: 12
views: 6807
category: "Startup"
tags: ["Growth", "Tips", "List", "Idea"]
group: "Archived"
---
Aliqua venenatis gravida et urna molestie leo adipiscing dolore leo euismod quam. Aenean porta curabitur convallis pellentesque velit platea at neque phasellus.
```

All of the post images are stored in the `public/images/posts` directory. The markdown content below the frontmatter is the post content.

Every post has a category, author, and tags and is grouped by the `group` field for site organization. 

If you add a new author or category, make sure to create their corresponding markdown files in the `content/authors` and `content/categories` directories respectively.

### Page Data
The `/about`, `/contact` and `/privacy` pages have their corresponding data in the `content/pages/about.md`, `content/pages/contact.md` and `content/pages/privacy.md` markdown files respectively. 

### Newsletter Data

You can edit the newsletter section content and form data in the `content/shared/newsletter.md` markdown file.

## Tailwind CSS

This theme uses the latest version of Tailwind CSS: v3.

Tailwind CSS and its dependencies were installed via npm as recommended by the official [Tailwind installation docs for next.js](https://tailwindcss.com/docs/guides/nextjs). If you are not familiar with the Tailwind CSS framework I would recommend you check out the [Tailwind documentation](https://tailwindcss.com/docs). 

You can find the `tailwind.config.js` and `postcss.config.js` files at the root of the directory. The entry point CSS file is located at `styles/globals.css`. This file contains the `@tailwind` directives and any additional CSS used in the template. We've tried to minimize custom CSS and only define a few custom classes for the hamburger menu in the navbar.

Tailwind allows you to customize what it generates using the `tailwind.config.js` file at the root of the project directory. For this theme, we have defined a few extra utility classes. We have also added the paths to all of our template files to the `content` option to tree-shake unused styles and optimize your final build size. This template additionally uses 2 official Tailwind plugins (`@tailwindcss/aspect-ratio`, `@tailwindcss/typography`) to generate additional utility classes.

## Font
This template uses the `Roboto` Font family from the [Google Fonts Library](https://fonts.google.com/specimen/Roboto). The font is included in `/pages/_document.js` and leverages the [Automatic Webfont Optimizations](https://nextjs.org/docs/basic-features/font-optimization) by next.js.

## Icons
The icons used for this theme are part of the [Hero Icons](https://heroicons.com/) set that is free to use and published under the [MIT License](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE). 
  
Some of the examples in Banter use [Nucleo App](https://nucleoapp.com/premium-icons) icons which we have acquired a license for. You are free to use the Nucleo icons included in this template on your projects, but if you are interested in using the rest of their premium icons you can buy a license on their [website](https://nucleoapp.com/).


## Images

All of the images for posts, categories, authors and website components are from [Unsplash](https://unsplash.com/).


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out their [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Additional Help

If you need additional help setting up the template or have any questions, feel free to contact us at <rodrigo@tailwindawesome.com>.