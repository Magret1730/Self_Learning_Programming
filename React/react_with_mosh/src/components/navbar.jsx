// import React, { Component } from 'react';

// const NavBar = (props) => {
//     return (
//             <nav className="navbar bg-body-tertiary">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="www.google.com">Navbar
//                         <span className='badge bg-success'>{props.totalCounters}</span>
//                     </a>
//                 </div>
//             </nav>
//         );
// }

const NavBar = ({ totalCounters }) => {
    return (
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="www.google.com">Navbar
                        <span className='badge bg-success'>{totalCounters}</span>
                    </a>
                </div>
            </nav>
        );
}

export default NavBar;