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
                                <span className="sub-heading mb15"><i className="fas fa-headset mr5"></i>Связаться с нами</span>
                                <h1>WEB-студия полного цикла</h1>
                                <p className="h-light">Пожалуйста, заполните форму ниже или напишите нам ваши требования.</p>
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
                                            <h3>Заполните форму</h3>
                                        </div>
                                        <div className="form-body">
                                            <form action="#" method="post" name="feedback-form">
                                                <div className="fieldsets row">
                                                    <div className="col-md-6"><input type="text" placeholder="Полное имя" name="name" /></div>
                                                    {/* <div className="col-md-6"><input type="email" placeholder="Email" name="email" /></div> */}
                                                </div>
                                                <div className="fieldsets row">
                                                    <div className="col-md-6"><input type="number" placeholder="Номер телефона" name="phone" /></div>
                                                    {/* <div className="col-md-6"><input type="text" placeholder="Skype" name="skype" /></div> */}
                                                </div>
                                                {/* <div className="fieldsets row">
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
                                                </div> */}
                                                <div className="fieldsets"><textarea placeholder="Текст сообщения" name="message"></textarea></div>
                                                <div className="fieldsets mt20"> <button type="submit" name="submit" className="ree-btn  ree-btn-grdt1 w-100">Отправить форму <i className="fas fa-arrow-right fa-btn"></i></button> </div>
                                                <p className="trm"><i className="fas fa-lock"></i>We hate spam, and we respect your privacy.</p>
                                                <div className="form-btm-set text-center mt15">
                                                    <h5>У нас</h5>
                                                    <div className="icon-setss mt20">
                                                        <div className="icon-rows">
                                                            <div className="icon-imgg"><img src="images/icons/money.svg" alt="#" /></div>
                                                            <div className="icon-txt">
                                                                <p>Лучшие цены</p>
                                                            </div>
                                                        </div>
                                                        <div className="icon-rows">
                                                            <div className="icon-imgg"><img src="images/icons/quality.svg" alt="#" /></div>
                                                            <div className="icon-txt">
                                                                <p>Качественное обслуживание</p>
                                                            </div>
                                                        </div>
                                                        <div className="icon-rows">
                                                            <div className="icon-imgg"><img src="images/icons/call-agent.svg" alt="#" /></div>
                                                            <div className="icon-txt">
                                                                <p>Хорошая поддержка</p>
                                                            </div>
                                                        </div>
                                                        <div className="icon-rows">
                                                            <div className="icon-imgg"><img src="images/icons/satisfaction.svg" alt="#" /></div>
                                                            <div className="icon-txt">
                                                                <p>Удовлетворение</p>
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
                                    <h3>Связаться с нами</h3>

                                    <div className="contact-detalnk">
                                        <a href="tel:+7(995)577-51-63"><i className="fas fa-phone-alt"></i> <span>+7(995)577-51-63</span></a>
                                       
                                        <a href="mailto:sales@veon-tech.by"><i className="fas fa-envelope"></i> <span>sales@veon-tech.by</span></a>
                                        
                                    </div>

                                    <h3 className="mt60">Офис</h3>

                                    <div className="contact-detalnk">
                                        <a href="#" className="contact-addressii"><i className="fas fa-map-marker-alt"></i> 220068, г. Минск, ул. Орловская, 40а, офис 40-1</a>
                                        <a href="#"><i className="fas fa-location-arrow"></i> <span>Get Directions</span></a>
                                    </div>

                                    {/* <h3 className="mt60">Follow us</h3>
                                    <ul className="footer_social mt30">
                                        <li> <a href="#" target="_blank" data-toggle="tooltip" title="" data-original-title="Facebook Profile"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                                        <li> <a href="#" target="_blank" data-toggle="tooltip" title="" data-original-title="Instagram Profile"><i className="fab fa-instagram" aria-hidden="true"></i></a> </li>
                                        <li><a href="#" target="_blank" data-toggle="tooltip" title="" data-original-title="Twitter Account"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#" target="_blank" data-toggle="tooltip" title="" data-original-title="Youtube Channel"><i className="fab fa-youtube" aria-hidden="true"></i></a></li>
                                        <li><a href="#" target="_blank" data-toggle="tooltip" title="" data-original-title="Linkedin Account"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a></li>

                                    </ul> */}

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