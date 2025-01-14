import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
// import './navbar-script.js';

export const Navbar = () => {

    const { user, logout } = useContext( AuthContext );
    

    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav id="mainNavbar" className="navbar navbar-expand-lg navbar-light bg-info bg-opacity-10 bg-gradient p-2">
            <div className="container">
                <Link 
                    className="navbar-brand fw-bolder" 
                    to="/"
                >
                    Superheroes Argentinos
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                    <div className="navbar-collapse">
                        <div className="navbar-nav">

                            <NavLink 
                                className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                                to="/"
                            >
                                All
                            </NavLink>

                            <NavLink 
                                className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                                to="/dc"
                            >
                                DC
                            </NavLink>
                            
                            <NavLink 
                                className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                                to="/marvel"
                            >
                                Marvel
                            </NavLink>
                            
                            <NavLink 
                                className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                                to="/search"
                            >
                                Search
                            </NavLink>
                        </div>
                    </div>

                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                        <ul className="navbar-nav ml-auto">
                                                
                            <span className="nav-item nav-link text-dark">
                                { user?.name }
                            </span>

                            <button
                                className="nav-item nav-link btn"
                                onClick={ onLogout }
                            >
                                <i className="bi bi-box-arrow-right me-2"></i>
                                Logout
                            </button>

                        </ul>
                    </div>
                </div>  
            </div>
        </nav>
    )
}