import Link from 'next/link'
import Image from 'next/image'
import { getSocialIconComponent } from '../../utils/getSocialIconComponent'

export default function Authors({authorSection, authors}) {
  if (!authors.length) return null;
  return (
    <section className="pt-12 sm:pt-20 lg:pt-28 bg-gray-50">
      <div className="max-w-xl px-4 mx-auto sm:max-w-3xl sm:px-6 md:px-8 lg:max-w-screen-xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-base font-medium tracking-widest text-red-600 uppercase">{authorSection.subheading}</h2>
          <h3 className="mt-2 text-3xl font-medium tracking-normal text-gray-900 sm:text-4xl md:tracking-tight lg:leading-tight lg:text-5xl">{authorSection.heading}</h3>
          <p className="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto">{authorSection.subtext}</p>
        </div>

        {/* Team */}
        <div className="max-w-screen-xl mx-auto mt-12 sm:mt-16">
          <ul className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:gap-8 lg:grid-cols-3">
            
            {authors.map((author) => (
              <li className="relative px-6 py-10 text-center transition duration-300 ease-in-out bg-transparent border border-gray-300/70 rounded-3xl sm:px-10 hover:shadow-lg hover:border-gray-300/30" key={author.frontmatter.name}>
                <div>
                  <div className="relative w-40 h-40 mx-auto bg-gray-100 rounded-full xl:w-44 xl:h-44">
                    <Image 
                      className="object-cover rounded-full" 
                      src={author.frontmatter.image} 
                      alt={author.frontmatter.name}
                      layout="fill"
                    />
                  </div>
                  <div className="mt-6 leading-6">
                    <h3 className="text-xl font-medium text-gray-900">
                      <Link href={`/people/${author.frontmatter.name.replace(/ /g, '-').toLowerCase()}`}>
                        <a>
                          <span className="absolute inset-0" aria-hidden="true"></span>
                          {author.frontmatter.name}
                        </a>
                      </Link>
                      </h3>
                    <p className="mt-1 text-base text-red-600">{author.frontmatter.title}</p>
                  </div>

                  {/* Social Links */}
                  <ul className="flex items-center justify-center mt-6 space-x-3">
                    
                    {author.frontmatter.social_links.map((socialLink) => (
                      <li key={socialLink.name}>
                        <a href={socialLink.url} className="relative group">
                          { getSocialIconComponent({
                            name: socialLink.name, 
                            props: { 
                              className: "w-5 h-5 text-gray-400 transition duration-300 ease-in-out group-hover:text-gray-600" 
                            }
                          }) }
                        </a>
                      </li>
                    ))}
        
                  </ul>

                </div>
              </li>
            ))}
        
          </ul>
        </div>
        
      </div>
    </section>
  )
}