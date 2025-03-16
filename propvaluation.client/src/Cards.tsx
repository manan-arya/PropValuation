//import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
//import { Card, CardGroup } from 'react-bootstrap';

//function Cards() {
//    return (
//        <CardGroup>
//            <Card>
//                <Card.Img variant="top" src="https://via.placeholder.com/150" />
//                <Card.Body>
//                    <Card.Title>Card Title 1</Card.Title>
//                    <Card.Text>
//                        This is a card with supporting text below as a natural lead-in to additional content.
//                    </Card.Text>
//                </Card.Body>
//            </Card>
//            <Card>
//                <Card.Img variant="top" src="https://via.placeholder.com/150" />
//                <Card.Body>
//                    <Card.Title>Card Title 2</Card.Title>
//                    <Card.Text>
//                        This is another card with supporting text below as a natural lead-in to additional content.
//                    </Card.Text>
//                </Card.Body>
//            </Card>
//            <Card>
//                <Card.Img variant="top" src="https://via.placeholder.com/150" />
//                <Card.Body>
//                    <Card.Title>Card Title 3</Card.Title>
//                    <Card.Text>
//                        This is a third card with supporting text below as a natural lead-in to additional content.
//                    </Card.Text>
//                </Card.Body>
//            </Card>
//        </CardGroup>
//    );
//}
//export default Cards;


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Card, CardGroup, Row, Col } from 'react-bootstrap';
import cardsData from './cardsData.json';

function Cards() {
    return (
        <CardGroup>
            <Row>
                {cardsData.map((card, index) => (
                    <Col key={index} xs={12} sm={6} md={4}>
                        <Card>
                            <Card.Img variant="top" src={card.image} />
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>{card.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </CardGroup>
    );
}

export default Cards;
