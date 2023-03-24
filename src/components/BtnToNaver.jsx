import { Component } from "react";
const addr = "https://naver.com";

class BtnToNaver extends Component {
  render() {
    return (
      <a href={addr}>네이버로 가자</a>
    )
  }
}

// function BtnToNaver() {
//   const addr = "https://naver.com";

//   return (
//     <a href={addr}>네이버로 가자</a>
//   )
// }

export default BtnToNaver;