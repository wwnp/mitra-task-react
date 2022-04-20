import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const MainPage = () => {
  return (
    <Container>
      <Row className='mt-2 justify-content-center'>
        <Col xs={12} md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png" />
            <Card.ImgOverlay>
              <Card.Title>
                <Link className='btn btn-success' to='/test'>Подробнее</Link>
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
