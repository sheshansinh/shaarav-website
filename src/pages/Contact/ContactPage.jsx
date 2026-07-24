import { useState } from 'react'
import { PageHero } from '../../components/common/PageHero'
import { InfoTiles } from '../Home/InfoTiles'
import { media } from '../../constants/data'

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      e.target.reset() // Clear the form

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start the conversation with a clearer next step."
        text="For clients who want direct guidance, structured support, and a more premium advisory experience."
        image={media.contact}
      />

      {/* Contact Cards Row (White background) */}
      <section className="section bg-pure-white">
        <div className="page-shell">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Visit Card */}
            <article className="p-8 border border-neutral-grey rounded-[20px] bg-pure-white shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(26,72,100,0.08)] flex flex-col items-start group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-[14px] bg-light-blue text-primary-navy border border-neutral-grey flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-[20px] font-sans font-bold text-primary-navy m-0">Visit Us</h3>
              </div>
              <p className="font-bold text-[14px] tracking-wide mb-1 uppercase text-primary-navy font-sans">Shaarav Enterprise (Registered Office)</p>
              <a 
                href="https://maps.google.com/?q=Shaarav+Enterprise,+B7-1601,+Waterlily,+Adani+Shantigram,+Nr+Vaishnodevi+Circle,+Ahmedabad+-+382421"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] text-dark-grey hover:text-medium-blue transition-colors leading-relaxed font-sans"
              >
                B7-1601, Waterlily, Adani Shantigram, Nr Vaishnodevi Circle, Ahmedabad - 382421
              </a>
            </article>

            {/* Call Card */}
            <article className="p-8 border border-neutral-grey rounded-[20px] bg-pure-white shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(26,72,100,0.08)] flex flex-col items-start group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-[14px] bg-light-blue text-primary-navy border border-neutral-grey flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-[20px] font-sans font-bold text-primary-navy m-0">Call Us</h3>
              </div>
              <p className="text-[16px] text-dark-grey mb-2 font-sans">Direct line for immediate assistance</p>
              <a href="tel:+919925528021" className="text-[20px] font-sans font-bold text-primary-navy hover:text-medium-blue transition-colors tracking-wide">+91 99255 28021</a>
            </article>

            {/* Email Card */}
            <article className="p-8 border border-neutral-grey rounded-[20px] bg-pure-white shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(26,72,100,0.08)] flex flex-col items-start group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-[14px] bg-light-blue text-primary-navy border border-neutral-grey flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-[20px] font-sans font-bold text-primary-navy m-0">Email Us</h3>
              </div>
              <p className="text-[16px] text-dark-grey mb-2 font-sans">For detailed inquiries and support</p>
              <a href="mailto:info@shaaraventerprise.com" className="text-[18px] font-sans font-bold text-primary-navy hover:text-medium-blue transition-colors break-all">info@shaaraventerprise.com</a>
            </article>

          </div>
        </div>
      </section>

      {/* Connect details + Form Section (Very Light Grey background) */}
      <section className="section bg-very-light-grey">
        <div className="page-shell">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            {/* LEFT SIDE: Info panels */}
            <div className="flex flex-col gap-6">
              
              {/* Highlight Panel (Navy background) */}
              <div className="final-cta__panel !m-0 !p-8 !h-auto flex-1 flex flex-col justify-center">
                <div>
                  <span className="eyebrow eyebrow--light">Why Reach Out</span>
                  <h2>Whether it&apos;s financial services anxiety or investment confusion, we will find a cure.</h2>
                  <p className="font-sans">
                    Reach out for a first conversation around financial services growth, real estate,
                    family office planning, or micro-enterprise support.
                  </p>
                </div>
              </div>

              {/* Quote Block (White background) */}
              <div className="quote-block !m-0 !p-8 rounded-[20px] bg-pure-white border border-neutral-grey shadow-sm flex items-center justify-center">
                <blockquote className="!text-left !my-0 text-primary-navy font-display text-[22px] leading-[1.6]">
                  "Let us help you reach the right path for you and help you decide."
                </blockquote>
              </div>

              {/* Response Card */}
              <article className="p-8 rounded-[20px] bg-pure-white border border-neutral-grey shadow-[0_20px_60px_rgba(0,0,0,0.05)] flex flex-col justify-center">
                <h3 className="text-primary-navy text-[20px] font-sans font-bold mb-2">Response Style</h3>
                <p className="text-dark-grey font-sans m-0">Clear, respectful, thoughtful, and tailored to your context.</p>
              </article>
            </div>

            {/* RIGHT SIDE: Contact Form */}
            <div className="h-full flex">
              <article className="w-full p-8 md:p-10 rounded-[20px] bg-pure-white border border-neutral-grey shadow-[0_20px_60px_rgba(0,0,0,0.05)] relative flex flex-col justify-center">
                <h3 className="text-primary-navy text-[28px] font-sans font-bold mb-1 text-center">Send a Message</h3>
                <p className="text-dark-grey text-center mb-8 text-sm font-sans">We typically respond within 24 hours.</p>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                    <div className="w-16 h-16 bg-light-blue text-primary-navy rounded-full flex items-center justify-center mb-4 border border-neutral-grey shadow-sm">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-[20px] font-sans font-bold text-primary-navy mb-2">Message Sent!</h4>
                    <p className="text-dark-grey font-sans">Thank you for reaching out. We will get back to you shortly.</p>
                  </div>
                ) : (
                  <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="text-xs font-semibold text-primary-navy ml-1 font-sans">Full Name</label>
                        <input
                          name="name"
                          type="text"
                          id="name"
                          className="p-3.5 text-sm rounded-[14px] bg-pure-white border border-neutral-grey focus:border-primary-navy focus:outline-none transition-all shadow-sm font-sans"
                          placeholder="John Doe"
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-xs font-semibold text-primary-navy ml-1 font-sans">Email Address</label>
                        <input
                          name="email"
                          type="email"
                          id="email"
                          className="p-3.5 text-sm rounded-[14px] bg-pure-white border border-neutral-grey focus:border-primary-navy focus:outline-none transition-all shadow-sm font-sans"
                          placeholder="john@example.com"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label htmlFor="topic" className="text-xs font-semibold text-primary-navy ml-1 font-sans">Topic</label>
                      <select
                        name="topic"
                        id="topic"
                        className="p-3.5 text-sm rounded-[14px] bg-pure-white border border-neutral-grey focus:border-primary-navy focus:outline-none transition-all shadow-sm cursor-pointer font-sans"
                        disabled={isSubmitting}
                      >
                        <option value="financial_services">Financial Services Growth</option>
                        <option value="realestate">Real Estate</option>
                        <option value="familyoffice">Family Office</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label htmlFor="message" className="text-xs font-semibold text-primary-navy ml-1 font-sans">Message</label>
                      <textarea
                        name="message"
                        id="message"
                        rows="4"
                        className="p-3.5 text-sm rounded-[14px] bg-pure-white border border-neutral-grey focus:border-primary-navy focus:outline-none transition-all shadow-sm resize-none font-sans"
                        placeholder="How can we help you?"
                        required
                        disabled={isSubmitting}
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="button button--primary mt-2 w-full flex justify-center py-3.5 text-sm tracking-wide disabled:opacity-70 font-sans font-bold"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </article>
            </div>

          </div>
        </div>
      </section>

      {/* Info Tiles Section (White background) */}
      <section className="section bg-pure-white">
        <div className="page-shell">
          <InfoTiles
            eyebrow="Before You Reach Out"
            title="A few reasons clients usually contact us."
            items={[
              { title: 'Need Clarity', text: 'When the next financial or financial services step feels unclear.' },
              { title: 'Need Structure', text: 'When ideas exist but need better shape and direction.' },
              { title: 'Need Confidence', text: 'When an important decision requires more grounded judgment.' },
            ]}
          />
        </div>
      </section>
    </>
  )
}
