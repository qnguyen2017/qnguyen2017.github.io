export default function About({ summary, education, details }) {
  return (
    <section id="about" className="py-5">
      <div className="container px-lg-5">
        <h2 className="section-title mb-4">About</h2>
        <div className="row">
          <div className="col-lg-8">
            <p className="lead mb-4">{summary}</p>
            <p className="mb-0 text-muted">
              <strong>Education:</strong> {education}
            </p>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0">
            <ul className="list-unstyled about-details">
              {details.map((detail) => (
                <li key={detail.text}>
                  <i className={`bi ${detail.icon} me-2`}></i>
                  {detail.href ? <a href={detail.href}>{detail.text}</a> : detail.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
