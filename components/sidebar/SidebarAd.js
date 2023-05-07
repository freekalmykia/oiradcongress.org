import Image from 'next/image'

export default function SidebarAd() {
  return (
    <div>
      {/* Portrait Ad */}
      <a href="#" className="relative hidden w-full lg:block rounded-2xl bg-gray-50 lg:aspect-w-9 lg:aspect-h-16">
        
        <Image 
          className="hidden object-cover w-full h-full lg:block rounded-2xl" 
          src="/images/ads/fashion-ad-portrait.png"
          alt="Fashion ad portrait"
          layout="fill"
        />
      </a>

      {/* Landscape Ad */}
      <a href="#" className="relative w-full lg:hidden rounded-2xl bg-gray-50">
        
        <Image 
          className="w-full h-auto rounded-2xl" 
          src="/images/ads/fashion-ad-landscape.png"
          alt="Fashion landscape ad"
          width={960}
          height={540}
          layout="responsive"
        />
      </a>
    </div>
  )
}