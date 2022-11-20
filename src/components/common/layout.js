import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faDedent, faIndent } from '@fortawesome/free-solid-svg-icons'


const Layout = ({ children }) => {
    const [collapse, setCollapse] = useState(false)
    const toggle = (event) => {
        setCollapse(!collapse);
        event.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
        localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
    }

    return (
        <div className="d-flex" id="wrapper">

            <div className="border-end bg-white" id="sidebar-wrapper">
                <div className="sidebar-heading border-bottom bg-light">Asad Z.</div>
                <div className="list-group list-group-flush">
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to={'/dashboard'}>Summary</Link>
                    <Link className="list-group-item list-group-item-action list-group-item-light p-3" to={'/query'}>Send Your Query</Link>
                </div>
            </div>

            <div id="page-content-wrapper">

                <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <div className="container-fluid">
                        <button className="btn btn-primary" id="sidebarToggle" onClick={(e) => { toggle(e) }}>{!collapse ? <FontAwesomeIcon icon={faDedent} /> : <FontAwesomeIcon icon={faIndent} spin={true} />}</button>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><b>Profile</b></a>
                                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#!">My profile</a>
                                        <a className="dropdown-item" href="#!">Settings</a>
                                        <a className="dropdown-item" href="#!">Queries</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#!">My blogs</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container-fluid">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;