export default function Hero({ label, name, tagline, photo, photoAlt, buttons }) {
  return (
    <header className="py-5">
      <div className="container px-lg-5">
        <div className="hero-panel p-4 p-lg-5 rounded-3">
          <div className="hero-content d-flex flex-column flex-md-row align-items-center align-items-md-start gap-4 m-4 m-lg-5">
            <img src={photo} alt={photoAlt} className="profile-photo rounded-circle" />
            <div className="hero-intro text-center text-md-start">
              <p className="hero-label text-uppercase mb-2">{label}</p>
              <h1 className="display-5 fw-bold mb-3">{name}</h1>
              <p className="fs-5 hero-tagline mb-4">{tagline}</p>
              <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3">
                {buttons.map((button) => (
                  <a
                    key={button.label}
                    className={`btn btn-${button.variant === "outline" ? "outline-" : ""}primary btn-lg`}
                    href={button.href}
                    {...(button.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {button.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
