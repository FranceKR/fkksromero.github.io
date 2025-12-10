export function Header() {
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <header className="border-b-4 border-double border-stone-900 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Top bar with date and price */}
        <div className="flex justify-between items-center text-xs text-stone-600 mb-4">
          <div className="flex items-center gap-4">
            <span>{today}</span>
            <span className="hidden sm:inline">Vol. I, No. 1</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Personal Edition</span>
            <span>Free</span>
          </div>
        </div>

        {/* Masthead */}
        <div className="text-center border-y border-stone-900 py-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif" style={{ fontFamily: 'Playfair Display, serif' }}>
            The Daily Chronicle
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 italic tracking-widest">
            ALL THE NEWS THAT&apos;S FIT TO PRINT
          </p>
        </div>

        {/* Navigation */}
        <nav className="mt-4">
          <ul className="flex justify-center items-center gap-6 text-xs uppercase tracking-wider">
            <li><a href="#about" className="hover:text-stone-600 transition-colors">About</a></li>
            <li className="hidden sm:list-item">|</li>
            <li className="hidden sm:list-item"><a href="#work" className="hover:text-stone-600 transition-colors">Work</a></li>
            <li className="hidden sm:list-item">|</li>
            <li><a href="#articles" className="hover:text-stone-600 transition-colors">Articles</a></li>
            <li className="hidden sm:list-item">|</li>
            <li><a href="#contact" className="hover:text-stone-600 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
