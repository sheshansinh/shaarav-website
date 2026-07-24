import { useState } from 'react'
import { testimonials } from '../../constants/data'

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section bg-very-light-grey relative overflow-hidden">
      <div className="page-shell">
        {/* Decorative quotes background - using primary navy with low opacity */}
        <div className="absolute top-10 left-10 text-[18rem] font-display font-normal text-primary-navy/5 leading-none select-none pointer-events-none">
          “
        </div>
        
        <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
          <span className="eyebrow">Testimonials</span>
          <h2 className="text-primary-navy mt-2">What Our Clients Say</h2>
          <p className="text-dark-grey mt-4 font-sans">Feedback from families, owners, and investors we serve.</p>
        </div>

        <div className="max-w-4xl mx-auto relative px-4 z-10">
          {/* Testimonial Card */}
          <div className="p-10 md:p-14 rounded-[20px] bg-pure-white border border-neutral-grey shadow-[0_20px_60px_rgba(0,0,0,0.05)] relative min-h-[250px] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_30px_70px_rgba(26,72,100,0.08)]">
            <p className="text-dark-grey text-xl md:text-2xl font-normal italic leading-[1.8] mb-8 font-sans">
              "{testimonials[activeIndex].quote}"
            </p>
            
            <div className="flex items-center justify-between border-t border-neutral-grey pt-6">
              <div>
                <h4 className="text-primary-navy font-bold text-[20px] font-sans m-0">
                  {testimonials[activeIndex].author}
                </h4>
                <p className="text-medium-blue text-sm font-semibold m-0 mt-1 font-sans">
                  {testimonials[activeIndex].role}
                </p>
              </div>
              <span className="text-xs uppercase tracking-widest font-bold text-primary-navy bg-light-blue px-4 py-2 rounded-full font-sans">
                {testimonials[activeIndex].location}
              </span>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={handlePrev}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-neutral-grey bg-pure-white shadow-[0_4px_12px_rgba(0,0,0,0.02)] text-primary-navy cursor-pointer hover:bg-primary-navy hover:text-pure-white transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-8 bg-primary-navy' : 'bg-neutral-grey'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={handleNext}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-neutral-grey bg-pure-white shadow-[0_4px_12px_rgba(0,0,0,0.02)] text-primary-navy cursor-pointer hover:bg-primary-navy hover:text-pure-white transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
