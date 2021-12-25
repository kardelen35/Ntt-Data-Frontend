import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import './header.css'

function Header() {

  return (


    <div >
      <Navbar bg="dark" variant="dark">
        <Container className='d-flex justify-content-left align-items-left'>
          <Navbar.Brand href="#home" style={{ paddingLeft: "0px" }}>
            <img
              style={{
                width: "76px",
                height: "35px",
                marginRight: "20px"
              }}
              src="https://nttdata-solutions.com/tr/wp-content/themes/itelligence/img/product/2-ntt-Square.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/add-user">  <span style={{color:"#4e7cb4",fontWeight:"bold"}}> <span className="fs-5 fw-bold">+</span> ADD USER</span> </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>

  )
}
{/* <div className='add'>
<button className='btn btn-primary' onClick={addUser}>Add User</button>
</div> */}


export default Header
