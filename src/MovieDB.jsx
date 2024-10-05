import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from 'react-bootstrap/Card';
import YouTube from 'react-youtube';

const App = () => {
  let [api, setApi] = useState([]);
  let [search, setSearch] = useState('');
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?&api_key=9edd9f02605ba5cd665dacc891acabe1&language=en-US'
    )
      .then((res) => res.json())
      .then((x) => setApi(x.results))
      .catch((error) => console.error('Error fetching data: Error', error));
  }, []);
  console.log(api);

  function movieSearch() {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=9edd9f02605ba5cd665dacc891acabe1`
    )
      .then((res) => res.json())
      .then((x) => setApi(x.results))
      .catch((error) => console.error('Error fetching data: Error', error));
  }

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button variant="outline-success" onClick={movieSearch}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Carousel>
          {api.map((x, y) => {
            return (
              <div key={y}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${x.backdrop_path}`}
                  alt={x.title}
                />
                <p>{x.title}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
      >
        {api.map((x, y) => {
          return (
            <div key={y}>
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/original/${x.poster_path}`}
                />
                <Card.Body>
                  <Card.Title>{x.title}</Card.Title>
                  <Card.Text>{x.overview}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => navigate('/partmovie', { state: { cards } })}
                  >
                    Know more
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;

// return type of state is null
