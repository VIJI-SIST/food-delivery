import React from "react";

const Footer = () => {
    return (
        <footer
            id="contact"
            className="bg-primary text-white"
            style={{ "--bs-bg-opacity": 0.8, display: "flex", flexDirection: "column", alignItems: "center", padding: "2rem" }}
            data-aos="fade-up"
        >
            <div className="container text-center">
                <h2 className="tracking-in-contract">Get In Touch</h2>
                <p>Order your favorite meals with us!</p>
            </div>

            <div className="social-links">
                <a href="https://www.instagram.com/yourpage" className="social-icon" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>

                <a href="tel:+1234567890" className="social-icon">
                    <i className="fas fa-phone"></i>
                </a>

                <a href="https://www.linkedin.com/company/yourpage" className="social-icon" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>

                <a href="https://wa.me/1234567890" className="social-icon" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp"></i>
                </a>
            </div>

            <div className="footer-links">
                <a href="/about">About Us</a>
                <a href="/faq">FAQ</a>
                <a href="/terms">Terms & Conditions</a>
                <a href="/privacy">Privacy Policy</a>
            </div>

            <div className="footer-info text-center">
                <p>&copy; {new Date().getFullYear()} Foodie Express. All rights reserved.</p>
                <a href="mailto:support@foodieexpress.com" className="email-link">support@foodieexpress.com</a>
            </div>
        </footer>
    );
};

export default Footer;
