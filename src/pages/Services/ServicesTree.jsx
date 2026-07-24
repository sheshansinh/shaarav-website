import { useState } from 'react'
import { media } from '../../constants/data'

export function ServicesTree({ onNavigate }) {
  const [activeBranch, setActiveBranch] = useState(null)

  const branches = [
    {
      id: 'wealth-legacy',
      title: 'Wealth & Legacy Advisory',
      description: 'Protecting and growing personal, family, and generational wealth.',
      color: '#1A4864', // Primary Navy
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      children: [
        {
          id: 'certified-mentorship-mutual-funds',
          title: 'Certified Mentorship & Mutual Fund Distribution',
          description: 'Combining investor education with professionally guided mutual fund distribution for individuals and families.',
          image: media.financial,
        },
        {
          id: 'family-office-estate',
          title: 'Family Office Management & Estate Planning',
          description: 'Holistic support for families seeking continuity, governance, estate structure, and wealth protection across generations.',
          image: media.family,
        }
      ]
    },
    {
      id: 'assets-compliance',
      title: 'Assets & Compliance',
      description: 'Strategic planning for physical holdings and tax compliance.',
      color: '#5DA7D2', // Medium Blue
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      children: [
        {
          id: 'real-estate-investment',
          title: 'Real Estate Investment',
          description: 'Reliable property guidance for homebuyers and investors looking for smart, grounded, and opportunity-led decisions.',
          image: media.realEstate,
        },
        {
          id: 'tax-planning',
          title: 'Tax Planning',
          description: 'Strategic tax planning and structuring services to optimize your personal and enterprise tax efficiency.',
          image: media.taxPlanning,
        }
      ]
    },
    {
      id: 'enterprise-learning',
      title: 'Enterprise & Education',
      description: 'Empowering financial services growth and financial literacy.',
      color: '#1A4864', // Primary Navy
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      children: [
        {
          id: 'small-enterprise-solutions',
          title: 'Small Enterprise Solutions',
          description: 'Structured help for growing financial services through operational clarity, financial discipline, and practical strategic support.',
          image: media.workspace,
        },
        {
          id: 'courses',
          title: 'Courses',
          description: 'Structured learning programs covering financial planning, investment basics, and wealth management strategies.',
          image: media.courses,
        }
      ]
    }
  ]

  return (
    <section className="section bg-pure-white py-16">
      <div className="page-shell">
        {/* Root Node at the Top (Desktop only) */}
        <div className="hidden lg:flex flex-col items-center mb-12">
          <div className="px-8 py-4 rounded-full bg-primary-navy text-pure-white border-2 border-accent-yellow shadow-[0_20px_50px_rgba(26,72,100,0.12)] text-center z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-yellow block">Root Offerings</span>
            <h3 className="text-lg font-sans font-bold text-pure-white m-0">Shaarav Enterprise Solutions</h3>
          </div>
          
          {/* SVG Connectors */}
          <div className="w-full max-w-[900px] h-16 relative -mt-0.5">
            <svg className="w-full h-full absolute inset-0 overflow-visible" fill="none">
              {/* Center line */}
              <path d="M 450,0 L 450,64" stroke="#1A4864" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
              {/* Left branch */}
              <path d="M 450,0 Q 450,32 150,32 L 150,64" stroke="#1A4864" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
              {/* Right branch */}
              <path d="M 450,0 Q 450,32 750,32 L 750,64" stroke="#1A4864" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
            </svg>
          </div>
        </div>

        {/* Grid of Branches */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {branches.map((branch) => {
            const isActive = activeBranch === branch.id
            return (
              <div 
                key={branch.id} 
                className={`flex flex-col items-stretch transition-all duration-500 ${activeBranch && !isActive ? 'opacity-40 scale-[0.98]' : 'opacity-100'}`}
                onMouseEnter={() => setActiveBranch(branch.id)}
                onMouseLeave={() => setActiveBranch(null)}
              >
                {/* Branch Node Header */}
                <div 
                  className="p-8 rounded-[20px] bg-pure-white border border-neutral-grey shadow-[0_20px_60px_rgba(0,0,0,0.05)] text-center mb-8 relative group transition-all duration-300 hover:shadow-[0_30px_70px_rgba(26,72,100,0.08)] flex flex-col items-center justify-start min-h-[240px]"
                  style={{ borderTop: `4px solid ${branch.color}` }}
                >
                  <div 
                    className="w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-4 transition-colors duration-300 shrink-0"
                    style={{ backgroundColor: `${branch.color}15`, color: branch.color }}
                  >
                    {branch.icon}
                  </div>
                  <h3 className="text-primary-navy text-[20px] font-sans font-bold m-0 mb-2">{branch.title}</h3>
                  <p className="text-dark-grey text-sm mt-auto mb-0 font-sans">{branch.description}</p>
                  
                  {/* Visual Connector Dot at the bottom of the card */}
                  <div 
                    className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-pure-white shadow-sm transition-transform duration-300 group-hover:scale-125"
                    style={{ backgroundColor: branch.color }}
                  ></div>
                </div>

                {/* Connecting Line from Header to Children (Desktop) */}
                <div className="hidden lg:block h-6 relative -mt-8 mb-2">
                  <div className="w-0.5 h-full mx-auto" style={{ backgroundColor: `${branch.color}50` }}></div>
                </div>

                {/* Children Nodes Stack */}
                <div className="flex-1 flex flex-col gap-6">
                  {branch.children.map((child) => (
                    <article 
                      key={child.title}
                      className="p-6 rounded-[20px] bg-pure-white border border-neutral-grey shadow-[0_20px_60px_rgba(0,0,0,0.05)] flex flex-col justify-between flex-1 min-h-[260px] group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(26,72,100,0.08)]"
                    >
                      <div className="flex-1 flex flex-col">
                        {/* Miniature thumbnail image */}
                        <div 
                          className="w-full h-32 rounded-[14px] bg-cover bg-center mb-4 border border-neutral-grey relative overflow-hidden"
                          style={{ backgroundImage: `url(${child.image})` }}
                        >
                          {/* Subtle blue image overlay */}
                          <div className="absolute inset-0 bg-primary-navy/10 mix-blend-multiply"></div>
                        </div>
                        <h4 className="text-primary-navy text-[20px] font-sans font-bold m-0">{child.title}</h4>
                        <p className="text-dark-grey text-[15px] mt-2 mb-0 leading-[1.6] font-sans">{child.description}</p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-neutral-grey">
                        <button 
                          onClick={() => onNavigate(`service/${child.id}`)}
                          className="text-primary-navy hover:text-medium-blue font-bold text-sm flex items-center gap-1.5 transition-colors duration-200 cursor-pointer p-0 bg-transparent border-0 font-sans"
                        >
                          Explore Details <span>→</span>
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
