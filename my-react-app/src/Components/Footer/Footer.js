import React from 'react';
import List from '../List/List';
import Row from '../Row/Row';
import MaxContainer from '../MaxContainer/MaxContainer';
import Icons from '../Icons/Icons';
import Cta from '../CTA/Cta';


function Footer() {
  return (
    <footer className="footer">
    <MaxContainer>
        <Row>
            <div className="footer-col">
            <h4>Sign Up</h4>
                <Cta ctaLabel="Sign Up" ctaType='link' ctaStyle="text-white bg-default-blue rounded px-5 py-3 text-decoration-none" />
            </div>
            <div className="footer-col">
                <h4>About me</h4>
                <ul>
                    <List><a href="/">About us</a></List>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Follow Me</h4>
                <div className="social-links">
                    <a href="/" className="text-decoration-none bg-default-blue"><Icons iconType="bi bi-facebook" /></a>
                    <a href="/" className="text-decoration-none bg-default-blue"><Icons iconType="bi bi-twitter" /></a>
                    <a href="/" className="text-decoration-none bg-default-blue"><Icons iconType="bi bi-instagram" /></a>
                    <a href="/" className="text-decoration-none bg-default-blue"><Icons iconType="bi bi-linkedin" /></a>
                </div>
            </div>
        </Row>
    </MaxContainer>
</footer>
  )
}

export default Footer;