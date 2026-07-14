import { useState, useEffect } from 'react'
import AnimatedSection from '../../components/common/AnimatedSection'

export function CredentialsSection() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isLightboxOpen])

  // Support Escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section className="section page-shell credentials-section !py-6">
      <AnimatedSection variant="fadeUp">
        <div className="section-heading mb-10 text-center lg:text-left max-w-3xl">
          <span className="eyebrow">Certificates & Achievements</span>
          <h2 className="text-4xl lg:text-5xl font-display text-[#152b23] mt-2 leading-tight">
            Professional credibility backed by industry-recognized certification and continuous learning.
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Certificate Display on Left */}
        <div className="w-full flex">
          <AnimatedSection variant="zoomFade" delay={0.2} className="w-full flex">
            <div className="w-full flex flex-col justify-center p-6 md:p-8 rounded-[2.5rem] bg-gradient-to-br from-[#fffcf7]/95 to-[#fff9f0]/98 border border-[#14231f]/10 shadow-soft relative group transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_80px_rgba(20,35,31,0.08)]">
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[rgba(215,169,107,0.08)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2.5rem]"></div>
              
              <button 
                onClick={() => setIsLightboxOpen(true)}
                type="button"
                className="w-full relative block rounded-2xl overflow-hidden bg-[#14231f]/5 border border-[#14231f]/5 shadow-sm cursor-zoom-in group-hover:scale-[1.01] transition-transform duration-500"
              >
                <img 
                  src="/cirtificate/WhatsApp Image 2026-07-10 at 3.38.27 PM.jpeg" 
                  alt="NISM Certificate" 
                  className="w-full h-auto object-contain mx-auto max-h-[360px]"
                />
                {/* Premium Hover Overlay */}
                <div className="absolute inset-0 bg-[#14231f]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="bg-white/90 text-[#152b23] px-6 py-3 rounded-full flex items-center gap-2 font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                    <span>View Full Certificate</span>
                  </div>
                </div>
              </button>
            </div>
          </AnimatedSection>
        </div>

        {/* Info Card on Right */}
        <div className="w-full flex">
          <AnimatedSection variant="fadeUp" delay={0.3} className="w-full flex">
            <article className="group w-full relative p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#fffcf7]/95 to-[#fff9f0]/98 border border-[#14231f]/10 shadow-soft overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_80px_rgba(20,35,31,0.08)] flex flex-col justify-between h-full">
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[rgba(215,169,107,0.12)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[rgba(215,169,107,0.15)] text-[#8f6330] border border-[rgba(215,169,107,0.3)] shadow-[inset_0_2px_5px_rgba(255,255,255,0.7)] group-hover:bg-[#8f6330] group-hover:text-white transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-[#152b23] text-2xl lg:text-3xl font-display m-0 tracking-tight font-bold">
                    NISM Certified Professional
                  </h3>
                </div>
                
                <p className="text-[#5f6f68] text-[1.1rem] leading-relaxed font-medium mb-6">
                  Industry-recognized certification demonstrating expertise in financial services and investment knowledge.
                </p>

                <div className="flex gap-4 items-start border-t border-[#14231f]/5 pt-6 mt-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#d7a96b]/20 text-[#8f6330] font-bold text-sm shrink-0">
                    ✓
                  </span>
                  <div>
                    <h4 className="text-[1.15rem] font-bold text-[#152b23] mb-1">Decade-Long Track Record</h4>
                    <p className="!mt-0 text-muted leading-relaxed">10+ Years of Experience across Financial Services, Realty, Finance, and Business Consulting.</p>
                  </div>
                </div>
              </div>

              {/* Animated Bottom Bar */}
              <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-gradient-to-r from-[#d7a96b] to-[#8f6330] transition-all duration-500 ease-out group-hover:w-full"></div>
            </article>
          </AnimatedSection>
        </div>
      </div>

      {/* Premium Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-[#0e1714]/96 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            type="button"
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300 cursor-pointer shadow-lg hover:scale-105 z-50 border border-white/10"
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal Content */}
          <div 
            className="relative max-w-5xl w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
          >
            <img
              src="/cirtificate/WhatsApp Image 2026-07-10 at 3.38.27 PM.jpeg"
              alt="NISM Certificate Fullscreen"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/10 animate-scale-up"
            />
          </div>
        </div>
      )}
    </section>
  )
}

