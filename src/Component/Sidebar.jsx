import React, { useState } from "react";
import { Nav, Offcanvas } from "react-bootstrap";
import { FaHome, FaPlusCircle, FaList } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";

function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleLinkClick = () => {
        setShowSidebar(false);
    };

    const logout = () => {
        localStorage.removeItem("login")
        window.location.reload();
    }

    return (
        <>
            {/* Sidebar content for medium and larger screens */}
            <div className="sidebar d-flex flex-column p-4 d-none d-md-block">
                <div className="sidebar-header  my-4">
                    <img
                        src={require("../assets/Image/logo.png")}
                        alt=""
                        className="img-fluid   object-fit-cover"
                    />

                </div>
                <Nav className="flex-column p-2 pt-0">

                    <Nav.Item className="my-3">
                        <Link to="/" className={`text-decoration-none nav-item text-white`} onClick={handleLinkClick}>
                            <FaPlusCircle className="me-2" /> <span className="sidebar_menu">Add Data</span>
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/manage-data" className={`text-decoration-none nav-item text-white`} onClick={handleLinkClick}>
                            <FaList className="me-2" /> <span className="sidebar_menu">Manage Data</span>
                        </Link>
                    </Nav.Item>

                </Nav>

                <div className="logout-btn">
                    <button type="button" className="gradient-btn border-0 text-white fw-bold rounded" onClick={logout}>Log Out</button>
                </div>

            </div>

            {/* Offcanvas for smaller screens */}
            <Offcanvas
                show={showSidebar}
                onHide={() => setShowSidebar(false)}
                className="sidebar"
            >
                <Offcanvas.Header closeButton className="mt-3 mx-2"></Offcanvas.Header>
                <Offcanvas.Body className="mx-2">
                    <div className="sidebar-header  mb-4">
                        <img
                            src={require("../assets/Image/logo.png")}
                            alt=""
                            className="img-fluid object-fit-cover"
                        />

                    </div>
                    <Nav className="flex-column p-2">
                        <Nav.Item className="my-3">
                            <Link to="/" className={`text-decoration-none nav-item text-white`} onClick={handleLinkClick}>
                                <FaPlusCircle className="me-2" /> <span className="sidebar_menu">Add Data</span>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/manage-data" className={`text-decoration-none nav-item text-white `} onClick={handleLinkClick}>
                                <FaList className="me-2" /> <span className="sidebar_menu">Manage Data</span>
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>

            {/* Hamburger icon for smaller screens */}
            <div className="d-md-none mb-3 position-fixed top-0 start-50 translate-middle-x p-2 z-index-999 w-100 bg-white rounded-3 d-flex justify-content-between align-items-center">
                <TiThMenu
                    className="text-dark bg-secondary fs-1 p-1 rounded-2"
                    style={{ width: "35px", height: "35px" }}
                    onClick={() => setShowSidebar(true)}
                />
                <button
                    type="button"
                    className="gradient-btn border-0 text-white fw-bold rounded px-3 py-2"
                    onClick={logout}
                >
                    Log Out
                </button>
            </div>
        </>
    );
}

export default Sidebar;