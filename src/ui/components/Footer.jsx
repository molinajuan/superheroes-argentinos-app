export const Footer = () => {
  return (
    // <footer className="footer fixed-bottom footer-light bg-info bg-opacity-10 bg-gradient">
    //     <div className="container">
    //         <span className="text-dark">Proyecto adaptado del curso React: de cero a experto de Fernando Herrera</span>
    //     </div>
    // </footer>
    <footer className="footer p-3 mt-5 bg-info bg-opacity-10 bg-gradient">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h5>Juan Ignacio Molina</h5>
                    <p>
                    Especialista en Front-End con enfoque en React, apasionado por crear interfaces dinámicas y funcionales. Combino creatividad y técnica para garantizar calidad.
                    </p>
                </div>
                {/* <div className="col-md-3">
                    <h5>About me</h5>
                </div> */}
                <div className="col-md-3">
                    <h5>Contact me</h5>
                    <ul className="list-unstyled">
                      <li>
                        <i className="bi bi-envelope me-2" aria-hidden="true"></i>
                        <a className="custom-link" href="mailto:molina.juanignacio@gmail.com">molina.juanignacio@gmail.com</a>
                      </li>
                      <li>
                        <i className="bi bi-telephone me-2" aria-hidden="true"></i>
                        <a className="custom-link" href="tel:+5491163009970">+54 9 11 6300 9970</a>
                      </li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>Follow me</h5>
                    <ul className="list-inline footer-links">
                    <li>
                        <i className="bi bi-linkedin me-2" aria-hidden="true"></i>
                        <a className="custom-link" href="https://www.linkedin.com/in/juanignacio-molina" target="_blank" rel="noopener noreferrer">
                          LinkedIn Profile
                        </a>
                      </li>

                      <li>
                        <i className="bi bi-behance me-2" aria-hidden="true"></i>
                        <a className="custom-link" href="https://www.behance.net/molinajuan" target="_blank" rel="noopener noreferrer">
                          Behance Profile
                        </a>
                      </li>

                      <li>
                        <i className="bi bi-github me-2" aria-hidden="true"></i>
                        <a className="custom-link" href="https://github.com/molinajuan" target="_blank" rel="noopener noreferrer">
                          GitHub Profile
                        </a>
                      </li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-8">
                    <p>&copy; 2025 Superheroes Argentinos. Proyecto adaptado del curso React: de cero a experto de Fernando Herrera.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}
