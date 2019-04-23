import React, { Component } from 'react';
import {
  Head,
  Background,
  Eye,
  Ear,
  EyeBlink,
  Nose,
  Mouth,
  Lip,
  Whisker,
  } from './style.js';

class Cat extends Component {

  render() {
    return (
      <>
      <Background>
        <Head>
          <Ear left></Ear>
          <Ear right></Ear>
          <Eye left><EyeBlink></EyeBlink></Eye>
          <Eye right><EyeBlink></EyeBlink></Eye>
          <Nose></Nose>
          <Mouth><Lip left></Lip><Lip right></Lip></Mouth>
          <Whisker first></Whisker>
          <Whisker second></Whisker>
          <Whisker third></Whisker>
        </Head>
      </Background>
      </>
    );
  }

}

export default Cat;
