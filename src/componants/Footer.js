import React from "react";
import './Footer.css'
function Footer() {
  return (
    <>
      <footer class="footer">
    <div class="container">
    <p>&copy; 2024 Your Company. All rights reserved.</p>
        <div class="footer-items">
            <div class="footer-item">
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="footer-item">
                <h3>Contact Us</h3>
                <p>Email: solavsujit.com</p>
                <p>Phone: 1234567890</p>
            </div>
            <div class="footer-item">
                <h3>Follow Us</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
        </div>
    </div>
</footer>

    </>
  );
}

export default Footer;
