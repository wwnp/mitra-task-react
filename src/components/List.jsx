import React from 'react'
import { ListItem } from './ListItem';
import { Row } from 'react-bootstrap';

export const List = ({ data }) => {
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
