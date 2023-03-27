import React from 'react';
import { useState } from 'react';

export default function Emoji() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 onClick={() => { setCount((cur) => cur + 1) }}>{count >= 10 ? "😎" : "👍"}</h1>
      <h1>{count}</h1>
    </div>
  )
}
