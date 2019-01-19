import React from 'react';
import SocialNetwork from './../social-network/SocialNetwork';
import './footer.scss';

const Footer = () => (
    <footer>
        <ul class="yta_Footer-socialNetwork">
            <li class="yta_Footer-socialNetwork-item">
                <a href="#">
                    <div class="icon icon--ei-sc-facebook icon--m "></div>
                <span class="yta_u-onlyRead">facebook</span>
          </a>
        </li>
      </ul>
    <p class="yta_Footer-copyright">Copyright © 2018 Yo te adopto.</p>
    </footer >
)

export default Footer;