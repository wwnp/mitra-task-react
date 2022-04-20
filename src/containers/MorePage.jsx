import React from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Download } from '../components/Download';
import { Heart } from './../components/Heart';
import { useHistory } from "react-router-dom";

export const MorePage = (props) => {
  const { id } = useParams()
  const data = useSelector(state => state?.mainpage.data)
  const out = data.find(i => i.id === id)
  const { description, created_at, downloads, likes } = out
  let history = useHistory();
  return (
    <Container>
      <Row className='justify-content-center mt-3'>
        <Col xs={12} md={4}>
          <Card className='card'>
            <Card.Img variant="top" src={out.urls.small} width={250} height={400} />
            <Card.Body className='text-dark'>
              <Card.Title>{description}</Card.Title>
              <hr />
              {created_at && <p>{created_at}</p>}
              {downloads && <Download downloads={downloads}></Download>}
              {likes && <Heart likes={likes}></Heart>}
              <div className='d-flex justify-content-end'>
                <Button
                  variant='warning' className='float-right'
                  onClick={() => history.push('/mitra-task-react/')}
                >
                  Назад
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
