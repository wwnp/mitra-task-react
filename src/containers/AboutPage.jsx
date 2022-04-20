import React from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import avatar from '../assets/GITHUB.jpg'
import { generateRandNum } from '../auxiliary';
import { MyBadge } from '../components/MyBadge';
import { colorsBadge, stackTech } from '../config';

export const AboutPage = () => {
  return (
    <Container>
      <Row className='mt-3 bg-white text-dark p-2 rounded mb-0' >
        <Col xs={12} md={4} className='border-right border-dark'>
          <img src={avatar} alt="avatar" width={'350px'} />
        </Col>
        <Col xs={12} md={8}>
          <h2 className='text-center pb-3 border-bottom border-secondary'>Гилёв Сергей Александрович</h2>
          <h5 className='pt-2 text-center'>Контакты:</h5>
          <div className='AboutPage__flex '>
            <div className='AboutPage__address'>
              <address>
                <a className='AboutPage__link btn btn-outline-secondary text-dark ' href="tel:+79181908996"> +7 (918) 190 89 96</a>
              </address>
            </div>
            <div className='AboutPage__address'>
              <address>

                <a
                  className='AboutPage__link btn btn-outline-primary text-dark '
                  href="mailto: serhiogilev@gmail.com"
                  type='email'
                  onClick={(e) => { e.preventDefault() }}
                >
                  serhiogilev@gmail.com
                </a>
              </address>
            </div>
            <div className='AboutPage__address'>
              <address>
                <a className='AboutPage__link btn btn-outline-warning text-dark' href="https://github.com/wwnp">GitHub</a>
              </address>
            </div>
            <div className='AboutPage__address'>
              <address>
                <a className='AboutPage__link btn btn-outline-info text-dark' href="https://t.me/wwnp0">Telegram</a>
              </address>
            </div>
            <div className='AboutPage__address'>
              <address>
                <a className='AboutPage__link btn btn-outline-success text-dark' href="https://wa.me/79181908996">WhatsUp</a>
              </address>
            </div>
            <div className='AboutPage__address'>
              <address>
                <a className='AboutPage__link btn btn-outline-danger text-dark' href="https://krasnodar.hh.ru/resume/e958213aff09d3ce9a0039ed1f724654675655">HeadHunter</a>
              </address>
            </div>

          </div>
          <div>
            <h5 className='pt-2 text-center pb-1 border-top border-secondary'>Стэк освоенных технологий:</h5>
            <div className="AboutPage__BadgeContainer">
              {
                stackTech.map((tech, index) => {
                  return (
                    <MyBadge
                      key={index + generateRandNum(0, 1000)}
                      color={colorsBadge[generateRandNum(0, colorsBadge.length - 1)]}
                      text={tech}
                    >
                    </MyBadge>
                  )
                })
              }
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
