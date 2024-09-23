import { NavLink, Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">Footer Content</h5>
          <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
        </div>
        <div className="col l4 offset-l2 s12">
          <h5 className="white-text">Links</h5>
          <ul>
            <li><NavLink className="grey-text text-lighten-3" to="#!">Link 1</NavLink></li>
            <li><NavLink className="grey-text text-lighten-3" to="#!">Link 2</NavLink></li>
            <li><NavLink className="grey-text text-lighten-3" to="#!">Link 3</NavLink></li>
            <li><NavLink className="grey-text text-lighten-3" to="#!">Link 4</NavLink></li>
          </ul>
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