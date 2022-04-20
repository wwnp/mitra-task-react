import React from 'react'
import { ListItem } from './ListItem';
import { Row } from 'react-bootstrap';

export const List = ({ data, error }) => {
  if (!data || data.length === 0) {
    return error ? <h1 className='text-center mt-5'>{error}</h1> : null;
  }
  return (
    <Row className='mt-4'>
      {
        data.map(item => {
          return (
            <ListItem
              key={item.id}
              url={item.urls.small}
              id={item.id}
            >
            </ListItem>
          )
        })
      }
    </Row>
  )
}
