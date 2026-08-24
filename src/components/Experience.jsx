function ExperienceItem({ item, isLast }) {
  const hasLogo = Boolean(item.logo);

  return (
    <article className={`experience-item ${isLast ? "mb-4" : "mb-5"}`}>
      {hasLogo ? (
        <div className="experience-header d-flex align-items-start gap-3">
          <img src={item.logo} alt={item.logoAlt} className="company-logo" />
          <div className="flex-grow-1">
            <div className="d-flex flex-wrap justify-content-between align-items-baseline gap-2 mb-2">
              <h3 className="fs-5 fw-bold mb-0">{item.title}</h3>
              <span className="text-muted">{item.dates}</span>
            </div>
            <p className="company-name mb-2">
              {item.company} · {item.location}
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="d-flex flex-wrap justify-content-between align-items-baseline gap-2 mb-2">
            <h3 className="fs-5 fw-bold mb-0">{item.title}</h3>
            <span className="text-muted">{item.dates}</span>
          </div>
          <p className="company-name mb-2">
            {item.company} · {item.location}
          </p>
        </>
      )}
      <ul className={item.tech ? "mb-2" : "mb-0"}>
        {item.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      {item.tech && (
        <p className="tech-stack mb-0">
          <strong>Tech:</strong> {item.tech}
        </p>
      )}
    </article>
  );
}

export default function Experience({ items, footnote }) {
  return (
    <section id="experience" className="py-5">
      <div className="container px-lg-5">
        <h2 className="section-title mb-5">Experience</h2>
        <div className="experience-list">
          {items.map((item, index) => (
            <ExperienceItem
              key={`${item.company}-${item.dates}`}
              item={item}
              isLast={index === items.length - 1}
            />
          ))}
          <p className="text-muted mb-0">{footnote}</p>
        </div>
      </div>
    </section>
  );
}
