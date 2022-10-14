const NavBar = () => {
    return <div>

        <nav
            className="navbar navbar-expand-lg"
            style={{
                backgroundColor: "#1D1D27",
                boxShadow: "0px 8px 8px -6px rgba(0,0,0,.25)"
            }}
        >
            <div className="container-fluid">
                <img
                    src="assets/shield.png"
                    alt=""
                    width={26}
                    height={26}
                    className="d-inline-block align-text-top"
                />
                <a className="navbar-brand" style={{ color: "#FC76A1", fontWeight: 700 }}>
                    {" "}
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
                            <a className="nav-link active" aria-current="page" href="#">
                                Home
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item" id="profilepicicon">
                            <img
                                src="assets/profilepic.png"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                style={{ margin: "0.2vw", height: 35, width: 35 }}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>



    </div>
}

export default NavBar;