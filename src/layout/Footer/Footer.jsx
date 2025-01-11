import { NavLink, Link } from "react-router-dom";
import "./Footer.scss"

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-contacts">
            <div className="cols">
              <div className="col">
                <h3>
                  <NavLink to="/">MakeUp</NavLink>
                </h3>
                <ul>
                  <NavLink to="#!">Who is MakeUp</NavLink>
                  <NavLink to="#!">MakeUP App</NavLink>
                  <NavLink to="#!">Promotional gifts</NavLink>
                </ul>
              </div>
              <div className="col">
                <h3>
                  <NavLink to="/">Customer service</NavLink>
                </h3>
                <ul>
                  <NavLink to="#!">About delivery</NavLink>
                  <NavLink to="#!">Discover our Gifts Cards</NavLink>
                  <NavLink to="#!">Glossary</NavLink>
                  <NavLink to="#!">Questions & Answers</NavLink>
                </ul>
              </div>
              <div className="col">
                <h3>
                  <NavLink to="/">Service</NavLink>
                </h3>
                <ul>
                  <NavLink to="#!">Bonuses</NavLink>
                  <NavLink to="#!">Gift certificate</NavLink>
                  <NavLink to="#!">MakeUp return</NavLink>
                </ul>
              </div>
            </div>            
          </div>
          <div className="footer-nav">
            <div className="footer-nav_phones"></div>
            <div className="footer-nav_worktime"></div>
            <div className="footer-nav_callback"></div>
            <div className="cooperation"></div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <Link className="grey-text text-lighten-4 right" to="#!">More Links</Link>
        </div>
      </div>
    </footer>
  );
}

export { Footer };