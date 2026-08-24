export default function Contact({ headline, links }) {
  return (
    <section id="contact" className="py-5">
      <div className="container px-lg-5 text-center">
        <h2 className="section-title mb-4">Contact</h2>
        <p className="lead mb-4">{headline}</p>
        <div className="contact-links d-flex flex-wrap justify-content-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="contact-link"
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <i className={`bi ${link.icon}`}></i>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
