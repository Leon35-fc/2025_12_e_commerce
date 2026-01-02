import './App.css';
// import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCart4 } from "react-icons/bs";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Products from '../components/Products'
import Details from '../components/Details'
import Cart from '../components/Cart'
import { chitarre, ids } from '../components/chitarre';


chitarre.forEach((guitar, i) => {
  ids.push(Math.random().toString(36).substr(2, 9))
  guitar.id = ids[i]
})

function App() {
  return (
    <>
      <BrowserRouter>
        <h1 className="display-1 text-center fw-semibold text-info border border-2 border-info shadow p-0">
          E-commerce
        </h1>
        <Navbar className="bg-body-tertiary shadow sticky-top">
          <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link href='/cart' className='fw-semibold'>
                Cart <BsCart4/>
              </Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path='/' element={<Products/>} />
          <Route path='/details/:id' element={<Details/>} />
          <Route path='/cart' element={<Cart/>} />
          {/* <Products/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;