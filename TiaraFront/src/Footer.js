import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className = "footer">
            <div className = "footer-top">
                <div className = "social-media">
                    <div className = "social-icons">
                        <a href = "#"><i className = "fab fa-facebook-f"></i></a>
                        <a href = "#"><i className = "fab fa-youtube"></i></a>
                        <a href = "#"><i className = "fab  fa-instagram"></i></a>
                    </div>
                    <p>Follow Us on Social Media</p>
                </div>
                <div className = "footer-links">
                    <div className = "footer-col">
                        <h4>Service</h4>
                        <ul>
                            <li><a href = "#">Music & Performance</a></li>
                            <li><a href = "#">Party Essentials</a></li>
                            <li><a href = "#">Interactive Experience</a></li>
                        </ul>
                    </div>
                    <div className = "footer-col">
                        <h4>Customer Service</h4>
                        <ul>
                            <li><a href = "#">Terms of Service</a></li>
                            <li><a href = "#">Privacy and Policy</a></li>
                        </ul>
                    </div>
                    <div className = "footer-col">
                        <h4>Are You A Vendor?</h4>
                        <ul>
                            <li><a href = "#">Accessibility</a></li>
                            <li><a href = "#">About Us</a></li>   
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className = "footer-bottom">
                <p>© 2024 MiTiara</p>
            </div>
        </footer>
    );
};

export default Footer;