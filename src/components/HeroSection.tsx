export function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Main headline */}
      <div className="lg:col-span-8 border-r-0 lg:border-r-2 border-stone-300 lg:pr-8">
        <div className="mb-2">
          <span className="text-xs uppercase tracking-wider border-b border-stone-900 pb-1">Featured Story</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight mb-4">
          Creative Developer & Designer Launches New Portfolio Platform
        </h2>
        <p className="text-lg mb-4 text-stone-700">
          In a bold move to showcase years of experience and innovative projects, a new personal 
          website debuts with a unique newspaper-inspired design. The platform aims to revolutionize 
          how professionals present their work online.
        </p>
        <p className="mb-4 text-stone-700">
          The website features a distinctive editorial layout that breaks away from conventional portfolio 
          designs, offering visitors an engaging and memorable browsing experience. Each section has been 
          carefully crafted to tell a compelling story about the creator&apos;s journey and expertise.
        </p>
        <p className="text-stone-700">
          &quot;I wanted something different,&quot; the creator explains. &quot;Something that would stand out and 
          reflect my appreciation for timeless design and great typography.&quot; The result is a harmonious 
          blend of classic newspaper aesthetics with modern web capabilities.
        </p>
      </div>

      {/* Sidebar */}
      <aside className="lg:col-span-4 space-y-6">
        <div className="border-b-2 border-stone-300 pb-6">
          <h3 className="text-xs uppercase tracking-wider border-b border-stone-900 pb-1 mb-3">
            Breaking News
          </h3>
          <h4 className="text-xl mb-2">
            New Project Launches Next Month
          </h4>
          <p className="text-sm text-stone-700">
            Exciting developments are underway as a groundbreaking project prepares for public release...
          </p>
        </div>

        <div className="border-b-2 border-stone-300 pb-6">
          <h3 className="text-xs uppercase tracking-wider border-b border-stone-900 pb-1 mb-3">
            Latest Achievement
          </h3>
          <h4 className="text-xl mb-2">
            Award-Winning Design Recognized
          </h4>
          <p className="text-sm text-stone-700">
            Recent work has garnered attention from industry leaders, earning prestigious recognition...
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-wider border-b border-stone-900 pb-1 mb-3">
            In This Edition
          </h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Career highlights and milestones</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Featured projects and case studies</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Technical articles and insights</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Contact and collaboration opportunities</span>
            </li>
          </ul>
        </div>
      </aside>
    </section>
  );
}
