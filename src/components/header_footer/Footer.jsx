import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_black" style={{ marginTop: '100px' }}>
            <Fade delay={500}>
                <div className="play-store">
                <a target="_blank"  href=""> <img width="100" height="100" src="../../../public/assets/get-it-on-google-play-vector.png"/></a>
                <a target="_blank"   href=""> <img width="100" height="100" src="../../../public/assets/download-on-the-app-store-badge.png"></img> </a>

                </div>
               <div className="footer_copyright">
                    <p>Copyright © 2020
                <a target="_blank" href=""> E-Preparation</a>. All Rights Reserved</p>

                </div>
            </Fade>
        </footer>
    );
};

export default Footer;