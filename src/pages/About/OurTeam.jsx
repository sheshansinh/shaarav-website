// LinkedIn SVG icon used inline to avoid extra dependencies
function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// Avatar placeholder when no photo is provided
function InitialsAvatar({ name, className = '' }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  return (
    <div
      className={`flex items-center justify-center bg-light-blue text-primary-navy font-bold font-sans select-none ${className}`}
      aria-label={`${name} avatar`}
    >
      {initials}
    </div>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

const ceo = {
  name: 'Shruti Jobanputra',
  role: 'Founder & Director',
  company: 'Shaarav Global Exim LLP',
  bio: 'Shruti is the Founder & Director of Shaarav Global Exim LLP, a merchant export company connecting global buyers with premium Indian spices, tea, and coffee through ethical sourcing, traceability, and quality assurance. She also brings over a decade of experience in financial investment advisory and is focused on building trusted, long-term global business relationships.',
  photo: '/ourteam/ceo.jpeg',
  linkedin: 'http://www.linkedin.com/in/shrrutijobanputra001827hcgjt',
};

const teamMembers = [
  {
    name: 'Varoni Vidhani',
    role: 'Advisory Manager',
    bio: 'Guiding clients through wealth, investment, and business advisory with practical insights and a long-term perspective.',
    phone: '9316741835',
    photo: '/ourteam/Varoni.PNG',
    linkedin: 'https://www.linkedin.com/in/varoni-vidhani-a0710118',
  },
  {
    name: 'Shreya Mistry',
    role: 'Marketing Manager',
    bio: 'The one behind the strategy, visuals, and creative direction of the firm — leading marketing strategy while crafting every visual touchpoint.',
    phone: '9099300422',
    photo: '/ourteam/Shreya.PNG',
    linkedin: 'https://www.linkedin.com/in/shreya-mistry-682bb9163',
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export function OurTeam() {
  return (
    <section className="section bg-very-light-grey">
      <div className="page-shell">
        {/* Section heading */}
        <div className="section-heading text-center mx-auto max-w-2xl mb-16">
          <span className="eyebrow">Our Team</span>
          <h2 className="text-primary-navy mt-2">The people behind Shaarav</h2>
          <p className="text-dark-grey mt-4 font-sans">
            A focused team united by expertise, integrity, and a shared commitment to long-term partnerships.
          </p>
        </div>

        {/* CEO card — full-width featured */}
        <div className="mb-12">
          <article className="group relative p-6 sm:p-10 rounded-[20px] bg-pure-white border border-neutral-grey shadow-[0_20px_60px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(26,72,100,0.08)]">

            {/* Mobile: stacked center | Desktop: side by side */}
            <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left lg:gap-10">

              {/* CEO Photo */}
              <div className="relative shrink-0 mb-6 lg:mb-0">
                {/* Decorative glow */}
                <div className="absolute inset-0 bg-light-blue/50 rounded-[20px] rotate-2 transition-transform duration-500 group-hover:rotate-1" />
                <div className="relative w-[160px] sm:w-[200px] lg:w-[260px] rounded-[20px] overflow-hidden border border-neutral-grey shadow-md bg-very-light-grey mx-auto">
                  <img
                    src={ceo.photo}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                    alt={ceo.name}
                    className="w-full h-auto object-contain object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Fallback initials */}
                  <InitialsAvatar
                    name={ceo.name}
                    className="hidden w-full h-[200px] text-[48px]"
                  />
                </div>
              </div>

              {/* CEO Copy */}
              <div className="flex flex-col items-center lg:items-start gap-3 w-full">
                <span className="eyebrow">Chief Executive</span>

                <div>
                  <h3 className="text-primary-navy font-display text-[32px] sm:text-[38px] leading-[1.1] m-0 font-normal">
                    {ceo.name}
                  </h3>
                  <p className="text-medium-blue font-sans font-semibold text-[13px] sm:text-[15px] uppercase tracking-widest mt-1">
                    {ceo.role}
                  </p>
                  <p className="text-dark-grey/70 font-sans text-[13px] mt-0.5">{ceo.company}</p>
                </div>

                <p className="text-dark-grey text-[15px] sm:text-[17px] leading-[1.8] font-sans max-w-[600px]">
                  {ceo.bio}
                </p>

                <a
                  href={ceo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#ffffff' }}
                  className="inline-flex items-center gap-2 py-2.5 px-5 rounded-full bg-primary-navy font-sans font-semibold text-[14px] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#14394F] shadow-[0_4px_12px_rgba(26,72,100,0.15)]"
                  aria-label={`Connect with ${ceo.name} on LinkedIn`}
                >
                  <LinkedInIcon />
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Animated accent bar */}
            <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-accent-yellow transition-all duration-500 ease-out group-hover:w-full" />
          </article>
        </div>

        {/* Team members grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="group relative flex flex-col gap-6 p-8 rounded-[20px] bg-pure-white border border-neutral-grey shadow-[0_20px_60px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(26,72,100,0.08)]"
            >
              {/* Photo + name row */}
              <div className="flex items-center gap-5">
                {/* Avatar */}
                <div className="relative shrink-0">
                  {member.photo ? (
                    <div className="w-[80px] h-[80px] rounded-full overflow-hidden border-2 border-neutral-grey shadow-sm">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <InitialsAvatar
                      name={member.name}
                      className="w-[80px] h-[80px] rounded-full border-2 border-neutral-grey text-[24px] shadow-sm"
                    />
                  )}
                </div>

                {/* Name & role */}
                <div>
                  <h3 className="text-primary-navy font-sans font-bold text-[22px] m-0 leading-tight">
                    {member.name}
                  </h3>
                  <span className="text-medium-blue font-sans font-semibold text-[13px] uppercase tracking-widest mt-1 block">
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-dark-grey text-[16px] leading-[1.7] font-sans m-0">
                {member.bio}
              </p>

              {/* Contact row */}
              <div className="flex flex-wrap items-center gap-3">
                {/* Phone */}
                <a
                  href={`tel:${member.phone}`}
                  style={{ color: '#1A4864' }}
                  className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-light-blue border border-neutral-grey font-sans font-semibold text-[13px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm"
                  aria-label={`Call ${member.name}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.43 2 2 0 0 1 3.58 1.25h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l1.46-.87a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  +91 {member.phone}
                </a>

                {/* LinkedIn */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#1A4864' }}
                  className="inline-flex items-center gap-2 py-2 px-4 rounded-full border border-primary-navy font-sans font-semibold text-[13px] transition-all duration-300 hover:bg-light-blue hover:-translate-y-0.5"
                  aria-label={`Connect with ${member.name} on LinkedIn`}
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
              </div>

              {/* Animated accent bar */}
              <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-accent-yellow transition-all duration-500 ease-out group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
