import "../styles/Footer.css";
import { Link } from 'react-router-dom';

const Footer = ()=>{
    const smoothScroll = (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      };
    
    return(<>
            <div className="Footerpage">
            <hr />
            <div className="Footerupsec">
                <div className="Footersection">
                    <ul>
                        <li><Link to="/">Help</Link></li>
                        <li><Link to="/">FAQ</Link></li>
                        <li><Link to="/">About</Link></li>
                    </ul>
                </div>
                <div className="Footersection">
                    <ul>
                        <li><Link to="/">Services</Link></li>
                        <li><Link to="/">Terms & Condition</Link></li>
                        <li><Link to="/">Features</Link></li>
                    </ul>
                </div>
                <div className="Footersection">
                    <ul>
                        <li><a href="https://www.instagram.com/gruble.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram</a></li>
                        <li><a href="parshvapatel211@gmail.com">Email</a></li>
                        <li>Twitter</li>
                    </ul>
                </div>
                </div>
                <hr />
                <div className="Footerdownsec">
                    <h3 id="blu">TetraThread</h3>
                    <h3>© [2024] TetraThread. All Rights Reserved.</h3>
                </div>
                <hr />
            </div>
    </>);
}
export default Footer;