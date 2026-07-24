import { PageHero } from '../../components/common/PageHero'
import { InfoTiles } from '../Home/InfoTiles'
import { media } from '../../constants/data'
import { ServicesTree } from './ServicesTree'

export function ServicesPage({ onNavigate }) {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Advisory built for financial services, family, property, and growth."
        text="Each service is designed to feel premium, understandable, and directly useful in the real world."
        image={media.financial}
      />

      {/* ServicesTree has its own section with White background */}
      <ServicesTree onNavigate={onNavigate} />

      {/* Comparison Grid section (Very Light Grey background) */}
      <section className="section bg-very-light-grey">
        <div className="page-shell grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="glass-card !p-8">
            <h3 className="text-primary-navy text-[28px] font-sans font-bold mb-3">For Individuals</h3>
            <p className="text-dark-grey text-[16px] leading-[1.7] font-sans">Clearer financial direction, practical investment conversation, and better decision support.</p>
          </article>
          <article className="glass-card !p-8">
            <h3 className="text-primary-navy text-[28px] font-sans font-bold mb-3">For Families</h3>
            <p className="text-dark-grey text-[16px] leading-[1.7] font-sans">Long-term continuity planning, estate sensitivity, and structured family office thinking.</p>
          </article>
          <article className="glass-card !p-8">
            <h3 className="text-primary-navy text-[28px] font-sans font-bold mb-3">For MSMEs</h3>
            <p className="text-dark-grey text-[16px] leading-[1.7] font-sans">Operational clarity, cash-flow awareness, and strategy grounded in financial services reality.</p>
          </article>
        </div>
      </section>

      {/* Story Layout section (White background) */}
      <section className="section bg-pure-white">
        <div className="page-shell story-layout">
          <article
            className="image-panel image-panel--portrait !min-h-[20rem] rounded-[20px] overflow-hidden relative"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(26, 72, 100, 0.15), rgba(26, 72, 100, 0.75)), url(${media.realEstate})`,
            }}
          />
          <div className="story-layout__copy">
            <span className="eyebrow">How We Work</span>
            <h2 className="text-primary-navy mt-2">We don&apos;t just list services. We shape outcomes.</h2>
            <p className="text-dark-grey text-[18px] leading-[1.8] font-sans">
              Every advisory conversation is adapted to the client&apos;s stage, ambition,
              and pressure points. The goal is not just information, but useful movement.
            </p>
          </div>
        </div>
      </section>

      {/* Band section (Light Blue background) */}
      <section className="section bg-light-blue">
        <div className="page-shell">
          <div className="band-section__grid">
            <article className="band-card band-card--dark">
              <span className="eyebrow eyebrow--light">Structured</span>
              <p>Clear frameworks and simplified pathways.</p>
            </article>
            <article className="band-card band-card--accent">
              <span className="eyebrow">Personal</span>
              <p>Advice shaped to individual need, not generic templates.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Quote section (White background) */}
      <section className="section bg-pure-white">
        <div className="page-shell quote-block max-w-4xl mx-auto">
          <blockquote>We would also look into other special aspects of our customers&apos; needs with prior discussions.</blockquote>
        </div>
      </section>

      {/* Info Tiles section (Very Light Grey background) */}
      <section className="section bg-very-light-grey">
        <div className="page-shell">
          <InfoTiles
            eyebrow="Service Strengths"
            title="Each service area solves a different kind of pressure."
            items={[
              { title: 'Financial Depth', text: 'Useful direction for planning, investment, and decision clarity.' },
              { title: 'Family Continuity', text: 'Sensitive structuring for wealth, legacy, and protection.' },
              { title: 'Financial Services Practicality', text: 'Advice that respects the day-to-day reality of smaller enterprises.' },
            ]}
          />
        </div>
      </section>
    </>
  )
}
