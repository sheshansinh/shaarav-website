import { PageHero } from '../../components/common/PageHero'
import { InfoTiles } from '../Home/InfoTiles'
import { media } from '../../constants/data'

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
          className="button button--secondary !py-2 !px-4 !min-h-[2.5rem] flex items-center gap-2 cursor-pointer hover:bg-black/5 !text-black"
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

      {/* Main Editorial Content */}
      {post.paragraphs && post.paragraphs.length > 0 ? (
        <section className="section page-shell !py-12">
          <div className="max-w-4xl mx-auto flex flex-col gap-8">
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-[#fffcf7] to-[#fff9f0] border border-[#14231f]/10 shadow-soft flex flex-col gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[rgba(215,169,107,0.08)] rounded-full blur-3xl pointer-events-none"></div>
              
              {post.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-[#304740] text-lg leading-relaxed font-normal m-0">
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

      {/* Key Focus Areas Grid */}
      {post.keyFocusAreas && post.keyFocusAreas.length > 0 && (
        <section className="section page-shell !py-8">
          <div className="section-heading mb-10 max-w-3xl">
            <span className="eyebrow">Strategic Pillars</span>
            <h2 className="text-3xl md:text-4xl font-display text-[#152b23] mt-2">Key Focus Areas</h2>
            <p className="text-muted mt-2">Essential components of an integrated multi-generational wealth preservation framework.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {post.keyFocusAreas.map((area, index) => (
              <div 
                key={area}
                className="p-6 rounded-[1.8rem] bg-white border border-[#14231f]/8 shadow-soft flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md group"
              >
                <div className="w-10 h-10 rounded-full bg-[#d7a96b]/15 text-[#8f6330] flex items-center justify-center font-bold text-sm shrink-0 border border-[#d7a96b]/30 group-hover:bg-[#8f6330] group-hover:text-white transition-colors duration-300">
                  0{index + 1}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#152b23] m-0 mb-1">{area}</h4>
                  <p className="text-xs text-muted m-0">Structured governance & decision-making framework for families.</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Conclusion Quote */}
      <section className="section page-shell quote-block !my-8">
        <blockquote className="!text-[#f8f3eb]">
          &ldquo;{post.conclusion || 'Insight is valuable when it changes how you think about the next decision.'}&rdquo;
        </blockquote>
      </section>

      {/* CTA Box */}
      <section className="section page-shell !py-8">
        <div className="p-10 rounded-[2.5rem] bg-[#14231f] text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl">
            <span className="eyebrow eyebrow--light mb-2 block">Family Office Advisory</span>
            <h3 className="text-3xl md:text-4xl font-display text-white mb-3">Protecting legacy across generations.</h3>
            <p className="text-[#f8f3eb]/80 text-base m-0">
              Discuss your family wealth planning, estate structuring, or governance needs with our team at Shaarav Enterprise.
            </p>
          </div>
          <button 
            onClick={() => onNavigate('contact')}
            className="button button--primary shrink-0 text-base !py-4 !px-8 cursor-pointer"
          >
            Connect With Advisory →
          </button>
        </div>
      </section>

      <InfoTiles
        eyebrow="Where to Go Next"
        title="Reading is helpful. Personal advice is better when the decision is significant."
        items={[
          { title: 'Discuss', text: 'Use the article as a starting point for a more direct consulting conversation.' },
          { title: 'Clarify', text: 'Translate general insight into something relevant to your own context.' },
          { title: 'Act', text: 'Move forward with stronger structure and more confidence.' },
        ]}
      />
    </>
  )
}
