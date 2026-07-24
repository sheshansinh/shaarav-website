import { PageHero } from '../../components/common/PageHero'
import { media } from '../../constants/data'

export function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        text="How we collect, protect, and respect your personal information."
        image={media.workspace}
      />
      
      <section className="section bg-pure-white">
        <div className="page-shell max-w-3xl mx-auto flex flex-col gap-8 font-sans text-dark-grey text-[18px] leading-[1.8]">
          <p className="text-primary-navy font-bold">
            Effective Date: {new Date().getFullYear()}
          </p>
          
          <p>
            At Shaarav Enterprise, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our consulting services. We are committed to protecting your personal data in accordance with applicable data protection laws.
          </p>
          
          <div>
            <h3 className="text-primary-navy font-sans font-bold text-[28px] mb-3">1. Information We Collect</h3>
            <p>
              We may collect personal information such as your name, email address, phone number, and financial services details when you voluntarily provide it to us through our contact forms, during consultations, or through correspondence. We also collect non-identifiable usage data automatically when you navigate our site.
            </p>
          </div>
          
          <div>
            <h3 className="text-primary-navy font-sans font-bold text-[28px] mb-3">2. How We Use Your Information</h3>
            <p>
              We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to personalize your experience. Your data allows us to respond to inquiries efficiently. <strong>We do not sell, rent, or trade your personal information to third parties.</strong>
            </p>
          </div>
          
          <div>
            <h3 className="text-primary-navy font-sans font-bold text-[28px] mb-3">3. Data Security</h3>
            <p>
              We implement reasonable security measures and industry-standard protocols to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>
          
          <div>
            <h3 className="text-primary-navy font-sans font-bold text-[28px] mb-3">4. Contact Us</h3>
            <p>
              If you have any questions or concerns about this Privacy Policy, or if you wish to exercise your rights regarding your personal data, please contact us via our official channels listed in the website footer.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
