import "./Footer.css";

export default function Footer() {
    return (
        <div className="footer-section">
            <div className="inner-text-section">
                <div className="copyright-name">
				    Copyright © {new Date().getFullYear()} Harsimran Singh.
                </div>
                <div className="links-section">
					<a target="_blank" href="mailto:harsimran.singh0270@gmail.com">Email</a>&nbsp;//&nbsp;
					<a target="_blank" href="https://www.linkedin.com/in/harsimran-singh96/">LinkedIn</a>&nbsp;//&nbsp;
					<a target="_blank" href="https://twitter.com/simransingh1308">Twitter</a>
				</div>
            </div>

        </div>
)}