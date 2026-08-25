export default function Projects({ items }) {
  return (
    <section id="projects" className="py-5 bg-surface">
      <div className="container px-lg-5">
        <h2 className="section-title mb-5 text-center">Projects</h2>
        <div className="row gx-lg-5 justify-content-center">
          {items.map((project) => (
            <div className="col-lg-6 mb-4" key={project.title}>
              <div className="card project-card h-100">
                {project.thumbnail && (
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} preview`}
                    className="project-thumbnail"
                  />
                )}
                <div className="card-body p-4 p-lg-5">
                  {!project.thumbnail && (
                    <div className="feature bg-accent text-white rounded-3 mb-4">
                      <i className={`bi ${project.icon}`}></i>
                    </div>
                  )}
                  <h3 className="fs-4 fw-bold">{project.title}</h3>
                  <p className="mb-3">{project.description}</p>
                  <p className="tech-stack mb-0">
                    <strong>Tech:</strong> {project.tech}
                  </p>
                  {project.url && (
                    <a
                      href={project.url}
                      className="btn btn-outline-primary btn-sm mt-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project <i className="bi bi-box-arrow-up-right ms-1"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
