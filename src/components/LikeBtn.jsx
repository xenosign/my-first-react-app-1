import React, {useState} from 'react'



// 참고하면 좋을 풀이
export default function LikeBtn() {
  const emojStyle = {fontSize:"100px", cursor: 'pointer'};
  const [emoj, setEmoj] = useState("☹");
  const [cnt, setCnt] = useState(0);
  const changeEmoj = () => {
    // if (cnt > 20) {
    //   setEmoj("👾");
    // } else if (cnt > 10 && cnt <= 20) {
    //   setEmoj("☺");
    // }
    if (cnt === 10) {
      setEmoj("☺");
    } else if (cnt === 20) {
      setEmoj("👾");
    }
  } 
  return (
    <>
      <p style={emojStyle} onClick={() => {
        setCnt(cnt+1);
        changeEmoj();
        console.log(cnt);
        }}>{emoj}</p>
      <p>{cnt}</p>
    </>
  )
}