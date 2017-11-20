import React from 'react';
import AccountsUI from '../AccountsUI.jsx';
import { Accounts } from 'meteor/accounts-base';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/main-layout.css';
import { Container, Col, Row } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
Accounts.ui.config({
  passwordSignupFields:'USERNAME_ONLY'
})


export const MainLayout = ({content}) => (
  <div>
    <header className='header'>
      <Container>
        <Row>

              <Col lg='4'>
                <a href = '/'><img src = '/images/mortarboard.png' /></a>
              </Col>
              <Col lg='4' />
              <Col lg='4'>
                <div className='header__wrapper'>
                  <div className='header__menu'>
                    <a className='header__link' href = "/videos/">My Videos</a>
                    <FontAwesome
                      name='user'
                    />
                    <AccountsUI />
                  </div>
                </div>
              </Col>


        </Row>
      </Container>
    </header>
    <main className='content'>

      {content}
    </main>
  </div>
)
