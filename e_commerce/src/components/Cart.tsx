import { Container, Row } from "react-bootstrap"
import { chitarre } from "./chitarre";

function Cart() {
    
    return(
    <>
        <h2 className="display-4 text-center bg-info border border-3 border-black py-2 my-5">Carrello</h2>
        <Container className='bg-info rounded rounded-2 shadow py-2 my-5'>
        <Row className="row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 align-items-center justify-content-between">
        <p> </p>
        <p>Articolo</p>
        <p>Prezzo</p>
        <p>Quantità</p>
        </Row>
        <Row className="row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 align-items-center ">
            <img src={chitarre[7].immagine} alt={chitarre[7].nome}/>
            <p>{chitarre[7].nome}</p>
            <p>{chitarre[7].prezzo}</p>
            <p>{chitarre[7].brand}</p>
        </Row>
            <hr />
        </Container>
    </>
    )
}

export default Cart;