export const Footer = () => {
  return (
    // <footer className="footer fixed-bottom footer-light bg-info bg-opacity-10 bg-gradient">
    //     <div className="container">
    //         <span className="text-dark">Proyecto adaptado del curso React: de cero a experto de Fernando Herrera</span>
    //     </div>
    // </footer>
    <footer className="footer p-3 mt-5 bg-opacity-10 bg-gradient border-info border-top">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <h6>Perfil</h6>
            <small className="text-muted">
              Hola! Soy Juan. Especialista en Front-End con enfoque en React,
              apasionado por crear interfaces dinámicas y funcionales. Combino
              creatividad y técnica para garantizar calidad.
            </small>
          </div>
          {/* <div className="col-md-3">
                    <h6>About me</h6>
                </div> */}
          <div className="col-md-4">
            <h6>Este projecto</h6>
            <small className="text-muted">
              &copy; 2025 Superheroes Argentinos. Proyecto adaptado del curso{" "}
              <a
                href="https://cursos.devtalles.com/courses/react-cero-experto?coupon=learn-01"
                className="custom-link"
              >
                React: de cero a experto
              </a>{" "}
              de Fernando Herrera.
            </small>
          </div>
          <div className="col-md-2">
            <h6>Contact me</h6>
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-envelope me-2" aria-hidden="true"></i>
                <a
                  className="custom-link"
                  href="mailto:molina.juanignacio@gmail.com"
                >
                  molina.juanignacio@gmail.com
                </a>
              </li>
              <li>
                <i className="bi bi-telephone me-2" aria-hidden="true"></i>
                <a className="custom-link" href="tel:+5491163009970">
                  +54 9 11 6300 9970
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6>Follow me</h6>
            <ul className="d-flex list-inline footer-links gap-2">
              <li>
                <a
                  className="custom-link social-icons"
                  href="https://www.linkedin.com/in/juanignacio-molina"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin me-2" aria-hidden="true"></i>
                </a>
              </li>

              <li>
                <a
                  className="custom-link social-icons"
                  href="https://github.com/molinajuan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github me-2" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  className="custom-link social-icons"
                  href="https://www.behance.net/molinajuan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-behance me-2" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
