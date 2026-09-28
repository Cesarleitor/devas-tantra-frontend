import {
  HandHeart,
  Flower2,
  VenusAndMars,
  Laptop,
  MapPin,
} from '../../icons/icons'

import "./ServicesHighlights.css";

const services = [
  {
    icon: HandHeart,
    title: "Massagem",
    subtitle: "Tântrica",
  },
  {
    icon: Flower2,
    title: "Terapias",
    subtitle: "Integrativas",
  },
  {
    icon: VenusAndMars,
    title: "Público",
    subtitle: "Homens e mulheres",
  },
  {
    icon: Laptop,
    title: "Experiência",
    subtitle: "Online",
  },
  {
    icon: MapPin,
    title: "Atendimento",
    subtitle: "Presencial & On-Line",
  },
];

export default function ServicesHighlights() {
  return (
    <section className="services-highlights">
      <div className="services-container">

        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div className="service-item" key={index}>
              <div className="service-icon">
                <Icon size={52} strokeWidth={1.2} />
              </div>

              <h3>{service.title}</h3>
              <p>{service.subtitle}</p>
            </div>
          );
        })}

      </div>
    </section>
  );
}

