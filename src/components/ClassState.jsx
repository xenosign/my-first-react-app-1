import React, { Component } from 'react'

export default class ClassState extends Component {
  // 구버전
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     teacher: "이효석",
  //   }
  // }

  // 신버전
  state = {
    teacher: "이효석",
  }

  render() {
    const { teacher } = this.state;
    return (
      <div>
        <h1>{teacher}</h1>
        <button onClick={() => this.setState({ teacher: 'tetz' })}>영어로!</button>        
      </div>
    )
  }
}
