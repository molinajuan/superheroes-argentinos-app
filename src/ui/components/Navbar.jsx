import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
// import './navbar-script.js';

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav
      id="mainNavbar"
      className="navbar navbar-expand-lg navbar-light p-2 border-info border-bottom"
    >
      <div className="container-fluid">
        <Link className="navbar-brand fw-bolder text-info" to="/">
          Superheroes Argentinos
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <div className="navbar-collapse">
            <div className="navbar-nav">
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link  ${isActive ? "active" : ""}`
                }
                to="/all"
              >
                All
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link  ${isActive ? "active" : ""}`
                }
                to="/dc"
              >
                DC
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link  ${isActive ? "active" : ""}`
                }
                to="/marvel"
              >
                Marvel
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link  ${isActive ? "active" : ""}`
                }
                to="/search"
              >
                Search
              </NavLink>
            </div>
          </div>

          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
            <ul className="navbar-nav ml-auto">
              <li>
                <a
                  className="social-icons-links"
                  href="mailto:molina.juanignacio@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="bi bi-envelope-fill me-3" aria-hidden="true"></i>
                </a>
              </li>

              <li>
                <a
                  className="social-icons-links"
                  href="https://www.linkedin.com/in/juanignacio-molina"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin me-3" aria-hidden="true"></i>
                </a>
              </li>

              <li>
                <a
                  className="social-icons-links"
                  href="https://github.com/molinajuan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github me-3" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  className="social-icons-links"
                  href="https://www.behance.net/molinajuan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-behance me-3" aria-hidden="true"></i>
                </a>
              </li>
              <span className="nav-item nav-link text-dark">{user?.name}</span>

              <button className="nav-item nav-link btn" onClick={onLogout}>
                <i className="bi bi-box-arrow-right me-3"></i>
                Logout
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
