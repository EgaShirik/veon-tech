import React from "react";
import { Link } from "react-router-dom";

import jQuery from "jquery";

(function ($) {
    //Sticky Header 
    function updateScroll() {
        if ($(window).scrollTop() >= 80) {
            $(".ree-header").addClass('sticky');
        } else {
            $(".ree-header").removeClass("sticky");
        }
    }
    $(function () {
        $(window).scroll(updateScroll);
        updateScroll();
    });
})(jQuery);

class Main extends React.Component {
    render() {
        return (
            <main>
                <section className="home-hero slide-hero">
                    <div className="hero-owl owl-carousel">
                        <div className="slide owlbg11" data-background="images/svg/svg-bg1.svg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12 vcenter">
                                        <div className="hero-content-x">
                                            <h1 className="mb30" data-aos="fade-in" data-aos-delay="200"><span className="ree-tt">WEB-студия</span> полного цикла</h1>
                                            <p data-aos="fade-in" data-aos-delay="500">
                                                Создаем по-настоящему эффективные сайты: внедряем актуальные IT разработки, уделяем максимум внимания дизайну и юзабилити.
                                            </p>
                                            <button className="ree-btn  ree-btn-grdt1 mt40 mw-80" data-aos="fade-in"
                                                data-aos-delay="800">Получить консультацию</button>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 vcenter">
                                        <div className="sol-image m-mt30">
                                            <img src="images/svg/web-design.svg" alt="web development" className="img-fluid" data-aos="fade-in"
                                                data-aos-delay="400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="r-bg-i sec-pad digi-service">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="sec-heading text-center pera-block">
                                    <h2>Посмотрите, что мы можем <span className="ree-tt">Сделать</span> для <span className="ree-tt">Вас</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt30">
                            <div className="col-lg-3 col-sm-6 mt30" data-aos="fade-up" data-aos-delay="100">
                                <div className="ree-card bhv-tt">
                                    <div className="creative-img reebga"><img src="images/svg/webdesign.svg" alt="App Development"
                                        className="img-fluid" /></div>
                                    <div className="creative-cntnt">
                                        <h4 className="mb15"><a href="service-details.html">Разработка сайтов</a></h4>
                                        <p>Мы не просто создаем веб-сайты, мы создаем веб-сайты, которые ПРОДАЮТ</p>
                                        <a href="services.html" className="ree-card-link mt30">Узнать подробнее <i className="fas fa-arrow-right fa-btn"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mt30" data-aos="fade-up" data-aos-delay="400">
                                <div className="ree-card bhv-tt">
                                    <div className="creative-img reebgb"><img src="images/svg/appdesign.svg" alt="App Development"
                                        className="img-fluid" /></div>
                                    <div className="creative-cntnt">
                                        <h4 className="mb15"><a href="service-details.html">Поддержка сайтов</a></h4>
                                        <p>Мы не просто создаем веб-сайты, мы создаем веб-сайты, которые ПРОДАЮТ</p>
                                        <a href="services.html" className="ree-card-link mt30">Узнать подробнее<i className="fas fa-arrow-right fa-btn"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mt30" data-aos="fade-up" data-aos-delay="700">
                                <div className="ree-card bhv-tt">
                                    <div className="creative-img reebgc"><img src="images/svg/content.svg" alt="App Development" className="img-fluid" />
                                    </div>
                                    <div className="creative-cntnt">
                                        <h4 className="mb15"><a href="service-details.html">Разработка ПО</a></h4>
                                        <p>Мы не просто создаем веб-сайты, мы создаем веб-сайты, которые ПРОДАЮТ</p>
                                        <a href="services.html" className="ree-card-link mt30">Узнать подробнее<i className="fas fa-arrow-right fa-btn"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mt30" data-aos="fade-up" data-aos-delay="1000">
                                <div className="ree-card bhv-tt">
                                    <div className="creative-img reebgb"><img src="images/svg/appdesign.svg" alt="App Development" className="img-fluid" />
                                    </div>
                                    <div className="creative-cntnt">
                                        <h4 className="mb15"><a href="service-details.html">UX/UI дизайн</a></h4>
                                        <p>Мы не просто создаем веб-сайты, мы создаем веб-сайты, которые ПРОДАЮТ</p>
                                        <a href="services.html" className="ree-card-link mt30">Узнать подробнее<i className="fas fa-arrow-right fa-btn"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mt30" data-aos="fade-up" data-aos-delay="100">
                                <div className="ree-card bhv-tt">
                                    <div className="creative-img reebgd"><img src="images/svg/strategy.svg" alt="App Development"
                                        className="img-fluid" /></div>
                                    <div className="creative-cntnt">
                                        <h4 className="mb15"><a href="service-details.html">Маркетинг</a></h4>
                                        <p>Мы не просто создаем веб-сайты, мы создаем веб-сайты, которые ПРОДАЮТ</p>
                                        <a href="services.html" className="ree-card-link mt30">Узнать подробнее<i className="fas fa-arrow-right fa-btn"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="r-bg-a sec-pad">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-sm-8 vcenter">
                                <div class="heading-hz-btn">
                                    <h2>Наше <span class="ree-tt">Портфолио</span> </h2>
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-4 vcenter">
                                <div class="link-sol-header">
                                    <a href="portfolio.html" class="ree-card-link">Посмотреть все <i class="fas fa-arrow-right fa-btn"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="row mt60">
                            <div class="col-lg-12">
                                <div class="full-work-block  owl-carousel">
                                    <div class="fwb-main-x fwb-a">
                                        <div class="work-thumbnails">
                                            <a href="#"><img src="images/portfolio/portfolio-1.jpg" alt="portfolio reevan" class="img-fluid" /> </a>
                                        </div>
                                        <div class="work-details">
                                            <p class="mb10">UX, UI, Graphic Design</p>
                                            <h4><a href="#"> Creative and minimal clothing label design</a> </h4>
                                        </div>
                                    </div>
                                    <div class="fwb-main-x fwb-a">
                                        <div class="work-thumbnails">
                                            <a href="#">	<img src="images/portfolio/portfolio-2.jpg" alt="portfolio reevan" class="img-fluid" /> </a>
                                        </div>
                                        <div class="work-details">
                                            <p class="mb10">UX, UI, Graphic Design</p>
                                            <h4><a href="#">Creative business card design service </a></h4>
                                        </div>
                                    </div>
                                    <div class="fwb-main-x fwb-a">
                                        <div class="work-thumbnails">
                                            <a href="#">	<img src="images/portfolio/portfolio-3.jpg" alt="portfolio reevan" class="img-fluid" /> </a>
                                        </div>
                                        <div class="work-details">
                                            <p class="mb10">UX, UI, Graphic Design</p>
                                            <h4><a href="#"> Furniture ios app kit design development </a></h4>
                                        </div>
                                    </div>
                                    <div class="fwb-main-x fwb-a">
                                        <div class="work-thumbnails">
                                            <a href="#">	<img src="images/portfolio/portfolio-2.jpg" alt="portfolio reevan" class="img-fluid" /> </a>
                                        </div>
                                        <div class="work-details">
                                            <p class="mb10">UX, UI, Graphic Design</p>
                                            <h4><a href="#"> Furniture ios app kit design development </a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class = "r-bg-x zup sec-pad">
                    <div class = "container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="sec-heading text-center">
                                    <h2><span class="ree-text rt40">Технологии</span>с которыми мы работаем</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center mt30">
                            <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div class = "icon-with-title">
                                    <a href="#">
                                        <div class = "iwt-icon">
                                            <img src="images/icons/apple.svg" alt="Apple"></img>
                                        </div>
                                        <div class = "iwt-content">
                                            <p>IOS</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class = "icon-with-title">
                                    <a href="#">
                                        <div class = "iwt-icon">
                                            <img src="images/icons/android.svg" alt="Android"></img>
                                        </div>
                                        <div class = "iwt-content">
                                            <p>Android</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class = "icon-with-title">
                                    <a href="#">
                                        <div class = "iwt-icon">
                                            <img src="images/icons/flutterio-icon.svg" alt="Flutter"></img>
                                        </div>
                                        <div class = "iwt-content">
                                            <p>Flutter</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class = "icon-with-title">
                                    <a href="#">
                                        <div class = "iwt-icon">
                                            <img src="images/icons/java.svg" alt="JAVA"></img>
                                        </div>
                                        <div class = "iwt-content">
                                            <p>JAVA</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class = "icon-with-title">
                                    <a href="#">
                                        <div class = "iwt-icon">
                                            <img src="images/icons/physics.svg" alt="React Native"></img>
                                        </div>
                                        <div class = "iwt-content">
                                            <p>React Native</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class = "icon-with-title">
                                    <a href="#">
                                        <div class = "iwt-icon">
                                            <img src="images/icons/apple.svg" alt="Apple"></img>
                                        </div>
                                        <div class = "iwt-content">
                                            <p>Python</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class = "icon-with-title">
                                    <a href="#">
                                        <div class = "iwt-icon">
                                            <img src="images/icons/java.svg" alt="JAVA"></img>
                                        </div>
                                        <div class = "iwt-content">
                                            <p>JAVA</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class = "icon-with-title">
                                    <a href="#">
                                        <div class = "iwt-icon">
                                            <img src="images/icons/swift.svg" alt="Swift"></img>
                                        </div>
                                        <div class = "iwt-content">
                                            <p>Swift</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class = "icon-with-title">
                                    <a href="#">
                                        <div class = "iwt-icon">
                                            <img src="images/icons/pwa.svg" alt="PWA"></img>
                                        </div>
                                        <div class = "iwt-content">
                                            <p>PWA</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="home-contact pb120"  /* data-background="images/others/office.jpg" */ /* style={"background-image: url(images/others/office.jpg);"} */ /* style="background-image: url(images/others/office.jpg);" */>
                    <div class = "container">
                        <div class = "row zap flx-end">
                            <div class = "col-right-a">
                                <div class="sec-heading fourc-up-a">
                                    <span class="sub-heading mb15">Inquiry</span>
                                    <h2>Let’s Get in<span class="ree-text rt40">Touch</span></h2>
                                </div>
                                <div class="home-contact-block">
                                    <div class = "contact-infos">
                                        <div class="c-infot">
                                            <span>Sales Department</span>
                                            <a href="tel:+911234567890">
                                                <i class="fas fa-phone-alt"></i>
                                                +91 123 4567 890
                                            </a>
                                        </div>
                                        <div class="c-infot">
                                            <span>HR Department</span>
                                            <a href="tel:+911234567890">
                                                <i class="fas fa-phone-alt"></i>
                                                +91 123 4567 890
                                            </a>
                                        </div>
                                    </div>
                                    <div class = "contact-infos mt35">
                                        <div class="c-infot">
                                            <span>Sales Department</span>
                                            <a href="mailto:reevan@abc.com">
                                                <i class="fas fa-envelope"></i>
                                                reevan@abc.com
                                            </a>
                                        </div>
                                        <div class="c-infot">
                                            <span>Connect on Skype</span>
                                            <a href="skype:reevan.company">
                                                <i class="fab fa-skype"></i>
                                                reevan.company
                                            </a>
                                        </div>
                                    </div>
                                    <div class="live-review- mt60">
                                        <span>Read Our Customers Feedback</span>
                                        <div class="livrve">
                                            <a href="#"><img src="images/icons/google-logo.svg"></img></a>
                                            <a href="#"><img src="images/icons/hubspot-logo.svg"></img></a>
                                            <a href="#"><img src="images/icons/trustpilot-logo.svg"></img></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class = "col-right-b">
                                <div class="form-contact-hom fourc-up-b">
                                    <div class = "form-block">
                                        <div class = "form-head">
                                            <h3>Please fill in the form below.</h3>
                                        </div>
                                        <div class = "form-body">
                                            <form action="#" method="post" name="feedback-form">
                                                <div class="fieldsets row">
                                                    <div class="col-md-6">
                                                        <input type="text" placeholder="Full Name" name="name" ></input>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <input type="email" placeholder="Email Address" name="email" ></input>
                                                    </div>
                                                </div>
                                                <div class="fieldsets row">
                                                    <div class="col-md-6">
                                                        <input type="number" placeholder="Contact Number" name="phone" ></input>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <input type="text" placeholder="Skype" name="skype" ></input>
                                                    </div>
                                                </div>
                                                <div class="fieldsets row">
                                                    <div class="col-md-6">
                                                        <input type="text" placeholder="Subject" name="subject" ></input>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <select>
                                                            <option>interested in</option>
                                                            <option>Web Design</option>
                                                            <option>Graphic Design</option>
                                                            <option>App Development</option>
                                                            <option>E-commerce Development</option>
                                                            <option>Digital Marketing</option>
                                                            <option>Business Growth</option>
                                                            <option>Business Startup</option>
                                                            <option>Other...</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="fieldsets">
                                                    <textarea placeholder="Message" name = "message"></textarea>
                                                </div>
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck" name="example1" checked="checked"></input>
                                                    <label class="custom-control-label label-f-form" for="customCheck">I agree to the <a href="#">Terms & Conditions</a>of Reevan</label>
                                                </div>
                                                <div class="fieldsets mt20">
                                                    <button type="submit" name="submit" class="ree-btn  ree-btn-grdt1 w-100">
                                                    Send your inquiry 
                                                        <i class="fas fa-arrow-right fa-btn"></i>
                                                    </button>
                                                </div>
                                                <p class = "trm">
                                                    <i class="fas fa-lock"></i>
                                                    We hate spam, and we respect your privacy.
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </main>
        )
    }
}


export default Main;