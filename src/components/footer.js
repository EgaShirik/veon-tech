import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-a">
                <div className="footer-fist-row pt40">
                    <div className="container">
                        <div className="row footer-deg2">
                            <div className="col-5s">
                                <div className="footer-ree-c">
                                    <div className="footer-logo pt40">
                                        <a href="#"> <img src="images/footer-logo.png" alt="reeven" className="img" /> </a>
                                    </div>
                                    <p className="mt15">Overall client rating is 4.9 out of 8,500 Clients for Reevan</p>

                                    <ul className="footer_social mt30">
                                        <li><a href="#" target="_blank"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                                        <li> <a href="#" target="_blank"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="fab fa-youtube" aria-hidden="true"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                                        <li> <a href="#" target="_blank"><i className="fab fa-instagram" aria-hidden="true"></i></a> </li>
                                    </ul>

                                    <a href="#" className="ree-btn  ree-btn-grdt1 mw-80 no-shadows mt40">Our Brochure <i className="fas fa-arrow-right fa-btn"></i></a>

                                </div>
                            </div>
                            <div className="col-5s">
                                <h5>For Work inquiry</h5>
                                <ul className="footer-links-list social-linkz">
                                    <li><a href="tel:+911234567890"><span><i className="fas fa-phone-square-alt"></i></span> +91 123 4567 890 </a></li>
                                    <li><a href="https://wa.me/+911234567890"><span><i className="fab fa-whatsapp-square"></i></span> +91 123 4567 890</a></li>
                                    <li><a href="mailto:career@reevan.com"><span><i className="fas fa-envelope"></i></span> career@reevan.com</a></li>
                                    <li><a href="mailto:career@reevan.com"><span><i className="fas fa-envelope"></i></span> info@reevan.com</a></li>
                                    <li><a href="skype:reevan.company"><span><i className="fab fa-skype"></i></span> reevan-skype</a></li>
                                </ul>
                            </div>
                            <div className="col-5s">
                                <h5>Company</h5>
                                <ul className="footer-links-list">
                                    <li><a href=""> About us</a></li>
                                    <li><a href="">Portfolio</a></li>
                                    <li><a href="">Blog</a></li>
                                    <li><a href="">Contact Us</a></li>
                                    <li><a href="">Faqs</a></li>
                                    <li><a href="">Privacy & Policy</a></li>
                                </ul>
                            </div>
                            <div className="col-5s">
                                <h5>Services</h5>
                                <ul className="footer-links-list">
                                    <li><a href="">Hire Dedicated Developers</a></li>
                                    <li><a href="">Web App Development</a></li>
                                    <li><a href="">Mobile App Development</a></li>
                                    <li><a href="">Search Engine Optimization</a></li>
                                    <li><a href="">Pay-Per-Click</a></li>
                                    <li><a href="">Social Media Marketing</a></li>
                                </ul>
                            </div>
                            <div className="col-5s">
                                <h5>Industries</h5>
                                <ul className="footer-links-list">
                                    <li><a href="">Healthcare</a></li>
                                    <li><a href="">Education</a></li>
                                    <li><a href="">Retail</a></li>
                                    <li><a href="">Logistics</a></li>
                                    <li><a href="">Oil & Gas</a></li>
                                    <li><a href="">Music & Video</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="container ft-cpy bt-top mt70">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="ft-copyright">
                                    <p>We are tracking any intention of piracy.</p>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="ft-copyright ft-r">
                                    <p>© 2021-2022. All Rights Reserved By <a href="https://themeforest.net/user/rajesh-doot/portfolio" target="blank">Rajesh Doot</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            // <footer className="footer-a">
            //     <div className="f-container">
            //         <div className="fc-icon">
            //             <img className="f-img" src="images/icons/logo-veon-tech.png"></img>
            //             <p className="veon-consalt">ООО "Веон-консалт"</p>
            //             <p>УНП 193082231</p>
            //         </div>
            //         <div className="fc-info">
            //             <h3 className="contacts">КОНТАКТЫ</h3>
            //             <ul>
            //                 <li><i className="fas fa-phone-alt"></i>  +375 29 717-73-52</li>
            //                 <li><i className="fas fa-envelope"></i>  sales@veon-tech.by</li>
            //                 <li><i  className="fas fa-map-marker-alt" ></i>  220068, г. Минск, ул. Орловская, 40а, офис 40-1</li>
            //                 <li><i className="far fa-calendar-alt"></i>  С понедельника по пятницу​</li>
            //             </ul>
            //         </div>
            //     </div>
            //     <hr></hr>
            //     <div className="copyright">
            //         <p className="copyright-first">Copyright 2020 All rights reserved</p>
            //         <p className="copyright-second">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</p>
            //     </div>

            // </footer>
        )
    }
}

export default Footer;