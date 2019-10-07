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
  Pupil,
  } from './style.js';

class Cat extends Component {

  render() {
    return (
      <>
      <Background>
        <Head className="animateee">
          <Ear left></Ear>
          <Ear right></Ear>
          <Eye left><Pupil><EyeBlink></EyeBlink></Pupil></Eye>
          <Eye right><Pupil><EyeBlink></EyeBlink></Pupil></Eye>
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
