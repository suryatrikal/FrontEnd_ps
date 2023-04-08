import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
  return (
    <Card style={{ width: '16rem',marginBottom:'5rem',marginTop:'4rem'}}>
      <Card.Img variant="top" src= {props.srcimg} style={{height:'10rem'}} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" href={props.link}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;