import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";

const Header = (props) => {

    return (

        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`form-check mx-2 form-switch text-${
                props.mode === "light"?"dark":"light"
            }`}>
                <input onClick={props.toggleMode} className="form-check-input mx-10" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label">{props.modeText}</label>
            </div>
        </nav>
    );
}

Header.propTypes = { title: PropTypes.string }

export default Header;