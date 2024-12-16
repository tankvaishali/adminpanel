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
                <h4 className="text-white mb-4 fs-1 d-flex align-content-center align-items-center">
                    <div><MdAdminPanelSettings  />
                        </div> <div className="fs-4 pt-2">

                    Tharayil Power
                    </div>
                </h4>
                <div className="sidebar-header  mb-4">
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
                <Offcanvas.Header closeButton className="mt-3 mx-2">
                    <Offcanvas.Title className="text-white fs-4">
                        <MdAdminPanelSettings className="fs-1" /> Admin
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="mx-2">
                    <div className="sidebar-header d-flex align-items-center mb-4">
                        <img
                            src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/avatar_002.png"
                            alt=""
                            className="rounded-circle sidebar-image me-3 border border-2 border-white object-fit-cover"
                        />
                        <div>
                            <h5 className="text-white my-2">Welcome,</h5>
                            <h6 className="text-white">John Doe</h6>
                        </div>
                    </div>
                    <Nav className="flex-column p-2">
                        <Nav.Item>
                            <Link to="/" className={`text-decoration-none nav-item text-white`} onClick={handleLinkClick}>
                                <FaHome className="me-2" /> <span className="sidebar_menu">Dashboard</span>
                            </Link>
                        </Nav.Item>
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
                        {/* <Nav.Item className="my-3">
                            <Link to="/" className={`text-decoration-none nav-item text-white ${isActiveLink('/')}`} onClick={handleLinkClick}>
                                <FaCog className="me-2" /> <span className="sidebar_menu">Settings</span>
                            </Link>
                        </Nav.Item> */}
                    </Nav>
                </Offcanvas.Body>
                <div className="logout-btn ms-3">
                    <button type="button" className="gradient-btn border-0 text-white fw-bold rounded" onClick={logout}>Log Out</button>
                </div>
            </Offcanvas>

            {/* Hamburger icon for smaller screens */}
            <div
                className="d-md-none mb-3 position-fixed top-0 start-50 translate-middle-x p-2 z-index-999 w-100 bg-white rounded-3"
                onClick={() => setShowSidebar(true)}
            >
                <TiThMenu
                    className="text-dark bg-secondary fs-1 p-1 rounded-2"
                    style={{ width: "35px", height: "35px" }}
                />
            </div>
        </>
    );
}

export default Sidebar;