
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-portfolio-accent">Port</span>folio
            </h3>
            <p className="text-gray-300 mb-4">
              A showcase of my skills, projects, and professional journey.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-portfolio-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-gray-300 hover:text-portfolio-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/#projects" className="text-gray-300 hover:text-portfolio-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-portfolio-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-gray-300 hover:text-portfolio-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-portfolio-accent transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-portfolio-accent transition-colors"
              >
                LinkedIn
              </a>
              {/* <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-portfolio-accent transition-colors"
              >
                Twitter
              </a> */}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
