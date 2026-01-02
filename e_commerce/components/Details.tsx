import { chitarre } from "./chitarre"
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";

function Details() {
    const guitar = useParams()
    const guitarIndex: number = chitarre.findIndex((item) => item.id == guitar.id)

    return(
    <>
        <h2 className="display-4 text-center bg-info border border-3 border-black py-2 my-5">Dettagli <span className="fw-semibold">{chitarre[guitarIndex].nome}</span></h2>
        <Container>
        <Row className="row-cols-1 row-cols-md-3 justify-content-center">
          <Col className='pb-2'>
            <Card className='h-100 shadow'>
              <Card.Img
                variant="top"
                src={chitarre[guitarIndex].immagine}
                className="py-2"
              />
              <Card.Body className="h-100 border border-2 border-black rounded rounded-2 ">
                <Card.Title className='h-25 mb-4'>{chitarre[guitarIndex].nome}</Card.Title>
                <Card.Text>{chitarre[guitarIndex].descrizione}</Card.Text>
                <Card.Text>
                    <span>Price: </span>
                    <span className='price'>€ {chitarre[guitarIndex].prezzo}</span>
                </Card.Text>
              </Card.Body>
                <div className="hstack justify-content-around mt-3 mb-3">
                  {/* <Link to={`/details/${chitarre[guitarIndex].id}`}> */}
                    <Button>Dettagli</Button>
                  {/* </Link> */}
                  <Button>Acquista</Button>
                </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
    )
}

export default Details