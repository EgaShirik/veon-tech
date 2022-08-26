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
                        
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;