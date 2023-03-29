import React, { useRef } from 'react';

export default function ExampleRefDom() {
  const divEl = useRef();
  const inputEl = useRef();

  const changeComponentColor = () => {
    divEl.current.style.backgroundColor = inputEl.current.value;
  };

  return (
    <div ref={divEl}>
      <input ref={inputEl} type="text" />
      <button onClick={changeComponentColor}>컴포넌트 색상 적용</button>
    </div>
  );
}
