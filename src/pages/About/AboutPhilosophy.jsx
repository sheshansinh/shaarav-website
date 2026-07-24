export function AboutPhilosophy() {
  const principles = [
    {
      title: "What We Believe",
      text: "Advice should feel clear, practical, and respectful of real financial services conditions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      )
    },
    {
      title: "What We Avoid",
      text: "Complication for the sake of sounding expert. We value simplicity with depth.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
      )
    },
    {
      title: "What Clients Feel",
      text: "More confident, more structured, and less overwhelmed after the right conversation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
      )
    }
  ];

  return (
    <section className="section bg-very-light-grey">
      <div className="page-shell">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[32px]">
          {principles.map((p, index) => (
            <article 
              key={p.title} 
              className="group relative p-8 rounded-[20px] bg-pure-white border border-neutral-grey shadow-[0_20px_60px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(26,72,100,0.08)] flex flex-col justify-between min-h-[300px]"
            >
              {/* Subtle background number in Primary Navy with very low opacity */}
              <div className="absolute -top-10 -right-4 text-[12rem] font-display font-normal text-primary-navy/5 leading-none select-none transition-transform duration-700 group-hover:scale-110">
                {index + 1}
              </div>

              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-light-blue text-primary-navy border border-neutral-grey shadow-sm group-hover:bg-primary-navy group-hover:text-pure-white transition-colors duration-300">
                    {p.icon}
                  </div>
                  <h3 className="text-primary-navy text-[28px] font-sans font-bold m-0 tracking-tight relative z-10">
                    {p.title}
                  </h3>
                </div>
                <p className="text-dark-grey text-[18px] leading-[1.8] relative z-10 font-sans">
                  {p.text}
                </p>
              </div>
              
              {/* Animated Accent Yellow Bottom Bar */}
              <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-accent-yellow transition-all duration-500 ease-out group-hover:w-full"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
