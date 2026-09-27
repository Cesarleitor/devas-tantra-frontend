
import './Button.css'

function Button({
  children,
  href,
  variant = 'primary',
  type = 'button',
}) {
  if (href) {
    return (
      <a
        href={href}
        className={`button button--${variant}`}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={`button button--${variant}`}
    >
      {children}
    </button>
  )
}

export default Button
