import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Button, Row, Col, Card, Carousel } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Pasek nawigacyjny */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </Navbar.Brand>
          <Navbar.Brand href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Suwak */}
      <Carousel className="mt-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://arctic-council.org/site/assets/files/4917/lavvu-at-sunset-590174876_2990x2052.1200x400.jpeg" // Зображення 1
            alt="Slide 1"
          />
          <Carousel.Caption>
            <h3>Pierwszy slajd</h3>
            <p>Opis pierwszego slajdu.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.auris-en-oisans.co.uk/wp-content/uploads/sites/3/2020/01/ahgds-06-1200x400.jpg" // Зображення 2
            alt="Slide 2"
          />
          <Carousel.Caption>
            <h3>Drugi slajd</h3>
            <p>Opis drugiego slajdu.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.zacekfoto.ee/wp-content/uploads/images/pilt2046-1200x400.jpg" // Зображення 3
            alt="Slide 3"
          />
          <Carousel.Caption>
            <h3>Trzeci slajd</h3>
            <p>Opis trzeciego slajdu.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Główna zawartość */}
      <Container className="mt-5">
        <h1 className="text-center">Vite + React + Bootstrap</h1>

        {/* Karta z licznikiem */}
        <Row className="justify-content-center mt-4">
          <Col md={6}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Obecna wartość licznika: {count}</Card.Title>
                <Button variant="primary" onClick={() => setCount((count) => count + 1)}>
                  Zwiększ licznik
                </Button>
                <p className="mt-3">
                  Edytuj <code>src/App.jsx</code> i zapisz, aby przetestować HMR.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Stopka */}
      <footer className="bg-dark text-white text-center p-3 mt-5">
        <p>© 2024 Moja Aplikacja React. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </>
  );
}

export default App;
