import { PageHero } from '../../components/common/PageHero'
import { InfoTiles } from '../Home/InfoTiles'

function DetailSection({ title, text, points, image, reverse = false }) {
  return (
    <section className="section page-shell story-layout">
      {!reverse ? (
        <>
          <div className="story-layout__copy story-layout__copy--card">
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="detail-points">
              {points.map((point) => (
                <div key={point} className="detail-point">
                  {point}
                </div>
              ))}
            </div>
          </div>
          <article
            className="image-panel image-panel--portrait"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(11, 22, 19, 0.16), rgba(11, 22, 19, 0.48)), url(${image})`,
            }}
          />
        </>
      ) : (
        <>
          <article
            className="image-panel image-panel--portrait"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(11, 22, 19, 0.16), rgba(11, 22, 19, 0.48)), url(${image})`,
            }}
          />
          <div className="story-layout__copy story-layout__copy--card">
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="detail-points">
              {points.map((point) => (
                <div key={point} className="detail-point">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export function ServiceDetailPage({ service, onNavigate }) {
  return (
    <>
      <div className="page-shell !mt-32 -mb-24 relative z-10">
        <button 
          onClick={() => onNavigate('services')}
          className="button button--secondary !py-2 !px-4 !min-h-[2.5rem] flex items-center gap-2 cursor-pointer hover:bg-black/5 !text-black"
        >
          ← Back to Services
        </button>
      </div>

      <PageHero
        eyebrow="Service Detail"
        title={service.title}
        text={service.description}
        image={service.image}
      />

      {/* Main Copy Overview Section */}
      {service.fullDescription && (
        <section className="section page-shell !py-12">
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-[#fffcf7] to-[#fff9f0] border border-[#14231f]/10 shadow-soft relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgba(215,169,107,0.08)] rounded-full blur-3xl pointer-events-none"></div>
            <span className="eyebrow mb-3 block">Certified Mentorship & Strategy</span>
            <h2 className="text-3xl md:text-4xl font-display text-[#152b23] mb-6 leading-tight">
              Investing is not just about selecting financial products—it&apos;s about building a disciplined strategy aligned with your life goals.
            </h2>
            <p className="text-[#4a5b54] text-lg leading-relaxed max-w-5xl font-normal">
              {service.fullDescription}
            </p>
          </div>
        </section>
      )}

      {/* Included Services Section */}
      {service.includedServices && service.includedServices.length > 0 && (
        <section className="section page-shell !py-8">
          <div className="section-heading mb-10">
            <span className="eyebrow">Service Scope</span>
            <h2 className="text-3xl md:text-4xl font-display text-[#152b23]">Our Services Include</h2>
            <p className="text-muted mt-2">Comprehensive solutions tailored to your financial objectives, investment horizon, and risk profile.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.includedServices.map((item, index) => (
              <div 
                key={item}
                className="p-6 rounded-[1.8rem] bg-white border border-[#14231f]/8 shadow-soft flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md group"
              >
                <div className="w-10 h-10 rounded-full bg-[#d7a96b]/15 text-[#8f6330] flex items-center justify-center font-bold text-sm shrink-0 border border-[#d7a96b]/30 group-hover:bg-[#8f6330] group-hover:text-white transition-colors duration-300">
                  0{index + 1}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#152b23] m-0 mb-1">{item}</h4>
                  <p className="text-xs text-muted m-0">Structured advisory & execution tailored for your long-term goals.</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Key Focus Areas Grid */}
      {service.keyFocusAreas && service.keyFocusAreas.length > 0 && (
        <section className="section page-shell !py-12">
          <div className="section-heading mb-10">
            <span className="eyebrow">Core Pillars</span>
            <h2 className="text-3xl md:text-4xl font-display text-[#152b23]">Mentorship & Investment Philosophy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.keyFocusAreas.map((focus) => (
              <div 
                key={focus.title}
                className="p-8 rounded-[2rem] bg-[#fffcf7]/90 border border-[#14231f]/10 shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-3 h-3 rounded-full bg-[#d7a96b]"></span>
                    <h3 className="text-xl font-bold text-[#152b23] m-0">{focus.title}</h3>
                  </div>
                  <p className="text-muted leading-relaxed m-0">{focus.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {!service.fullDescription && (
        <>
          <InfoTiles
            eyebrow="What This Covers"
            title="A premium advisory service with practical depth."
            items={[
              { title: 'Strategy', text: 'Clear direction shaped around your current position and future goals.' },
              { title: 'Clarity', text: 'A simpler decision-making framework for complex financial services or financial choices.' },
              { title: 'Support', text: 'Thoughtful guidance that stays grounded in real-world practicality.' },
            ]}
          />

          <DetailSection
            title="How this service is approached."
            text="Each engagement is adapted to the client's stage, risk appetite, decision pressure, and long-term priorities. The emphasis stays on useful clarity rather than generic consulting language."
            points={[
              'Personalised understanding before recommendations are made',
              'Clear sequencing instead of overwhelming information',
              'Balanced strategic and practical perspective',
            ]}
            image={service.image}
          />
        </>
      )}

      <section className="section page-shell quote-block !my-8">
        <blockquote className="!text-[#f8f3eb]">
          &ldquo;Investing is not just about selecting financial products—it&apos;s about building a disciplined strategy aligned with your life goals.&rdquo;
        </blockquote>
      </section>

      {/* CTA Box */}
      <section className="section page-shell !py-8">
        <div className="p-10 rounded-[2.5rem] bg-[#14231f] text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl">
            <span className="eyebrow eyebrow--light mb-2 block">Begin Your Journey</span>
            <h3 className="text-3xl md:text-4xl font-display text-white mb-3">Invest with clarity, confidence, and purpose.</h3>
            <p className="text-[#f8f3eb]/80 text-base m-0">
              Whether you are starting your investment journey or optimizing an existing portfolio, reach out to Shaarav Enterprise today.
            </p>
          </div>
          <button 
            onClick={() => onNavigate('contact')}
            className="button button--primary shrink-0 text-base !py-4 !px-8 cursor-pointer"
          >
            Schedule Consultation →
          </button>
        </div>
      </section>
    </>
  )
}
