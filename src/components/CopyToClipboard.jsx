import React, { useRef } from "react";

const CopyToClipboard = (props) => {

  const { text, children, fn, backgroundColor, url } = props;
  
  const textArea = useRef();

  const copy = () => {
    if (fn) {
      fn();
    }
    textArea.current.style.display = "block";
    textArea.current.select();
    document.execCommand("copy");
    textArea.current.style.display = "none";
    window.open(url, '_blank').focus();
  };

  return (
    <>
      <button 
        onClick={copy} 
        style={{backgroundColor:backgroundColor, border:`${backgroundColor} solid 1px`}}
      >
        {children}
      </button>
      <textarea readOnly ref={textArea} value={text} style={{ display: "none" }} />
    </>
  );
};

export default CopyToClipboard;
