import React from 'react';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Offcanvas,
  Form,
  FormControl,
  OverlayTrigger,
  Popover,
} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

const WelCome = () => {
  return <h1>Chào mừng bạn đến với Shop</h1>;
};

// eslint-disable-next-line no-unused-vars
const SectionSearch = () => {
  return (
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
};

const PopoverSearch = () => (
  <Popover id="popover-basic">
    <Popover.Body>
      <SectionSearch />
    </Popover.Body>
  </Popover>
);

const Nvabar = () => {
  //   return (
  //     <Row className="nvarbar-com-section">
  //       <Col>
  //         <Button variant="outline-light">
  //           <Icon.List></Icon.List>
  //         </Button>
  //         <h1>NameShop</h1>
  //       </Col>
  //       <Col>
  //         <Button variant="outline-light">
  //           <Icon.SearchHeart></Icon.SearchHeart>
  //         </Button>
  //       </Col>
  //       <Col>
  //         <Button variant="outline-light">
  //           <Icon.BagHeart></Icon.BagHeart>
  //         </Button>
  //       </Col>
  //     </Row>
  //   );

  return (
    <Navbar key="sm" bg="light" expand="sm" className="mb-3">
      <Container fluid>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
        <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
              Navbar Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown
                title="Dropdown"
                id={`offcanvasNavbarDropdown-expand-sm`}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Nav className="justify-content-center flex-row">
          <Nav.Item>
            <OverlayTrigger
              trigger="click"
              overlay={PopoverSearch()}
              placement="bottom-end"
            >
              <Button variant="outline-light">
                <Icon.SearchHeart></Icon.SearchHeart>
              </Button>
            </OverlayTrigger>
          </Nav.Item>
          <Nav.Item>
            <Button variant="outline-light">
              <Icon.BagHeart></Icon.BagHeart>
            </Button>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export const Header = {
  WelCome,
  Nvabar,
};
