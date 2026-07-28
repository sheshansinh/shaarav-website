import { useState } from 'react'
import AnimatedSection from '../../components/common/AnimatedSection'

export function FAQSection({ onNavigate }) {
  const [openId, setOpenId] = useState(null)

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id)
  }

  const faqData = [
    {
      id: 1,
      question: "What core services does Shaarav Enterprise offer?",
      answer: (
        <div className="text-dark-grey text-[16px] leading-[1.8] font-sans space-y-4">
          <p>We provide integrated financial and real estate advisory solutions, including:</p>
          <ul className="list-none pl-0 space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-medium-blue text-lg leading-none select-none">●</span>
              <span>
                <strong>Wealth Management:</strong> Goal-based financial planning and portfolio strategies across equity, fixed income, and other investment avenues.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-medium-blue text-lg leading-none select-none">●</span>
              <span>
                <strong>Real Estate Consulting:</strong> Strategic acquisition support, market research, property analysis, and real estate portfolio diversification.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-medium-blue text-lg leading-none select-none">●</span>
              <span>
                <strong>Family Office Services:</strong> Legacy planning, estate coordination, governance, and multi-generational wealth preservation.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-medium-blue text-lg leading-none select-none">●</span>
              <span>
                <strong>Portfolio Audits:</strong> Comprehensive portfolio reviews, asset allocation assessment, and optimization recommendations.
              </span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 2,
      question: "Who can benefit from your services?",
      answer: (
        <div className="text-dark-grey text-[16px] leading-[1.8] font-sans space-y-4">
          <p>Our services are designed for:</p>
          <ul className="list-none pl-0 space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-medium-blue text-lg leading-none select-none">●</span>
              <span>
                <strong>High-Net-Worth Individuals & Families</strong> seeking integrated wealth management, real estate advisory, and family office solutions.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-medium-blue text-lg leading-none select-none">●</span>
              <span>
                <strong>Business Owners & Professionals</strong> looking to optimize personal or business surplus capital.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-medium-blue text-lg leading-none select-none">●</span>
              <span>
                <strong>Individual Investors</strong> seeking structured, goal-oriented financial and property investment strategies.
              </span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 3,
      question: "How do you assist with real estate investments?",
      answer: (
        <div className="text-dark-grey text-[16px] leading-[1.8] font-sans">
          <p>We conduct detailed market research and due diligence to evaluate investment opportunities. Our advisory focuses on aligning real estate investments with your financial objectives, liquidity requirements, risk profile, and long-term wealth strategy.</p>
        </div>
      )
    },
    {
      id: 4,
      question: "What is a Family Office, and do I need one?",
      answer: (
        <div className="text-dark-grey text-[16px] leading-[1.8] font-sans">
          <p>A Family Office provides a coordinated approach to managing family wealth by bringing together investment strategy, real estate, estate planning, governance, and succession planning. It is particularly valuable for families seeking long-term wealth preservation and seamless intergenerational wealth transfer.</p>
        </div>
      )
    },
    {
      id: 5,
      question: "Can you review and optimize my existing investment portfolio?",
      answer: (
        <div className="text-dark-grey text-[16px] leading-[1.8] font-sans">
          <p>Yes. We conduct comprehensive portfolio reviews to evaluate asset allocation, diversification, performance, costs, and risk exposure. Based on our assessment, we provide recommendations to better align your portfolio with your financial goals and investment horizon.</p>
        </div>
      )
    },
    {
      id: 6,
      question: "What sets Shaarav Enterprise apart from traditional advisors?",
      answer: (
        <div className="text-dark-grey text-[16px] leading-[1.8] font-sans">
          <p>Our approach combines financial planning and real estate advisory within a single strategic framework. Rather than viewing these asset classes independently, we help clients build diversified, long-term wealth strategies tailored to their unique objectives and evolving needs.</p>
        </div>
      )
    },
    {
      id: 7,
      question: "How do I get started with Shaarav Enterprise?",
      answer: (
        <div className="text-dark-grey text-[16px] leading-[1.8] font-sans space-y-5">
          <div>
            <strong className="text-primary-navy block text-base font-bold font-sans">Step 1 – Schedule a Consultation</strong>
            <p className="mt-1">Connect with our team for an initial discussion about your financial goals.</p>
          </div>
          <div>
            <strong className="text-primary-navy block text-base font-bold font-sans">Step 2 – Portfolio & Requirement Assessment</strong>
            <p className="mt-1">We review your current investments, financial objectives, and real estate interests.</p>
          </div>
          <div>
            <strong className="text-primary-navy block text-base font-bold font-sans">Step 3 – Personalized Strategy</strong>
            <p className="mt-1">We develop a customized roadmap designed to support your long-term financial goals.</p>
          </div>
        </div>
      )
    }
  ]

  return (
    <section className="section bg-very-light-grey">
      <div className="page-shell">
        <AnimatedSection variant="fadeUp">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-2 lg:gap-20 items-start">
            
            {/* Left Column: Heading & Desktop CTA */}
            <div className="flex flex-col gap-8">
              <div className="section-heading mb-2">
                <span className="eyebrow">Frequently Asked Questions</span>
                <h2 className="text-primary-navy mt-2">FAQs</h2>
                <div className="w-20 h-1 mt-6 bg-accent-yellow rounded-full"></div>
              </div>

              {/* Desktop-only CTA Card */}
              <div className="hidden lg:block p-8 border border-neutral-grey rounded-[20px] bg-primary-navy text-pure-white shadow-[0_20px_50px_rgba(26,72,100,0.15)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-light-blue/10 rounded-bl-[100px] pointer-events-none transition-all duration-500 group-hover:scale-125"></div>
                
                <h3 className="text-pure-white text-[24px] font-display font-normal mb-3">Still Have Questions?</h3>
                <p className="text-pure-white/80 text-[15px] leading-[1.6] mb-6 font-sans">
                  Let's build your financial future with confidence. Whether you're looking to grow your wealth, invest strategically, or preserve your family's legacy, our advisors are here to help.
                </p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="button button--secondary w-full text-center hover:bg-light-blue transition-colors duration-300 font-semibold font-sans py-3"
                  type="button"
                >
                  Book Your Consultation
                </button>
              </div>
            </div>

            {/* Right Column: Accordion list */}
            <div className="flex flex-col gap-4">
              {faqData.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div 
                    key={faq.id} 
                    className="border border-neutral-grey rounded-[20px] bg-pure-white p-6 md:p-8 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(26,72,100,0.05)] cursor-pointer relative overflow-hidden group/item"
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    {/* Hover yellow left line accent */}
                    <div className={`absolute left-0 top-0 bottom-0 w-[4px] bg-accent-yellow transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 group-hover/item:opacity-100'}`}></div>

                    <div className="flex justify-between items-center gap-4">
                      <h3 className="text-primary-navy text-[18px] md:text-[20px] font-sans font-bold leading-snug m-0 select-none">
                        {faq.id}. {faq.question}
                      </h3>
                      <span className={`flex-none w-10 h-10 rounded-full border border-neutral-grey flex items-center justify-center text-primary-navy transition-all duration-300 ${isOpen ? 'bg-primary-navy text-pure-white rotate-180 border-primary-navy' : 'bg-pure-white group-hover/item:border-primary-navy group-hover/item:text-primary-navy'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                      </span>
                    </div>
                    
                    <div 
                      className="grid transition-all duration-300 ease-in-out overflow-hidden"
                      style={{ 
                        gridTemplateRows: isOpen ? '1fr' : '0fr',
                        marginTop: isOpen ? '1.5rem' : '0rem'
                      }}
                    >
                      <div className="min-h-0">
                        <div className="pt-6 border-t border-neutral-grey/50">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Mobile-only CTA Card */}
              <div className="block lg:hidden mt-6 p-8 border border-neutral-grey rounded-[20px] bg-primary-navy text-pure-white shadow-[0_20px_50px_rgba(26,72,100,0.15)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-light-blue/10 rounded-bl-[100px] pointer-events-none"></div>
                
                <h3 className="text-pure-white text-[22px] font-display font-normal mb-3">Still Have Questions?</h3>
                <p className="text-pure-white/80 text-[14px] leading-[1.6] mb-6 font-sans">
                  Let's build your financial future with confidence. Whether you're looking to grow your wealth, invest strategically, or preserve your family's legacy, our advisors are here to help.
                </p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="button button--secondary w-full text-center hover:bg-light-blue transition-colors duration-300 font-semibold font-sans py-3"
                  type="button"
                >
                  Book Your Consultation
                </button>
              </div>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
