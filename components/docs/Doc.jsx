import Link from 'next/link'
import Image from 'next/image'
import { CalendarIcon, ClockIcon } from '@heroicons/react/outline'
import { marked } from 'marked'
import { formatDate } from '../../utils/formatDate'
import { getSocialIconComponent } from '../../utils/getSocialIconComponent'
import siteConfig from '../../config/site.config.js';

export default function Doc({doc, docContent }) {
  let pageUrl = `${siteConfig.baseURL.replace(/\/$|$/, '/')}docs/${doc.slug}`
  
  return (
    <article className="pb-12 sm:pb-16 lg:pb-24 bg-gray-50">
      
      {/* Doc Header */}
      <header>
       
        {/* Image */}
        <div className="w-full bg-gray-100 aspect-w-3 aspect-h-2 sm:aspect-h-1">
          <Image 
            className="object-cover object-center" 
            src={doc.image} 
            alt={doc.title}
            layout="fill"
          />
        </div>

        {/* Doc Header Content */}
        <div className="px-5 lg:px-0">
          
          {/* Article Information */}
          <div className="pt-10 pb-8 mx-auto mb-8 text-lg border-b max-w-prose border-gray-300/70 sm:pt-16">
            <h2 className="mt-3.5 text-4xl font-medium tracking-normal text-gray-900 transition duration-300 ease-in-out sm:mt-5 decoration-red-300 decoration-3 group-hover:underline md:tracking-tight sm:leading-tight sm:text-5xl lg:text-6xl">{doc.title}
            </h2>
            <div>
              <p className="mt-4 text-base leading-loose text-gray-600">
                {doc.description}
              </p>
            </div>

            <div className="flex items-center mt-6 sm:mt-8">
              <div className="text-sm lg:text-[15px] flex items-center">
                <span className="hidden text-gray-500 sm:inline-block">By Congress</span>
                <CalendarIcon className="w-[18px] h-[18px] ml-4 text-gray-400" />
                <span className="ml-1 text-gray-500">{formatDate(doc.date)}</span>
              </div>
            </div>
          </div>

        </div>
        
      </header>

      <div className="px-5 lg:px-0">
        
        {/* Doc Content */}
        {/* Uses the official Tailwind CSS Typography plugin */}
        <div className="mx-auto prose sm:prose-lg hover:prose-a:text-red-700 prose-a:duration-300 prose-a:ease-in-out prose-a:transition prose-img:rounded-xl first-letter:text-4xl first-letter:font-bold first-letter:tracking-[.15em]" dangerouslySetInnerHTML={{ __html: marked.parse(docContent) }}>
        </div>

        {/* Doc Footer */}
        <footer className="mx-auto mt-12 text-lg divide-y sm:mt-14 max-w-prose divide-y-gray-300/70"></footer>
        
      </div>
    </article>
  )
}