export const media = {
  hero: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1800&q=80',
  boardroom: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
  aboutShaarav: '/home/about-shaarav.jpg',
  financial: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
  planning: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
  family: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80',
  realEstate: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80',
  founder: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80',
  workspace: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80',
  contact: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80',
  courses: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
  taxPlanning: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=80',
}

export const navItems = [
  { label: 'Home', route: 'home' },
  { label: 'About', route: 'about' },
  { label: 'Services', route: 'services' },
  { label: 'Founder', route: 'founder' },
  { label: 'Blog', route: 'blog' },
  { label: 'Contact', route: 'contact' },
]

export const serviceCards = [
  {
    id: 'certified-mentorship-mutual-funds',
    title: 'Certified Mentorship & Mutual Fund Distribution',
    description: 'Combining investor education with professionally guided mutual fund distribution to help individuals and families make informed financial decisions.',
    image: media.financial,
    fullDescription: "Investing is not just about selecting financial products—it's about building a disciplined strategy aligned with your life goals. At Shaarav Enterprise, we combine investor education with professionally guided mutual fund distribution to help individuals and families make informed financial decisions. Our certified mentorship approach focuses on simplifying investments, improving financial awareness, and helping clients understand concepts such as asset allocation, risk management, diversification, and long-term wealth creation. Every recommendation is tailored to your financial objectives, investment horizon, and risk profile. Whether you are beginning your investment journey or looking to optimize an existing portfolio, we help you invest with clarity, confidence, and purpose.",
    includedServices: [
      'Goal-Based Investment Planning',
      'Mutual Fund Distribution',
      'Portfolio Reviews & Rebalancing',
      'SIP & STP Planning',
      'Retirement & Education Planning',
      'Investor Education & Financial Mentorship',
      'Wealth Creation Strategies',
    ],
    keyFocusAreas: [
      {
        title: 'Asset Allocation',
        description: 'Structuring your investment strategy across asset classes aligned with your life goals and risk profile.',
      },
      {
        title: 'Risk Management',
        description: 'Protecting capital while managing portfolio volatility through disciplined risk metrics and planning.',
      },
      {
        title: 'Diversification',
        description: 'Optimizing portfolio strength and reducing concentration risks for consistent long-term growth.',
      },
      {
        title: 'Long-Term Wealth Creation',
        description: 'Building disciplined, multi-generational wealth through goal-based planning, SIP, and STP strategies.',
      },
    ],
  },
  {
    id: 'family-office-estate',
    title: 'Family Office Management & Estate Planning',
    description: 'Holistic support for families seeking continuity, governance, estate structure, and wealth protection across generations.',
    image: media.family,
  },
  {
    id: 'real-estate-investment',
    title: 'Real Estate Investment',
    description: 'Reliable property guidance for homebuyers and investors looking for smart, grounded, and opportunity-led decisions.',
    image: media.realEstate,
  },
  {
    id: 'small-enterprise-solutions',
    title: 'Small Enterprise Solutions',
    description: 'Structured help for growing financial services through operational clarity, financial discipline, and practical strategic support.',
    image: media.workspace,
  },
  {
    id: 'courses',
    title: 'Courses',
    description: 'Structured learning programs covering financial planning, investment basics, and wealth management strategies.',
    image: media.courses,
  },
  {
    id: 'tax-planning',
    title: 'Tax Planning',
    description: 'Strategic tax planning and structuring services to optimize your personal and enterprise tax efficiency.',
    image: media.taxPlanning,
  },
]

export const blogCards = [
  {
    id: 'micro-enterprise-financial-discipline',
    title: 'How Micro Enterprises Can Build Financial Discipline',
    category: 'Insights',
    summary: 'A simple framework who want better control without overcomplicating daily operations.',
  },
  {
    id: 'family-wealth-planning-practical',
    title: 'Family Office Advisory & Multi-Generational Wealth Preservation',
    category: 'Family Office',
    summary: 'Creating wealth is an achievement; preserving it across generations requires thoughtful planning, governance, and strategic decision-making.',
    paragraphs: [
      "Creating wealth is an achievement; preserving it across generations requires thoughtful planning, governance, and strategic decision-making.",
      "A modern family office goes beyond investment management. It brings together wealth planning, estate structuring, succession planning, risk management, tax coordination, philanthropy, and strategic advisory under one integrated framework.",
      "As financial markets evolve and family wealth becomes increasingly diversified across businesses, financial assets, and real estate, having a structured approach helps families maintain continuity, protect their legacy, and make informed decisions for future generations.",
      "At Shaarav Enterprise, we believe every family's financial journey is unique. Our approach is centered on understanding your long-term vision and helping coordinate strategies that support sustainable wealth creation and preservation through every stage of life.",
    ],
    keyFocusAreas: [
      'Wealth Preservation',
      'Succession & Legacy Planning',
      'Portfolio Strategy & Asset Allocation',
      'Risk Management',
      'Family Governance',
      'Intergenerational Wealth Transfer',
      'Long-Term Financial Stewardship',
    ],
    conclusion: 'Because true wealth is measured not only by what you build today, but by what you successfully preserve for generations to come.',
  },
  {
    id: 'real-estate-investment-intent',
    title: 'Choosing Real Estate With Investment Intent',
    category: 'Property',
    summary: 'What to evaluate when property is both an emotional decision and a long-term financial commitment.',
  },
]

export const contactCards = [
  {
    title: 'Instagram',
    text: 'Drop a DM',
    href: 'https://www.instagram.com/shaarav_ent24/',
    icon: 'instagram',
    colorClass: 'social-card--instagram',
  },
  {
    title: 'LinkedIn',
    text: 'Connect With Us',
    href: 'https://www.linkedin.com/company/shaarav-enterprise/',
    icon: 'linkedin',
    colorClass: 'social-card--linkedin',
  },
  {
    title: 'Facebook',
    text: 'Join the Conversation',
    href: 'https://www.facebook.com/ShaaravEnterprise/',
    icon: 'facebook',
    colorClass: 'social-card--facebook',
  },
]

export const testimonials = [
  {
    quote: "Shaarav Enterprise transformed our family office governance. They brought incredible structure and clarity to our legacy planning, ensuring a smooth path for the next generation.",
    author: "Rajesh Mehta",
    role: "Managing Director, Mehta Group (HNI Family)",
    location: "Ahmedabad"
  },
  {
    quote: "As a micro-enterprise owner, I struggled with daily financial clarity. Shaarav provided simplified, technology-driven solutions that brought discipline to our cash flow and decision-making.",
    author: "Ananya Sharma",
    role: "Founder, Sharma Tech & Crafts",
    location: "Pune"
  },
  {
    quote: "Their real estate investment advisory is grounded and opportunity-led. They helped us cut through the noise and purchase commercial properties with confidence.",
    author: "Vikram Malhotra",
    role: "Private Investor",
    location: "Mumbai"
  }
]
