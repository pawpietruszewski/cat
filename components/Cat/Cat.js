import React, { Component } from 'react';
import {
  Head,
  Background,
  Eye,
  } from './style.js';

class Cat extends Component {

  render() {
    return (
      <>
      <Background>
        <Head>
          <Eye left></Eye>
          <Eye right></Eye>
        </Head>
      </Background>
      </>
    );
  }

}

export default Cat;
