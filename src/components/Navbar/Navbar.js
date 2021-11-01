import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar,Container,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import logo from '../../assets/img/logo.png'


export default function NavbarComponent(props) {
    // console.log(props)
    return (
        <div>
            <Navbar  expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"><img src={logo} width="100px"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
          <Link to="/">Home</Link>
         
    
          <Link to="/Movies">Movies</Link>
        
      </Nav>
      <Form className="d-flex">
       
        
        
      </Form>
      <div className="" >
              <svg
                    xmlns="http://www.w3.org/2000/svg"
                    type="button"
                    width="60"
                    height="60"
                    fill="red"
                    class="bi bi-heart-fill  "
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    />
                  </svg></div>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}
