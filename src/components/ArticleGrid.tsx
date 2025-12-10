export function ArticleGrid() {
  const articles = [
    {
      id: 1,
      category: 'Technology',
      title: 'The Future of Web Development',
      excerpt: 'Exploring emerging trends and technologies shaping the digital landscape of tomorrow.',
      author: 'Editorial Staff',
      date: 'Dec 10, 2025'
    },
    {
      id: 2,
      category: 'Design',
      title: 'Principles of Timeless Design',
      excerpt: 'What makes certain designs endure while others fade into obscurity?',
      author: 'Editorial Staff',
      date: 'Dec 9, 2025'
    },
    {
      id: 3,
      category: 'Career',
      title: 'From Junior to Senior: A Journey',
      excerpt: 'Lessons learned climbing the professional ladder in the tech industry.',
      author: 'Editorial Staff',
      date: 'Dec 8, 2025'
    },
    {
      id: 4,
      category: 'Opinion',
      title: 'Why Side Projects Matter',
      excerpt: 'The unexpected benefits of pursuing passion projects outside of work.',
      author: 'Editorial Staff',
      date: 'Dec 7, 2025'
    },
    {
      id: 5,
      category: 'Tutorial',
      title: 'Building Responsive Layouts',
      excerpt: 'A comprehensive guide to creating fluid, adaptable web interfaces.',
      author: 'Editorial Staff',
      date: 'Dec 6, 2025'
    },
    {
      id: 6,
      category: 'Industry',
      title: 'The State of Modern UI',
      excerpt: 'Analysis of current trends in user interface design and development.',
      author: 'Editorial Staff',
      date: 'Dec 5, 2025'
    }
  ];

  return (
    <section id="articles">
      <div className="mb-6">
        <h2 className="text-3xl sm:text-4xl border-b-2 border-stone-900 pb-2">
          Latest Articles
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <article key={article.id} className="border-b border-stone-300 pb-6">
            <div className="mb-2">
              <span className="text-xs uppercase tracking-wider bg-stone-900 text-white px-2 py-1">
                {article.category}
              </span>
            </div>
            <h3 className="text-2xl mb-2 leading-tight">
              {article.title}
            </h3>
            <p className="text-sm text-stone-700 mb-3">
              {article.excerpt}
            </p>
            <div className="flex justify-between items-center text-xs text-stone-600">
              <span>By {article.author}</span>
              <span>{article.date}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
