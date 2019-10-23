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
  Tounge,
  } from './style.js';

class Cat extends Component {
  constructor(props) {
      super(props);
      this.state = {
          showTangue: false,
      };
  }

  handleMouseEnter(e) {
    console.log('onMouseEnter', e.clientX, e.clientY);
    this.setState({
        showTangue: true,
    });
  }

  handleMouseLeave(e) {
    console.log('onMouseEnter', e.clientX, e.clientY);
    this.setState({
        showTangue: false,
    });
  }

  render() {
    console.log(this.state.showTangue);
    return (
      <>
      <Background>
        <Head onMouseLeave={(e) => this.handleMouseLeave(e)} onMouseEnter={(e) => this.handleMouseEnter(e)}>
          <Ear left></Ear>
          <Ear right></Ear>
          <Eye left><Pupil><EyeBlink></EyeBlink></Pupil></Eye>
          <Eye right><Pupil><EyeBlink></EyeBlink></Pupil></Eye>
          <Nose></Nose>
          <Mouth><Lip left></Lip><Lip right></Lip><Tounge showTangue={this.state.showTangue}></Tounge></Mouth>
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
