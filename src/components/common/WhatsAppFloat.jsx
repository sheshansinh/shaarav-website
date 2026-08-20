import { useState, useEffect } from 'react'
import { SocialIcon } from './SocialIcon'

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show after a brief delay for a clean entry
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  const whatsappUrl = "https://wa.me/919925528021?text=Hello%20Shaarav%20Enterprise!%20I%20would%20like%20to%20inquire%20about%20your%20services."

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Outer Pulse rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping -z-10 opacity-75"></span>
      <span className="absolute inset-0 rounded-full bg-[#25D366]/15 animate-pulse -z-10"></span>

      {/* Custom WhatsApp PNG Icon */}
      <img 
        src="/whatsappicon/whatsapp.png" 
        alt="WhatsApp" 
        className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)] transition-all duration-300" 
      />

      {/* Tooltip on hover */}
      <span className="absolute right-16 bg-primary-navy text-pure-white text-[13px] font-sans font-semibold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-md border border-neutral-grey/20">
        Chat with us
      </span>
    </a>
  )
}
