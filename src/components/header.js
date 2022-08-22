import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        const { location } = this.props;

        return (
            <header className={`${location.pathname.includes('request') ? 'header-dark' : 'header-bhv'} ree-header fixed-top`}>
                <div className="container-fluid m-p-l-r-0">
                    <div className="menu-header">
                        <div className="menu-logo">
                            <div className="dskt-logo"><Link className="nav-brand" to="/"><img src={ location.pathname.includes('request') ? 'images/white-logo.png' : 'images/dark-logo.png'} alt="Logo" className="ree-logo" /> </Link> </div>
                        </div>
                        <div className="ree-nav" role="navigation">
                            <ul className="nav-list">
                                <li className="megamenu">
                                    <Link to='/' className="menu-links">Главная</Link>
                                </li>
                                <li className="megamenu mega-small">
                                    <Link to="/portfolio" className="menu-links">Портфолио</Link>
                                </li>
                                <li className="megamenu mega-small">
                                    <a href="#" className="menu-links">Услуги</a>
                                    <div className="menu-dropdown">
                                        <div className="menu-block-set">
                                            <Link className="dropdown-item" to="/services">Разработка сайтов</Link>
                                            <Link className="dropdown-item" to="/">Поддержка сайтов</Link>
                                            <Link className="dropdown-item" to="/">Разработка ПО</Link>
                                            <Link className="dropdown-item" to="/">UX/UI дизайн</Link>
                                            <Link className="dropdown-item" to="/">Маркетинг</Link>

                                        </div>
                                    </div>
                                </li>
                                <li className="megamenu mega-small">
                                    <Link to="/contacts" className="menu-links">Контакты</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="ree-nav-cta">
                            <ul>
                                <li><Link to='/request-callback' className="ree-btn ree-btn0 ree-btn-grdt2">Заказать звонок</Link> </li>
                            </ul>
                        </div>
                        {/* <div className="mobile-menu2">
                            <ul className="mob-nav2">
                                <li><a href="get-quote.html" className="ree-btn2 ree-btn-grdt1"><i className="fas fa-envelope-open-text"></i></a></li>
                                <li className="navm-"><a className="toggle" href="#"> <span></span> </a> </li>
                            </ul>
                        </div>
                        <nav id="main-nav">
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                    <ul>
                                        <li><a href="#">Multi-Page Demo</a>
                                            <ul>
                                                <li><a href="app-development.html">App Development</a></li>
                                                <li><a href="creative-agency.html">Creative Agency</a></li>
                                                <li><a href="digital-agency.html">Digital Agency</a></li>
                                                <li><a href="graphic-design.html">Graphic Design</a></li>
                                                <li><a href="lead-generation.html">Lead Generation</a></li>
                                                <li><a href="personal-portfolio.html">Personal Portfolio</a></li>
                                                <li><a href="web-design.html">Web Design</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">One-Page Demo</a>
                                            <ul>
                                                <li><a href="app-development-onepage.html">App Development</a></li>
                                                <li><a href="creative-agency-onepage.html">Creative Agency</a></li>
                                                <li><a href="digital-agency-onepage.html">Digital Agency</a></li>
                                                <li><a href="graphic-design-onepage.html">Graphic Design</a></li>
                                                <li><a href="lead-generation-onepage.html">Lead Generation</a></li>
                                                <li><a href="personal-portfolio-onepage.html">Personal Portfolio</a></li>
                                                <li><a href="web-design-onepage.html">Web Design</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="#">Pages</a>
                                    <ul>
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="about-2.html">About Us - 2</a></li>
                                        <li><a href="career.html">Career</a></li>
                                        <li><a href="career-2.html">Career - 2</a></li>
                                        <li><a href="case-study.html">Case Study</a></li>
                                        <li><a href="case-study-details.html">Case Study Details</a></li>
                                        <li><a href="core-values.html">Our Core Value</a></li>
                                        <li><a href="get-quote.html">Contact Us</a></li>
                                        <li><a href="get-quote-2.html">Contact Us - 2</a></li>
                                        <li><a href="our-team.html">Our Team</a></li>
                                        <li><a href="our-team-2.html">Our Team - 2</a></li>
                                        <li><a href="pricing.html">Pricing</a></li>
                                        <li><a href="pricing-2.html">Pricing - 2</a></li>
                                        <li><a href="services.html">Service</a></li>
                                        <li><a href="services-2.html">Service - 2</a></li>
                                        <li><a href="service-details.html">Service Details</a></li>
                                        <li><a href="service-details-2.html">Service Details - 2</a></li>
                                        <li><a href="why-us.html">Why Choose Us</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Portfolio</a>
                                    <ul>
                                        <li><a href="portfolio-modern.html">Portfolio Modern</a></li>
                                        <li><a href="portfolio-2.html">Portfolio 3 Grid</a></li>
                                        <li><a href="portfolio-3.html">Portfolio 4 Grid</a></li>
                                        <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                        <li><a href="portfolio-details-2.html">Portfolio Details - 2</a></li>
                                        <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Blogs</a>
                                    <ul>
                                        <li>  <a href="blog.html">Blog Page</a></li>
                                        <li>  <a href="blog-details.html">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Contact Page</a>
                                    <ul>
                                        <li><a href="get-quote.html">Contact Us</a></li>
                                        <li><a href="get-quote-2.html">Contact Us - 2</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="bottom-nav">
                                <li className="ree-hc">
                                    <a href="tel:123567890" rel="noreferrer" target="_blank">
                                        <img src="images/header/telephone-icon.svg" alt="tel-icon" />
                                    </a>
                                </li>
                                <li className="ree-hc">
                                    <a href="mailto:abc@example.com" target="_blank">
                                        <img src="images/header/mail-icon.svg" alt='mail-icon' />
                                    </a>
                                </li>
                                <li className="ree-hc">
                                    <a href="skype:reevan.company" rel="noreferrer" target="_blank">
                                        <img src="images/header/skype-icon.svg" alt='mail-icon' />
                                    </a>
                                </li>
                                <li className="ree-hc">
                                    <a href="wa.me/+91123456789" rel="noreferrer" target="_blank">
                                        <img src="images/header/whatsapp-icon.svg" alt='mail-icon' />
                                    </a>
                                </li>
                            </ul>
                        </nav> */}
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;