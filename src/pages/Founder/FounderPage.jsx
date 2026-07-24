import { PageHero } from '../../components/common/PageHero'
import { InfoTiles } from '../Home/InfoTiles'
import { media } from '../../constants/data'

export function FounderPage() {
  const journeyPoints = [
    'A foundation in commerce, marketing, financial services law, and taxation, shaped by early hands-on financial services involvement.',
    'Operational experience in travel, aviation, procurement, and banking before joining the family financial services in Ahmedabad.',
    'Leadership across clearing, forwarding, warehousing, administration, equity markets, and entrepreneurial consulting.',
  ];

  const credentials = [
    {
      title: 'PGDBA (HR & Finance)',
      subtitle: 'Symbiosis, Pune',
      text: 'Deep academic foundation in human resources, financial management, and financial services administration.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    },
    {
      title: 'Lean Six Sigma',
      subtitle: 'Green Belt understanding',
      text: 'Operational excellence methodologies focused on process improvement and variance reduction.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
        </svg>
      )
    },
    {
      title: 'Core Strategy Programme',
      subtitle: 'Trading in Financial Markets',
      text: 'Certified expertise in market structure, macroeconomics, capital planning, and technical execution.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <>
      <PageHero
        eyebrow="Founder"
        title="A journey built from curiosity, hands-on work, and steady professional growth."
        text="From early financial services exposure to structured financial consulting, the founder story behind Shaarav Enterprise is practical, layered, and deeply experienced."
        image={media.boardroom}
      />
      
      {/* Editorial Profile Section (White background) */}
      <section className="section bg-pure-white">
        <div className="page-shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Profile on Left */}
            <div className="lg:col-span-5 relative group">
              {/* Soft background glow using brand Light Blue */}
              <div className="absolute inset-0 bg-light-blue/40 rounded-[20px] rotate-2 transition-transform duration-500 group-hover:rotate-1"></div>
              <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden bg-primary-navy shadow-[0_20px_50px_rgba(26,72,100,0.12)] border border-neutral-grey">
                <img 
                  src={media.founder} 
                  onError={(e) => { e.currentTarget.src = '/founder/WhatsApp%20Image%202026-07-21%20at%208.22.21%20AM.jpeg' }}
                  alt="Shaarav Enterprise Founder" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-[14px] bg-primary-navy/95 text-pure-white backdrop-blur-md border border-pure-white/10 shadow-lg">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent-yellow">Company Lead</span>
                  <h4 className="text-[20px] font-sans font-bold mt-1 mb-0 text-pure-white">Shaarav Enterprise</h4>
                  <p className="text-sm text-pure-white/70 mt-1 mb-0 font-sans">Ahmedabad, India</p>
                </div>
              </div>
            </div>
            
            {/* Narrative Copy on Right */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="eyebrow">From the CEO&apos;s Desk</span>
              <h2 className="text-primary-navy mt-2 mb-6">
                A philosophy built on direct operational experience.
              </h2>
              <div className="space-y-6 text-dark-grey text-[18px] leading-[1.8] font-sans">
                <p>
                  From Pune to Ahmedabad, the journey has moved through procurement, finance,
                  administration, education, trading, creativity, and entrepreneurship.
                </p>
                <blockquote className="border-l-4 border-accent-yellow pl-6 my-8 italic text-primary-navy font-semibold text-lg bg-light-blue/45 py-6 pr-6 rounded-r-[14px]">
                  "We cater to sole proprietors and micro-enterprise owners through simplified, structured solutions powered by technology and human effort."
                </blockquote>
                <p>
                  Having navigated the complex realities of family financial services, administrative hurdles, and market dynamics firsthand, the advisory approach is kept simple, tangible, and actionable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section (Very Light Grey background) */}
      <section className="section bg-very-light-grey">
        <div className="page-shell">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Milestones</span>
            <h2 className="text-primary-navy mt-2">The Professional Journey</h2>
            <p className="text-dark-grey mt-4 font-sans">More than a decade of diverse, hands-on operational leadership.</p>
          </div>
          
          <div className="relative border-l-2 border-medium-blue/30 ml-4 md:ml-32 space-y-12 max-w-4xl mx-auto">
            {journeyPoints.map((point, index) => (
              <div key={index} className="relative pl-8 md:pl-12 group transition-all duration-300">
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-pure-white border-2 border-primary-navy group-hover:bg-primary-navy transition-colors duration-300 shadow-sm"></div>
                
                {/* Step number - using display font for large number */}
                <div className="absolute -left-12 md:-left-20 top-0 text-3xl font-display font-normal text-primary-navy/20 group-hover:text-primary-navy/60 transition-colors duration-300 select-none">
                  0{index + 1}
                </div>
                
                {/* Step Card */}
                <div className="p-8 rounded-[20px] bg-pure-white border border-neutral-grey shadow-[0_20px_60px_rgba(0,0,0,0.05)] group-hover:translate-x-1 group-hover:shadow-[0_30px_70px_rgba(26,72,100,0.08)] transition-all duration-300">
                  <p className="text-dark-grey text-[16px] leading-[1.7] m-0 font-sans">
                    {point}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Credentials Grid (White background) */}
      <section className="section bg-pure-white">
        <div className="page-shell">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Qualifications</span>
            <h2 className="text-primary-navy mt-2">Credentials & Background</h2>
            <p className="text-dark-grey mt-4 font-sans">Academic and practical competencies supporting strategic advisory roles.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {credentials.map((cred) => (
              <article 
                key={cred.title} 
                className="group relative p-8 rounded-[20px] bg-pure-white border border-neutral-grey shadow-[0_20px_60px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(26,72,100,0.08)] flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-light-blue text-primary-navy border border-neutral-grey shadow-sm group-hover:bg-primary-navy group-hover:text-pure-white transition-colors duration-300">
                      {cred.icon}
                    </div>
                    <div>
                      <h3 className="text-primary-navy text-[20px] font-sans font-bold m-0 tracking-tight">
                        {cred.title}
                      </h3>
                      <span className="text-xs text-medium-blue uppercase font-bold tracking-widest block mt-0.5 font-sans">{cred.subtitle}</span>
                    </div>
                  </div>
                  <p className="text-dark-grey text-[15px] leading-[1.6] m-0 font-sans">
                    {cred.text}
                  </p>
                </div>
                
                {/* Animated Accent Yellow Bottom Bar */}
                <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-accent-yellow transition-all duration-500 ease-out group-hover:w-full"></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      {/* Quote Block (Very Light Grey background) */}
      <section className="section bg-very-light-grey">
        <div className="page-shell quote-block max-w-4xl mx-auto">
          <blockquote>
            Tangible, cognizable, and intelligible services grounded in more than a decade of experience.
          </blockquote>
        </div>
      </section>

      {/* Info Tiles (White background) */}
      <section className="section bg-pure-white">
        <div className="page-shell">
          <InfoTiles
            eyebrow="Founder Lens"
            title="The founder journey shapes the consulting mindset."
            items={[
              { title: 'Commercial Instinct', text: 'A practical understanding of how financial services actually operate.' },
              { title: 'Cross-Functional View', text: 'Exposure across administration, finance, operations, and planning.' },
              { title: 'Creative Judgment', text: 'The ability to think beyond rigid templates while staying structured.' },
            ]}
          />
        </div>
      </section>
    </>
  )
}
