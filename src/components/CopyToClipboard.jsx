import React, { useRef } from "react";

const CopyToClipboard = ({ text, children, fn, backgroundColor }) => {
  
  const textArea = useRef();

  const copy = () => {
    if (fn) {
      fn();
    }
    textArea.current.style.display = "block";
    textArea.current.select();
    document.execCommand("copy");
    textArea.current.style.display = "none";
    alert("Données copiées")
  };

  return (
    <>
      <button onClick={copy} style={{backgroundColor:backgroundColor, border:`${backgroundColor} solid 1px`}}>{children}</button>
      <textarea readOnly ref={textArea} value={text} style={{ display: "none" }} />
    </>
  );
};

export default CopyToClipboard;
