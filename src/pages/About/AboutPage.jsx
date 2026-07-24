import { PageHero } from '../../components/common/PageHero'
import { InfoTiles } from '../Home/InfoTiles'
import { media } from '../../constants/data'
import { AboutPhilosophy } from './AboutPhilosophy'
import { Testimonials } from '../Home/Testimonials'

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A consulting practice built on lived financial services experience."
        text="Shaarav Enterprise brings together commerce, family financial services exposure, administration, finance, and entrepreneurial thinking into a premium advisory experience."
        image={media.boardroom}
      />
      
      {/* Philosophy section (Very Light Grey background) */}
      <AboutPhilosophy />
      
      {/* Standard section (White background) */}
      <section className="section bg-pure-white">
        <div className="page-shell max-w-4xl mx-auto">
          <div className="story-layout__copy">
            <span className="eyebrow">The Shaarav Standard</span>
            <h2 className="text-primary-navy mt-2 mb-8">We help financial services grow and sustain.</h2>
            <div className="flex flex-col gap-8 mt-8">
              <div className="flex gap-4 items-start p-8 rounded-[20px] bg-very-light-grey border border-neutral-grey shadow-sm">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-light-blue text-primary-navy font-bold text-sm shrink-0">1</span>
                <div>
                  <h4 className="text-[20px] font-bold text-primary-navy mb-2 font-sans">Simplified Solutions</h4>
                  <p className="!mt-0 text-dark-grey text-[16px] leading-[1.7] font-sans">We cater to sole proprietors and micro-enterprise owners through simplified, structured solutions powered by technology and human effort.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-8 rounded-[20px] bg-very-light-grey border border-neutral-grey shadow-sm">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-light-blue text-primary-navy font-bold text-sm shrink-0">2</span>
                <div>
                  <h4 className="text-[20px] font-bold text-primary-navy mb-2 font-sans">Connected Network</h4>
                  <p className="!mt-0 text-dark-grey text-[16px] leading-[1.7] font-sans">Success is built on access to the right opportunities and right relationships. Our connected network brings together industry experts, financial institutions, investment partners, and real estate professionals to create solutions that extend beyond traditional advisory.</p>
                  <p className="!mt-2 text-dark-grey text-[16px] leading-[1.7] font-sans">This collaborative ecosystem enables us to provide clients with strategic insights, trusted partnerships, and access to opportunities designed to support sustainable growth and long-term value creation.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-8 rounded-[20px] bg-very-light-grey border border-neutral-grey shadow-sm">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-light-blue text-primary-navy font-bold text-sm shrink-0">3</span>
                <div>
                  <h4 className="text-[20px] font-bold text-primary-navy mb-2 font-sans">Grounded Decisions</h4>
                  <p className="!mt-0 text-dark-grey text-[16px] leading-[1.7] font-sans">Let us help you reach out to the right path for your needs and support you in making confident decisions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision/Mission section (Light Blue background) */}
      <section className="section bg-light-blue">
        <div className="page-shell">
          <div className="band-section__grid">
            <article className="band-card band-card--dark">
              <span className="eyebrow eyebrow--light">Vision</span>
              <p>To build a globally respected multi-family office that empowers visionary families and business owners to transform wealth into lasting prosperity, purposeful impact, and multigenerational continuity.</p>
            </article>
            <article className="band-card band-card--accent">
              <span className="eyebrow">Mission</span>
              <p>We partner with families, founders, and business leaders to provide integrated wealth advisory that brings together strategic investments, real estate, family office management, estate planning, governance, and succession solutions. Our purpose is to preserve what has been built, unlock future opportunities, and ensure every generation inherits not only wealth, but the wisdom to sustain it.</p>
            </article>
          </div>
        </div>
      </section>
      
      {/* Process steps section (White background) */}
      <section className="section bg-pure-white">
        <div className="page-shell">
          <div className="section-heading text-center mx-auto max-w-2xl mb-12">
            <span className="eyebrow">Our Methodology</span>
            <h2 className="text-primary-navy mt-2">A clean process for clear progress</h2>
          </div>
          <div className="process-steps">
            <article className="process-step">
              <strong>01</strong>
              <h3>Listen</h3>
              <p>Understand the client context before offering any recommendation.</p>
            </article>
            <article className="process-step">
              <strong>02</strong>
              <h3>Clarify</h3>
              <p>Translate complexity into a decision-ready path that feels manageable.</p>
            </article>
            <article className="process-step">
              <strong>03</strong>
              <h3>Support</h3>
              <p>Help clients move forward with more confidence and better structure.</p>
            </article>
          </div>
        </div>
      </section>
      
      {/* Quote section (Very Light Grey background) */}
      <section className="section bg-very-light-grey">
        <div className="page-shell quote-block max-w-4xl mx-auto">
          <blockquote>"Let us help you find the right path for your needs and support you in making confident decisions."</blockquote>
        </div>
      </section>

      {/* Testimonials section (Very Light Grey is already within testimonials) */}
      <Testimonials />

      {/* Info Tiles section (White background) */}
      <section className="section bg-pure-white">
        <div className="page-shell">
          <InfoTiles
            eyebrow="About Highlights"
            title="The Shaarav identity is built on more than positioning."
            items={[
              { title: 'Grounded Experience', text: 'The advisory style comes from real operational and financial exposure.' },
              { title: 'Human Approach', text: 'The client experience stays warm, direct, and understandable.' },
              { title: 'Premium Intent', text: 'Presentation and guidance are designed to feel elevated, not generic.' },
            ]}
          />
        </div>
      </section>
    </>
  )
}
