import { PageHero } from '../../components/common/PageHero'
import { InfoTiles } from '../Home/InfoTiles'
import { media } from '../../constants/data'

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

export function BlogDetailPage({ post, onNavigate }) {
  const getImageByCategory = (category) => {
    if (category === 'Property') return media.realEstate
    if (category === 'Family Office') return media.family
    return media.financial
  }

  return (
    <>
      <div className="page-shell !mt-32 -mb-24 relative z-10">
        <button 
          onClick={() => onNavigate('blog')}
          className="button button--secondary !py-2 !px-4 !min-h-[2.5rem] flex items-center gap-2 cursor-pointer hover:bg-light-blue text-primary-navy font-sans font-bold"
        >
          ← Back to Blog
        </button>
      </div>

      <PageHero
        eyebrow={post.category}
        title={post.title}
        text={post.summary}
        image={getImageByCategory(post.category)}
      />

      {/* Main Editorial Content (White background) */}
      {post.paragraphs && post.paragraphs.length > 0 ? (
        <section className="section bg-pure-white">
          <div className="page-shell max-w-4xl mx-auto flex flex-col gap-8">
            <div className="p-8 md:p-12 rounded-[20px] bg-pure-white border border-neutral-grey shadow-[0_20px_60px_rgba(0,0,0,0.05)] flex flex-col gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-light-blue/20 rounded-full blur-3xl pointer-events-none"></div>
              
              {post.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-dark-grey text-lg leading-relaxed font-sans font-normal m-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <DetailSection
          title="Why this topic matters."
          text="The blog detail experience should feel useful and editorial, not generic. Each article supports a more informed and premium brand impression while still staying practical."
          points={[
            'Focused on actual decision-making rather than vague inspiration',
            'Written for financial services owners, HNIs, families, and investors',
            'Structured to support trust and clarity quickly',
          ]}
          image={getImageByCategory(post.category)}
        />
      )}

      {/* Key Focus Areas Grid (Very Light Grey background) */}
      {post.keyFocusAreas && post.keyFocusAreas.length > 0 && (
        <section className="section bg-very-light-grey">
          <div className="page-shell">
            <div className="section-heading mb-12 max-w-3xl">
              <span className="eyebrow">Strategic Pillars</span>
              <h2 className="text-primary-navy">Key Focus Areas</h2>
              <p className="text-dark-grey mt-2 font-sans">Essential components of an integrated multi-generational wealth preservation framework.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {post.keyFocusAreas.map((area, index) => (
                <div 
                  key={area}
                  className="p-6 rounded-[20px] bg-pure-white border border-neutral-grey shadow-[0_20px_60px_rgba(0,0,0,0.02)] flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(26,72,100,0.08)] group"
                >
                  <div className="w-10 h-10 rounded-full bg-light-blue text-primary-navy flex items-center justify-center font-bold text-sm shrink-0 border border-neutral-grey group-hover:bg-primary-navy group-hover:text-pure-white transition-colors duration-300">
                    0{index + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-sans font-bold text-primary-navy m-0 mb-1">{area}</h4>
                    <p className="text-xs text-dark-grey m-0 font-sans">Structured governance & decision-making framework for families.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Conclusion Quote (Very Light Grey background) */}
      <section className="section bg-very-light-grey">
        <div className="page-shell quote-block max-w-4xl mx-auto">
          <blockquote>
            &ldquo;{post.conclusion || 'Insight is valuable when it changes how you think about the next decision.'}&rdquo;
          </blockquote>
        </div>
      </section>

      {/* CTA Box (White background with Navy panel) */}
      <section className="section bg-pure-white">
        <div className="page-shell">
          <div className="final-cta__panel">
            <div className="max-w-2xl">
              <span className="eyebrow eyebrow--light mb-2 block font-sans">Family Office Advisory</span>
              <h2>Protecting legacy across generations.</h2>
              <p className="font-sans">
                Discuss your family wealth planning, estate structuring, or governance needs with our team at Shaarav Enterprise.
              </p>
            </div>
            <button 
              onClick={() => onNavigate('contact')}
              className="button button--secondary shrink-0 text-base !py-4 !px-8 cursor-pointer hover:bg-light-blue font-sans font-bold"
            >
              Connect With Advisory →
            </button>
          </div>
        </div>
      </section>

      {/* Info Tiles (White background) */}
      <section className="section bg-pure-white border-t border-neutral-grey">
        <div className="page-shell">
          <InfoTiles
            eyebrow="Where to Go Next"
            title="Reading is helpful. Personal advice is better when the decision is significant."
            items={[
              { title: 'Discuss', text: 'Use the article as a starting point for a more direct consulting conversation.' },
              { title: 'Clarify', text: 'Translate general insight into something relevant to your own context.' },
              { title: 'Act', text: 'Move forward with stronger structure and more confidence.' },
            ]}
          />
        </div>
      </section>
    </>
  )
}
