import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { SET_MENU_SAGA } from '../redux/constants';
import { Close } from './Close';

export const Drawer = props => {
  const menu = useSelector(state => state?.mainpage.menu)
  const dispatch = useDispatch()
  const cls = [
    'Drawer',
    menu ? null : 'close'
  ]
  return (
    <>
      <nav className={cls.join(' ')}>
        <ul>
          <li className='text-end text-dark '>
            <Close
              color='black'
              size='24px'
              onClick={() => dispatch({ type: SET_MENU_SAGA, payload: !menu })}
            >
            </Close>
          </li>
          <li>
            <NavLink
              exact
              to='/'
              activeClassName="active-side"
              className='side-a mt-2'
              onClick={() => dispatch({ type: SET_MENU_SAGA, payload: !menu })}
            >
              Main Page
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/about'
              activeClassName="active-side"
              onClick={() => dispatch({ type: SET_MENU_SAGA, payload: !menu })}
              className='side-a'
            >
              About Me
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}
