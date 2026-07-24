import { PageHero } from '../../components/common/PageHero'
import { InfoTiles } from '../Home/InfoTiles'
import { media, blogCards } from '../../constants/data'

export function BlogPage({ onNavigate }) {
  return (
    <>
      <PageHero
        eyebrow="Blog & Insights"
        title="Useful thinking for financial services, families, and investors."
        text="A premium website feels more complete when insight and credibility continue beyond service descriptions."
        image={media.planning}
      />
      
      {/* Blog Grid section (White background) */}
      <section className="section bg-pure-white">
        <div className="page-shell">
          <div className="blog-grid !gap-8">
            {blogCards.map((card) => (
              <article key={card.title} className="blog-card">
                <span>{card.category}</span>
                <h3>{card.title}</h3>
                <p>{card.summary}</p>
                <button onClick={() => onNavigate(`blog/${card.id}`)} type="button">
                  Read Article
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      {/* Story Layout section (Very Light Grey background) */}
      <section className="section bg-very-light-grey">
        <div className="page-shell story-layout">
          <div className="story-layout__copy">
            <span className="eyebrow">Editorial Direction</span>
            <h2 className="text-primary-navy mt-2">Short, practical, credibility-building content.</h2>
            <p className="text-dark-grey text-[18px] leading-[1.8] font-sans">
              These sections are designed to support a premium client impression: informed,
              calm, and grounded in real decision-making.
            </p>
          </div>
          <article
            className="image-panel image-panel--portrait rounded-[20px] overflow-hidden relative"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(26, 72, 100, 0.15), rgba(26, 72, 100, 0.75)), url(${media.boardroom})`,
            }}
          />
        </div>
      </section>
      
      {/* Comparison Grid section (White background) */}
      <section className="section bg-pure-white">
        <div className="page-shell grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="glass-card !p-8">
            <h3 className="text-primary-navy text-[28px] font-sans font-bold mb-3">Investment Thought</h3>
            <p className="text-dark-grey text-[16px] leading-[1.7] font-sans">Decision frameworks, mindset, and clarity over noise.</p>
          </article>
          <article className="glass-card !p-8">
            <h3 className="text-primary-navy text-[28px] font-sans font-bold mb-3">Financial Services Thought</h3>
            <p className="text-dark-grey text-[16px] leading-[1.7] font-sans">Practical improvement ideas for owners and operators.</p>
          </article>
          <article className="glass-card !p-8">
            <h3 className="text-primary-navy text-[28px] font-sans font-bold mb-3">Family Thought</h3>
            <p className="text-dark-grey text-[16px] leading-[1.7] font-sans">Continuity, structure, and relationship-sensitive planning.</p>
          </article>
        </div>
      </section>
      
      {/* Quote section (Very Light Grey background) */}
      <section className="section bg-very-light-grey">
        <div className="page-shell quote-block max-w-4xl mx-auto">
          <blockquote>Insight should feel useful, not merely impressive.</blockquote>
        </div>
      </section>
      
      {/* CTA section (White background) */}
      <section className="section bg-pure-white">
        <div className="page-shell">
          <div className="final-cta__panel">
            <div>
              <span className="eyebrow eyebrow--light">Need Direct Advice?</span>
              <h2>Insights are valuable. Personal consulting is better when the decision matters.</h2>
            </div>
            <button 
              className="button button--secondary whitespace-nowrap shrink-0 hover:bg-light-blue font-sans font-bold" 
              onClick={() => onNavigate('contact')} 
              type="button"
            >
              Contact Shaarav
            </button>
          </div>
        </div>
      </section>

      {/* Info Tiles section (White background) */}
      <section className="section bg-pure-white border-t border-neutral-grey">
        <div className="page-shell">
          <InfoTiles
            eyebrow="Reading Value"
            title="The blog should build trust, not just fill space."
            items={[
              { title: 'Short and Strong', text: 'Good content respects the reader\'s time and still adds real value.' },
              { title: 'Decision-Oriented', text: 'Topics support actual financial services, property, and family choices.' },
              { title: 'Credibility Building', text: 'Insights deepen trust before the first conversation even begins.' },
            ]}
          />
        </div>
      </section>
    </>
  )
}
