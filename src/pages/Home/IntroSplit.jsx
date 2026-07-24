import { media } from '../../constants/data'

export function IntroSplit() {
  return (
    <section className="section page-shell intro-split !mt-[clamp(1rem,3vw,3rem)] !pt-0">
      <div className="section-heading">
        <span className="eyebrow">About Shaarav</span>
        <h2>We help financial services grow, sustain, and move with more certainty.</h2>
      </div>

      <div className="intro-split__grid">
        <div className="flex flex-col gap-6">
          <div className="flex gap-4 items-start p-8 rounded-[20px] bg-pure-white border border-neutral-grey shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(26,72,100,0.08)]">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-light-blue text-primary-navy font-bold text-sm shrink-0">1</span>
            <div>
              <h4 className="text-[20px] font-bold text-primary-navy mb-2 font-sans">Simplified Solutions</h4>
              <p className="!mt-0 text-dark-grey text-[16px] leading-[1.7] font-sans">We cater to sole proprietors and micro-enterprise owners through simplified, structured solutions powered by technology and human effort.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start p-8 rounded-[20px] bg-pure-white border border-neutral-grey shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(26,72,100,0.08)]">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-light-blue text-primary-navy font-bold text-sm shrink-0">2</span>
            <div>
              <h4 className="text-[20px] font-bold text-primary-navy mb-2 font-sans">Connected Network</h4>
              <p className="!mt-0 text-dark-grey text-[16px] leading-[1.7] font-sans">Success is built on access to the right opportunities and right relationships. Our connected network brings together industry experts, financial institutions, investment partners, and real estate professionals to create solutions that extend beyond traditional advisory.</p>
              <p className="!mt-2 text-dark-grey text-[16px] leading-[1.7] font-sans">This collaborative ecosystem enables us to provide clients with strategic insights, trusted partnerships, and access to opportunities designed to support sustainable growth and long-term value creation.</p>
            </div>
          </div>
        </div>

        <article
          className="image-panel image-panel--tall !min-h-[20rem] !p-8"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(26, 72, 100, 0.2), rgba(26, 72, 100, 0.75)), url(${media.aboutShaarav})`,
          }}
        >
          <div>
            <span className="eyebrow eyebrow--light">Premium Advisory</span>
            <h3 className="!max-w-[18ch] text-pure-white font-display text-[32px] leading-[1.2] font-normal">Structured guidance for modern financial services families and entrepreneurs.</h3>
          </div>
        </article>
      </div>
    </section>
  )
}
