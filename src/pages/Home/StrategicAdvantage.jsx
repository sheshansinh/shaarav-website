export function StrategicAdvantage({ eyebrow, title, items }) {
  return (
    <section className="section bg-pure-white">
      <div className="page-shell">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Sticky or static Text */}
          <div className="section-heading max-w-xl">
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="text-primary-navy">{title}</h2>
            {/* Smooth Accent Yellow underline animation */}
            <div className="w-20 h-1 mt-8 bg-accent-yellow rounded-full"></div>
          </div>

          {/* Right Side: Stacked Items */}
          <div className="flex flex-col gap-6">
            {items.map((item, i) => (
              <article 
                key={item.title} 
                className="group relative flex items-start p-8 md:p-10 rounded-[20px] bg-pure-white border border-neutral-grey shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(26,72,100,0.08)] overflow-hidden"
              >
                {/* Background accent on hover - subtle brand blue */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-light-blue/20 rounded-bl-[100px] pointer-events-none transition-all duration-500 group-hover:scale-150"></div>
                
                <div className="flex-none mr-6 mt-1">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-navy text-pure-white font-sans font-bold text-lg shadow-[0_8px_20px_rgba(26,72,100,0.15)] group-hover:scale-110 transition-transform">
                    0{i + 1}
                  </span>
                </div>
                <div className="relative z-10">
                  <strong className="block text-primary-navy text-[20px] font-sans font-bold tracking-tight mb-2 group-hover:text-medium-blue transition-colors">
                    {item.title}
                  </strong>
                  <p className="text-dark-grey text-[16px] leading-[1.7] font-sans">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
