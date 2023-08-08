import { DocumentTextIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function Links({linkSection}) {
  return (
    <section className="py-12 sm:pb-20 lg:pb-24">
      <div className="max-w-xl px-4 mx-auto sm:max-w-3xl sm:px-6 md:px-8 lg:max-w-screen-xl">
       
        {/* Section Header */}
        <h3 className="pb-2.5 text-2xl font-medium text-gray-900 border-b border-gray-200 relative before:content-[''] before:left-0 before:w-24 before:h-px before:-bottom-px before:bg-red-600 before:absolute">{linkSection.heading}</h3>
       
        {/* Logos */}
        <div className="max-w-screen-xl mx-auto mt-8 lg:mt-12">
            
            {linkSection.links.map((link) => (
              <div key={link.name} className="relative flex items-center w-full transition duration-300 ease-in-out min-h-[48px] rounded-xl bg-gray-50 hover:bg-gray-100 group px-12 py-6 mb-3">
                <div className="flex justify-center items center mr-4">
                  <DocumentTextIcon className="w-[32px] text-[#6a6666]"/>
                </div>
                <div>
                  <Link href={link.url}>
                    <a className="font-semibold" target="_blank">
                      <span className="absolute inset-0" aria-hidden="true">
                      </span>
                      {link.name}
                    </a>
                  </Link>
                  <p className="italic">
                    {link.subname}
                  </p>
                </div>
              </div>
            ))}

        </div>
        
      </div>
    </section>
  )
}