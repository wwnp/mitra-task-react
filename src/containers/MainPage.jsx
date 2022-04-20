import React from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { List } from '../components/List';
import { Row } from 'react-bootstrap';

export const MainPage = () => {
  const loading = useSelector(state => state?.mainpage?.loading)
  const data = useSelector(state => state?.mainpage.data)
  return (
    <Container>
      <Row className='mt-3'>
        <ButtonGroup aria-label="Basic example">
          <Button
            variant="success"
          >
            1 Категория
          </Button>
          <Button
            variant="danger"
          >
            2 Категория
          </Button>
          <Button
            variant="primary"
          >
            3 Категория
          </Button>
          <Button
            variant="warning"
          >
            4 Категория
          </Button>
        </ButtonGroup>

      </Row>
      {
        loading
          ? <h1>Loading...</h1>
          : <List data={data}></List>
      }
    </Container>
  )
}
