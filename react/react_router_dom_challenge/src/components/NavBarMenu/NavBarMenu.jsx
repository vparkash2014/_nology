import React from "react";

import { Navbar, Nav } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'


const NavBarMenu = ( {pages, pageNames} ) => {

    return( 
        <Navbar bg="dark" variant="dark">
            <LinkContainer to="/">
                <Navbar.Brand>React-Bootstrap</Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                {pages.map( (page, ind) => 
                    <LinkContainer to={page} key={page}> 
                        <Nav.Link >{pageNames[ind]}</Nav.Link> 
                    </LinkContainer>
                )}
            </Navbar.Collapse>
        </Navbar>

        // <nav>
        //     {pages.map((page, ind) =>  <p key={page} > <Link key={page} to={page}>{pageNames[ind]}</Link></p>)}
        // </nav>
    );
}

export default NavBarMenu;