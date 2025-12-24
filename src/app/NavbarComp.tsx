"use client";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import { Button } from 'react-bootstrap';

function SocialMediaLinks() {
return (
    <div className='d-flex align-items-center gap-3'>
      <Button variant="outline-secondary" className='flex-shrink-0'>Book Now</Button>
      <i className="bi bi-facebook fs-1"></i>
      <i className="bi bi-instagram fs-1"></i>
      <i className="bi bi-twitter fs-2"></i>
      <i className="bi bi-link fs-2"></i>
    </div>
  );
}
export default function NavbarComp() {
  return (
 <div className='sticky-top bg-light'>
  <Row>
    <Col></Col>
    <Col className='justify-content-center d-flex'>
     <div className='mt-3'>
        <Image src="/images/pccLogo.png" alt="Logo" width={80} height={80} />
      </div>
    </Col>
    <Col>
      <div className='d-none d-xl-flex justify-content-end align-items-center mr-3'>
        <SocialMediaLinks />
      </div>
    </Col>
  </Row>
  <div className='d-flex align-items-center justify-content-between mb-3'>

  </div>
  
   <Navbar expand="xl" className="justify-content-between general">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100 justify-content-between">
              <Nav.Link className="custom-nav" href="/">Rules of the Cat Cafe</Nav.Link>
              <Nav.Link className="custom-nav" href="/how-to-book">How To Book</Nav.Link>
              <Nav.Link className="custom-nav" href="/faq">FAQ</Nav.Link>
              <Nav.Link className="custom-nav" href="/events">Events</Nav.Link>
              <Nav.Link className="custom-nav" href="/parties">Parties and Private Events</Nav.Link>
              <Nav.Link className="custom-nav" href="/cafe-offerings">Cafe Offerings</Nav.Link>
              <Nav.Link className="custom-nav" href="/adoptable-cats">Adoptable Cats</Nav.Link>
              <Nav.Link className="custom-nav" href="/resident-kitties">Meet Our Resident Kitties</Nav.Link>
              <Nav.Link className="custom-nav" href="/team">Meet Our Team</Nav.Link>
              <Nav.Link className="custom-nav" href="/volunteer">Volunteer</Nav.Link>
              <Nav.Link className="custom-nav" href="/donate">Donate</Nav.Link>
              <Nav.Link className="custom-nav" href="/found-or-surrender">Found or Cat Surrender</Nav.Link>
              <div className='d-xl-none mt-3'>
                <SocialMediaLinks />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
 </div>
  );
}