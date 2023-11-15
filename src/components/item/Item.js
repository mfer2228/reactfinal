import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, artista, duración }) => {
    return (

    <Card border="info" >
        <Card.Header> {artista} </Card.Header>
        <Card.Body>
          <Card.Title> {nombre} </Card.Title>
          <Card.Text>
            {duración}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary">
          <Link to={`/item/${id}`} className='Option container'>Ver info</Link>
          </Button>
        </Card.Footer>
      </Card>

    )
}

export default Item;