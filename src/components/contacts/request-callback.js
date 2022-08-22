import React from "react";
import { Link } from "react-router-dom";

class RequestCallback extends React.Component {
    render() {
        return (
            <>
                <section className="header-title head-dez3 dark-bg pera-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 vcenter">
                                <span className="sub-heading mb15"><i className="fas fa-headset mr5"></i> Contact Us</span>
                                <h1>We are a creative digital agency based in India.</h1>
                                <p className="h-light">Please fill in the form below or mail us your requirements.</p>
                            </div>
                            <div className="col-lg-6 vcenter">
                                <div className="sol-img m-mt30">
                                    <img src="images/others/smiling-girl.png" alt="img" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="contact-form-sec sec-pad r-bg-a">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-7">
                                <div className="form-contact-hom m-mt60">
                                    <div className="form-block bg-w">
                                        <div className="form-head">
                                            <h3>Please fill in the form below.</h3>
                                        </div>
                                        <div className="form-body">
                                            <form action="#" method="post" name="feedback-form">
                                                <div className="fieldsets row">
                                                    <div className="col-md-6"><input type="text" placeholder="Full Name" name="name" /></div>
                                                    <div className="col-md-6"><input type="email" placeholder="Email Address" name="email" /></div>
                                                </div>
                                                <div className="fieldsets row">
                                                    <div className="col-md-6"><input type="number" placeholder="Contact Number" name="phone" /></div>
                                                    <div className="col-md-6"><input type="text" placeholder="Skype" name="skype" /></div>
                                                </div>
                                                <div className="fieldsets row">
                                                    <div className="col-md-6"><input type="text" placeholder="Subject" name="subject" /></div>
                                                    <div className="col-md-6">
                                                        <select>
                                                            <option>interested in</option>
                                                            <option>Web Design</option>
                                                            <option>Graphic Design</option>
                                                            <option>App Development</option>
                                                            <option>Digital Marketing</option>
                                                            <option>Business Development</option>
                                                            <option>Other...</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="fieldsets"><textarea placeholder="Message" name="message"></textarea></div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck" name="example1" checked="checked" />
                                                    <label className="custom-control-label label-f-form" htmlFor="customCheck">I agree to the <a href="javascript:void(0)">Terms &amp; Conditions</a> of Reevan.</label>
                                                </div>
                                                <div className="fieldsets mt20"> <button type="submit" name="submit" className="ree-btn  ree-btn-grdt1 w-100">Send your inquiry <i className="fas fa-arrow-right fa-btn"></i></button> </div>
                                                <p className="trm"><i className="fas fa-lock"></i>We hate spam, and we respect your privacy.</p>
                                                <div className="form-btm-set text-center mt15">
                                                    <h5>We Deliver</h5>
                                                    <div className="icon-setss mt20">
                                                        <div className="icon-rows">
                                                            <div className="icon-imgg"><img src="images/icons/money.svg" alt="#" /></div>
                                                            <div className="icon-txt">
                                                                <p>Best Price</p>
                                                            </div>
                                                        </div>
                                                        <div className="icon-rows">
                                                            <div className="icon-imgg"><img src="images/icons/quality.svg" alt="#" /></div>
                                                            <div className="icon-txt">
                                                                <p>Quality Service</p>
                                                            </div>
                                                        </div>
                                                        <div className="icon-rows">
                                                            <div className="icon-imgg"><img src="images/icons/call-agent.svg" alt="#" /></div>
                                                            <div className="icon-txt">
                                                                <p>Good Support</p>
                                                            </div>
                                                        </div>
                                                        <div className="icon-rows">
                                                            <div className="icon-imgg"><img src="images/icons/satisfaction.svg" alt="#" /></div>
                                                            <div className="icon-txt">
                                                                <p>Satisfaction</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="get-conct-2 pera-block d-ml50">
                                    <h3>Get in touch</h3>

                                    <div className="contact-detalnk">
                                        <a href="tel:+91123456790"><i className="fas fa-phone-alt"></i> <span>+91 123 456 7890</span></a>
                                        <a href="https://wa.me/+91123456790" target="_blank"><i className="fab fa-whatsapp"></i> <span>+91 112 3345 5688</span></a>
                                        <a href="mailto:reevan@abc.com"><i className="fas fa-envelope"></i> <span>reevan@abc.com</span></a>
                                        <a href="#"><i className="fab fa-skype"></i> <span>reevan.skype</span></a>
                                    </div>

                                    <h3 className="mt60">Come meet us</h3>

                                    <div className="contact-detalnk">
                                        <a href="#" className="contact-addressii"><i className="fas fa-map-marker-alt"></i> Tom Extension, 1st Block 2nd Cross, Yello round circle, Jaipur, Rajasthan 123456</a>
                                        <a href="#"><i className="fas fa-location-arrow"></i> <span>Get Directions</span></a>
                                    </div>

                                    <h3 className="mt60">Follow us</h3>
                                    <ul className="footer_social mt30">
                                        <li> <a href="#" target="_blank" data-toggle="tooltip" title="" data-original-title="Facebook Profile"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                                        <li> <a href="#" target="_blank" data-toggle="tooltip" title="" data-original-title="Instagram Profile"><i className="fab fa-instagram" aria-hidden="true"></i></a> </li>
                                        <li><a href="#" target="_blank" data-toggle="tooltip" title="" data-original-title="Twitter Account"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#" target="_blank" data-toggle="tooltip" title="" data-original-title="Youtube Channel"><i className="fab fa-youtube" aria-hidden="true"></i></a></li>
                                        <li><a href="#" target="_blank" data-toggle="tooltip" title="" data-original-title="Linkedin Account"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a></li>

                                    </ul>

                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default RequestCallback;