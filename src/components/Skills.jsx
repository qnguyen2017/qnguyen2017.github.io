export default function Skills({ categories, tags }) {
  return (
    <section id="skills" className="py-5 bg-surface">
      <div className="container px-lg-5">
        <h2 className="section-title mb-5 text-center">Skills</h2>
        <div className="row gx-lg-5">
          {categories.map((category) => (
            <div className="col-lg-6 col-xl-3 mb-4" key={category.title}>
              <div className="card skill-card h-100">
                <div className="card-body text-center p-4 pt-0">
                  <div className="feature bg-accent text-white rounded-3 mb-4 mt-n4">
                    <i className={`bi ${category.icon}`}></i>
                  </div>
                  <h3 className="fs-5 fw-bold">{category.title}</h3>
                  <p className="mb-0 text-muted">{category.items}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="skill-tags text-center mt-2">
          {tags.map((tag) => (
            <span className="badge rounded-pill" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
