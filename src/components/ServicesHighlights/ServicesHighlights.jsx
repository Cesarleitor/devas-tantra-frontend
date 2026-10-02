import {
  HandHeart,
  Flower2,
  VenusAndMars,
  Laptop,
  MapPin,
  Heart,
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
    title: "Atendimento",
    subtitle: "Terapêutico",
  },
  {
    icon: VenusAndMars,
    title: "Público",
    subtitle: "Homens e mulheres",
  },
  {
    icon: Laptop,
    title: "Jornada",
    subtitle: "Autoconhecimento",
  },
  {
    icon: MapPin,
    title: "Formato",
    subtitle: "Presencial & On-Line",
  },
   {
    icon: Heart,
    title: "Experiência",
    subtitle: "Individualizada",
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

