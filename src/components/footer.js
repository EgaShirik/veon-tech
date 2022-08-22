import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <footer class="footer-a">
                <div class="f-container">
                    <div class="fc-icon">
                        <img class="f-img" src="images/icons/logo-veon-tech.png"></img>
                        <p class="veon-consalt">ООО "Веон-консалт"</p>
                        <p>УНП 193082231</p>
                    </div>
                    <div class="fc-info">
                        <h3 class="contacts">КОНТАКТЫ</h3>
                        <ul>
                            <li><i class="fas fa-phone-alt"></i>  +375 29 717-73-52</li>
                            <li><i class="fas fa-envelope"></i>  sales@veon-tech.by</li>
                            <li><i  class="fas fa-map-marker-alt" ></i>  220068, г. Минск, ул. Орловская, 40а, офис 40-1</li>
                            <li><i class="far fa-calendar-alt"></i>  С понедельника по пятницу​</li>
                        </ul>
                    </div>
                </div>
                <hr></hr>
                <div class="copyright">
                    <p class="copyright-first">Copyright 2020 All rights reserved</p>
                    <p class="copyright-second">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</p>
                </div>
                
            </footer>
        )
    }
}

export default Footer;