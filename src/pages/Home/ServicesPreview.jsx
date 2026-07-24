import { serviceCards } from '../../constants/data'

export function ServicesPreview({ onNavigate }) {
  const displayedServices = serviceCards.slice(0, 2)

  return (
    <section className="section page-shell services-preview">
      <div className="section-heading section-heading--wide">
        <span className="eyebrow">Our Services</span>
        <h2>Designed to feel credible in the room and useful in the real world.</h2>
      </div>

      <div className="services-grid">
        {displayedServices.map((service) => (
          <article
            key={service.title}
            className="service-card !min-h-[20rem]"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(26, 72, 100, 0.1), rgba(26, 72, 100, 0.9)), url(${service.image})`,
            }}
          >
            <div className="service-card__content !p-6">
              <span className="service-card__kicker">Consulting</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button onClick={() => onNavigate(`service/${service.id}`)} type="button">
                Explore Service
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button 
          onClick={() => onNavigate('services')} 
          className="button button--primary"
          type="button"
        >
          View All Services
        </button>
      </div>
    </section>
  )
}
