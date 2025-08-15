import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import aboutHero from '../images/iprologic.svg';
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`navbar navbar-expand-lg fixed-top header bg-white ${
                isScrolled ? 'active' : ''
            }`}
        >
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img
                         src={aboutHero}
                        className="img-fluid logo float-start"
                        alt="Logo"
                        title="iPrologic"
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon">
                        <i className="fa fa-bars"></i>
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <NavLink
                            className={({ isActive }) =>
                                `nav-link ${isActive ? 'active' : ''}`
                            }
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `nav-link ${isActive ? 'active' : ''}`
                            }
                            to="/about"
                        >
                            About Us
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `nav-link ${isActive ? 'active' : ''}`
                            }
                            to="/services"
                        >
                            Services
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `nav-link ${isActive ? 'active' : ''}`
                            }
                            to="/clients"
                        >
                            Clients
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `nav-link ${isActive ? 'active' : ''}`
                            }
                            to="/careers"
                        >
                            Careers
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                `nav-link ${isActive ? 'active' : ''}`
                            }
                            to="/contact"
                        >
                            Contact Us
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
