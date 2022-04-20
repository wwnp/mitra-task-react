import React from 'react'
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ListItem = ({ url, id }) => {
  return (
    <Col xs={12} md={4} className='mb-5'>
      <Card>
        <Card.Img variant="top" src={url} className={'masonry-img'} width={250} height={550} />
        <Card.ImgOverlay>
          <Card.Title>
            <Link className='btn btn-dark btn-lg' to={`/photos/${id}`}>Подробнее</Link>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    </Col>
  )
}
