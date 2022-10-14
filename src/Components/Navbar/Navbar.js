import classes from './Navbar.module.css';

const NavBar = () => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${classes.nav}`}>
        <div className="container-fluid">
          <img
            src="assets/shield.png"
            alt=""
            className="d-inline-block align-text-top"
          />

          <a href="/google.com" className="navbar-brand">
            &nbsp;LawPlus
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href=".">
                  Home
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item" id="profilepicicon">
                <img
                  alt="profile pic"
                  src="assets/profilepic.png"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className={classes['profile-picturer']}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
