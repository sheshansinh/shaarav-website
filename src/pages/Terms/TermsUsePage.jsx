import { PageHero } from '../../components/common/PageHero'
import { media } from '../../constants/data'

export function TermsUsePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Disclaimer & Terms of Use"
        image={media.boardroom}
      />
      
      <section className="section bg-pure-white">
        <div className="page-shell max-w-3xl mx-auto flex flex-col gap-8 font-sans text-dark-grey text-[18px] leading-[1.8]">
          <p>
            The information shared by Shaarav Enterprise is intended solely for general educational and informational purposes. It should not be construed as financial, investment, legal, tax, or real estate advice, nor as a recommendation to buy, sell, or hold any financial product, security, or property.
          </p>
          <p>
            All investments, including real estate, are subject to market risks and may fluctuate in value. Past performance is not indicative of future results, and no returns or appreciation are guaranteed.
          </p>
          <p>
            Readers/investors are advised to conduct their own due diligence and seek independent professional advice before making any investment or financial decisions. Investment decisions should be based on individual financial objectives, risk tolerance, liquidity needs, and personal circumstances.
          </p>
          <p>
            While every effort is made to ensure the accuracy of the information presented, Shaarav Enterprise makes no representations or warranties regarding its completeness, accuracy, or timeliness and accepts no liability for any loss or damage arising from reliance on this content.
          </p>
          <p>
            Any opinions expressed are those of the author as of the date of publication and are subject to change without prior notice.
          </p>
          <p>
            By accessing or using this content, you acknowledge that you have read, understood, and agreed to these terms.
          </p>
        </div>
      </section>
    </>
  )
}
