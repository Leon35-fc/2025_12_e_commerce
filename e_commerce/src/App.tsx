import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BsCart4 } from 'react-icons/bs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Products from './components/Products';
import Details from './components/Details';
import Cart from './components/Cart';
import { chitarre, ids } from './components/chitarre';
import { Provider, useSelector } from 'react-redux';
import { store } from './redux/store/index';

chitarre.forEach((guitar, i) => {
  ids.push(Math.random().toString(36).substr(2, 9));
  guitar.id = ids[i];
});

function App() {
  // const cart = useSelector((currentState: any) => {
  //   // console.log(currentState);
  //   return currentState.cart.content
  // })

  const [cart, setCart] = useState(0)

  // let cart: number = 0;

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <h1 className="display-1 text-center fw-semibold text-info border border-2 border-info shadow p-0">
              E-commerce
            </h1>
          </div>
          <Navbar className="bg-body-tertiary shadow sticky-top">
            <Container>
              <Navbar.Brand href="/" className="rounded rounded-2  px-2 p-y1">
                Home
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Nav.Link
                  href="/cart"
                  className="fs-5 hstack rounded rounded-2 px-2 p-y1"
                >
                  Cart <BsCart4 className="fs-4 ms-2" /> <span>{cart}</span>
                </Nav.Link>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/" element={<Products carrello={cart} setCarr={setCart}/>} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
