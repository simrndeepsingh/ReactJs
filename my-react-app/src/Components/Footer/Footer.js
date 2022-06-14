import React from 'react';
import List from '../List/List';
import Row from '../Row/Row';
import MaxContainer from '../MaxContainer/MaxContainer';


function Footer() {
  return (
    <footer className="footer">
    <MaxContainer>
        <Row>
            <div className="footer-col">
                <h4>About</h4>
                <ul>
                    <List><a href="#">About us</a></List>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Follow Me</h4>
                <div className="social-links">
                    <a href="#" class="text-decoration-none"><span className="fab fa-facebook-f">F</span></a>
                    <a href="#" class="text-decoration-none"><span className="fab fa-twitter">T</span></a>
                    <a href="#" class="text-decoration-none"><span className="fab fa-instagram">I</span></a>
                    <a href="#" class="text-decoration-none"><span className="fab fa-linkedin-in">L</span></a>
                </div>
            </div>
        </Row>
    </MaxContainer>
</footer>
  )
}

export default Footer;