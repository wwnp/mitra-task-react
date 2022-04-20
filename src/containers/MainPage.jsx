import React from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { List } from '../components/List';
import { Row } from 'react-bootstrap';
import { ruleCat } from '../config';
import { SET_CATEGORY_SAGA } from './../redux/constants';

export const MainPage = () => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state?.mainpage?.loading)
  const data = useSelector(state => state?.mainpage.data)
  const category = useSelector(state => state?.mainpage.category)

  const from = ruleCat[category][0]
  const to = ruleCat[category][1]
  const out = data.slice(from, to + 1)
  console.log(out)
  return (
    <Container>
      <Row className='mt-3'>
        <ButtonGroup aria-label="Basic example">
          <Button
            variant="success"
            onClick={() => dispatch({ type: SET_CATEGORY_SAGA, payload: 1 })}
          >
            1 Категория
          </Button>
          <Button
            variant="danger"
            onClick={() => dispatch({ type: SET_CATEGORY_SAGA, payload: 2 })}
          >
            2 Категория
          </Button>
          <Button
            variant="primary"
            onClick={() => dispatch({ type: SET_CATEGORY_SAGA, payload: 3 })}
          >
            3 Категория
          </Button>
          <Button
            variant="warning"
            onClick={() => dispatch({ type: SET_CATEGORY_SAGA, payload: 4 })}
          >
            4 Категория
          </Button>
        </ButtonGroup>

      </Row>
      {
        loading
          ? <h1>Loading...</h1>
          : <List data={out}></List>
      }
    </Container>
  )
}
