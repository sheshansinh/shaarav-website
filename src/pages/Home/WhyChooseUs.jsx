export function WhyChooseUs({ eyebrow, title, items }) {
  const icons = [
    // Clarity icon
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>,
    // Discretion icon
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    // Consistency icon
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
  ];

  return (
    <section className="section bg-very-light-grey">
      <div className="page-shell">
        <div className="section-heading mx-auto text-center flex flex-col items-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-4">{title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] mt-[48px]">
          {items.map((item, i) => (
            <article 
              key={item.title} 
              className="p-8 border border-neutral-grey rounded-[20px] bg-pure-white shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(26,72,100,0.08)] relative overflow-hidden group"
            >
              {/* Accent Yellow top border hover effect as permitted in guide */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-accent-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="w-14 h-14 rounded-[14px] bg-light-blue border border-neutral-grey flex items-center justify-center text-primary-navy mb-6">
                {icons[i] || icons[0]}
              </div>
              
              <h3 className="text-primary-navy text-[28px] font-sans font-bold mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-dark-grey text-[18px] leading-[1.8] font-sans">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
