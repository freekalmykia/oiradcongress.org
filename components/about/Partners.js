export default function Partners({partnerSection}) {
  return (
    <section className="py-12 sm:pb-20 lg:pb-24">
      <div className="max-w-xl px-4 mx-auto sm:max-w-3xl sm:px-6 md:px-8 lg:max-w-screen-xl">
       
        {/* Section Header */}
        <h3 className="pb-2.5 text-2xl font-medium text-gray-900 border-b border-gray-200 relative before:content-[''] before:left-0 before:w-24 before:h-px before:-bottom-px before:bg-red-600 before:absolute">{partnerSection.heading}</h3>
       
        {/* Logos */}
        <div className="max-w-screen-xl mx-auto mt-8 lg:mt-12">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-5 lg:gap-6 lg:grid-cols-3">
            
            {partnerSection.partners.map((partner) => (
              <a key={partner.name} href={partner.link} className="overflow-hidden" target="_blank" rel="noreferrer">
                <div className="flex items-center justify-center md:justify-start w-full transition duration-300 ease-in-out h-36 rounded-3xl bg-gray-50 hover:bg-gray-100 group px-12">
                  <div className="flex justify-center md:justify-start min-w-[130px] mr-3">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-auto h-16 transition duration-300 ease-in-out opacity-70 sm:h-22 group-hover:opacity-95"
                    />
                  </div>
                  <div>
                    <span className="hidden md:block">
                      {partner.name}
                    </span>
                    <span className="hidden md:block">
                      {partner.subname}
                    </span>
                  </div>
                </div>
              </a>
            ))}

          </div>
        </div>
        
      </div>
    </section>
  )
}