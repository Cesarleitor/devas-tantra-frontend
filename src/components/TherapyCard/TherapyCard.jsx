import './TherapyCard.css'

function TherapyCard({
  number,
  image,
  title,
  description,
  link = '#agendamento',
}) {
  return (
    <article className="therapy-card">

      <div className="therapy-card__image">
        <img
          src={image}
          alt={title}
        />
      </div>

      <div className="therapy-card__content">

        <span className="therapy-card__number">
          {number}
        </span>

        <h3 className="therapy-card__title">
          {title}
        </h3>

        <p className="therapy-card__description">
          {description}
        </p>

        <a
          href={link}
          className="therapy-card__link"
        >
          Conheça a experiência
        </a>

      </div>

    </article>
  )
}

export default TherapyCard