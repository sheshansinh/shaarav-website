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
        {/* Decorative quote mark */}
        <div className="absolute top-8 left-6 text-[10rem] md:text-[14rem] font-display font-normal text-primary-navy/5 leading-none select-none pointer-events-none">
          "
        </div>

        <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
          <span className="eyebrow">Testimonials</span>
          <h2 className="text-primary-navy mt-2">What Our Clients Say</h2>
          <p className="text-dark-grey mt-3 font-sans text-base">Feedback from families, owners, and investors we serve.</p>
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          {/* Testimonial Card */}
          <div className="p-6 sm:p-8 md:p-10 rounded-[20px] bg-pure-white border border-neutral-grey shadow-[0_20px_60px_rgba(0,0,0,0.05)] flex flex-col gap-6 transition-all duration-300 hover:shadow-[0_30px_70px_rgba(26,72,100,0.08)]">
            
            {/* Opening quote icon */}
            <svg className="w-8 h-8 text-accent-yellow shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.76-3 .66-1.06 1.5-1.85 2.5-2.37L9.96 6c-1.4.75-2.57 1.7-3.49 2.84-.92 1.14-1.52 2.36-1.8 3.66-.27 1.29-.16 2.48.33 3.55.5 1.08 1.28 1.83 2.33 2.24 1.06.41 2.06.37 3-.13.93-.5 1.56-1.27 1.87-2.33zm8 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.76-3 .66-1.06 1.5-1.85 2.5-2.37L17.96 6c-1.4.75-2.57 1.7-3.49 2.84-.92 1.14-1.52 2.36-1.8 3.66-.27 1.29-.16 2.48.33 3.55.5 1.08 1.28 1.83 2.33 2.24 1.06.41 2.06.37 3-.13.93-.5 1.56-1.27 1.87-2.33z"/>
            </svg>

            {/* Quote text — smaller, comfortable size */}
            <p className="text-dark-grey text-[15px] sm:text-[16px] md:text-[17px] font-normal italic leading-[1.85] font-sans m-0">
              {testimonials[activeIndex].quote}
            </p>

            {/* Author row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-neutral-grey pt-5">
              <div>
                <h4 className="text-primary-navy font-bold text-[17px] font-sans m-0">
                  {testimonials[activeIndex].author}
                </h4>
                <p className="text-medium-blue text-[13px] font-semibold m-0 mt-0.5 font-sans">
                  {testimonials[activeIndex].role}
                </p>
              </div>
              <span className="self-start sm:self-auto text-xs uppercase tracking-widest font-bold text-primary-navy bg-light-blue px-3 py-1.5 rounded-full font-sans whitespace-nowrap">
                {testimonials[activeIndex].location}
              </span>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-grey bg-pure-white shadow-sm text-primary-navy cursor-pointer hover:bg-primary-navy hover:text-pure-white transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-8 bg-primary-navy' : 'w-2.5 bg-neutral-grey'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-grey bg-pure-white shadow-sm text-primary-navy cursor-pointer hover:bg-primary-navy hover:text-pure-white transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
