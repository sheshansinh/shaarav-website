import { media } from '../../constants/data'

export function FounderTeaser({ onNavigate }) {
  return (
    <section className="section bg-pure-white">
      <div className="page-shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Profile Visual on Left */}
          <div className="lg:col-span-5 relative group">
            {/* Soft background glow using brand Light Blue */}
            <div className="absolute inset-0 bg-light-blue/40 rounded-[20px] rotate-2 transition-transform duration-500 group-hover:rotate-1"></div>
            <div 
              className="relative aspect-[4/5] rounded-[20px] overflow-hidden bg-cover bg-center shadow-[0_20px_50px_rgba(26,72,100,0.12)] border border-neutral-grey"
              style={{ backgroundImage: `url(${media.founder})` }}
            >
              {/* Profile Card Label */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-[14px] bg-primary-navy/95 text-pure-white backdrop-blur-md border border-pure-white/10 shadow-lg">
                <span className="text-xs font-bold uppercase tracking-widest text-accent-yellow">10+ Years Experience</span>
                <h4 className="text-[20px] font-sans font-bold mt-1 mb-0 text-pure-white">Grounded Advisory</h4>
              </div>
            </div>
          </div>
          
          {/* Teaser copy on Right */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="eyebrow">From the CEO&apos;s Desk</span>
            <h2 className="text-primary-navy mt-2 mb-6">
              A founder journey shaped by discipline, curiosity, and experience.
            </h2>
            <p className="text-[18px] text-dark-grey leading-[1.8] mb-8 font-sans">
              From commerce studies in Pune to hands-on exposure in finance,
              procurement, administration, trading, and entrepreneurship, the Shaarav
              journey is built on doing the work, not only studying it.
            </p>
            <div>
              <button 
                className="button button--primary cursor-pointer animate-lift" 
                onClick={() => onNavigate('founder')} 
                type="button"
              >
                Read Founder Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
