import { useEffect, useRef, useState } from 'react'

export const animationVariants = {
  hero: {
    hidden: { opacity: 0, transform: 'translateY(60px) scale(0.95)' },
    visible: { opacity: 1, transform: 'translateY(0) scale(1)' }
  },
  fadeUp: {
    hidden: { opacity: 0, transform: 'translateY(40px)' },
    visible: { opacity: 1, transform: 'translateY(0)' }
  },
  zoomFade: {
    hidden: { opacity: 0, transform: 'scale(0.9)' },
    visible: { opacity: 1, transform: 'scale(1)' }
  },
  slideLeft: {
    hidden: { opacity: 0, transform: 'translateX(-50px)' },
    visible: { opacity: 1, transform: 'translateX(0)' }
  },
  slideRight: {
    hidden: { opacity: 0, transform: 'translateX(50px)' },
    visible: { opacity: 1, transform: 'translateX(0)' }
  },
  scaleFade: {
    hidden: { opacity: 0, transform: 'scale(0.9)' },
    visible: { opacity: 1, transform: 'scale(1)' }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  staggerItem: {
    hidden: { opacity: 0, transform: 'translateY(30px)' },
    visible: { opacity: 1, transform: 'translateY(0)' }
  }
};

export function AnimatedSection({ 
  children, 
  variant = 'fadeUp', 
  delay = 0,
  className = '',
  threshold = 0.1,
  once = false
}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            observer.unobserve(entry.target)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, once])

  const transitionStyle = {
    transitionProperty: 'opacity, transform',
    transitionDuration: '800ms',
    transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
    transitionDelay: `${delay}s`,
    ...(isVisible ? animationVariants[variant].visible : animationVariants[variant].hidden)
  }

  return (
    <div
      ref={ref}
      style={transitionStyle}
      className={className}
    >
      {children}
    </div>
  )
}

export function StaggerContainer({ 
  children, 
  className = '',
  threshold = 0.1 
}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? 'stagger-visible' : 'stagger-hidden'}`}
    >
      {children}
    </div>
  )
}

export function StaggerItem({ children, className = '' }) {
  return (
    <div
      className={className}
    >
      {children}
    </div>
  )
}

export default AnimatedSection;
