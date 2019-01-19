import React from 'react';
import './cover.scss';

import logo from './images/logo.svg';
import puppiesOGV from './video/puppiness.ogv';
import puppiesMP4 from './video/puppiness.mp4';
import puppiesWEBM from './video/puppiness.webm';

const Cover = () => (


    <div class="yta_Cover">
        <img class="yta_Cover-logo" src="./images/logo.svg" alt="Hogares para nuestros amigos"/>
        <video autoPlay muted="" loop="" class="yta_Cover-video">
          <source src={puppiesOGV} type="video/ogg"/>
          <source src="./video/puppiness.webm" type="video/webm"/>
          <source src="./video/puppiness.mp4" type="video/mp4"/>
        </video>
      </div>
);

export default Cover;