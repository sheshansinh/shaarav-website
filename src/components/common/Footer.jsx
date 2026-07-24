import { Brand } from './Brand'
import { SocialIcon } from './SocialIcon'
import { navItems, contactCards } from '../../constants/data'

export function Footer({ onNavigate }) {
  const companyLinks = navItems.slice(0, 3)
  const resourceLinks = navItems.slice(3)

  return (
    <footer className="bg-primary-navy text-pure-white border-t border-primary-navy/20 w-full mt-16 font-sans">
      <div className="page-shell py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info Column */}
          <div className="flex flex-col gap-6">
            <button 
              className="brand brand--button footer__brand-button flex items-center gap-3 p-0 justify-start border-0 bg-transparent cursor-pointer" 
              onClick={() => onNavigate('home')} 
              type="button"
            >
              <img src="/logo.png" alt="Shaarav Logo" className="footer__logo w-14 h-auto" />
              <div className="brand__copy text-left">
                <p className="brand__name !text-pure-white m-0 text-[1rem] font-bold tracking-[0.05em] uppercase">Shaarav Enterprise</p>
                <p className="brand__tag !text-light-blue m-0 text-[0.8rem] font-medium leading-tight">The Architecture of Wealth and Legacy</p>
              </div>
            </button>
            <p className="text-light-blue/80 text-[15px] leading-[1.6] max-w-[300px] font-sans m-0">
              Empowering individuals and micro-enterprises with structured solutions, strategic clarity, and disciplined financial guidance.
            </p>
          </div>

          {/* Company Links Column */}
          <div>
            <h4 className="text-pure-white text-[18px] font-bold mb-6 font-sans">Company</h4>
            <div className="flex flex-col gap-4 items-start">
              {companyLinks.map((item) => (
                <button
                  key={item.route}
                  onClick={() => onNavigate(item.route)}
                  type="button"
                  className="text-left text-light-blue/80 hover:text-accent-yellow font-sans font-medium text-[15px] bg-transparent border-0 p-0 cursor-pointer transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Insights Links Column */}
          <div>
            <h4 className="text-pure-white text-[18px] font-bold mb-6 font-sans">Insights</h4>
            <div className="flex flex-col gap-4 items-start">
              {resourceLinks.map((item) => (
                <button
                  key={item.route}
                  onClick={() => onNavigate(item.route)}
                  type="button"
                  className="text-left text-light-blue/80 hover:text-accent-yellow font-sans font-medium text-[15px] bg-transparent border-0 p-0 cursor-pointer transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-pure-white text-[18px] font-bold mb-6 font-sans">Connect</h4>
            <div className="flex gap-3 mb-6">
              {contactCards.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-pure-white/10 text-light-blue hover:bg-accent-yellow hover:text-primary-navy transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
                  aria-label={item.title}
                >
                  <SocialIcon type={item.icon} />
                </a>
              ))}
            </div>
            
            <div className="text-light-blue/80 text-[14px] flex flex-col gap-3 font-sans">
              <div className="flex flex-col gap-1">
                <span className="text-[12px] font-bold uppercase tracking-wider text-pure-white/40">Registered Office</span>
                <p className="m-0 leading-relaxed">
                  <a 
                    href="https://maps.google.com/?q=Shaarav+Enterprise,+B7-1601,+Waterlily,+Adani+Shantigram,+Nr+Vaishnodevi+Circle,+Ahmedabad+-+382421" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-accent-yellow transition-colors duration-200"
                  >
                    B7-1601, Waterlily, Adani Shantigram,<br />
                    Nr Vaishnodevi Circle, Ahmedabad-382421
                  </a>
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[12px] font-bold uppercase tracking-wider text-pure-white/40">Registered Phone</span>
                <p className="m-0 leading-relaxed">
                  <a href="tel:+919925528021" className="hover:text-accent-yellow transition-colors duration-200">+91 99255 28021</a>
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[12px] font-bold uppercase tracking-wider text-pure-white/40">Registered Email</span>
                <p className="m-0 leading-relaxed">
                  <a href="mailto:info@shaaraventerprise.com" className="hover:text-accent-yellow transition-colors duration-200 break-all">info@shaaraventerprise.com</a>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-pure-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] text-light-blue/60 font-sans">
          <p className="m-0">
            &copy; {new Date().getFullYear()} Gohil Infotech Private Limited • All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#/privacy" className="hover:text-accent-yellow transition-colors duration-200 text-light-blue/60">Privacy Policy</a>
            <a href="#/terms" className="hover:text-accent-yellow transition-colors duration-200 text-light-blue/60">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
