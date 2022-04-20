import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { SET_MENU_SAGA } from '../redux/constants';
import { Close } from './Close';
import avatar from '../assets/GITHUB.jpg'

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
              to='/mitra-task-react'
              activeClassName="active-side"
              className='side-a mt-2'
              onClick={() => dispatch({ type: SET_MENU_SAGA, payload: !menu })}
            >
              Галерея
            </NavLink>
          </li>
          <li className='border bottom '>
            <NavLink
              exact
              to='/mitra-task-react/about'
              activeClassName="active-side"
              onClick={() => dispatch({ type: SET_MENU_SAGA, payload: !menu })}
              className='side-a'
            >
              Обо мне
            </NavLink>
          </li>
          <li className='mt-2 text-center'>
            <img src={avatar} alt="avatar" width={'100%'} />
            <h4 className='text-dark '>Сергей Гилёв</h4>
            <address>
              <a
                className='btn btn-outline-secondary text-dark'
                href="mailto: serhiogilev@gmail.com"
                type='email'
                onClick={(e) => {
                  e.preventDefault()
                }}
              >
                serhiogilev@gmail.com
              </a>
            </address>
          </li>
        </ul>
      </nav>
    </>
  )
}
