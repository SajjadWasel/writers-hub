import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            {/* Bootstrap Navber */}
            <div className="header">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top mt-3 mx-4">
                    <div className="container-fluid">
                        <a className="navbar-brand d-flex align-items-center" href="/home">
                            {/* Navber Logo */}
                            <img className="me-1 bg-light rounded-circle navber-logo border border-2" src="https://lh3.googleusercontent.com/-qyTTv9df2WA/YW6oqqvlDsI/AAAAAAAAANQ/daWb3rz-d0wmIl-x44eMiwcFtoVqLtVPwCLcBGAsYHQ/d36b8c7845a349b1bb5519646beab851%2B%25281%2529.png" alt="" width="50" height="50"/>
                            <h4 className='mt-1'>Writers Hub</h4>
                        </a>
                        {/* Navber Collapse Button */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* Navigation Items */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bolder fs-6">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/home">Product</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/home">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/home">Cart</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/home">Contact</a>
                                </li>
                               
                            </ul>
                            {/* Cart Image */}
                            <div className='cart-image'>
                                
                                <img src="https://media.istockphoto.com/vectors/homeping-cart-icon-isolated-on-white-background-vector-id1206806317?k=20&m=1206806317&s=170667a&w=0&h=kEh5VLsTHukWc7xf2BvUs8ssqS_d7vkK0-xU3MDpO7s=" alt=""/>


                            </div>
                        </div>
                    </div>
                </nav>                
            </div>

        </div>
    );
};

export default Header;