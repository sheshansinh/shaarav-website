import { PageHero } from '../../components/common/PageHero'
import { InfoTiles } from '../Home/InfoTiles'

// DetailSection with correct overlays and card styles
function DetailSection({ title, text, points, image, reverse = false }) {
  return (
    <section className="section bg-pure-white">
      <div className="page-shell story-layout">
        {!reverse ? (
          <>
            <div className="story-layout__copy story-layout__copy--card">
              <h2 className="text-primary-navy">{title}</h2>
              <p className="text-dark-grey font-sans">{text}</p>
              <div className="detail-points">
                {points.map((point) => (
                  <div key={point} className="detail-point font-sans text-dark-grey">
                    {point}
                  </div>
                ))}
              </div>
            </div>
            <article
              className="image-panel image-panel--portrait rounded-[20px] overflow-hidden relative"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(26, 72, 100, 0.15), rgba(26, 72, 100, 0.75)), url(${image})`,
              }}
            />
          </>
        ) : (
          <>
            <article
              className="image-panel image-panel--portrait rounded-[20px] overflow-hidden relative"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(26, 72, 100, 0.15), rgba(26, 72, 100, 0.75)), url(${image})`,
              }}
            />
            <div className="story-layout__copy story-layout__copy--card">
              <h2 className="text-primary-navy">{title}</h2>
              <p className="text-dark-grey font-sans">{text}</p>
              <div className="detail-points">
                {points.map((point) => (
                  <div key={point} className="detail-point font-sans text-dark-grey">
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export function ServiceDetailPage({ service, onNavigate }) {
  return (
    <>
      {/* Back button container */}
      <div className="page-shell !mt-32 -mb-24 relative z-10">
        <button 
          onClick={() => onNavigate('services')}
          className="button button--secondary !py-2 !px-4 !min-h-[2.5rem] flex items-center gap-2 cursor-pointer hover:bg-light-blue text-primary-navy font-sans font-bold"
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

      {/* Main Copy Overview Section (White background) */}
      {service.fullDescription && (
        <section className="section bg-pure-white">
          <div className="page-shell">
            <div className="p-8 md:p-12 rounded-[20px] bg-pure-white border border-neutral-grey shadow-[0_20px_60px_rgba(0,0,0,0.05)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-light-blue/20 rounded-full blur-3xl pointer-events-none"></div>
              <span className="eyebrow mb-3 block">Certified Mentorship & Strategy</span>
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-primary-navy mb-6 leading-tight">
                Investing is not just about selecting financial products—it&apos;s about building a disciplined strategy aligned with your life goals.
              </h2>
              <p className="text-dark-grey text-[18px] leading-[1.8] max-w-5xl font-sans font-normal">
                {service.fullDescription}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Included Services Section (Very Light Grey background) */}
      {service.includedServices && service.includedServices.length > 0 && (
        <section className="section bg-very-light-grey">
          <div className="page-shell">
            <div className="section-heading mb-12">
              <span className="eyebrow">Service Scope</span>
              <h2 className="text-primary-navy">Our Services Include</h2>
              <p className="text-dark-grey mt-2 font-sans">Comprehensive solutions tailored to your financial objectives, investment horizon, and risk profile.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.includedServices.map((item, index) => (
                <div 
                  key={item}
                  className="p-6 rounded-[20px] bg-pure-white border border-neutral-grey shadow-[0_20px_60px_rgba(0,0,0,0.02)] flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(26,72,100,0.08)] group"
                >
                  <div className="w-10 h-10 rounded-full bg-light-blue text-primary-navy flex items-center justify-center font-bold text-sm shrink-0 border border-neutral-grey group-hover:bg-primary-navy group-hover:text-pure-white transition-colors duration-300">
                    0{index + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-sans font-bold text-primary-navy m-0 mb-1">{item}</h4>
                    <p className="text-xs text-dark-grey m-0 font-sans">Structured advisory & execution tailored for your long-term goals.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key Focus Areas Grid (White background) */}
      {service.keyFocusAreas && service.keyFocusAreas.length > 0 && (
        <section className="section bg-pure-white">
          <div className="page-shell">
            <div className="section-heading mb-12">
              <span className="eyebrow">Core Pillars</span>
              <h2 className="text-primary-navy">Mentorship & Investment Philosophy</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.keyFocusAreas.map((focus) => (
                <div 
                  key={focus.title}
                  className="p-8 rounded-[20px] bg-pure-white border border-neutral-grey shadow-[0_20px_60px_rgba(0,0,0,0.05)] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-3 h-3 rounded-full bg-accent-yellow"></span>
                      <h3 className="text-xl font-sans font-bold text-primary-navy m-0">{focus.title}</h3>
                    </div>
                    <p className="text-dark-grey leading-relaxed m-0 font-sans">{focus.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {!service.fullDescription && (
        <>
          <section className="section bg-very-light-grey">
            <div className="page-shell">
              <InfoTiles
                eyebrow="What This Covers"
                title="A premium advisory service with practical depth."
                items={[
                  { title: 'Strategy', text: 'Clear direction shaped around your current position and future goals.' },
                  { title: 'Clarity', text: 'A simpler decision-making framework for complex financial services or financial choices.' },
                  { title: 'Support', text: 'Thoughtful guidance that stays grounded in real-world practicality.' },
                ]}
              />
            </div>
          </section>

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

      {/* Quote Block (Very Light Grey background) */}
      <section className="section bg-very-light-grey">
        <div className="page-shell quote-block max-w-4xl mx-auto">
          <blockquote>
            &ldquo;Investing is not just about selecting financial products—it&apos;s about building a disciplined strategy aligned with your life goals.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* CTA Box (White background with Navy panel) */}
      <section className="section bg-pure-white">
        <div className="page-shell">
          <div className="final-cta__panel">
            <div className="max-w-2xl">
              <span className="eyebrow eyebrow--light mb-2 block font-sans">Begin Your Journey</span>
              <h2>Invest with clarity, confidence, and purpose.</h2>
              <p className="font-sans">
                Whether you are starting your investment journey or optimizing an existing portfolio, reach out to Shaarav Enterprise today.
              </p>
            </div>
            <button 
              onClick={() => onNavigate('contact')}
              className="button button--secondary shrink-0 text-base !py-4 !px-8 cursor-pointer hover:bg-light-blue font-sans font-bold"
            >
              Schedule Consultation →
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
