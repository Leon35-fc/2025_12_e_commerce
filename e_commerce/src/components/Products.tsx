import { chitarre } from './chitarre';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Products(carrello: number, setCarr: any) {
    console.log(chitarre);

    let cart = carrello.carrello

    console.log('Carrello', cart);
    
    const handleCart = () => {setCarr(...cart, cart++)}
    
  return (
    <>
      <h2 className="display-4 text-center bg-info border border-3 border-black py-2 my-5">
        Pagina prodotti
      </h2>
      <Container className='bg-info rounded rounded-2 shadow py-2 my-5'>
        <Row className="row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 flex-wrap">
          {chitarre.map((chitarra) => (
          <Col key={chitarra.id} className='pb-2'>
            <Card className='shadow h-100'>
              <Card.Img
                variant="top"
                src={chitarra.immagine}
                className="py-2"
              />
              <Card.Body className="border border-2 border-black rounded rounded-2 vstack justify-content-between">
                <Card.Title className='h-25 mb-4'>{chitarra.nome} </Card.Title>
                <Card.Text>{chitarra.descrizione}</Card.Text>
                <Card.Text>
                    <span>Price: </span>
                    <span className='price'>€ {chitarra.prezzo}</span>
                </Card.Text>
              </Card.Body>
                <div className="hstack justify-content-around mt-3 mb-3">
                  <Link to={`/details/${chitarra.id}`}>
                    <Button>Dettagli</Button>
                  </Link>
                  <Button onClick={() => {
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    handleCart++
                    console.log('Prodotto aggiunto da Products', cart)}}>Acquista</Button>
                </div>
            </Card>
          </Col>))}
        </Row>
      </Container>
    </>
  );
}

export default Products;
